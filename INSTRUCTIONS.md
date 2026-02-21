# 📋 Instrucciones de Uso - Portafolio Carlos Ramírez

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

El sitio estará disponible en: `http://localhost:4321`

### 3. Compilar para producción
```bash
npm run build
```

### 4. Vista previa de la compilación
```bash
npm run preview
```

---

## 📝 Cómo Editar el Contenido

### ✏️ Editar Información Personal y Proyectos

**Archivo principal:** `src/data/portfolio.ts`

Este archivo contiene TODA la información del portafolio. Simplemente edita los valores para personalizar:

#### 1. **Información Personal**
```typescript
export const personalInfo = {
  name: 'Carlos Ramírez',  // ← Edita aquí
  email: 'carlos.ramv97@gmail.com',  // ← Tu email
  github: 'https://github.com/carlosramv9',  // ← Tu GitHub
  linkedin: 'https://www.linkedin.com/in/carlos-ramirezv97/',  // ← Tu LinkedIn
  cv: '/assets/cv.pdf',  // ← Asegúrate de colocar tu CV en public/assets/cv.pdf
  // ...
};
```

#### 2. **Fortalezas (Strengths)**
```typescript
export const strengths = [
  {
    title: {
      es: 'Tu fortaleza en español',
      en: 'Your strength in English'
    },
    description: {
      es: 'Descripción en español...',
      en: 'Description in English...'
    },
    icon: '🏢'  // ← Emoji que represente la fortaleza
  },
  // Agrega más fortalezas aquí
];
```

#### 3. **Proyectos**
```typescript
export const projects = [
  {
    id: 1,
    name: {
      es: 'Nombre del proyecto en español',
      en: 'Project name in English'
    },
    summary: {
      es: 'Resumen breve...',
      en: 'Brief summary...'
    },
    stack: ['React', 'Node.js', 'PostgreSQL'],  // ← Tecnologías usadas
    role: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Developer'
    },
    highlights: [
      {
        es: 'Logro 1 en español',
        en: 'Achievement 1 in English'
      },
      // Más logros...
    ],
    metrics: [
      {
        label: { es: 'Etiqueta', en: 'Label' },
        value: '~100 usuarios'
      },
      // Más métricas...
    ],
    confidential: false,  // ← true si el proyecto es confidencial
    link: null  // ← URL del proyecto si es público
  },
  // Agrega más proyectos aquí
];
```

#### 4. **Habilidades (Skills)**
```typescript
export const skillCategories = [
  {
    category: { es: 'Frontend', en: 'Frontend' },
    skills: ['React', 'Next.js', 'Tailwind']  // ← Edita las tecnologías
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    skills: ['Node.js', '.NET', 'Python']
  },
  // Agrega más categorías...
];
```

#### 5. **Experiencia**
```typescript
export const experience = [
  {
    id: 1,
    company: {
      es: 'Nombre de la empresa',
      en: 'Company name'
    },
    position: {
      es: 'Cargo en español',
      en: 'Position in English'
    },
    period: {
      es: '2022 - Presente',
      en: '2022 - Present'
    },
    description: {
      es: 'Descripción del trabajo...',
      en: 'Job description...'
    },
    achievements: [
      {
        es: 'Logro 1',
        en: 'Achievement 1'
      },
      // Más logros...
    ]
  },
  // Agrega más experiencias...
];
```

---

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   ├── assets/
│   │   └── cv.pdf          ← COLOCA TU CV AQUÍ
│   ├── favicon.svg
│   └── og-image.png        ← Imagen para redes sociales (opcional)
├── src/
│   ├── components/         ← Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── portfolio.ts    ← ⭐ EDITA ESTE ARCHIVO
│   ├── layouts/
│   │   └── Layout.astro    ← Layout principal con SEO
│   ├── pages/
│   │   ├── index.astro     ← Versión en español (/)
│   │   └── en/
│   │       └── index.astro ← Versión en inglés (/en)
│   └── styles/
│       └── global.css      ← Estilos globales Tailwind
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

---

## 🎨 Personalización de Colores

Si quieres cambiar el esquema de colores, edita `src/styles/global.css` y los valores de Tailwind en los componentes.

**Paleta actual:**
- Primary: `blue-600` → Azul principal
- Secondary: `violet-500` → Violeta
- Background: `slate-950` → Fondo oscuro
- Surface: `slate-800` → Superficies
- Success: `emerald-500` → Verde éxito

Para cambiar, busca y reemplaza las clases de Tailwind (ej: `bg-blue-600` → `bg-purple-600`).

---

## 🌐 Multiidioma

El sitio es **bilingüe** (Español/Inglés):

- **Español (default):** `http://localhost:4321/`
- **Inglés:** `http://localhost:4321/en/`

Todos los textos se gestionan en `src/data/portfolio.ts` con la estructura:
```typescript
{
  es: 'Texto en español',
  en: 'Text in English'
}
```

---

## 📦 Deployment

### Vercel (Recomendado)
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio
3. Vercel detectará automáticamente que es un proyecto Astro
4. ¡Deploy automático!

### Netlify
1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
```bash
# Edita astro.config.mjs:
export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/nombre-repo'
});

# Luego:
npm run build
# Sube la carpeta dist/ a la rama gh-pages
```

---

## ✅ Checklist Pre-Deploy

- [ ] Actualiza `src/data/portfolio.ts` con tu información
- [ ] Coloca tu CV en `public/assets/cv.pdf`
- [ ] Actualiza favicon en `public/favicon.svg`
- [ ] (Opcional) Agrega imagen Open Graph en `public/og-image.png` (1200x630px)
- [ ] Verifica que todos los links funcionen (GitHub, LinkedIn, Email)
- [ ] Prueba la versión en inglés `/en`
- [ ] Compila y revisa: `npm run build && npm run preview`

---

## 🛠️ Tecnologías Usadas

- **Astro** 5.17+ → Framework estático
- **Tailwind CSS** 4.2+ → Estilos
- **TypeScript** → Tipado
- **Google Fonts** → Inter + JetBrains Mono

---

## 📞 Soporte

Si tienes problemas o preguntas, revisa:
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind](https://tailwindcss.com/docs)

---

## 📄 Licencia

Este portafolio fue creado para Carlos Ramírez. Siéntete libre de usarlo como base para tu propio portafolio.

---

**¡Éxito con tu portafolio! 🚀**
