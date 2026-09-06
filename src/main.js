import './style.css'

const Arrow = '<span aria-hidden="true">↗</span>'
const linkedin = 'https://in.linkedin.com/in/banavaram-charan-733ab4222c'
const workflowSteps = [
  ['Request', 'Requester', 'Business request', 'Captured request', 'Required fields'],
  ['Validation', 'Operations / Maker', 'Customer request', 'Validated request', 'Required information'],
  ['Maker', 'Operations / Maker', 'Validated request', 'Prepared work item', 'Maker ownership'],
  ['Checker', 'Checker / Approver', 'Prepared work item', 'Approved work item', 'Role-based access'],
  ['Processing', 'Operations', 'Released work item', 'Completed action', 'Process control'],
  ['SLA monitoring', 'Operations / Reviewer', 'Open work item', 'Visible status', 'SLA monitoring'],
  ['Audit trail', 'Reviewer', 'Action history', 'Traceable record', 'Audit trail'],
]
const workflowMarkup = workflowSteps.map(([label], index) => `<button class="workflow-step ${index === 0 ? 'is-active' : ''}" type="button" data-step="${index}"><b>0${index + 1}</b><span>${label}</span></button>`).join('<i class="workflow-connector" aria-hidden="true">→</i>')
const groups = {
  'Business & process': ['Business Analysis', 'Requirements Analysis', 'Workflow Analysis', 'Process Improvement', 'Process Digitization', 'Stakeholder Coordination'],
  'Data': ['SQL', 'Excel', 'Power BI', 'Data Analysis', 'MIS Reporting', 'Operational Reporting', 'Reconciliation'],
  'Software': ['Python', 'Java', 'JavaScript', 'React.js', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
  'AI & automation': ['Generative AI', 'LLM Fundamentals', 'Prompt Engineering', 'AI API Integration', 'Workflow Automation'],
  'Enterprise': ['SDLC', 'System Design', 'Authentication', 'RBAC', 'Maker-Checker', 'Operational Risk Controls', 'SLA Management'],
}
const capabilityMarkup = Object.entries(groups).map(([title, items]) => `<article class="capability-group"><h3>${title}</h3><div>${items.map((item) => `<span>${item}</span>`).join('')}</div></article>`).join('')
const tools = ['SQL', 'Python', 'Excel', 'Power BI', 'Java', 'JavaScript', 'React.js', 'Node.js', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code']

document.querySelector('#app').innerHTML = `
<header class="site-header"><a class="wordmark" href="#top" aria-label="Banavaram Charan home"><span class="mark">BC</span><span>Banavaram Charan</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu <span>+</span></button><nav id="site-nav" class="site-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#process">Process</a><a href="#tech">Tech</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav><div class="header-actions"><a class="header-link header-resume" href="/Banavaram-Charan-Resume.pdf" download>Resume</a><a class="header-link" href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn ${Arrow}</a></div></header>
<main id="top">
<section class="hero section-wrap reveal"><div class="hero-copy"><p class="eyebrow"><span class="status-dot"></span> BANAVARAM CHARAN</p><h1>Business problems into <em>working systems.</em></h1><p class="hero-lede">Business Analyst · Data Analyst · Software / Full-Stack Developer · Process Automation. I connect financial operations, requirements, data and technology to make complex workflows clearer.</p><div class="hero-actions"><a class="button button-dark" href="#work">View selected work ${Arrow}</a><a class="button button-ghost" href="/Banavaram-Charan-Resume.pdf" download>Download resume ↓</a><a class="button button-linkedin" href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn ${Arrow}</a></div><p class="hero-note">Currently: Apprentice – Financial Liabilities Operations (WRB) · Standard Chartered Bank GBS</p></div><div class="hero-art" aria-label="Business problem becomes analysis, workflow, technology and a better solution" role="img"><div class="problem-node"><small>INPUT</small>Business<br>problem</div><div class="solution-line"><span>↓</span><span>↓</span><span>↓</span><span>↓</span></div><div class="solution-node"><b><small>ANALYZE</small>Data + analysis</b><b><small>WORKFLOW</small>Process design</b><b><small>TECHNOLOGY</small>System solution</b><b><small>IMPROVE</small>Better visibility</b></div><div class="art-caption">Make the work<br>legible.</div></div></section>
<section id="process" class="process section-wrap reveal"><div class="section-label"><span>01</span><span>How I think</span></div><div class="process-intro"><h2>From business problem to <em>working product.</em></h2><p>I move between the operational context and the technical detail: understand the work, define the requirement, design the flow and build toward a clearer system.</p></div><div class="process-grid"><article><b>01</b><h3>Understand</h3><p>Business requirements<br>Stakeholders<br>User needs<br>Operational context</p></article><article><b>02</b><h3>Analyze</h3><p>Data<br>Workflows<br>Dependencies<br>Pain points & exceptions</p></article><article><b>03</b><h3>Design</h3><p>Future-state workflows<br>Requirements<br>Controls<br>System concepts</p></article><article><b>04</b><h3>Improve</h3><p>Automation<br>Visibility<br>Traceability<br>Operational efficiency</p></article></div></section>
<section id="work" class="work section-wrap reveal"><div class="section-heading"><div class="section-label"><span>02</span><span>Selected work</span></div><p>Business operations, payment flows, analytics and <strong>technical product thinking.</strong></p></div><article class="project-feature"><div class="project-meta"><span>01 / Featured process case study</span><span>Business Analysis · Workflow Design · Controls</span></div><div class="feature-grid"><div><h2>Block management<br><em>process digitization</em></h2><p>A proposed future-state workflow for block creation, release, deletion and amount modification, with clearer roles, controls and operational visibility.</p><div class="project-tags"><span>RBAC</span><span>Maker-checker</span><span>SLA monitoring</span><span>Audit trail</span></div><a class="text-link" href="#case-block">Explore the case study ${Arrow}</a></div><div class="before-after"><div><span>Current state</span><p>Manual dependencies <i>→</i> Process gaps <i>→</i> Approval dependencies <i>→</i> Limited tracking</p></div><div class="after"><span>Proposed future state</span><p>Request <i>→</i> Validation <i>→</i> Maker-checker <i>→</i> Processing <i>→</i> SLA monitoring <i>→</i> Audit trail</p></div></div></div></article><div class="project-row project-row-three"><article class="project-card payment-card"><div class="project-meta"><span>02 / New case study</span><span>Payments · Settlement · Reconciliation</span></div><h3>Payment settlement &<br><em>reconciliation</em></h3><p>Analyzing the operational path from payment transaction to settlement, refund, discrepancy investigation and resolution.</p><div class="mini-steps">Transaction <i>→</i> Settlement <i>→</i> Reconciliation</div><a class="text-link" href="#case-payment">Explore the process ${Arrow}</a></article><article class="project-card dashboard-card"><div class="project-meta"><span>03 / Analytics</span><span>SQL · Power BI · Excel</span></div><h3>Banking operations<br><em>performance dashboard</em></h3><p>Operational data → SQL → transformation → analysis → KPI → Power BI → operational insight.</p><div class="dashboard-mini" aria-label="Conceptual dashboard visual"><div class="dash-top"><span>CONCEPTUAL DASHBOARD</span><b>QUALITATIVE VIEW</b></div><strong>KPIs</strong><small>volume · SLA · pending · turnaround</small><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div><a class="text-link" href="#case-dashboard">Explore the dashboard ${Arrow}</a></article><article class="project-card print-card"><div class="project-meta"><span>04 / In development</span><span>Full-stack product · Secure print</span></div><h3>Smart Print<br><em>platform</em></h3><p>A secure print management platform concept connecting customer, web application, API layer, database and print vendor.</p><div class="tech-stamp">IN DEVELOPMENT</div><a class="text-link" href="#case-print">Explore the product ${Arrow}</a></article></div></section>
<section id="case-block" class="case-study section-wrap reveal"><div class="case-kicker"><span>Case study 01</span><span>Block management process digitization</span></div><div class="case-intro"><h2>Defined requirements for a <em>more visible operating model.</em></h2><p>Analyzed the process, identified gaps and proposed a centralized workflow. The future-state elements below are design work, not claimed production outcomes.</p></div><div class="case-layout"><aside><span class="aside-label">Case map</span><ol class="story-map"><li>Context & problem</li><li>Current state</li><li>Pain points</li><li>Requirements</li><li>Future state</li><li>Controls & monitoring</li><li>Learnings</li></ol></aside><div class="case-body"><div class="comparison-strip"><div><b>ANALYZED</b><span>Block creation, release, deletion and amount modification</span></div><div><b>IDENTIFIED</b><span>Manual dependencies, process gaps and approval dependencies</span></div><div><b>PROPOSED</b><span>Centralized workflow, RBAC, maker-checker and status visibility</span></div></div><h4 class="subhead">Interactive proposed workflow</h4><div class="workflow" role="group" aria-label="Interactive proposed block management workflow">${workflowMarkup}</div><div class="workflow-detail" aria-live="polite"><div><span class="detail-label">Selected stage</span><h3 id="detail-title">${workflowSteps[0][0]}</h3><p id="detail-copy">Capture the request in one visible, structured entry point.</p></div><dl><div><dt>Role</dt><dd id="detail-role">${workflowSteps[0][1]}</dd></div><div><dt>Input → Output</dt><dd id="detail-io">${workflowSteps[0][2]} → ${workflowSteps[0][3]}</dd></div><div><dt>Control</dt><dd id="detail-control">${workflowSteps[0][4]}</dd></div></dl></div><div class="case-columns"><div><h4>Requirements & controls</h4><ul><li>Request submission for supported block actions</li><li>Validation before maker and checker review</li><li>Role-based access and maker-checker separation</li><li>Proposed SLA monitoring and audit trail</li></ul></div><div><h4>Monitoring & learnings</h4><ul><li>Track request status and ownership</li><li>Surface pending work and exceptions</li><li>Make decisions traceable over time</li><li>Translate process gaps into requirements</li></ul></div></div><div class="mockup"><div class="mockup-nav"><span>BLOCK MANAGEMENT / CONCEPT</span><span>Overview&nbsp;&nbsp; Requests&nbsp;&nbsp; Reports</span><i>BC</i></div><div class="mockup-title"><div><small>PROPOSED OPERATIONS VIEW</small><h3>Request visibility.</h3></div><button class="small-button">+ New request</button></div><div class="metric-row"><div><small>OPEN REQUESTS</small><strong>View</strong><span class="trend">qualitative state</span></div><div><small>SLA STATUS</small><strong>Track</strong><span class="trend">monitoring</span></div><div><small>NEEDS REVIEW</small><strong>Queue</strong><span class="trend warm">action needed</span></div></div><div class="request-table"><span>REQUEST</span><span>OWNER</span><span>STATUS</span><span>SLA</span><b>Block action request</b><span>Operations</span><em class="pill green">In review</em><span>Tracked</span><b>Approval item</b><span>Checker</span><em class="pill amber">Pending</em><span>Visible</span></div></div></div></div></section>
<section id="case-payment" class="payment-case section-wrap reveal"><div class="section-label"><span>Case study 02</span><span>Payment settlement & reconciliation process analysis</span></div><div class="payment-layout"><div><h2>Make every transaction <em>traceable.</em></h2><p>Connecting transaction validation, settlement data, refunds, discrepancy investigation and resolution into one operational view.</p><div class="payment-flow"><span>Payment<br>transaction</span><i>→</i><span>Settlement<br>data</span><i>→</i><span>Refund<br>processing</span><i>→</i><span>Validation</span><i>→</i><span>Reconciliation</span><i>→</i><span>Resolution</span></div></div><div class="visibility-model"><span class="aside-label">Operational visibility model</span><div><b>Transaction status</b><span>Know where the item is</span></div><div><b>Pending exceptions</b><span>See what needs attention</span></div><div><b>Discrepancies</b><span>Investigate the gap</span></div><div><b>Resolution activities</b><span>Trace the next action</span></div><div><b>Transaction traceability</b><span>Keep the history together</span></div></div></div><div class="payment-notes"><span>Identified challenges: manual dependencies · process gaps · exception handling · transaction visibility</span><strong>Future-state focus: better tracking · exception management · traceability · operational visibility</strong></div><div class="gateway-visual"><span class="aside-label">Payment ecosystem / report sources mentioned in the resume</span><div>${['Razorpay','Paytm','PayU','CCAvenue','TPSL','BillDesk','Atom'].map((name) => `<b>${name}</b>`).join('')}</div></div></section>
<section id="case-dashboard" class="analytics section-wrap reveal"><div class="section-label"><span>Case study 03</span><span>Operational intelligence</span></div><div class="analytics-grid"><div><h2>Data that helps people <em>decide.</em></h2><p>A conceptual reporting journey from operational data through SQL extraction, transformation, analysis and KPI definition into a Power BI view.</p><div class="journey"><span>Data</span><i>→</i><span>SQL</span><i>→</i><span>Transform</span><i>→</i><span>Analysis</span><i>→</i><span class="journey-active">Power BI</span><i>→</i><span>Insight</span></div></div><div class="analytics-panel"><div class="panel-head"><span>CONCEPTUAL DASHBOARD</span><span>Illustrative visualization</span></div><div class="filter-row"><span>Period ▾</span><span>Process ▾</span><span>Status ▾</span></div><div class="kpi-grid"><div><small>TRANSACTION VOLUME</small><strong>View</strong><span>trend</span></div><div><small>SLA PERFORMANCE</small><strong>View</strong><span>status</span></div><div><small>PENDING REQUESTS</small><strong>View</strong><span class="attention">attention</span></div><div><small>TURNAROUND TIME</small><strong>View</strong><span>trend</span></div></div><div class="chart"><div class="chart-label"><span>Illustrative transaction trend</span><b>No production data</b></div><div class="chart-bars"><i style="height:36%"></i><i style="height:49%"></i><i style="height:42%"></i><i style="height:62%"></i><i style="height:55%"></i><i style="height:76%"></i><i style="height:68%"></i><i style="height:88%"></i><i style="height:81%"></i><i style="height:93%"></i></div></div><div class="dashboard-table"><span>Operational KPI</span><span>Status</span><span>Trend view</span><b>Pending workload</b><em>Needs attention</em><span>Illustrative</span><b>Settlement exceptions</b><em>Monitored</em><span>Illustrative</span></div></div></div></section>
<section id="case-print" class="print-case section-wrap reveal"><div class="section-label"><span>Case study 04</span><span>Smart Print · Secure print management platform</span></div><div class="print-intro"><div><span class="tech-stamp">IN DEVELOPMENT</span><h2>Smart Print<br><em>secure print management.</em></h2><p>A full-stack product currently being built around controlled document access, print configuration, vendor routing and status tracking.</p></div><div class="architecture"><span>CUSTOMER</span><i>↓</i><span>WEB APPLICATION</span><i>↓</i><span>API LAYER</span><i>↓</i><span>DATABASE</span><i>↓</i><span>PRINT VENDOR / PRINTER</span></div></div><div class="print-workflow"><span class="aside-label">Product workflow</span><div>${['Document upload','Secure access','Print configuration','Printer selection','Vendor selection','Print request','Print job routing','Status tracking','Completion'].map((step, index) => `<span><b>0${index + 1}</b>${step}</span>`).join('')}</div></div><div class="product-grid"><div><span class="aside-label">RBAC / user roles</span><div class="role-list"><article><b>Customer</b><span>Upload document · Configure print · Submit request · Track job</span></article><article><b>Vendor</b><span>Receive print request · Manage print workflow · Update job status</span></article><article><b>Administrator</b><span>Manage users · Manage vendors · Manage configurations · Monitor system</span></article></div></div><div><span class="aside-label">Conceptual data model</span><div class="data-model">${['Users','Vendors','Documents','Print requests','Printers','Print configurations','Print jobs','Transaction history'].map((entity) => `<span>${entity}</span>`).join('')}</div></div></div><div class="print-options"><span class="aside-label">Supported print options</span><div><span>Colour / black & white</span><span>Single / double sided</span><span>Number of copies</span><span>Printer selection</span><span>Controlled document access</span></div></div><div class="api-resources"><span class="aside-label">Conceptual API resource areas</span><div>${['User APIs','Vendor APIs','Document APIs','Print request APIs','Configuration APIs','Status APIs'].map((api) => `<span>${api}</span>`).join('')}</div></div><div class="tech-panel"><div><span class="aside-label">Technical stack / profile</span><h3>Technology supports the workflow.</h3></div><div class="tech-columns"><div><b>Frontend</b><span>React.js · HTML · CSS</span><b>Backend</b><span>Node.js · REST APIs</span><b>Database</b><span>MySQL · PostgreSQL · MongoDB</span></div><div><b>Security</b><span>QR authentication · Secure code authentication · RBAC</span><b>Development</b><span>Git · GitHub · VS Code</span><b>AI / automation</b><span>Generative AI · LLM fundamentals · Prompt engineering · AI API integration · Workflow automation</span></div></div></div></section>
<section id="tech" class="tech-profile section-wrap reveal"><div class="section-label"><span>03</span><span>Technical profile</span></div><div class="tech-profile-grid"><h2>From business problem to <em>working product.</em></h2><div class="system-path">${['Business problem','Requirements','Workflow','System design','API','Database','User experience','Automation'].map((step, index) => `<span><b>0${index + 1}</b>${step}</span>`).join('')}</div></div></section>
<section id="experience" class="experience section-wrap reveal"><div class="section-label"><span>04</span><span>Experience & education</span></div><div class="experience-grid"><div class="timeline"><article><span class="date">October 2025 — Present</span><div><h3>Standard Chartered Bank GBS</h3><p class="role">Apprentice – Financial Liabilities Operations (WRB)</p><div class="experience-dimensions"><div><b>Business / operations</b><span>Payment processing<br>Settlement<br>Refunds<br>Transaction validation<br>Reconciliation<br>Deposit operations<br>Banking charges<br>MIS reporting<br>Risk controls</span></div><div><b>Technology / process improvement</b><span>Workflow analysis<br>Process improvement<br>Digitization<br>Automation opportunities<br>Data analysis<br>Requirements analysis</span></div></div></div></article><article><span class="date">Education</span><div><h3>Christ (Deemed to be University)</h3><p class="role">B.Tech – Computer Science & Engineering · 2021–2025 · CGPA: 8.23/10</p><p class="education-line">Sri Chaitanya Junior College · Class XII · 2019–2021 · CGPA: 8.2</p><p class="education-line">Sri Swamy Vivekananda EM High School · Class X · 2015–2019 · GPA: 9.3</p></div></article></div><aside class="side-notes"><div><span class="aside-label">Certifications</span><ul><li>PCAP – Programming Essentials in Python</li><li>Problem Solving Through Programming in C – NPTEL</li><li>Advantech PaaS – Level 1, Level 2 & Level 3</li></ul></div><div><span class="aside-label">Leadership</span><h3>National Cadet Corps</h3><p>Air Wing · 2022–2025</p><p>Leadership · Teamwork · Communication · Discipline · Adaptability · Decision-making</p></div></aside></div></section>
<section id="about" class="about section-wrap reveal"><div class="section-label"><span>05</span><span>About</span></div><div class="about-grid"><h2>Operations knowledge with a <em>builder's mindset.</em></h2><div><p>My path connects Computer Science Engineering with financial operations, data analysis, business analysis, process improvement, workflow digitization and software development.</p><p>I understand the work before I reach for the system: what needs to happen, who is involved, what can go wrong and where technology can make the next step clearer.</p></div></div><div class="pathline"><span>Computer Science</span><i>↓</i><span>Financial Operations</span><i>↓</i><span>Data Analysis</span><i>↓</i><span>Business Analysis</span><i>↓</i><span>Automation</span></div></section>
<section class="capabilities section-wrap reveal"><div class="section-label"><span>06</span><span>Technical capabilities</span></div><div class="capability-grid">${capabilityMarkup}</div></section>
<section class="tools section-wrap reveal"><div class="section-label"><span>07</span><span>Tools I work with</span></div><div class="tools-list">${tools.map((tool) => `<span>${tool}</span>`).join('')}</div></section>
<section id="contact" class="contact section-wrap reveal"><p class="eyebrow">Let's build better workflows.</p><h2>Business analysis,<br><em>data, products and automation.</em></h2><p class="contact-copy">Interested in discussing business analysis, data, process improvement or digital products?</p><div class="contact-actions"><a class="button button-dark" href="mailto:banavaramcharan@gmail.com">Email me ${Arrow}</a><a class="button button-ghost" href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn ${Arrow}</a><a class="button button-ghost" href="/Banavaram-Charan-Resume.pdf" download>Resume ↓</a></div><div class="contact-bottom"><span>Banavaram Charan · Business Analyst / Data Analyst / Software Developer</span><span>Built with clarity.</span></div></section>
</main><footer><span>© 2026 Banavaram Charan</span><a href="#top">Back to top ↑</a></footer><dialog class="resume-dialog" aria-labelledby="resume-title"><button class="dialog-close" type="button" aria-label="Close dialog">×</button><h2 id="resume-title">Resume file not found</h2><p>The download link is ready for <strong>Banavaram-Charan-Resume.pdf</strong>. Add the source PDF to the public folder to activate it.</p></dialog>`

const menuToggle = document.querySelector('.menu-toggle')
const siteNav = document.querySelector('.site-nav')
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); siteNav.classList.toggle('is-open', !open) })
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menuToggle.setAttribute('aria-expanded', 'false'); siteNav.classList.remove('is-open') }))
const activeLinks = new Map([...siteNav.querySelectorAll('a')].map((link) => [link.getAttribute('href').slice(1), link]))
const sections = [...document.querySelectorAll('main section[id]')]
const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { activeLinks.forEach((link) => link.classList.remove('is-active')); activeLinks.get(entry.target.id)?.classList.add('is-active'); entry.target.classList.add('is-visible') } }), { rootMargin: '-30% 0px -60% 0px' })
sections.forEach((section) => sectionObserver.observe(section))
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }), { threshold: 0.1 })
document.querySelectorAll('.reveal').forEach((section) => revealObserver.observe(section))
const detailCopy = ['Capture the request in one visible, structured entry point.', 'Check request information before it moves into approval.', 'Prepare the work item with maker ownership.', 'Review the prepared work with the checker role.', 'Move approved work through an observable operational step.', 'Keep timing and ownership visible while work is open.', 'Keep decisions, status and ownership traceable over time.']
document.querySelectorAll('.workflow-step').forEach((button) => button.addEventListener('click', () => { const step = workflowSteps[Number(button.dataset.step)]; document.querySelectorAll('.workflow-step').forEach((item) => item.classList.remove('is-active')); button.classList.add('is-active'); document.querySelector('#detail-title').textContent = step[0]; document.querySelector('#detail-copy').textContent = detailCopy[Number(button.dataset.step)]; document.querySelector('#detail-role').textContent = step[1]; document.querySelector('#detail-io').textContent = `${step[2]} → ${step[3]}`; document.querySelector('#detail-control').textContent = step[4] }))
const resumeDialog = document.querySelector('.resume-dialog')
document.querySelector('.dialog-close').addEventListener('click', () => resumeDialog.close())

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const heroArt = document.querySelector('.hero-art')
heroArt.classList.add('hero-system')
heroArt.insertAdjacentHTML('afterbegin', '<div class="hero-grid" aria-hidden="true"></div><div class="system-orbit orbit-a" aria-hidden="true"></div><div class="system-orbit orbit-b" aria-hidden="true"></div><div class="system-particle particle-a" aria-hidden="true"></div><div class="system-particle particle-b" aria-hidden="true"></div>')
if (!prefersReducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  heroArt.addEventListener('pointermove', (event) => {
    const rect = heroArt.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    heroArt.style.setProperty('--tilt-x', `${(y * -3).toFixed(2)}deg`)
    heroArt.style.setProperty('--tilt-y', `${(x * 4).toFixed(2)}deg`)
  })
  heroArt.addEventListener('pointerleave', () => { heroArt.style.setProperty('--tilt-x', '0deg'); heroArt.style.setProperty('--tilt-y', '0deg') })
}

