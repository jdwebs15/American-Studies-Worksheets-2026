const CONFIG={
  assignmentId:'founding-documents-assignment-i',
  assignmentTitle:'Founding Documents - Assignment I',
  appsScriptUrl:'https://script.google.com/macros/s/AKfycbwYENmDpAXfWjD2O9-e7CCPpVZc1f6tVeFFn3wQN60BvJFS0GKdKVGHtQAVTst17Jev/exec'
};

const SOURCES={
  declaration:{label:'Declaration transcript',url:'https://www.archives.gov/founding-docs/declaration-transcript'},
  articles:{label:'Articles of Confederation',url:'https://www.archives.gov/milestone-documents/articles-of-confederation'},
  northwest:{label:'Northwest Ordinance',url:'https://www.archives.gov/milestone-documents/northwest-ordinance'},
  constitution:{label:'Constitution transcript',url:'https://www.archives.gov/founding-docs/constitution-transcript'},
  federalism:{label:'Federalism explained',url:'https://constitution.congress.gov/browse/essay/intro.7-3/ALDE_00000032/'},
  supremacy:{label:'Supremacy Clause',url:'https://constitution.congress.gov/browse/essay/artVI-C2-1/ALDE_00013395/'},
  necessary:{label:'Necessary & Proper Clause',url:'https://constitution.congress.gov/browse/essay/artI-S8-C18-1/ALDE_00001242/'},
  ratification:{label:'Constitution: A History',url:'https://www.archives.gov/founding-docs/more-perfect-union'},
  billrights:{label:'Bill of Rights transcript',url:'https://www.archives.gov/founding-docs/bill-of-rights-transcript'}
};

const SECTIONS=[
  {title:'A. Declaration and First Government',description:'The principles announced in 1776 and the weaknesses of the first national system.',questions:[
    ['Define unalienable rights as used in the Declaration of Independence.','declaration','Look in the second paragraph for rights people possess by nature.'],
    ['What does “consent of the governed” mean?','declaration','Use the sentence explaining where governments get their just powers.'],
    ['According to the Declaration, what responsibility does government have toward individual rights?','declaration','Connect government’s purpose to the listed rights.'],
    ['Under the Articles of Confederation, which level of government held most of the power?','articles','Read the background and the articles describing state sovereignty.'],
    ['Identify one major power Congress lacked under the Articles of Confederation and explain why that weakness mattered.','articles','Look for problems involving revenue, commerce, or enforcement.'],
    ['Why did weaknesses in the Articles of Confederation lead Americans to call for a stronger Constitution?','articles','Connect a specific weakness to the need for effective national action.']
  ]},
  {title:'B. Northwest Ordinance',description:'Government, rights, education, slavery, and statehood in the Northwest Territory.',questions:[
    ['Define civil liberties and give one example protected by the Northwest Ordinance.','northwest','Use Article I or Article II of the Ordinance.'],
    ['What did the Northwest Ordinance say about religion, morality, knowledge, and public education?','northwest','Look in Article III for the sentence about schools.'],
    ['Which civil right guaranteed in the Northwest Ordinance later appeared in the Bill of Rights?','northwest','Article II includes several protections; identify one.'],
    ['Explain the Northwest Ordinance’s stance on slavery and involuntary servitude.','northwest','Read Article VI, including its exception.'],
    ['What did it mean for a territorial or state government to be “republican” in structure?','northwest','Think representative government rather than rule by a monarch.'],
    ['Explain how a territory could progress toward statehood under the Northwest Ordinance.','northwest','Find the population requirement and equal-state status.'],
    ['Why was admitting new states “on an equal footing” with the original states important?','northwest','Explain what equal political status prevented.']
  ]},
  {title:'C. Constitutional Structure and Principles',description:'How the Constitution creates an effective but limited national government.',questions:[
    ['Define federalism.','federalism','Identify how authority is divided and shared.'],
    ['Name the three branches established by the Constitution and state the main job of each.','constitution','Use Articles I, II, and III.'],
    ['Define limited government and explain its purpose.','constitution','Explain why government must obey constitutional limits.'],
    ['Define separation of powers and give one example from the Constitution.','constitution','Connect a government power to the branch that receives it.'],
    ['What are checks and balances? Give one example of one branch limiting another.','constitution','Examples include vetoes, confirmations, impeachment, or judicial review.'],
    ['What is the Supremacy Clause, and what conflict does it resolve?','supremacy','Read Article VI and explain which valid law controls.'],
    ['What does the Necessary and Proper Clause allow Congress to do?','necessary','Explain how Congress carries out its listed powers.'],
    ['How does the Constitution show that the government’s authority comes from the people?','constitution','Begin with the Preamble and representative elections.']
  ]},
  {title:'D. Ratification and the Bill of Rights',description:'The debate over the new Constitution and protections added in response.',questions:[
    ['Who were the Federalists, and what did they believe about the proposed national government?','ratification','Identify which side supported ratification and why.'],
    ['Who were the Anti-Federalists, and what did they fear about the proposed Constitution?','ratification','Focus on centralized power and individual liberty.'],
    ['Why did Anti-Federalists demand a Bill of Rights?','ratification','Explain what they believed the original Constitution lacked.'],
    ['Define due process of law and identify the amendment that protects it.','billrights','Read Amendment V.'],
    ['What does freedom of assembly protect, and where is it found?','billrights','Read the five freedoms in Amendment I.'],
    ['What is the purpose of the writ of habeas corpus?','constitution','Search Article I, Section 9, then explain protection against unlawful detention.'],
    ['How does the Bill of Rights limit government power? Give one specific example.','billrights','Name an amendment and the government action it restricts.']
  ]}
];

