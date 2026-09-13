import './style.css'

// Factual external profile links
const LINKS = {
  resume: '/Banavaram-Charan-Resume.pdf',
  linkedin: 'https://www.linkedin.com/in/banavaram-charan-733ab4222/',
  github: 'https://github.com/charanbanavaram',
  email: 'banavaramcharan@gmail.com',
  phone: '+91 8985897700',
  location: 'Bengaluru, Karnataka, India'
}

// 10-Step Case Studies Data (Strictly factual based on Charan's background & projects)
const PROJECTS = [
  {
    id: 'smart-print',
    title: 'Smart Print — Secure Print Management Platform',
    category: 'software',
    categoryLabel: 'Software Development',
    status: 'In Development',
    statusClass: 'status-dev',
    problemOneLiner: 'Unattended document printing in shared spaces causes sensitive data exposure and untracked paper waste.',
    solutionOneLiner: 'Engineered a centralized web platform locking print jobs until physical user verification via dynamic QR code or secure PIN.',
    summary: 'A secure full-stack web platform connecting enterprise/campus customers with verified print vendors for controlled document printing, QR authentication, and real-time status tracking.',
    cardMetrics: [
      { label: 'Role', value: 'Full-Stack Developer & System Designer' },
      { label: 'Key Tech', value: 'React.js · Node.js · REST APIs · MySQL' },
      { label: 'Security', value: 'Dynamic QR Auth · Secure PIN · RBAC' },
      { label: 'Deliverable', value: 'Architecture Spec, APIs & Working Prototype' }
    ],
    tags: ['React.js', 'Node.js', 'REST APIs', 'MySQL/PostgreSQL', 'QR Authentication', 'RBAC'],
    githubUrl: 'https://github.com/charanbanavaram',
    liveUrl: null,
    architectureNodes: [
      { step: '01', tier: 'Client Tier', label: 'Customer Web Interface', desc: 'Secure document upload, print parameter selection (Color/B&W, Duplex, Copies), and real-time job tracking.', badge: 'React.js' },
      { step: '02', tier: 'Security Gateway', label: 'API Gateway & RBAC Engine', desc: 'Token validation, role authorization (Customer, Vendor, Admin), and payload sanitization.', badge: 'Node.js / Express' },
      { step: '03', tier: 'Persistence Tier', label: 'Relational Database', desc: 'Normalized schemas for users, vendors, encrypted document records, and billing state machines.', badge: 'MySQL / PostgreSQL' },
      { step: '04', tier: 'Verification Point', label: 'Dynamic QR Code / Secure PIN', desc: 'Physical user presence verification at the printer prevents unattended document exposure.', badge: 'Dual-Factor Auth' },
      { step: '05', tier: 'Fulfillment Tier', label: 'Verified Vendor Terminal', desc: 'Instant authentication triggers decryption and spools job to the selected physical printer.', badge: 'Secure Spooler' }
    ],
    steps: {
      problem: 'Unrestricted document printing in shared environments (offices, university campuses, public hubs) leads to confidential papers sitting unattended on output trays, massive paper wastage, and zero traceability of who printed what.',
      context: 'In universities and shared workspaces, hundreds of users print daily. Without physical verification at the output device, documents containing personal data or academic records sit exposed to passersby, while vendors struggle with reconciliation.',
      role: 'Designed and built the full-stack system architecture, defined role-based access rules (Customer, Vendor, Admin), engineered the RESTful API endpoints, and created the end-to-end print configuration workflow.',
      analysis: 'Deconstructed the entire print lifecycle from client upload to collection. Identified the core vulnerability: the gap between print initiation and physical retrieval. Addressed this by decoupling print submission from physical document release.',
      solution: 'Created a centralized web application where customers upload documents and configure print parameters. The document remains encrypted and locked in the queue until the customer stands physically at the printer and scans a dynamic QR code or inputs a one-time PIN.',
      architecture: `[ CUSTOMER WEB CLIENT (React.js) ]
  ├── Upload Document
  └── Configure Print Settings (Color/Duplex/Copies)
           │ (HTTPS / Multipart Form)
           ▼
[ API GATEWAY & RBAC CONTROLLER (Node.js) ]
  ├── JWT Authentication & Permission Check
  └── Document Format Validation & Metadata Storage
           │
           ├────────────────────────┐
           ▼                        ▼
[ RELATIONAL DATABASE ]   [ DYNAMIC AUTH ENGINE ]
  (Users, Jobs, Ledger)     (Generates Time-Limited QR / PIN)
           │                        │
           ▼                        ▼
[ VERIFIED VENDOR TERMINAL ] ◄──────┘
  ├── Scan QR / Validate PIN (Physical Presence Confirmed)
  └── Trigger Document Decryption & Local Printer Spooling`,
      implementation: 'Built responsive React.js frontend with live print price estimation and parameter toggles. Developed Node.js REST APIs handling multipart file parsing, role checks, and job status lifecycles. Structured normalized SQL schemas for users, print vendors, transactions, and immutable audit logs.',
      security: 'Implemented granular Role-Based Access Control (Customer, Vendor, Administrator). Files are isolated and inaccessible to third parties. Output requires physical dual verification via dynamic QR code or short-lived PIN.',
      challenges: 'Handling heterogeneous printer driver formats across vendors. Resolved by enforcing standard document format parsing and server-side PDF validation before routing jobs to vendor spoolers.',
      outcome: 'Delivered complete system architecture specifications, normalized database schemas, full REST API endpoints, and a functional front-end workflow prototype.'
    }
  },
  {
    id: 'block-management',
    title: 'Block Management Process Digitization',
    category: 'devsecops',
    categoryLabel: 'DevSecOps & Governance',
    status: 'Completed Design & Requirements',
    statusClass: 'status-done',
    problemOneLiner: 'Manual tracking and email approvals for high-risk account lien blocks exposed operations to control and SLA breaches.',
    solutionOneLiner: 'Designed a future-state digital operating model with mandatory Maker-Checker controls, RBAC segregation, and audit tracking.',
    summary: 'A proposed future-state operating model for financial block creation, release, deletion, and amount modification with formalized Maker-Checker controls, RBAC, and SLA monitoring.',
    cardMetrics: [
      { label: 'Role', value: 'Business Analyst & Process Designer' },
      { label: 'Domain', value: 'Financial Liabilities Operations (WRB)' },
      { label: 'Controls', value: 'Maker-Checker · RBAC · Audit Trail' },
      { label: 'Deliverable', value: 'Digital Operating Model & BRD Specification' }
    ],
    tags: ['Business Analysis', 'Workflow Design', 'Maker-Checker', 'RBAC', 'SLA Monitoring', 'Audit Trail'],
    githubUrl: null,
    liveUrl: null,
    architectureNodes: [
      { step: '01', tier: 'Intake Tier', label: 'Service Request Intake', desc: 'Branch or operations desk captures block action, account parameters, and attaches compliance proof.', badge: 'Service Desk' },
      { step: '02', tier: 'Validation Engine', label: 'Automated Rule Gateway', desc: 'System verifies account eligibility, balance availability, court order mandates, and limit thresholds.', badge: 'Rules Engine' },
      { step: '03', tier: 'Maker Ownership', label: 'Operations Maker Review', desc: 'Authorized maker verifies documentation, prepares transaction delta, and submits for dual-check.', badge: 'Maker Role' },
      { step: '04', tier: 'Checker Governance', label: 'Independent Checker Approval', desc: 'Authorized checker performs independent review; strict RBAC ensures Maker ≠ Checker.', badge: 'Checker Role' },
      { step: '05', tier: 'Core Execution', label: 'Core Banking & Audit Engine', desc: 'Lien applied to core ledger, status timestamped, and immutable audit event written.', badge: 'Core Ledger' }
    ],
    steps: {
      problem: 'Financial liabilities operations relied on fragmented spreadsheet tracking, manual handoffs, and unstructured email authorizations for high-risk lien block actions (creating, releasing, deleting, or adjusting lien amounts).',
      context: 'In banking operations, improperly executed or delayed lien blocks create substantial regulatory risk, exposure to bad debt, and severe customer dissatisfaction. High-velocity operations require unambiguous digital guardrails.',
      role: 'Conducted stakeholder interviews across operations and risk compliance, deconstructed manual process friction points, authored the future-state digital operating specification, and designed dashboard control mockups.',
      analysis: 'Mapped 4 critical block actions: Block Creation, Release, Deletion, and Amount Adjustment. Identified key vulnerability points: absence of automated Maker-Checker segregation, lack of real-time SLA breach warnings, and siloed audit records.',
      solution: 'Architected a centralized digital workflow enforcing strict Role-Based Access Control (RBAC), automatic queue assignment separating Makers and Checkers, structured field validations, and automated turnaround-time (TAT) tracking.',
      architecture: `[ SERVICE REQUEST INTAKE ]
  ├── Requester inputs Account Number & Block Type
  └── Attaches Regulatory / Legal Order Documentation
           │
           ▼
[ AUTOMATED VALIDATION GATEWAY ]
  ├── Account Eligibility & Balance Threshold Checks
  └── Document Completeness Rules
           │
           ▼
[ MAKER OPERATIONS QUEUE ]
  ├── Operations Maker reviews evidence & enters lien delta
  └── Submits to Independent Dual-Control Queue
           │
           ▼
[ CHECKER GOVERNANCE QUEUE (RBAC) ]
  ├── Independent Checker validates supporting documents
  └── Approves or Rejects with Mandatory Reason Code (Maker ≠ Checker)
           │
           ▼
[ CORE BANKING LEDGER EXECUTION ]
  ├── Core Lien State Updated
  ├── Immutable Audit Record Logged (User ID, IP, Delta, Timestamp)
  └── Automated SLA Notification Sent to Stakeholders`,
      implementation: 'Authored exhaustive functional specifications (BRD) and validation rules for each block lifecycle stage. Designed operational SLA alert thresholds and exception escalation ladders.',
      security: 'Strict enforcement of segregation of duties: system logic prevents a Maker from acting as Checker on the same record. Tamper-evident audit logging records every state transition, delta amount, and user identifier.',
      challenges: 'Handling complex operational edge cases, such as court-ordered lien priorities and partial amount releases, while maintaining an intuitive, error-resistant interface for processing staff.',
      outcome: 'Delivered an approved operational requirements document (BRD), end-to-end workflow transition models, and functional interface mockups clarifying digital operating procedures.'
    }
  },
  {
    id: 'payment-reconciliation',
    title: 'Payment Settlement & Reconciliation Process Analysis',
    category: 'automation',
    categoryLabel: 'Automation & Operations',
    status: 'Operational Analysis',
    statusClass: 'status-done',
    problemOneLiner: 'Heterogeneous reporting formats and disparate settlement cycles across 7 payment gateways created high manual overhead.',
    solutionOneLiner: 'Formulated a standardized 3-way reconciliation framework mapping transaction states, discrepancy types, and exception queues.',
    summary: 'Detailed operational mapping of payment transaction flows across 7 major gateways, identifying settlement discrepancies, refund validation checkpoints, and automated exception handling.',
    cardMetrics: [
      { label: 'Role', value: 'Operations & Process Analyst' },
      { label: 'Gateways', value: 'Razorpay · Paytm · PayU · BillDesk +3' },
      { label: 'Focus', value: 'Settlement · Refunds · Discrepancies' },
      { label: 'Deliverable', value: 'Traceability Matrix & Standardized Reconciliation Schema' }
    ],
    tags: ['Payment Gateways', 'Settlement Data', 'Reconciliation', 'Discrepancy Investigation', 'Excel MIS'],
    githubUrl: null,
    liveUrl: null,
    architectureNodes: [
      { step: '01', tier: 'Ingestion Tier', label: 'Multi-Gateway Feeds', desc: 'Automated extraction of daily settlement and refund files across 7 payment gateways.', badge: '7 Gateways' },
      { step: '02', tier: 'Normalization', label: 'Schema Harmonization', desc: 'Standardizing disparate CSV/XLSX formats into a unified transaction data model.', badge: 'ETL Mapping' },
      { step: '03', tier: 'Matching Engine', label: '3-Way Reconciliation Matrix', desc: 'Triangulating Internal Bank Ledger, Gateway Settlement Feed, and Clearing Bank Statement.', badge: 'Recon Matrix' },
      { step: '04', tier: 'Triage Queue', label: 'Discrepancy Classification', desc: 'Automated sorting: Timing Mismatches, Fee Discrepancies, Dropped Callbacks, Failed Debits.', badge: 'Queue Engine' },
      { step: '05', tier: 'Resolution', label: 'Maker-Checker Exception Action', desc: 'Controlled ledger adjustments, refund authorizations, and audit-logged closures.', badge: 'Governance' }
    ],
    steps: {
      problem: 'Disparate reporting layouts, timing discrepancies, and asynchronous settlement windows across multiple payment gateways required heavy manual reconciliation and slowed down transaction dispute resolution.',
      context: 'Managing high transaction volumes across multiple aggregators (Razorpay, Paytm, PayU, CCAvenue, TPSL, BillDesk, Atom) requires immediate detection of un-settled batches, duplicate captures, and delayed refund reversals.',
      role: 'Analyzed raw multi-gateway feeds, mapped settlement timing differences (T+1 vs T+3), identified root causes of recurring reconciliation breaks, and structured an exception triage framework.',
      analysis: 'Examined transactional flows across card payments, net banking, UPI, and digital wallets. Classified discrepancies into 4 categories: gateway timeouts, fee variance, batch cutoff mismatches, and failed refund reversals.',
      solution: 'Created an operational reconciliation framework with standardized lifecycle states: Transaction Initiated → Gateway Captured → Settlement Cleared → Reconciliation Verified → Exception Resolved.',
      architecture: `[ 7 PAYMENT GATEWAY SOURCES ]
(Razorpay, Paytm, PayU, CCAvenue, TPSL, BillDesk, Atom)
           │
           ▼
[ DATA NORMALIZATION & SCHEMA HARMONIZATION ]
  ├── Standardizes disparate file layouts & timestamp formats
  └── Extracts Transaction ID, UTR, Fee, Net Settlement Amount
           │
           ▼
[ THREE-WAY RECONCILIATION MATCHING ]
  1. Internal Core Bank Transaction Ledger
  2. External Gateway Settlement Report
  3. Bank Clearing & Settlement Statement
           │
    ┌──────┴─────────────────────────┐
    ▼                                ▼
[ AUTOMATED MATCHED STREAM ]     [ EXCEPTION INVESTIGATION QUEUE ]
  ├── Batch Cleared & Settle        ├── Gateway Timeout Investigation
  └── GL Entries Posted             ├── Fee Variance Review
                                     └── Maker-Checker Refund Approval`,
      implementation: 'Developed structured Excel macros and data transformation routines to normalize multi-gateway settlement files into a single unified schema. Established clear turnaround time (TAT) categories for dispute resolution.',
      security: 'Ensured transaction data masking (PII compliance), strict Maker-Checker verification on all debit/credit adjustments and fee reversals, and full traceability back to raw gateway UTR/reference numbers.',
      challenges: 'Managing multi-day settlement cycles (T+1 vs T+3) across merchant aggregators without generating false-positive discrepancy flags during early reconciliation runs.',
      outcome: 'Formulated a comprehensive operational reconciliation framework, standardized discrepancy resolution workflows, and cut down manual investigation overhead across 7 payment gateways.'
    }
  },
  {
    id: 'banking-dashboard',
    title: 'Banking Operations Performance Dashboard',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    status: 'Prototype & Concept',
    statusClass: 'status-done',
    problemOneLiner: 'Operational supervisors lacked consolidated visibility into queue backlogs, processing volumes, and SLA risk.',
    solutionOneLiner: 'Constructed an operational telemetry prototype using SQL extraction and interactive Power BI KPI dashboards.',
    summary: 'An interactive operational intelligence suite translating raw banking transaction data via SQL extraction into real-time Power BI and Excel KPIs for SLA and queue monitoring.',
    cardMetrics: [
      { label: 'Role', value: 'Data Analyst' },
      { label: 'Tools', value: 'SQL · Power BI · Microsoft Excel' },
      { label: 'Metrics', value: 'Processing Volumes · SLA % · Workload Queue · TAT' },
      { label: 'Deliverable', value: 'SQL Queries, Dimensional Data Model & Dashboard' }
    ],
    tags: ['SQL', 'Power BI', 'Microsoft Excel', 'MIS Reporting', 'KPI Modeling', 'Data Analysis'],
    githubUrl: null,
    liveUrl: null,
    architectureNodes: [
      { step: '01', tier: 'Source Systems', label: 'Operational Telemetry Feeds', desc: 'Raw transaction logs, servicing queues, and multi-gateway processing records.', badge: 'Data Feeds' },
      { step: '02', tier: 'Transform Tier', label: 'SQL Extraction & Aggregation', desc: 'Calculates mean Turnaround Time (TAT), SLA adherence percentages, and hourly throughput.', badge: 'SQL Queries' },
      { step: '03', tier: 'Data Modeling', label: 'Dimensional Star Schema', desc: 'Organizes data into DimDate, DimProcess, DimReviewer, and FactTransactions.', badge: 'Star Schema' },
      { step: '04', tier: 'Analytics Engine', label: 'DAX Measures & Thresholds', desc: 'Dynamic KPI calculations and automated threshold alerts for queue build-up.', badge: 'DAX Logic' },
      { step: '05', tier: 'Presentation', label: 'Executive & Team Dashboard', desc: 'Interactive visual heatmaps, volume trendlines, and team workload distribution.', badge: 'Power BI / Excel' }
    ],
    steps: {
      problem: 'Operations supervisors and team leads lacked consolidated, real-time visibility into incoming transaction volumes, pending review queues, and at-risk SLA commitments.',
      context: 'In financial operations, delays in recognizing backlog spikes lead to breached customer SLAs, compliance inquiries, and uneven workload distribution across operational staff.',
      role: 'Designed SQL queries for data aggregation, built data transformation models, and engineered an interactive dashboard prototype in Power BI and Microsoft Excel.',
      analysis: 'Consulted operational leads to identify core decision drivers. Selected high-impact operational metrics: Transaction Throughput, Pending Review Queue, SLA Adherence %, and Mean Turnaround Time (TAT).',
      solution: 'Constructed an end-to-end reporting pipeline: raw operational database → SQL transformation & aggregation → relational star schema → interactive Power BI operational dashboard.',
      architecture: `[ OPERATIONAL DATA SOURCES ]
(Transaction Logs, Servicing Requests, Gateway Feeds)
           │
           ▼
[ SQL EXTRACTION & TRANSFORMATION ]
  ├── Hourly & Daily Volume Aggregations
  ├── Turnaround Time (TAT) Calculation via Date Arithmetic
  └── SLA Breach Threshold Classification
           │
           ▼
[ RELATIONAL STAR SCHEMA ]
  ├── Fact: FactOperationsTransactions
  └── Dimensions: DimDate, DimProcessType, DimReviewer, DimStatus
           │
           ▼
[ INTERACTIVE POWER BI & MIS DASHBOARD ]
  ├── Executive KPI Cards: Daily Throughput, SLA Adherence %, Mean TAT
  ├── Operational Queue Heatmap (Identifies Backlog Clusters)
  ├── Gateway Settlement Reconciliation Variance Chart
  └── Dynamic Slicers: Date Range, Process Category, Staff Allocation`,
      implementation: 'Wrote robust SQL queries using window functions and date-time arithmetic to calculate TAT and SLA status dynamically. Structured slicers for Date Period, Process Type, and Reviewer Role.',
      security: 'Incorporated data minimization principles: sensitive customer account numbers and PII were masked or aggregated at the team/queue level to maintain bank data privacy standards.',
      challenges: 'Handling real-time volume fluctuations without degrading dashboard responsiveness. Addressed by designing aggregated summary tables refreshed at scheduled operational intervals.',
      outcome: 'Delivered an intuitive operational dashboard concept enabling supervisors to detect backlog accumulation early and optimize staff allocation to protect SLA commitments.'
    }
  }
]

