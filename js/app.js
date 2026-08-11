/* ==========================================================================
   SICNI / SIRAC DIGITAL PLATFORM INTERACTIVE APPLICATION LOGIC
   Strict adherence to Figma design file (scini fileKey: mACONf61UXiOLFNtjqNjQ9)
   Node 7:3995 (About Us Desktop Frame) & Node 7:4729 (About Us Mobile Frame)
   Responsive Design, Custom Team Positioning, Privacy Policy & Terms Routing
   ========================================================================== */

// CENTRALIZED SYSTEM CONFIGURATION (Easily editable URLs & Contacts)
const CONFIG = {
  // Google Form URL for Programme Registration
  GOOGLE_FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSfwtmKBEhaqXLqIzBqhc1AJboWk50zDKM2VdxM7JIlhrAQ9sZ/viewform?usp=publish-editor",
  
  // Official Contact Emails
  MEDIA_EMAIL: "SICNI.credible@gmail.com",
  CONTACT_EMAIL: "SICNI.credible@gmail.com",
  PARTNERSHIP_EMAIL: "SICNI.credible@gmail.com",

  // WhatsApp Contact Configuration
  WHATSAPP_NUMBER: "+2347014765157",
  WHATSAPP_LINK: "https://wa.me/2347014765157?text=Hello%2C%20I%20would%20like%20to%20discuss%20research%20collaboration%20with%20SICNI.",

  // Formspree / Endpoint Destination for Form Submissions to reach SICNI.credible@gmail.com
  FORMSPREE_ENDPOINT: "https://formspree.io/f/sicni.credible@gmail.com"
};

// 1. FACTUAL PROGRAMME DATA (No em dashes)
const PROGRAM_DATA = [
  {
    id: "quarterly-tracking",
    num: "01",
    badge: "FLAGSHIP PROGRAMME",
    title: "Quarterly Leadership & Governance Tracking Study",
    desc: "A nationwide tracking study that monitors leadership performance, governance perceptions and public priorities every quarter across all 36 states and the FCT.",
    image: "images/Image.png",
    achievements: [
      "Established the first continuous nationwide governance tracking system",
      "Produced 20+ quarterly reports informing federal and state policy",
      "Built one of Africa's largest governance perception datasets"
    ],
    impactStats: [
      { val: "36+", lbl: "States & FCT", sub: "Nationwide reach" },
      { val: "50,000+", lbl: "Respondents", sub: "Per wave average" },
      { val: "20+", lbl: "Quarterly Reports", sub: "Published to date" }
    ],
    outputs: [
      "Evidence-based quarterly governance reports",
      "Nationwide policy briefs for decision makers",
      "Longitudinal leadership performance dashboards"
    ]
  },
  {
    id: "salgpi",
    num: "02",
    badge: "PERFORMANCE INDEX",
    title: "SALGPI: Subnational Leadership & Governance Performance Index",
    desc: "Measures and ranks leadership performance and governance outcomes at the subnational level to promote accountability and drive improvement across all 774 LGAs.",
    image: "images/Image (Africa governance research).png",
    achievements: [
      "Developed the most comprehensive subnational governance index in Nigeria",
      "Assessed 774 LGAs across 6 critical governance domains",
      "Became a reference tool for development partners and federal agencies"
    ],
    impactStats: [
      { val: "774", lbl: "LGAs Assessed", sub: "Subnational reach" },
      { val: "6", lbl: "Critical Domains", sub: "Evaluation scope" },
      { val: "Annual", lbl: "Performance Index", sub: "Publication cycle" }
    ],
    outputs: [
      "Annual LGA performance index and rankings",
      "Comparative governance domain benchmarks",
      "State-level accountability and reform reports"
    ]
  },
  {
    id: "scorecard-awards",
    num: "03",
    badge: "RECOGNITION PROGRAMME",
    title: "Leadership Performance Scorecard & Awards",
    desc: "Recognises outstanding leaders and institutions demonstrating excellence in governance, transparency and service delivery through a rigorous evidence-based assessment framework.",
    image: "images/Image (Leadership training group).png",
    achievements: [
      "Recognised 50+ high-performing leaders and institutions since inception",
      "Established a national standard for leadership excellence evaluation",
      "Created incentive structures for accountability in public service"
    ],
    impactStats: [
      { val: "50+", lbl: "Leaders Recognised", sub: "Honoured to date" },
      { val: "Annual", lbl: "Publication Cycle", sub: "Evaluation wave" },
      { val: "National", lbl: "Recognition Scope", sub: "Institutional reach" }
    ],
    outputs: [
      "Annual leadership scorecard publication",
      "Excellence awards ceremony & showcase",
      "National recognition framework for public leaders"
    ]
  },
  {
    id: "credible-leadership",
    num: "04",
    badge: "CAPACITY DEVELOPMENT",
    title: "Credible Leadership Initiative",
    desc: "Builds the capacity and ethical standards of emerging and current leaders through training, mentorship and leadership development programmes targeted at youth, women and public officials.",
    image: "images/Image (Leadership programme in Africa).png",
    achievements: [
      "Trained 2,000+ emerging leaders across all geopolitical zones",
      "Launched dedicated youth and women leadership tracks",
      "Developed a comprehensive ethical leadership curriculum"
    ],
    impactStats: [
      { val: "2,000+", lbl: "Leaders Trained", sub: "Capacity impact" },
      { val: "6", lbl: "Geopolitical Zones", sub: "Program coverage" },
      { val: "Ethics", lbl: "& Integrity Focus", sub: "Core curriculum" }
    ],
    outputs: [
      "Leadership capacity workshops and bootcamps",
      "Ethics and integrity training programmes",
      "Youth and women empowerment tracks"
    ]
  },
  {
    id: "voter-surveys",
    num: "05",
    badge: "CITIZEN RESEARCH",
    title: "Voter Perception & Rating Surveys",
    desc: "Captures citizens voices on leadership, governance and public services to inform decisions and strengthen democratic accountability at all levels of government.",
    image: "images/Image (Community gathering Nigeria).png",
    achievements: [
      "Conducted large-scale surveys reaching 50,000+ citizens nationwide",
      "Provided critical data informing electoral and governance reform discussions",
      "Built a longitudinal citizen satisfaction and trust database"
    ],
    impactStats: [
      { val: "50,000+", lbl: "Citizens Surveyed", sub: "Nationwide poll" },
      { val: "Trust", lbl: "& Approval Metrics", sub: "Core indicator" },
      { val: "Actionable", lbl: "Insights", sub: "For policymakers" }
    ],
    outputs: [
      "Large-scale citizen perception survey reports",
      "Trust, satisfaction and approval rating data",
      "Actionable policy recommendations"
    ]
  },
  {
    id: "research-public-reports",
    num: "06",
    badge: "RESEARCH OUTPUT",
    title: "Research & Public Analysis Reports",
    desc: "Produces high-quality research, policy analysis and public reports on governance, leadership and development issues affecting Nigeria, informing evidence-based decision making at all levels.",
    image: "images/hero image.png",
    achievements: [
      "Published 100+ research reports and policy briefs",
      "Cited by government agencies, UN bodies and academic institutions",
      "Established SIRAC as a leading policy research voice in Nigeria"
    ],
    impactStats: [
      { val: "100+", lbl: "Research Projects", sub: "Completed to date" },
      { val: "Policy", lbl: "& Governance Focus", sub: "Primary mandate" },
      { val: "Open", lbl: "Access Publication", sub: "Public resource" }
    ],
    outputs: [
      "Policy and governance research reports",
      "Thematic research studies and indices",
      "Evidence briefs for decision makers"
    ]
  }
];