const architecture = document.querySelector('.architecture')
architecture.classList.add('architecture-3d')
const architectureDetail = document.createElement('p')
architectureDetail.className = 'architecture-detail'
architectureDetail.setAttribute('aria-live', 'polite')
architectureDetail.textContent = 'Customer · Initiates the print request'
architecture.append(architectureDetail)
const architecturePurpose = {
  'CUSTOMER': 'Initiates the print request',
  'WEB APPLICATION': 'Configures the print journey',
  'API LAYER': 'Handles communication between the application and backend services',
  'DATABASE': 'Represents conceptual records for the workflow',
  'PRINT VENDOR / PRINTER': 'Receives the routed print job',
}
architecture.querySelectorAll(':scope > span').forEach((layer) => {
  layer.classList.add('architecture-layer')
  layer.setAttribute('tabindex', '0')
  layer.setAttribute('role', 'button')
  const selectLayer = () => {
    architecture.querySelectorAll('.architecture-layer').forEach((item) => item.classList.remove('is-active'))
    layer.classList.add('is-active')
    architectureDetail.textContent = `${layer.textContent} · ${architecturePurpose[layer.textContent] || 'Conceptual system layer'}`
  }
  layer.addEventListener('click', selectLayer)
  layer.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectLayer() } })
})

