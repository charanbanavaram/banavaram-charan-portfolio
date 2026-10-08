/**
 * Authentic Portfolio Data Architecture for Banavaram Charan
 * Source of Truth: Verified resume, Standard Chartered Bank GBS apprenticeship records,
 * academic foundation (Christ University B.Tech CSE IoT), and genuine technical projects.
 *
 * Strict Authenticity Rule:
 * - Primary Identity: Business Analyst
 * - Secondary Identities: Data Analyst · Software Developer
 * - Zero fabricated metrics, zero exaggerated roles, zero synthetic enterprise claims.
 */

export const personalInfo = {
  name: 'Banavaram Charan',
  firstName: 'Banavaram',
  lastName: 'Charan',
  primaryTitle: 'Business Analyst',
  secondaryTitles: 'Data Analyst · Software Developer',
  additionalTagline: 'Full Stack Developer & Fintech Enthusiast',
  email: 'banavaramcharan@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/banavaram-charan-733ab4222/',
  github: 'https://github.com/charanbanavaram',
  resumeUrl: '/Banavaram-Charan-Resume.pdf',
  profilePhoto: '/charan-profile.jpg',
  canonicalUrl: 'https://banavaramcharan.in/',
  availabilityStatus: 'Available for Opportunities'
};

export const heroContent = {
  headlineName: 'BANAVARAM CHARAN',
  primaryRole: 'BUSINESS ANALYST',
  secondaryRoles: 'DATA ANALYST · SOFTWARE DEVELOPER',
  summaryLede: 'Computer Science graduate with enterprise experience at Standard Chartered Bank GBS, combining business operations understanding, workflow analysis, data analytics, and software engineering to build practical, technology-enabled solutions.',
  fastFacts: [
    { label: 'ENTERPRISE EXPERIENCE', value: 'Standard Chartered Bank GBS' },
    { label: 'EDUCATION', value: 'B.Tech CSE (IoT) · 8.23 CGPA' },
    { label: 'TECHNICAL CREDENTIAL', value: 'PCAP Certified Python Associate' },
    { label: 'CORE FOCUS', value: 'Business & Data Analysis · Software' }
  ]
};

export const aboutContent = {
  badge: '01 ABOUT ME',
  title: 'Connecting business operations, data analysis, and practical technology.',
  narrative1: 'My path connects a solid foundation in Computer Science & Engineering (IoT) from Christ (Deemed to be University), Bengaluru, with real-world enterprise banking operations at Standard Chartered Bank GBS.',
  narrative2: 'Operating inside Wealth & Retail Banking (WRB) operations, I work daily with high-volume financial transaction servicing, payment gateway settlement, regulatory Maker–Checker risk governance, and SLA-driven operational commitments. I understand how business workflows function before reaching for code: who is involved, what exceptions occur, where compliance is essential, and how structured systems can eliminate manual toil.',
  narrative3: 'Whether analyzing complex operational procedures, transforming data in SQL and Power BI, or building full-stack web applications with React and Node.js, my core strength is bridging the conversation between business stakeholders and engineering teams.',
  capabilities: [
    {
      number: '01',
      title: 'Business & Process Analysis',
      desc: 'Mapping operational workflows, gathering business requirements, analyzing manual tracking gaps, and designing structured digital process models with Maker–Checker controls.',
      tags: ['Workflow Mapping', 'Requirements Elicitation', 'Maker–Checker', 'SLA Tracking']
    },
    {
      number: '02',
      title: 'Data & MIS Analytics',
      desc: 'Extracting and transforming operational data using SQL and advanced Excel (formulas, pivot tables, MIS reporting), and designing Power BI dashboards for volume and turnaround time visibility.',
      tags: ['SQL', 'Power BI', 'Excel MIS', 'Trend Analysis']
    },
    {
      number: '03',
      title: 'Software Development',
      desc: 'Developing full-stack web applications with clean database architectures, RESTful APIs, and responsive frontends using Python, React.js, Node.js, and relational database systems.',
      tags: ['Python', 'React.js', 'Node.js', 'REST APIs', 'PostgreSQL/MySQL']
    },
    {
      number: '04',
      title: 'Process Improvement & Automation',
      desc: 'Evaluating manual operational dependencies, designing digital replacements for spreadsheet tracking, and applying software concepts to improve efficiency and operational auditability.',
      tags: ['Process Digitization', 'Workflow Automation', 'Audit Trails', 'Efficiency']
    }
  ]
};

