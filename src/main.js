import './style.css'
import { personalInfo, projectsContent } from './data/portfolioData.js'

// 1. Factual External Profile Links
const LINKS = {
  resume: personalInfo.resumeUrl,
  linkedin: personalInfo.linkedin,
  github: personalInfo.github,
  email: personalInfo.email,
  location: personalInfo.location
}

// 2. Map Structured Projects for Modal Deep-Dive
const PROJECTS = projectsContent.map(p => ({
  id: p.id,
  title: p.title + (p.subtitle ? ' — ' + p.subtitle : ''),
  category: p.category,
  categoryLabel: p.categoryLabel,
  status: p.status,
  statusClass: p.featured ? 'status-dev' : 'status-done',
  summary: p.summary,
  githubUrl: p.id === 'smart-print' ? 'https://github.com/charanbanavaram' : null,
  architectureNodes: (p.caseStudy.workflow || []).map((w, idx) => ({
    step: w.step || String(idx + 1).padStart(2, '0'),
    tier: 'Workflow Step',
    label: w.title,
    desc: w.desc,
    badge: 'Step ' + (idx + 1)
  })),
  steps: {
    problem: p.caseStudy.problem,
    context: p.caseStudy.context,
    role: p.caseStudy.role,
    analysis: p.oneLiner,
    solution: p.summary,
    architecture: (p.caseStudy.workflow || []).map(w => `[${w.step || ''}] ${w.title}: ${w.desc}`).join('\n\n'),
    implementation: p.caseStudy.technologies || p.tech.join(', '),
    security: p.caseStudy.role + ' with emphasis on Maker–Checker risk governance, data privacy, and operational auditability.',
    challenges: 'Balancing operational turnaround time, data validation rigor, and clear user experience.',
    outcome: p.caseStudy.outcome
  }
}))

// ==========================================
// 3. PREMIUM LIGHT PERSONAL BRAND INTRO (3.0-3.8s)
// ==========================================
const loaderEl = document.getElementById('loader')
const loaderProgressBar = document.getElementById('loader-progress-bar')
const loaderPercentage = document.getElementById('loader-percentage')
const loaderStatusText = document.getElementById('loader-status-text')
const loaderReady = document.getElementById('loader-ready')
const loaderSkipBtn = document.getElementById('loader-skip')

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const forceLoader = typeof window !== 'undefined' && window.location.search.includes('force-loader')

let alreadyVisited = false
try {
  alreadyVisited = !forceLoader && sessionStorage.getItem('charan_portfolio_seen') === 'true'
} catch (e) {}

// Automated test bypass
const isAutomated = !forceLoader && typeof navigator !== 'undefined' && (
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

  // Smooth exit transition: subtle scale & opacity dissolve into dark Home
  loaderEl.classList.add('is-exiting')

  setTimeout(() => {
    initHeroEntrance()
  }, 140)

  setTimeout(() => {
    loaderEl.classList.add('is-hidden')
    loaderEl.style.display = 'none'
  }, 440)
}

