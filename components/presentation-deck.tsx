'use client'

import { useCallback, useEffect, useState } from 'react'
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

type SlideComponent = () => React.ReactNode

type Slide = {
  id: string
  eyebrow: string
  title: string
  kicker?: string
  component: SlideComponent
  stepCount?: number
}

const slides: Slide[] = [
  { id: 'title', eyebrow: 'QA CONF 2026 · 10 MIN', title: 'Spec Driven Development', kicker: 'Calidad asegurada desde el requerimiento', component: TitleSlide },
  { id: 'premise', eyebrow: '01 / PREMISA', title: 'El problema no era la IA.', kicker: 'Era el requerimiento.', component: PremiseSlide },
  { id: 'ambiguity', eyebrow: '02 / EL ENEMIGO REAL', title: 'La ambigüedad escala.', kicker: 'Y la autonomía también.', component: AmbiguitySlide },
  { id: 'comparison', eyebrow: '03 / ANTES DE LA IA', title: 'Esto ya pasaba antes.', kicker: 'Solo que más lento.', component: ComparisonSlide },
  { id: 'proposal', eyebrow: '04 / LA PROPUESTA', title: 'Spec Driven Development', kicker: 'Un marco claro antes del código.', component: FlowSlide },
  { id: 'anatomy', eyebrow: '05 / ANATOMÍA', title: 'Un buen spec deja poco espacio para suponer.', kicker: 'Seis piezas. Una intención compartida.', component: AnatomySlide },
  { id: 'quality', eyebrow: '06 / CALIDAD', title: 'Que el spec no sea un saludo a la bandera.', kicker: 'Verificable. Automatizado. Revisado.', component: QualitySlide },
  { id: 'practice', eyebrow: '07 / EN LA PRÁCTICA', title: 'Cómo lo implemento hoy.', kicker: 'El método vive en el flujo.', component: PracticeSlide },
  { id: 'change', eyebrow: '08 / LO QUE CAMBIA', title: 'Las herramientas cambian.', kicker: 'El objetivo permanece.', component: ChangeSlide },
  { id: 'reflection', eyebrow: '09 / REFLEXIÓN', title: 'La calidad no empieza en el código.', kicker: 'Empieza en el spec.', component: ClosingSlide },
  { id: 'resources', eyebrow: '10 / RECURSOS', title: 'Para seguir la conversación.', kicker: 'Llévate el método, no solo las herramientas.', component: ResourcesSlide },
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
          <div><span>[Speaker Name]</span><small>[Speaker Role]</small></div>
          <div className="meta-divider" />
          <span>[Event Name]</span>
        </div>
        <p className="title-hint"><MousePointer2 size={13} /> Usa ← / → o haz click a los lados para navegar</p>
      </div>
      <div className="speaker-placeholder" aria-label="[Speaker Image]">
        <div className="placeholder-grid" />
        <div className="placeholder-avatar"><UserRound size={58} strokeWidth={1} /></div>
        <span>[Speaker Image]</span>
      </div>
    </section>
  )
}

function PremiseSlide() {
  return (
    <section className="slide-frame split-slide">
      <SlideHeader slide={slides[1]} />
      <div className="premise-layout">
        <div className="premise-quote"><span className="quote-mark">“</span><p>Matamos la programación para poner la IA en su lugar… solo para descubrir que el verdadero problema era el requisito.</p></div>
        <BulletList items={['El foco se movió de programar más rápido a delegar más trabajo', 'Pero delegar sin claridad amplifica errores', 'El problema real no era la IA: era la ambigüedad del requerimiento']} />
      </div>
    </section>
  )
}

function AmbiguitySlide() {
  return (
    <section className="slide-frame split-slide">
      <SlideHeader slide={slides[2]} />
      <div className="ambiguity-layout">
        <div className="risk-visual"><div className="risk-line" /><span className="risk-node">?</span><span className="risk-label">suposición</span><div className="risk-branch" /><span className="risk-node risk-node-small">×</span><span className="risk-label risk-label-right">resultado</span></div>
        <div>
          <BulletList items={['La ambigüedad obliga a suponer', 'Las suposiciones producen implementaciones incorrectas', 'En desarrollo agéntico, una instrucción ambigua escala el riesgo']} />
          <QuoteBlock label="FÓRMULA DE RIESGO">Ambigüedad <span>+</span> autonomía <span>=</span> riesgo</QuoteBlock>
        </div>
      </div>
    </section>
  )
}

function ComparisonSlide() {
  return (
    <section className="slide-frame">
      <SlideHeader slide={slides[3]} />
      <div className="comparison-grid">
        <article className="comparison-card">
          <div className="card-icon"><UserRound size={20} /></div><span className="micro-label">ANTES</span><h2>Junior</h2>
          <p>Con instrucciones vagas construye algo incorrecto.</p><div className="card-foot"><span>1 persona</span><span className="status-dot muted" /> <span>riesgo acotado</span></div>
        </article>
        <div className="multiplier" aria-label="multiplicado por cien"><span>×</span><strong>100</strong><small>autonomía</small></div>
        <article className="comparison-card highlighted">
          <div className="card-icon"><Sparkles size={20} /></div><span className="micro-label">AHORA</span><h2>Agente</h2>
          <p>Hace lo mismo, pero a velocidad y escala de máquina.</p><div className="card-foot"><span>más velocidad</span><span className="status-dot" /> <span>más superficie de riesgo</span></div>
        </article>
      </div>
      <p className="bottom-statement">Más velocidad y más autonomía sin claridad <span>=</span> más probabilidad de construir lo equivocado.</p>
    </section>
  )
}

const flowSteps = [
  ['01', 'Requisito', FileText], ['02', 'Spec', ScanSearch], ['03', 'Tests', TestTube2], ['04', 'Implementación', Terminal], ['05', 'Evidencia', ShieldCheck], ['06', 'Aprobación humana', UserRound],
] as const

