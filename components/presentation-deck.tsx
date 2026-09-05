'use client'

import { useCallback, useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleHelp,
  ExternalLink,
  FileText,
  GitBranch,
  Layers3,
  Link2,
  LockKeyhole,
  MousePointer2,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  UserRound,
  X,
  Zap,
} from 'lucide-react'

type SlideComponent = (step: number, presentationUrl: string) => React.ReactNode

type Slide = {
  id: string
  eyebrow: string
  title: string
  kicker?: string
  component: SlideComponent
  stepCount: number
}

const slides: Slide[] = [
  { id: 'title', eyebrow: 'QA CONF 2026 · 10 MIN', title: 'Spec Driven Development', kicker: 'Calidad asegurada desde el requerimiento', component: TitleSlide, stepCount: 1 },
  { id: 'premise', eyebrow: '01 / PREMISA', title: 'El problema no era la IA.', kicker: 'Era el requerimiento.', component: PremiseSlide, stepCount: 2 },
  { id: 'ambiguity', eyebrow: '02 / EL ENEMIGO REAL', title: 'La ambigüedad escala.', kicker: 'Y la autonomía también.', component: AmbiguitySlide, stepCount: 2 },
  { id: 'comparison', eyebrow: '03 / ANTES DE LA IA', title: 'Esto ya pasaba antes.', kicker: 'Solo que más lento.', component: ComparisonSlide, stepCount: 4 },
  { id: 'proposal', eyebrow: '04 / LA PROPUESTA', title: 'Spec Driven Development', kicker: 'Un marco claro antes del código.', component: FlowSlide, stepCount: 1 },
  { id: 'anatomy', eyebrow: '05 / ANATOMÍA', title: 'Un buen spec deja poco espacio para suponer.', kicker: 'Seis piezas. Una intención compartida.', component: AnatomySlide, stepCount: 6 },
  { id: 'quality', eyebrow: '06 / CALIDAD', title: 'Que el spec no sea un saludo a la bandera.', kicker: 'Verificable. Automatizado. Revisado.', component: QualitySlide, stepCount: 4 },
  { id: 'practice', eyebrow: '07 / EN LA PRÁCTICA', title: 'Cómo lo implemento hoy.', kicker: 'El método vive en el flujo.', component: PracticeSlide, stepCount: 1 },
  { id: 'change', eyebrow: '08 / LO QUE CAMBIA', title: 'Las herramientas cambian.', kicker: 'El objetivo permanece.', component: ChangeSlide, stepCount: 1 },
  { id: 'reflection', eyebrow: '09 / REFLEXIÓN', title: 'La calidad no empieza en el código.', kicker: 'Empieza en el spec.', component: ClosingSlide, stepCount: 1 },
  { id: 'resources', eyebrow: '10 / RECURSOS', title: 'Para seguir la conversación.', kicker: 'Llévate el método, no solo las herramientas.', component: ResourcesSlide, stepCount: 1 },
]

function SlideHeader({ slide }: { slide: Slide }) {
  return (
    <header className="slide-header">
      <p className="eyebrow">{slide.eyebrow}</p>
      <h1>{slide.title}</h1>
      {slide.kicker && <p className="slide-kicker">{slide.kicker}</p>}
    </header>
  )
}

type MotionPrimitiveProps = React.HTMLAttributes<HTMLDivElement>

function SlideEntrance({ children, className = '', ...props }: MotionPrimitiveProps) {
  return <div className={`motion-slide-entrance ${className}`} {...props}>{children}</div>
}

function FadeUp({ children, className = '', ...props }: MotionPrimitiveProps) {
  return <div className={`motion-fade-up ${className}`} {...props}>{children}</div>
}

function Fade({ children, className = '', ...props }: MotionPrimitiveProps) {
  return <div className={`motion-fade ${className}`} {...props}>{children}</div>
}

function Stagger({ children, className = '', ...props }: MotionPrimitiveProps) {
  return <div className={`motion-stagger ${className}`} {...props}>{children}</div>
}

function StaggerItem({ children, className = '', ...props }: MotionPrimitiveProps) {
  return <div className={`motion-stagger-item ${className}`} {...props}>{children}</div>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>
          <span className="bullet-mark" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function QuoteBlock({ children, label = 'IDEA CENTRAL' }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="quote-block">
      <span className="micro-label">{label}</span>
      <p>{children}</p>
    </div>
  )
}

