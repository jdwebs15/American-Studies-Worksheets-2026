(function(){
const C={
  assignmentKey:"AS-B1-CS4-5-VOCAB-2026",
  title:"Block 1 Vocabulary — Declaration and Northwest Ordinance",
  description:"CS 4–5 • Twenty-eight essential terms covering founding principles, individual rights, territorial government, and statehood.",
  practice:"Recognize and apply the essential vocabulary of the Declaration of Independence and Northwest Ordinance."
};
window.BLOCK_CONFIG=C;
const TERMS=[
  ["CS 4","Unalienable rights","Rights every person possesses that cannot legitimately be taken away","The Declaration identifies life, liberty, and the pursuit of happiness as examples."],
  ["CS 4","Natural rights","Rights people possess by nature rather than receiving from government","John Locke argued that people are born with fundamental rights."],
  ["CS 4","Consent of the governed","Principle that legitimate government receives its authority from the people","Citizens authorize government and may change one that violates their rights."],
  ["CS 4","Popular sovereignty","Principle that ultimate political authority rests with the people","The people are the original source of governmental power."],
  ["CS 4","Equality","Principle that people possess equal rights and should receive equal treatment under law","The Declaration states that all men are created equal, even though the ideal was not fully applied in 1776."],
  ["CS 4","Social contract","Understanding that people establish government to protect rights and agree to follow legitimate laws","Government owes protection while citizens grant it authority."],
  ["CS 4","Limited government","Principle that governmental power is restricted by law and by the rights of the people","Officials cannot legitimately exercise unlimited authority."],
  ["CS 4","Rule of law","Principle that laws govern citizens and public officials alike","A leader remains subject to established legal limits."],
  ["CS 4","Grievance","Formal complaint identifying an abuse or injustice","The Declaration lists actions committed by the British king against the colonies."],
  ["CS 4","Tyranny","Cruel or oppressive exercise of governmental power","Repeated abuses intended to establish absolute control demonstrate this condition."],
  ["CS 4","Right of revolution","People’s authority to alter or abolish a government that persistently destroys their rights","The Declaration justifies replacing an abusive political system."],
  ["CS 4","Civic responsibility","Obligation of citizens to participate in and protect their political community","The Declaration says people must act when government repeatedly violates rights."],
  ["CS 4","Marginalized groups","People excluded from equal power, opportunity, or protection","Women, enslaved people, and Indigenous peoples did not initially receive the Declaration’s ideals equally."],
  ["CS 4","Civil liberty","Freedom protected from improper governmental interference","Religious expression and personal freedom are protected against government abuse."],
  ["CS 4","Declaration of Independence","1776 document announcing separation from Britain and explaining the principles and grievances supporting that decision","It connects natural rights, consent, equality, and the responsibility of government."],
  ["CS 5","Northwest Ordinance","1787 law establishing government and a statehood process for the Northwest Territory","It provided civil liberties, encouraged education, restricted slavery, and promised equal statehood."],
  ["CS 5","Northwest Territory","Region north of the Ohio River, east of the Mississippi River, and south of the Great Lakes","The Ordinance organized this western land for settlement and eventual states."],
  ["CS 5","Territorial government","Temporary government used before a territory qualifies for statehood","An appointed governor precedes increasing representative government."],
  ["CS 5","Statehood","Legal admission of a territory as a state in the Union","Population growth and an approved constitution move a territory toward admission."],
  ["CS 5","Equal footing","Principle that new states enter the Union with the same legal status as existing states","Western states would not remain permanently subordinate to the original states."],
  ["CS 5","Civil liberties","Fundamental freedoms and legal protections held by individuals","The Ordinance protected religion, jury trial, due process, and property."],
  ["CS 5","Freedom of religion","Right to practice religious beliefs without improper government interference","The Ordinance stated that religion should not be used to deny civil rights."],
  ["CS 5","Habeas corpus","Protection requiring government to justify a person’s detention before a court","A prisoner may challenge whether confinement is lawful."],
  ["CS 5","Trial by jury","Right to have evidence decided by an impartial group of citizens","The Ordinance guaranteed this protection in criminal proceedings."],
  ["CS 5","Due process","Requirement that government follow fair legal procedures before depriving a person of life, liberty, or property","Officials must use established law rather than arbitrary punishment."],
  ["CS 5","Property rights","Legal protections for owning and using possessions and land","The Ordinance protected contracts and prohibited taking property without lawful authority."],
  ["CS 5","Public education","Community-supported schooling intended to spread knowledge and responsible citizenship","The Ordinance encouraged schools because knowledge was considered necessary to good government."],
  ["CS 5","Prohibition of slavery","Rule declaring slavery and involuntary servitude illegal in the Northwest Territory, except as punishment for crime","The restriction shaped the development of future states north of the Ohio River."]
];
function shuffle(items){
  const a=items.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
function hasObviousPattern(slots){
  if(slots.every((v,i)=>v===i%4))return true;
  if(slots.every((v,i)=>v===3-(i%4)))return true;
  let run=1;
  for(let i=1;i<slots.length;i++){run=slots[i]===slots[i-1]?run+1:1;if(run>2)return true}
  return false;
}
function answerSlots(){
  const balanced=[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3];
  let slots;
  do{slots=shuffle(balanced)}while(hasObviousPattern(slots));
  return slots;
}
function distractors(n){return[5,11,17].map(k=>TERMS[(n+k)%TERMS.length][1])}
const orderedTerms=shuffle(TERMS.map((term,originalIndex)=>({term,originalIndex})));
const positions=answerSlots();
window.BLOCK_QUESTIONS=orderedTerms.map(({term:t,originalIndex},n)=>{
  const answer=positions[n],choices=distractors(originalIndex);choices.splice(answer,0,t[1]);
  return{
    id:`v${String(originalIndex+1).padStart(2,"0")}`,cs:t[0],topic:`${t[0]} Vocabulary`,
    prompt:`Which term matches this definition? ${t[2]}.`,choices,answer,
    source:"",where:"",
    explanation:`${t[1]} is ${t[2].charAt(0).toLowerCase()+t[2].slice(1)}. ${t[3]}`,
    hint:`Focus on the phrase that distinguishes this term from the other founding-document concepts.`
  };
});
})();