const questions=SECTIONS.flatMap(s=>s.questions);
// Liberal concept checks. These are intentionally broader than an exact-answer
// key so reasonable student wording can pass.
const CHECK_RULES=[
  [5,1,/unalien|inalien|natural right|born with|cannot be taken|life.{0,20}liberty/],
  [3,1,/permission|approval|agreement|people.{0,25}(give|grant|allow|choose|power|authority)|governed.{0,25}(choose|agree)/],
  [3,1,/protect.{0,25}right|secure.{0,25}right|preserve.{0,25}right|keep.{0,25}right|defend.{0,25}right|life.{0,20}liberty/],
  [2,1,/state|states|individual state/],
  [6,2,/tax|taxing|levy|collect.{0,12}(money|revenue)|revenue|raise.{0,12}money|money|pay.{0,12}debt|debt|fund.{0,15}(government|army|military)|army|military|defen[sc]e|enforc/],
  [8,2,/weak|tax|revenue|trade|commerce|enforc|shays|effective|strong.{0,20}(central|national)|national.{0,20}power/],
  [7,2,/freedom|liberty|right|religion|worship|jury|due process|property|habeas|speech/],
  [6,2,/religion|morality|knowledge|school|education|encourag/],
  [4,1,/religion|jury|due process|property|habeas|cruel|bail|worship/],
  [7,2,/prohibit|ban|forbid|no slavery|neither slavery|involuntary servitude|crime|punishment|fugitive|escape/],
  [5,1,/representative|elected|people choose|citizen.{0,20}(vote|elect)|not.{0,15}(king|monarch)/],
  [7,2,/territor|population|five thousand|5000|sixty thousand|60000|representative|statehood|equal footing/],
  [6,1,/same|equal|not inferior|full state|same power|same right|second.class/],
  [5,2,/divid|share|national|federal|central|state|level/],
  [10,4,/legislative|congress|make.{0,12}law|executive|president|enforc.{0,12}law|judicial|court|interpret.{0,12}law/],
  [6,2,/limit|constitution|law|restrict|prevent|abuse|protect.{0,15}(right|liberty)|not unlimited/],
  [8,2,/separat|different branch|legislative|executive|judicial|congress|president|court/],
  [8,2,/check|balance|limit|veto|override|confirm|impeach|judicial review|unconstitutional|appoint/],
  [7,2,/supreme law|highest law|constitution|federal law|national law|state law|conflict|prevail|control/],
  [7,2,/congress|necessary|proper|implied power|carry.{0,20}(out|execute)|enumerated|listed power/],
  [6,2,/we the people|people|popular sovereignty|vote|elect|consent|representative/],
  [6,2,/federalist|support.{0,15}(constitution|ratif)|ratif|strong.{0,20}(national|central)|effective government/],
  [7,2,/anti.federalist|oppose|fear|central|national power|tyranny|liberty|rights|bill of rights/],
  [7,2,/protect.{0,20}(right|liberty)|individual right|government power|abuse|tyranny|not included|lacked|missing/],
  [6,2,/fair|legal procedure|proper procedure|government.{0,20}(follow|obey).{0,15}law|fifth|5th|amendment v/],
  [6,2,/gather|meet|protest|demonstrat|peaceabl|first|1st|amendment i/],
  [6,2,/court|judge|detention|imprison|jail|arrest|lawful|charge|bring.{0,15}court/],
  [8,2,/limit|restrict|prohibit|government|cannot|may not|first|speech|religion|search|warrant|due process|cruel|amendment/]
];
const $=id=>document.getElementById(id);
const storageKey=()=>`${CONFIG.assignmentId}:${($('email').value||'anonymous').trim().toLowerCase()}`;
let latestCheck={};
let checkCount=0;
let cloudDirty=false;
let cloudSaveBusy=false;
const sessionStartedAt=new Date().toISOString();
const sessionId=(crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`);
const telemetryState={lastTick:Date.now(),activeMs:0,awayMs:0,tabLeaves:0,copies:0,pastes:0,leaveReturnEvents:[],copyEvents:[],pasteEvents:[],questionTimes:{},copyByQuestion:{},pasteByQuestion:{},currentQuestion:'',questionStarted:0,submittedAt:''};

function render(){let n=0;const host=$('questions');SECTIONS.forEach(section=>{const heading=document.createElement('div');heading.className='section-heading';heading.innerHTML=`<h2>${section.title}</h2><p>${section.description}</p>`;host.appendChild(heading);section.questions.forEach(q=>{n++;const src=SOURCES[q[1]];const card=document.createElement('article');card.className='question-card';card.innerHTML=`<div class="question-top"><p class="question-text"><span class="number">${n}</span>${q[0]}</p><a class="source-link" href="${src.url}" target="_blank" rel="noopener">Find it: ${src.label} ↗</a></div><label for="q${n}">Your answer<textarea id="q${n}" data-question="${n}" aria-label="Answer to question ${n}"></textarea></label><p class="hint"><strong>Where to look:</strong> ${q[2]}</p>`;host.appendChild(card);});});}
function collect(){const answers=questions.map((_,i)=>$(`q${i+1}`).value.trim());const score=Object.values(latestCheck).filter(Boolean).length;return{assignmentId:CONFIG.assignmentId,assignmentTitle:CONFIG.assignmentTitle,studentName:$('studentName').value.trim(),period:$('period').value,email:$('email').value.trim().toLowerCase(),answers,accepted:latestCheck,score,total:questions.length,percent:Math.round(score/questions.length*1000)/10,answerCount:answers.filter(Boolean).length,checkCount,lastCheckedAt:checkCount?new Date().toISOString():'',telemetry:telemetrySnapshot(),sessionId,status:telemetryState.submittedAt?'submitted':'in_progress',savedAt:new Date().toISOString()};}
function answerArray(data){const source=(data&&data.answers)||[];if(Array.isArray(source))return source;if(source&&typeof source==='object')return questions.map((_,i)=>source[`q${i+1}`]||source[String(i)]||'');return[];}
function answerCountIn(data){return answerArray(data).filter(a=>String(a||'').trim()).length;}
function fill(data){if(!data)return;$('studentName').value=data.studentName||data.name||$('studentName').value||'';$('period').value=data.period||data.classPeriod||$('period').value||'';$('email').value=(data.email||data.schoolEmail||$('email').value||'').toLowerCase();answerArray(data).forEach((a,i)=>{if($(`q${i+1}`))$(`q${i+1}`).value=a||'';});latestCheck=data.accepted||{};checkCount=Number(data.checkCount)||0;updateProgress();}
function bestLocalCopy(){let best=null,bestCount=-1,bestTime='';for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i)||'';if(!key.startsWith(`${CONFIG.assignmentId}:`)||key.endsWith(':submitted'))continue;try{const candidate=JSON.parse(localStorage.getItem(key));const count=answerCountIn(candidate);const time=String(candidate.savedAt||'');if(count>bestCount||(count===bestCount&&time>bestTime)){best=candidate;bestCount=count;bestTime=time;}}catch(e){}}return bestCount>0?best:null;}
function localSave(show=true){const data=collect();const key=storageKey();let existing=null;try{existing=JSON.parse(localStorage.getItem(key));}catch(e){}if(existing&&answerCountIn(existing)>answerCountIn(data)){if(show)status(`Protected an earlier copy containing ${answerCountIn(existing)} answers.`);return existing;}localStorage.setItem(key,JSON.stringify(data));if(show)status('Saved on this device.');return data;}
function status(msg,error=false){$('saveStatus').textContent=msg;$('saveStatus').style.color=error?'#a32026':'';}
function configured(){return /^https:\/\/script\.google\.com\/.+\/exec/.test(CONFIG.appsScriptUrl);}
async function post(action,data){if(!configured())return false;const body=new URLSearchParams({action,payload:JSON.stringify(data)});await fetch(CONFIG.appsScriptUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});return true;}
function cloudRetrieve(){return new Promise((resolve,reject)=>{if(!configured())return reject(new Error('Cloud saving is not configured.'));const cb=`worksheetCb${Date.now()}`;const script=document.createElement('script');const timer=setTimeout(()=>{cleanup();reject(new Error('Cloud retrieval timed out.'));},10000);function cleanup(){clearTimeout(timer);delete window[cb];script.remove();}window[cb]=data=>{cleanup();data&&data.found?resolve(data.payload):reject(new Error('No cloud draft found.'));};script.onerror=()=>{cleanup();reject(new Error('Could not reach cloud storage.'));};script.src=`${CONFIG.appsScriptUrl}?action=retrieve&assignmentId=${encodeURIComponent(CONFIG.assignmentId)}&email=${encodeURIComponent($('email').value.trim().toLowerCase())}&callback=${cb}`;document.body.appendChild(script);});}
function updateProgress(){const count=questions.filter((_,i)=>$(`q${i+1}`).value.trim()).length;$('progressText').textContent=`${count} of ${questions.length} answered`;$('progressBar').value=count;}
function validate(){document.querySelectorAll('.field-error').forEach(e=>e.classList.remove('field-error'));const missing=[];['studentName','period','email'].forEach(id=>{if(!$(`${id}`).value.trim()){missing.push($(`${id}`));}});questions.forEach((_,i)=>{if(!$(`q${i+1}`).value.trim())missing.push($(`q${i+1}`));});if(missing.length){missing.forEach(e=>e.classList.add('field-error'));missing[0].scrollIntoView({behavior:'smooth',block:'center'});return false;}return true;}
function identityComplete(){return['studentName','period','email'].every(id=>$(`${id}`)&&$(`${id}`).value.trim());}
async function cloudAutoSave(){const data=collect();if(!cloudDirty||cloudSaveBusy||!identityComplete()||!configured()||answerCountIn(data)===0)return;cloudSaveBusy=true;cloudDirty=false;try{await post('save',localSave(false));status('Work autosaved to your teacher.');}catch(e){cloudDirty=true;status('Work saved on this device; cloud autosave will retry.',true);}finally{cloudSaveBusy=false;}}

function tickTelemetry(){const now=Date.now();const delta=Math.max(0,now-telemetryState.lastTick);if(document.hidden)telemetryState.awayMs+=delta;else telemetryState.activeMs+=delta;telemetryState.lastTick=now;}
function finishQuestionTimer(){if(!telemetryState.currentQuestion||!telemetryState.questionStarted)return;const elapsed=Math.max(0,Date.now()-telemetryState.questionStarted);telemetryState.questionTimes[telemetryState.currentQuestion]=(telemetryState.questionTimes[telemetryState.currentQuestion]||0)+elapsed;telemetryState.questionStarted=0;}
function telemetrySnapshot(){tickTelemetry();if(telemetryState.currentQuestion&&telemetryState.questionStarted){finishQuestionTimer();telemetryState.questionStarted=Date.now();}const now=Date.now();return{valuesAreSessionOnly:true,sessionId,sessionStartedAt,sessionEndedAt:telemetryState.submittedAt||'',submittedAt:telemetryState.submittedAt||'',elapsedSeconds:Math.round((now-new Date(sessionStartedAt).getTime())/1000),activeSeconds:Math.round(telemetryState.activeMs/1000),awaySeconds:Math.round(telemetryState.awayMs/1000),tabLeaves:telemetryState.tabLeaves,copies:telemetryState.copies,pastes:telemetryState.pastes,leaveReturnEvents:telemetryState.leaveReturnEvents.slice(),copyEvents:telemetryState.copyEvents.slice(),pasteEvents:telemetryState.pasteEvents.slice(),questionTimes:Object.fromEntries(Object.entries(telemetryState.questionTimes).map(([key,value])=>[key,Math.round(value/1000)])),copyByQuestion:{...telemetryState.copyByQuestion},pasteByQuestion:{...telemetryState.pasteByQuestion}};}
function telemetryEvent(type,questionId){const timestamp=new Date().toISOString();return{id:`${sessionId}-${type}-${timestamp}-${Math.random().toString(36).slice(2,7)}`,type,timestamp,questionId:questionId||''};}
function installTelemetry(){document.addEventListener('visibilitychange',()=>{tickTelemetry();const type=document.hidden?'leave':'return';if(document.hidden){finishQuestionTimer();telemetryState.tabLeaves++;}else if(telemetryState.currentQuestion){telemetryState.questionStarted=Date.now();}telemetryState.leaveReturnEvents.push(telemetryEvent(type,telemetryState.currentQuestion));cloudDirty=true;});document.addEventListener('focusin',event=>{if(!event.target.matches('textarea[data-question]'))return;finishQuestionTimer();telemetryState.currentQuestion=`q${event.target.dataset.question}`;telemetryState.questionStarted=Date.now();});document.addEventListener('focusout',event=>{if(!event.target.matches('textarea[data-question]'))return;finishQuestionTimer();telemetryState.currentQuestion='';});document.addEventListener('copy',event=>{const area=event.target.closest&&event.target.closest('textarea[data-question]');const questionId=area?`q${area.dataset.question}`:'';telemetryState.copies++;if(questionId)telemetryState.copyByQuestion[questionId]=(telemetryState.copyByQuestion[questionId]||0)+1;telemetryState.copyEvents.push(telemetryEvent('copy',questionId));cloudDirty=true;});document.addEventListener('paste',event=>{const area=event.target.closest&&event.target.closest('textarea[data-question]');const questionId=area?`q${area.dataset.question}`:'';telemetryState.pastes++;if(questionId)telemetryState.pasteByQuestion[questionId]=(telemetryState.pasteByQuestion[questionId]||0)+1;telemetryState.pasteEvents.push(telemetryEvent('paste',questionId));cloudDirty=true;});window.addEventListener('beforeunload',()=>{finishQuestionTimer();localSave(false);});}

function answerPasses(answer,rule){const text=String(answer||'').toLowerCase().replace(/[’']/g,"'").replace(/\s+/g,' ').trim();const words=text.match(/[a-z0-9]+/g)||[];const forgivingMinimum=Math.min(rule[0],3);if(words.length<forgivingMinimum)return false;const concepts=new Set();for(let i=2;i<rule.length;i++){const flags=rule[i].flags.includes('g')?rule[i].flags:`${rule[i].flags}g`;const matches=text.match(new RegExp(rule[i].source,flags))||[];matches.forEach(match=>concepts.add(match.toLowerCase().trim()));}return concepts.size>=rule[1];}
function showCheckResult(index,passed,blank){const area=$(`q${index+1}`);const card=area.closest('.question-card');let note=card.querySelector('.answer-feedback');if(!note){note=document.createElement('p');note.className='answer-feedback';area.parentElement.insertAdjacentElement('afterend',note);}card.style.borderColor=blank?'#c69214':passed?'#238636':'#b42318';note.style.cssText=`margin:.55rem 0 0;font-weight:700;color:${blank?'#8a6100':passed?'#176b2c':'#a32026'}`;note.textContent=blank?'Answer this question before checking.':passed?'✓ Looks good.':'↻ Needs another look. Use the source and hint, then try again.';}
function installCheckButton(){const save=$('saveBtn');if(!save||$('checkBtn'))return;const button=document.createElement('button');button.type='button';button.id='checkBtn';button.className=save.className;button.textContent='Check Answers';button.style.marginLeft='.5rem';save.insertAdjacentElement('afterend',button);button.addEventListener('click',checkAnswers);}
function installPeriodOptions(){const select=$('period');if(!select)return;const current=select.value;select.innerHTML='<option value="">Choose</option>';for(let period=1;period<=8;period++){const option=document.createElement('option');option.value=String(period);option.textContent=`Period ${period}`;select.appendChild(option);}if([...select.options].some(option=>option.value===current))select.value=current;}
async function checkAnswers(){const missing=['studentName','period','email'].filter(id=>!$(`${id}`).value.trim());if(missing.length){missing.forEach(id=>$(`${id}`).classList.add('field-error'));status('Enter name, period, and school email before checking answers.',true);$(`${missing[0]}`).focus();return;}latestCheck={};questions.forEach((_,i)=>{const answer=$(`q${i+1}`).value.trim();const passed=answerPasses(answer,CHECK_RULES[i]);latestCheck[`q${i+1}`]=passed;showCheckResult(i,passed,!answer);});checkCount++;const data=localSave(false);const score=Object.values(latestCheck).filter(Boolean).length;status(`Check ${checkCount}: ${score} of ${questions.length} look good. Your current work is being saved.`);try{await post('save',data);status(`Check ${checkCount}: ${score} of ${questions.length} look good. Updated work saved.`);}catch(e){status(`Check ${checkCount}: ${score} of ${questions.length} look good. Saved on this device; cloud save was unavailable.`,true);}}

render();
installPeriodOptions();
installCheckButton();
installTelemetry();
document.addEventListener('input',()=>{updateProgress();cloudDirty=true;clearTimeout(window.autoSaveTimer);window.autoSaveTimer=setTimeout(()=>localSave(false),600);clearTimeout(window.cloudAutoSaveTimer);window.cloudAutoSaveTimer=setTimeout(cloudAutoSave,12000);});
setInterval(cloudAutoSave,60000);
$('saveBtn').addEventListener('click',async()=>{const data=collect();if(answerCountIn(data)===0){status('Blank work was not saved. Use Retrieve Previous Work first.',true);return;}localSave();try{if(await post('save',data))status('Saved on this device and to your cloud draft.');}catch(e){status('Saved on this device; cloud save was unavailable.',true);}});
$('retrieveBtn').addEventListener('click',async()=>{if(!$('email').value.trim()){status('Enter your school email first.',true);return;}const exact=localStorage.getItem(storageKey());let local=null;try{local=exact?JSON.parse(exact):null;}catch(e){}const rescued=bestLocalCopy();if(rescued&&answerCountIn(rescued)>answerCountIn(local)){local=rescued;}if(local&&answerCountIn(local)>0){fill(local);localSave(false);status(`Recovered ${answerCountIn(local)} answers from this Chromebook.`);return;}try{const cloud=await cloudRetrieve();if(answerCountIn(cloud)>0){fill(cloud);localSave(false);status(`Recovered ${answerCountIn(cloud)} answers from the spreadsheet.`);}else{status('A cloud record was found, but it contained no answers. No local work was overwritten.',true);}}catch(e){status('No saved copy was found. Check that the same Chromebook and exact school email are being used.',true);}});
$('assignmentForm').addEventListener('submit',async e=>{e.preventDefault();if(!validate()){$('submitStatus').textContent='Please complete every highlighted field.';return;}if(!$('honorCheck').checked)return;telemetryState.submittedAt=new Date().toISOString();finishQuestionTimer();const data=localSave(false);$('submitBtn').disabled=true;$('submitStatus').textContent='Submitting…';try{if(configured()){await post('submit',data);localStorage.setItem(`${storageKey()}:submitted`,data.savedAt);$('submitStatus').textContent='Submitted successfully. Your teacher now has your responses.';}else{$('submitStatus').textContent='Your work is complete and saved on this device. Your teacher must configure the submission URL before it can be sent.';}}catch(err){telemetryState.submittedAt='';$('submitStatus').textContent='Submission could not be sent. Your work remains saved on this device; try again.';$('submitBtn').disabled=false;}});
updateProgress();
