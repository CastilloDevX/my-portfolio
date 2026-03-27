# My Portfolio

Portafolio personal construido con React, Vite y Tailwind CSS.

## Scripts

- `npm run dev`: inicia el entorno de desarrollo.
- `npm run build`: genera la version de produccion.
- `npm run lint`: revisa el codigo con ESLint.
- `npm run preview`: sirve el build localmente.

## Estructura

La base del proyecto se reorganizo para que cada capa tenga una responsabilidad clara:

```text
src/
  app/          # composicion principal de la aplicacion
  components/   # piezas reutilizables (cards, layout, motion, ui)
  data/         # contenido centralizado del portafolio
  hooks/        # hooks reutilizables
  sections/     # secciones completas de la landing
  styles/       # estilos globales, fuentes y animaciones
```

## Animaciones

Se agrego un sistema sencillo de reveal on scroll con `IntersectionObserver`.

- Los textos principales aparecen al entrar en viewport.
- Los carouseles tambien se activan al hacer scroll.
- Se respeta `prefers-reduced-motion` para accesibilidad.
