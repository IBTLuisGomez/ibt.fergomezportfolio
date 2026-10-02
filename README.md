# Portafolio · Luis Fernando Mendoza Gómez

Monorepo con dos módulos independientes y débilmente acoplados: un sitio estático (portafolio) y un backend en construcción.

```
Portafoliopersonal/
├── index.html          ← sitio estático (se sirve desde la raíz)
├── assets/
│   ├── css/styles.css  ← estilos del sitio
│   └── js/main.js      ← lógica de UI (tabs, idiomas, carruseles)
├── img/                ← imágenes del sitio, organizadas por sección
├── docs/
│   ├── DESIGN.md        ← sistema de diseño (colores, tipografía, componentes)
│   └── cv/               ← CVs en PDF (versiones estándar y ATS)
└── backend/              ← monolito modular Java/Spring Boot (arquitectura hexagonal)
```

## Frontend (`index.html` + `assets/` + `img/` + `docs/cv`)
Sitio estático sin build step: HTML, CSS y JS planos, pensado para desplegarse tal cual (p. ej. GitHub Pages desde la raíz del repo). No depende del backend.

## Backend (`backend/`)
Monolito modular con arquitectura hexagonal (`domain / application / infrastructure` por feature). Ver [`backend/README.md`](backend/README.md) para la estructura detallada y las reglas de cada capa.
