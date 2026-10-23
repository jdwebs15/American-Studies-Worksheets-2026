const APPS_SCRIPT_URL='https://script.google.com/macros/s/AKfycbxENUBm5pd966tRn1g9R7HH0zSXcEI10LGLivzQzN0pn6b0ytZHJdV8HU9i0ihYtHJW/exec';
const C=window.BLOCK_CONFIG,Q=window.BLOCK_QUESTIONS,$=id=>document.getElementById(id);
const fresh=()=>({answers:{},mastered:{},attempts:{},firstAttempts:{},wrongTotal:0,correctChecks:0,currentIndex:0,firstStart:new Date().toISOString(),sessions:0,activeSeconds:0,awaySeconds:0,tabLeaves:0,events:[],questionSeconds:{},lastTick:Date.now(),status:'in progress'});
let state=fresh(),started=false,saveTimer=null,advanceTimer=null,locked=false;
function student(){return {name:$('studentName').value.trim(),period:$('period').value,email:$('email').value.trim().toLowerCase()}}
function valid(){const s=student();if(!s.name||!s.period||!/^\S+@\S+\.\S+$/.test(s.email)){$('saveStatus').textContent='Enter full name, period, and valid school email.';return false}return true}
function key(){return C.assignmentKey+'|'+student().email}
function count(){return Object.values(state.attempts).reduce((a,b)=>a+Number(b||0),0)}
function mastered(){return Q.filter(q=>state.mastered[q.id]).length}
function fmt(s){s=Math.floor(s||0);return `${Math.floor(s/3600)}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
function tick(){const n=Date.now(),sec=Math.max(0,Math.min(15,(n-state.lastTick)/1000));if(started){if(document.hidden)state.awaySeconds+=sec;else state.activeSeconds+=sec;const q=Q[state.currentIndex];if(q&&!document.hidden)state.questionSeconds[q.id]=(state.questionSeconds[q.id]||0)+sec}state.lastTick=n}
function payload(){tick();return {assignmentKey:C.assignmentKey,assignmentTitle:C.title,course:'American Studies',student:student(),state:{...state},answers:{...state.answers},mastered:{...state.mastered},score:mastered(),total:Q.length,percent:Math.round(mastered()/Q.length*100),answerCount:Object.keys(state.answers).length,totalAttempts:count(),wrongAttempts:state.wrongTotal,firstAttemptCorrect:Object.values(state.firstAttempts).filter(Boolean).length,updatedAt:new Date().toISOString()}}
function saveLocal(){if(student().email)localStorage.setItem(key(),JSON.stringify(payload()))}
function restore(d){if(!d)return;const resetAt=localStorage.getItem(key()+'|resetAt');if(resetAt&&Date.parse(d.updatedAt||0)<Date.parse(resetAt))return;const s=d.state||d;for(const prop of ['answers','mastered','attempts','firstAttempts','questionSeconds'])state[prop]={...state[prop],...(s[prop]||{})};for(const prop of ['wrongTotal','correctChecks','activeSeconds','awaySeconds','tabLeaves','sessions'])state[prop]=Math.max(state[prop]||0,Number(s[prop])||0);state.firstStart=s.firstStart||state.firstStart;state.completedAt=s.completedAt||state.completedAt;state.submittedAt=s.submittedAt||state.submittedAt;state.status=s.status||state.status;state.events=(s.events||[]).slice(-500);firstOpen()}
function localLoad(){try{const d=JSON.parse(localStorage.getItem(key())||'null');restore(d);return !!d}catch{return false}}
function firstOpen(){const i=Q.findIndex(q=>!state.mastered[q.id]);state.currentIndex=i<0?Q.length:i}
function stats(){$('progressStat').textContent=`${mastered()} / ${Q.length} mastered`;$('accuracyStat').textContent=(count()?Math.round(mastered()/count()*100):100)+'%';$('runtimeStat').textContent=fmt(state.activeSeconds)}
function showQuestion(){if(mastered()===Q.length){complete();return}const q=Q[state.currentIndex];if(!q){firstOpen();return showQuestion()}const el=$('questionCard');el.replaceChildren();const title=document.createElement('h2');title.textContent=`Question ${state.currentIndex+1} • ${q.cs} • ${q.topic}`;el.append(title);const p=document.createElement('p');p.className='prompt';p.textContent=q.prompt;el.append(p);const choices=document.createElement('div');choices.className='choices';q.choices.forEach((c,i)=>{const b=document.createElement('button');b.className='choice';b.textContent='ABCD'[i]+'.  '+c;b.onclick=()=>answer(i,b);choices.append(b)});el.append(choices);const feedback=document.createElement('div');feedback.className='feedback';feedback.id='feedback';feedback.setAttribute('role','status');el.append(feedback);const source=document.createElement('div');source.className='source-box';const a=document.createElement('a');a.href=q.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Open supporting historical source ↗';const where=document.createElement('p');where.textContent='Where to look: '+q.where;source.append(a,where);el.append(source);stats()}
function answer(i,b){if(locked)return;const q=Q[state.currentIndex];state.answers[q.id]=i;state.attempts[q.id]=(state.attempts[q.id]||0)+1;if(state.firstAttempts[q.id]===undefined)state.firstAttempts[q.id]=(i===q.answer);const f=$('feedback');if(i===q.answer){locked=true;state.correctChecks++;state.mastered[q.id]=true;b.classList.add('correct');document.querySelectorAll('.choice').forEach(x=>x.disabled=true);f.className='feedback good';f.textContent='Correct. '+q.explanation+' Advancing…';state.events.push({type:'correct',question:q.id,at:new Date().toISOString()});saveLocal();queueSave();advanceTimer=setTimeout(()=>{advanceTimer=null;locked=false;firstOpen();showQuestion()},1800)}else{state.wrongTotal++;b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),600);f.className='feedback bad';f.textContent='Not yet. Hint: '+q.hint;state.events.push({type:'wrong',question:q.id,choice:i,at:new Date().toISOString()});saveLocal();queueSave()}stats()}
function queueSave(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>cloudSave(false),900)}
async function cloudSave(manual){if(!student().email)return;saveLocal();try{await fetch(APPS_SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({action:'save',payload:JSON.stringify(payload())})});if(manual)$('saveStatus').textContent='Saved locally; cloud save request sent (server confirmation unavailable).'}catch{if(manual)$('saveStatus').textContent='Saved locally. Cloud save request failed.'}}
function cloudLoad(){if(!valid())return;const cb='load_'+Date.now(),script=document.createElement('script');let done=false;const finish=(msg)=>{if(done)return;done=true;$('saveStatus').textContent=msg;delete window[cb];script.remove()};window[cb]=r=>{if(r&&r.found){restore(r.payload);saveLocal();finish('Cloud progress loaded.');if(started){firstOpen();showQuestion()}}else finish('No cloud draft found.')};script.onerror=()=>finish('Could not load cloud draft.');script.src=APPS_SCRIPT_URL+'?'+new URLSearchParams({action:'load',assignmentKey:C.assignmentKey,email:student().email,callback:cb});document.body.append(script);setTimeout(()=>finish('Cloud load timed out; local work is still available.'),12000)}
function start(){if(!valid())return;localLoad();state.sessions++;state.lastTick=Date.now();started=true;$('studentPanel').classList.add('hidden');$('workspace').classList.remove('hidden');firstOpen();showQuestion();queueSave()}
function complete(){tick();started=false;state.status=state.status==='submitted'?'submitted':'completed';state.completedAt=state.completedAt||new Date().toISOString();$('workspace').classList.add('hidden');$('completion').classList.remove('hidden');ticket();saveLocal();queueSave()}
function ticket(){
  const s=student();
  const total=Q.length, done=mastered(), attempts=count();
  const accuracy=Math.round(done/Math.max(1,attempts)*100);
  const startedAt=state.firstStart?new Date(state.firstStart).toLocaleString():'—';
  const completedAt=state.completedAt?new Date(state.completedAt).toLocaleString():'—';
  const submittedAt=state.submittedAt?new Date(state.submittedAt).toLocaleString():'Not submitted';
  const el=$('completionTicket');
  el.replaceChildren();
  el.classList.add('b7-ticket');
  const add=(parent,tag,className,content)=>{const node=document.createElement(tag);if(className)node.className=className;if(content!==undefined)node.textContent=String(content);parent.append(node);return node};
  const header=add(el,'div','b7-ticket-head');
  const intro=add(header,'div','b7-ticket-intro');
  add(intro,'div','b7-ticket-eyebrow','AMERICAN STUDIES • COMPLETION TICKET');
  add(intro,'h2','','Block 7 Intro — Mastery Complete');
  add(intro,'p','','Cold War at Home and Abroad • CS 24–26');
  const seal=add(header,'div','b7-ticket-seal');
  add(seal,'strong','',Math.round(done/total*100)+'%');
  add(seal,'span','','MASTERED');
  const studentBlock=add(el,'section','b7-ticket-section');
  add(studentBlock,'h3','','Student & Assignment');
  const info=add(studentBlock,'div','b7-ticket-info');
  const field=(label,value)=>{const cell=add(info,'div','b7-ticket-field');add(cell,'span','',label);add(cell,'strong','',value||'—')};
  field('Student',s.name);field('Period',s.period);field('School email',s.email);
  field('Assignment ID',C.assignmentKey);
  const scoreBlock=add(el,'section','b7-ticket-section');
  add(scoreBlock,'h3','','Performance');
  const metrics=add(scoreBlock,'div','b7-ticket-metrics');
  const metric=(value,label)=>{const cell=add(metrics,'div','b7-ticket-metric');add(cell,'strong','',value);add(cell,'span','',label)};
  metric(done+' / '+total,'Questions mastered');metric(accuracy+'%','Attempt accuracy');
  metric(attempts,'Total attempts');metric(state.wrongTotal,'Incorrect attempts');
  metric(Object.values(state.firstAttempts).filter(Boolean).length,'First-attempt correct');metric(fmt(state.activeSeconds),'Active time');
  const timeBlock=add(el,'section','b7-ticket-section');
  add(timeBlock,'h3','','Assignment Record');
  const times=add(timeBlock,'div','b7-ticket-times');
  const stamp=(label,value)=>{const cell=add(times,'div','b7-ticket-time');add(cell,'span','',label);add(cell,'strong','',value)};
  stamp('First started',startedAt);stamp('Completed',completedAt);stamp('Submitted',submittedAt);stamp('Sessions',state.sessions);
  const status=add(el,'div',state.submittedAt?'b7-ticket-banner is-submitted':'b7-ticket-banner');
  add(status,'strong','',state.submittedAt?'SUBMISSION RECORDED ON DEVICE':'STEP 1 COMPLETE — MASTERY ACHIEVED');
  add(status,'p','',state.submittedAt?'Take a screenshot of this ticket and attach it to Google Classroom. Cloud receipt cannot be confirmed here.':'Click Submit Assignment below, then take a screenshot of the updated ticket and attach it to Google Classroom.');
}

async function submit(){if(mastered()!==Q.length)return;state.status='submitted';state.submittedAt=new Date().toISOString();ticket();saveLocal();await cloudSave(false);$('submitStatus').textContent='Submission recorded on this device and sent to the teacher backend. Take your screenshot. Server receipt cannot be verified here.';$('submitBtn').disabled=true}
function restart(){if(!valid())return;if(!confirm('Permanently restart this assignment on this device? Existing cloud records may remain.'))return;clearTimeout(saveTimer);clearTimeout(advanceTimer);advanceTimer=null;locked=false;started=false;const resetAt=new Date().toISOString();localStorage.removeItem(key());localStorage.setItem(key()+'|resetAt',resetAt);state=fresh();$('completion').classList.add('hidden');$('workspace').classList.add('hidden');$('studentPanel').classList.remove('hidden');$('submitBtn').disabled=false;$('submitStatus').textContent='';$('saveStatus').textContent='Restarted on this device. Previous cloud records are not deleted; do not load the old draft.'}
$('pageTitle').textContent=C.title;$('pageDescription').textContent=C.description;$('practiceText').textContent=C.practice;$('startBtn').onclick=start;$('loadBtn').onclick=cloudLoad;$('saveBtn').onclick=()=>cloudSave(true);$('submitBtn').onclick=submit;['restartBtn','restartWorkspaceBtn','restartCompletionBtn'].forEach(id=>$(id).onclick=restart);document.addEventListener('visibilitychange',()=>{tick();if(started){if(document.hidden)state.tabLeaves++;state.events.push({type:document.hidden?'leave':'return',at:new Date().toISOString()})}});for(const event of ['copy','paste'])document.addEventListener(event,()=>{if(started)state.events.push({type:event,question:Q[state.currentIndex]?.id||'',at:new Date().toISOString()})});setInterval(()=>{tick();if(started){stats();saveLocal()}},1000);