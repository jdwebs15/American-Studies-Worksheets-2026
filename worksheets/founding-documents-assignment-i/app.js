const CONFIG={
  assignmentId:'founding-documents-assignment-i',
  assignmentTitle:'Founding Documents - Assignment I',
  appsScriptUrl:'https://script.google.com/macros/s/AKfycbyAkahbkT3Tn7wVxAap3EqF1uhnB2iJF9hm6pnuUueHkBibHUgZg2R8ZVEHE-Gky6y7/exec'
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
const $=id=>document.getElementById(id);
const storageKey=()=>`${CONFIG.assignmentId}:${($('email').value||'anonymous').trim().toLowerCase()}`;

function render(){let n=0;const host=$('questions');SECTIONS.forEach(section=>{const heading=document.createElement('div');heading.className='section-heading';heading.innerHTML=`<h2>${section.title}</h2><p>${section.description}</p>`;host.appendChild(heading);section.questions.forEach(q=>{n++;const src=SOURCES[q[1]];const card=document.createElement('article');card.className='question-card';card.innerHTML=`<div class="question-top"><p class="question-text"><span class="number">${n}</span>${q[0]}</p><a class="source-link" href="${src.url}" target="_blank" rel="noopener">Find it: ${src.label} ↗</a></div><label for="q${n}">Your answer<textarea id="q${n}" data-question="${n}" aria-label="Answer to question ${n}"></textarea></label><p class="hint"><strong>Where to look:</strong> ${q[2]}</p>`;host.appendChild(card);});});}
function collect(){return{assignmentId:CONFIG.assignmentId,assignmentTitle:CONFIG.assignmentTitle,studentName:$('studentName').value.trim(),period:$('period').value,email:$('email').value.trim().toLowerCase(),answers:questions.map((_,i)=>$(`q${i+1}`).value.trim()),savedAt:new Date().toISOString()};}
function fill(data){if(!data)return;$('studentName').value=data.studentName||'';$('period').value=data.period||'';$('email').value=data.email||'';(data.answers||[]).forEach((a,i)=>{if($(`q${i+1}`))$(`q${i+1}`).value=a;});updateProgress();}
function localSave(show=true){const data=collect();localStorage.setItem(storageKey(),JSON.stringify(data));if(show)status('Saved on this device.');return data;}
function status(msg,error=false){$('saveStatus').textContent=msg;$('saveStatus').style.color=error?'#a32026':'';}
function configured(){return /^https:\/\/script\.google\.com\/.+\/exec/.test(CONFIG.appsScriptUrl);}
async function post(action,data){if(!configured())return false;const body=new URLSearchParams({action,payload:JSON.stringify(data)});await fetch(CONFIG.appsScriptUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});return true;}
function cloudRetrieve(){return new Promise((resolve,reject)=>{if(!configured())return reject(new Error('Cloud saving is not configured.'));const cb=`worksheetCb${Date.now()}`;const script=document.createElement('script');const timer=setTimeout(()=>{cleanup();reject(new Error('Cloud retrieval timed out.'));},10000);function cleanup(){clearTimeout(timer);delete window[cb];script.remove();}window[cb]=data=>{cleanup();data&&data.found?resolve(data.payload):reject(new Error('No cloud draft found.'));};script.onerror=()=>{cleanup();reject(new Error('Could not reach cloud storage.'));};script.src=`${CONFIG.appsScriptUrl}?action=retrieve&assignmentId=${encodeURIComponent(CONFIG.assignmentId)}&email=${encodeURIComponent($('email').value.trim().toLowerCase())}&callback=${cb}`;document.body.appendChild(script);});}
function updateProgress(){const count=questions.filter((_,i)=>$(`q${i+1}`).value.trim()).length;$('progressText').textContent=`${count} of ${questions.length} answered`;$('progressBar').value=count;}
function validate(){document.querySelectorAll('.field-error').forEach(e=>e.classList.remove('field-error'));const missing=[];['studentName','period','email'].forEach(id=>{if(!$(`${id}`).value.trim()){missing.push($(`${id}`));}});questions.forEach((_,i)=>{if(!$(`q${i+1}`).value.trim())missing.push($(`q${i+1}`));});if(missing.length){missing.forEach(e=>e.classList.add('field-error'));missing[0].scrollIntoView({behavior:'smooth',block:'center'});return false;}return true;}

render();
document.addEventListener('input',()=>{updateProgress();clearTimeout(window.autoSaveTimer);window.autoSaveTimer=setTimeout(()=>localSave(false),600);});
$('saveBtn').addEventListener('click',async()=>{const data=localSave();try{if(await post('save',data))status('Saved on this device and to your cloud draft.');}catch(e){status('Saved on this device; cloud save was unavailable.',true);}});
$('retrieveBtn').addEventListener('click',async()=>{if(!$('email').value.trim()){status('Enter your school email first.',true);return;}const local=localStorage.getItem(storageKey());if(local){fill(JSON.parse(local));status('Previous work restored from this device.');return;}try{fill(await cloudRetrieve());status('Previous cloud draft restored.');}catch(e){status(e.message,true);}});
$('assignmentForm').addEventListener('submit',async e=>{e.preventDefault();if(!validate()){$('submitStatus').textContent='Please complete every highlighted field.';return;}if(!$('honorCheck').checked)return;const data=localSave(false);$('submitBtn').disabled=true;$('submitStatus').textContent='Submitting…';try{if(configured()){await post('submit',data);localStorage.setItem(`${storageKey()}:submitted`,data.savedAt);$('submitStatus').textContent='Submitted successfully. Your teacher now has your responses.';}else{$('submitStatus').textContent='Your work is complete and saved on this device. Your teacher must configure the submission URL before it can be sent.';}}catch(err){$('submitStatus').textContent='Submission could not be sent. Your work remains saved on this device; try again.';$('submitBtn').disabled=false;}});
updateProgress();