const roleList = document.querySelector('.role-list')
roleList.classList.add('rbac-3d')
const accessControl = document.createElement('div')
accessControl.className = 'access-control'
accessControl.innerHTML = 'ACCESS<br>CONTROL'
roleList.append(accessControl)
roleList.querySelectorAll('article').forEach((role) => {
  role.classList.add('role-card')
  role.setAttribute('tabindex', '0')
  role.setAttribute('role', 'button')
  const selectRole = () => { roleList.querySelectorAll('.role-card').forEach((item) => item.classList.remove('is-active')); role.classList.add('is-active') }
  role.addEventListener('click', selectRole)
  role.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectRole() } })
})

document.querySelector('.payment-flow')?.classList.add('flow-3d')
document.querySelector('.analytics-panel')?.classList.add('dashboard-depth')
document.querySelector('.system-path')?.classList.add('stack-3d')

const workSection = document.querySelector('#work')
const workBridge = document.createElement('p')
workBridge.className = 'work-bridge'
workBridge.textContent = 'From operational workflows to digital products.'
workSection.querySelector('.section-heading').after(workBridge)

const printWorkflow = document.querySelector('#case-print .print-workflow')
const productInterface = document.createElement('div')
productInterface.className = 'product-interface'
productInterface.innerHTML = `<div class="interface-heading"><span class="aside-label">Conceptual product interface</span><span>SMART PRINT / NEW JOB</span></div><div class="interface-body"><div class="document-preview"><span class="preview-mark">DOC</span><strong>Quarterly report</strong><small>Controlled document access</small></div><div class="interface-controls"><label>Print configuration<select><option>Standard document</option></select></label><label>Printer<select><option>Choose printer</option></select></label><div class="interface-options"><span>Copies <b>1</b></span><span>Colour <b>On</b></span><span>Duplex <b>On</b></span></div><button type="button" class="small-button">Submit print job ↗</button></div></div><div class="job-status"><span>Print job status</span><b>Ready for submission</b><i></i></div>`
printWorkflow.after(productInterface)