export const experienceContent = [
  {
    company: 'Standard Chartered Bank GBS',
    location: 'Bengaluru, India',
    role: 'Apprentice – Financial Liabilities Operations (WRB)',
    domain: 'Wealth & Retail Banking / WRB Operations',
    duration: 'October 2025 — Present',
    type: 'Full-time Apprenticeship',
    focus: 'Financial Operations | Process Improvement | Automation Focus',
    overview: 'Processing high-volume, time-sensitive financial transactions while upholding operational accuracy, strict SLA benchmarks, and Maker–Checker risk governance.',
    responsibilities: [
      'Processed high-volume, time-sensitive financial transactions while maintaining accuracy, operational controls, and SLA commitments.',
      'Analyzed payment gateway reports and supported settlement and refund processing across Razorpay, Paytm, PayU, CCAvenue, TPSL, BillDesk, and Atom.',
      'Investigated transaction discrepancies, validated settlement and refund data, and supported accurate financial processing and reconciliation.',
      'Handled banking charge requests including charge levies, debits, credits, reversals, adjustments, and related servicing activities.',
      'Managed deposit and account servicing activities involving Company Deposits, NRE/NRO accounts, FCNR(B) deposits, account closures, and reactivation of dormant accounts.',
      'Performed validation and risk checks for sensitive transactions while adhering to Maker–Checker controls, internal procedures, operational risk guidelines, and SLA requirements.',
      'Prepared and analyzed MIS and operational reports using Microsoft Excel for transaction tracking, reconciliation, workload monitoring, and leadership reporting.',
      'Analyzed manual workflows and operational dependencies to identify opportunities for process improvement, automation, digitization, and technology-enabled solutions.'
    ],
    skillsApplied: [
      'Payment Gateway Settlement',
      'Transaction Reconciliation',
      'Maker–Checker Controls',
      'Microsoft Excel (MIS Reports)',
      'Account & Deposit Servicing',
      'Process Improvement',
      'SLA & Risk Compliance'
    ]
  }
];