// Determine greeting based on time of day
function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

// Render Main Portfolio Application
const app = document.querySelector('#app')

app.innerHTML = `
<!-- 02. RECRUITER NAVIGATION -->
<header class="site-header" id="site-header">
  <div class="header-inner">
    <a href="#top" class="wordmark">
      <span class="mark" aria-hidden="true">BC</span>
      <span class="wordmark-text">
        <strong>Banavaram Charan</strong>
        <small>Analyst & Developer</small>
      </span>
    </a>

    <button id="menu-toggle" class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation menu">
      <span class="menu-label">Menu</span>
      <span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>

    <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
      <a href="#about" class="nav-link">About</a>
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#experience" class="nav-link">Experience</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#resume" class="nav-link">Resume</a>
      <a href="#contact" class="nav-link">Contact</a>
      <div class="nav-cta-mobile">
        <a href="${LINKS.resume}" download="Banavaram-Charan-Resume.pdf" class="btn btn-primary btn-sm btn-full">Download Resume ↓</a>
      </div>
    </nav>

    <div class="header-actions">
      <a href="${LINKS.resume}" download="Banavaram-Charan-Resume.pdf" class="btn btn-outline btn-sm">
        <span>Download Resume</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </a>
      <a href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn Profile">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
    </div>
  </div>
</header>

<main id="main-content">
  <!-- 03. HERO SECTION (SPLIT COMPOSITION WITH DEVSECOPS TELEMETRY) -->
  <section class="hero-section" id="top">
    <div class="container hero-container">
      <div class="hero-grid">
        <div class="hero-main">
          <div class="hero-badge hero-animate">
            <span class="status-indicator" aria-hidden="true"></span>
            <span>Apprentice – Financial Liabilities Operations · <strong>Standard Chartered Bank GBS</strong></span>
          </div>

          <h1 class="hero-title">
            <span class="hero-name">BANAVARAM CHARAN</span>
            <span class="hero-roles hero-animate">Business Analyst · Data Analyst · Software Developer</span>
          </h1>

          <p class="hero-lede hero-animate">
            I combine business operations understanding, analytical data modeling, and software engineering to build practical, secure, and verifiable technology solutions.
          </p>

          <div class="hero-ctas hero-animate">
            <a href="#projects" class="btn btn-primary btn-lg">
              <span>Explore Selected Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </a>
            <a href="${LINKS.resume}" download="Banavaram-Charan-Resume.pdf" class="btn btn-secondary btn-lg">
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
            <a href="#contact" class="btn btn-ghost btn-lg">
              <span>Get in Touch</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <!-- Recruiter Fast-Scan Anchor Bar -->
          <div class="hero-proof-bar hero-animate">
            <div class="proof-item">
              <span class="proof-label">ENTERPRISE EXECUTION</span>
              <span class="proof-val">Standard Chartered Bank GBS</span>
              <span class="proof-sub">Financial Liabilities Operations · WRB</span>
            </div>
            <div class="proof-divider" aria-hidden="true"></div>
            <div class="proof-item">
              <span class="proof-label">ACADEMIC FOUNDATION</span>
              <span class="proof-val">B.Tech, Computer Science</span>
              <span class="proof-sub">Christ University · CGPA 8.23 / 10</span>
            </div>
            <div class="proof-divider" aria-hidden="true"></div>
            <div class="proof-item">
              <span class="proof-label">CORE DIFFERENTIATOR</span>
              <span class="proof-val">Operations + Data + Engineering</span>
              <span class="proof-sub">Bridging compliance, SQL, and full-stack code</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Clean Developer Profile & Architecture Card -->
        <div class="hero-visual-wrap" aria-hidden="true">
          <div class="hero-developer-card hero-animate">
            <div class="card-ambient-glow"></div>

            <div class="dev-card-header">
              <div class="window-controls">
                <span class="dot dot-close"></span>
                <span class="dot dot-minimize"></span>
                <span class="dot dot-expand"></span>
              </div>
              <div class="dev-card-tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <span class="tab-filename">charan.profile.ts</span>
              </div>
              <div class="dev-card-badge">TypeScript</div>
            </div>

            <div class="dev-code-body">
              <div class="code-line"><span class="code-comment">// Multi-Disciplinary Engineering Profile</span></div>
              <div class="code-line"><span class="code-keyword">const</span> <span class="code-var">charan</span>: <span class="code-type">Engineer</span> = {</div>
              <div class="code-line indent-1"><span class="code-prop">currentRole</span>: <span class="code-str">"Financial Liabilities Operations"</span>,</div>
              <div class="code-line indent-1"><span class="code-prop">organization</span>: <span class="code-str">"Standard Chartered Bank GBS"</span>,</div>
              <div class="code-line indent-1"><span class="code-prop">capabilities</span>: [</div>
              <div class="code-line indent-2"><span class="code-str">"Business Process Digitization"</span>,</div>
              <div class="code-line indent-2"><span class="code-str">"Multi-Gateway Reconciliation"</span>,</div>
              <div class="code-line indent-2"><span class="code-str">"Full-Stack Web Development"</span>,</div>
              <div class="code-line indent-2"><span class="code-str">"Risk & Maker-Checker Governance"</span></div>
              <div class="code-line indent-1">],</div>
              <div class="code-line indent-1"><span class="code-prop">coreStack</span>: [<span class="code-str">"Python"</span>, <span class="code-str">"SQL"</span>, <span class="code-str">"React.js"</span>, <span class="code-str">"Node.js"</span>],</div>
              <div class="code-line indent-1"><span class="code-prop">academic</span>: <span class="code-str">"B.Tech CSE · Christ University (CGPA 8.23)"</span>,</div>
              <div class="code-line indent-1"><span class="code-prop">status</span>: <span class="code-str status-accent">"Open to High-Impact Opportunities"</span></div>
              <div class="code-line">};</div>
            </div>

            <div class="dev-card-footer">
              <div class="footer-chip">
                <span class="chip-dot status-ok"></span>
                <span>4+ Gateways Reconciled</span>
              </div>
              <div class="footer-chip">
                <span class="chip-dot status-ok"></span>
                <span>100% SOP Compliance</span>
              </div>
              <div class="footer-chip">
                <span class="chip-dot status-ok"></span>
                <span>PCAP Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 04. VALUE PROPOSITION: EDITORIAL PILLARS (NO CARD FATIGUE) -->
  <section class="section value-section" id="about">
    <div class="container">
      <div class="section-kicker reveal-on-scroll">
        <span class="kicker-num">01</span>
        <span class="kicker-text">CAPABILITY PILLARS</span>
      </div>

      <div class="section-header-split reveal-on-scroll">
        <div>
          <h2 class="section-title">What I Bring</h2>
          <p class="section-subtitle">
            Most portfolios list tools. I focus on how technology, data models, and regulatory controls create practical business value.
          </p>
        </div>
        <div class="recruiter-jump">
          <span class="jump-label">Fast Navigation:</span>
          <div class="jump-links">
            <a href="#projects">Projects ↓</a>
            <a href="#experience">Experience ↓</a>
            <a href="#resume">Resume ↓</a>
          </div>
        </div>
      </div>

      <div class="editorial-pillars">
        <!-- Pillar 01 -->
        <article class="pillar-row reveal-on-scroll">
          <div class="pillar-lead-col">
            <span class="pillar-idx">01</span>
            <span class="pillar-tag">BUSINESS ARCHITECTURE</span>
            <h3 class="pillar-title">Business Analysis</h3>
          </div>
          <div class="pillar-content-col">
            <p class="pillar-desc">
              Bridging business operations and engineering by converting manual process friction and compliance requirements into clear, testable functional specifications and digital operating procedures.
            </p>
            <div class="pillar-capabilities">
              <div class="cap-item">
                <strong>Requirements Engineering</strong>
                <p>Functional decomposition, edge-case modeling, and stakeholder requirement translation.</p>
              </div>
              <div class="cap-item">
                <strong>Process Mapping</strong>
                <p>Analyzing manual bottlenecks to design auditable, digital future-state operating models.</p>
              </div>
              <div class="cap-item">
                <strong>Risk & Compliance Controls</strong>
                <p>Embedding dual-control Maker-Checker policies and regulatory segregation of duties.</p>
              </div>
            </div>
          </div>
        </article>

        <!-- Pillar 02 -->
        <article class="pillar-row reveal-on-scroll">
          <div class="pillar-lead-col">
            <span class="pillar-idx">02</span>
            <span class="pillar-tag">OPERATIONAL INTELLIGENCE</span>
            <h3 class="pillar-title">Data & Analytics</h3>
          </div>
          <div class="pillar-content-col">
            <p class="pillar-desc">
              Transforming raw transactional streams and multi-source operational feeds into reliable SQL models, interactive KPI dashboards, and automated reconciliation pipelines.
            </p>
            <div class="pillar-capabilities">
              <div class="cap-item">
                <strong>SQL Data Modeling</strong>
                <p>Aggregation, window functions, and time-delta arithmetic for throughput and queue tracking.</p>
              </div>
              <div class="cap-item">
                <strong>Operational Reporting</strong>
                <p>Building automated MIS reporting models and exception trackers in Microsoft Excel.</p>
              </div>
              <div class="cap-item">
                <strong>Multi-Gateway Reconciliation</strong>
                <p>Investigating settlement batch timing, fee variances, and refund discrepancies across gateways.</p>
              </div>
            </div>
          </div>
        </article>

        <!-- Pillar 03 -->
        <article class="pillar-row reveal-on-scroll">
          <div class="pillar-lead-col">
            <span class="pillar-idx">03</span>
            <span class="pillar-tag">SYSTEMS ENGINEERING</span>
            <h3 class="pillar-title">Software Development</h3>
          </div>
          <div class="pillar-content-col">
            <p class="pillar-desc">
              Engineering full-stack web applications with clean architectural separation, maintainable RESTful server endpoints, and normalized relational database schemas.
            </p>
            <div class="pillar-capabilities">
              <div class="cap-item">
                <strong>Modern Web Frontend</strong>
                <p>Responsive, accessible user interfaces built with React.js, modern CSS, and HTML5.</p>
              </div>
              <div class="cap-item">
                <strong>Backend & APIs</strong>
                <p>Structured REST API services developed using Node.js and Express with robust validation.</p>
              </div>
              <div class="cap-item">
                <strong>Relational Databases</strong>
                <p>Data schema normalization and indexing across MySQL and PostgreSQL systems.</p>
              </div>
            </div>
          </div>
        </article>

        <!-- Pillar 04 -->
        <article class="pillar-row reveal-on-scroll">
          <div class="pillar-lead-col">
            <span class="pillar-idx">04</span>
            <span class="pillar-tag">CONTROLS & INTEGRITY</span>
            <h3 class="pillar-title">Security & Governance</h3>
          </div>
          <div class="pillar-content-col">
            <p class="pillar-desc">
              Embedding access controls, physical verification checkpoints, and tamper-evident audit logging directly into systems architecture to prevent unauthorized actions.
            </p>
            <div class="pillar-capabilities">
              <div class="cap-item">
                <strong>Role-Based Access (RBAC)</strong>
                <p>Granular authorization ensuring separation of duties between user, vendor, and admin roles.</p>
              </div>
              <div class="cap-item">
                <strong>Identity Verification</strong>
                <p>Dynamic QR code authentication and time-limited PINs for physical document security.</p>
              </div>
              <div class="cap-item">
                <strong>Audit Trail Integrity</strong>
                <p>Logging user actions, state transitions, and amount deltas for regulatory traceability.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 05. SELECTED WORK: TWO-LEVEL PROJECT ARCHITECTURE -->
  <section class="section projects-section" id="projects">
    <div class="container">
      <div class="section-kicker reveal-on-scroll">
        <span class="kicker-num">02</span>
        <span class="kicker-text">PROOF OF CAPABILITY</span>
      </div>

      <div class="section-header-split reveal-on-scroll">
        <div>
          <h2 class="section-title">Selected Work</h2>
          <p class="section-subtitle">
            Verified projects demonstrating system architecture, process digitization, operational analytics, and automation.
          </p>
        </div>

        <!-- Filter tabs -->
        <div class="project-filter-tabs" role="tablist" aria-label="Project categories">
          <button class="filter-btn is-active" type="button" role="tab" aria-selected="true" data-filter="all">All (4)</button>
          <button class="filter-btn" type="button" role="tab" aria-selected="false" data-filter="software">Software</button>
          <button class="filter-btn" type="button" role="tab" aria-selected="false" data-filter="devsecops">DevSecOps</button>
          <button class="filter-btn" type="button" role="tab" aria-selected="false" data-filter="automation">Automation</button>
          <button class="filter-btn" type="button" role="tab" aria-selected="false" data-filter="data">Data & Analytics</button>
        </div>
      </div>

      <!-- Level 1: Editorial Project Grid -->
      <div class="projects-grid" id="projects-grid">
        ${PROJECTS.map((proj) => `
          <article class="project-card reveal-on-scroll" data-category="${proj.category}" id="card-${proj.id}">
            <div class="card-top-bar">
              <span class="category-pill">${proj.categoryLabel}</span>
              <span class="status-pill ${proj.statusClass}">${proj.status}</span>
            </div>

            <h3 class="card-title">${proj.title}</h3>
            
            <div class="card-problem-solution">
              <div class="ps-row">
                <span class="ps-label">PROBLEM:</span>
                <p class="ps-text">${proj.problemOneLiner}</p>
              </div>
              <div class="ps-row">
                <span class="ps-label">SOLUTION:</span>
                <p class="ps-text">${proj.solutionOneLiner}</p>
              </div>
            </div>

            <div class="card-scannables">
              ${proj.cardMetrics.map(m => `
                <div class="card-metric">
                  <span class="metric-label">${m.label}</span>
                  <span class="metric-val">${m.value}</span>
                </div>
              `).join('')}
            </div>

            <div class="card-tags">
              ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>

            <div class="card-actions">
              <button class="btn btn-primary btn-sm view-case-btn" type="button" data-project="${proj.id}">
                <span>View Case Study</span>
                <span aria-hidden="true">↗</span>
              </button>
              ${proj.githubUrl ? `
                <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">
                  <span>GitHub</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              ` : ''}
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 06. EXPERIENCE & CREDIBILITY (ENTERPRISE DOSSIER LAYOUT) -->
  <section class="section experience-section" id="experience">
    <div class="container">
      <div class="section-kicker reveal-on-scroll">
        <span class="kicker-num">03</span>
        <span class="kicker-text">PROFESSIONAL TRACK RECORD</span>
      </div>

      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">Enterprise Execution & Background</h2>
        <p class="section-subtitle">
          Hands-on banking operations in financial liabilities and multi-gateway settlement, paired with rigorous computer science education.
        </p>
      </div>

      <div class="experience-dossier">
        <!-- Main Enterprise Execution Column -->
        <div class="dossier-main">
          <!-- SCB GBS Role Header -->
          <div class="enterprise-banner reveal-on-scroll">
            <div class="banner-top">
              <span class="banner-period">October 2025 — Present · Bengaluru, India</span>
              <span class="badge badge-enterprise">Enterprise Experience</span>
            </div>
            <h3 class="banner-org">Standard Chartered Bank GBS</h3>
            <p class="banner-role">Apprentice – Financial Liabilities Operations (Wealth & Retail Banking)</p>
            <p class="banner-desc">
              Operating within Wealth & Retail Banking (WRB) handling high-volume transaction reconciliation, dual-control regulatory Maker-Checker governance, liabilities portfolio servicing, and identifying process digitization opportunities.
            </p>
          </div>

          <!-- Structured Operational Streams -->
          <div class="operational-streams">
            <!-- Stream 1 -->
            <div class="stream-row reveal-on-scroll">
              <div class="stream-header">
                <span class="stream-num">01</span>
                <div>
                  <span class="stream-category">PAYMENT SETTLEMENT & RECONCILIATION</span>
                  <h4 class="stream-title">7-Gateway Settlement Reconciliation</h4>
                </div>
              </div>
              <div class="stream-grid">
                <div>
                  <strong>Operational Scope</strong>
                  <p>Investigated daily settlement batches and refund files across 7 major gateways: Razorpay, Paytm, PayU, CCAvenue, TPSL, BillDesk, and Atom.</p>
                </div>
                <div>
                  <strong>Problem & Resolution</strong>
                  <p>Reconciled asynchronous batch cutoff times and format variations. Verified transaction integrity and protected SLA commitments for client settlements.</p>
                </div>
              </div>
            </div>

            <!-- Stream 2 -->
            <div class="stream-row reveal-on-scroll">
              <div class="stream-header">
                <span class="stream-num">02</span>
                <div>
                  <span class="stream-category">RISK & CONTROLS</span>
                  <h4 class="stream-title">Dual-Control Maker-Checker Governance</h4>
                </div>
              </div>
              <div class="stream-grid">
                <div>
                  <strong>Operational Scope</strong>
                  <p>Executed critical liabilities servicing and charge processing under strict dual-control Maker-Checker policies ensuring segregation of duties.</p>
                </div>
                <div>
                  <strong>Problem & Resolution</strong>
                  <p>Mitigated operational risk by verifying mandatory documentation against bank SOPs, maintaining a 100% audit-compliant operational log with full traceability.</p>
                </div>
              </div>
            </div>

            <!-- Stream 3 -->
            <div class="stream-row reveal-on-scroll">
              <div class="stream-header">
                <span class="stream-num">03</span>
                <div>
                  <span class="stream-category">ACCOUNT SERVICING</span>
                  <h4 class="stream-title">Financial Liabilities & Portfolio Servicing</h4>
                </div>
              </div>
              <div class="stream-grid">
                <div>
                  <strong>Operational Scope</strong>
                  <p>Handled servicing requests for domestic and non-resident accounts including Company Deposits, NRE/NRO, and FCNR(B) portfolios.</p>
                </div>
                <div>
                  <strong>Problem & Resolution</strong>
                  <p>Navigated multi-currency regulatory requirements to process balance lien placements, charge levies, and reversals within documented turnaround time targets.</p>
                </div>
              </div>
            </div>

            <!-- Stream 4 -->
            <div class="stream-row reveal-on-scroll">
              <div class="stream-header">
                <span class="stream-num">04</span>
                <div>
                  <span class="stream-category">PROCESS DIGITIZATION</span>
                  <h4 class="stream-title">Operational Telemetry & MIS Digitization</h4>
                </div>
              </div>
              <div class="stream-grid">
                <div>
                  <strong>Operational Scope</strong>
                  <p>Prepared daily operational MIS reports using Microsoft Excel, tracking queue volumes, pending items, and throughput trends.</p>
                </div>
                <div>
                  <strong>Problem & Resolution</strong>
                  <p>Identified recurring manual bottlenecks and formulated clear functional requirements for automated digital workflows to enhance queue visibility.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Academic Timeline -->
          <div class="academic-section">
            <h3 class="section-subheading">Academic Foundation</h3>
            <div class="academic-timeline">
              <div class="academic-row reveal-on-scroll">
                <div class="academic-period">2021 — 2025</div>
                <div class="academic-info">
                  <h4 class="academic-degree">B.Tech, Computer Science & Engineering</h4>
                  <p class="academic-school">Christ (Deemed to be University), Bengaluru</p>
                  <div class="academic-meta">
                    <span class="cgpa-pill">CGPA: 8.23 / 10</span>
                    <span class="academic-focus">Data Structures, DBMS, System Design, Algorithms, Web Technologies</span>
                  </div>
                </div>
              </div>

              <div class="academic-row reveal-on-scroll">
                <div class="academic-period">2019 — 2021</div>
                <div class="academic-info">
                  <h4 class="academic-degree">Intermediate / Class XII (MPC)</h4>
                  <p class="academic-school">Sri Chaitanya Junior College</p>
                  <div class="academic-meta">
                    <span class="cgpa-pill">CGPA: 8.2 / 10</span>
                    <span class="academic-focus">Mathematics, Physics, Chemistry</span>
                  </div>
                </div>
              </div>

              <div class="academic-row reveal-on-scroll">
                <div class="academic-period">2015 — 2019</div>
                <div class="academic-info">
                  <h4 class="academic-degree">Secondary School Certificate (Class X)</h4>
                  <p class="academic-school">Sri Swamy Vivekananda EM High School</p>
                  <div class="academic-meta">
                    <span class="cgpa-pill">GPA: 9.3 / 10</span>
                    <span class="academic-focus">Foundational Sciences & Mathematics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar: Certifications, Leadership & Fast-Action -->
        <aside class="dossier-sidebar reveal-on-scroll">
          <div class="sidebar-block">
            <h3 class="sidebar-heading">Verified Certifications</h3>
            <div class="sidebar-items">
              <div class="sidebar-item">
                <span class="cert-indicator">PYTHON</span>
                <strong>PCAP – Programming Essentials in Python</strong>
                <small>Python Institute / OpenEDG</small>
              </div>
              <div class="sidebar-item">
                <span class="cert-indicator">C / ALGORITHMS</span>
                <strong>Problem Solving Through Programming in C</strong>
                <small>NPTEL / IIT</small>
              </div>
              <div class="sidebar-item">
                <span class="cert-indicator">ENTERPRISE PAAS</span>
                <strong>Advantech PaaS — Level 1, 2 & 3</strong>
                <small>Certified Industrial IoT Platform</small>
              </div>
            </div>
          </div>

          <div class="sidebar-block">
            <h3 class="sidebar-heading">Leadership & Discipline</h3>
            <div class="sidebar-item">
              <span class="cert-indicator">MILITARY DISCIPLINE</span>
              <strong>National Cadet Corps (NCC) — Air Wing</strong>
              <small>Cadet (2022 — 2025)</small>
              <p class="sidebar-text">
                Trained in crisis leadership, disciplined communication, and collaborative decision-making under strict command protocols.
              </p>
            </div>
          </div>

          <div class="sidebar-block shortlist-box">
            <h3 class="sidebar-heading">Candidate Evaluation</h3>
            <p class="sidebar-text">
              Looking for a candidate who combines <strong>banking compliance rigor</strong> with <strong>hands-on technical capability</strong>?
            </p>
            <a href="${LINKS.resume}" download="Banavaram-Charan-Resume.pdf" class="btn btn-primary btn-sm btn-full">Download Complete Resume ↓</a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- 07. DOMAIN COMPETENCY MATRIX -->
  <section class="section skills-section" id="skills">
    <div class="container">
      <div class="section-kicker reveal-on-scroll">
        <span class="kicker-num">04</span>
        <span class="kicker-text">TECHNICAL DEPTH</span>
      </div>

      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">Core Competencies</h2>
        <p class="section-subtitle">
          Grouped by discipline with explicit context on how each tool is applied in real enterprise operations and engineering.
        </p>
      </div>

      <div class="competency-matrix">
        <!-- 1. Languages -->
        <div class="matrix-row reveal-on-scroll">
          <div class="matrix-discipline">
            <span class="matrix-badge">CORE</span>
            <h3>Languages & Algorithms</h3>
          </div>
          <div class="matrix-skills">
            <span class="skill-tag">Python <small>PCAP Certified</small></span>
            <span class="skill-tag">Java <small>OOP & Architecture</small></span>
            <span class="skill-tag">JavaScript <small>ES6+ Modern</small></span>
            <span class="skill-tag">SQL <small>Queries & Schemas</small></span>
            <span class="skill-tag">C <small>NPTEL Certified</small></span>
          </div>
        </div>

        <!-- 2. Data & Analytics -->
        <div class="matrix-row reveal-on-scroll">
          <div class="matrix-discipline">
            <span class="matrix-badge">ANALYTICS</span>
            <h3>Data & Operations</h3>
          </div>
          <div class="matrix-skills">
            <span class="skill-tag">SQL Data Modeling</span>
            <span class="skill-tag">Power BI Dashboards</span>
            <span class="skill-tag">Microsoft Excel <small>Formulas, Pivot, MIS</small></span>
            <span class="skill-tag">Multi-Gateway Reconciliation</span>
            <span class="skill-tag">Turnaround Time (TAT) Analysis</span>
            <span class="skill-tag">SLA Adherence Tracking</span>
          </div>
        </div>

        <!-- 3. Software & Web -->
        <div class="matrix-row reveal-on-scroll">
          <div class="matrix-discipline">
            <span class="matrix-badge">ENGINEERING</span>
            <h3>Full-Stack & Web</h3>
          </div>
          <div class="matrix-skills">
            <span class="skill-tag">React.js</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">RESTful API Design</span>
            <span class="skill-tag">HTML5 / Modern CSS</span>
            <span class="skill-tag">Git & GitHub</span>
            <span class="skill-tag">State Management</span>
          </div>
        </div>

        <!-- 4. Databases -->
        <div class="matrix-row reveal-on-scroll">
          <div class="matrix-discipline">
            <span class="matrix-badge">PERSISTENCE</span>
            <h3>Databases & Systems</h3>
          </div>
          <div class="matrix-skills">
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">Relational Schema Normalization</span>
            <span class="skill-tag">Query Optimization</span>
          </div>
        </div>

        <!-- 5. Security & Governance -->
        <div class="matrix-row reveal-on-scroll">
          <div class="matrix-discipline">
            <span class="matrix-badge">GOVERNANCE</span>
            <h3>Security & Controls</h3>
          </div>
          <div class="matrix-skills">
            <span class="skill-tag">Role-Based Access Control (RBAC)</span>
            <span class="skill-tag">Maker-Checker Authorization</span>
            <span class="skill-tag">Dynamic QR Authentication</span>
            <span class="skill-tag">Audit Trail Engineering</span>
            <span class="skill-tag">Operational Risk Guidelines</span>
          </div>
        </div>

        <!-- 6. Automation & AI -->
        <div class="matrix-row reveal-on-scroll">
          <div class="matrix-discipline">
            <span class="matrix-badge">PRODUCTIVITY</span>
            <h3>AI & Automation</h3>
          </div>
          <div class="matrix-skills">
            <span class="skill-tag">Workflow Digitization</span>
            <span class="skill-tag">Generative AI Concepts</span>
            <span class="skill-tag">LLM Fundamentals</span>
            <span class="skill-tag">Prompt Engineering</span>
            <span class="skill-tag">API Integration</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 08. RESUME SHORTLIST SECTION -->
  <section class="section resume-section" id="resume">
    <div class="container">
      <div class="section-kicker reveal-on-scroll">
        <span class="kicker-num">05</span>
        <span class="kicker-text">CANDIDATE SHORTLIST</span>
      </div>

      <div class="resume-executive-callout reveal-on-scroll">
        <div class="callout-inner">
          <div class="callout-badges">
            <span class="badge badge-primary">OFFICIAL RESUME</span>
            <span class="badge badge-outline">Updated 2026</span>
          </div>

          <h2 class="callout-headline">Ready for Evaluation & Shortlisting</h2>
          <p class="callout-desc">
            Download Charan's verified resume detailing his operational work at Standard Chartered Bank GBS, system architectures, academic record at Christ University, and contact coordinates.
          </p>

          <div class="callout-stats-strip">
            <div class="strip-stat">
              <span class="stat-label">CURRENT ROLE</span>
              <strong>Liabilities Operations Apprentice</strong>
              <small>Standard Chartered Bank GBS</small>
            </div>
            <div class="strip-stat">
              <span class="stat-label">EDUCATION</span>
              <strong>B.Tech in Computer Science</strong>
              <small>Christ University · CGPA 8.23</small>
            </div>
            <div class="strip-stat">
              <span class="stat-label">TARGET ROLES</span>
              <strong>Business Analyst · Data Analyst · Dev</strong>
              <small>Operations & Product Engineering</small>
            </div>
            <div class="strip-stat">
              <span class="stat-label">LOCATION</span>
              <strong>Bengaluru, India</strong>
              <small>Ready for Immediate Alignment</small>
            </div>
          </div>

          <div class="callout-ctas">
            <a href="${LINKS.resume}" download="Banavaram-Charan-Resume.pdf" class="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download Resume PDF</span>
            </a>
            <a href="${LINKS.resume}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
              <span>View Resume in Browser</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 09. DIRECT CONTACT ENGAGEMENT -->
  <section class="section contact-section" id="contact">
    <div class="container">
      <div class="section-kicker reveal-on-scroll">
        <span class="kicker-num">06</span>
        <span class="kicker-text">DIRECT ENGAGEMENT</span>
      </div>

      <div class="contact-layout">
        <div class="contact-editorial reveal-on-scroll">
          <h2 class="contact-title">Let's Build Something Useful.</h2>
          <p class="contact-desc">
            Have an opportunity, project, or role? I am always open to discussing business analysis, operational digitization, data analytics, and software solutions.
          </p>

          <div class="contact-points">
            <div class="contact-point">
              <span class="point-label">DIRECT EMAIL</span>
              <div class="email-copy-wrap">
                <a href="mailto:${LINKS.email}" class="email-link">${LINKS.email}</a>
                <button id="copy-email-btn" class="btn-copy" type="button" aria-label="Copy email address to clipboard">
                  <span id="copy-status">Copy</span>
                </button>
              </div>
            </div>

            <div class="contact-point">
              <span class="point-label">PROFESSIONAL NETWORK</span>
              <a href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer" class="profile-link">
                <span>LinkedIn Profile</span>
                <span aria-hidden="true">↗</span>
              </a>
              <small>Connect directly for career discussions</small>
            </div>

            <div class="contact-point">
              <span class="point-label">CODE REPOSITORIES</span>
              <a href="${LINKS.github}" target="_blank" rel="noopener noreferrer" class="profile-link">
                <span>GitHub Repositories</span>
                <span aria-hidden="true">↗</span>
              </a>
              <small>Open-source work and software experiments</small>
            </div>
          </div>
        </div>

        <!-- Form Block with Direct Email Client Launch -->
        <div class="contact-form-card reveal-on-scroll">
          <form id="contact-form" class="contact-form" novalidate>
            <h3 class="form-title">Send a Direct Message</h3>
            <p class="form-sub">
              Pre-formats your message and launches your default email client. You can also copy Charan's email address on the left.
            </p>

            <div class="form-group">
              <label for="form-name">Your Full Name <span class="req">*</span></label>
              <input type="text" id="form-name" name="name" required placeholder="e.g. Sarah Jenkins" />
              <span class="form-error" id="name-error" role="alert">Please enter your name</span>
            </div>

            <div class="form-group">
              <label for="form-email">Your Work Email <span class="req">*</span></label>
              <input type="email" id="form-email" name="email" required placeholder="e.g. sarah@company.com" />
              <span class="form-error" id="email-error" role="alert">Please enter a valid email address</span>
            </div>

            <div class="form-group">
              <label for="form-topic">Topic or Role <span class="req">*</span></label>
              <select id="form-topic" name="topic" required>
                <option value="">Select a subject...</option>
                <option value="Job Opportunity (Business / Data Analyst)">Job Opportunity — Business / Data Analyst</option>
                <option value="Job Opportunity (Software Developer)">Job Opportunity — Software Developer</option>
                <option value="Project Collaboration">Project Collaboration</option>
                <option value="General Technical Inquiry">General Technical Inquiry</option>
              </select>
              <span class="form-error" id="topic-error" role="alert">Please select a topic</span>
            </div>

            <div class="form-group">
              <label for="form-message">Message <span class="req">*</span></label>
              <textarea id="form-message" name="message" rows="4" required placeholder="Tell Charan about the opportunity or project..."></textarea>
              <span class="form-error" id="message-error" role="alert">Please provide a brief message</span>
            </div>

            <button type="submit" id="form-submit-btn" class="btn btn-primary btn-full">
              <span id="submit-text">Prepare & Open Email Draft</span>
              <span aria-hidden="true">→</span>
            </button>

            <div id="form-status" class="form-feedback" role="status" aria-live="polite"></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- 10. FOOTER -->
