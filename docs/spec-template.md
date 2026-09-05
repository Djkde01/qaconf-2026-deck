# Spec Driven Development — Template

> Define primero qué significa **correcto**. Implementa después.

Este template está diseñado para trabajar con desarrolladores humanos o agentes de IA reduciendo ambigüedad, suposiciones y cambios fuera de alcance.

---

## Metadata

| Campo              | Valor                                             |
| ------------------ | ------------------------------------------------- |
| **Título**         | `<Nombre corto y descriptivo>`                    |
| **Estado**         | `Draft / Ready / In Progress / Review / Approved` |
| **Autor**          | `<Persona responsable>`                           |
| **Fecha**          | `<YYYY-MM-DD>`                                    |
| **Ticket / Issue** | `<URL o identificador>`                           |

---

# 1. Context

## ¿Qué ocurre actualmente?

Describe el comportamiento actual y el problema que motiva este cambio.

```text
<Estado actual del sistema>

<Problema observado>

<Por qué es necesario cambiarlo>
```

### Ejemplo

```text
Actualmente las sesiones autenticadas permanecen activas indefinidamente
mientras el token siga siendo válido.

Seguridad requiere que una sesión sea invalidada después de un periodo de
inactividad del usuario.
```

---

# 2. Requirement

## ¿Qué debe cambiar?

Describe exactamente el comportamiento solicitado.

Evita definir implementación salvo que exista una restricción técnica explícita.

```text
<Comportamiento esperado>

<Condiciones relevantes>

<Restricciones conocidas>
```

### Ejemplo

```text
Una sesión autenticada debe expirar después de 30 minutos consecutivos
sin actividad del usuario.

Cualquier interacción considerada actividad debe reiniciar el periodo
de inactividad.

Cuando la sesión expire, el usuario debe ser redirigido al login.
```

---

# 3. Acceptance Criteria

## ¿Cómo sabemos que está terminado?

Cada criterio debe ser:

* observable;
* verificable;
* independiente cuando sea posible;
* suficientemente preciso para convertirse en una prueba.

Usa identificadores estables.

### AC-01 — `<Nombre del criterio>`

**Given**

```text
<Estado inicial>
```

**When**

```text
<Acción o evento>
```

**Then**

```text
<Resultado esperado>
```

---

### AC-02 — `<Nombre del criterio>`

**Given**

```text
...
```

**When**

```text
...
```

**Then**

```text
...
```

---

### Ejemplo

#### AC-01 — Sesión permanece activa

**Given**

```text
Un usuario autenticado tiene una sesión válida.
```

**When**

```text
Han pasado menos de 30 minutos desde su última actividad.
```

**Then**

```text
La sesión debe permanecer activa.
```

#### AC-02 — Sesión expira

**Given**

```text
Un usuario autenticado tiene una sesión válida.
```

**When**

```text
Pasan 30 minutos consecutivos sin actividad.
```

**Then**

```text
La sesión debe invalidarse y el usuario debe ser redirigido al login.
```

---

# 4. Out of Scope

## ¿Qué NO debe cambiar?

Esta sección limita explícitamente la libertad de la implementación.

* No modificar `<componente / servicio / módulo>`.
* No cambiar `<API / contrato / comportamiento>`.
* No actualizar dependencias salvo que sea estrictamente necesario.
* No realizar refactors no relacionados.
* No cambiar comportamiento fuera de los Acceptance Criteria.

### Regla

> Si un cambio no es necesario para satisfacer este spec, no pertenece a esta implementación.

---

# 5. Sources

## ¿De dónde sale este requerimiento?

Toda decisión relevante debe tener una fuente o quedar explícitamente identificada como una decisión pendiente.

| Fuente                                | Propósito               |
| ------------------------------------- | ----------------------- |
| `<Issue / ticket URL>`                | Requerimiento original  |
| `<Figma / diseño URL>`                | Comportamiento visual   |
| `<API docs URL>`                      | Contrato técnico        |
| `<ADR / RFC URL>`                     | Decisión arquitectónica |
| `<Documento / conversación aprobada>` | Regla de negocio        |

### Regla

Si una decisión no puede justificarse usando una fuente o este spec:

**no debe ser inventada durante la implementación.**

---

# 6. Blockers / Blocking

## Blocked by

Elementos que deben resolverse antes de completar este trabajo.

* [ ] `<Dependencia>`
* [ ] `<API pendiente>`
* [ ] `<Decisión pendiente>`

Si no existen:

```text
None.
```

---

## Blocking

Trabajo que depende de que este spec sea completado.

* `<Issue / feature / release dependiente>`

Si no existe:

```text
None.
```

---

# 7. Open Questions

Toda ambigüedad detectada antes o durante la implementación debe registrarse aquí.

* [ ] `<Pregunta>`
* [ ] `<Decisión que debe tomar una persona>`
* [ ] `<Comportamiento no definido>`

## Regla

> Una pregunta abierta que afecte comportamiento bloquea la implementación de esa parte del spec.

El agente no debe resolverla mediante suposición.

---

# 8. Verification Plan

## RED — demostrar que falta el comportamiento

Antes de implementar:

* [ ] Crear o modificar los tests que representan `AC-01`.
* [ ] Crear o modificar los tests que representan `AC-02`.
* [ ] Ejecutar los tests.
* [ ] Confirmar que fallan por la razón esperada.

### Evidencia esperada

```text
<Test / comando>

<Resultado esperado en RED>
```

---

## GREEN — implementación mínima

Implementar únicamente lo necesario para hacer pasar los criterios definidos.

* [ ] `AC-01` pasa.
* [ ] `AC-02` pasa.
* [ ] No se añadieron cambios fuera del scope.

---

## Regression checks

Ejecutar las validaciones relevantes del proyecto.

```bash
<unit test command>
<integration test command>
<e2e command>
<lint command>
<typecheck command>
<build command>
```

No todos los proyectos necesitan todos los comandos.

Incluye únicamente los checks que realmente correspondan.

---

# 9. Evidence

Registra evidencia de que el resultado satisface el spec.

| Acceptance Criterion | Evidencia                            |
| -------------------- | ------------------------------------ |
| `AC-01`              | `<test / captura / log / resultado>` |
| `AC-02`              | `<test / captura / log / resultado>` |

Opcionalmente:

```text
Commit:
<sha>

Pull Request:
<url>

CI Run:
<url>
```

---

# 10. Human Review

La implementación puede ser generada, probada y revisada automáticamente.

La aprobación final sigue siendo explícita.

* [ ] El diff corresponde al spec.
* [ ] Todos los Acceptance Criteria tienen evidencia.
* [ ] No existen cambios fuera de scope.
* [ ] CI está en verde.
* [ ] Open Questions está vacío o las decisiones están documentadas.
* [ ] Un humano revisó el resultado.

## Approval

```text
Status: APPROVED / CHANGES REQUESTED

Reviewed by:
<Name>

Reviewed revision:
<commit SHA / artifact hash>

Date:
<YYYY-MM-DD>
```

---

# Change After Approval

Si el código o los artefactos aprobados cambian después de la revisión:

> **La aprobación anterior deja de representar el estado actual y debe volver a validarse.**

Esto aplica especialmente cuando el workflow utiliza Receipt Driven Development o cualquier mecanismo que ate la aprobación a una revisión específica.

---

# Agent Contract

Al implementar este spec:

1. No inventes requisitos.
2. No resuelvas Open Questions mediante suposiciones.
3. No modifiques elementos incluidos en Out of Scope.
4. Empieza por pruebas que demuestren que el comportamiento solicitado todavía no existe.
5. Implementa el mínimo cambio necesario para cumplir los Acceptance Criteria.
6. Ejecuta los checks definidos en Verification Plan.
7. Reporta cualquier desviación del spec.
8. No declares el trabajo terminado sin evidencia verificable.
9. La aprobación final corresponde a un humano.

---

## Flujo resumido

```text
Context
   ↓
Requirement
   ↓
Acceptance Criteria
   ↓
RED
   ↓
Implementation
   ↓
GREEN
   ↓
CI / Verification
   ↓
Evidence
   ↓
Human Review
```

**Spec → Tests → Implementación → Evidencia → Aprobación**