export const projectsContent = [
  {
    id: 'smart-print',
    title: 'Smart Print',
    subtitle: 'Web-Based Secure Print Management Platform',
    category: 'software',
    categoryLabel: 'Software & Process Automation',
    status: 'In Development / Concept',
    featured: true,
    oneLiner: 'A web-based secure printing platform where users can temporarily upload documents for printing without sharing them through WhatsApp or email.',
    summary: 'Eliminates the privacy risk of sharing sensitive personal and academic documents via messaging apps by introducing temporary document uploads, 6-digit PIN and QR verification, printer selection, custom print settings, and automatic document deletion upon completion.',
    tech: ['React.js', 'Node.js', 'Express', 'REST APIs', 'MySQL / PostgreSQL', 'MongoDB', 'QR / PIN Auth'],
    meta: [
      { label: 'Role', value: 'Product & Full Stack Development' },
      { label: 'Approach', value: 'System Design · REST APIs · RBAC' },
      { label: 'Status', value: 'Concept & Prototype in Development' }
    ],
    caseStudy: {
      problem: 'In commercial and campus print shops, users frequently share sensitive documents (identity proofs, academic certificates, financial papers) with shop operators via WhatsApp or email. This leaves unencrypted personal files stored indefinitely on vendor personal devices without user control or privacy guarantees.',
      approach: 'Designed a privacy-focused web platform where users temporarily upload documents, configure print preferences (color/B&W, copies, duplex), and receive an ephemeral 6-digit PIN and dynamic QR code. Authorized print vendors verify the code on their portal to spool the job directly to connected printers, triggering automated document purging immediately upon completion.',
      technologies: 'React.js for user and vendor interfaces, Node.js with Express for RESTful endpoints, PostgreSQL/MySQL for structured records, and ephemeral storage with automatic purge routines.',
      result: 'Developed a functional prototype concept proving that everyday printing workflows can achieve data privacy, operational transparency, and zero permanent file retention on vendor devices without requiring complex proprietary hardware.',
      githubUrl: 'https://github.com/charanbanavaram'
    }
  },
  {
    id: 'cssm',
    title: 'Cloud Secure Storage Mechanism (CSSM)',
    subtitle: 'Data Dispersion & Cloud Storage Security',
    category: 'cloud',
    categoryLabel: 'Cloud & Security Concept',
    status: 'Academic Project',
    featured: false,
    oneLiner: 'Cloud storage security framework combining data dispersion and encryption techniques to store fragmented data securely across cloud endpoints.',
    summary: 'Explored data fragmentation, cryptographic encryption, and distributed cloud storage to enhance confidentiality and disaster recovery without single-provider dependency.',
    tech: ['Cloud Storage Concepts', 'Data Dispersion', 'Cryptographic Encryption', 'OpenStack Swift'],
    meta: [
      { label: 'Role', value: 'System Design & Research' },
      { label: 'Concept', value: 'Data Dispersion + Encryption' },
      { label: 'Domain', value: 'Distributed Cloud Storage' }
    ],
    caseStudy: {
      problem: 'Storing monolithic sensitive files in a single cloud repository leaves data vulnerable to single-point provider outages or unauthorized access breaches.',
      approach: 'Researched and implemented information dispersal concepts where files are segmented into encrypted chunks, distributed across independent cloud storage targets (such as OpenStack Swift), and reassembled only when a threshold of valid pieces is retrieved.',
      technologies: 'Data dispersion algorithms, cryptographic symmetric encryption, cloud object storage concepts, and OpenStack Swift.',
      result: 'Demonstrated the feasibility of combining file fragmentation with encryption to enhance cloud data confidentiality and fault tolerance without relying on a single storage provider.',
      githubUrl: null
    }
  },
  {
    id: 'ihealthcare',
    title: 'iHealthcare',
    subtitle: 'Medical Image Processing & Privacy Masking',
    category: 'software',
    categoryLabel: 'Software & Healthcare Technology',
    status: 'Academic Project',
    featured: false,
    oneLiner: 'Automated medical image processing workflow with built-in patient data masking for secure clinical image transfer.',
    summary: 'Designed an automated pipeline to handle diagnostic image transfers, strip identifying personal metadata (PII) before analysis, and streamline physician reviews.',
    tech: ['Python', 'Medical Image Processing', 'Data Masking', 'Cloud Processing Concepts'],
    meta: [
      { label: 'Role', value: 'Software Developer' },
      { label: 'Focus', value: 'Data Masking & Automated Pipelines' },
      { label: 'Domain', value: 'Healthcare Tech & Privacy' }
    ],
    caseStudy: {
      problem: 'Sharing diagnostic scans across distributed clinical systems creates privacy and compliance risks if patient-identifying information (PII) is transmitted alongside medical imagery.',
      approach: 'Developed automated Python image processing routines that inspect incoming diagnostic scans, strip and mask personal identifying metadata (PII), and route sanitized image files for physician analysis.',
      technologies: 'Python, image processing libraries, metadata sanitization techniques, and secure file transfer protocols.',
      result: 'Successfully implemented automated metadata sanitization for medical scans, protecting patient privacy while preserving diagnostic image quality for evaluation.',
      githubUrl: null
    }
  },
  {
    id: 'youtube-adview',
    title: 'YouTube Adview Prediction',
    subtitle: 'Machine Learning Regression Pipeline',
    category: 'data',
    categoryLabel: 'Data Analytics & Machine Learning',
    status: 'Machine Learning Project',
    featured: false,
    oneLiner: 'Machine learning regression project predicting YouTube video ad views based on engagement metrics, where Random Forest Regressor demonstrated top performance.',
    summary: 'Performed exploratory data analysis, feature engineering, and cross-model evaluation across Linear Regression, Decision Trees, SVR, and Random Forest models.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Random Forest Regressor', 'Matplotlib'],
    meta: [
      { label: 'Role', value: 'ML Data Analyst' },
      { label: 'Top Model', value: 'Random Forest Regressor' },
      { label: 'Stack', value: 'Python · scikit-learn · Pandas' }
    ],
    caseStudy: {
      problem: 'Predicting video ad view volume based on public engagement indicators to analyze what video features correlate with audience reach.',
      approach: 'Conducted exploratory data analysis, handled outliers and missing values, engineered engagement ratios (views, likes, comments), and trained and compared regression models including Linear Regression, SVR, Decision Trees, and Random Forest Regressor.',
      technologies: 'Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn for correlation heatmaps.',
      result: 'Evaluated multiple algorithms on regression benchmark metrics; Random Forest Regressor achieved the best predictive performance among evaluated models.',
      githubUrl: null
    }
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Framework',
    subtitle: 'IoT Sensor Telemetry & Anomaly Detection',
    category: 'iot',
    categoryLabel: 'IoT & Infrastructure Monitoring',
    status: 'IoT Capstone Project',
    featured: false,
    oneLiner: 'IoT framework collecting sensor telemetry to monitor structural and equipment conditions and detect anomalies proactively.',
    summary: 'Collected vibration and environmental sensor readings using microcontrollers and telemetry protocols to identify degradation patterns before physical failure.',
    tech: ['IoT Sensors', 'Arduino / ESP8266', 'MQTT Protocol', 'Advantech Cloud PaaS', 'Node-RED', 'Python'],
    meta: [
      { label: 'Role', value: 'IoT Systems Developer' },
      { label: 'Hardware', value: 'Arduino · ESP8266 · Sensors' },
      { label: 'Protocol', value: 'MQTT Telemetry' }
    ],
    caseStudy: {
      problem: 'Relying solely on periodic manual inspections often detects structural or equipment wear only after significant physical degradation has already taken place.',
      approach: 'Interfaced vibration and environmental sensors with microcontrollers (Arduino / ESP8266), streamed sensor telemetry over the MQTT protocol, and monitored threshold parameters for anomaly detection using Advantech PaaS / Node-RED.',
      technologies: 'Arduino, ESP8266, MQTT protocol, Advantech Cloud PaaS, Node-RED, C++ sensor firmware, Python processing scripts.',
      result: 'Built a functional end-to-end prototype showing how continuous sensor telemetry and threshold monitoring can provide early detection of physical degradation.',
      githubUrl: null
    }
  }
];