const contact = document.querySelector('#contact')
const credentials = document.createElement('section')
credentials.className = 'credentials section-wrap reveal'
credentials.innerHTML = '<div class="section-label"><span>08</span><span>Credentials</span></div><div class="credential-list"><span>Standard Chartered Bank GBS</span><span>B.Tech CSE · Christ University</span><span>PCAP</span><span>NPTEL</span><span>NCC Air Wing</span></div>'
contact.before(credentials)
revealObserver.observe(credentials)

document.querySelector('.hero h1').innerHTML = 'Business Analyst ·<br><em>Data Analyst · Software Developer</em>'
document.querySelector('.hero-lede').textContent = 'Financial Services / FinTech · Process Automation · Digital Products. I connect business processes, data and technology to design clearer workflows and digital solutions.'
const currentSignal = document.querySelector('.hero-note')
currentSignal.textContent = 'CURRENTLY · Standard Chartered Bank GBS · Apprentice – Financial Liabilities Operations (WRB) · October 2025 – Present'
document.querySelector('.hero-copy').insertBefore(currentSignal, document.querySelector('.hero-actions'))
document.querySelector('.header-resume').textContent = 'Download resume'
document.querySelector('.hero-actions .button-dark').innerHTML = `View my work ${Arrow}`
document.querySelector('#contact h2').innerHTML = "Let's talk about better<br><em>processes.</em>"