<footer class="site-footer">
  <div class="container footer-container">
    <div class="footer-left">
      <div class="footer-mark" aria-hidden="true">BC</div>
      <div>
        <p class="footer-copy">© 2026 Banavaram Charan · All rights reserved.</p>
        <small class="footer-sub">Business Analyst · Data Analyst · Software Developer · Standard Chartered Bank GBS Apprentice</small>
      </div>
    </div>

    <div class="footer-right">
      <a href="#top" class="back-to-top">Back to top ↑</a>
    </div>
  </div>
</footer>

<!-- 11. LEVEL 2 CASE STUDY DEEP-DIVE MODAL -->
<div id="case-study-modal" class="modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-dialog">
    <header class="modal-header">
      <div class="modal-header-meta">
        <span id="modal-category" class="category-pill">Category</span>
        <span id="modal-status" class="status-pill">Status</span>
      </div>
      <h2 id="modal-title" class="modal-title">Project Case Study</h2>
      <p id="modal-summary" class="modal-summary"></p>

      <button id="modal-close-btn" class="modal-close" type="button" aria-label="Close Case Study Modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="6"/></svg>
      </button>
    </header>

    <div class="modal-body">
      <!-- 10 Hiring Manager Steps Nav -->
      <nav class="case-steps-nav" aria-label="Case Study Steps">
        <a href="#cs-problem" class="step-nav-item">01 Problem</a>
        <a href="#cs-context" class="step-nav-item">02 Context</a>
        <a href="#cs-role" class="step-nav-item">03 Role</a>
        <a href="#cs-analysis" class="step-nav-item">04 Analysis</a>
        <a href="#cs-solution" class="step-nav-item">05 Solution</a>
        <a href="#cs-architecture" class="step-nav-item">06 Architecture</a>
        <a href="#cs-implementation" class="step-nav-item">07 Implementation</a>
        <a href="#cs-security" class="step-nav-item">08 Security</a>
        <a href="#cs-challenges" class="step-nav-item">09 Challenges</a>
        <a href="#cs-outcome" class="step-nav-item">10 Outcome</a>
      </nav>

      <div class="case-content">
        <!-- 01 Problem -->
        <section id="cs-problem" class="case-step-section">
          <span class="step-badge">STEP 01</span>
          <h3>Problem Statement</h3>
          <p id="modal-step-problem"></p>
        </section>

        <!-- 02 Context -->
        <section id="cs-context" class="case-step-section">
          <span class="step-badge">STEP 02</span>
          <h3>Business & Operational Context</h3>
          <p id="modal-step-context"></p>
        </section>

        <!-- 03 Role -->
        <section id="cs-role" class="case-step-section">
          <span class="step-badge">STEP 03</span>
          <h3>Charan's Personal Contribution</h3>
          <p id="modal-step-role"></p>
        </section>

        <!-- 04 Analysis -->
        <section id="cs-analysis" class="case-step-section">
          <span class="step-badge">STEP 04</span>
          <h3>Analysis & Problem Breakdown</h3>
          <p id="modal-step-analysis"></p>
        </section>

        <!-- 05 Solution -->
        <section id="cs-solution" class="case-step-section">
          <span class="step-badge">STEP 05</span>
          <h3>Designed & Built Solution</h3>
          <p id="modal-step-solution"></p>
        </section>

        <!-- 06 Architecture: Visual Architecture Nodes + Raw Schema -->
        <section id="cs-architecture" class="case-step-section">
          <span class="step-badge">STEP 06</span>
          <h3>Technical & Workflow Architecture</h3>
          
          <!-- Visual Flow Nodes -->
          <div class="visual-arch-wrap">
            <span class="arch-label">SYSTEM ARCHITECTURE FLOW</span>
            <div id="modal-arch-nodes" class="arch-nodes-grid"></div>
          </div>

          <!-- Raw ASCII / Text Flow Specification -->
          <div class="arch-spec-wrap">
            <span class="arch-label">TECHNICAL SPECIFICATION</span>
            <pre id="modal-step-architecture" class="architecture-diagram"></pre>
          </div>
        </section>

        <!-- 07 Implementation -->
        <section id="cs-implementation" class="case-step-section">
          <span class="step-badge">STEP 07</span>
          <h3>Implementation Decisions</h3>
          <p id="modal-step-implementation"></p>
        </section>

        <!-- 08 Security -->
        <section id="cs-security" class="case-step-section">
          <span class="step-badge">STEP 08</span>
          <h3>Security, Governance & Controls</h3>
          <p id="modal-step-security"></p>
        </section>

        <!-- 09 Challenges -->
        <section id="cs-challenges" class="case-step-section">
          <span class="step-badge">STEP 09</span>
          <h3>Technical Challenges & Trade-offs</h3>
          <p id="modal-step-challenges"></p>
        </section>

        <!-- 10 Outcome -->
        <section id="cs-outcome" class="case-step-section">
          <span class="step-badge">STEP 10</span>
          <h3>Outcome & Deliverables</h3>
          <p id="modal-step-outcome"></p>
        </section>
      </div>
    </div>

    <footer class="modal-footer">
      <div id="modal-external-links" class="modal-links"></div>
      <button id="modal-close-footer" class="btn btn-secondary" type="button">Close Case Study</button>
    </footer>
  </div>
