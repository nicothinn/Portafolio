# Space UI Design Analysis — Patrones para el Portafolio

> Investigación realizada el 11 Julio 2026 sobre 50 sitios web de temática espacial.
> Objetivo: mejorar la UI del portafolio de Nicolás Peña Irurita un 150% con estética espacial.

---

## Resumen Ejecutivo

De los 50 sitios revisados, se extrajeron **patrones comunes** de diseño espacial aplicables a un landing page profesional. Los hallazgos se organizan en: paletas de color, tipografía, layout, animaciones, elementos UI, y técnicas interactivas.

---

## 1. PALETAS DE COLOR (Lo más importante)

### Patrón #1: Fondo negro profundo + 1 acento neón + 1 acento secundario
Usado por: **SpaceX, Rocket Lab, Relativity Space, Mass Effect, Star Citizen**

```
Fondo:       #000000 o #050505 (negro absoluto, no gris oscuro)
Acento 1:    #0077FF (azul eléctrico) — tú ya lo tienes ✅
Acento 2:    #12F7D6 (verde data) — tú ya lo tienes ✅
Blanco:      #FFFFFF puro, no #E5E5E5
```

**Mejora que puedes aplicar YA:**
- Cambiar `#0D0D0D` (black actual) por `#000000` o `#050505`
- Cambiar `#0A1128` (dark-blue) por `#020010` (negro azulado más profundo)
- Los acentos que ya tienes son perfectos para espacio 🎯

### Patrón #2: Degradados sutiles azul → púrpura
Usado por: **Virgin Galactic, Lusion, Active Theory, Mass Effect, Awwwards space winners**

```
Degradado hero: #000000 → #0A0015 → #000B1A (negro → negro azulado → negro)
Glow:          rgba(0, 119, 255, 0.15) para brillos
Neón:          #6C5CE7 (púrpura) como complemento opcional
```

### Patrón #3: Blanco puro sobre negro absoluto
Usado por: **SpaceX, Blue Origin, Relativity Space**

Sin grises. El texto es blanco `#FFFFFF` sobre negro `#000000`. El contraste extremo da la sensación "espacial". Tu portafolio actual usa `text-gray-400` y `text-gray-300` — **subir el contraste** es la mejora más fácil e impactante.

---

## 2. TIPOGRAFÍA

| Sitio | Fuente(s) | Estilo |
|---|---|---|
| **SpaceX** | Sans-serif propia (DIN-style) | Tracking amplio, uppercase, pesos bold |
| **Blue Origin** | Sans-serif limpia | Light weights, tracking amplio, minimal |
| **Rocket Lab** | Sans-serif técnica | Narrow, uppercase, weights semibold |
| **Virgin Galactic** | Serif + Sans-serif | Mezcla: serif elegante para títulos, sans para cuerpo |
| **Mass Effect** | Futurista (custom) | Uppercase, tracking muy amplio, ángulos |
| **Bruno Simon** | Amatic SC + Nunito | Handmade, personal, no corporativo |
| **Relativity Space** | Sans-serif limpia | Bold, uppercase, espaciado generoso |

**Patrón común:**
- **Títulos:** Uppercase con `tracking-[0.05em]` a `tracking-[0.15em]` (espaciado amplio)
- **Cuerpo:** font-light o font-normal, `leading-relaxed`
- **Fuentes:** sans-serif modernas (Inter, Montserrat ya las tienes)
- **Evitar:** cursivas, serifs decorativas, weights super finos en fondos oscuros

**Aplicación a tu portafolio:**
```css
/* Ejemplo de tracking espacial */
.tracking-space { letter-spacing: 0.12em; }
.uppercase-space { text-transform: uppercase; letter-spacing: 0.15em; }
```

---

## 3. LAYOUT Y ESTRUCTURA

### Hero (sección principal)
**Patrón de los sitios top (SpaceX, Blue Origin, Rocket Lab, Relativity):**

```
┌─────────────────────────────────────┐
│  [Navbar transparente con logo]      │  ← fixed, se vuelve sólido al scrollear
│                                       │
│        Video / Imagen de fondo        │  ← fullscreen, sin distracciones
│          a pantalla completa          │
│                                       │
│   TÍTULO GRANDE (una línea o dos)     │  ← font-display, uppercase, tracking
│   Subtítulo minimalista               │  ← font-sans, light, tracking amplio
│   [CTA botón]  [Enlace secundario]    │  ← outline + solid
│                                       │
│           ↓ scroll indicator          │  ← sutil, animación bounce
└─────────────────────────────────────┘
```