const projectMeta = [
  ['PROCESS DIGITIZATION', 'Business / Process Analysis', 'Business Analysis · Workflow Design', 'Workflow / control model', 'Process analysis + control awareness'],
  ['PAYMENT OPERATIONS', 'Transaction / Process Analysis', 'Process Analysis · Reconciliation', 'Transaction / exception model', 'Payment operations + exception thinking'],
  ['DATA & ANALYTICS', 'Dashboard / Reporting', 'SQL · Power BI · Excel', 'Operational dashboard concept', 'Data analysis + decision support'],
  ['PRODUCT & SOFTWARE', 'Software Development / System Design', 'React.js · Node.js · REST APIs', 'Product / system concept', 'Product thinking + technical fluency'],
]
const featureMeta = document.createElement('div')
featureMeta.className = 'project-scanline feature-scanline'
featureMeta.innerHTML = `<span><b>MY ROLE</b>${projectMeta[0][1]}</span><span><b>APPROACH / TOOLS</b>${projectMeta[0][2]}</span><span><b>OUTPUT</b>${projectMeta[0][3]}</span><span><b>CAPABILITY</b>${projectMeta[0][4]}</span>`
document.querySelector('.project-feature .project-meta').after(featureMeta)
document.querySelectorAll('.project-card').forEach((card, index) => {
  const item = projectMeta[index + 1]
  const scanline = document.createElement('div')
  scanline.className = 'project-scanline'
  scanline.innerHTML = `<span><b>MY ROLE</b>${item[1]}</span><span><b>APPROACH / TOOLS</b>${item[2]}</span><span><b>OUTPUT</b>${item[3]}</span><span><b>CAPABILITY</b>${item[4]}</span>`
  card.querySelector('.project-meta').after(scanline)
})

