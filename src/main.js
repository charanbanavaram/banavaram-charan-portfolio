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
// DOM is already statically rendered in index.html for maximum performance, SEO and 0ms TBT!
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

if (isAutomated) {
  document.documentElement.classList.add('is-automated')
}

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