export const skillsContent = [
  {
    category: 'Business & Process Analysis',
    badge: 'CORE DOMAIN',
    description: 'Bridging operational business requirements, risk governance, and structured digital workflows.',
    skills: [
      'Business Analysis',
      'Process Analysis & Mapping',
      'Requirements Gathering',
      'Maker–Checker Controls',
      'Payment Gateway Settlement',
      'Banking Operations (WRB)',
      'Account & Deposit Servicing',
      'SLA & Exception Management',
      'Process Improvement',
      'Root Cause Analysis'
    ]
  },
  {
    category: 'Data & Analytics',
    badge: 'DECISION SUPPORT',
    description: 'Transforming high-volume transactional records into actionable management visibility.',
    skills: [
      'SQL (Queries, Joins, Aggregations)',
      'Microsoft Excel (Advanced: VLOOKUP, Pivot Tables, MIS Reports)',
      'Power BI (Dashboards, KPIs)',
      'Data Analysis',
      'Operational Reporting',
      'Settlement Reconciliation',
      'Python for Data Analysis',
      'Pandas & NumPy'
    ]
  },
  {
    category: 'Software Development',
    badge: 'BUILDER CAPABILITY',
    description: 'Full-stack engineering foundations for developing secure, modular web applications.',
    skills: [
      'Python (PCAP Certified)',
      'Java (Core & OOP)',
      'JavaScript (ES6+)',
      'C Programming',
      'React.js',
      'Node.js & Express',
      'HTML5 & Modern CSS3',
      'REST APIs',
      'MySQL & PostgreSQL',
      'MongoDB'
    ]
  },
  {
    category: 'Cloud & Technology',
    badge: 'TECHNOLOGY ENABLERS',
    description: 'Version control, cloud environments, platform administration, and modern developer tooling.',
    skills: [
      'Git & GitHub',
      'Visual Studio Code',
      'SDLC & System Design Concepts',
      'Role-Based Access Control (RBAC)',
      'Docker Basics',
      'AWS Cloud Concepts',
      'ServiceNow (CSA & CAD)',
      'Generative AI Fundamentals',
      'Prompt Engineering',
      'Workflow Automation'
    ]
  },
  {
    category: 'IoT (Internet of Things)',
    badge: 'HARDWARE & TELEMETRY',
    description: 'Embedded systems, microcontrollers, and communication protocols for connected devices.',
    skills: [
      'Advantech Cloud PaaS',
      'MQTT Protocol',
      'Arduino',
      'Raspberry Pi',
      'ESP8266 Microcontrollers',
      'Node-RED',
      'IoT Sensor Telemetry'
    ]
  }
];