const copyButton = document.createElement('button')
copyButton.type = 'button'
copyButton.className = 'button button-ghost copy-email'
copyButton.textContent = 'Copy email'
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('banavaramcharan@gmail.com')
    copyButton.textContent = 'Email copied'
  } catch {
    copyButton.textContent = 'Copy unavailable'
  }
  window.setTimeout(() => { copyButton.textContent = 'Copy email' }, 1800)
})
document.querySelector('.contact-actions').append(copyButton)

const mobileResume = document.createElement('a')
mobileResume.className = 'mobile-resume'
mobileResume.href = '/Banavaram-Charan-Resume.pdf'
mobileResume.download = 'Banavaram-Charan-Resume.pdf'
mobileResume.textContent = 'Download resume'
siteNav.append(mobileResume)
mobileResume.addEventListener('click', (event) => {
  event.preventDefault()
  menuToggle.setAttribute('aria-expanded', 'false')
  siteNav.classList.remove('is-open')
  resumeDialog.showModal()
})

document.querySelector('.process .section-label span:last-child').textContent = 'What I do'
document.querySelector('.process h2').innerHTML = 'Business analysis<br><em>with a builder\'s mindset.</em>'
const proofMatrix = document.createElement('div')
proofMatrix.className = 'proof-matrix'
proofMatrix.innerHTML = `<div class="proof-head"><span>Project</span><span>Primary skill</span><span>Secondary skills</span><span>Output</span></div><div><span>Block Management</span><b>Process analysis</b><span>Requirements · Controls</span><span>Workflow / control model</span></div><div><span>Payment Reconciliation</span><b>Process + data analysis</b><span>Exceptions · Traceability</span><span>Transaction / exception model</span></div><div><span>Banking Dashboard</span><b>Data analysis</b><span>SQL · Power BI</span><span>Operational dashboard concept</span></div><div><span>Smart Print</span><b>Product + software</b><span>System design · RBAC</span><span>Product / system concept</span></div>`
document.querySelector('.work-bridge').after(proofMatrix)