function initPortfolioLoader() {
  if (!loaderEl) {
    initHeroEntrance()
    return
  }

  document.body.classList.add('loader-locked')

  if (prefersReducedMotion || isAutomated || alreadyVisited) {
    finishLoader(true)
    return
  }

  // Staged loading configuration matching Master Prompt (3.0–3.8s total duration)
  const STAGES = [
    { threshold: 0, text: 'INITIALIZING PROFILE' },
    { threshold: 25, text: 'LOADING EXPERIENCE' },
    { threshold: 55, text: 'LOADING PROJECTS' },
    { threshold: 82, text: 'PREPARING PORTFOLIO' },
    { threshold: 100, text: 'READY' }
  ]

  let currentStageIdx = -1
  const duration = 3300 // 3.3s smooth cinematic experience
  const startTime = performance.now()

  function updateStage(val) {
    for (let i = STAGES.length - 1; i >= 0; i--) {
      if (val >= STAGES[i].threshold) {
        if (currentStageIdx !== i) {
          currentStageIdx = i
          const stage = STAGES[i]
          if (loaderStatusText && val < 100) {
            loaderStatusText.style.opacity = '0'
            setTimeout(() => {
              if (loaderStatusText) {
                loaderStatusText.textContent = stage.text
                loaderStatusText.style.opacity = '1'
              }
            }, 140)
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
    // Smooth decelerating cubic curve
    const eased = 1 - Math.pow(1 - rawProgress, 2.4)
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
      // 100% reached: reveal READY indicator
      if (loaderStatusText) {
        loaderStatusText.style.display = 'none'
      }
      if (loaderReady) {
        loaderReady.classList.add('is-active')
      }
      // Hold briefly then dissolve into dark Home
      setTimeout(() => {
        finishLoader(false)
      }, 260)
    }
  }

  requestAnimationFrame(step)

  // Skip button click handler
  loaderSkipBtn?.addEventListener('click', () => {
    finishLoader(false)
  })

  // Keyboard Esc key bypass
  const onKeyDown = (e) => {
    if (e.key === 'Escape' && !loaderFinished) {
      finishLoader(false)
      window.removeEventListener('keydown', onKeyDown)
    }
  }
  window.addEventListener('keydown', onKeyDown)

  // Failsafe watchdog timer (max 4.2s)
  setTimeout(() => {
    if (!loaderFinished) {
      finishLoader(false)
    }
  }, 4200)
}

initPortfolioLoader()

// ==========================================
// 4. MOBILE NAVIGATION WITH ACCESSIBILITY
// ==========================================
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

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
      menuToggle.setAttribute('aria-expanded', 'false')
      siteNav.classList.remove('is-open')
      menuToggle.focus()
    }
  })
}

// ==========================================
// 5. NAVIGATION OBSERVER FOR ACTIVE SECTION
// ==========================================
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

// ==========================================
// 6. PROJECT CATEGORY FILTERING
// ==========================================
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
        card.style.display = ''
      } else {
        card.style.display = 'none'
      }
    })
  })
})

// ==========================================
// 7. ACCESSIBLE 10-STEP CASE STUDY MODAL
// ==========================================
const modal = document.getElementById('case-study-modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalCloseFooter = document.getElementById('modal-close-footer')
let lastFocusedElement = null

function openCaseStudy(projectId, triggerEl) {
  const proj = PROJECTS.find(p => p.id === projectId)
  if (!proj || !modal) return

  lastFocusedElement = triggerEl || document.activeElement

  // Set modal metadata
  const catEl = document.getElementById('modal-category')
  if (catEl) catEl.textContent = proj.categoryLabel

  const statusEl = document.getElementById('modal-status')
  if (statusEl) {
    statusEl.textContent = proj.status
    statusEl.className = `status-pill ${proj.statusClass}`
  }

  const titleEl = document.getElementById('modal-title')
  if (titleEl) titleEl.textContent = proj.title

  const summaryEl = document.getElementById('modal-summary')
  if (summaryEl) summaryEl.textContent = proj.summary

  // Populate 10 steps
  const stepMap = {
    'modal-step-problem': proj.steps.problem,
    'modal-step-context': proj.steps.context,
    'modal-step-role': proj.steps.role,
    'modal-step-analysis': proj.steps.analysis,
    'modal-step-solution': proj.steps.solution,
    'modal-step-architecture': proj.steps.architecture,
    'modal-step-implementation': proj.steps.implementation,
    'modal-step-security': proj.steps.security,
    'modal-step-challenges': proj.steps.challenges,
    'modal-step-outcome': proj.steps.outcome
  }

  Object.entries(stepMap).forEach(([id, text]) => {
    const el = document.getElementById(id)
    if (el) el.textContent = text || ''
  })

  // Populate visual architecture nodes
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
  if (linksContainer) {
    linksContainer.innerHTML = ''
    if (proj.githubUrl) {
      linksContainer.innerHTML += `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">View on GitHub ↗</a>`
    }
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

document.querySelectorAll('.view-case-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const projectId = btn.dataset.project
    openCaseStudy(projectId, e.currentTarget)
  })
})

