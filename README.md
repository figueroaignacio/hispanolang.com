<p align="center">
  <img src="./public/hl-main-logo.png" alt="HispanoLang" width="180"/>
</p>

<p align="center">
  <strong>The Spanish programming language</strong>
</p>

<p align="center">
  A modern, expressive, and completely Spanish-based programming language.<br/>
  Designed to eliminate language barriers in tech education.
</p>

---

[Español](README.es.md)

---

## About

**HispanoLang** is a modern programming language designed for Spanish-speaking students who want to learn to code. Its syntax is entirely in Spanish, making it ideal for beginners and those who prefer learning in their native language.

### Key Features

- **100% Spanish Keywords**: All language keywords are in Spanish (`variable`, `constante`, `si`, `sino`, `mientras`, `para`, `funcion`, `clase`, etc.)
- **Built-in Commands**: `mostrar` (print), `leer` (input)
- **Built-in Functions**: Type conversion (`entero`, `decimal`, `texto`, `booleano`), math functions (`raiz`, `potencia`, `seno`, `coseno`), arrays, strings, and more
- **OOP Support**: Classes, inheritance (`extiende`), constructors, `este` keyword
- **Interactive Playground**: Online code editor to write and run HispanoLang code
- **Complete Documentation**: Full language reference in Spanish
- **Structured Lessons**: Tutorials with exercises and automatic validation

### Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS 4**

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
│   ├── playground/         # Interactive playground
│   └── documentacion/       # Documentation pages
├── components/             # React components
│   ├── sections/           # Page sections
│   ├── playground/         # Playground components
│   ├── lessons/            # Lesson components
│   └── ui/                 # UI components
├── lib/                    # Core libraries
│   ├── syntax/             # Syntax highlighting
│   ├── validation/         # Exercise validation
│   ├── content/            # Lesson content (MDX)
│   └── lessons/            # Lesson utilities
└── public/                 # Static assets
```

### Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a PR.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Credits

Created by [Nicolás Vázquez](https://github.com/nicvazquezdev).