const caseScanlines = [
  ['case-block', 'MY ROLE', 'Analyzed process, roles and control points', 'APPROACH', 'Mapped workflow, maker-checker, SLA and audit considerations', 'OUTPUT', 'Proposed workflow / control model', 'CAPABILITY', 'Business analysis + process digitization'],
  ['case-payment', 'MY ROLE', 'Mapped payment, settlement and reconciliation flow', 'APPROACH', 'Analyzed exceptions, discrepancies and traceability', 'OUTPUT', 'Transaction / exception model', 'CAPABILITY', 'Payment operations + process analysis'],
  ['case-dashboard', 'MY ROLE', 'Analyzed operational information needs', 'APPROACH', 'Structured data, filters, KPIs and decision views', 'OUTPUT', 'Conceptual dashboard / reporting model', 'CAPABILITY', 'Data analysis + operational visibility'],
  ['case-print', 'STATUS', 'IN DEVELOPMENT', 'MY ROLE', 'Conceptualized product, architecture, RBAC and API resources', 'OUTPUT', 'Product / system concept', 'CAPABILITY', 'Business requirements + software thinking'],
]
caseScanlines.forEach(([id, labelA, valueA, labelB, valueB, labelC, valueC, labelD, valueD]) => {
  const line = document.createElement('div')
  line.className = 'case-scanline'
  line.innerHTML = `<div><b>${labelA}</b><span>${valueA}</span></div><div><b>${labelB}</b><span>${valueB}</span></div><div><b>${labelC}</b><span>${valueC}</span></div><div><b>${labelD}</b><span>${valueD}</span></div>`
  document.querySelector(`#${id} .case-intro, #${id} .payment-layout, #${id} .analytics-grid, #${id} .print-intro`).after(line)
})

const bringSection = document.createElement('section')
bringSection.className = 'bring-team section-wrap reveal'
bringSection.innerHTML = '<div class="section-label"><span>09</span><span>What I can bring to a team</span></div><div class="bring-grid"><article><b>01</b><h3>Process clarity</h3><p>Understand and structure operational workflows.</p></article><article><b>02</b><h3>Data thinking</h3><p>Turn operational information into useful analysis and visibility.</p></article><article><b>03</b><h3>Technical translation</h3><p>Bridge business requirements and technical possibilities.</p></article><article><b>04</b><h3>Automation mindset</h3><p>Identify opportunities for digital workflows and automation.</p></article></div>'
document.querySelector('.capabilities').before(bringSection)
revealObserver.observe(bringSection)

const rolesSection = document.createElement('section')
rolesSection.className = 'target-roles section-wrap reveal'
rolesSection.innerHTML = '<div><span class="aside-label">Career direction</span><h2>Looking for roles in</h2></div><p>Business Analysis · Data Analysis · Process Analysis · FinTech / Financial Services · Technology-enabled Operations · Automation</p>'
document.querySelector('#contact').before(rolesSection)
revealObserver.observe(rolesSection)