// 2. ENRICHED FACTUAL RESEARCH DATA FROM SUPPLIED RESEARCH DOCUMENTS (No em dashes)
const RESEARCH_DATA = [
  {
    id: "leadership-rating-polls-july-2025",
    category: "Full Survey Report",
    badge: "FULL SURVEY REPORT",
    title: "SICNI Leadership Rating Polls: July 2025",
    summary: "A comprehensive nationwide public opinion poll measuring how Nigerians rate the credibility, trustworthiness, transparency, and performance of political leaders across all six geopolitical zones.",
    fieldedDate: "July 2025",
    respondents: 1456,
    statesCount: 6,
    coverage: ["Lagos", "Enugu", "Edo", "Bauchi", "Kano", "FCT"],
    malePct: "47%",
    femalePct: "53%",
    urbanPct: "64%",
    ruralPct: "36%",
    samplingMethod: "Stratified random & multi-stage sampling. 30-minute structured face-to-face interviews fielded across 6 states representing all 6 geopolitical zones.",
    keyMetricVal: "1,456",
    keyMetricLbl: "Validated citizen responses nationwide",
    fullContent: `
      <h2>Executive Summary</h2>
      <p>In July 2025, the Social Impact Catalyst Network Initiative (SICNI) and Social Impact Research & Analytics Center (SIRAC) conducted a comprehensive nationwide public opinion poll across six states selected to represent Nigeria's six geopolitical zones: Lagos (South West), Enugu (South East), Edo (South South), Bauchi (North East), Kano (North West), and the Federal Capital Territory (North Central). The survey reached 1,456 validated citizens through 30-minute structured face-to-face CAPI and paper interviews, capturing direct public sentiment on leadership performance, institutional trust, anti-corruption effectiveness, and democratic expectations.</p>
      
      <div class="article-callout-quote">
        "Overall trust in Nigeria's current political leadership stands at a mean score of 3.15 out of 10 nationwide, with 77% of citizens believing elected leaders lack decision-making transparency."
      </div>

      <h2>Study Rationale & Objectives</h2>
      <p>Leadership quality shapes the trajectory of subnational economic progress, institutional effectiveness, and citizen welfare. In line with SICNI's mandate to catalyze evidence-based governance, this poll was designed to fulfill three primary objectives:</p>
      <ul>
        <li>Identify empirical gaps in political leadership credibility and citizen satisfaction.</li>
        <li>Benchmark public demand for non-negotiable leadership qualities across demographics.</li>
        <li>Formulate actionable, subnational policy interventions to support ethical leadership development.</li>
      </ul>

      <h2>Demographic Breakdown & Achieved Sample</h2>
      <p>The sample of 1,456 respondents was constructed using multi-stage stratified random sampling to ensure representative coverage across urban, semi-urban, and rural local government areas.</p>
      
      <div class="article-data-table-wrapper">
        <table class="article-data-table">
          <thead>
            <tr>
              <th>State / Zone</th>
              <th>Sample Size (N)</th>
              <th>Urban %</th>
              <th>Rural %</th>
              <th>Mean Trust Rating (1-10)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kano (North West)</td>
              <td>290</td>
              <td>60%</td>
              <td>40%</td>
              <td>4.11 / 10</td>
            </tr>
            <tr>
              <td>Bauchi (North East)</td>
              <td>210</td>
              <td>55%</td>
              <td>45%</td>
              <td>3.12 / 10</td>
            </tr>
            <tr>
              <td>FCT (North Central)</td>
              <td>170</td>
              <td>85%</td>
              <td>15%</td>
              <td>2.24 / 10</td>
            </tr>
            <tr>
              <td>Lagos (South West)</td>
              <td>344</td>
              <td>80%</td>
              <td>20%</td>
              <td>3.98 / 10</td>
            </tr>
            <tr>
              <td>Enugu (South East)</td>
              <td>284</td>
              <td>50%</td>
              <td>50%</td>
              <td>2.49 / 10</td>
            </tr>
            <tr>
              <td>Edo (South South)</td>
              <td>158</td>
              <td>65%</td>
              <td>35%</td>
              <td>1.84 / 10</td>
            </tr>
            <tr style="font-weight: 700; background-color: var(--color-bg-beige);">
              <td>Nationwide Total</td>
              <td>1,456</td>
              <td>64%</td>
              <td>36%</td>
              <td>3.15 / 10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Empirical Findings</h2>

      <h3>1. Credibility & Trust Deficit</h3>
      <p>Citizens expressed widespread skepticism regarding elected political officials. Only 4% of respondents rated elected officials as highly or very highly credible (mean rating 2.01 out of 5). Trust ratings were lowest in Edo State (1.84 out of 10) and Enugu State (2.49 out of 10).</p>

      <h3>2. Non-Negotiable Leadership Qualities</h3>
      <p>When asked to select the qualities that matter most in governance, Nigerians overwhelmingly prioritized:</p>
      <ul>
        <li><strong>Accountability (66%)</strong>: Clear responsibility for public funds and policy outcomes.</li>
        <li><strong>Integrity & Ethics (64%)</strong>: Uncompromising moral standards and honesty.</li>
        <li><strong>Competence (56%)</strong>: Demonstrated capacity to execute complex state projects.</li>
        <li><strong>Transparency (40%)</strong>: Open decision-making and public access to official data.</li>
      </ul>

      <h3>3. Transparency & Citizen Benefit</h3>
      <p>77% of respondents reported that elected leaders are not transparent in decision-making, reaching 95% in Enugu and 93% in Bauchi. Furthermore, 79% claimed they have never directly benefited from any government social intervention or infrastructure program.</p>

      <h3>4. Performance of Democratic Institutions</h3>
      <p>68% rated the National Assembly as ineffective in holding the executive accountable. Similarly, 55% perceived anti-corruption agencies (EFCC, ICPC, Code of Conduct Bureau) as ineffective in curbing public sector corruption (reaching 88% in Enugu).</p>

      <h2>Policy Analysis & Strategic Recommendations</h2>
      <p>The survey data underscores an urgent mandate for institutional reform. To restore public trust and build subnational governance capacity, SIRAC recommends four immediate interventions:</p>
      <ol>
        <li><strong>Establish Subnational Leadership Bootcamps:</strong> Mandatory capacity building in fiscal management, ethics, and public administration for newly elected state and local officials.</li>
        <li><strong>Institutionalize Independent LGA Scorecards:</strong> Expand SALGPI tracking across all 774 LGAs to provide open-access performance comparisons.</li>
        <li><strong>Strengthen Public Hearing Access:</strong> Require state assemblies to publish digital voting records and hold mandatory quarterly citizen town halls.</li>
      </ol>
    `
  },
  {
    id: "trust-deficit-nigerian-leadership",
    category: "Governance & Trust",
    badge: "GOVERNANCE & TRUST",
    title: "The Trust Deficit in Nigerian Leadership",
    summary: "Measures public trust, credibility, and priorities assigned to Nigeria's political leadership.",
    fieldedDate: "July 2025",
    respondents: 1456,
    statesCount: 6,
    coverage: ["Lagos", "Enugu", "Edo", "Bauchi", "Kano", "FCT"],
    keyMetricVal: "3.15/10",
    keyMetricLbl: "average trust score in current leadership",
    keyFindingText: "Only 4% rate leaders as highly credible. Top qualities the public wants: accountability (66%), integrity (64%), competence (56%), transparency (40%).",
    policyProposals: "Proposes: a Leadership Talent Identification Program, Ethics & Governance Bootcamp, Public Endorsement Platform, and advocacy for stricter leadership vetting mechanisms.",
    fullContent: `
      <h2>Executive Summary</h2>
      <p>Public trust in governance is the foundational pillar for effective state policy execution and sustainable economic development. Drawing from the African Leadership Development segment of SICNI's nationwide poll (N = 1,456), this report examines the underlying structural causes of citizen cynicism, perceived corruption, and the widening gap between campaign promises and public delivery.</p>

      <div class="article-callout-quote">
        "Only 14% of Nigerians believe elected leaders fulfill their campaign promises, while 87% feel leaders prioritize personal interests over citizen welfare."
      </div>

      <h2>Empirical Insights & Survey Data</h2>
      <p>Data collected across six geopolitical zones reveals consistent patterns of disillusionment with public office holders:</p>
      <ul>
        <li><strong>Low Political Interest:</strong> Overall political interest stands at just 33% nationwide, reflecting deep voter fatigue.</li>
        <li><strong>Perception of Corruption:</strong> 72% of citizens rate political corruption among public officials as high or very high (reaching 88% in Bauchi).</li>
        <li><strong>Campaign Promise Tracking:</strong> Only 14% of respondents believe elected leaders fulfill campaign commitments, though Kano reported a higher perception of fulfillment at 40%.</li>
        <li><strong>Citizen Alignment:</strong> Only 13% believe leaders prioritize the needs of citizens over personal or elite interests.</li>
      </ul>

      <h2>Geopolitical Trust Score Comparison</h2>
      <div class="article-data-table-wrapper">
        <table class="article-data-table">
          <thead>
            <tr>
              <th>Geopolitical Zone</th>
              <th>Key Location</th>
              <th>Trust Rating (1-10)</th>
              <th>Campaign Promise Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>North West</td>
              <td>Kano</td>
              <td>4.11 / 10</td>
              <td>2.63 / 5</td>
            </tr>
            <tr>
              <td>South West</td>
              <td>Lagos</td>
              <td>3.98 / 10</td>
              <td>2.14 / 5</td>
            </tr>
            <tr>
              <td>North East</td>
              <td>Bauchi</td>
              <td>3.12 / 10</td>
              <td>1.63 / 5</td>
            </tr>
            <tr>
              <td>South East</td>
              <td>Enugu</td>
              <td>2.49 / 10</td>
              <td>1.48 / 5</td>
            </tr>
            <tr>
              <td>North Central</td>
              <td>FCT</td>
              <td>2.24 / 10</td>
              <td>2.09 / 5</td>
            </tr>
            <tr>
              <td>South South</td>
              <td>Edo</td>
              <td>1.84 / 10</td>
              <td>1.75 / 5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Proposed Programmatic Interventions</h2>
      <p>To rebuild democratic legitimacy and close the trust gap, SICNI recommends three key programmatic pillars:</p>
      <ol>
        <li><strong>Leadership Talent Identification Program:</strong> A merit-based vetting network that identifies ethical public sector candidates before election cycles.</li>
        <li><strong>Ethics & Governance Bootcamps:</strong> Structured training modules focused on public finance integrity and civic accountability.</li>
        <li><strong>Public Endorsement & Rating Platforms:</strong> Open-access digital scorecards enabling citizens to track municipal performance in real time.</li>
      </ol>
    `
  },
  {
    id: "barriers-to-women-in-leadership",
    category: "Gender & Leadership",
    badge: "GENDER & LEADERSHIP",
    title: "Barriers to Women in Leadership",
    summary: "Assesses societal perceptions of women in leadership and public appetite for gender-sensitive reform.",
    fieldedDate: "July 2025",
    respondents: 1456,
    statesCount: 6,
    coverage: ["Lagos", "Enugu", "Edo", "Bauchi", "Kano", "FCT"],
    keyMetricVal: "70%",
    keyMetricLbl: "would support policies promoting women's leadership",
    keyFindingText: "55% believe women face significantly more challenges in leadership than men. Top barriers: cultural and societal norms (34%), gender bias in leadership selection (28%).",
    policyProposals: "Proposes: a Women's Leadership Incubator, public awareness campaigns, legal & policy advocacy for anti-discrimination laws, and micro-grants for women candidates.",
    fullContent: `
      <h2>Executive Summary</h2>
      <p>Gender imbalance in decision-making roles undermines Nigeria's capacity to harness its full talent pool. This report synthesizes data from SICNI's Gender Equality segment (N = 1,456) to evaluate societal perceptions of female governance, identify systemic barriers, and formulate actionable strategies for inclusive leadership.</p>

      <div class="article-callout-quote">
        "70% of Nigerians support legislative and policy interventions to increase women's representation in leadership, recognizing that gender diversity directly improves governance quality."
      </div>

      <h2>Core Research Findings</h2>
      <ul>
        <li><strong>Strong Public Support for Policy Action:</strong> 70% of respondents agree that governments should enact explicit policies and quotas to support aspiring women leaders.</li>
        <li><strong>Disproportionate Obstacles:</strong> 55% of respondents confirm that women face significantly higher hurdles to leadership than male counterparts.</li>
        <li><strong>Leading Obstacles Identified:</strong>
          <ul>
            <li>Entrenched cultural and religious gender norms (34%)</li>
            <li>Institutional bias in political candidate selection (28%)</li>
            <li>Unequal access to campaign financing and resources (22%)</li>
            <li>Workplace and political harassment (16%)</li>
          </ul>
        </li>
        <li><strong>Positive Outlook on Governance Impact:</strong> Over 52% believe that having more women in executive and legislative positions directly improves public service delivery and social welfare policy.</li>
      </ul>

      <h2>Actionable Programmatic Strategies</h2>
      <p>SICNI proposes four concrete interventions to remove structural barriers and accelerate female leadership ascension:</p>
      <ol>
        <li><strong>Women's Leadership Incubator:</strong> A year-long mentorship and executive training initiative pairing seasoned female leaders with emerging political candidates.</li>
        <li><strong>Public Awareness & Media Outreach:</strong> Grassroots media campaigns designed to challenge entrenched gender stereotypes and highlight successful women administrators.</li>
        <li><strong>Legal & Legislative Advocacy:</strong> Campaigning for enforceability of anti-discrimination statutes and gender parity provisions in party constitutions.</li>
        <li><strong>Micro-grants for Local Female Candidates:</strong> Dedicated seed funding pools for women contesting local government elections.</li>
      </ol>
    `
  },
  {
    id: "nigerias-youth-and-the-leadership-gap",
    category: "Youth Leadership",
    badge: "YOUTH LEADERSHIP",
    title: "Nigeria's Youth and the Leadership Gap",
    summary: "Evaluates young people's readiness, civic participation, financial exclusion, and public confidence in youth-led governance.",
    fieldedDate: "July 2025",
    respondents: 1456,
    statesCount: 6,
    coverage: ["Lagos", "Enugu", "Edo", "Bauchi", "Kano", "FCT"],
    keyMetricVal: "72%",
    keyMetricLbl: "public belief that young leaders can transform governance",
    keyFindingText: "Yet only 25% of youth express active political interest due to exclusion, high entry costs, and lack of structured mentorship.",
    policyProposals: "Proposes: a Youth Leadership Fellowship (SYLIP), civic education in tertiary institutions, Youth Policy Labs with local councils, and youth micro-funds.",
    fullContent: `
      <h2>Executive Summary</h2>
      <p>With over 60% of Nigeria's population under 30, youth represent the country's greatest demographic asset for democratic renewal and technological innovation. However, POP survey findings (N = 1,456) reveal a stark paradox: while public confidence in youth potential is remarkably high, active political participation among young citizens remains dangerously low.</p>

      <div class="article-callout-quote">
        "72% of citizens believe young leaders possess the innovation needed to solve Nigeria's governance challenges, yet only 25% of youth express active political interest due to structural exclusion."
      </div>

      <h2>Empirical Survey Findings</h2>
      <ul>
        <li><strong>Low Political Engagement:</strong> Only 25% of respondents aged 18-35 expressed active interest in joining political parties or contesting public office.</li>
        <li><strong>Primary Obstacles to Youth Leadership:</strong>
          <ul>
            <li>Exorbitant political party nomination fees and financial barriers (38%)</li>
            <li>Lack of mentorship and structured political exposure (28%)</li>
            <li>Systemic exclusion by senior political gatekeepers (22%)</li>
            <li>Public skepticism regarding administrative experience (12%)</li>
          </ul>
        </li>
        <li><strong>Perceived Youth Strengths:</strong> Respondents highlighted technology adoption (42%), job creation focus (32%), and innovative problem-solving (26%) as top advantages of youth leaders.</li>
      </ul>

      <h2>Recommended Interventions</h2>
      <p>To bridge the gap between youth potential and civic execution, SICNI outlines four key initiatives:</p>
      <ol>
        <li><strong>Youth Leadership Fellowship (SYLIP):</strong> A competitive fellowship providing practical governance internships, policy drafting experience, and executive mentorship.</li>
        <li><strong>Civic Education Integration:</strong> Partnering with tertiary institutions to integrate practical political management modules into curricula.</li>
        <li><strong>Youth Policy Labs:</strong> Collaborative think tanks where young innovators co-create municipal policies alongside local council chairpersons.</li>
        <li><strong>Youth Leadership Micro-fund:</strong> Non-partisan seed funding supporting youth-driven civic advocacy campaigns.</li>
      </ol>
    `
  }
];