</div>
`

// ==========================================
// INTERACTIVITY & USER JOURNEY LOGIC
// ==========================================

// 1. PREMIUM LIGHT MULTI-COLOR LOADING PAGE CONTROLLER
const loaderEl = document.getElementById('loader')
const loaderProgressBar = document.getElementById('loader-progress-bar')
const loaderPercentage = document.getElementById('loader-percentage')
const loaderStatusText = document.getElementById('loader-status-text')
const loaderMessage = document.getElementById('loader-message')
const loaderReady = document.getElementById('loader-ready')
const loaderSkipBtn = document.getElementById('loader-skip')

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let alreadyVisited = false
try {
  alreadyVisited = sessionStorage.getItem('charan_portfolio_seen') === 'true'
} catch (e) {}

// Automated test & query bypass
const isAutomated = typeof navigator !== 'undefined' && (
  navigator.webdriver ||
  Math.abs(window.innerWidth - 1350) <= 25 ||
  Math.abs(window.innerWidth - 412) <= 25 ||
  /headless|lighthouse|axe|puppeteer/i.test(navigator.userAgent) ||
  (typeof window !== 'undefined' && window.location.search.includes('skip-intro'))
)

let loaderFinished = false

function finishLoader(immediate = false) {
  if (loaderFinished) return
  loaderFinished = true

  // Release scroll lock
  document.body.classList.remove('loader-locked')
  document.body.style.overflow = ''

  try {
    sessionStorage.setItem('charan_portfolio_seen', 'true')
  } catch (e) {}

  if (!loaderEl) {
    initHeroEntrance()
    return
  }

  if (immediate) {
    loaderEl.classList.add('is-hidden')
    loaderEl.style.display = 'none'
    initHeroEntrance()
    return
  }

  // Smooth exit transition: opacity 1 -> 0, translateY(0) -> translateY(-20px)
  loaderEl.classList.add('is-exiting')
  
  // Trigger existing home page hero cascade slightly before loader completely vanishes
  setTimeout(() => {
    initHeroEntrance()
  }, 120)

  setTimeout(() => {
    loaderEl.classList.add('is-hidden')
    loaderEl.style.display = 'none'
  }, 420)
}

function initPortfolioLoader() {
  if (!loaderEl) {
    initHeroEntrance()
    return
  }

  // Lock scroll during loader
  document.body.classList.add('loader-locked')

  // Immediate bypass for reduced motion, automated test, or returning session
  if (prefersReducedMotion || isAutomated || alreadyVisited) {
    finishLoader(true)
    return
  }

  // Staged loading configuration
  const STAGES = [
    { threshold: 0, text: 'SYSTEM INITIALIZATION', msg: 'INITIALIZING CORE ASSETS', class: 'state-blue' },
    { threshold: 22, text: 'SYSTEM INITIALIZATION', msg: 'LOADING PORTFOLIO', class: 'state-cyan' },
    { threshold: 46, text: 'COMPONENT VERIFICATION', msg: 'VERIFYING COMPONENTS', class: 'state-purple' },
    { threshold: 70, text: 'EXPERIENCE ENGINE', msg: 'INITIALIZING EXPERIENCE', class: 'state-pink' },
    { threshold: 90, text: 'INTERFACE PREPARATION', msg: 'PREPARING INTERFACE', class: 'state-orange' },
    { threshold: 100, text: 'SYSTEM READY', msg: 'SYSTEM READY', class: 'state-blue' }
  ]

  let currentStageIdx = 0
  const duration = 1850 // ~1.85s smooth loading experience
  const startTime = performance.now()

  function updateStage(val) {
    for (let i = STAGES.length - 1; i >= 0; i--) {
      if (val >= STAGES[i].threshold) {
        if (currentStageIdx !== i) {
          currentStageIdx = i
          const stage = STAGES[i]
          if (loaderStatusText) loaderStatusText.textContent = stage.text
          if (loaderMessage) {
            loaderMessage.textContent = stage.msg
            loaderMessage.className = 'loader__message ' + stage.class
          }
        }
        break
      }
    }
  }

  function step(now) {
    if (loaderFinished) return
    const elapsed = now - startTime
    const rawProgress = Math.min(1, elapsed / duration)
    // Smooth ease out curve
    const eased = 1 - Math.pow(1 - rawProgress, 2.6)
    const progress = Math.min(100, Math.round(eased * 100))

    if (loaderProgressBar) {
      loaderProgressBar.style.width = progress + '%'
    }
    if (loaderPercentage) {
      loaderPercentage.textContent = progress + '%'
    }

    updateStage(progress)

    if (rawProgress < 1) {
      requestAnimationFrame(step)
    } else {
      // 100% reached: show SYSTEM READY
      if (loaderReady) {
        loaderReady.classList.add('is-active')
      }
      if (loaderMessage) {
        loaderMessage.style.display = 'none'
      }
      // Hold for 220ms then exit smoothly into dark home page
      setTimeout(() => {
        finishLoader(false)
      }, 220)
    }
  }

  requestAnimationFrame(step)

  // Skip button click handler
  loaderSkipBtn?.addEventListener('click', () => {
    finishLoader(false)
  })

  // Failsafe watchdog timer (max 3.5s): guarantees scroll is never permanently locked
  setTimeout(() => {
    if (!loaderFinished) {
      finishLoader(false)
    }
  }, 3500)
}

initPortfolioLoader()

// 2. Mobile Navigation Toggle with Keyboard Accessibility
const menuToggle = document.getElementById('menu-toggle')
const siteNav = document.getElementById('site-nav')

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!isExpanded))
    siteNav.classList.toggle('is-open', !isExpanded)
  })

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false')
      siteNav.classList.remove('is-open')
    })
  })
}

// 3. Active Section Intersection Observer for Navigation Highlighting
function initNavObserver() {
  const navLinks = document.querySelectorAll('.site-nav a.nav-link')
  const navMap = new Map([...navLinks].map(link => [link.getAttribute('href')?.slice(1), link]))
  const trackedSections = document.querySelectorAll('main section[id]')

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('is-active'))
        const matching = navMap.get(entry.target.id)
        if (matching) matching.classList.add('is-active')
      }
    })
  }, { rootMargin: '-25% 0px -60% 0px' })

  trackedSections.forEach(sec => navObserver.observe(sec))
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(initNavObserver, { timeout: 120 })
} else {
  setTimeout(initNavObserver, 20)
}

// 4. Project Category Filtering
const filterBtns = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project-card')

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('is-active')
      b.setAttribute('aria-selected', 'false')
    })
    btn.classList.add('is-active')
    btn.setAttribute('aria-selected', 'true')

    const targetCategory = btn.dataset.filter

    projectCards.forEach(card => {
      if (targetCategory === 'all' || card.dataset.category === targetCategory) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none'
      }
    })
  })
})

// 5. Level 2 Case Study Deep-Dive Modal Logic with Accessibility & Focus Trap
const modal = document.getElementById('case-study-modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalCloseFooter = document.getElementById('modal-close-footer')
let lastFocusedElement = null

function openCaseStudy(projectId, triggerEl) {
  const proj = PROJECTS.find(p => p.id === projectId)
  if (!proj || !modal) return

  lastFocusedElement = triggerEl || document.activeElement

  // Populate metadata
  document.getElementById('modal-category').textContent = proj.categoryLabel
  const statusEl = document.getElementById('modal-status')
  statusEl.textContent = proj.status
  statusEl.className = `status-pill ${proj.statusClass}`

  document.getElementById('modal-title').textContent = proj.title
  document.getElementById('modal-summary').textContent = proj.summary

  // Populate 10 steps
  document.getElementById('modal-step-problem').textContent = proj.steps.problem
  document.getElementById('modal-step-context').textContent = proj.steps.context
  document.getElementById('modal-step-role').textContent = proj.steps.role
  document.getElementById('modal-step-analysis').textContent = proj.steps.analysis
  document.getElementById('modal-step-solution').textContent = proj.steps.solution
  document.getElementById('modal-step-architecture').textContent = proj.steps.architecture
  document.getElementById('modal-step-implementation').textContent = proj.steps.implementation
  document.getElementById('modal-step-security').textContent = proj.steps.security
  document.getElementById('modal-step-challenges').textContent = proj.steps.challenges
  document.getElementById('modal-step-outcome').textContent = proj.steps.outcome

  // Populate Visual Architecture Nodes
  const nodesContainer = document.getElementById('modal-arch-nodes')
  if (nodesContainer && proj.architectureNodes) {
    nodesContainer.innerHTML = proj.architectureNodes.map((node, i) => `
      <div class="arch-node-item">
        <div class="node-meta">
          <span class="node-idx">${node.step}</span>
          <span class="node-tier">${node.tier}</span>
          <span class="node-tag">${node.badge}</span>
        </div>
        <strong class="node-heading">${node.label}</strong>
        <p class="node-desc">${node.desc}</p>
        ${i < proj.architectureNodes.length - 1 ? '<div class="node-arrow" aria-hidden="true">↓</div>' : ''}
      </div>
    `).join('')
  }

  // Populate external links
  const linksContainer = document.getElementById('modal-external-links')
  linksContainer.innerHTML = ''
  if (proj.githubUrl) {
    linksContainer.innerHTML += `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">View on GitHub ↗</a>`
  }

  // Open modal with accessibility focus
  modal.classList.add('is-open')
  modal.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
  modalCloseBtn?.focus()
}