function TitleSlide() {
  return (
    <section className="title-slide slide-frame">
      <div className="title-copy">
        <div className="brand-mark" aria-label="QA Conf 2026">
          <span className="brand-dot" />
          <span>QA CONF <strong>2026</strong></span>
        </div>
        <p className="eyebrow">CONFERENCIA VIRTUAL · SOFTWARE QUALITY</p>
        <h1>Spec Driven <span>Development</span></h1>
        <p className="title-subtitle">Calidad asegurada desde el requerimiento</p>
        <div className="speaker-meta">
          <div><span>Sergio Estrella</span><small>Forward Deployed Engineer</small></div>
          <div className="meta-divider" />
          <span>QA Conf</span>
        </div>
        <p className="title-hint"><MousePointer2 size={13} /> Usa ← / → o haz click a los lados para navegar</p>
      </div>
      <div className="speaker-placeholder" aria-label="Sergio Estrella">
        <div className="placeholder-grid" />
        <span className="speaker-image-pending">Sergio Estrella</span>
      </div>
    </section>
  )
}

function PremiseSlide(step: number) {
  return (
    <section className="slide-frame split-slide premise-slide">
      <div className="premise-layout">
        <div key={`premise-quote-${step}`} className="premise-quote progressive-quote"><span className="quote-mark">“</span><p>Matamos la programación para poner la IA en su lugar… solo para descubrir que el verdadero problema era el requisito.</p></div>
        {step > 0 && <div key="premise-argument" className="premise-argument progressive-top-row progressive-slide-in"><span className="micro-label">PREMISA</span><h2>El problema no era la IA.</h2><p>Era el requerimiento.</p></div>}
        {step > 0 && <div key="premise-bullets" className="premise-bullets progressive-top-row progressive-slide-in progressive-slide-in-delay"><span className="micro-label">LO QUE CAMBIÓ</span><BulletList items={['El foco se movió de programar más rápido a delegar más trabajo', 'Pero delegar sin claridad amplifica errores', 'El problema real no era la IA: era la ambigüedad del requerimiento']} /></div>}
      </div>
    </section>
  )
}

function AmbiguitySlide(step: number) {
  return (
    <section className="slide-frame split-slide ambiguity-slide">
      <SlideHeader slide={slides[2]} />
      <div className="ambiguity-layout">
        <div className="risk-visual progressive-slide-in" role="img" aria-label="Una línea azul de suposición llega a un nodo de pregunta y continúa como una línea roja hasta el resultado">
          <svg viewBox="0 0 640 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <line x1="32" y1="210" x2="274" y2="118" pathLength="1" className="risk-path risk-path-blue" />
            <line x1="274" y1="118" x2="570" y2="216" pathLength="1" className="risk-path risk-path-red" />
            <circle cx="274" cy="118" r="24" className="risk-svg-node risk-svg-question" />
            <text x="274" y="127" textAnchor="middle" className="risk-svg-symbol risk-svg-question-text">?</text>
            <text x="274" y="66" textAnchor="middle" className="risk-svg-label risk-svg-question-label">suposición</text>
            <circle cx="570" cy="216" r="20" className="risk-svg-node risk-svg-result" />
            <text x="570" y="223" textAnchor="middle" className="risk-svg-symbol risk-svg-result-text">×</text>
            <text x="570" y="272" textAnchor="middle" className="risk-svg-label risk-svg-result-label">resultado</text>
          </svg>
        </div>
        <div className="ambiguity-copy progressive-slide-in progressive-slide-in-delay"><BulletList items={['La ambigüedad obliga a suponer', 'Las suposiciones producen implementaciones incorrectas', 'En desarrollo agéntico, una instrucción ambigua escala el riesgo']} />
          {step > 0 && <div key="ambiguity-formula" className="ambiguity-formula progressive-slide-from-right"><QuoteBlock label="FÓRMULA DE RIESGO"><strong>Riesgo</strong> <span>=</span> Autonomía <span>+</span> (Ambigüedad <span>×</span> Suposiciones)</QuoteBlock></div>}
        </div>
      </div>
    </section>
  )
}

