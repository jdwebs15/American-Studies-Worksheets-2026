(function(){
const mode=location.pathname.includes("vocabulary")?"vocabulary":location.pathname.includes("review")?"review":"intro";
const meta={intro:["AS-B9-CS29-30-INTRO-2026","Block 9 Intro — Migration, Demographics, and Public Policy","CS 29–30 • Forty linked foundation questions."],vocabulary:["AS-B9-CS29-30-VOCAB-2026","Block 9 Vocabulary — Migration, Demographics, and Public Policy","CS 29–30 • Forty essential terms and concepts."],review:["AS-B9-CS29-30-REVIEW-2026","Block 9 Comprehensive Review — Migration, Demographics, and Public Policy","CS 29–30 • Forty application, comparison, causation, and synthesis questions."]}[mode];
window.BLOCK_CONFIG={assignmentKey:meta[0],title:meta[1],description:meta[2],practice:"Explain postwar migration and immigration changes, then evaluate debates over economic policy, the environment, social welfare, and national security."};
window.BLOCK_QUESTIONS=[
  {
    "id": "i01",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "A lender refuses mortgages in a neighborhood largely because of its racial composition. Which practice does this illustrate?",
    "choices": [
      "Redlining",
      "Blockbusting",
      "Racial steering",
      "Exclusionary zoning"
    ],
    "answer": 0,
    "source": "https://www.census.gov/topics/housing.html",
    "where": "Housing topics → housing patterns and community change",
    "explanation": "Redlining describes discriminatory lending practices that restricted access to mortgages in particular neighborhoods.",
    "hint": "Focus on the historical distinction in the question. Review: housing patterns and community change."
  },
  {
    "id": "i02",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Which development most directly reduced the tax base of some central cities after World War II?",
    "choices": [
      "Federal aid to city schools expanded",
      "Middle-class households moved to suburbs",
      "Industrial employment shifted downtown",
      "Urban property values rose steadily"
    ],
    "answer": 1,
    "source": "https://www.census.gov/topics/housing.html",
    "where": "Housing topics → housing patterns and community change",
    "explanation": "Suburban movement of residents and businesses could reduce a central city’s tax revenue even as demand for services continued.",
    "hint": "Focus on the historical distinction in the question. Review: housing patterns and community change."
  },
  {
    "id": "i03",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "A city and its surrounding suburbs disagree about school funding and public services. This is an example of what growing divide?",
    "choices": [
      "Differences in local tax bases",
      "Disputes over metropolitan boundaries",
      "Urban-suburban polarization",
      "Changes in municipal voting districts"
    ],
    "answer": 2,
    "source": "https://www.census.gov/topics/housing.html",
    "where": "Housing topics → housing patterns and community change",
    "explanation": "Urban-suburban polarization — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: housing patterns and community change."
  },
  {
    "id": "i04",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "What was one underlying cause of unrest in several American cities during the 1960s?",
    "choices": [
      "Falling industrial wages alone",
      "Debates over school attendance zones",
      "Opposition to suburban road projects",
      "Frustration with inequality and policing"
    ],
    "answer": 3,
    "source": "https://www.census.gov/topics/housing.html",
    "where": "Housing topics → housing patterns and community change",
    "explanation": "Frustration with inequality and policing — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: housing patterns and community change."
  },
  {
    "id": "i05",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Which region experienced major job losses as older manufacturing industries declined?",
    "choices": [
      "The Rust Belt",
      "The Sun Belt",
      "The Cotton Belt",
      "The Silicon Valley region"
    ],
    "answer": 0,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "The Rust Belt — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i06",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Why did many Americans move to southern and western states after World War II?",
    "choices": [
      "Declining housing costs in northern cities",
      "Expanding jobs and growing industries",
      "A return of textile jobs to New England",
      "Reduced federal spending in the West"
    ],
    "answer": 1,
    "source": "https://www.census.gov/topics/population.html",
    "where": "Population topics → migration, regional change, and population estimates",
    "explanation": "Expanding jobs and growing industries — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: migration, regional change, and population estimates."
  },
  {
    "id": "i07",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "How could population growth in the Sun Belt affect Congress?",
    "choices": [
      "States gained additional senators",
      "States received more Supreme Court seats",
      "States gaining residents could gain House seats",
      "States obtained equal House delegations"
    ],
    "answer": 2,
    "source": "https://www.census.gov/programs-surveys/decennial-census/about/rdo/congressional-apportionment.html",
    "where": "Congressional apportionment → population counts and House seats",
    "explanation": "House seats are apportioned by state population after the decennial census; every state still has two senators.",
    "hint": "Focus on the historical distinction in the question. Review: population counts and house seats."
  },
  {
    "id": "i08",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Which change resulted from the Immigration and Nationality Act of 1965?",
    "choices": [
      "It retained quotas but raised the limits",
      "It gave states control of admission",
      "It restricted family-based immigration",
      "National-origin quotas were abolished"
    ],
    "answer": 3,
    "source": "https://history.state.gov/milestones/1961-1968/immigration-act",
    "where": "Immigration Act of 1965 → national-origins quota system and effects",
    "explanation": "The 1965 law ended the national-origins quota formula, changing immigration patterns in subsequent decades.",
    "hint": "Focus on the historical distinction in the question. Review: national-origins quota system and effects."
  },
  {
    "id": "i09",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "A census shows a state has gained many residents through migration. What is the most likely political consequence?",
    "choices": [
      "Its representation may increase after reapportionment",
      "Its number of senators may increase",
      "Its electoral votes must stay unchanged",
      "Its state legislature gains federal authority"
    ],
    "answer": 0,
    "source": "https://www.census.gov/programs-surveys/decennial-census/about/rdo/congressional-apportionment.html",
    "where": "Congressional apportionment → population counts and House seats",
    "explanation": "Its representation may increase after reapportionment — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: population counts and house seats."
  },
  {
    "id": "i10",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "How did immigration after 1965 change American communities?",
    "choices": [
      "It made migration primarily European",
      "It increased cultural and linguistic diversity",
      "It reduced family reunification",
      "It ended migration from Latin America"
    ],
    "answer": 1,
    "source": "https://history.state.gov/milestones/1961-1968/immigration-act",
    "where": "Immigration Act of 1965 → national-origins quota system and effects",
    "explanation": "It increased cultural and linguistic diversity — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: national-origins quota system and effects."
  },
  {
    "id": "i11",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "A school offers instruction in English and another language to support learning. Which policy is it using?",
    "choices": [
      "English-only instruction",
      "School desegregation",
      "Bilingual education",
      "Vocational education"
    ],
    "answer": 2,
    "source": "https://www.ed.gov/laws-and-policy/civil-rights-laws/race-color-and-national-origin-discrimination",
    "where": "National origin discrimination → access for English learners",
    "explanation": "Bilingual education — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: access for english learners."
  },
  {
    "id": "i12",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Why can migration change the outcome of national elections over time?",
    "choices": [
      "It changes the number of senators",
      "It changes the minimum voting age",
      "It replaces the Electoral College",
      "It changes where voters live and how seats are distributed"
    ],
    "answer": 3,
    "source": "https://www.census.gov/programs-surveys/decennial-census/about/rdo/congressional-apportionment.html",
    "where": "Congressional apportionment → population counts and House seats",
    "explanation": "It changes where voters live and how seats are distributed — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: population counts and house seats."
  },
  {
    "id": "i13",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "What helped create employment in some fast-growing western and southern states?",
    "choices": [
      "Federal defense and aerospace contracts",
      "Federal agricultural price supports",
      "Declining military production contracts",
      "The return of textile mills to New England"
    ],
    "answer": 0,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "Federal defense and aerospace contracts — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i14",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Why did new technology companies contribute to Sun Belt growth?",
    "choices": [
      "They moved workers into rural farming",
      "They attracted skilled workers and investment",
      "They reduced demand for local colleges",
      "They shifted investment toward older mills"
    ],
    "answer": 1,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "They attracted skilled workers and investment — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i15",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which objective best describes President Johnson's Great Society?",
    "choices": [
      "Limiting federal anti-poverty efforts",
      "Reducing public education funding",
      "Reducing poverty and expanding opportunity",
      "Replacing health programs with private charity"
    ],
    "answer": 2,
    "source": "https://www.lbjlibrary.org/learn/educators/primary-sources",
    "where": "Great Society and War on Poverty → Johnson administration initiatives",
    "explanation": "The Great Society expanded federal efforts in health, education, and poverty reduction.",
    "hint": "Focus on the historical distinction in the question. Review: johnson administration initiatives."
  },
  {
    "id": "i16",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which person is most directly served by Medicare?",
    "choices": [
      "An unemployed adult seeking cash aid",
      "A child needing school meal support",
      "A family requesting housing vouchers",
      "A retiree who qualifies by age"
    ],
    "answer": 3,
    "source": "https://www.medicare.gov/basics/get-started-with-medicare",
    "where": "Get started with Medicare → who is eligible",
    "explanation": "Medicare is primarily federal health insurance for people 65 and older and some younger eligible people.",
    "hint": "Focus on the historical distinction in the question. Review: who is eligible."
  },
  {
    "id": "i17",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "How does Medicaid differ from Medicare?",
    "choices": [
      "It covers eligible low-income people through federal-state funding",
      "It is an age-based federal insurance program",
      "It only covers veterans and their families",
      "It is funded entirely by local property taxes"
    ],
    "answer": 0,
    "source": "https://www.medicaid.gov/medicaid/eligibility/index.html",
    "where": "Medicaid eligibility → qualifying groups and income",
    "explanation": "Medicaid is a joint federal-state program for eligible people with limited income and resources.",
    "hint": "Focus on the historical distinction in the question. Review: qualifying groups and income."
  },
  {
    "id": "i18",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Supporters of supply-side economics argued that lower tax rates could encourage what?",
    "choices": [
      "Higher tax rates would reduce investment",
      "Investment, production, and economic growth",
      "Price controls would increase factory output",
      "Import quotas would expand domestic demand"
    ],
    "answer": 1,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "Investment, production, and economic growth — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i19",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "A government reduces rules governing a particular industry. What policy is this?",
    "choices": [
      "Federal enforcement of pollution standards",
      "New rules for bank lending",
      "Deregulation",
      "Expanded oversight of workplace safety"
    ],
    "answer": 2,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "Deregulation reduces government restrictions or requirements in a particular sector.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i20",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "What concern helped strengthen the environmental movement?",
    "choices": [
      "Growing pressure to reduce city taxes",
      "Rising demand for congressional districts",
      "Concern about the number of new immigrants",
      "Pollution threatened health and natural resources"
    ],
    "answer": 3,
    "source": "https://www.epa.gov/history",
    "where": "EPA history → agency creation and environmental responsibilities",
    "explanation": "Pollution threatened health and natural resources — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: agency creation and environmental responsibilities."
  },
  {
    "id": "i21",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Why was the Environmental Protection Agency established?",
    "choices": [
      "To implement and enforce environmental protections",
      "To manage federal health insurance",
      "To oversee national park admissions",
      "To set congressional district boundaries"
    ],
    "answer": 0,
    "source": "https://www.epa.gov/history",
    "where": "EPA history → agency creation and environmental responsibilities",
    "explanation": "The EPA was created to coordinate and enforce federal environmental protections.",
    "hint": "Focus on the historical distinction in the question. Review: agency creation and environmental responsibilities."
  },
  {
    "id": "i22",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which activity would most directly contribute to greenhouse-gas emissions?",
    "choices": [
      "Increasing energy efficiency in homes",
      "Burning large quantities of fossil fuels",
      "Expanding use of wind-generated electricity",
      "Reducing the burning of coal in factories"
    ],
    "answer": 1,
    "source": "https://www.epa.gov/history",
    "where": "EPA history → agency creation and environmental responsibilities",
    "explanation": "Burning large quantities of fossil fuels — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: agency creation and environmental responsibilities."
  },
  {
    "id": "i23",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which question most directly concerns the size of federal social welfare programs?",
    "choices": [
      "How should states redraw House districts?",
      "How should cities regulate industrial pollution?",
      "How broadly should federal aid support families facing poverty?",
      "How should schools teach newly arrived students?"
    ],
    "answer": 2,
    "source": "https://www.lbjlibrary.org/learn/educators/primary-sources",
    "where": "Great Society and War on Poverty → Johnson administration initiatives",
    "explanation": "How broadly should federal aid support families facing poverty? — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: johnson administration initiatives."
  },
  {
    "id": "i24",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which situation illustrates a potential conflict between national security and civil liberties?",
    "choices": [
      "A state funds new emergency response vehicles",
      "Congress increases salaries for military personnel",
      "An agency replaces outdated airport equipment",
      "Officials monitor private communications without adequate safeguards"
    ],
    "answer": 3,
    "source": "https://www.archives.gov/founding-docs/bill-of-rights",
    "where": "Bill of Rights → privacy, searches, speech, and due process",
    "explanation": "Security measures can conflict with civil liberties when government monitoring lacks adequate legal safeguards.",
    "hint": "Focus on the historical distinction in the question. Review: privacy, searches, speech, and due process."
  },
  {
    "id": "i25",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which reason best explains the growth of antiwar protests during the Vietnam War?",
    "choices": [
      "Many Americans questioned the war and the draft",
      "Americans wanted to expand the conflict into Europe",
      "Protesters demanded a return to immigration quotas",
      "Protesters opposed the establishment of Medicare"
    ],
    "answer": 0,
    "source": "https://history.state.gov/milestones/1961-1968/vietnam-war",
    "where": "Vietnam War → escalation and domestic opposition",
    "explanation": "Many Americans questioned the war and the draft — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: escalation and domestic opposition."
  },
  {
    "id": "i26",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "What is an example of federal civil-rights enforcement?",
    "choices": [
      "A federal court hears a school funding appeal",
      "Federal officials act to implement desegregation orders",
      "A city council changes its election calendar",
      "A state legislature debates a new voting rule"
    ],
    "answer": 1,
    "source": "https://www.archives.gov/founding-docs/bill-of-rights",
    "where": "Bill of Rights → privacy, searches, speech, and due process",
    "explanation": "Federal officials act to implement desegregation orders — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: privacy, searches, speech, and due process."
  },
  {
    "id": "i27",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which situation would an anti-poverty program be designed to address most directly?",
    "choices": [
      "A state loses one House seat after a census",
      "A corporation plans to build a new office park",
      "A household cannot reliably afford food and housing",
      "A city proposes a new highway interchange"
    ],
    "answer": 2,
    "source": "https://www.lbjlibrary.org/learn/educators/primary-sources",
    "where": "Great Society and War on Poverty → Johnson administration initiatives",
    "explanation": "A household cannot reliably afford food and housing — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: johnson administration initiatives."
  },
  {
    "id": "i28",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which proposal raises the clearest civil-liberties concern during a security emergency?",
    "choices": [
      "Increasing funding for emergency medical teams",
      "Improving communication between local agencies",
      "Training firefighters to respond to disasters",
      "Allowing searches without warrants or judicial oversight"
    ],
    "answer": 3,
    "source": "https://www.archives.gov/founding-docs/bill-of-rights",
    "where": "Bill of Rights → privacy, searches, speech, and due process",
    "explanation": "Allowing searches without warrants or judicial oversight — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: privacy, searches, speech, and due process."
  },
  {
    "id": "i29",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "A factory closes in Ohio while a new aerospace facility opens in Arizona. Which trend does this illustrate?",
    "choices": [
      "Industrial decline in one region alongside Sun Belt growth",
      "Manufacturing expanded evenly across regions",
      "Factory work shifted chiefly to New England",
      "Sun Belt growth depended on farm jobs alone"
    ],
    "answer": 0,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "Industrial decline in one region alongside Sun Belt growth — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i30",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Why did suburban migration sometimes deepen inequality between cities and suburbs?",
    "choices": [
      "Suburbs relied more heavily on city taxes",
      "Resources and tax revenue shifted unevenly",
      "City populations grew at equal rates",
      "All districts received identical school revenue"
    ],
    "answer": 1,
    "source": "https://www.census.gov/topics/housing.html",
    "where": "Housing topics → housing patterns and community change",
    "explanation": "When wealthier households and businesses move away, some cities lose taxable resources that help fund services.",
    "hint": "Focus on the historical distinction in the question. Review: housing patterns and community change."
  },
  {
    "id": "i31",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Which development most directly increased the political influence of growing states?",
    "choices": [
      "Equal Senate representation after migration",
      "Federal appointment of new governors",
      "Reapportionment after population changes",
      "Uniform electoral votes for every state"
    ],
    "answer": 2,
    "source": "https://www.census.gov/programs-surveys/decennial-census/about/rdo/congressional-apportionment.html",
    "where": "Congressional apportionment → population counts and House seats",
    "explanation": "Reapportionment after population changes — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: population counts and house seats."
  },
  {
    "id": "i32",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Which factor made the 1965 immigration law important for later demographic change?",
    "choices": [
      "It restored national-origin quotas",
      "It eliminated family-based visas",
      "It limited admissions to Western Europe",
      "It opened immigration beyond earlier national-origin restrictions"
    ],
    "answer": 3,
    "source": "https://history.state.gov/milestones/1961-1968/immigration-act",
    "where": "Immigration Act of 1965 → national-origins quota system and effects",
    "explanation": "It opened immigration beyond earlier national-origin restrictions — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: national-origins quota system and effects."
  },
  {
    "id": "i33",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Why might a school district expand bilingual instruction after a rise in immigration?",
    "choices": [
      "To help students learn academic content while developing English",
      "To replace the study of American history",
      "To exempt all students from state assessments",
      "To eliminate the need for teacher certification"
    ],
    "answer": 0,
    "source": "https://www.ed.gov/laws-and-policy/civil-rights-laws/race-color-and-national-origin-discrimination",
    "where": "National origin discrimination → access for English learners",
    "explanation": "To help students learn academic content while developing English — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: access for english learners."
  },
  {
    "id": "i34",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "What is a likely economic effect when high-technology companies move into a region?",
    "choices": [
      "Manufacturing employment must end statewide",
      "More skilled jobs attract workers and investment",
      "Housing demand necessarily falls in nearby towns",
      "The region loses access to national markets"
    ],
    "answer": 1,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "More skilled jobs attract workers and investment — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i35",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Which policy would be most closely associated with the Great Society?",
    "choices": [
      "Reducing federal assistance for medical care",
      "Ending support for public education",
      "Expanding health care and anti-poverty programs",
      "Eliminating job training for low-income workers"
    ],
    "answer": 2,
    "source": "https://www.lbjlibrary.org/learn/educators/primary-sources",
    "where": "Great Society and War on Poverty → Johnson administration initiatives",
    "explanation": "Expanding health care and anti-poverty programs — this best matches the historical development or policy described. The other choices refer to different developments or would not produce the stated result.",
    "hint": "Focus on the historical distinction in the question. Review: johnson administration initiatives."
  },
  {
    "id": "i36",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "Two adults need health coverage: one is 70, and the other has a low income and meets state eligibility rules. Which pairing is accurate?",
    "choices": [
      "Both policies set stricter industry standards",
      "Both policies transfer power to Congress",
      "Both policies eliminate federal agencies",
      "Medicare for the older adult; Medicaid for the eligible low-income adult"
    ],
    "answer": 3,
    "source": "https://www.medicaid.gov/medicaid/eligibility/index.html",
    "where": "Medicaid eligibility → qualifying groups and income",
    "explanation": "The Great Society included federal health coverage and programs aimed at reducing poverty.",
    "hint": "Focus on the historical distinction in the question. Review: qualifying groups and income."
  },
  {
    "id": "i37",
    "cs": "CS 30",
    "topic": "CS 30",
    "prompt": "What distinguishes environmental regulation from deregulation?",
    "choices": [
      "Regulation sets or enforces rules; deregulation reduces them",
      "Some regions gained jobs while others declined",
      "Some communities faced persistent poverty",
      "Some families were excluded from housing loans"
    ],
    "answer": 0,
    "source": "https://www.epa.gov/history",
    "where": "EPA history → agency creation and environmental responsibilities",
    "explanation": "Regulation imposes or enforces requirements; deregulation removes or relaxes them.",
    "hint": "Focus on the historical distinction in the question. Review: agency creation and environmental responsibilities."
  },
  {
    "id": "i38",
    "cs": "CS 29",
    "topic": "CS 29",
    "prompt": "Which evidence most clearly challenges the claim that postwar growth benefited all communities equally?",
    "choices": [
      "New interstate highways linked distant cities",
      "Some industrial cities lost jobs as other regions grew",
      "Consumer spending increased after World War II",
      "Television became common in American homes"
    ],
    "answer": 1,
    "source": "https://www.federalreservehistory.org/",
    "where": "Browse economic history → inflation, growth, and federal policy",
    "explanation": "Uneven regional employment patterns show that national growth did not benefit all communities equally.",
    "hint": "Focus on the historical distinction in the question. Review: inflation, growth, and federal policy."
  },
  {
    "id": "i39",
    "cs": "CS 29–30",
    "topic": "CS 29–30",
    "prompt": "Which political effect can follow a sustained shift of population between states?",
    "choices": [
      "Each state gains additional Senate seats",
      "State governors appoint new Supreme Court justices",
      "House seats may be redistributed after the census",
      "The voting age changes in growing states"
    ],
    "answer": 2,
    "source": "https://www.census.gov/programs-surveys/decennial-census/about/rdo/congressional-apportionment.html",
    "where": "Congressional apportionment → population counts and House seats",
    "explanation": "Population shifts can change each state’s share of seats in the House of Representatives after a census.",
    "hint": "Focus on the historical distinction in the question. Review: population counts and house seats."
  },
  {
    "id": "i40",
    "cs": "CS 29–30",
    "topic": "CS 29–30",
    "prompt": "Which statement best connects postwar population change with federal policy debates?",
    "choices": [
      "Migration eliminated differences in local wealth",
      "Federal policies ended every regional job decline",
      "Population growth made public services unnecessary",
      "Migration reshaped communities as policy debates addressed new needs"
    ],
    "answer": 3,
    "source": "https://www.lbjlibrary.org/learn/educators/primary-sources",
    "where": "Great Society and War on Poverty → Johnson administration initiatives",
    "explanation": "Migration changed where people lived and what services communities needed, influencing debates about government policy.",
    "hint": "Focus on the historical distinction in the question. Review: johnson administration initiatives."
  }
];
})();
