
const APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbxENUBm5pd966tRn1g9R7HH0zSXcEI10LGLivzQzN0pn6b0ytZHJdV8HU9i0ihYtHJW/exec";
const questions=window.BLOCK_QUESTIONS;
function randomize(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function newRunId(){return 'b11-'+Date.now().toString(36)+'-'+(globalThis.crypto?.randomUUID?.()||Math.random().toString(36).slice(2));}
function freshState(){return {trackingVersion:2,runId:newRunId(),runCreatedAt:new Date().toISOString(),revision:0,order:[],choiceOrders:{},answers:{},mastered:{},attempts:{},firstAttempts:{},wrongTotal:0,correctChecks:0,currentIndex:0,firstStart:null,sessions:0,activeSeconds:0,awaySeconds:0,tabLeaves:0,events:[],questionSeconds:{},lastTick:Date.now(),status:'in progress'};}
function initOrder(){if(!state.order.length)state.order=randomize(questions.map(q=>q.id));for(const q of questions)if(!state.choiceOrders[q.id])state.choiceOrders[q.id]=randomize([0,1,2,3]);}
function resetAssignment(){
 if(!valid(true))return;
 if(!confirm('Start a new randomized run? Your previous verified run remains in the teacher history.'))return;
 clearTimeout(saveTimer);clearTimeout(advanceTimer);advanceTimer=null;started=false;
 localStorage.setItem(storageKey()+'|resetAt',new Date().toISOString());localStorage.removeItem(storageKey());
 state=freshState();loadedEmail=student().email;initOrder();saveLocal();
 $('completion').classList.add('hidden');$('workspace').classList.add('hidden');$('studentPanel').classList.remove('hidden');$('submitBtn').disabled=false;$('submitStatus').textContent='';
 $('saveStatus').textContent='New run created. Select Start / Continue.';
}
const C=window.BLOCK_CONFIG;
const $=id=>document.getElementById(id);
let state=freshState(),saveTimer=null,advanceTimer=null,started=false,loadedEmail='';

function init(){
  $("pageTitle").textContent=C.title;$("pageDescription").textContent=C.description;$("practiceText").textContent=C.practice;
  $('resetBtn').onclick=resetAssignment;$('resetWorkBtn').onclick=resetAssignment;$('completionResetBtn').onclick=resetAssignment;$('saveWorkBtn').onclick=()=>cloudSave(true);
  window.addEventListener('pagehide',()=>{if(valid(false)&&state.firstStart){saveLocal();navigator.sendBeacon?.(APPS_SCRIPT_URL,new URLSearchParams({action:'save',payload:JSON.stringify(payload())}));}});
  setInterval(()=>{if(started)queueCloudSave()},15000);
  $("startBtn").onclick=start;$("loadBtn").onclick=loadCloud;$("saveBtn").onclick=()=>cloudSave(true);$("submitBtn").onclick=submit;
  ["studentName","email"].forEach(id=>$(id).addEventListener("change",restoreLocal));$("period").addEventListener("change",saveLocal);
  document.addEventListener("visibilitychange",()=>{tick();if(document.hidden)state.tabLeaves++;state.events.push({type:document.hidden?"leave":"return",at:new Date().toISOString()})});
  document.addEventListener("copy",()=>state.events.push({type:"copy",question:currentQuestion()?.id||"",at:new Date().toISOString()}));
  document.addEventListener("paste",()=>state.events.push({type:"paste",question:currentQuestion()?.id||"",at:new Date().toISOString()}));
  setInterval(()=>{tick();updateStats();if(started)saveLocal()},1000);
}
function student(){return{name:$("studentName").value.trim(),period:$("period").value,email:$("email").value.trim().toLowerCase()}}
function valid(show=true){const s=student(),ok=s.name&&s.period&&/^\S+@\S+\.\S+$/.test(s.email);if(!ok&&show)$("saveStatus").textContent="Enter full name, period, and a valid school email first.";return ok}
function storageKey(){return `${C.assignmentKey}|${student().email}`}
function start(){if(!valid(true))return;restoreLocal();initOrder();state.firstStart=state.firstStart||new Date().toISOString();started=true;state.lastTick=Date.now();state.sessions=Math.max(0,state.sessions||0)+1;$("studentPanel").classList.add("hidden");$("workspace").classList.remove("hidden");goToFirstUnmastered();renderQuestion();updateStats();queueCloudSave()}
function currentQuestion(){return questions.find(q=>q.id===state.order[state.currentIndex])}
function goToFirstUnmastered(){const i=state.order.findIndex(id=>!state.mastered[id]);state.currentIndex=i<0?questions.length:i}
function renderQuestion(){
  if(state.currentIndex>=questions.length){showCompletion();return}
  const q=currentQuestion(),n=state.currentIndex+1,letters=["A","B","C","D"],order=state.choiceOrders[q.id];
  $("questionCard").innerHTML=`<h2>${escapeHtml(q.cs)} • Question ${n} of ${questions.length}</h2><p class="prompt">${escapeHtml(q.prompt)}</p><div class="choices">${order.map((original,i)=>`<button class="choice" data-choice="${original}"><span class="choice-letter">${letters[i]}.</span><span>${escapeHtml(q.choices[original])}</span></button>`).join("")}</div><div id="feedback" class="feedback" role="status"></div>${q.source?`<div class="source-box"><a href="${q.source}" target="_blank" rel="noopener">${escapeHtml(q.sourceTitle||"Supporting source")} ↗</a><p><strong>Where to look:</strong> ${escapeHtml(q.where)}</p></div>`:""}`;
  document.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>answer(Number(b.dataset.choice),b));
  updateStats();window.scrollTo({top:Math.max(0,$("workspace").offsetTop-12),behavior:"smooth"});
}
function answer(choice,button){
  if(advanceTimer||!currentQuestion()||state.mastered[currentQuestion().id])return;const q=currentQuestion(),f=$("feedback");state.answers[q.id]=choice;state.attempts[q.id]=(state.attempts[q.id]||0)+1;if(state.firstAttempts[q.id]===undefined)state.firstAttempts[q.id]=choice===q.answer;
  if(choice===q.answer){
    state.correctChecks++;state.mastered[q.id]=true;button.classList.add("correct");document.querySelectorAll("[data-choice]").forEach(b=>b.disabled=true);
    f.className="feedback good";f.innerHTML=`<strong>Correct.</strong> ${escapeHtml(q.explanation)}<span class="advance-note">Advancing to the next question…</span>`;
    state.events.push({type:"correct",question:q.id,attempt:state.attempts[q.id],at:new Date().toISOString()});saveLocal();updateStats();queueCloudSave();
    advanceTimer=setTimeout(()=>{advanceTimer=null;state.currentIndex++;while(state.currentIndex<questions.length&&state.mastered[state.order[state.currentIndex]])state.currentIndex++;renderQuestion()},4000);
  }else{
    state.wrongTotal++;button.classList.add("wrong");setTimeout(()=>button.classList.remove("wrong"),550);f.className="feedback bad";f.innerHTML=`<strong>Not yet.</strong> ${escapeHtml(q.hint)}`;
    state.events.push({type:"wrong",question:q.id,choice,at:new Date().toISOString()});saveLocal();updateStats();queueCloudSave();
  }
}
function updateStats(){const mastered=questions.filter(q=>state.mastered[q.id]).length,attempts=Object.values(state.attempts).reduce((a,b)=>a+(Number(b)||0),0),accuracy=attempts?Math.round(mastered/attempts*100):100;$("progressStat").textContent=`${Math.min(mastered+1,questions.length)} / ${questions.length}`;$("accuracyStat").textContent=`${accuracy}%`;$("runtimeStat").textContent=formatTime(state.activeSeconds)}
function formatTime(s){s=Math.max(0,Math.floor(s||0));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),sec=s%60;return h?`${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`:`${m}:${String(sec).padStart(2,"0")}`}
function tick(){const now=Date.now(),sec=Math.min(15,Math.max(0,(now-state.lastTick)/1000));if(started){if(document.hidden)state.awaySeconds+=sec;else state.activeSeconds+=sec;const q=currentQuestion();if(q&&!document.hidden)state.questionSeconds[q.id]=(state.questionSeconds[q.id]||0)+sec}state.lastTick=now}
function showCompletion(){tick();started=false;state.status=state.submittedAt?"submitted":"completed";state.completedAt=state.completedAt||new Date().toISOString();$("workspace").classList.add("hidden");$("completion").classList.remove("hidden");const attempts=Object.values(state.attempts).reduce((a,b)=>a+(Number(b)||0),0),first=Object.values(state.firstAttempts).filter(Boolean).length,accuracy=Math.round(first/questions.length*100);$("completionSummary").innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:18px 0"><div style="padding:20px;border:2px solid #6cb6ff;border-radius:12px"><small>STUDENT NAME</small><div style="font-size:1.7rem;font-weight:900">${escapeHtml(student().name)}</div></div><div style="padding:20px;border:2px solid ${attempts>50?'#ff7777':'#6cb6ff'};border-radius:12px"><small>TOTAL ATTEMPTS</small><div style="font-size:2.5rem;font-weight:900">${attempts}</div><strong>${attempts>50?'REDO REQUIRED — OVER 50':'WITHIN 50-ATTEMPT LIMIT'}</strong></div></div><p>${escapeHtml(C.title)}</p><p>Period ${escapeHtml(student().period)} • ${escapeHtml(student().email)}</p><p>Run ID: ${escapeHtml(state.runId)}</p><p>Started: ${new Date(state.firstStart).toLocaleString()} • Completed: ${new Date(state.completedAt).toLocaleString()}</p><p>Incorrect attempts: ${state.wrongTotal} • First attempt: ${first}/${questions.length} (${accuracy}%) • Mastery: ${questions.length}/${questions.length} (100%) • Active: ${formatTime(state.activeSeconds)}</p>`;saveLocal();queueCloudSave()}
function payload(){tick();const mastered=questions.filter(q=>state.mastered[q.id]).length;return{trackingVersion:2,runId:state.runId,action:"save",assignmentKey:C.assignmentKey,assignmentTitle:C.title,course:"American Studies",student:student(),status:state.status,startedAt:state.firstStart,completedAt:state.completedAt||"",submittedAt:state.submittedAt||"",state:JSON.parse(JSON.stringify(state)),answers:{...state.answers},mastered:{...state.mastered},score:mastered,total:questions.length,percent:Math.round(mastered/questions.length*100),answerCount:Object.keys(state.answers).length,copyCount:state.events.filter(e=>e.type==="copy").length,pasteCount:state.events.filter(e=>e.type==="paste").length,questionCopyPaste:Object.fromEntries(questions.map(q=>[q.id,{copies:state.events.filter(e=>e.type==="copy"&&e.question===q.id).length,pastes:state.events.filter(e=>e.type==="paste"&&e.question===q.id).length}])),totalAttempts:Object.values(state.attempts).reduce((a,b)=>a+(Number(b)||0),0),wrongAttempts:state.wrongTotal,firstAttemptCorrect:Object.values(state.firstAttempts).filter(Boolean).length,updatedAt:new Date().toISOString()}}
function saveLocal(){if(!student().email)return;state.revision++;localStorage.setItem(storageKey(),JSON.stringify(payload()))}
function restoreLocal(){
 if(!student().email)return;
 if(loadedEmail!==student().email){state=freshState();loadedEmail=student().email;}
 const raw=localStorage.getItem(storageKey());if(!raw)return;
 try{if(mergeDraft(JSON.parse(raw)))$('saveStatus').textContent='Saved run restored.';}catch{}
}
function mergeDraft(d){
 if(!d)return false;const z=d.state||d;
 if(z.trackingVersion!==2||!z.runId||!z.order?.length){$('saveStatus').textContent='Old-format draft cannot be verified. Begin a new run.';return false;}
 const resetAt=localStorage.getItem(storageKey()+'|resetAt');if(resetAt&&Date.parse(z.runCreatedAt||0)<Date.parse(resetAt))return false;
 if(state.order.length){
  if(z.runId===state.runId&&Number(z.revision||0)<=Number(state.revision||0))return false;
  if(z.runId!==state.runId&&Date.parse(z.runCreatedAt||0)<=Date.parse(state.runCreatedAt||0))return false;
 }
 state=JSON.parse(JSON.stringify(z));state.lastTick=Date.now();loadedEmail=student().email;initOrder();goToFirstUnmastered();return true;
}
function queueCloudSave(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>cloudSave(false),750)}
async function cloudSave(manual){if(!valid(false)||APPS_SCRIPT_URL.startsWith("PASTE_")){if(manual)$("saveStatus").textContent=APPS_SCRIPT_URL.startsWith("PASTE_")?"Saved on this device. Add the Apps Script web-app URL for teacher saving.":"Enter complete student information first.";return}saveLocal();try{await fetch(APPS_SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({action:"save",payload:JSON.stringify(payload())})});$("saveStatus").textContent="Saved locally; teacher delivery attempted (not independently confirmed)."}catch{$("saveStatus").textContent="Saved on this device. Teacher save could not be confirmed."}}
function loadCloud(){if(!valid(true)||APPS_SCRIPT_URL.startsWith("PASTE_")){if(APPS_SCRIPT_URL.startsWith("PASTE_"))$("saveStatus").textContent="Add the Apps Script web-app URL before loading teacher drafts.";return}const cb=`load_${Date.now()}`,script=document.createElement("script");window[cb]=r=>{try{if(r&&r.found)mergeDraft(r.payload);saveLocal();$("saveStatus").textContent=r&&r.found?"Previous work merged safely.":"No teacher draft was found."}finally{delete window[cb];script.remove()}};script.src=`${APPS_SCRIPT_URL}?action=load&assignmentKey=${encodeURIComponent(C.assignmentKey)}&email=${encodeURIComponent(student().email)}&callback=${cb}`;script.onerror=()=>{$("saveStatus").textContent="Could not load the teacher draft.";delete window[cb];script.remove()};document.body.appendChild(script)}
async function submit(){if(!valid(true)||questions.some(q=>!state.mastered[q.id]))return;state.status="submitted";state.submittedAt=state.submittedAt||new Date().toISOString();await cloudSave(true);$("submitStatus").textContent="Submission saved locally; delivery attempted. Confirm receipt in the teacher spreadsheet.";$("submitBtn").disabled=true}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
init();

