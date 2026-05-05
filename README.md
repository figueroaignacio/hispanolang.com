# HispanoLang Website

<p align="center">
  <img src="./public/hl-main-logo.png" alt="HispanoLang" width="180"/>
</p>

<p align="center">
  <strong>The official website and playground for HispanoLang</strong>
</p>

<p align="center">
  A modern, interactive platform to learn and practice HispanoLang — the Spanish-based programming language.<br/>
  Built with Next.js, TypeScript, and Tailwind CSS.
</p>

---

[Español](README.es.md)

---

## About This Project

This is the official repository for the **HispanoLang website** — an interactive learning platform that includes:

- **Online Playground**: Write and run HispanoLang code directly in the browser
- **Interactive Lessons**: Structured tutorials with exercises and automatic validation
- **Complete Documentation**: Full language reference in Spanish

### Key Features

- **Real-time Code Execution**: Run HispanoLang code directly in the browser
- **Syntax Highlighting**: Custom syntax highlighter for Spanish keywords
- **Progress Tracking**: Track your learning progress through lessons
- **Responsive Design**: Works on desktop and mobile devices

### Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS 4**
- **MDX** for documentation

### Getting Started

#### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, yarn, or bun

#### Installation

```bash
# Clone the repository
git clone https://github.com/nicvazquezdev/hispanolang.com.git
cd hispanolang.com

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Available Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

### Project Structure

```
hispanolang.com/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── playground/         # Interactive playground page
│   └── documentacion/       # Documentation pages
├── components/             # React components
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   ├── playground/         # Playground components (Editor, Output, etc.)
│   ├── lessons/            # Lesson components (Cards, Progress, etc.)
│   ├── docs/              # Documentation components
│   └── ui/                # Reusable UI components
├── lib/                    # Core libraries
│   ├── syntax/            # Syntax highlighting system
│   ├── validation/        # Exercise validation system
│   ├── content/           # Lesson content (MDX + lesson.ts)
│   └── lessons/           # Lesson utilities
└── public/                 # Static assets
```

### Related Repositories

- [hispano-lang](https://github.com/nicvazquezdev/hispano-lang) - The HispanoLang compiler/interpreter (npm package)

### Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a PR.

### Credits

Created by [Nicolás Vázquez](https://github.com/nicvazquezdev).