// 3. OFFICIAL LEADERSHIP TEAM ROSTER (Exact bios and updated names/roles)
const LEADERSHIP_TEAM = [
  {
    name: "Ambassador Dr. Godknows Boladei Igali, OON",
    title: "Chairman, Governing Council",
    badge: "CHAIRMAN, GOVERNING COUNCIL",
    bio: "A distinguished diplomat, public administrator and development leader with decades of experience in diplomacy, governance, conflict resolution and institutional leadership. He provides strategic oversight at SICNI, championing evidence-based policymaking, credible leadership and sustainable development across Nigeria and Africa.",
    image: "images/Dr Godknows Boladeiigali.jpg",
    cssClass: "team-img-boladeiigali"
  },
  {
    name: "Clement Igenegba",
    title: "Executive Director",
    badge: "EXECUTIVE DIRECTOR",
    bio: "A Research, Monitoring, Evaluation and Learning (MEL), Social Impact and Market Research Specialist with over 35 years of professional experience. He leads multidisciplinary teams in delivering research, evidence generation and strategic advisory for public and private sector organisations.",
    image: "images/Clement Igenegba.jpg",
    cssClass: "team-img-igenegba"
  },
  {
    name: "Gbenga Adewumi",
    title: "Director, Technical Services & Methodology",
    badge: "DIRECTOR, TECHNICAL SERVICES & METHODOLOGY",
    bio: "A Research Operations, Technical Services and Survey Methodology Specialist with over 30 years of experience in large-scale research, field operations, survey design and quality assurance. At SIRAC, he leads technical and methodological functions to ensure research assignments meet international standards.",
    image: "images/Gbenga Adewumi.jpg",
    cssClass: "team-img-adewumi"
  },
  {
    name: "Kunle Osanyegbemi",
    title: "Director, Reporting & Proposal Development",
    badge: "DIRECTOR, REPORTING & PROPOSAL DEVELOPMENT",
    bio: "A Monitoring, Evaluation and Learning (MEL), Research and Knowledge Management Specialist with over three decades of experience in research, evaluation and technical reporting. He leads SIRAC’s reporting, proposal development and knowledge management functions, transforming complex findings into clear, actionable insights.",
    image: "images/Kunle Osanyegbemi.jpeg",
    cssClass: "team-img-obi"
  },
  {
    name: "Emma O. Apollos",
    title: "Data Analytics, Research Insight & Evidence Generation Specialist",
    badge: "DATA ANALYTICS & EVIDENCE SPECIALIST",
    bio: "A Data Analytics, Research Insight and Evidence Generation Specialist with over 30 years of experience, including leadership roles at ACNielsen and Zenith Media. He specialises in data analytics, statistical modelling, consumer insights and evidence generation, helping transform complex data into actionable intelligence.",
    image: "images/Emma O. Apollos.jpeg",
    cssClass: "team-img-apollos"
  },
  {
    name: "Emma C. Nduka",
    title: "Director, Research & Programme",
    badge: "DIRECTOR, RESEARCH & PROGRAMME",
    bio: "A Research, Programme Management and Public Policy Specialist with over 30 years of experience leading large-scale research initiatives across Africa. He provides strategic oversight of SIRAC’s research portfolio, programme development and knowledge management, translating evidence into practical solutions.",
    image: "images/Emma Nduka.jpeg",
    cssClass: "team-img-nduka"
  },
  {
    name: "Silifat Lawal",
    title: "Research Assistant, Quantitative",
    badge: "RESEARCH ASSISTANT, QUANTITATIVE",
    bio: "A quantitative research professional supporting survey implementation, data collection and research quality assurance. Her role contributes to SIRAC’s ability to deliver reliable quantitative research and evidence-based insights.",
    image: "images/Silifat Lawal.jpeg",
    cssClass: "team-img-lawal"
  },
  {
    name: "Dr. Afolabi Quadri Balogun",
    title: "Director, Economic Research & Development Policy",
    badge: "DIRECTOR, ECONOMIC RESEARCH & DEVELOPMENT POLICY",
    bio: "A Development Economist and Policy Research Specialist with expertise in economic policy, governance research, impact evaluation and sustainable development. He leads multidisciplinary research that generates actionable evidence for governments, development partners and the private sector.",
    image: "images/Dr Afolabi Balogun.jpeg",
    cssClass: "team-img-balogun"
  },
  {
    name: "Mr. Iyapo",
    title: "Director, Field Operations",
    badge: "DIRECTOR, FIELD OPERATIONS",
    bio: "A field operations and research professional with expertise in large-scale survey implementation, field supervision, data quality assurance and stakeholder engagement. He supports SIRAC’s nationwide research assignments by coordinating field teams and ensuring high-quality data collection.",
    image: "images/Sunny Iyapo.jpeg",
    cssClass: "team-img-iyapo"
  }
];

// 4. APPLICATION STATE
const state = {
  activePage: 'home',
  activeHomeTab: 0,
  activeResearchFilter: 'All',
  selectedResearchId: null,
  selectedProgramId: null,
  mobileMenuOpen: false
};

// STANDALONE SVG ICON SYSTEM (Zero external CDN dependency, 100% reliable)
const SVG_ICONS = {
  'menu': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  'x': `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  'arrow-right': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  'arrow-left': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  'check-circle-2': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  'book-open': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  'hexagon': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
  'handshake': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.4-.4.9-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.2-4.8a2 2 0 0 0 0-2.8l-2.8-2.8a2 2 0 0 0-2.8 0L13.2 10"></path></svg>`,
  'newspaper': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8z"></path></svg>`,
  'bar-chart-2': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  'help-circle': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  'mail': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  'phone': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  'clock': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  'map-pin': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  'linkedin': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  'twitter': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
  'youtube': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
  'globe': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try { window.lucide.createIcons(); } catch (e) {}
  }
  
  // Standalone SVG replacement for 100% reliable local rendering
  document.querySelectorAll('i[data-lucide]').forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    if (SVG_ICONS[iconName]) {
      const span = document.createElement('span');
      span.className = 'icon-svg-wrap';
      span.innerHTML = SVG_ICONS[iconName];
      el.parentNode.replaceChild(span, el);
    }
  });
}
window.refreshIcons = refreshIcons;
window.addEventListener('load', refreshIcons);

// 5. INITIALIZATION
function initApp() {
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
  setupGlobalListeners();
  refreshIcons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function setMobileMenuState(isOpen) {
  state.mobileMenuOpen = Boolean(isOpen);
  const nav = document.getElementById('main-nav');
  const toggleBtn = document.getElementById('mobile-toggle-btn');

  if (nav) {
    if (state.mobileMenuOpen) {
      nav.classList.add('is-open');
    } else {
      nav.classList.remove('is-open');
    }
  }

  if (toggleBtn) {
    toggleBtn.innerHTML = state.mobileMenuOpen 
      ? SVG_ICONS['x'] 
      : SVG_ICONS['menu'];
  }
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '') || 'home';
  
  if (hash.startsWith('research/')) {
    const id = hash.split('/')[1];
    state.activePage = 'research-detail';
    state.selectedResearchId = id;
  } else if (hash.startsWith('program/')) {
    const id = hash.split('/')[1];
    state.activePage = 'program-detail';
    state.selectedProgramId = id;
  } else {
    state.activePage = hash;
  }
  
  setMobileMenuState(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function renderApp() {
  const mainEl = document.getElementById('main-content');
  if (!mainEl) return;

  updateActiveNav();
  
  switch (state.activePage) {
    case 'home':
      mainEl.innerHTML = renderHomePage();
      setupHomePageListeners();
      break;
    case 'about':
      mainEl.innerHTML = renderAboutPage();
      break;
    case 'programs':
      mainEl.innerHTML = renderProgramsPage();
      break;
    case 'partner':
      mainEl.innerHTML = renderPartnerPage();
      break;
    case 'research':
      mainEl.innerHTML = renderResearchPage();
      setupResearchPageListeners();
      break;
    case 'contact':
      mainEl.innerHTML = renderContactPage();
      setupContactFormListener();
      break;
    case 'privacy':
      mainEl.innerHTML = renderPrivacyPage();
      break;
    case 'terms':
      mainEl.innerHTML = renderTermsPage();
      break;
    case 'research-detail':
      mainEl.innerHTML = renderResearchDetailPage(state.selectedResearchId);
      break;
    case 'program-detail':
      mainEl.innerHTML = renderProgramDetailPage(state.selectedProgramId);
      break;
    default:
      mainEl.innerHTML = renderHomePage();
      setupHomePageListeners();
  }

  // Refresh Lucide Icons after DOM update
  refreshIcons();
}

function updateActiveNav() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const target = link.getAttribute('data-target');
    if (target === state.activePage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function setupGlobalListeners() {
  // Global click delegate for mobile toggle and navigation links
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('#mobile-toggle-btn');
    if (toggleBtn) {
      e.preventDefault();
      setMobileMenuState(!state.mobileMenuOpen);
      return;
    }

    const navLink = e.target.closest('.nav-link');
    if (navLink) {
      setMobileMenuState(false);
      return;
    }

    // Close menu when clicking outside header on mobile
    if (state.mobileMenuOpen && !e.target.closest('.site-header')) {
      setMobileMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && state.mobileMenuOpen) {
      setMobileMenuState(false);
    }
  });

  document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'newsletter-form') {
      e.preventDefault();
      const input = e.target.querySelector('input[type="email"]');
      if (input && input.value) {
        alert(`Thank you! ${input.value} has been subscribed to research insights and governance updates.`);
        input.value = '';
      }
    }
  });
}