function FlowSlide() {
  return (
    <section className="slide-frame">
      <SlideHeader slide={slides[4]} />
      <div className="flow-visual">
        {flowSteps.map(([number, label, Icon], index) => (
          <div className="flow-item" key={label}>
            <div className="flow-icon"><Icon size={24} /></div><span className="flow-number">{number}</span><strong>{label}</strong>
            {index < flowSteps.length - 1 && <ArrowRight className="flow-arrow" size={22} aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="flow-note"><LockKeyhole size={16} /> El agente ejecuta dentro de un marco claro. La intención sigue siendo humana.</p>
    </section>
  )
}

const anatomy = [
  ['Contexto', 'Qué pasa hoy y por qué cambiarlo', Layers3], ['Requisito', 'Qué se solicita exactamente', FileText], ['Acceptance Criteria', 'Cómo sabemos que está bien', Check], ['Out of Scope', 'Qué NO se debe tocar', X], ['Sources', 'De dónde sale la solicitud', Link2], ['Blockers / Blocking', 'Dependencias y bloqueos', LockKeyhole],
] as const

function AnatomySlide() {
  return (
    <section className="slide-frame">
      <SlideHeader slide={slides[5]} />
      <div className="anatomy-grid">
        {anatomy.map(([label, description, Icon], index) => (
          <article className="anatomy-card" key={label}><span className="anatomy-index">0{index + 1}</span><Icon size={20} /><h2>{label}</h2><p>{description}</p></article>
        ))}
      </div>
    </section>
  )
}

function QualitySlide() {
  return (
    <section className="slide-frame">
      <SlideHeader slide={slides[6]} />
      <div className="quality-layout">
        <div className="quality-gates">
          <div className="gate gate-one"><span>01</span><strong>TDD + SDD</strong><small>El spec define el comportamiento. Los tests lo vuelven verificable.</small></div>
          <div className="gate gate-two"><span>02</span><strong>CI</strong><small>Unit tests · E2E · lint · type checks</small></div>
          <div className="gate gate-three"><span>03</span><strong>Human in the loop</strong><small>La aprobación final sigue siendo humana.</small></div>
          <div className="gate gate-four"><span>04</span><strong>RDD</strong><small>La revisión se ata a evidencia / recibo. Si el código cambia después de aprobarlo, la aprobación deja de ser válida y debe revisarse nuevamente.</small></div>
        </div>
        <div className="quality-side"><ShieldCheck size={42} /><p>La calidad aparece cuando cada capa puede responder: <strong>“¿Cómo lo sabemos?”</strong></p></div>
      </div>
    </section>
  )
}

const helpers = [
  ['Gentle AI', 'Configura TDD, SDD y RDD con el agente de preferencia', Sparkles], ['/grill-me', 'Interroga ambigüedades y supuestos antes de escribir el spec', CircleHelp], ['/ponytail', 'Implementa con el mínimo código posible para pasar tests', Zap], ['Deep-work plan', 'Acompaña requisitos grandes o prolongados', GitBranch],
] as const

function PracticeSlide() {
  return (
    <section className="slide-frame">
      <SlideHeader slide={slides[7]} />
      <div className="helper-grid">
        {helpers.map(([label, description, Icon]) => <article className="helper-card" key={label}><Icon size={20} /><span className="micro-label">WORKFLOW HELPER</span><h2>{label}</h2><p>{description}</p><ArrowRight size={18} className="helper-arrow" /></article>)}
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

const resources = ['Ejemplo de spec', 'Recursos de la charla', 'TDD + SDD checklist', 'Herramientas mencionadas', 'Repositorio / demo']

function ResourcesSlide() {
  return (
    <section className="slide-frame resources-slide">
      <SlideHeader slide={slides[10]} />
      <div className="resources-layout"><div className="qr-placeholder"><div className="qr-pattern" /><span>[QR Placeholder]</span></div><div className="resource-list">{resources.map((resource, index) => <a href="#resources" key={resource} className="resource-link" data-slide-interactive><span>0{index + 1}</span><strong>{resource}</strong><small>[Resource Link {index + 1}]</small><ExternalLink size={16} /></a>)}</div></div>
      <p className="resource-footer">Gracias · QA Conf 2026</p>
    </section>
  )
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && Boolean(target.closest('button, a, input, textarea, select, [contenteditable="true"], [data-slide-interactive]'))
}

function isEditableTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || Boolean(target.closest('input, textarea, select, [contenteditable="true"]')))
}

export function PresentationDeck() {
  const [current, setCurrent] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const activeSlide = slides[current]
  const activeStepCount = activeSlide.stepCount ?? 1

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
      <SlideEntrance key={activeSlide.id} className="slide-stage">{activeSlide.component()}</SlideEntrance>
      <div className="presentation-chrome">
        <div className="progress-track" aria-label={`Diapositiva ${current + 1} de ${slides.length}`}><span style={{ width: `${((current + 1) / slides.length) * 100}%` }} /></div>
        <div className="chrome-bottom"><span className="slide-count">{String(current + 1).padStart(2, '0')} <i>/</i> {String(slides.length).padStart(2, '0')}</span><div className="nav-controls"><button onClick={goPrevious} disabled={current === 0 && currentStep === 0} aria-label="Diapositiva anterior"><ArrowLeft size={16} /></button><button onClick={goNext} disabled={current === slides.length - 1 && currentStep === activeStepCount - 1} aria-label="Diapositiva siguiente"><ArrowRight size={16} /></button></div><span className="keyboard-hint"><MousePointer2 size={13} /> click / ← →</span></div>
      </div>
    </main>
  )
}

export { slides }