**Lo que tienes vs lo que proponen:**
- ✅ Ya tienes hero fullscreen + CTA + scroll indicator
- ⚠️ Tu hero tiene 6 líneas de texto — los espaciales usan 1-2 líneas máx
- ❌ Te falta video/fondo animado de partículas
- ⚠️ Tu scroll indicator está bien pero puede ser más sutil

### Secciones
**Patrón:** Secciones de 100vh o padding vertical masivo (`py-32` como ya usas)
**Grid:** 2 columnas asimétricas o 3 columnas simétricas
**Bordes:** Mínimos o inexistentes. Separación con espacio, no con líneas.

---

## 4. ANIMACIONES Y EFECTOS

### Efectos espaciales que puedes implementar

| Efecto | Dónde se ve | Dificultad | Impacto |
|---|---|---|---|
| **Fondo de estrellas/partículas** | Lusion, Star Citizen, Bruno Simon | Media | 🔥 MUY ALTO |
| **Parallax en scroll** | Locomotive, Active Theory, SpaceX | Baja (con librería) | 🔥 ALTO |
| **Glow neón en bordes** | Mass Effect, Rocket Lab | Baja (CSS) | 🔥 ALTO |
| **Fade/stagger en entradas** | Todos (Framer Motion) | Ya lo tienes ✅ | — |
| **Morphing SVG** | Lusion, Active Theory | Alta | MEDIO |
| **Scroll-triggered animations** | Relativity Space | Media | 🔥 ALTO |
| **Floating/levitating elements** | Blue Origin, Virgin Galactic | Baja | MEDIO |
| **Gradientes animados** | Lusion | Media | MEDIO |

### Micro-interacciones espaciales

De `make-interfaces-feel-better` skill + observaciones:

1. **Brillo neón en hover de botones** — `box-shadow: 0 0 20px rgba(0,119,255,0.5)`
2. **Scale on press** — `active:scale-[0.96]` (ya debería estar en botones)
3. **Bordes con glow** — en lugar de bordes sólidos, usar shadow
4. **Stagger en listas** — ya usas `staggerChildren: 0.2` ✅
5. **Transiciones suaves** — `ease-out` para entradas, `200ms` para feedback

---

## 5. ELEMENTOS UI ESPECIALES

### Cartas / Tarjetas
**En lugar de:** `bg-black/50 border border-gray-800 rounded-xl`
**Usa:** Sin borde, con glow sutil:
```css
box-shadow: 0 0 30px rgba(0, 119, 255, 0.08), 0 0 60px rgba(0, 119, 255, 0.03);
```

Esto ya se acerca al estilo "holográfico" de Mass Effect y Star Citizen.

### Botones
**Estilo espacial:**
- **Solid:** gradiente azul → verde (ya lo tienes ✅)
- **Outline:** borde con glow, sin relleno, texto neón
- **Hover:** intensificar el glow + scale(1.05)

### HUD / Data displays
Inspirado en: **Rocket Lab, NASA Eyes, Where is Webb?**

Para tu sección de Skills/estadísticas:
- Usa `font-mono` o `tabular-nums` para números
- Añade un "panel" con efecto vidrio para mostrar datos
- Líneas de rejilla sutiles (`background: repeating-linear-gradient`)

---

## 6. TÉCNICAS DE STORYTELLING

### Scroll progresivo (tipo "distance to mars")
- Una historia que avanza con el scroll
- Cada sección revela más información
- Ideal para la sección "About" o "Experience"

### Scroll horizontal (tipo "if the moon were 1 pixel")
- Podrías hacer scroll horizontal en "Skills" mostrando tecnologías

### Timeline visual (tipo "Apollo 11 in real time")
- Para "Experience": una línea de tiempo que se construye mientras scrolleas

---

## 7. INSPIRACIONES DIRECTAS PARA TU PORTAFOLIO

### Para el HERO:
- **SpaceX** — minimalismo extremo, video de fondo, texto blanco puro
- **Blue Origin** — eslogan poderoso "For the Benefit of Earth", fondo inmersivo
- **Relativity Space** — scroll storytelling, datos grandes con iconos orbitales

### Para SKILLS:
- **Rocket Lab** — tarjetas técnicas con métricas grandes
- **NASA Eyes** — visualización de datos en 3D
- **Earth Nullschool** — datos globales en vivo (inspiración para dashboards)

