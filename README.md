# Spec Driven Development: Calidad asegurada desde el requerimiento

Deck interactivo de la charla presentada en QA Conf 2026.

La charla explora cómo el desarrollo asistido y agéntico cambia el punto donde empieza la calidad: no en el código, sino en la definición precisa del requerimiento.

## Sobre la charla

La autonomía amplifica la ambigüedad: un agente puede implementar rápidamente una interpretación equivocada. Spec Driven Development busca reducir ese espacio de interpretación, mientras TDD, CI, Human in the Loop y Receipt Driven Development convierten el spec en un flujo verificable.

> La calidad no empieza en el código. Empieza en el spec.

## Qué encontrarás en este repo

- Deck interactivo de la charla
- Navegación mediante teclado y click
- Animaciones progresivas por slide
- Ejemplo de flujo Spec → Tests → Implementación → Evidencia → Aprobación
- Template reutilizable de Spec Driven Development
- Links a las herramientas mencionadas

## Ver las slides

[Ver presentación desplegada](DEPLOYMENT_URL)

- `→` / click derecho: avanzar
- `←` / click izquierdo: retroceder

Algunas slides contienen estados progresivos internos: avanzar puede revelar el siguiente paso antes de cambiar de slide.

## Spec Driven Development Template

Consulta el [Spec Template](./docs/spec-template.md), cópialo y adáptalo a tu propio flujo de trabajo. Sus secciones principales son:

- Context
- Requirement
- Acceptance Criteria
- Out of Scope
- Sources
- Blockers / Blocking
- Open Questions
- Verification Plan
- Evidence
- Human Review

## Recursos mencionados

- [Gentle AI](https://github.com/Gentleman-Programming/gentle-ai/)
- [Deep Work Plan](https://deepworkplan.com/)
- [Ponytail](https://github.com/DietrichGebert/ponytail)
- [Grill Me](https://www.aihero.dev/skills-grill-me)

## Ejecutar localmente

Requisitos: Node.js y pnpm.

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para validar una build de producción:

```bash
pnpm build
pnpm start
```

## Stack

- [Next.js](https://nextjs.org/)
- React
- TypeScript
- Tailwind CSS
- Lucide
- v0

## Estructura principal

```text
.
├── app/
├── components/
│   └── presentation-deck.tsx
├── docs/
│   └── spec-template.md
├── public/
└── README.md
```

## Autor

**Sergio Estrella**

Forward Deployed Engineer

## Evento

QA Conf 2026

## Built with v0

Este repositorio utiliza [v0](https://v0.app) para iterar sobre la interfaz del deck.
