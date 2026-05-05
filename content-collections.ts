import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const docsOrder = [
  'variables',
  'constantes',
  'comentarios',
  'tipos-datos',
  'metodos-strings',
  'template-strings',
  'operadores',
  'condicionales',
  'elegir-caso',
  'bucles',
  'control-flujo-bucles',
  'bucles-avanzados',
  'funciones',
  'funciones-flecha',
  'funciones-matematicas',
  'conversion-tipos',
  'metodos-numericos',
  'listas',
  'objetos',
  'clases',
  'herencia',
  'manejo-errores',
]

const docs = defineCollection({
  name: 'docs',
  directory: '/content',
  include: '**/docs.mdx',
  schema: z.object({
    content: z.string(),
  }),
  transform: (doc) => {
    const slug = doc._meta.path.replace('/docs', '')

    const titleMatch = doc.content.match(
      /^#\s+(?:\p{Emoji_Presentation}|\p{Emoji}\uFE0F?)\s*(.+)$/mu,
    )
    const title = titleMatch ? titleMatch[1].trim() : slug

    const order = docsOrder.indexOf(slug)

    return {
      slug,
      title,
      order: order >= 0 ? order : 999,
      content: doc.content,
    }
  },
})

export default defineConfig({
  content: [docs],
})
