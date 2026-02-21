# 🚀 Portafolio Profesional - Carlos Ramírez

Portafolio web profesional y moderno construido con **Astro** + **Tailwind CSS**.

[![Astro](https://img.shields.io/badge/Astro-5.17+-ff5d01?style=flat&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2+-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## ✨ Características

- 🎨 **Diseño Moderno** - UI oscura con gradientes y animaciones sutiles
- 🌍 **Bilingüe** - Español e Inglés (ES/EN)
- 📱 **Responsive** - Mobile-first design
- ⚡ **Performance** - Carga ultra rápida con Astro
- ♿ **Accesibilidad** - Semántica HTML y ARIA labels
- 🎯 **SEO Optimizado** - Meta tags, OpenGraph, sitemap
- 🔧 **Fácil de Editar** - Todos los datos en un solo archivo TypeScript

---

## 📦 Instalación Rápida

```bash
# 1. Clonar o descargar el proyecto
cd portafolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:4321
```

---

## 📝 Editar Contenido

Todo el contenido se gestiona desde un único archivo:

**`src/data/portfolio.ts`**

Solo edita este archivo para cambiar:
- ✅ Información personal (nombre, email, links)
- ✅ Proyectos (título, descripción, stack, métricas)
- ✅ Habilidades y categorías
- ✅ Experiencia laboral
- ✅ Fortalezas y servicios

📖 **Ver instrucciones completas:** [INSTRUCTIONS.md](./INSTRUCTIONS.md)

---

## 🏗️ Estructura

```
portafolio/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── data/
│   │   └── portfolio.ts # ⭐ EDITA ESTE ARCHIVO
│   ├── layouts/         # Layout principal
│   ├── pages/
│   │   ├── index.astro  # Versión ES
│   │   └── en/          # Versión EN
│   └── styles/          # Tailwind CSS
├── public/
│   ├── assets/          # Coloca tu CV aquí
│   └── favicon.svg
└── INSTRUCTIONS.md      # Guía completa de uso
```

---

## 🚀 Comandos

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run preview` | Vista previa de producción |

---

## 🎨 Secciones Incluidas

1. **Hero** - Presentación principal con CTA
2. **About Me** - Descripción, servicios y fortalezas
3. **Experience** - Timeline de experiencia laboral
4. **Projects** - Tarjetas de proyectos destacados
5. **Skills** - Categorías de habilidades técnicas
6. **Contact** - Links de contacto y CTA final
7. **Footer** - Información y links sociales

---

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecta tu repo en [Vercel](https://vercel.com)
2. Deploy automático ✅

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

---

## 🛠️ Stack Tecnológico

- [Astro](https://astro.build) - Framework estático
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- [TypeScript](https://www.typescriptlang.org/) - Tipado
- [Google Fonts](https://fonts.google.com) - Inter + JetBrains Mono

---

## 📄 Licencia

Creado para **Carlos Ramírez**. Libre para uso personal.

---

**¿Necesitas ayuda?** Revisa [INSTRUCTIONS.md](./INSTRUCTIONS.md) para la guía completa.
