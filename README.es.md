<p align="center">
  <img src="./public/hl-main-logo.png" alt="HispanoLang" width="180"/>
</p>

<p align="center">
  <strong>El lenguaje de programación en español</strong>
</p>

<p align="center">
  Un lenguaje de programación moderno, expresivo y completamente en español.<br/>
  Diseñado para eliminar las barreras del idioma en la educación tecnológica.
</p>

---

## Acerca de

**HispanoLang** es un lenguaje de programación moderno diseñado para estudiantes de habla hispana que desean aprender a programar. Su sintaxis está completamente en español, lo que lo hace ideal para principiantes y quienes prefieren aprender en su idioma nativo.

## Características Principales

- **Palabras Clave 100% en Español**: Todas las palabras clave del lenguaje están en español (`variable`, `constante`, `si`, `sino`, `mientras`, `para`, `funcion`, `clase`, etc.)
- **Comandos Integrados**: `mostrar` (imprimir), `leer` (entrada)
- **Funciones Integradas**: Conversión de tipos (`entero`, `decimal`, `texto`, `booleano`), funciones matemáticas (`raiz`, `potencia`, `seno`, `coseno`), arrays, strings y más
- **Soporte POO**: Clases, herencia (`extiende`), constructores, palabra clave `este`
- **Playground Interactivo**: Editor de código en línea para escribir y ejecutar código HispanoLang
- **Documentación Completa**: Referencia completa del lenguaje en español
- **Lecciones Estructuradas**: Tutoriales con ejercicios y validación automática

## Tecnologías

- **Next.js 15** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS 4**

## Primeros Pasos

### Requisitos Previos

- Node.js 18+
- pnpm (recomendado), npm, yarn o bun

### Instalación

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

### Scripts Disponibles

| Comando      | Descripción                    |
| ------------ | ------------------------------ |
| `pnpm dev`   | Iniciar servidor de desarrollo |
| `pnpm build` | Compilar para producción       |
| `pnpm start` | Iniciar servidor de producción |
| `pnpm lint`  | Ejecutar ESLint                |

## Estructura del Proyecto

```
hispanolang.com/
├── app/                    # Páginas de Next.js App Router
│   ├── page.tsx            # Página principal
│   ├── playground/         # Playground interactivo
│   └── documentacion/      # Páginas de documentación
├── components/            # Componentes de React
│   ├── sections/           # Secciones de página
│   ├── playground/        # Componentes del playground
│   ├── lessons/           # Componentes de lecciones
│   └── ui/                # Componentes de interfaz
├── lib/                   # Bibliotecas principales
│   ├── syntax/            # Resaltado de sintaxis
│   ├── validation/        # Validación de ejercicios
│   ├── content/           # Contenido de lecciones (MDX)
│   └── lessons/           # Utilidades de lecciones
└── public/                # Recursos estáticos
```

## Contribuir

¡Las contribuciones son bienvenidas! Por favor lee nuestras [guías de contribución](CONTRIBUTING.md) antes de enviar un PR.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Créditos

Creado por [Nicolás Vázquez](https://github.com/nicvazquezdev).