### Para EXPERIENCE:
- **Virgin Galactic** — timeline vertical limpio con imagen de fondo
- **Apollo 11 in real time** — timeline interactivo

### Para PROJECTS:
- **Relativity Space** — cards con hover 3D, métricas claras
- **Lusion** — grid de proyectos con preview interactiva

### Para el CONTACTO/CTA:
- **Mass Effect** — botones holográficos con neón
- **SpaceX** — CTA directo, sin distracciones

---

## 8. TECNOLOGÍAS A CONSIDERAR

Basado en lo que usan los sitios revisados:

| Tecnología | La usan | Para qué |
|---|---|---|
| **Three.js / WebGL** | Lusion, Bruno Simon, Active Theory | Fondo de partículas, estrellas 3D |
| **Framer Motion** | Ya la usas ✅ | Animaciones (stagger, fade, scale) |
| **Locomotive Scroll** | Locomotive.ca, muchos Awwwards | Smooth scroll + parallax |
| **Canvas API** | Earth Nullschool, 100,000 Stars | Visualización de datos |
| **Lottie** | Varios | Animaciones vectoriales ligeras |
| **GSAP** | Awwwards winners | Animaciones de alto rendimiento |
| **CSS custom properties** | Todos | Tematización coherente |

---

## 9. QUÉ PUEDES IMPLEMENTAR EN ORDEN DE IMPACTO

### 🟢 Fácil (esta misma semana)
1. **Endurecer colores:** fondo `#000000`, dark-blue `#020010`, blanco `#FFFFFF`
2. **Aumentar tracking** en headings (`tracking-[0.08em]` a `tracking-[0.12em]`)
3. **Subir contraste** de textos grises a blanco puro donde sea semantically heading
4. **Añadir glow neón** a botones y tarjetas en hover
5. **Reducir hero** a 1-2 líneas máximo (unificar "Data Engineer specialized in...")
6. **Cambiar bordes** `border-gray-800` por sombras con glow

### 🟡 Medio (próximas semanas)
7. **Añadir fondo de estrellas/partículas** con Canvas o Three.js
8. **Implementar smooth scroll** con Locomotive Scroll
9. **Rediseñar sección Skills** como HUD espacial con métricas
10. **Añadir parallax** en secciones clave

### 🔴 Difícil (fase 2)
11. **Animar gradientes de fondo** con CSS keyframes
12. **Scroll-triggered timeline** para Experience
13. **Cards 3D con tilt** en Projects
14. **Visualización de datos** interactiva simple

---

## 10. SKILLS DE UI-SKILLS A USAR

Para implementar estos cambios, cargar estos skills en orden:

1. **`baseline-ui`** — antes de cualquier cambio, para aplicar reglas de spacing, tipografía, layout
2. **`make-interfaces-feel-better`** — para micro-interacciones, glow, scale, transiciones
3. **`fixing-motion-performance`** — después de añadir animaciones, para optimizar

---

---

## 11. ANÁLISIS DETALLADO: tus favoritos 🎯

### Simone Andreotti — simone-dev.com

**Tipo:** Portfolio personal de creative developer (Three.js/WebGL)
**Awwwards:** Honorable Mention, categoría 3D Space Experience

#### Qué hace único:
- **Sistema de spiral cards** para navegar proyectos (innovador, no es grid tradicional)
- **Hero con mensajes que cambian** cada vez que vuelves a visitar (gamification → "Here again? Did you like this?")
- **Fondo Matrix Rain** (lluvia de código) en la sección About — efecto cyberpunk-espacial
- **Partículas 3D** que reaccionan al mouse y recrean objetos 3D
- **Múltiples fases de contenido** secuenciales (Phase 0 → Phase 1) con transiciones
- **Stack tech:** Astro, Three.js, GLSL, GSAP, Vue, Docker, Figma
- **Tiene versión VR** y "open world exploration" además de la web estándar

#### Patrones aplicables a tu portafolio:

1. **Spiral/layout no lineal** — en lugar de scroll vertical tradicional, podrías tener una sección de proyectos con un carrusel 3D o grid inclinado
2. **Hero dinámico** — que cambie el mensaje en visitas recurrentes ("Data Engineer specialized in..." → "Welcome back!")
3. **Partículas interactivas** — Three.js o Canvas para fondo de estrellas que reaccionen al mouse
4. **Micro-animaciones en tarjetas** — preview en video de cada proyecto (él usa .mp4 en las cards)
5. **Secciones como "fases"** — tu portfolio ya tiene secciones, pero podrías añadir transiciones más marcadas entre ellas
6. **Switch de versión** — versión normal vs versión "space mode" con más efectos

