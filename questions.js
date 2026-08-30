const GAME_ID = "american-government-pretest-v2";
const GAME_TITLE = "American Government Pretest";
const QUESTIONS = [
  {
    "id": "G01",
    "topic": "CS13 Checks and Balances",
    "prompt": "Congress passes a bill, but the president vetoes it. Which action would allow Congress to check the president?",
    "options": [
      {
        "id": "G01-o1",
        "text": "Approve the bill by a two-thirds vote"
      },
      {
        "id": "G01-o2",
        "text": "Ask the Supreme Court to sign the bill"
      },
      {
        "id": "G01-o3",
        "text": "Order the cabinet to enforce the bill"
      },
      {
        "id": "G01-o4",
        "text": "Require the states to ratify the bill"
      }
    ]
  },
  {
    "id": "G02",
    "topic": "CS1 Civic Engagement",
    "prompt": "Residents want a safer intersection near their school. What should they do before proposing a solution?",
    "options": [
      {
        "id": "G02-o1",
        "text": "Choose a solution before gathering any evidence"
      },
      {
        "id": "G02-o2",
        "text": "Research the problem and identify responsible officials"
      },
      {
        "id": "G02-o3",
        "text": "Wait until an election replaces the local officials"
      },
      {
        "id": "G02-o4",
        "text": "Ask a court to write a new traffic ordinance"
      }
    ]
  },
  {
    "id": "G03",
    "topic": "CS1 Civic Engagement",
    "prompt": "A political party recruits candidates and campaigns for them. What is the party attempting to gain?",
    "options": [
      {
        "id": "G03-o1",
        "text": "Control over judicial interpretation of every law"
      },
      {
        "id": "G03-o2",
        "text": "Authority to regulate all privately owned media"
      },
      {
        "id": "G03-o3",
        "text": "Influence over government decisions through elections"
      },
      {
        "id": "G03-o4",
        "text": "Power to replace state and local constitutions"
      }
    ]
  },
  {
    "id": "G04",
    "topic": "CS1 Civic Engagement",
    "prompt": "After a legislature funds a public program, an agency writes rules for operating it. This is primarily part of which process?",
    "options": [
      {
        "id": "G04-o1",
        "text": "The process of selecting candidates for office"
      },
      {
        "id": "G04-o2",
        "text": "The process of reporting election-night results"
      },
      {
        "id": "G04-o3",
        "text": "The process of amending a party platform"
      },
      {
        "id": "G04-o4",
        "text": "The process of implementing public policy"
      }
    ]
  },
  {
    "id": "G05",
    "topic": "CS1 Civic Engagement",
    "prompt": "An organization contacts lawmakers about clean-water legislation but does not nominate candidates. What type of organization is it?",
    "options": [
      {
        "id": "G05-o1",
        "text": "An interest group seeking policy influence"
      },
      {
        "id": "G05-o2",
        "text": "A political party seeking electoral control"
      },
      {
        "id": "G05-o3",
        "text": "A news organization reporting public events"
      },
      {
        "id": "G05-o4",
        "text": "A court reviewing a constitutional dispute"
      }
    ]
  },
  {
    "id": "G06",
    "topic": "CS1 Civic Engagement",
    "prompt": "How can a political party most directly influence future public policy?",
    "options": [
      {
        "id": "G06-o1",
        "text": "By deciding whether court rulings are constitutional"
      },
      {
        "id": "G06-o2",
        "text": "By electing candidates who support its platform"
      },
      {
        "id": "G06-o3",
        "text": "By requiring journalists to endorse its candidates"
      },
      {
        "id": "G06-o4",
        "text": "By supervising the work of private interest groups"
      }
    ]
  },
  {
    "id": "G07",
    "topic": "CS1 Civic Engagement",
    "prompt": "A neighborhood group wants to reach local homeowners about a zoning proposal. Why might it choose targeted social media?",
    "options": [
      {
        "id": "G07-o1",
        "text": "It guarantees that city council will approve the proposal"
      },
      {
        "id": "G07-o2",
        "text": "It prevents opponents from responding to the proposal"
      },
      {
        "id": "G07-o3",
        "text": "It efficiently reaches people affected by the proposal"
      },
      {
        "id": "G07-o4",
        "text": "It transfers zoning authority to the neighborhood group"
      }
    ]
  },
  {
    "id": "G08",
    "topic": "CS1 Civic Engagement",
    "prompt": "Which action uses media to build public awareness of a civic issue?",
    "options": [
      {
        "id": "G08-o1",
        "text": "Submitting testimony during a judicial proceeding"
      },
      {
        "id": "G08-o2",
        "text": "Registering voters at the county election office"
      },
      {
        "id": "G08-o3",
        "text": "Collecting signatures for a municipal petition"
      },
      {
        "id": "G08-o4",
        "text": "Publishing a documented editorial in a newspaper"
      }
    ]
  },
  {
    "id": "G09",
    "topic": "CS1 Civic Engagement",
    "prompt": "A student group compares a podcast, newspaper advertisement, and public meeting. What should determine which medium it uses?",
    "options": [
      {
        "id": "G09-o1",
        "text": "The audience it needs to reach and the message it has"
      },
      {
        "id": "G09-o2",
        "text": "The medium that prevents anyone from challenging its position"
      },
      {
        "id": "G09-o3",
        "text": "The option that requires no evidence supporting its position"
      },
      {
        "id": "G09-o4",
        "text": "The method that permits government to avoid public response"
      }
    ]
  },
  {
    "id": "G10",
    "topic": "CS1 Civic Engagement",
    "prompt": "Before supporting a proposal to build a recreation center, citizens compare expenses with expected community benefits. What are they evaluating?",
    "options": [
      {
        "id": "G10-o1",
        "text": "Whether courts have jurisdiction over every local project"
      },
      {
        "id": "G10-o2",
        "text": "The costs and benefits of a proposed solution"
      },
      {
        "id": "G10-o3",
        "text": "Whether political parties can manage the construction"
      },
      {
        "id": "G10-o4",
        "text": "The constitutional amendment process for local projects"
      }
    ]
  },
  {
    "id": "G11",
    "topic": "CS1 Civic Engagement",
    "prompt": "Which action is the clearest example of participating in local government?",
    "options": [
      {
        "id": "G11-o1",
        "text": "Writing to a senator about a foreign treaty"
      },
      {
        "id": "G11-o2",
        "text": "Watching a presidential debate on television"
      },
      {
        "id": "G11-o3",
        "text": "Speaking during a city council public-comment period"
      },
      {
        "id": "G11-o4",
        "text": "Reading a Supreme Court opinion about federal law"
      }
    ]
  },
  {
    "id": "G12",
    "topic": "CS2 Source Credibility",
    "prompt": "Two websites disagree about a ballot issue. Which evidence most strongly supports a website's credibility?",
    "options": [
      {
        "id": "G12-o1",
        "text": "The website uses an attractive layout and many photographs"
      },
      {
        "id": "G12-o2",
        "text": "The article has been shared by a large number of users"
      },
      {
        "id": "G12-o3",
        "text": "The headline strongly agrees with the reader's existing opinion"
      },
      {
        "id": "G12-o4",
        "text": "The author identifies sources that independently verify its claims"
      }
    ]
  },
  {
    "id": "G13",
    "topic": "CS2 Source Credibility",
    "prompt": "Which feature should make a researcher question the reliability of a source?",
    "options": [
      {
        "id": "G13-o1",
        "text": "Claims rely on unnamed evidence and ignore contrary information"
      },
      {
        "id": "G13-o2",
        "text": "Conclusions distinguish established facts from the writer's opinions"
      },
      {
        "id": "G13-o3",
        "text": "Statistics link to records published by the responsible agency"
      },
      {
        "id": "G13-o4",
        "text": "The author explains the methods used to collect the information"
      }
    ]
  },
  {
    "id": "G14",
    "topic": "CS2 Source Credibility",
    "prompt": "A student must recommend a policy for reducing traffic congestion. What should the student do first with the available sources?",
    "options": [
      {
        "id": "G14-o1",
        "text": "Use every source so that no perspective is excluded"
      },
      {
        "id": "G14-o2",
        "text": "Select sources relevant to the specific research question"
      },
      {
        "id": "G14-o3",
        "text": "Reject sources written before the current school year"
      },
      {
        "id": "G14-o4",
        "text": "Accept sources that recommend the same preferred solution"
      }
    ]
  },
  {
    "id": "G15",
    "topic": "CS3 Democratic Processes",
    "prompt": "A council member presents evidence to convince undecided members to support an ordinance. Which democratic skill is being used?",
    "options": [
      {
        "id": "G15-o1",
        "text": "Judicial review of a legislative action"
      },
      {
        "id": "G15-o2",
        "text": "Executive enforcement of an existing law"
      },
      {
        "id": "G15-o3",
        "text": "Persuasion within a decision-making group"
      },
      {
        "id": "G15-o4",
        "text": "Federal oversight of a municipal election"
      }
    ]
  },
  {
    "id": "G16",
    "topic": "CS3 Democratic Processes",
    "prompt": "Members of a committee disagree but work toward a decision everyone can accept. What process are they using?",
    "options": [
      {
        "id": "G16-o1",
        "text": "They are transferring authority to another branch"
      },
      {
        "id": "G16-o2",
        "text": "They are delaying the issue until the next election"
      },
      {
        "id": "G16-o3",
        "text": "They are asking a court to create a compromise"
      },
      {
        "id": "G16-o4",
        "text": "They are building consensus among group members"
      }
    ]
  },
  {
    "id": "G17",
    "topic": "CS3 Democratic Processes",
    "prompt": "Two groups begin negotiations with different proposals. Which action is most likely to produce an agreement?",
    "options": [
      {
        "id": "G17-o1",
        "text": "Each group identifies priorities and offers reasonable concessions"
      },
      {
        "id": "G17-o2",
        "text": "Each group refuses to explain the reasons behind its position"
      },
      {
        "id": "G17-o3",
        "text": "One group prevents the other from participating in discussion"
      },
      {
        "id": "G17-o4",
        "text": "Both groups submit the dispute directly to federal officials"
      }
    ]
  },
  {
    "id": "G18",
    "topic": "CS3 Democratic Processes",
    "prompt": "Why is compromise often necessary when making policy in a diverse democracy?",
    "options": [
      {
        "id": "G18-o1",
        "text": "It permits officials to avoid responsibility for their decisions"
      },
      {
        "id": "G18-o2",
        "text": "It allows groups with different interests to reach a workable result"
      },
      {
        "id": "G18-o3",
        "text": "It guarantees that every participant receives everything requested"
      },
      {
        "id": "G18-o4",
        "text": "It removes the need for further public debate or policy revision"
      }
    ]
  },
  {
    "id": "G19",
    "topic": "CS3 Democratic Processes",
    "prompt": "During negotiations, a legislator explains a proposal, listens to objections, and changes part of it. Which combination of skills is demonstrated?",
    "options": [
      {
        "id": "G19-o1",
        "text": "Judicial review, enforcement, and federalism"
      },
      {
        "id": "G19-o2",
        "text": "Campaigning, voting, and constitutional amendment"
      },
      {
        "id": "G19-o3",
        "text": "Persuasion, active listening, and compromise"
      },
      {
        "id": "G19-o4",
        "text": "Investigation, impeachment, and executive privilege"
      }
    ]
  },
  {
    "id": "G20",
    "topic": "CS3 Democratic Processes",
    "prompt": "Which situation best illustrates persuasion in a legislative setting?",
    "options": [
      {
        "id": "G20-o1",
        "text": "A governor directs an agency to enforce a statute"
      },
      {
        "id": "G20-o2",
        "text": "A court issues an opinion resolving a legal dispute"
      },
      {
        "id": "G20-o3",
        "text": "An election board certifies the results of an election"
      },
      {
        "id": "G20-o4",
        "text": "A representative uses evidence to build support for a bill"
      }
    ]
  },
  {
    "id": "G21",
    "topic": "CS3 Democratic Processes",
    "prompt": "Why should citizens evaluate sources before participating in a public-policy debate?",
    "options": [
      {
        "id": "G21-o1",
        "text": "Reliable information helps them make and defend informed decisions"
      },
      {
        "id": "G21-o2",
        "text": "Evaluating information guarantees that citizens will reach agreement"
      },
      {
        "id": "G21-o3",
        "text": "Source evaluation allows citizens to avoid considering other views"
      },
      {
        "id": "G21-o4",
        "text": "Reliable sources give citizens authority to enact policies directly"
      }
    ]
  },
  {
    "id": "G22",
    "topic": "CS13 Checks and Balances",
    "prompt": "A federal court rules that a recently enacted statute violates the Constitution. Which check has occurred?",
    "options": [
      {
        "id": "G22-o1",
        "text": "The executive branch has checked the judicial branch"
      },
      {
        "id": "G22-o2",
        "text": "The judicial branch has checked the legislative branch"
      },
      {
        "id": "G22-o3",
        "text": "The legislative branch has checked the executive branch"
      },
      {
        "id": "G22-o4",
        "text": "The state governments have checked the national government"
      }
    ]
  },
  {
    "id": "G23",
    "topic": "CS4 Civic Responsibilities",
    "prompt": "Which action best demonstrates the responsibility that accompanies the right to vote?",
    "options": [
      {
        "id": "G23-o1",
        "text": "Supporting every candidate from the same political party"
      },
      {
        "id": "G23-o2",
        "text": "Voting only when a presidential election is being held"
      },
      {
        "id": "G23-o3",
        "text": "Learning about candidates and issues before casting a ballot"
      },
      {
        "id": "G23-o4",
        "text": "Allowing public officials to decide which citizens may participate"
      }
    ]
  },
  {
    "id": "G24",
    "topic": "CS14-15 Civil Rights",
    "prompt": "The Supreme Court applies a protection in the Bill of Rights to state governments through the Fourteenth Amendment. What process is this?",
    "options": [
      {
        "id": "G24-o1",
        "text": "The use of executive privilege by state governors"
      },
      {
        "id": "G24-o2",
        "text": "The exercise of reserved powers by state legislatures"
      },
      {
        "id": "G24-o3",
        "text": "The amendment of a state constitution by referendum"
      },
      {
        "id": "G24-o4",
        "text": "The incorporation of a federal protection against the states"
      }
    ]
  },
  {
    "id": "G25",
    "topic": "CS14-15 Civil Rights",
    "prompt": "A governor refuses to follow a federal court order requiring school integration. How did the executive branch historically respond in a similar situation?",
    "options": [
      {
        "id": "G25-o1",
        "text": "The president used federal troops to enforce the court order"
      },
      {
        "id": "G25-o2",
        "text": "Congress removed the state governor through an impeachment trial"
      },
      {
        "id": "G25-o3",
        "text": "The Supreme Court placed the state legislature under federal control"
      },
      {
        "id": "G25-o4",
        "text": "The Department of State negotiated an agreement with the governor"
      }
    ]
  },
  {
    "id": "G26",
    "topic": "CS16 Ohio Constitution",
    "prompt": "Which structural feature is found in both the Ohio Constitution and the U.S. Constitution?",
    "options": [
      {
        "id": "G26-o1",
        "text": "Judges in both systems serve identical terms of office"
      },
      {
        "id": "G26-o2",
        "text": "Governmental power is separated among three branches"
      },
      {
        "id": "G26-o3",
        "text": "Citizens in both systems may initiate federal legislation"
      },
      {
        "id": "G26-o4",
        "text": "Legislators in both systems face the same term limits"
      }
    ]
  },
  {
    "id": "G27",
    "topic": "CS16 Ohio Constitution",
    "prompt": "Which power available to Ohio voters is not provided to voters by the U.S. Constitution?",
    "options": [
      {
        "id": "G27-o1",
        "text": "Selecting representatives to serve in a legislature"
      },
      {
        "id": "G27-o2",
        "text": "Voting for candidates who seek executive office"
      },
      {
        "id": "G27-o3",
        "text": "Proposing statutes through the initiative process"
      },
      {
        "id": "G27-o4",
        "text": "Petitioning government officials about public issues"
      }
    ]
  },
  {
    "id": "G28",
    "topic": "CS16 Ohio Constitution",
    "prompt": "The Ohio Constitution of 1851 reduced the governor's appointment power. How were several major officials selected instead?",
    "options": [
      {
        "id": "G28-o1",
        "text": "They were appointed by members of the General Assembly"
      },
      {
        "id": "G28-o2",
        "text": "They were selected by county courts for limited terms"
      },
      {
        "id": "G28-o3",
        "text": "They were nominated by the governor and confirmed by voters"
      },
      {
        "id": "G28-o4",
        "text": "They were elected directly by the citizens of the state"
      }
    ]
  },
  {
    "id": "G29",
    "topic": "CS17 Ohio Civic Participation",
    "prompt": "A township depends on residents to provide emergency services. Which action represents direct citizen assistance?",
    "options": [
      {
        "id": "G29-o1",
        "text": "Residents volunteer to serve in the local fire department"
      },
      {
        "id": "G29-o2",
        "text": "Residents ask Congress to create a federal fire department"
      },
      {
        "id": "G29-o3",
        "text": "Residents petition a court to manage emergency operations"
      },
      {
        "id": "G29-o4",
        "text": "Residents transfer township authority to the state government"
      }
    ]
  },
  {
    "id": "G30",
    "topic": "CS17 Ohio Civic Participation",
    "prompt": "Which action allows Ohio citizens to place a proposed state law before voters?",
    "options": [
      {
        "id": "G30-o1",
        "text": "Requesting judicial review from the Ohio Supreme Court"
      },
      {
        "id": "G30-o2",
        "text": "Collecting the required signatures for an initiative petition"
      },
      {
        "id": "G30-o3",
        "text": "Asking the governor to issue a permanent executive order"
      },
      {
        "id": "G30-o4",
        "text": "Submitting the proposal to the United States Senate"
      }
    ]
  },
  {
    "id": "G31",
    "topic": "CS18-19 Public Policy",
    "prompt": "The president needs advice about relations with another country. Which executive department has the primary responsibility?",
    "options": [
      {
        "id": "G31-o1",
        "text": "The Department of Commerce"
      },
      {
        "id": "G31-o2",
        "text": "The Department of the Treasury"
      },
      {
        "id": "G31-o3",
        "text": "The Department of State"
      },
      {
        "id": "G31-o4",
        "text": "The Department of the Interior"
      }
    ]
  },
  {
    "id": "G32",
    "topic": "CS18-19 Public Policy",
    "prompt": "Which situation is most clearly a public-policy issue?",
    "options": [
      {
        "id": "G32-o1",
        "text": "A family chooses how to divide its monthly household budget"
      },
      {
        "id": "G32-o2",
        "text": "A business decides which applicant to hire for an open position"
      },
      {
        "id": "G32-o3",
        "text": "A club determines the requirements for electing its officers"
      },
      {
        "id": "G32-o4",
        "text": "Congress debates programs intended to stabilize the national economy"
      }
    ]
  },
  {
    "id": "G33",
    "topic": "CS18-19 Public Policy",
    "prompt": "A citizen wants to influence a bill currently being considered by the Ohio General Assembly. Which action is most direct?",
    "options": [
      {
        "id": "G33-o1",
        "text": "Contacting legislators to present evidence about the bill"
      },
      {
        "id": "G33-o2",
        "text": "Asking a federal court to rewrite the proposed legislation"
      },
      {
        "id": "G33-o3",
        "text": "Requesting the president to veto the state legislation"
      },
      {
        "id": "G33-o4",
        "text": "Petitioning another state to adopt a different policy"
      }
    ]
  },
  {
    "id": "G34",
    "topic": "CS20 Fiscal Policy",
    "prompt": "During a recession, Congress increases infrastructure spending and reduces certain taxes. Which policy is Congress using?",
    "options": [
      {
        "id": "G34-o1",
        "text": "Monetary policy through bank-reserve regulations"
      },
      {
        "id": "G34-o2",
        "text": "Fiscal policy through government spending and taxation"
      },
      {
        "id": "G34-o3",
        "text": "Trade policy through tariffs and import limitations"
      },
      {
        "id": "G34-o4",
        "text": "Judicial policy through constitutional interpretation"
      }
    ]
  },
  {
    "id": "G35",
    "topic": "CS21 Monetary Policy",
    "prompt": "The Federal Reserve wants to encourage borrowing and economic activity. Which action would support that goal?",
    "options": [
      {
        "id": "G35-o1",
        "text": "Increase federal income-tax rates"
      },
      {
        "id": "G35-o2",
        "text": "Reduce appropriations for federal agencies"
      },
      {
        "id": "G35-o3",
        "text": "Lower the target for short-term interest rates"
      },
      {
        "id": "G35-o4",
        "text": "Raise tariffs on imported consumer products"
      }
    ]
  },
  {
    "id": "G36",
    "topic": "CS5 Basic Principles",
    "prompt": "Citizens vote against officials whose policies they oppose. Which constitutional principle does this most directly demonstrate?",
    "options": [
      {
        "id": "G36-o1",
        "text": "Judicial review because courts supervise election procedures"
      },
      {
        "id": "G36-o2",
        "text": "Federalism because states conduct national elections"
      },
      {
        "id": "G36-o3",
        "text": "Limited government because elections eliminate public authority"
      },
      {
        "id": "G36-o4",
        "text": "Popular sovereignty because power originates with the people"
      }
    ]
  },
  {
    "id": "G37",
    "topic": "CS5 Basic Principles",
    "prompt": "A president's action is overturned because it exceeds constitutional authority. Which principle is illustrated?",
    "options": [
      {
        "id": "G37-o1",
        "text": "Limited government subjects officials to established legal restraints"
      },
      {
        "id": "G37-o2",
        "text": "Popular sovereignty allows officials to disregard constitutional limits"
      },
      {
        "id": "G37-o3",
        "text": "Federalism gives the executive branch control over state governments"
      },
      {
        "id": "G37-o4",
        "text": "Separation of powers permits presidents to interpret all federal laws"
      }
    ]
  },
  {
    "id": "G38",
    "topic": "CS5 Basic Principles",
    "prompt": "Both Congress and a state legislature enact laws within their assigned areas of authority. Which principle explains this arrangement?",
    "options": [
      {
        "id": "G38-o1",
        "text": "Judicial review divides authority between trial and appellate courts"
      },
      {
        "id": "G38-o2",
        "text": "Federalism divides authority between national and state governments"
      },
      {
        "id": "G38-o3",
        "text": "Popular sovereignty divides authority between voters and political parties"
      },
      {
        "id": "G38-o4",
        "text": "Limited government divides authority between citizens and the media"
      }
    ]
  },
  {
    "id": "G39",
    "topic": "CS5 Basic Principles",
    "prompt": "A proposal for a federal statute is introduced, debated, and voted upon. Which branch performs these functions?",
    "options": [
      {
        "id": "G39-o1",
        "text": "The executive branch"
      },
      {
        "id": "G39-o2",
        "text": "The judicial branch"
      },
      {
        "id": "G39-o3",
        "text": "The legislative branch"
      },
      {
        "id": "G39-o4",
        "text": "The administrative branch"
      }
    ]
  },
  {
    "id": "G40",
    "topic": "CS5 Basic Principles",
    "prompt": "Why does the Constitution give each branch methods for limiting the other branches?",
    "options": [
      {
        "id": "G40-o1",
        "text": "To permit one branch to assume control during political disagreement"
      },
      {
        "id": "G40-o2",
        "text": "To ensure that state governments supervise every federal decision"
      },
      {
        "id": "G40-o3",
        "text": "To allow political parties to replace constitutional institutions"
      },
      {
        "id": "G40-o4",
        "text": "To prevent the concentration and abuse of governmental power"
      }
    ]
  },
  {
    "id": "G41",
    "topic": "CS6 Federalists and Anti-Federalists",
    "prompt": "Which position would a Federalist most likely have supported during the ratification debate?",
    "options": [
      {
        "id": "G41-o1",
        "text": "The Constitution should be ratified to create an effective national government"
      },
      {
        "id": "G41-o2",
        "text": "The Articles should remain because states need complete political independence"
      },
      {
        "id": "G41-o3",
        "text": "The Constitution should be rejected until the national government is eliminated"
      },
      {
        "id": "G41-o4",
        "text": "The states should form separate alliances instead of one national union"
      }
    ]
  },
  {
    "id": "G42",
    "topic": "CS6 Federalists and Anti-Federalists",
    "prompt": "What was a central Anti-Federalist objection to the proposed Constitution?",
    "options": [
      {
        "id": "G42-o1",
        "text": "It prevented Congress from addressing national economic problems"
      },
      {
        "id": "G42-o2",
        "text": "It threatened liberty by granting extensive power to the national government"
      },
      {
        "id": "G42-o3",
        "text": "It denied the national government authority to conduct foreign policy"
      },
      {
        "id": "G42-o4",
        "text": "It required states to maintain separate currencies and military alliances"
      }
    ]
  },
  {
    "id": "G43",
    "topic": "CS6 Federalists and Anti-Federalists",
    "prompt": "Which addition helped secure support for ratification from people concerned about individual liberty?",
    "options": [
      {
        "id": "G43-o1",
        "text": "A provision allowing states to withdraw from the union"
      },
      {
        "id": "G43-o2",
        "text": "A requirement that all federal laws receive state approval"
      },
      {
        "id": "G43-o3",
        "text": "A Bill of Rights limiting the power of the national government"
      },
      {
        "id": "G43-o4",
        "text": "A system permitting governors to veto acts of Congress"
      }
    ]
  },
  {
    "id": "G44",
    "topic": "CS7 Constitutional Change",
    "prompt": "Which example demonstrates formal constitutional change rather than an informal change?",
    "options": [
      {
        "id": "G44-o1",
        "text": "Political parties organize the presidential nomination process"
      },
      {
        "id": "G44-o2",
        "text": "Congress establishes committees to oversee executive agencies"
      },
      {
        "id": "G44-o3",
        "text": "The Supreme Court applies broad language to a new controversy"
      },
      {
        "id": "G44-o4",
        "text": "The states ratify an amendment altering presidential succession"
      }
    ]
  },
  {
    "id": "G45",
    "topic": "CS7 Constitutional Change",
    "prompt": "Congress regularly questions executive officials about how laws are administered. Which informal practice does this illustrate?",
    "options": [
      {
        "id": "G45-o1",
        "text": "Legislative oversight of executive-branch activity"
      },
      {
        "id": "G45-o2",
        "text": "Judicial incorporation of protections against states"
      },
      {
        "id": "G45-o3",
        "text": "Executive negotiation of treaties with other countries"
      },
      {
        "id": "G45-o4",
        "text": "State ratification of amendments to the Constitution"
      }
    ]
  },
  {
    "id": "G46",
    "topic": "CS8 Bill of Rights",
    "prompt": "A city attempts to punish a resident solely for criticizing the mayor. Which amendment most directly protects the resident?",
    "options": [
      {
        "id": "G46-o1",
        "text": "The Fourth Amendment's protection against unreasonable searches"
      },
      {
        "id": "G46-o2",
        "text": "The First Amendment's protection of freedom of speech"
      },
      {
        "id": "G46-o3",
        "text": "The Sixth Amendment's guarantee of a speedy public trial"
      },
      {
        "id": "G46-o4",
        "text": "The Tenth Amendment's reservation of undelegated powers"
      }
    ]
  },
  {
    "id": "G47",
    "topic": "CS8 Bill of Rights",
    "prompt": "Police enter a person's home without a warrant or an emergency. Which constitutional protection is most directly involved?",
    "options": [
      {
        "id": "G47-o1",
        "text": "Protection against compelled self-incrimination"
      },
      {
        "id": "G47-o2",
        "text": "Protection of the right to assistance of counsel"
      },
      {
        "id": "G47-o3",
        "text": "Protection against unreasonable searches and seizures"
      },
      {
        "id": "G47-o4",
        "text": "Protection against excessive bail and criminal fines"
      }
    ]
  },
  {
    "id": "G48",
    "topic": "CS9 Reconstruction Amendments",
    "prompt": "Which constitutional change permanently prohibited slavery throughout the United States?",
    "options": [
      {
        "id": "G48-o1",
        "text": "The Fourteenth Amendment"
      },
      {
        "id": "G48-o2",
        "text": "The Fifteenth Amendment"
      },
      {
        "id": "G48-o3",
        "text": "The Nineteenth Amendment"
      },
      {
        "id": "G48-o4",
        "text": "The Thirteenth Amendment"
      }
    ]
  },
  {
    "id": "G49",
    "topic": "CS9 Reconstruction Amendments",
    "prompt": "A state denies equal legal protection to a person born in the United States. Which amendment is most directly relevant?",
    "options": [
      {
        "id": "G49-o1",
        "text": "The Fourteenth Amendment's citizenship and equal-protection clauses"
      },
      {
        "id": "G49-o2",
        "text": "The Fifteenth Amendment's protection against racial voting restrictions"
      },
      {
        "id": "G49-o3",
        "text": "The Nineteenth Amendment's protection against sex-based voting restrictions"
      },
      {
        "id": "G49-o4",
        "text": "The Twenty-sixth Amendment's voting protection for eighteen-year-olds"
      }
    ]
  },
  {
    "id": "G50",
    "topic": "CS9 Reconstruction Amendments",
    "prompt": "Why did constitutional amendments after the Civil War fail to produce immediate racial equality?",
    "options": [
      {
        "id": "G50-o1",
        "text": "Federal courts declared all three amendments invalid after ratification"
      },
      {
        "id": "G50-o2",
        "text": "State and local Jim Crow systems restricted rights through segregation"
      },
      {
        "id": "G50-o3",
        "text": "Congress limited the amendments to people living in western territories"
      },
      {
        "id": "G50-o4",
        "text": "The amendments protected economic rights but excluded political rights"
      }
    ]
  },
  {
    "id": "G51",
    "topic": "CS10 Suffrage",
    "prompt": "A state law denies a citizen the vote solely because she is a woman. Which amendment prohibits that restriction?",
    "options": [
      {
        "id": "G51-o1",
        "text": "The Fifteenth Amendment"
      },
      {
        "id": "G51-o2",
        "text": "The Seventeenth Amendment"
      },
      {
        "id": "G51-o3",
        "text": "The Nineteenth Amendment"
      },
      {
        "id": "G51-o4",
        "text": "The Twenty-fourth Amendment"
      }
    ]
  },
  {
    "id": "G52",
    "topic": "CS10 Suffrage",
    "prompt": "A state requires citizens to pay a fee before voting in a federal election. Which amendment prohibits this requirement?",
    "options": [
      {
        "id": "G52-o1",
        "text": "The Fifteenth Amendment"
      },
      {
        "id": "G52-o2",
        "text": "The Nineteenth Amendment"
      },
      {
        "id": "G52-o3",
        "text": "The Twenty-third Amendment"
      },
      {
        "id": "G52-o4",
        "text": "The Twenty-fourth Amendment"
      }
    ]
  },
  {
    "id": "G53",
    "topic": "CS11 Electoral College and Presidency",
    "prompt": "Which change did the Twelfth Amendment make to the Electoral College process?",
    "options": [
      {
        "id": "G53-o1",
        "text": "Electors cast separate ballots for president and vice president"
      },
      {
        "id": "G53-o2",
        "text": "Electors are selected through one national popular election"
      },
      {
        "id": "G53-o3",
        "text": "Electoral votes are assigned equally to each participating state"
      },
      {
        "id": "G53-o4",
        "text": "The House automatically selects both officers after every election"
      }
    ]
  },
  {
    "id": "G54",
    "topic": "CS11 Electoral College and Presidency",
    "prompt": "A president has been elected twice and seeks another elected term. Which amendment establishes the relevant limit?",
    "options": [
      {
        "id": "G54-o1",
        "text": "The Twentieth Amendment"
      },
      {
        "id": "G54-o2",
        "text": "The Twenty-second Amendment"
      },
      {
        "id": "G54-o3",
        "text": "The Twenty-third Amendment"
      },
      {
        "id": "G54-o4",
        "text": "The Twenty-fifth Amendment"
      }
    ]
  },
  {
    "id": "G55",
    "topic": "CS11 Electoral College and Presidency",
    "prompt": "Congress enacts a new federal law. Which branch is principally responsible for carrying it out?",
    "options": [
      {
        "id": "G55-o1",
        "text": "The legislative branch"
      },
      {
        "id": "G55-o2",
        "text": "The judicial branch"
      },
      {
        "id": "G55-o3",
        "text": "The executive branch"
      },
      {
        "id": "G55-o4",
        "text": "The constitutional branch"
      }
    ]
  }
];