function ComparisonSlide(step: number) {
  return (
    <section className="slide-frame">
      <div key={`comparison-header-${step}`} className="progressive-slide-in"><SlideHeader slide={slides[3]} /></div>
      <div className="comparison-grid">
        {step > 0 && <article key="junior" className="comparison-card progressive-slide-from-left"><div className="card-icon"><UserRound size={20} /></div><span className="micro-label">ANTES</span><h2>Junior</h2><p>Con instrucciones vagas construye algo incorrecto.</p><div className="card-foot"><span>1 persona</span><span className="status-dot muted" /> <span>riesgo acotado</span></div></article>}
        {step > 1 && <div key="multiplier" className="multiplier progressive-slide-in" aria-label="multiplicado por cien"><span>×</span><strong>100</strong><small>autonomía</small></div>}
        {step > 1 && <article key="agent" className="comparison-card highlighted progressive-slide-from-right"><div className="card-icon"><Sparkles size={20} /></div><span className="micro-label">AHORA</span><h2>Agente</h2><p>Hace lo mismo, pero a velocidad y escala de máquina.</p><div className="card-foot"><span>más velocidad</span><span className="status-dot" /> <span>más superficie de riesgo</span></div></article>}
      </div>
      {step > 2 && <p key="comparison-conclusion" className="bottom-statement progressive-slide-in progressive-slide-in-delay">Más velocidad y más autonomía sin claridad <span>=</span> más probabilidad de construir lo equivocado.</p>}
    </section>
  )
}

const flowSteps = [
  ['01', 'Requisito', FileText], ['02', 'Spec', ScanSearch], ['03', 'Tests', TestTube2], ['04', 'Implementación', Terminal], ['05', 'Evidencia', ShieldCheck], ['06', 'Aprobación humana', UserRound],
] as const

