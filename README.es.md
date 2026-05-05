# HispanoLang Sitio Web

<p align="center">
  <img src="/public/hl-main-logo.png" alt="HispanoLang" width="180"/>
</p>

<p align="center">
  <strong>El sitio web oficial y playground de HispanoLang</strong>
</p>

<p align="center">
  Una plataforma moderna e interactiva para aprender y practicar HispanoLang — el lenguaje de programación basado en español.<br/>
  Construido con Next.js, TypeScript y Tailwind CSS.
</p>

---

## Acerca de Este Proyecto

Este es el repositorio oficial del **sitio web de HispanoLang** — una plataforma de aprendizaje interactiva que incluye:

- **Playground en Línea**: Escribe y ejecuta código HispanoLang directamente en el navegador
- **Lecciones Interactivas**: Tutoriales estructurados con ejercicios y validación automática
- **Documentación Completa**: Referencia completa del lenguaje en español

### Características Principales

- **Ejecución de Código en Tiempo Real**: Ejecuta código HispanoLang directamente en el navegador
- **Resaltado de Sintaxis**: Resaltador de sintaxis personalizado para palabras clave en español
- **Seguimiento de Progreso**: Rastrea tu progreso de aprendizaje a través de las lecciones
- **Diseño Responsivo**: Funciona en dispositivos de escritorio y móviles

### Tecnologías

- **Next.js 15** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS 4**
- **MDX** para documentación

### Primeros Pasos

#### Requisitos Previos

- Node.js 18+
- pnpm (recomendado), npm, yarn o bun

#### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nicvazquezdev/hispanolang.com.git
cd hispanolang.com

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

#### Scripts Disponibles

| Comando      | Descripción                    |
| ------------ | ------------------------------ |
| `pnpm dev`   | Iniciar servidor de desarrollo |
| `pnpm build` | Compilar para producción       |
| `pnpm start` | Iniciar servidor de producción |
| `pnpm lint`  | Ejecutar ESLint                |

### Estructura del Proyecto

```
hispanolang.com/
├── app/                    # Páginas de Next.js App Router
│   ├── page.tsx            # Página principal
│   ├── playground/         # Página del playground interactivo
│   └── documentacion/      # Páginas de documentación
├── components/            # Componentes de React
│   ├── sections/          # Secciones de página (Hero, Features, etc.)
│   ├── playground/        # Componentes del playground (Editor, Output, etc.)
│   ├── lessons/           # Componentes de lecciones (Cards, Progress, etc.)
│   ├── docs/              # Componentes de documentación
│   └── ui/                # Componentes de interfaz reutilizables
├── lib/                   # Bibliotecas principales
│   ├── syntax/            # Sistema de resaltado de sintaxis
│   ├── validation/        # Sistema de validación de ejercicios
│   ├── content/          # Contenido de lecciones (MDX + lesson.ts)
│   └── lessons/           # Utilidades de lecciones
└── public/                # Recursos estáticos
```

### Repositorios Relacionados

- [hispano-lang](https://github.com/nicvazquezdev/hispano-lang) - El compilador/intérprete de HispanoLang (paquete npm)

### Contribuir

¡Las contribuciones son bienvenidas! Por favor lee nuestras [guías de contribución](CONTRIBUTING.md) antes de enviar un PR.

### Créditos

Creado por [Nicolás Vázquez](https://github.com/nicvazquezdev).