/* ==========================================================================
   PAGE RENDERERS
   ========================================================================== */

// 1. HOMEPAGE HERO (UNTOUCHED / UNMODIFIED AS DIRECTED)
function renderHomePage() {
  const currentProg = PROGRAM_DATA[state.activeHomeTab];

  return `
    <!-- HERO SECTION (CENTERED VERTICALLY AND HORIZONTALLY) -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <span class="hero-badge">EVIDENCE. LEADERSHIP. IMPACT.</span>
        <h1 class="hero-title">
          Building Better<br/>Leadership Through<br/><span class="italic">Evidence & Action</span>
        </h1>
        <p class="hero-desc">
          SICNI develops ethical leaders and strengthens governance across Africa, while SIRAC generates credible evidence, research and policy insights that help governments, development partners and institutions make better decisions.
        </p>
        <div class="hero-actions">
          <a href="#partner" class="btn btn-white">Partner With Us <i data-lucide="arrow-right"></i></a>
          <a href="#research" class="btn btn-outline-white">Explore Our Work</a>
        </div>
      </div>
    </section>

    <!-- STAT BANNER (#1A1A1A DARK BACKGROUND) -->
    <section class="stat-banner">
      <div class="container">
        <div class="stat-grid">
          <div class="stat-item">
            <div class="stat-number">36</div>
            <div class="stat-label">States + FCT</div>
            <div class="stat-subtext">Nationwide Presence</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50,000+</div>
            <div class="stat-label">Respondents</div>
            <div class="stat-subtext">In nationwide studies</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">Flagship Programs</div>
            <div class="stat-subtext">Driving leadership impact</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">Nationwide Studies</div>
            <div class="stat-subtext">Across sectors</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TWO INSTITUTIONS. ONE PURPOSE. -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="split-section">
          <div>
            <span class="section-label">WHO WE ARE</span>
            <h2 class="section-title">Two Institutions.<br/>One Purpose.</h2>
            <p class="section-desc" style="margin-bottom: 1.5rem;">
              SICNI and SIRAC work together to strengthen leadership, generate evidence, and support institutions to make better decisions that improve lives across Nigeria.
            </p>
            <a href="#about" class="link-arrow">Our Full Story <i data-lucide="arrow-right"></i></a>
          </div>

          <div>
            <div class="institution-cards">
              <div class="inst-card sicni">
                <span class="inst-tag">SICNI</span>
                <h3 class="inst-name">Social Impact Catalyst Network Initiative</h3>
                <ul class="inst-list">
                  <li><i data-lucide="check" class="check-icon"></i> Leadership Governance</li>
                  <li><i data-lucide="check" class="check-icon"></i> Good Governance</li>
                  <li><i data-lucide="check" class="check-icon"></i> Capacity Building</li>
                  <li><i data-lucide="check" class="check-icon"></i> Youth & Women Empowerment</li>
                </ul>
              </div>

              <div class="inst-card sirac">
                <span class="inst-tag">SIRAC</span>
                <h3 class="inst-name">Social Impact Research & Analytics Centre</h3>
                <ul class="inst-list">
                  <li><i data-lucide="check" class="check-icon"></i> Research & Analytics</li>
                  <li><i data-lucide="check" class="check-icon"></i> Data Analytics</li>
                  <li><i data-lucide="check" class="check-icon"></i> Monitoring & Evaluation</li>
                  <li><i data-lucide="check" class="check-icon"></i> Policy & Governance Advisory</li>
                </ul>
              </div>
            </div>

            <div class="quote-banner">
              "Together, we build the evidence base and leadership capacity that Nigeria needs to govern well, develop sustainably, and account to its citizens."
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FLAGSHIP PROGRAMS PREVIEW (TAB SWITCHER) -->
    <section class="section-padding bg-beige">
      <div class="container">
        <span class="section-label">OUR FLAGSHIP PROGRAMS</span>
        <h2 class="section-title">Connected Programs. Measurable Change.</h2>

        <div class="programs-tabs-wrapper" style="margin-top: 2rem;">
          <div class="tabs-nav">
            ${PROGRAM_DATA.slice(0, 5).map((prog, idx) => `
              <button class="tab-btn ${idx === state.activeHomeTab ? 'active' : ''}" data-index="${idx}">
                <span class="tab-num">${prog.num}</span>
                <span>${prog.title.split(':')[0]}</span>
              </button>
            `).join('')}
            <div style="padding: 1.25rem 1.5rem; margin-top: auto;">
              <a href="#programs" class="link-arrow">View All Programs <i data-lucide="arrow-right"></i></a>
            </div>
          </div>

          <div class="tab-image-container">
            <img src="${currentProg.image}" alt="${currentProg.title}" class="tab-image" />
          </div>

          <div class="tab-content-card">
            <span class="featured-label">${currentProg.badge}</span>
            <h3 class="featured-title">${currentProg.title}</h3>
            <p class="featured-desc">${currentProg.desc}</p>

            <div class="mini-stats-grid">
              ${currentProg.impactStats.map(st => `
                <div>
                  <div class="mini-stat-val">${st.val}</div>
                  <div class="mini-stat-lbl">${st.lbl}</div>
                </div>
              `).join('')}
            </div>

            <div class="check-list">
              ${currentProg.achievements.map(ach => `
                <div class="check-item">
                  <span class="check-icon"><i data-lucide="check-circle-2"></i></span>
                  <span>${ach}</span>
                </div>
              `).join('')}
            </div>

            <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
              <a href="#program/${currentProg.id}" class="link-arrow">Explore This Programme <i data-lucide="arrow-right"></i></a>
              <a href="${CONFIG.GOOGLE_FORM_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-green" style="font-size: 0.75rem; padding: 0.5rem 1rem;">
                Register Interest <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NATIONWIDE IMPACT -->
    <section class="section-padding bg-light">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="section-label">NATIONWIDE IMPACT</span>
            <h2 class="section-title" style="margin-bottom: 0;">Our Reach.<br/>Our Responsibility.</h2>
          </div>
          <p class="section-desc" style="max-width: 480px;">
            Field operations and research activities spanning all 36 states and the Federal Capital Territory across every geopolitical zone of Nigeria.
          </p>
        </div>

        <div class="impact-metrics-grid">
          <div class="impact-metric-card">
            <div class="impact-val">36</div>
            <div class="impact-title">States + FCT</div>
            <div class="impact-sub">Full nationwide coverage</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">6</div>
            <div class="impact-title">Geopolitical Zones</div>
            <div class="impact-sub">Every zone represented</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">774</div>
            <div class="impact-title">LGAs Assessed</div>
            <div class="impact-sub">Subnational reach</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">50k+</div>
            <div class="impact-title">Annual Respondents</div>
            <div class="impact-sub">Direct citizen engagement</div>
          </div>
        </div>

        <div class="zone-bars-grid">
          <div class="zone-card">
            <div class="zone-header">
              <span class="zone-name">• North West</span>
              <span class="zone-stats-inline"><strong>7</strong> states | <strong>186</strong> LGAs | <strong>42</strong> field teams</span>
            </div>
            <div class="zone-progress-bg"><div class="zone-progress-fill" style="width: 92%;"></div></div>
            <div class="zone-pct-label">92% COVERAGE</div>
          </div>

          <div class="zone-card">
            <div class="zone-header">
              <span class="zone-name">• North East</span>
              <span class="zone-stats-inline"><strong>6</strong> states | <strong>112</strong> LGAs | <strong>31</strong> field teams</span>
            </div>
            <div class="zone-progress-bg"><div class="zone-progress-fill" style="width: 88%;"></div></div>
            <div class="zone-pct-label">88% COVERAGE</div>
          </div>

          <div class="zone-card">
            <div class="zone-header">
              <span class="zone-name">• North Central</span>
              <span class="zone-stats-inline"><strong>6</strong> states | <strong>131</strong> LGAs | <strong>35</strong> field teams</span>
            </div>
            <div class="zone-progress-bg"><div class="zone-progress-fill" style="width: 90%;"></div></div>
            <div class="zone-pct-label">90% COVERAGE</div>
          </div>

          <div class="zone-card">
            <div class="zone-header">
              <span class="zone-name">• South West</span>
              <span class="zone-stats-inline"><strong>6</strong> states | <strong>137</strong> LGAs | <strong>38</strong> field teams</span>
            </div>
            <div class="zone-progress-bg"><div class="zone-progress-fill" style="width: 95%;"></div></div>
            <div class="zone-pct-label">95% COVERAGE</div>
          </div>

          <div class="zone-card">
            <div class="zone-header">
              <span class="zone-name">• South East</span>
              <span class="zone-stats-inline"><strong>5</strong> states | <strong>95</strong> LGAs | <strong>28</strong> field teams</span>
            </div>
            <div class="zone-progress-bg"><div class="zone-progress-fill" style="width: 87%;"></div></div>
            <div class="zone-pct-label">87% COVERAGE</div>
          </div>

          <div class="zone-card">
            <div class="zone-header">
              <span class="zone-name">• South South</span>
              <span class="zone-stats-inline"><strong>6</strong> states | <strong>113</strong> LGAs | <strong>33</strong> field teams</span>
            </div>
            <div class="zone-progress-bg"><div class="zone-progress-fill" style="width: 91%;"></div></div>
            <div class="zone-pct-label">91% COVERAGE</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PREVIOUS RESEARCH -->
    <section class="section-padding bg-beige">
      <div class="container">
        <span class="section-label">PREVIOUS RESEARCH</span>
        <h2 class="section-title">Evidence We Have Already Delivered.</h2>
        <p class="section-desc">
          In July 2025, SICNI and SIRAC fielded a nationwide public opinion poll of 1,456 Nigerians across six states. The findings below inform every program we run.
        </p>

        <div class="impact-metrics-grid" style="margin-top: 2rem;">
          <div class="impact-metric-card">
            <div class="impact-val">1,456</div>
            <div class="impact-title">Respondents</div>
            <div class="impact-sub">Nationally representative</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">6</div>
            <div class="impact-title">States Surveyed</div>
            <div class="impact-sub">Across all six zones</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">3</div>
            <div class="impact-title">Research Briefs</div>
            <div class="impact-sub">Published, open access</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">July 2025</div>
            <div class="impact-title">Fielded</div>
            <div class="impact-sub">Most recent wave</div>
          </div>
        </div>

        <div class="research-cards-grid">
          ${RESEARCH_DATA.slice(1, 4).map(res => `
            <div class="research-card">
              <div>
                <span class="res-category">${res.badge}</span>
                <h3 class="res-title">${res.title}</h3>
                <p class="res-desc">${res.summary}</p>
                <div class="res-stat-highlight">${res.keyMetricVal}</div>
                <div class="res-stat-lbl">${res.keyMetricLbl}</div>
              </div>
              <div>
                <div class="res-tags">${res.coverage.join(' · ')}</div>
                <a href="#research/${res.id}" class="link-arrow">Read the findings <i data-lucide="arrow-right"></i></a>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: right; margin-top: 2rem;">
          <a href="#research" class="btn btn-dark">View All Published Research <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </section>

    <!-- CLOSING CTA BANNER (#1A1A1A DARK BACKGROUND) -->
    <section class="closing-cta-section">
      <div class="closing-cta-overlay"></div>
      <div class="container closing-cta-content">
        <h2 class="section-title text-white" style="font-size: 3rem; margin-bottom: 1rem;">
          Let's Build Better<br/>Leadership Together
        </h2>
        <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 2rem;">
          Whether you are a government agency, NGO, development partner or corporate organisation, we are ready to collaborate and create impact that lasts.
        </p>
        <a href="#partner" class="btn btn-gold">PARTNER WITH US <i data-lucide="arrow-right"></i></a>
      </div>
    </section>
  `;
}

function setupHomePageListeners() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      state.activeHomeTab = idx;
      renderApp();
    });
  });
}

// 2. ABOUT PAGE (WITH CUSTOM TEAM MEMBER IMAGE CLASSES FOR PRECISE FACE POSITIONING)
function renderAboutPage() {
  const p = LEADERSHIP_TEAM;

  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div class="split-section">
          <div>
            <span class="section-label">ABOUT US</span>
            <h2 class="section-title">Who We Are.<br/><span class="italic">What Drives Us.</span></h2>
            <p class="section-desc">
              SICNI and SIRAC exist to strengthen governance, generate credible evidence and support institutions through research, monitoring, evaluation, policy advisory and leadership development.
            </p>
          </div>
          <div style="border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-md);">
            <img src="images/Image (SICNI SIRAC office meeting).png" alt="SICNI SIRAC Office Meeting" style="width: 100%; height: 320px; object-fit: cover;" />
          </div>
        </div>

        <div class="mission-vision-spanning">
          <div class="mission-vision-grid">
            <div class="mv-card">
              <i data-lucide="target" class="mv-icon" style="color: var(--color-gold);"></i>
              <h3 class="mv-title">Our Mission</h3>
              <p class="mv-desc">
                To provide world-class research, monitoring, evaluation, learning, data analytics, and policy advisory services that improve lives, strengthen institutions, and accelerate sustainable development across Africa.
              </p>
            </div>

            <div class="mv-card">
              <i data-lucide="eye" class="mv-icon" style="color: var(--color-gold);"></i>
              <h3 class="mv-title">Our Vision</h3>
              <p class="mv-desc">
                To become Africa's leading evidence generation and social impact research institution, driving sustainable development through innovation, rigorous research and transformational learning.
              </p>
            </div>

            <div class="mv-card">
              <i data-lucide="zap" class="mv-icon" style="color: var(--color-gold);"></i>
              <h3 class="mv-title">Our Purpose</h3>
              <p class="mv-desc">
                To catalyse transformation by connecting leadership, research and action for sustainable national development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-beige">
      <div class="container">
        <h2 class="section-title" style="margin-bottom: 2.5rem;">Our Values</h2>

        <div class="values-grid">
          <div class="value-card">
            <h4>Integrity</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted);">
              We uphold the highest standards of honesty and ethical conduct in all we do.
            </p>
          </div>

          <div class="value-card">
            <h4>Evidence</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted);">
              We believe in data, rigour and facts to drive decisions and lasting impact.
            </p>
          </div>

          <div class="value-card">
            <h4>Inclusiveness</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted);">
              We work with diverse stakeholders and value every voice across Nigeria.
            </p>
          </div>

          <div class="value-card">
            <h4>Accountability</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted);">
              We take responsibility for our actions and the results we deliver.
            </p>
          </div>

          <div class="value-card">
            <h4>Impact</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted);">
              We are driven by results that improve lives and strengthen communities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="container">
        <span class="section-label">OUR LEADERSHIP</span>
        <h2 class="section-title" style="margin-bottom: 3rem;">The People Behind the Work</h2>

        <div class="team-grid-3col">
          ${p.map((person, idx) => `
            <div class="team-card-grid-item">
              <div class="team-grid-img-wrap">
                ${idx < 2 ? `<span class="team-tag-pill">${person.badge}</span>` : ''}
                <img src="${person.image}" alt="${person.name}" class="${person.cssClass}" />
              </div>
              <div class="team-grid-body">
                <span class="team-label-green">${person.badge}</span>
                <h3 class="team-name-medium" style="font-size: 1.25rem; margin-bottom: 0.25rem;">${person.name}</h3>
                <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-gold); margin-bottom: 0.85rem;">${person.title}</div>
                <p class="team-bio-text" style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.6;">${person.bio}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section-padding bg-beige">
      <div class="container">
        <h2 class="section-title" style="margin-bottom: 3rem;">Our Journey</h2>

        <div class="timeline-row">
          <div class="timeline-item">
            <div class="timeline-year">2024</div>
            <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-green); margin: 0.35rem 0;">Founded</div>
            <p style="font-size: 0.82rem; color: var(--color-text-muted);">SICNI is established to develop credible African leaders and promote leadership for sustainable development.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2024–Present</div>
            <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-green); margin: 0.35rem 0;">Leadership & Governance</div>
            <p style="font-size: 0.82rem; color: var(--color-text-muted);">Development of leadership programmes, governance assessments, public opinion research and initiatives that promote accountability and credible leadership.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">2024–Present</div>
            <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-green); margin: 0.35rem 0;">Research & Evidence</div>
            <p style="font-size: 0.82rem; color: var(--color-text-muted);">SICNI and SIRAC build an evidence-driven approach through research, data collection, monitoring, evaluation, public opinion studies and policy analysis.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-year">Present</div>
            <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-green); margin: 0.35rem 0;">Driving Social Impact</div>
            <p style="font-size: 0.82rem; color: var(--color-text-muted);">Using leadership development and evidence-based research to support better governance and sustainable development across Africa.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="container">
        <div class="org-structure-wrapper">
          <div>
            <h2 class="section-title">Our Structure</h2>
            <p class="section-desc">
              A strong governance structure that enables collaboration, accountability and maximum impact.
            </p>
            <div class="gold-accent-line"></div>
          </div>

          <div class="org-tree-hierarchy">
            <div class="org-pill-box">
              <i data-lucide="hexagon"></i> Board of Trustees
            </div>
            <div class="org-line-vert"></div>

            <div class="org-pill-box">
              <i data-lucide="hexagon"></i> Executive Committee
            </div>
            <div class="org-line-vert"></div>

            <div class="org-tree-row-3col">
              <div class="org-pill-box">
                <i data-lucide="hexagon"></i> Programme Teams
              </div>
              <div class="org-pill-box">
                <i data-lucide="hexagon"></i> Regional Coordinators
              </div>
              <div class="org-pill-box">
                <i data-lucide="hexagon"></i> Operations & Support
              </div>
            </div>

            <div class="org-line-vert"></div>

            <div class="org-pill-box">
              <i data-lucide="hexagon"></i> Research & Field Teams
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="envision-full-banner">
      <div class="envision-full-overlay"></div>
      <div class="envision-full-content">
        <p class="envision-quote-text">
          “We envision a future where leadership is credible, institutions are effective, and every Nigerian has the opportunity to thrive.”
        </p>
        <div class="gold-accent-line-center"></div>
      </div>
    </section>

    <section class="work-with-us-section">
      <div class="container work-with-us-content">
        <h2 class="section-title">Work With Us</h2>
        <p class="section-desc" style="margin-bottom: 2rem; text-align: center;">
          Partner with SICNI and SIRAC to drive evidence-based leadership and strengthen institutions across Nigeria.
        </p>
        <a href="#partner" class="btn btn-dark">Partner With Us <i data-lucide="arrow-right"></i></a>
      </div>
    </section>
  `;
}

// 3. PROGRAMMES PAGE (UNTOUCHED / UNMODIFIED AS DIRECTED)
function renderProgramsPage() {
  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="section-label">OUR PROGRAMS</span>
            <h2 class="section-title" style="margin-bottom: 0;">Connected Programs.<br/><span class="italic">Measurable Change.</span></h2>
          </div>
          <p class="section-desc" style="max-width: 520px;">
            Our programmes generate evidence, build capacity and strengthen institutions to drive accountable leadership and sustainable development across Nigeria.
          </p>
        </div>

        ${PROGRAM_DATA.map(prog => `
          <div class="program-full-card" id="${prog.id}">
            <div class="program-banner-hero">
              <img src="${prog.image}" alt="${prog.title}" />
              <div class="program-banner-overlay">
                <span class="featured-label" style="color: var(--color-gold);">${prog.badge}</span>
                <h3 style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: #FFF; line-height: 1.25;">${prog.title}</h3>
              </div>
            </div>

            <div class="program-grid-split">
              <div>
                <p style="font-size: 1.05rem; color: var(--color-text-main); line-height: 1.65; margin-bottom: 1.75rem;">
                  ${prog.desc}
                </p>

                <h4 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 1rem;">KEY ACHIEVEMENTS</h4>
                <div class="check-list">
                  ${prog.achievements.map(ach => `
                    <div class="check-item">
                      <span class="check-icon"><i data-lucide="check-circle-2"></i></span>
                      <span>${ach}</span>
                    </div>
                  `).join('')}
                </div>

                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                  <a href="${CONFIG.GOOGLE_FORM_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-dark">
                    Register Interest <i data-lucide="arrow-right"></i>
                  </a>
                  <a href="#partner" class="btn btn-gold">
                    Sponsor This Programme
                  </a>
                </div>
              </div>

              <div>
                <h4 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 1rem;">IMPACT HIGHLIGHTS</h4>
                <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
                  ${prog.impactStats.map(st => `
                    <div style="background-color: var(--color-bg-beige); padding: 1.25rem; border-radius: var(--radius-sm); border-left: 3px solid var(--color-green);">
                      <div style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: var(--color-dark);">${st.val}</div>
                      <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-text-muted);">${st.lbl}</div>
                    </div>
                  `).join('')}
                </div>

                <h4 style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 1rem;">RESEARCH OUTPUTS</h4>
                <ul style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem; color: var(--color-text-main);">
                  ${prog.outputs.map(out => `
                    <li style="display: flex; align-items: center; gap: 0.5rem;">
                      <span style="color: var(--color-green);"><i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i></span> ${out}
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CLOSING CTA BANNER (#1A1A1A DARK BACKGROUND) -->
    <section class="closing-cta-section">
      <div class="closing-cta-overlay"></div>
      <div class="container closing-cta-content">
        <h2 class="section-title text-white" style="font-size: 3rem; margin-bottom: 1rem;">
          Let's Build Better<br/>Leadership Together
        </h2>
        <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 2rem;">
          Collaborate with SICNI and SIRAC to scale evidence-based governance, build leadership capacity, and evaluate social impact across Africa.
        </p>
        <a href="#partner" class="btn btn-gold">PARTNER WITH US <i data-lucide="arrow-right"></i></a>
      </div>
    </section>
  `;
}

// 4. PARTNERSHIP / DONATION PAGE
function renderPartnerPage() {
  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div style="font-size: 0.82rem; color: var(--color-text-light); margin-bottom: 1.5rem;">
          <a href="#home">Home</a> / <span style="color: var(--color-text-muted);">Partner With Us</span>
        </div>

        <div class="split-section" style="margin-bottom: 3.5rem;">
          <div>
            <span class="section-label">SUPPORT OUR MISSION</span>
            <h2 class="section-title">Partner With Us.<br/><span class="italic">Empower Governance.</span></h2>
            <p class="section-desc">
              Your support enables the Social Impact Catalyst Network Initiative (SICNI) and Social Impact Research & Analytics Centre (SIRAC) to conduct independent nationwide governance research, develop ethical leaders, and advocate for subnational accountability across Africa.
            </p>
          </div>

          <div style="border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-md);">
            <img src="images/Image (Leadership training group).png" alt="SICNI Partnership" style="width: 100%; height: 320px; object-fit: cover;" />
          </div>
        </div>

        <!-- STRATEGIC PARTNERSHIP PILLARS -->
        <div class="mission-vision-spanning" style="margin-top: 0; margin-bottom: 3.5rem;">
          <div class="mission-vision-grid">
            <div class="mv-card">
              <i data-lucide="handshake" class="mv-icon" style="color: var(--color-gold);"></i>
              <h3 class="mv-title">Institutional Partnerships</h3>
              <p class="mv-desc">
                Collaborate on multi-year governance initiatives, policy research advisory, subnational index development, and institutional capacity building.
              </p>
            </div>

            <div class="mv-card">
              <i data-lucide="award" class="mv-icon" style="color: var(--color-gold);"></i>
              <h3 class="mv-title">Program Sponsorship</h3>
              <p class="mv-desc">
                Sponsor flagship programs such as the Quarterly Leadership Tracking Study, SALGPI index, or the Credible Leadership Fellowship for youth and women.
              </p>
            </div>

            <div class="mv-card">
              <i data-lucide="heart-handshake" class="mv-icon" style="color: var(--color-gold);"></i>
              <h3 class="mv-title">Direct Financial Donations</h3>
              <p class="mv-desc">
                Provide direct financial contributions to support independent field research, enumerator logistics, and open-access public report publications.
              </p>
            </div>
          </div>
        </div>

        <!-- OFFICIAL BANK ACCOUNT DETAILS CARD -->
        <div style="max-width: 920px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <span class="section-label">PAYMENT INFORMATION</span>
            <h2 class="section-title">Official Bank Account Details</h2>
            <p class="section-desc" style="margin: 0 auto;">
              Please make all direct bank transfers, sponsorships, and financial donations to our official institutional bank account below.
            </p>
          </div>

          <div class="bank-details-card">
            <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-gold); margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
              <span>OFFICIAL DONATION & PARTNERSHIP ACCOUNT</span>
              <span style="color: #FFF; font-weight: 400; font-size: 0.8rem;"><i data-lucide="shield-check" style="color: var(--color-gold); width: 16px; height: 16px; vertical-align: middle;"></i> Verified Bank Account</span>
            </div>

            <div class="bank-detail-item">
              <span class="bank-detail-label">Account Name</span>
              <span class="bank-detail-value" style="font-size: 1.4rem;">Social Impact Catalyst Network Initiative</span>
            </div>

            <div class="bank-detail-item">
              <span class="bank-detail-label">Bank Name</span>
              <span class="bank-detail-value">Zenith Bank</span>
            </div>

            <div class="bank-detail-item">
              <span class="bank-detail-label">Account Number</span>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="bank-detail-value" style="color: var(--color-gold); font-size: 2.2rem; letter-spacing: 0.08em;">122-97-40-962</span>
              </div>
            </div>
          </div>

          <!-- POST-PAYMENT INSTRUCTION -->
          <div style="background-color: var(--color-bg-beige); border-left: 4px solid var(--color-green); padding: 2rem; border-radius: var(--radius-sm); margin-bottom: 3.5rem;">
            <h4 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">
              Payment Confirmation & Next Steps
            </h4>
            <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.65; margin-bottom: 1rem;">
              After completing your bank transfer or deposit, please forward your payment confirmation, transfer receipt, or transaction details to 
              <strong><a href="mailto:${CONFIG.PARTNERSHIP_EMAIL}" style="color: var(--color-green); text-decoration: underline;">${CONFIG.PARTNERSHIP_EMAIL}</a></strong> 
              or via WhatsApp to 
              <strong><a href="${CONFIG.WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" style="color: var(--color-green); text-decoration: underline;">${CONFIG.WHATSAPP_NUMBER}</a></strong> 
              along with your full name or organisation name.
            </p>
            <p style="font-size: 0.88rem; color: var(--color-text-muted); font-style: italic;">
              Our finance & administrative team will issue an official acknowledgment receipt and donor tax statement within 24 hours.
            </p>
          </div>

          <div style="text-align: center; margin-bottom: 2rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="mailto:${CONFIG.PARTNERSHIP_EMAIL}?subject=Partnership%20Inquiry%20-%20SICNI" class="btn btn-dark">
              Send Partnership Confirmation <i data-lucide="mail"></i>
            </a>
            <a href="${CONFIG.WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" class="btn btn-green">
              Chat on WhatsApp <i data-lucide="message-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 5. PRIVACY POLICY PAGE (NEW ROUTE)
function renderPrivacyPage() {
  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div style="font-size: 0.82rem; color: var(--color-text-light); margin-bottom: 1.5rem;">
          <a href="#home">Home</a> / <span style="color: var(--color-text-muted);">Privacy Policy</span>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
          <span class="section-label">LEGAL & DATA PROTECTION</span>
          <h1 class="section-title" style="margin-bottom: 1.5rem;">Privacy Policy</h1>
          <div style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 2.5rem; background: var(--color-bg-beige); padding: 1rem 1.5rem; border-radius: var(--radius-sm); border-left: 3px solid var(--color-green);">
            <strong>Effective Date:</strong> January 1, 2024 · <strong>Last Updated:</strong> July 2025
          </div>

          <article class="article-body-editorial" style="font-size: 1rem; line-height: 1.75;">
            <h2>1. Introduction & Overview</h2>
            <p>
              The Social Impact Catalyst Network Initiative (SICNI) and Social Impact Research & Analytics Centre (SIRAC) are committed to maintaining the trust, confidentiality, and security of all personal data provided to us by website visitors, survey respondents, research partners, and program participants. This Privacy Policy outlines how we collect, handle, store, and protect your information when you interact with our digital platform or participate in our governance research programs.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information only to the extent necessary to deliver evidence-based governance research, respond to inquiries, and manage program partnerships:</p>
            <ul>
              <li><strong>Contact & Inquiry Data:</strong> Full name, email address, phone number, organization name, and message content submitted through our contact forms, newsletter subscription inputs, or email communications.</li>
              <li><strong>Public Opinion & Field Survey Data:</strong> Information gathered during nationwide public opinion polls and subnational tracking studies. All field survey data is strictly anonymized, aggregated, and stored in accordance with institutional research ethics. Individual survey respondents cannot be personally identified from published reports.</li>
              <li><strong>Technical Website Data:</strong> Standard server log information, browser type, operating system, and anonymized page visit metrics collected to ensure site reliability and operational performance.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>Your information is used strictly for legitimate organizational and research purposes, including:</p>
            <ul>
              <li>Responding to partnership inquiries, research commissioning requests, and general communications.</li>
              <li>Delivering requested research reports, quarterly tracking briefs, and organizational updates.</li>
              <li>Processing program registrations and capacity development applications.</li>
              <li>Aggregating and analyzing non-personally identifiable data to produce subnational governance benchmarks and policy recommendations.</li>
            </ul>

            <h2>4. Data Confidentiality & Protection</h2>
            <p>
              We implement robust physical, technical, and administrative safeguards to prevent unauthorized access, disclosure, alteration, or destruction of your information. We do not sell, rent, trade, or commercialize any personal data or contact details to third parties.
            </p>

            <h2>5. Third-Party Links & Services</h2>
            <p>
              Our website may contain links to external partners, map providers, or third-party platforms (such as Google Maps or WhatsApp). We encourage you to review the privacy policies of these external platforms as SICNI/SIRAC is not responsible for the privacy practices of external websites.
            </p>

            <h2>6. Your Rights & Contact Information</h2>
            <p>
              You have the right to request access to any personal contact information we hold about you, request corrections, or unsubscribe from newsletter communications at any time. For questions regarding this Privacy Policy or data protection practices, please contact us:
            </p>
            <p style="background-color: var(--color-bg-beige); padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1.5rem;">
              <strong>SICNI / SIRAC Data Protection Team</strong><br/>
              118B Bisi Obadina Street, Omole Phase 1, Ikeja, Lagos<br/>
              Email: <a href="mailto:${CONFIG.CONTACT_EMAIL}" style="color: var(--color-green); font-weight: 600;">${CONFIG.CONTACT_EMAIL}</a><br/>
              Phone: +234 07014765157
            </p>
          </article>
        </div>
      </div>
    </section>
  `;
}

// 6. TERMS OF USE PAGE (NEW ROUTE)
function renderTermsPage() {
  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div style="font-size: 0.82rem; color: var(--color-text-light); margin-bottom: 1.5rem;">
          <a href="#home">Home</a> / <span style="color: var(--color-text-muted);">Terms of Use</span>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
          <span class="section-label">TERMS & CONDITIONS</span>
          <h1 class="section-title" style="margin-bottom: 1.5rem;">Terms of Use</h1>
          <div style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 2.5rem; background: var(--color-bg-beige); padding: 1rem 1.5rem; border-radius: var(--radius-sm); border-left: 3px solid var(--color-green);">
            <strong>Effective Date:</strong> January 1, 2024 · <strong>Last Updated:</strong> July 2025
          </div>

          <article class="article-body-editorial" style="font-size: 1rem; line-height: 1.75;">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the digital platform of the Social Impact Catalyst Network Initiative (SICNI) and Social Impact Research & Analytics Centre (SIRAC), you agree to be bound by these Terms of Use and all applicable laws and regulations of the Federal Republic of Nigeria. If you do not agree with any of these terms, you should refrain from using this website.
            </p>

            <h2>2. Use of Published Research & Open-Access Reports</h2>
            <p>
              SICNI and SIRAC produce public opinion polls, governance indices (such as SALGPI), policy briefs, and research reports to inform evidence-based decision-making. You are permitted to view, read, cite, and reference our open-access published research materials for academic, non-commercial, media reporting, and policy advocacy purposes, provided that:
            </p>
            <ul>
              <li>Proper attribution is clearly given to <strong>"Social Impact Catalyst Network Initiative (SICNI) / Social Impact Research & Analytics Centre (SIRAC)"</strong>.</li>
              <li>Data, charts, and findings are not misrepresented, altered out of context, or used to falsely claim official institutional endorsement.</li>
              <li>Published reports are not resold, paywalled, or commercialized without explicit written permission from SICNI/SIRAC executive leadership.</li>
            </ul>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              All website text, visual designs, graphics, proprietary indices, methodologies, survey frameworks, logos, and organizational branding assets are the exclusive intellectual property of SICNI and SIRAC and are protected under applicable copyright and trademark laws.
            </p>

            <h2>4. User Submissions & Conduct</h2>
            <p>
              When submitting contact forms, partnership inquiries, or newsletter registrations, users agree to provide truthful, accurate, and non-misleading information. Users must not attempt to compromise website security, introduce malicious code, or transmit unauthorized promotional material through our digital channels.
            </p>

            <h2>5. Disclaimer & Limitation of Liability</h2>
            <p>
              While SICNI and SIRAC exercise rigorous quality assurance and ethical field methodologies in all data collection, website content and published briefs are provided for informational and policy advisory purposes. SICNI/SIRAC shall not be liable for any indirect or consequential damages arising from the external interpretation or reliance upon published survey data.
            </p>

            <h2>6. Governing Law & Contact Details</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. For official legal inquiries or permissions regarding research citation, please contact:
            </p>
            <p style="background-color: var(--color-bg-beige); padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1.5rem;">
              <strong>SICNI / SIRAC Legal & Administrative Secretariat</strong><br/>
              118B Bisi Obadina Street, Omole Phase 1, Ikeja, Lagos<br/>
              Email: <a href="mailto:${CONFIG.CONTACT_EMAIL}" style="color: var(--color-green); font-weight: 600;">${CONFIG.CONTACT_EMAIL}</a><br/>
              Phone: +234 07014765157
            </p>
          </article>
        </div>
      </div>
    </section>
  `;
}

// 7. RESEARCH LISTING PAGE (UNTOUCHED / UNMODIFIED AS DIRECTED)
function renderResearchPage() {
  const filteredResearch = state.activeResearchFilter === 'All' 
    ? RESEARCH_DATA 
    : RESEARCH_DATA.filter(r => r.category === state.activeResearchFilter || (state.activeResearchFilter === 'Full Survey Reports' && r.category === 'Full Survey Report'));

  const featuredPoll = RESEARCH_DATA[0];

  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div style="font-size: 0.82rem; color: var(--color-text-light); margin-bottom: 1.5rem;">
          <a href="#home">Home</a> / <span style="color: var(--color-text-muted);">Research</span>
        </div>

        <span class="section-label">PUBLISHED RESEARCH</span>
        <h2 class="section-title">Evidence, Published.</h2>
        <p class="section-desc">
          Every SICNI/SIRAC program is grounded in fielded research. Below is our published library, including full survey reports and thematic research briefs.
        </p>

        <div class="impact-metrics-grid" style="margin-top: 2.5rem; margin-bottom: 3rem;">
          <div class="impact-metric-card">
            <div class="impact-val">1,456</div>
            <div class="impact-title">Respondents</div>
            <div class="impact-sub">Nationally representative</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">6</div>
            <div class="impact-title">States Surveyed</div>
            <div class="impact-sub">Across all six zones</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">4</div>
            <div class="impact-title">Published Documents</div>
            <div class="impact-sub">Open access</div>
          </div>
          <div class="impact-metric-card">
            <div class="impact-val">July 2025</div>
            <div class="impact-title">Most Recent Wave</div>
            <div class="impact-sub">Ongoing programme</div>
          </div>
        </div>

        <div class="category-filter-bar">
          ${['All', 'Full Survey Reports', 'Governance & Trust', 'Gender & Leadership', 'Youth Leadership'].map(tab => `
            <button class="filter-tab ${state.activeResearchFilter === tab ? 'active' : ''}" data-filter="${tab}">
              ${tab}
            </button>
          `).join('')}
        </div>

        ${(state.activeResearchFilter === 'All' || state.activeResearchFilter === 'Full Survey Reports') ? `
          <div class="featured-survey-card">
            <div class="survey-comp-sidebar">
              <span class="res-category" style="color: var(--color-gold);">SURVEY COMPOSITION</span>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; margin-bottom: 2rem;">
                <div>
                  <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--color-gold);">1,456</div>
                  <div style="font-size: 0.78rem; opacity: 0.8;">Respondents</div>
                </div>
                <div>
                  <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--color-gold);">6</div>
                  <div style="font-size: 0.78rem; opacity: 0.8;">States Surveyed</div>
                </div>
                <div>
                  <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: #FFF;">47% / 53%</div>
                  <div style="font-size: 0.78rem; opacity: 0.8;">Male / Female</div>
                </div>
                <div>
                  <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: #FFF;">64% / 36%</div>
                  <div style="font-size: 0.78rem; opacity: 0.8;">Urban / Rural</div>
                </div>
              </div>

              <div style="font-size: 0.78rem; opacity: 0.7; font-style: italic; line-height: 1.5;">
                ${featuredPoll.samplingMethod}
              </div>
            </div>

            <div class="survey-main-content">
              <span class="res-category" style="color: var(--color-gold);">${featuredPoll.badge}</span>
              <h3 style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: #FFF; margin-bottom: 1rem;">
                ${featuredPoll.title}
              </h3>
              <p style="font-size: 0.95rem; opacity: 0.9; line-height: 1.65; margin-bottom: 1.5rem;">
                ${featuredPoll.summary}
              </p>

              <div style="font-size: 0.85rem; opacity: 0.85; margin-bottom: 2rem;">
                <strong>Coverage:</strong> ${featuredPoll.coverage.join(' · ')}
              </div>

              <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                <a href="#research/${featuredPoll.id}" class="btn btn-gold">
                  STUDY RESEARCH <i data-lucide="book-open"></i>
                </a>
                <span style="font-size: 0.8rem; opacity: 0.7;">July 2025 · 1,456 respondents</span>
              </div>
            </div>
          </div>
        ` : ''}

        <div class="research-cards-list-container">
          ${filteredResearch.filter(r => r.id !== featuredPoll.id).map(res => `
            <div class="research-card">
              <div class="res-card-col-main">
                <span class="res-category">${res.badge}</span>
                <h3 class="res-title">${res.title}</h3>
                <p class="res-desc">${res.summary}</p>
              </div>

              <div class="res-card-col-stat">
                <div class="res-stat-highlight">${res.keyMetricVal}</div>
                <div class="res-stat-lbl">${res.keyMetricLbl}</div>
                <p class="res-finding-text">${res.keyFindingText}</p>
                ${res.policyProposals ? `<p class="res-proposals-text">${res.policyProposals.startsWith('Proposes') ? `<em>${res.policyProposals}</em>` : `<em>Proposes: ${res.policyProposals}</em>`}</p>` : ''}
              </div>

              <div class="res-card-col-meta">
                <div class="res-date">${res.fieldedDate}</div>
                <div class="res-coverage">${res.coverage.join(' · ')}</div>
                <a href="#research/${res.id}" class="res-read-link">Read the findings <i data-lucide="arrow-right"></i></a>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="closing-cta-section" style="margin-top: 4rem; border-radius: var(--radius-md);">
          <div class="closing-cta-overlay"></div>
          <div class="closing-cta-content">
            <span class="section-label" style="color: var(--color-gold);">COMMISSION A STUDY</span>
            <h3 style="font-family: var(--font-serif); font-size: 2.25rem; font-weight: 700; color: #FFF; margin-bottom: 1rem;">
              Looking for a specific dataset or commissioned study?
            </h3>
            <p style="font-size: 1rem; opacity: 0.9; margin-bottom: 2rem;">
              Our research team can walk you through methodology, raw findings, or scope a new study for your organization.
            </p>
            <a href="#contact" class="btn btn-gold">CONTACT OUR RESEARCH TEAM <i data-lucide="arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function setupResearchPageListeners() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeResearchFilter = tab.getAttribute('data-filter');
      renderApp();
    });
  });
}

// 8. CONTACT PAGE (WITH CONNECTED ACTIONS FOR MEDIA, WHATSAPP & GENERAL INQUIRIES)
function renderContactPage() {
  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div class="split-section" style="margin-bottom: 4rem;">
          <div>
            <span class="section-label">GET IN TOUCH</span>
            <h2 class="section-title">Let's Build Better<br/>Leadership <span class="italic">Together.</span></h2>
            <p class="section-desc">
              We welcome partnership opportunities, research collaborations, media enquiries and general inquiries. Reach out and let us create lasting impact together.
            </p>
          </div>

          <div style="position: relative; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-md);">
            <img src="images/WhatsApp Image 2026-08-08 at 08.59.53.jpeg" alt="SICNI SIRAC Contact" style="width: 100%; height: 340px; object-fit: cover;" />
            <div style="position: absolute; bottom: 1.5rem; right: 1.5rem; background: rgba(255,255,255,0.95); padding: 1.25rem; border-radius: var(--radius-sm); max-width: 260px; box-shadow: var(--shadow-md);">
              <div style="font-family: var(--font-serif); font-weight: 700; color: var(--color-dark); font-size: 1rem;">SICNI | SIRAC</div>
              <div style="font-size: 0.78rem; color: var(--color-text-muted); margin-top: 0.25rem;">Building Ethical Leaders. Strengthening Governance.</div>
            </div>
          </div>
        </div>

        <!-- QUICK ACTION CARDS (CONNECTED SPECIFIC ACTIONS) -->
        <div class="quick-action-cards">
          <div class="quick-card">
            <i data-lucide="handshake" style="color: var(--color-green); margin-bottom: 1rem; width: 28px; height: 28px;"></i>
            <h4 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">Partner With Us</h4>
            <p style="font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">Collaborate to drive leadership and development impact.</p>
            <a href="#partner" class="link-arrow">Learn More <i data-lucide="arrow-right"></i></a>
          </div>

          <div class="quick-card">
            <i data-lucide="newspaper" style="color: var(--color-green); margin-bottom: 1rem; width: 28px; height: 28px;"></i>
            <h4 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">Media Enquiries</h4>
            <p style="font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">For press releases, interviews and media related enquiries.</p>
            <a href="mailto:${CONFIG.MEDIA_EMAIL}?subject=Media%20Inquiry%20-%20SICNI%2FSIRAC" class="link-arrow">Contact Media Team <i data-lucide="arrow-right"></i></a>
          </div>

          <div class="quick-card">
            <i data-lucide="bar-chart-2" style="color: var(--color-green); margin-bottom: 1rem; width: 28px; height: 28px;"></i>
            <h4 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">Research Collaboration</h4>
            <p style="font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">Work with SIRAC on research, evidence generation and policy advisory.</p>
            <a href="${CONFIG.WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" class="link-arrow">Collaborate <i data-lucide="arrow-right"></i></a>
          </div>

          <div class="quick-card">
            <i data-lucide="help-circle" style="color: var(--color-green); margin-bottom: 1rem; width: 28px; height: 28px;"></i>
            <h4 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">General Enquiries</h4>
            <p style="font-size: 0.82rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">Have a question or need more information? We are happy to help.</p>
            <a href="#contact-form" class="link-arrow">Send an Enquiry <i data-lucide="arrow-right"></i></a>
          </div>
        </div>

        <div class="contact-split-grid">
          <div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">Send Us a Message</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 2rem;">Fill out the form below and our team will respond as soon as possible.</p>

            <form id="contact-form" action="${CONFIG.FORMSPREE_ENDPOINT}" method="POST">
              <!-- Honeypot anti-spam protection (hidden from humans) -->
              <input type="text" name="_gotcha" style="display:none !important;" tabindex="-1" autocomplete="off" />

              <div class="form-grid-2col">
                <div class="form-group">
                  <input type="text" name="name" class="form-input" placeholder="Full Name *" required />
                </div>
                <div class="form-group">
                  <input type="text" name="organisation" class="form-input" placeholder="Organisation (Optional)" />
                </div>
              </div>

              <div class="form-grid-2col">
                <div class="form-group">
                  <input type="email" name="email" class="form-input" placeholder="Email Address *" required />
                </div>
                <div class="form-group">
                  <input type="tel" name="phone" class="form-input" placeholder="Phone Number" />
                </div>
              </div>

              <div class="form-group">
                <select name="inquiry_type" class="form-select" required>
                  <option value="" disabled selected>Select Inquiry Type *</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Commission Research">Commission Research</option>
                  <option value="Join Tracking Study">Join Tracking Study</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Funding / Grants">Funding / Grants</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                </select>
              </div>

              <div class="form-group">
                <textarea name="message" class="form-textarea" placeholder="Your Message *" required></textarea>
              </div>

              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--color-text-muted);">
                <input type="checkbox" id="terms-check" required />
                <label for="terms-check">I agree to the <a href="#privacy" style="color: var(--color-green); text-decoration: underline;">privacy policy</a> and <a href="#terms" style="color: var(--color-green); text-decoration: underline;">terms of use</a>.</label>
              </div>

              <button type="submit" class="btn btn-dark">Send Message <i data-lucide="arrow-right"></i></button>
            </form>
          </div>

          <div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem;">Reach Us Directly</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 2rem;">We are here to support your goals and collaborate for greater impact.</p>

            <div style="display: flex; flex-direction: column; gap: 1.75rem;">
              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 42px; height: 42px; border-radius: 50%; background: rgba(16,123,82,0.1); color: var(--color-green); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i data-lucide="mail"></i></div>
                <div>
                  <h5 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.25rem;">Email Us</h5>
                  <p style="font-size: 0.85rem; color: var(--color-text-muted);"><a href="mailto:${CONFIG.CONTACT_EMAIL}">sicni.credible@gmail.com</a><br/>contact@sicnetworkinitiative.org</p>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 42px; height: 42px; border-radius: 50%; background: rgba(16,123,82,0.1); color: var(--color-green); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i data-lucide="phone"></i></div>
                <div>
                  <h5 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.25rem;">Call & WhatsApp</h5>
                  <p style="font-size: 0.85rem; color: var(--color-text-muted);">Phone: +234 07014765157<br/><a href="${CONFIG.WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" style="color: var(--color-green); font-weight: 600;">WhatsApp: +2347014765157</a></p>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 42px; height: 42px; border-radius: 50%; background: rgba(16,123,82,0.1); color: var(--color-green); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i data-lucide="clock"></i></div>
                <div>
                  <h5 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.25rem;">Office Hours</h5>
                  <p style="font-size: 0.85rem; color: var(--color-text-muted);">Monday – Friday: 9:00 AM – 5:00 PM<br/>Saturday: By Appointment</p>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 42px; height: 42px; border-radius: 50%; background: rgba(16,123,82,0.1); color: var(--color-green); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i data-lucide="map-pin"></i></div>
                <div>
                  <h5 style="font-weight: 700; color: var(--color-dark); margin-bottom: 0.25rem;">Partnership Enquiries</h5>
                  <p style="font-size: 0.85rem; color: var(--color-text-muted);"><a href="mailto:${CONFIG.PARTNERSHIP_EMAIL}">sicni.credible@gmail.com</a><br/>For partnerships, collaborations and institutional enquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="closing-cta-section" style="margin-top: 5rem; border-radius: var(--radius-md); padding: 0; text-align: left;">
          <div style="display: grid; grid-template-columns: 1fr 1.5fr; min-height: 380px;">
            <div style="background-color: var(--color-dark); padding: 3rem; color: #FFF; display: flex; flex-direction: column; justify-content: center;">
              <span class="section-label" style="color: var(--color-gold);">OUR OFFICE</span>
              <h3 style="font-family: var(--font-serif); font-size: 2.25rem; font-weight: 700; margin-bottom: 1.5rem;">Visit Us</h3>
              <p style="font-size: 1rem; opacity: 0.9; line-height: 1.6; margin-bottom: 2rem;">
                118B Bisi Obadina Street<br/>
                Omole Phase 1<br/>
                Ikeja, Lagos
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="link-arrow" style="color: var(--color-gold);">Get Directions <i data-lucide="arrow-right"></i></a>
            </div>
            <div style="background: #E2E8F0; position: relative;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.303980313364!2d3.3615291!3d6.6190875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e506ab64a1%3A0x6b44a42b10a424e1!2sOmole%20Phase%201%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function setupContactFormListener() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Check honeypot field for bot submission
      if (data._gotcha) {
        console.warn('Bot submission blocked via honeypot field.');
        form.reset();
        return;
      }
      
      // Perform AJAX submission or mailto fallback
      fetch(CONFIG.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(response => {
        alert('Thank you! Your message has been sent successfully to SICNI.credible@gmail.com.');
        form.reset();
      }).catch(err => {
        // Mailto fallback if endpoint unavailable locally
        const mailtoLink = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent('Inquiry: ' + (data.inquiry_type || 'General'))}&body=${encodeURIComponent('Name: ' + (data.name || '') + '\nOrganisation: ' + (data.organisation || 'N/A') + '\nEmail: ' + (data.email || '') + '\nPhone: ' + (data.phone || 'N/A') + '\n\nMessage:\n' + (data.message || ''))}`;
        window.location.href = mailtoLink;
        alert('Your email application has been opened to send this message directly to SICNI.credible@gmail.com.');
        form.reset();
      });
    });
  }
}

