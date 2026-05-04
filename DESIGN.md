# Design System: Hispanolang.com

## 1. Visual Theme & Atmosphere

A deep, meditative dark theme inspired by midnight skies. The palette creates an immersive, focused environment ideal for learning Spanish grammar and syntax. The atmosphere feels sophisticated yet approachable—neither stark nor playful, but distinctly modern with a quiet confidence. The gradient background (starting from near-black #020617 through #0f172a) adds subtle depth without distraction.

## 2. Color Palette & Roles

| Color Name | Hex Code | Functional Role |
|------------|---------|-----------------|
| Midnight Depth | #0f172a | Primary background, page foundation |
| Abyss Black | #020617 | Gradient start, header/footer backgrounds |
| Cloud White | #f1f5f9 | Primary text, headings, high-contrast content |
| Slate Border | #334155 | Dividers, section separators, input borders |
| Slate Track | #1e293b | Scrollbar track, code block backgrounds |
| Stone Thumb | #475569 | Scrollbar thumb default state |
| Iron Thumb | #64748b | Scrollbar thumb hover state |
| Selection Indigo | #6366f1 | Text selection highlight |
| Code Lavender | #a5b4fc | Inline code text, syntax highlighting |
| Link Violet | #818cf8 | Hyperlink default state |
| Hover Violet | #a5b4fc | Hyperlink hover state |
| Muted Slate | #cbd5e1 | Body paragraph text in documentation |

## 3. Typography Rules

- **Font Family:** Geist Sans (variable) for body text—clean, geometric, highly legible; Geist Mono for code blocks
- **Headings:** 
  - H1: 2rem, weight 700, tight line-height (1.2)
  - H2: 1.5rem, weight 600, with bottom border divider
  - H3: 1.25rem, weight 600
- **Body:** 
  - Paragraphs: 1rem, weight 400, relaxed line-height (1.7)
  - Lists: Disc bullets, 1.5rem left padding, 0.5rem item spacing
- **Code:** 0.875em, monospace, inline padding 0.125rem 0.375rem

## 4. Component Stylings

### Buttons
- Shape: Subtle rounded corners (0.25rem / rounded-sm)
- Default state: No visible fill, border-only or text-based

### Cards/Containers
- Corner roundness: Not specified in globals—use Tailwind defaults
- Background: Inherits from parent (transparent)
- Shadows: None defined at global level—component-level only

### Inputs/Forms
- Border style: 1px solid #334155
- Background: Transparent or #1e293b for code blocks
- Focus: No visible focus ring (outline: none) — requires manual focus styles

### Scrollbars
- Width: 8px (narrow, unobtrusive)
- Track: #1e293b
- Thumb: #475569 default, #64748b hover
- Border-radius: 4px

### Links
- Default: #818cf8 (violet) with underline
- Hover: Lighter #a5b4fc (lavender)

### Code Blocks
- Background: #1e293b
- Text: #a5b4fc
- Padding: Full padding, not inline
- Corner radius: 0.25rem

## 5. Layout Principles

- **Whitespace:** Generous vertical spacing (2rem+ between sections)
- **Margins:** 1rem baseline for content, 2.5rem for major divisions
- **Grid alignment:** Implicit—content flows naturally with max-width constraints
- **Borders as structure:** Heavy use of subtle #334155 borders for section division
- **Scroll behavior:** Smooth scroll enabled globally