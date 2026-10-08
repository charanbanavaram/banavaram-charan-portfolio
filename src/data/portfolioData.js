/**
 * Authentic Portfolio Data Architecture for Banavaram Charan
 * Source: Approved professional records, Standard Chartered Bank GBS apprenticeship,
 * academic credentials (Christ University B.Tech CSE), and genuine technical projects.
 *
 * Strict Authenticity Rule: Zero fabricated metrics, zero exaggerated roles, zero synthetic claims.
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
    { label: 'DOMAIN FOCUS', value: 'Fintech Operations & Process Analysis' }
  ]
};

export const aboutContent = {
  badge: '01 ABOUT ME',
  title: 'Connecting business operations, data analysis, and practical technology.',
  narrative1: 'My path connects a strong foundation in Computer Science & Engineering (IoT) from Christ (Deemed to be University), Bengaluru, with real-world enterprise banking operations at Standard Chartered Bank GBS.',
  narrative2: 'Operating inside Wealth & Retail Banking (WRB) operations, I work daily with high-volume financial transactions, multi-gateway payment settlement, Maker–Checker governance, and SLA-driven operational commitments. I understand how business workflows function before reaching for code: who is involved, what exceptions occur, where compliance is essential, and how structured systems can eliminate manual toil.',
  narrative3: 'Whether analyzing complex operational procedures, transforming data in SQL and Power BI, or building full-stack web applications with React and Node.js, my core strength is bridging the conversation between business stakeholders and engineering teams.',
  capabilities: [
    {
      number: '01',
      title: 'Business & Process Analysis',
      desc: 'Mapping complex operational workflows, capturing business requirements, identifying bottlenecks in manual tracking, and designing centralized digital process models with Maker–Checker controls.',
      tags: ['Workflow Mapping', 'Requirements Elicitation', 'Maker–Checker', 'SLA Tracking']
    },
    {
      number: '02',
      title: 'Data & MIS Analytics',
      desc: 'Extracting and analyzing transactional data using SQL and advanced Excel (formulas, pivot tables, MIS reporting), and designing Power BI dashboards for volume and turnaround time visibility.',
      tags: ['SQL', 'Power BI', 'Excel MIS', 'Trend Analysis']
    },
    {
      number: '03',
      title: 'Software Development',
      desc: 'Developing full-stack applications with clean database architectures, RESTful APIs, and responsive frontends using Python, React.js, Node.js, and relational database systems.',
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
      'Analyzed payment gateway reports and supported settlement and refund processing across Razorpay, Paytm, PayU, CCAvenue, TPSL, BillDesk, and Atom.',
      'Investigated transaction discrepancies, validated settlement and refund data, and supported accurate financial processing and reconciliation.',
      'Handled banking charge requests including charge levies, debits, credits, reversals, adjustments, and related customer servicing activities.',
      'Managed deposit and account servicing activities involving Company Deposits, NRE/NRO accounts, FCNR(B) deposits, account closures, and reactivation of dormant accounts.',
      'Performed validation and risk checks for sensitive transactions while adhering to Maker–Checker controls, internal procedures, operational risk guidelines, and SLA requirements.',
      'Prepared and analyzed MIS and operational reports using Microsoft Excel for transaction tracking, reconciliation, workload monitoring, and leadership reporting.',
      'Analyzed manual workflows and operational dependencies to identify opportunities for process improvement, automation, digitization, and technology-enabled solutions.'
    ],
    skillsApplied: [
      'Payment Gateway Settlement',
      'Transaction Reconciliation',
      'Maker–Checker Governance',
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
    subtitle: 'Secure Print Management Platform',
    category: 'software',
    categoryLabel: 'Product & Software Concept',
    status: 'In Development / Concept',
    featured: true,
    oneLiner: 'A secure web-based platform connecting customers with authorized print vendors for controlled document printing without sharing files over unsecured channels.',
    summary: 'Eliminates the privacy risk of sharing sensitive personal and academic documents via WhatsApp or email by introducing temporary uploads, 6-digit PIN and QR verification, configurable print options, and automated document deletion.',
    tech: ['React.js', 'Node.js', 'REST APIs', 'MySQL / PostgreSQL', 'MongoDB', 'RBAC'],
    meta: [
      { label: 'Role', value: 'Product & Full Stack Architecture' },
      { label: 'Approach', value: 'System Design · REST APIs · RBAC' },
      { label: 'Status', value: 'Concept & Prototype in Development' }
    ],
    caseStudy: {
      problem: 'In standard commercial printing, users frequently send confidential documents (IDs, financial statements, legal papers) to print shop owners via WhatsApp or email. This leaves unencrypted copies indefinitely stored on vendor personal devices and desktop folders without user control.',
      context: 'Academic institutions and commercial centers where thousands of ad-hoc print requests happen daily with zero access control or document lifecycle management.',
      role: 'Conceptualized the platform architecture, defined role-based access flows for users, vendors, and administrators, and engineered the core frontend interface and backend API schemas.',
      workflow: [
        { step: '01', title: 'Temporary Upload', desc: 'User uploads document with configurable parameters (color, duplex, copies).' },
        { step: '02', title: 'Access Token', desc: 'System generates an ephemeral 6-digit access code and dynamic QR code.' },
        { step: '03', title: 'Vendor Authentication', desc: 'Authorized print vendor scans QR code or verifies PIN on authorized vendor portal.' },
        { step: '04', title: 'Controlled Spool', desc: 'Job routes directly to designated printer with zero vendor desktop persistence.' },
        { step: '05', title: 'Automatic Deletion', desc: 'Document is permanently purged from storage immediately upon job completion.' }
      ],
      technologies: 'React.js for user and vendor portals, Node.js with Express for RESTful endpoints, PostgreSQL for structured relational records, and temporary encrypted storage.',
      outcome: 'Designed a comprehensive end-to-end blueprint demonstrating how basic everyday printing workflows can achieve data privacy, operational transparency, and controlled document access.'
    }
  },
  {
    id: 'block-management',
    title: 'Block Management Process Digitization',
    subtitle: 'Business Analysis & Workflow Design',
    category: 'analysis',
    categoryLabel: 'Business & Process Analysis',
    status: 'Process Model',
    featured: false,
    oneLiner: 'Business analysis and future-state workflow model for financial block actions, replacing manual spreadsheet tracking with structured Maker–Checker controls.',
    summary: 'Analyzed end-to-end workflows for financial block creation, release, deletion, and amount modifications to identify manual dependencies, operational risks, and SLA bottlenecks.',
    tech: ['Business Analysis', 'Workflow Modeling', 'Maker–Checker', 'RBAC', 'SLA Monitoring'],
    meta: [
      { label: 'Role', value: 'Business & Process Analyst' },
      { label: 'Focus', value: 'Maker–Checker · Controls · Auditability' },
      { label: 'Output', value: 'Digital Workflow Specification' }
    ],
    caseStudy: {
      problem: 'Managing financial account blocks and lien placements via manual emails and standalone spreadsheets leads to inconsistent tracking, lack of centralized audit trails, and higher risk of SLA breaches.',
      context: 'Enterprise banking operations requiring stringent maker-checker segregation and verifiable audit history before modifying account balance availability.',
      role: 'Mapped current-state operational bottlenecks, conducted stakeholder requirement gathering, and modeled the target digital workflow.',
      workflow: [
        { step: '01', title: 'Request Submission', desc: 'Branch or operations maker submits block request with mandatory justification.' },
        { step: '02', title: 'Automated Routing', desc: 'System evaluates rules and routes request to designated checker authorization queue.' },
        { step: '03', title: 'Dual Authorization', desc: 'Checker reviews documentation, confirms balance criteria, and approves or rejects.' },
        { step: '04', title: 'Execution & Audit', desc: 'Action executes on ledger with timestamped audit logging and SLA metrics.' }
      ],
      technologies: 'Business Process Modeling (BPMN), Functional Requirements Document (FRD), Role-Based Access Control matrix, and SLA metric formulas.',
      outcome: 'Delivered an actionable process model reducing manual communication dependencies, clarifying role responsibilities, and ensuring 100% auditability for regulatory compliance.'
    }
  },
  {
    id: 'payment-reconciliation',
    title: 'Payment Settlement & Reconciliation Analysis',
    subtitle: 'Process & Transaction Analysis',
    category: 'analysis',
    categoryLabel: 'Process & Transaction Analysis',
    status: 'Operational Framework',
    featured: false,
    oneLiner: 'Operational framework mapping payment flows, discrepancy investigation, and automated refund checkpoints across 7 major payment gateways.',
    summary: 'Mapped transaction lifecycles across Razorpay, Paytm, PayU, CCAvenue, TPSL, BillDesk, and Atom, standardizing discrepancy classification and settlement verification.',
    tech: ['Process Analysis', 'Payment Gateways', 'Reconciliation', 'Discrepancy Investigation', 'SLA Management'],
    meta: [
      { label: 'Role', value: 'Transaction & Process Analyst' },
      { label: 'Scope', value: '7 Payment Gateway Settlement Flows' },
      { label: 'Output', value: 'Reconciliation & Exception Framework' }
    ],
    caseStudy: {
      problem: 'Handling high-volume payment transactions across multiple third-party aggregators creates reconciliation mismatches due to differing settlement cycles, timing cutoffs, and dispute protocols.',
      context: 'Retail and wealth banking channels where customer deposit credits and refund turnaround times are strictly monitored under banking guidelines.',
      role: 'Analyzed gateway settlement reports, mapped exception categories (timeout, chargeback, double debit), and designed systematic reconciliation checkpoints.',
      workflow: [
        { step: '01', title: 'Multi-Gateway Ingestion', desc: 'Consolidation of daily settlement feeds from all 7 payment aggregators.' },
        { step: '02', title: 'Automated 3-Way Match', desc: 'Comparison of Gateway settlement vs. Core ledger vs. Customer account ledger.' },
        { step: '03', title: 'Discrepancy Triage', desc: 'Auto-categorization into timing differences, failed settlements, or chargebacks.' },
        { step: '04', title: 'Exception Resolution', desc: 'Guided workflows for initiating refunds or adjusting charges within SLA limits.' }
      ],
      technologies: 'Process Flow Diagrams, Excel Reconciliation Templates, Gateway Data Mapping, SLA Escalation Hierarchies.',
      outcome: 'Standardized discrepancy resolution procedures, decreased exception identification time, and provided clear operational visibility across multi-gateway financial flows.'
    }
  },
  {
    id: 'banking-dashboard',
    title: 'Banking Operations Performance Dashboard',
    subtitle: 'Operational Intelligence & Reporting',
    category: 'data',
    categoryLabel: 'Data Analytics & Reporting',
    status: 'Dashboard Concept',
    featured: false,
    oneLiner: 'Operational intelligence reporting prototype utilizing SQL data extraction and interactive Power BI KPI dashboards for volume and SLA monitoring.',
    summary: 'Transformed raw operational transaction logs into structured analytical views tracking daily volumes, pending requests, turnaround time by transaction type, and team throughput.',
    tech: ['SQL', 'Power BI', 'Microsoft Excel', 'Data Modeling', 'KPI Metrics'],
    meta: [
      { label: 'Role', value: 'Data Analyst' },
      { label: 'Tools', value: 'SQL · Power BI · Excel' },
      { label: 'Output', value: 'Interactive Operational Dashboard' }
    ],
    caseStudy: {
      problem: 'Operations supervisors lacked real-time visibility into queue backlogs, pending approvals, and SLA breach risks across diverse financial liability service requests.',
      context: 'Banking operations team processing hundreds of customer servicing requests daily under tight internal turnaround deadlines.',
      role: 'Extracted operational datasets using SQL, structured relational reporting tables, and designed interactive Power BI dashboards with drill-down filters.',
      workflow: [
        { step: '01', title: 'Data Extraction', desc: 'SQL queries extracting request timestamps, statuses, maker/checker IDs, and transaction types.' },
        { step: '02', title: 'Data Cleaning & Modeling', desc: 'Transforming timestamps, computing elapsed turnaround times, and establishing star-schema tables.' },
        { step: '03', title: 'KPI Visualization', desc: 'Designing intuitive visual cards for Volume, % SLA Adherence, Pending Backlog, and Aging Queues.' },
        { step: '04', title: 'Operational Actioning', desc: 'Interactive filtering allowing managers to identify bottlenecks by product stream.' }
      ],
      technologies: 'SQL queries, Power BI DAX formulas for SLA calculation, star-schema modeling, and Excel MIS automation.',
      outcome: 'Provided operations managers with actionable visibility into workload distribution and potential SLA bottlenecks before breaches occurred.'
    }
  },
  {
    id: 'cssm',
    title: 'Cloud Secure Storage Mechanism (CSSM)',
    subtitle: 'Data Dispersion & Encryption Concept',
    category: 'cloud',
    categoryLabel: 'Cloud & Security Concept',
    status: 'Academic Project',
    featured: false,
    oneLiner: 'Cloud storage security framework combining data dispersion techniques and cryptographic encryption for resilient multi-cloud document storage.',
    summary: 'Explored data fragmentation, cryptographic key distribution, and decentralized cloud storage nodes to guarantee confidentiality and disaster recovery without vendor lock-in.',
    tech: ['Cloud Storage Concepts', 'Data Dispersion', 'Cryptographic Encryption', 'Distributed Systems'],
    meta: [
      { label: 'Role', value: 'System Design & Research' },
      { label: 'Concept', value: 'Data Dispersion + Encryption' },
      { label: 'Domain', value: 'Cloud Architecture & Security' }
    ],
    caseStudy: {
      problem: 'Storing monolithic sensitive files in a single cloud repository leaves data vulnerable to single-point provider outages or unauthorized access breaches.',
      context: 'Distributed cloud environments requiring fault tolerance and strict data confidentiality.',
      role: 'Researched information dispersal algorithms (IDA), cryptographic key management, and multi-node storage workflows.',
      workflow: [
        { step: '01', title: 'File Chunking', desc: 'Original file split into dispersed fragments using mathematical secret sharing.' },
        { step: '02', title: 'Local Encryption', desc: 'Each chunk encrypted with distinct symmetric keys before transmission.' },
        { step: '03', title: 'Multi-Node Distribution', desc: 'Encrypted fragments distributed across geographically independent storage nodes.' },
        { step: '04', title: 'Threshold Reconstruction', desc: 'File can only be reconstructed if a minimum threshold of valid pieces are retrieved.' }
      ],
      technologies: 'Data dispersion concepts, cryptographic algorithms, distributed storage design principles.',
      outcome: 'Proved the theoretical and practical feasibility of combining data fragmentation with encryption to achieve zero-trust cloud data resilience.'
    }
  },
  {
    id: 'ihealthcare',
    title: 'iHealthcare',
    subtitle: 'Automated Medical Image Processing',
    category: 'software',
    categoryLabel: 'Software & Healthcare Technology',
    status: 'Academic Project',
    featured: false,
    oneLiner: 'Cloud-based medical image processing and diagnostic workflow concept with built-in patient data masking and privacy compliance.',
    summary: 'Designed an automated pipeline to handle diagnostic image transfers, strip identifying personal metadata (PII) before analysis, and streamline physician reviews.',
    tech: ['Python', 'Medical Imaging Concepts', 'Data Masking', 'Cloud Processing', 'Privacy Compliance'],
    meta: [
      { label: 'Role', value: 'Software Developer' },
      { label: 'Focus', value: 'Data Masking & Automated Pipelines' },
      { label: 'Domain', value: 'Healthcare Tech & Privacy' }
    ],
    caseStudy: {
      problem: 'Healthcare data sharing between clinics and diagnostic specialists frequently risks HIPAA / patient confidentiality breaches when transmitting un-anonymized imaging files.',
      context: 'Tele-radiology workflows and multi-clinic diagnostic consultations requiring high speed without compromising patient privacy.',
      role: 'Designed automated pre-processing scripts in Python that inspect image metadata and sanitize patient identifying records prior to cloud queuing.',
      workflow: [
        { step: '01', title: 'Image Intake', desc: 'Intake of medical scans from clinic imaging systems.' },
        { step: '02', title: 'PII Sanitization', desc: 'Automated removal and hash-masking of patient identifying attributes.' },
        { step: '03', title: 'Cloud Processing Queue', desc: 'Routing sanitized imaging files for authorized physician review.' },
        { step: '04', title: 'Secure Diagnostic Feed', desc: 'Re-linking diagnostic notes with encrypted patient identity records.' }
      ],
      technologies: 'Python, Image Processing libraries, Metadata Sanitization techniques, Secure File Transfer Protocols.',
      outcome: 'Demonstrated an effective workflow pattern for protecting patient privacy during automated healthcare processing.'
    }
  },
  {
    id: 'youtube-adview',
    title: 'YouTube Adview Prediction',
    subtitle: 'Machine Learning Regression Project',
    category: 'data',
    categoryLabel: 'Data Analytics & Machine Learning',
    status: 'Machine Learning Project',
    featured: false,
    oneLiner: 'Machine learning regression project predicting YouTube video ad views based on historical engagement metrics, with Random Forest Regressor yielding top performance.',
    summary: 'Performed exploratory data analysis, feature engineering, and cross-model evaluation across Linear Regression, Decision Trees, SVR, and Random Forest models.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Random Forest Regressor', 'Matplotlib'],
    meta: [
      { label: 'Role', value: 'ML Data Analyst' },
      { label: 'Best Model', value: 'Random Forest Regressor' },
      { label: 'Output', value: 'Predictive Regression Pipeline' }
    ],
    caseStudy: {
      problem: 'Content advertisers need reliable estimates of future video ad view volumes to allocate promotional budgets efficiently across varied creator categories.',
      context: 'Digital advertising campaign planning using public video metrics (views, likes, comments, category, duration).',
      role: 'Conducted exploratory data analysis, cleaned raw datasets, handled outliers and null values, engineered engagement ratios, and trained predictive models.',
      workflow: [
        { step: '01', title: 'Data Cleaning & EDA', desc: 'Transforming engagement variables, handling skewed distributions, and removing null records.' },
        { step: '02', title: 'Feature Engineering', desc: 'Creating like-to-view and comment-to-view ratio indicators.' },
        { step: '03', title: 'Model Training & Evaluation', desc: 'Benchmarking Linear Regression, SVR, Decision Trees, and Random Forest Regressor.' },
        { step: '04', title: 'Model Selection', desc: 'Confirmed Random Forest Regressor provided the best error minimization across test splits.' }
      ],
      technologies: 'Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn for correlation heatmaps.',
      outcome: 'Built an end-to-end data pipeline demonstrating practical machine learning methodology and data-driven predictive modeling.'
    }
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Framework',
    subtitle: 'IoT & Civil Infrastructure Monitoring',
    category: 'iot',
    categoryLabel: 'IoT & Infrastructure Monitoring',
    status: 'IoT Capstone Project',
    featured: false,
    oneLiner: 'IoT framework monitoring structural health of civil infrastructure using sensor telemetry to anticipate maintenance requirements before structural failure.',
    summary: 'Collected real-time vibration, strain, and environmental sensor readings using microcontrollers and telemetry protocols to identify anomalous degradation patterns.',
    tech: ['IoT Sensors', 'Arduino / Raspberry Pi', 'MQTT', 'Telemetry', 'Predictive Analysis'],
    meta: [
      { label: 'Role', value: 'IoT Systems Developer' },
      { label: 'Focus', value: 'Sensor Telemetry & Structural Health' },
      { label: 'Domain', value: 'Civil Infrastructure & Smart Systems' }
    ],
    caseStudy: {
      problem: 'Traditional civil infrastructure inspections rely on periodic manual visits, often detecting structural degradation after critical cracks or safety hazards have already developed.',
      context: 'Smart city initiatives and critical bridge / building monitoring requiring continuous sensor telemetry.',
      role: 'Programmed microcontroller sensor interfaces, configured MQTT telemetry publish-subscribe topics, and set anomaly detection thresholds.',
      workflow: [
        { step: '01', title: 'Sensor Deployment', desc: 'Vibration, load strain, and temperature sensors interfaced with microcontrollers.' },
        { step: '02', title: 'Telemetry Transmission', desc: 'Lightweight MQTT protocol streaming sensor packages to central gateway.' },
        { step: '03', title: 'Threshold & Trend Analysis', desc: 'Comparing live vibrations against baseline stress thresholds.' },
        { step: '04', title: 'Alert Generation', desc: 'Triggering preventative maintenance flags when persistent anomalies exceed safe margins.' }
      ],
      technologies: 'Arduino, Raspberry Pi, ESP8266, MQTT protocol, Node-RED, C++ sensor firmware, Python processing scripts.',
      outcome: 'Demonstrated how low-cost IoT sensor architectures can transform reactive physical maintenance into proactive, data-driven infrastructure management.'
    }
  }
];

export const skillsContent = [
  {
    category: 'Business & Analysis',
    badge: 'CORE DOMAIN',
    description: 'Bridging operational business requirements, risk governance, and structured digital workflows.',
    skills: [
      'Business Analysis',
      'Process Analysis & Mapping',
      'Requirements Elicitation',
      'Process Documentation (FRD/BRD)',
      'Process Improvement & Digitization',
      'Banking Operations (WRB)',
      'Maker–Checker Controls',
      'SLA & Exception Management',
      'Operational MIS Reporting',
      'Root-Cause Analysis'
    ]
  },
  {
    category: 'Data & Analytics',
    badge: 'DECISION SUPPORT',
    description: 'Transforming high-volume transactional records into actionable management visibility.',
    skills: [
      'SQL (Queries, Joins, Aggregations)',
      'Power BI (Dashboards & DAX)',
      'Microsoft Excel (Advanced: Formulas, Pivots)',
      'Python for Data Analysis',
      'Pandas & NumPy',
      'Matplotlib & Seaborn',
      'scikit-learn (Machine Learning)',
      'Transaction Reconciliation'
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
      'React.js',
      'Node.js & Express',
      'Spring Boot',
      'Django',
      'HTML5 & Modern CSS3',
      'RESTful API Design',
      'Relational Database Modeling'
    ]
  },
  {
    category: 'Cloud, DevOps & Tools',
    badge: 'TECHNOLOGY ENABLERS',
    description: 'Version control, cloud environments, containerization, and modern development tooling.',
    skills: [
      'Git & GitHub',
      'AWS Cloud Concepts',
      'Docker Containers',
      'Terraform & Packer',
      'Azure CLI',
      'Visual Studio Code',
      'CI/CD Workflow Concepts',
      'Linux Shell Basics'
    ]
  },
  {
    category: 'IoT & Smart Systems',
    badge: 'HARDWARE & TELEMETRY',
    description: 'Embedded systems, microcontrollers, and communication protocols for connected devices.',
    skills: [
      'Arduino',
      'Raspberry Pi',
      'ESP8266 Microcontrollers',
      'MQTT Protocol',
      'Node-RED',
      'IoT Sensor Interfacing',
      'Telemetry Data Collection'
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
    summary: 'Rigorous 12-week computer science foundational course covering procedural programming, memory management, pointers, and algorithm design.'
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
    score: 'CGPA: 8.2 / 10 (78.10%)',
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
    desc: 'Participated in comprehensive training routines, drills, aero-modeling, and team camps. Developed disciplined execution, decisive communication under pressure, proactive teamwork, and situational adaptability.'
  }
];