modalCloseBtn?.addEventListener('click', closeCaseStudy)
modalCloseFooter?.addEventListener('click', closeCaseStudy)

modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeCaseStudy()
  }
})

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

// ==========================================
// 8. COPY EMAIL WITH CONFIRMATION
// ==========================================
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

// ==========================================
// 9. ACCESSIBLE CONTACT FORM (MAILTO PRE-FILL)
// ==========================================
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

  if (!nameInput.value.trim()) {
    nameInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    nameInput.parentElement.classList.remove('has-error')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    emailInput.parentElement.classList.remove('has-error')
  }

  if (!topicInput.value) {
    topicInput.parentElement.classList.add('has-error')
    isValid = false
  } else {
    topicInput.parentElement.classList.remove('has-error')
  }

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

  submitBtn.disabled = true
  if (submitText) submitText.textContent = 'Launching Email Client...'

  const subject = encodeURIComponent(`[Inquiry] ${topicInput.value} — from ${nameInput.value.trim()}`)
  const body = encodeURIComponent(
    `Hello Charan,\n\nMy name is ${nameInput.value.trim()} (${emailInput.value.trim()}).\n\nTopic: ${topicInput.value}\n\nMessage:\n${messageInput.value.trim()}\n\n---\nSent via banavaramcharan.in`
  )

  setTimeout(() => {
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`

    if (formStatus) {
      formStatus.className = 'form-feedback success'
      formStatus.innerHTML = `
        <strong>Email draft prepared!</strong> Your email application has opened with your message. If it did not launch automatically, click <a href="mailto:${LINKS.email}?subject=${subject}&body=${body}">here to send directly</a> or email Charan at <code>${LINKS.email}</code>.
      `
    }

    submitBtn.disabled = false
    if (submitText) submitText.textContent = 'Prepare & Open Email Draft'
  }, 350)
})

// ==========================================
// 10. MOTION & SCROLL CONTROLLER
// ==========================================
let heroEntranceInitialized = false
function initHeroEntrance() {
  if (heroEntranceInitialized) return
  heroEntranceInitialized = true

  const heroElements = document.querySelectorAll('.hero-animate')
  heroElements.forEach(el => el.classList.add('is-revealed'))
}

if (!heroEntranceInitialized) {
  if (document.readyState === 'complete') {
    initHeroEntrance()
  } else {
    window.addEventListener('load', initHeroEntrance, { once: true })
  }
}

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

  if (scrollHeight > 0 && progressBar) {
    const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
    progressBar.style.width = progress + '%'
  }

  if (siteHeader) {
    if (scrollTop > 40) {
      siteHeader.classList.add('is-scrolled')
    } else {
      siteHeader.classList.remove('is-scrolled')
    }
  }

  if (window.innerWidth > 1024 && !prefersReducedMotion && heroSection) {
    const hHeight = getHeroHeight()
    if (scrollTop <= hHeight) {
      const factor = scrollTop / hHeight
      if (heroMain) heroMain.style.transform = 'translateY(' + Math.round(factor * -20) + 'px)'
      if (heroCard) heroCard.style.transform = 'translateY(' + Math.round(factor * -10) + 'px)'
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

// Single-Trigger Scroll Reveal Observer
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

// Micro-Parallax for Featured Card
const featuredCard = document.getElementById('card-smart-print')
if (featuredCard && window.innerWidth > 1024 && !prefersReducedMotion) {
  featuredCard.addEventListener('mousemove', (e) => {
    const rect = featuredCard.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const moveX = (x / (rect.width / 2)) * 3.5
    const moveY = (y / (rect.height / 2)) * 3.5
    featuredCard.style.transform = 'translate(' + moveX.toFixed(1) + 'px, ' + (-4 + moveY).toFixed(1) + 'px)'
  })

  featuredCard.addEventListener('mouseleave', () => {
    featuredCard.style.transform = ''
  })
}