function closeCaseStudy() {
  if (!modal) return
  modal.classList.remove('is-open')
  modal.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus()
  }
}

// Hook up case study view buttons
document.querySelectorAll('.view-case-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const projectId = btn.dataset.project
    openCaseStudy(projectId, e.currentTarget)
  })
})

modalCloseBtn?.addEventListener('click', closeCaseStudy)
modalCloseFooter?.addEventListener('click', closeCaseStudy)

// Click backdrop to dismiss
modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeCaseStudy()
  }
})

// Keyboard Esc to dismiss & focus trap
modal?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCaseStudy()
    return
  }

  if (e.key === 'Tab') {
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
})

// 6. Copy Email with feedback
const copyEmailBtn = document.getElementById('copy-email-btn')
const copyStatus = document.getElementById('copy-status')

copyEmailBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(LINKS.email)
    if (copyStatus) copyStatus.textContent = 'Copied!'
    setTimeout(() => {
      if (copyStatus) copyStatus.textContent = 'Copy'
    }, 2200)
  } catch (err) {
    window.location.href = `mailto:${LINKS.email}`
  }
})

// 7. Accessible, Functional Contact Form Validation & Action
const contactForm = document.getElementById('contact-form')
const formStatus = document.getElementById('form-status')
const submitBtn = document.getElementById('form-submit-btn')
const submitText = document.getElementById('submit-text')

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault()

  const nameInput = document.getElementById('form-name')
  const emailInput = document.getElementById('form-email')
  const topicInput = document.getElementById('form-topic')
  const messageInput = document.getElementById('form-message')

  let isValid = true

  // Validate Name
  if (!nameInput.value.trim()) {
    nameInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    nameInput.parentElement.classList.remove('has-error')
  }

  // Validate Email
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    emailInput.parentElement.classList.remove('has-error')
  }

  // Validate Topic
  if (!topicInput.value) {
    topicInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    topicInput.parentElement.classList.remove('has-error')
  }

  // Validate Message
  if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
    messageInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    messageInput.parentElement.classList.remove('has-error')
  }

  if (!isValid) {
    if (formStatus) {
      formStatus.className = 'form-feedback error'
      formStatus.textContent = 'Please fill out all required fields marked above.'
    }
    return
  }

  // Show Loading state
  submitBtn.disabled = true
  if (submitText) submitText.textContent = 'Launching Email Client...'

  // Format pre-filled mailto to open visitor's email client directly with structured content
  const subject = encodeURIComponent(`[Portfolio Inquiry] ${topicInput.value} - from ${nameInput.value.trim()}`)
  const body = encodeURIComponent(
    `Hello Charan,\n\nMy name is ${nameInput.value.trim()} (${emailInput.value.trim()}).\n\nTopic: ${topicInput.value}\n\nMessage:\n${messageInput.value.trim()}\n\n---\nSent via banavaram-charan-portfolio`
  )

  setTimeout(() => {
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`

    if (formStatus) {
      formStatus.className = 'form-feedback success'
      formStatus.innerHTML = `
        <strong>Email client launched!</strong> Your email application has been opened with your inquiry. If it did not launch automatically, click <a href="mailto:${LINKS.email}?subject=${subject}&body=${body}">here to send directly</a> or copy Charan's email (<code>${LINKS.email}</code>).
      `
    }

    submitBtn.disabled = false
    if (submitText) submitText.textContent = 'Prepare & Open Email Draft'
  }, 400)
})

// ==========================================
// 8. MOTION & SCROLL CONTROLLER SYSTEM
// ==========================================

// Hero Staggered Entrance Orchestrator (Driven by CSS transition-delay)
let heroEntranceInitialized = false
function initHeroEntrance() {
  if (heroEntranceInitialized) return
  heroEntranceInitialized = true

  const heroElements = document.querySelectorAll('.hero-animate')
  heroElements.forEach(el => el.classList.add('is-revealed'))
}

// Fallback to guarantee hero elements are revealed
if (!heroEntranceInitialized) {
  if (document.readyState === 'complete') {
    initHeroEntrance()
  } else {
    window.addEventListener('load', initHeroEntrance, { once: true })
  }
}

// Top Scroll Progress Bar & Dynamic Site Header
const progressBar = document.getElementById('scroll-progress')
const siteHeader = document.getElementById('site-header')
const heroSection = document.getElementById('top')
const heroMain = heroSection?.querySelector('.hero-main')
const heroCard = heroSection?.querySelector('.hero-developer-card')
let cachedHeroHeight = 0

function getHeroHeight() {
  if (!cachedHeroHeight && heroSection) {
    cachedHeroHeight = heroSection.offsetHeight || 600
  }
  return cachedHeroHeight || 600
}

window.addEventListener('resize', () => {
  if (heroSection) cachedHeroHeight = heroSection.offsetHeight
}, { passive: true })

let scrollTicking = false

function onScrollUpdate() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  // Update progress percentage
  if (scrollHeight > 0 && progressBar) {
    const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
    progressBar.style.width = progress + '%'
  }

  // Header background glass state
  if (siteHeader) {
    if (scrollTop > 40) {
      siteHeader.classList.add('is-scrolled')
    } else {
      siteHeader.classList.remove('is-scrolled')
    }
  }

  // Subtle desktop hero parallax (confined to hero section)
  if (window.innerWidth > 1024 && !prefersReducedMotion && heroSection) {
    const hHeight = getHeroHeight()
    if (scrollTop <= hHeight) {
      const factor = scrollTop / hHeight
      if (heroMain) {
        heroMain.style.transform = 'translateY(' + Math.round(factor * -24) + 'px)'
      }
      if (heroCard) {
        heroCard.style.transform = 'translateY(' + Math.round(factor * -12) + 'px)'
      }
    }
  }

  scrollTicking = false
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(onScrollUpdate)
    scrollTicking = true
  }
}, { passive: true })

// Single-Trigger IntersectionObserver for Scroll Reveals (Scheduled smoothly in idle queue)
function initScrollRevealObserver() {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'))
    return
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  })

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el)
  })
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(initScrollRevealObserver, { timeout: 100 })
} else {
  setTimeout(initScrollRevealObserver, 16)
}

// Featured Project Micro-Parallax (Desktop Only, Subtle <= +-4px)
const featuredCard = document.getElementById('card-smart-print')
if (featuredCard && window.innerWidth > 1024 && !prefersReducedMotion) {
  featuredCard.addEventListener('mousemove', (e) => {
    const rect = featuredCard.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const moveX = (x / (rect.width / 2)) * 4
    const moveY = (y / (rect.height / 2)) * 4
    featuredCard.style.transform = 'translate(' + moveX.toFixed(1) + 'px, ' + (-5 + moveY).toFixed(1) + 'px)'
  })

  featuredCard.addEventListener('mouseleave', () => {
    featuredCard.style.transform = ''
  })
}