export const credentialsContent = [
  {
    title: 'PCAP – Certified Associate in Python Programming',
    issuer: 'Python Institute',
    badge: 'VERIFIED CERTIFICATION',
    summary: 'Comprehensive certification verifying proficiency in Python syntax, object-oriented programming, data structures, algorithms, and core standard library modules.'
  },
  {
    title: 'Problem Solving Through Programming in C',
    issuer: 'NPTEL — IIT Kharagpur',
    badge: 'ACADEMIC CREDENTIAL',
    summary: 'Rigorous computer science foundational course covering procedural programming, memory management, pointers, and algorithm design.'
  },
  {
    title: 'Advantech PaaS — Level 1, Level 2 & Level 3',
    issuer: 'Advantech Cloud IoT Academy',
    badge: 'CLOUD IOT PLATFORM',
    summary: 'Multi-level training program in cloud platform architecture, edge device integration, and industrial IoT data pipelines.'
  },
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    badge: 'ITSM PLATFORM',
    summary: 'Validation in ServiceNow platform configuration, user administration, incident/change workflow management, and operational catalog design.'
  },
  {
    title: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    badge: 'APPLICATION DEVELOPMENT',
    summary: 'Credential verifying skills in custom application creation, script includes, business rules, client scripts, and automated workflow triggers.'
  }
];

export const educationContent = [
  {
    degree: 'B.Tech in Computer Science & Engineering (IoT)',
    institution: 'Christ (Deemed to be University), Bengaluru',
    duration: '2021 — 2025',
    score: 'CGPA: 8.23 / 10',
    highlight: 'Comprehensive foundation in software engineering, database systems, computer networks, internet of things, and data structures.'
  },
  {
    degree: 'Senior Secondary / Intermediate (Class XII)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2019 — 2021',
    score: '78.10% (CGPA: 8.2 / 10)',
    highlight: 'Mathematics, Physics, and Chemistry (MPC) stream.'
  },
  {
    degree: 'Secondary School Certificate (SSC / Class X)',
    institution: 'Sri Swamy Vivekananda EM High School',
    duration: '2015 — 2019',
    score: 'GPA: 9.3 / 10',
    highlight: 'Distinction with top academic standing across core sciences and mathematics.'
  }
];

export const leadershipContent = [
  {
    title: 'National Cadet Corps (NCC) — Air Wing',
    duration: '2022 — 2025',
    badge: 'LEADERSHIP & RIGOR',
    desc: 'Participated in Combined Annual Training Camp (CATC), rifle training, flying orientation, map reading, aeromodelling, and drill discipline. Developed teamwork, situational adaptability, and clear communication.'
  }
];