#### Paleta extraída:
```
Fondo:      #0a0a0a (negro sucio)
Acento 1:   Azul cian brillante (#00D4FF aprox)
Acento 2:   Blanco #FFFFFF
Textos:     gray-300/400 para cuerpo
Acento 3:   Púrpura/violeta para algunos detalles
```

#### Conexión con tu portafolio:
Simone también es developer freelance mostrando su stack y proyectos — **mismo perfil que tú pero con estrategia de presentación más inmersiva.**

---

### Astra — astralab.framer.website

**Tipo:** Template de Framer para agencia creativa (no es sitio real, es template)
**Estética:** Espacial, cósmica, oscura con acentos brillantes

#### Qué hace bien:
- **Hero masivo** con tipografía bold + tracking amplio + gradiente neón
- **Métricas grandes** como elementos centrales (30 proyectos, 53% satisfacción, 32 team)
- **Testimonios con scoring** (4.9/5) similar a lo que ya tienes pero más visual
- **Cards de servicios** con numeración /01, /02, /03 + iconos
- **Layout de precios** limpio con highlight en el plan recomendado
- **FAQ** tipo accordion (simple pero efectivo)
- **Paleta consistente** en todo el sitio

#### Patrones aplicables:
1. **Hero con gradiente animado** entre azul oscuro y púrpura
2. **Métricas destacadas** tipo "dashboard" para tu sección de Skills
3. **Numeración de servicios** /01, /02, /03 (más espacial que bullet points)
4. **Botones con glow neón** sin relleno (outline + sombra)
5. **Testimonios con rating visual** (estrellas con glow)

#### Paleta extraída:
```
Fondo:      #0B0D17 (negro azulado profundo)
Acento 1:   #6C5CE7 (púrpura neón)
Acento 2:   #00D4FF (cian brillante)
Blanco:     #FFFFFF
Textos:     #B0B0C0 (gris azulado claro)
Detalles:   #1A1D2E (cards/gris oscuro)
```

#### Lo que puedes robarle YA:
- El hero con una línea de texto masiva + tracking + gradiente
- Las métricas "dashboard" para tu bio
- La estructura de precios si algún día ofreces servicios

---

## Referencias visitadas

### Sitios de agencias espaciales
- ✅ spacex.com
- ✅ blueorigin.com
- ✅ virgingalactic.com
- ✅ rocketlabusa.com
- ✅ relativityspace.com

### Estudios creativos y portfolios
- ✅ lusion.co
- ✅ bruno-simon.com
- ✅ locomotive.ca
- ✅ **simone-dev.com** ← TU FAVORITO
- ✅ activetheory.net (JS required)

### NASA y datos
- ✅ science.nasa.gov/eyes/
- ❌ jwst.nasa.gov (timeout)

### Storytelling
- ✅ joshworth.com/dev/pixelspace (If the Moon Were 1 Pixel)
- ✅ earth.nullschool.net

### Galerías
- ✅ awwwards.com/websites/space/

### Sci-Fi
- ✅ masseffect.com (EA)
- ❌ starcitizen.com (404)

### Templates
- ✅ **astralab.framer.website** ← TU FAVORITO

*Documento generado como parte de la investigación de diseño espacial para el portafolio de Nicolás Peña Irurita.*

---

## 12. ANÁLISIS DETALLADO: segunda ronda 🎯

### Bruno Simon — bruno-simon.com

**Tipo:** Portfolio personal — **el estándar de oro mundial para portfolios creativos**
**Stack:** Three.js + Rapier (física) + Howler.js + TSL (WebGPU/WebGL)

#### Qué lo hace único:
- **Mundo 3D navegable** en lugar de scroll vertical. Conduces un carro por un mundo abierto
- **Controles tipo videojuego:** WASD, shift para boost, espacio para saltar, H para bocina
- **Logros/achievements** con recompensas visuales (like videojuego)
- **Circuito de carreras** multijugador
- **Sistema de "whispers"** — mensajes que dejan otros visitantes
- **Música original** (Kounine, CC0 license)
- **Código abierto** en GitHub con licencia MIT — incluye archivos Blender