function FlowSlide() {
  return (
    <section className="slide-frame flow-slide">
      <div className="progressive-slide-in"><SlideHeader slide={slides[4]} /></div>
      <div className="flow-visual progressive-flow" aria-label="Flujo de requisito a aprobación humana">
        {flowSteps.map(([number, label, Icon], index) => (
          <div className="flow-item" style={{ '--flow-index': index } as React.CSSProperties} key={label}>
            <div className="flow-icon"><Icon size={24} /></div><span className="flow-number">{number}</span><strong>{label}</strong>
            {index < flowSteps.length - 1 && <ArrowRight className="flow-arrow" size={22} aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="flow-note progressive-flow-note"><LockKeyhole size={16} /> El agente ejecuta dentro de un marco claro. La intención sigue siendo humana.</p>
    </section>
  )
}

const anatomy = [
  ['Contexto', 'Qué pasa hoy y por qué cambiarlo', Layers3], ['Requisito', 'Qué se solicita exactamente', FileText], ['Acceptance Criteria', 'Cómo sabemos que está bien', Check], ['Out of Scope', 'Qué NO se debe tocar', X], ['Sources', 'De dónde sale la solicitud', Link2], ['Blockers / Blocking', 'Dependencias y bloqueos', LockKeyhole],
] as const

function AnatomySlide(step: number) {
  const numericStep = Number(step)
  const selectedIndex = Number.isFinite(numericStep) ? Math.max(0, Math.min(numericStep, anatomy.length - 1)) : 0
  const selectedAnatomy = anatomy[selectedIndex] ?? anatomy[0]
  const [label, description, Icon] = selectedAnatomy
  return (
    <section className="slide-frame anatomy-slide">
      <div className="progressive-slide-in"><SlideHeader slide={slides[5]} /></div>
      <div className="anatomy-detail progressive-detail" key={`anatomy-detail-${selectedIndex}`}><div className="anatomy-detail-icon"><Icon size={34} /></div><div><span className="anatomy-index">0{selectedIndex + 1} / 06</span><h2>{label}</h2><p>{description}</p></div></div>
      <div className="anatomy-row" aria-label="Partes del spec">
        {anatomy.map(([itemLabel, itemDescription, ItemIcon], index) => <div key={itemLabel} className={`anatomy-compact ${index === selectedIndex ? 'is-selected' : ''}`} aria-current={index === selectedIndex ? 'step' : undefined}><ItemIcon size={17} /><strong>{itemLabel}</strong><span>{itemDescription}</span></div>)}
      </div>
    </section>
  )
}

const qualityGates = [
  ['TDD + SDD', 'El spec define el comportamiento. Los tests lo vuelven verificable.'],
  ['CI', 'Unit tests · E2E · lint · type checks'],
  ['Human in the loop', 'La aprobación final sigue siendo humana.'],
  ['RDD', 'La revisión se ata a evidencia / recibo. Si el código cambia después de aprobarlo, la aprobación deja de ser válida y debe revisarse nuevamente.'],
] as const

function QualitySlide(step: number) {
  const focusedIndex = Number.isFinite(Number(step)) ? Math.max(0, Math.min(Number(step), qualityGates.length - 1)) : 0
  return (
    <section className="slide-frame quality-slide">
      <div className="progressive-slide-in"><SlideHeader slide={slides[6]} /></div>
      <div className="quality-layout">
        <div className="quality-gates progressive-quality-gates">
          {qualityGates.map(([label, description], index) => <div className={`gate gate-${index + 1} ${index === focusedIndex ? 'is-focused' : ''}`} key={label}><span>0{index + 1}</span><strong>{label}</strong><small>{description}</small></div>)}
        </div>
        <div className="quality-side progressive-quality-side"><ShieldCheck size={42} /><p>La calidad aparece cuando cada capa puede responder: <strong>“¿Cómo lo sabemos?”</strong></p></div>
      </div>
    </section>
  )
}

const helpers = [
  ['Gentle AI', 'Configura TDD, SDD y RDD con el agente de preferencia', Sparkles], ['/grill-me', 'Interroga ambigüedades y supuestos antes de escribir el spec', CircleHelp], ['/ponytail', 'Implementa con el mínimo código posible para pasar tests', Zap], ['Deep-work plan', 'Acompaña requisitos grandes o prolongados', GitBranch],
] as const

function HelperCard({ helper }: { helper: typeof helpers[number] }) {
  const [label, description, Icon] = helper
  return <article className="helper-card"><Icon size={20} /><h2>{label}</h2><p>{description}</p><ArrowRight size={18} className="helper-arrow" /></article>
}

function PracticeSlide() {
  const harnessHelpers = [helpers[0], helpers[3]]
  const skillHelpers = [helpers[1], helpers[2]]

  return (
    <section className="slide-frame">
      <SlideHeader slide={slides[7]} />
      <div className="helper-groups">
        <section className="helper-group helper-group-harness" aria-labelledby="harness-heading">
          <div className="helper-group-header"><span className="micro-label">INFRAESTRUCTURA</span><h2 id="harness-heading">HARNESS / WORKFLOW</h2></div>
          <div className="helper-group-grid">{harnessHelpers.map((helper) => <HelperCard helper={helper} key={helper[0]} />)}</div>
        </section>
        <section className="helper-group helper-group-skills" aria-labelledby="skills-heading">
          <div className="helper-group-header"><span className="micro-label">CAPACIDADES</span><h2 id="skills-heading">SKILLS</h2></div>
          <div className="helper-group-grid">{skillHelpers.map((helper) => <HelperCard helper={helper} key={helper[0]} />)}</div>
        </section>
      </div>
      <p className="helper-note">El método es el centro. Las herramientas son reemplazables.</p>
    </section>
  )
}

function ChangeSlide() {
  return (
    <section className="slide-frame change-slide">
      <SlideHeader slide={slides[8]} />
      <div className="change-body"><div className="change-lines"><span>modelos</span><span>comandos</span><span>frameworks</span><span>nombres</span></div><ArrowRight size={42} /><QuoteBlock label="OBJETIVO QUE PERMANECE">Dar al agente la mayor cantidad de detalles correctos, de la forma más fácil y confiable posible</QuoteBlock></div>
    </section>
  )
}

function ClosingSlide() {
  return (
    <section className="slide-frame closing-slide">
      <div className="closing-orbit" aria-hidden="true"><div /><div /><div /></div>
      <p className="eyebrow">10 / REFLEXIÓN FINAL</p><h1>La calidad no empieza<br />en el código.</h1><p className="closing-line">Empieza en el <span>spec.</span></p>
      <div className="closing-points"><span>Desarrollo y QA convergen</span><span>Quien construye también valida</span><span>QA influye desde el comportamiento</span></div>
    </section>
  )
}

const resources = [
  ['Gentle AI', 'https://github.com/Gentleman-Programming/gentle-ai/'],
  ['Deep Work Plan', 'https://deepworkplan.com/'],
  ['Ponytail', 'https://github.com/DietrichGebert/ponytail'],
  ['Grill Me', 'https://www.aihero.dev/skills-grill-me'],
  ['Código y slides', 'https://github.com/Djkde01/qaconf-2026-deck'],
] as const

function ResourcesSlide(_step: number, presentationUrl: string) {
  return (
    <section className="slide-frame resources-slide">
      <SlideHeader slide={slides[10]} />
      <div className="resources-layout">
        <div className="qr-placeholder" aria-label="Código QR para abrir esta presentación">
          {presentationUrl ? <QRCode value={presentationUrl} size={194} bgColor="#eef3fb" fgColor="#080b12" level="M" /> : <div className="qr-loading" aria-hidden="true" />}
          <span>Slides</span>
        </div>
        <div className="resource-list">
          {resources.map(([label, url], index) => <a href={url} key={label} className="resource-link" data-slide-interactive target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre en una pestaña nueva)`}><span>0{index + 1}</span><strong>{label}</strong><small>{new URL(url).hostname.replace('www.', '')}</small><ExternalLink size={16} aria-hidden="true" /></a>)}
        </div>
      </div>
      <p className="resource-footer">Gracias · QA Conf 2026</p>
    </section>
  )
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest('button, a, input, textarea, select, [contenteditable="true"], [data-slide-interactive]'))
}

function isEditableTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || Boolean(target.closest('input, textarea, select, [contenteditable="true"]')))
}

export function PresentationDeck() {
  const [current, setCurrent] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [presentationUrl, setPresentationUrl] = useState('')
  const activeSlide = slides[current]
  const activeStepCount = activeSlide.stepCount

  useEffect(() => {
    setPresentationUrl(`${window.location.origin}${window.location.pathname}`)
  }, [])

  const goTo = useCallback((next: number) => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, next)))
    setCurrentStep(0)
  }, [])

  const goNext = useCallback(() => {
    if (currentStep < activeStepCount - 1) {
      setCurrentStep((step) => step + 1)
      return
    }
    goTo(current + 1)
  }, [activeStepCount, current, currentStep, goTo])

  const goPrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1)
      return
    }
    goTo(current - 1)
  }, [current, currentStep, goTo])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isInteractiveTarget(event.target) || isEditableTarget(event.target)) return
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') { event.preventDefault(); goNext() }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') { event.preventDefault(); goPrevious() }
      if (event.key === 'Home') { event.preventDefault(); goTo(0) }
      if (event.key === 'End') { event.preventDefault(); goTo(slides.length - 1) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrevious, goTo])

  return (
    <main className="presentation-shell" onClick={(event) => {
      if (isInteractiveTarget(event.target)) return
      event.clientX >= window.innerWidth / 2 ? goNext() : goPrevious()
    }}>
      <div className="ambient-grid" aria-hidden="true" />
      <SlideEntrance key={activeSlide.id} className="slide-stage">{activeSlide.component(currentStep, presentationUrl)}</SlideEntrance>
      <div className="presentation-chrome">
        <div className="progress-track" aria-label={`Diapositiva ${current + 1} de ${slides.length}`}><span style={{ width: `${((current + 1) / slides.length) * 100}%` }} /></div>
        <div className="chrome-bottom"><span className="slide-count">{String(current + 1).padStart(2, '0')} <i>/</i> {String(slides.length).padStart(2, '0')}</span><div className="nav-controls"><button onClick={goPrevious} disabled={current === 0 && currentStep === 0} aria-label="Diapositiva anterior"><ArrowLeft size={16} /></button><button onClick={goNext} disabled={current === slides.length - 1 && currentStep === activeStepCount - 1} aria-label="Diapositiva siguiente"><ArrowRight size={16} /></button></div><span className="keyboard-hint"><MousePointer2 size={13} /> click / ← →</span></div>
      </div>
    </main>
  )
}

export { slides }