// 9. ISOLATED, SUBSTANTIAL EDITORIAL RESEARCH DETAIL PAGE (NO DOWNLOAD BUTTON)
function renderResearchDetailPage(id) {
  const index = RESEARCH_DATA.findIndex(r => r.id === id);
  const article = index !== -1 ? RESEARCH_DATA[index] : RESEARCH_DATA[0];

  const prevArticle = RESEARCH_DATA[(index - 1 + RESEARCH_DATA.length) % RESEARCH_DATA.length];
  const nextArticle = RESEARCH_DATA[(index + 1) % RESEARCH_DATA.length];

  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div class="article-detail-view">
          
          <!-- BREADCRUMB & BACK NAVIGATION -->
          <a href="#research" class="back-link-nav">
            <i data-lucide="arrow-left" style="width: 18px; height: 18px;"></i> Back to Published Research Library
          </a>

          <!-- HEADER METADATA -->
          <header class="article-header">
            <span class="res-category">${article.badge}</span>
            <h1 class="article-title-large">${article.title}</h1>
            <p style="font-size: 1.15rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
              ${article.summary}
            </p>

            <div class="article-meta-row">
              <div><strong>Published:</strong> ${article.fieldedDate}</div>
              <div><strong>Survey Scope:</strong> ${article.respondents} Respondents across ${article.statesCount} States</div>
              <div><strong>Coverage:</strong> ${article.coverage.join(', ')}</div>
              <div><strong>Reading Time:</strong> 8 min read</div>
            </div>
          </header>

          <!-- KEY RESEARCH METRIC HIGHLIGHT CARDS -->
          <div class="article-stat-grid">
            <div class="article-stat-card">
              <div class="val">${article.keyMetricVal}</div>
              <div class="lbl">Achieved Sample Size</div>
            </div>
            <div class="article-stat-card">
              <div class="val">${article.malePct || '47%'} / ${article.femalePct || '53%'}</div>
              <div class="lbl">Male / Female Gender Split</div>
            </div>
            <div class="article-stat-card">
              <div class="val">${article.urbanPct || '64%'} / ${article.ruralPct || '36%'}</div>
              <div class="lbl">Urban / Rural Distribution</div>
            </div>
            <div class="article-stat-card">
              <div class="val">${article.statesCount}</div>
              <div class="lbl">Geopolitical Zones Represented</div>
            </div>
          </div>

          <!-- LONG-FORM EDITORIAL ARTICLE BODY (SUSTAINABLE LONG-FORM READING) -->
          <article class="article-body-editorial">
            ${article.fullContent}
          </article>

          <!-- SIMPLE ARTICLE NAVIGATION (PREVIOUS / NEXT) -->
          <div class="article-nav-prev-next">
            <a href="#research/${prevArticle.id}" class="article-nav-card">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-text-light); text-transform: uppercase;">← PREVIOUS PUBLICATION</span>
                <h4 style="font-family: var(--font-serif); font-size: 1.05rem; font-weight: 700; color: var(--color-dark); margin-top: 0.4rem;">${prevArticle.title}</h4>
              </div>
              <span class="link-arrow" style="font-size: 0.78rem; margin-top: 1rem;">Read Article <i data-lucide="arrow-right"></i></span>
            </a>

            <a href="#research/${nextArticle.id}" class="article-nav-card" style="text-align: right;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-text-light); text-transform: uppercase;">NEXT PUBLICATION →</span>
                <h4 style="font-family: var(--font-serif); font-size: 1.05rem; font-weight: 700; color: var(--color-dark); margin-top: 0.4rem;">${nextArticle.title}</h4>
              </div>
              <span class="link-arrow" style="font-size: 0.78rem; margin-top: 1rem; justify-content: flex-end;">Read Article <i data-lucide="arrow-right"></i></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  `;
}

// 10. PROGRAM DETAIL PAGE TEMPLATE (UNTOUCHED / UNMODIFIED AS DIRECTED)
function renderProgramDetailPage(id) {
  const prog = PROGRAM_DATA.find(p => p.id === id) || PROGRAM_DATA[0];

  return `
    <section class="section-padding bg-light">
      <div class="container">
        <div style="font-size: 0.82rem; color: var(--color-text-light); margin-bottom: 1.5rem;">
          <a href="#home">Home</a> / <a href="#programs">Programs</a> / <span style="color: var(--color-text-muted);">${prog.title}</span>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
          <span class="featured-label">${prog.badge}</span>
          <h1 style="font-family: var(--font-serif); font-size: 3rem; font-weight: 700; color: var(--color-dark); margin-bottom: 1.5rem;">
            ${prog.title}
          </h1>

          <div style="border-radius: var(--radius-md); overflow: hidden; height: 380px; margin-bottom: 2.5rem;">
            <img src="${prog.image}" alt="${prog.title}" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>

          <p style="font-size: 1.15rem; color: var(--color-text-main); line-height: 1.7; margin-bottom: 2.5rem;">
            ${prog.desc}
          </p>

          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: var(--color-dark); margin-bottom: 1rem;">Key Program Achievements</h3>
          <div class="check-list" style="margin-bottom: 3rem;">
            ${prog.achievements.map(ach => `
              <div class="check-item" style="font-size: 1rem;">
                <span class="check-icon"><i data-lucide="check-circle-2"></i></span>
                <span>${ach}</span>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${CONFIG.GOOGLE_FORM_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-dark">Register Interest <i data-lucide="arrow-right"></i></a>
            <a href="#partner" class="btn btn-gold">Sponsor Programme</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