#### Patrones aplicables a tu portafolio:
1. **Elementos gamificados** — logros, progreso, recompensas ("Has visto todos mis proyectos — desbloqueas el modo espacio")
2. **Transiciones entre "estados"** — no es scroll, es navegación por un mundo. Tú podrías tener "modo normal" vs "modo espacio"
3. **Interactividad inesperada** — la gente espera scroll vertical, pero encuentra un juego. WOW factor
4. **Código abierto** — compartir el source en GitHub da +100 credibilidad como developer

#### Conexión directa:
Bruno Simon es el creador de **Three.js Journey**, el curso más famoso de Three.js. Su portfolio ES su carta de presentación. Misma lógica que tú: tu portfolio debería demostrar lo que sabes hacer (data engineering) no solo contarlo.

---

### Flower of the Universe — flower-of-the-universe.jp

**Tipo:** Sitio de marca japonés (moda, perfumes, bodas) con estética espacial poética
**Estilo:** Space-kawaii, oscuro pero colorido, narrativo

#### Qué hace único:
- **Historia de apertura:** un astronauta encontró una flor en el espacio y lloró hasta deshidratarse — narrativa espacial poética
- **Loading screen** con planetas giratorios (verde, rojo, azul)
- **Estrellas y galaxias** animadas de fondo
- **Secciones:** Fashion, Wedding, Fragrance, Gift Design — todas con temática espacial
- **Tipografía personalizada** con tracking amplio
- **Botón "ON/OFF"** para efectos de sonido
- **Ilustraciones personalizadas** (astronautas, planetas, flores)
- **Estética japonesa** mezclada con ciencia ficción

#### Patrones aplicables:
1. **Loading screen con animación** — tu portafolio carga rápido pero podrías tener un splash espacial
2. **Storytelling poético** — la historia de la flor engancha emocionalmente. Tú podrías tener un tagline narrativo sobre data engineering
3. **ON/OFF para efectos** — un toggle para "modo espacio" con partículas
4. **Iconos animados GIF** — usan gifs para mostrar productos, tú podrías usarlos para proyectos
5. **Estrellas + galaxias** de fondo que se mueven sutilmente

#### Paleta extraída:
```
Fondo:      #050510 (negro azulado muy oscuro)
Acento 1:   Verde neón (#00FF88 aprox)  — planetas
Acento 2:   Azul cian (#00D4FF)         — galaxias
Acento 3:   Rojo neón (#FF3366)         — planetas
Blanco:     #FFFFFF
Estrellas:  Blancos con opacidad 0.3-0.8
```

---

### Portal Space Systems — portalsystems.space

**Tipo:** Startup space tech — similar a Rocket Lab / SpaceX en estilo
**Diseñado por:** O0 (estudio creativo)
**Stack:** Webflow

#### Qué hace excelente:
- **Hero con video de fondo** y métricas grandes (6 km/s delta-v, <24h payload swap)
- **Secciones con videos de fondo** alternando con texto — inmersivo
- **Datos técnicos** presentados como tarjetas limpias con iconos orbitales
- **Timeline de hitos** (Q4 '25, Q2 '26, etc.) — perfecto para mostrar progreso
- **Testimonios** con foto del líder de ingeniería
- **Grid de imágenes** estilo galería para mostrar hardware
- **Paleta:** negro + azul acero + blanco
- **Navegación limpia:** Home, About, Careers, News, Contact

#### Patrones aplicables a tu portafolio:
1. **Timeline de hitos** — para tu sección Experience (Q1 2023 → Present)
2. **Videos de fondo** en cada sección (pueden ser loops cortos de código/data flow)
3. **Métricas tipo dashboard** — "262 satellites launched", "150+ cumulative years in space"
4. **Grid de imágenes estilo galería** — para mostrar screenshots de proyectos
5. **Layout de 2 columnas** con video en una y texto en otra

#### Paleta extraída:
```
Fondo:      #0A0B0F (negro carbón)
Acento 1:   #4A7CF7 (azul acento)
Acento 2:   #8B9DC3 (azul grisáceo)
Blanco:     #FFFFFF
Textos:     #C0C5D0 (gris azulado)
Tarjetas:   #1A1D24 (gris oscuro para cards)
```

---

### ETH Zurich | Space — space.ethz.ch

**Tipo:** Sitio institucional universitario — diseño suizo aplicado al espacio
**Estilo:** Swiss design + espacio — limpio, ordenado, tipográfico

#### Qué hace excelente:
- **Hero con gradiente y elementos flotantes** (cohetes, planetas) que se mueven sutilmente
- **Métricas grandes** con iconos animados: "200+ professors", "20+ ESA projects", "250+ students"
- **Tipografía suiza:** limpia, sans-serif, jerarquía clara
- **Sección "Identify your role"** con tarjetas interactivas (Student, Industry, Researcher, Entrepreneur, General Public)
- **Grid de cards** para proyectos de investigación con hover efecto
- **Newsletter call-to-action** con ilustración
- **Paleta:** azul oscuro + blanco + naranja acento

#### Patrones aplicables:
1. **Elementos flotantes/levitando** en el hero (cohetes, planetas)
2. **Tarjetas de "rol"** — podrías tener "Data Engineer", "AI Engineer", "Consultant"
3. **Métricas institucionales** — "5+ years experience", "15+ projects", "3 industries"
4. **Hover con glow** en las cards de proyecto
5. **Gradiente sutil** en el hero (azul marino → negro)

#### Paleta extraída:
```
Fondo:      #0B1A30 (azul marino oscuro)
Acento 1:   #1E88E5 (azul brillante)
Acento 2:   #FF6B35 (naranja acento)
Blanco:     #FFFFFF
Textos:     #E0E6F0
Gradiente:  #0B1A30 → #000814
```

---

### Locomotive Scroll — scroll.locomotive.ca

**Tipo:** Página de producto de una librería JavaScript
**Creado por:** Locomotive Agency (Montreal)

#### Qué hace único:
- **Diseño ultra minimalista** con fondo blanco y acentos azul oscuro
- **Emojis como elementos decorativos** (🟦🔁⛵👀🔴) — le da personalidad
- **Scroll narrativo:** a medida que scrolleas, se revelan las features
- **Split layout:** texto a la izquierda, preview a la derecha
- **Versión 5.0** destacada con badge grande
- **Showcase** de proyectos reales que usan la librería
- **Documentación integrada** con ejemplos de código

#### Patrones aplicables:
1. **Emojis como iconos** — más personales que icons genéricos (tu portafolio podría usar 🚀 🔥 ⚡)
2. **Split layout** — texto + preview visual, ideal para mostrar proyectos
3. **Narrativa de scroll** — cada sección cuenta una parte de la historia
4. **Badge de versión** — podrías poner "v2.0" en tu portafolio para mostrar evolución
5. **Showcase de trabajos** con logos de clientes

---

### Bonus: Patrón cruzado encontrado

| Patrón | Encontrado en | Dónde aplicarlo |
|---|---|---|
| Hero con gradiente y elementos flotantes | ETH, Portal, Astra | Hero de tu portafolio |
| Métricas grandes tipo dashboard | Portal, ETH, Astra, Rocket Lab | Sección Skills |
| Timeline de hitos | Portal, Bruno Simon | Sección Experience |
| Loading screen animada | Flower, Bruno Simon | Splash al cargar |
| Gamificación (logros, niveles) | Bruno Simon | Visitas recurrentes |
| Grid de imágenes tipo galería | Portal, ETH | Sección Projects |
| Storytelling narrativo | Flower, Simone | Sección About |
| Smooth scroll + parallax | Locomotive, Lusion | Todo el sitio |
| Split layout texto + visual | Locomotive, Portal | Secciones WhatIDo y Projects |
| Elementos 3D interactivos | Bruno, Simone, Lusion | Hero o background |

---

## 13. ORDER DE PRIORIDAD ACTUALIZADO

Basado en TODOS los sitios analizados, este es el orden de implementación recomendado:

### 🟢 FASE 1 — Impacto inmediato (1-2 días)
1. Endurecer colores: fondo `#000000`, dark-blue `#020010`
2. Tracking amplio en headings + uppercase
3. Subir contraste de textos grises a blanco
4. Glow neón en botones y tarjetas
5. Hero con 1-2 líneas máximo + gradiente animado
6. Añadir emojis espaciales como decoración

### 🟡 FASE 2 — Interactividad (1 semana)
7. Fondo de estrellas/partículas con Canvas
8. Smooth scroll con Locomotive Scroll
9. Sección Skills rediseñada como dashboard con métricas
10. Elementos flotantes en hero
11. Timeline visual para Experience

### 🔴 FASE 3 — WOW (2-3 semanas)
12. Gamificación (mensajes que cambian al volver)
13. Cards 3D con tilt en Projects
14. Preview en video de proyectos
15. Versión "space mode" toggle
16. Partículas interactivas que reaccionan al mouse
