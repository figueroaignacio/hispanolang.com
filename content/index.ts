import { LessonContent } from '@/lib/lessons/types'

// Lecciones migradas
import { lesson as buclesAvanzadosLesson } from './documentacion/bucles-avanzados/lesson'
import { lesson as buclesLesson } from './documentacion/bucles/lesson'
import { lesson as clasesLesson } from './documentacion/clases/lesson'
import { lesson as comentariosLesson } from './documentacion/comentarios/lesson'
import { lesson as condicionalesLesson } from './documentacion/condicionales/lesson'
import { lesson as constantesLesson } from './documentacion/constantes/lesson'
import { lesson as controlFlujoBuclesLesson } from './documentacion/control-flujo-bucles/lesson'
import { lesson as conversionTiposLesson } from './documentacion/conversion-tipos/lesson'
import { lesson as ejemplosAvanzadosLesson } from './documentacion/ejemplos-avanzados/lesson'
import { lesson as elegirCasoLesson } from './documentacion/elegir-caso/lesson'
import { lesson as funcionesFlechaLesson } from './documentacion/funciones-flecha/lesson'
import { lesson as funcionesMatematicasLesson } from './documentacion/funciones-matematicas/lesson'
import { lesson as funcionesLesson } from './documentacion/funciones/lesson'
import { lesson as herenciaLesson } from './documentacion/herencia/lesson'
import { lesson as listasLesson } from './documentacion/listas/lesson'
import { lesson as manejoErroresLesson } from './documentacion/manejo-errores/lesson'
import { lesson as metodosNumericosLesson } from './documentacion/metodos-numericos/lesson'
import { lesson as metodosStringsLesson } from './documentacion/metodos-strings/lesson'
import { lesson as objetosLesson } from './documentacion/objetos/lesson'
import { lesson as operadoresLesson } from './documentacion/operadores/lesson'
import { lesson as templateStringsLesson } from './documentacion/template-strings/lesson'
import { lesson as tiposDatosLesson } from './documentacion/tipos-datos/lesson'
import { lesson as variablesLesson } from './documentacion/variables/lesson'

export const lessonsContent: Record<string, LessonContent> = {
  variables: variablesLesson,
  constantes: constantesLesson,
  comentarios: comentariosLesson,
  'tipos-datos': tiposDatosLesson,
  'metodos-strings': metodosStringsLesson,
  'template-strings': templateStringsLesson,
  operadores: operadoresLesson,
  condicionales: condicionalesLesson,
  'elegir-caso': elegirCasoLesson,
  bucles: buclesLesson,
  'control-flujo-bucles': controlFlujoBuclesLesson,
  'bucles-avanzados': buclesAvanzadosLesson,
  funciones: funcionesLesson,
  'funciones-flecha': funcionesFlechaLesson,
  'funciones-matematicas': funcionesMatematicasLesson,
  'conversion-tipos': conversionTiposLesson,
  'metodos-numericos': metodosNumericosLesson,
  listas: listasLesson,
  objetos: objetosLesson,
  clases: clasesLesson,
  herencia: herenciaLesson,
  'manejo-errores': manejoErroresLesson,
  'ejemplos-avanzados': ejemplosAvanzadosLesson,
}

export function getLessonContent(id: string): LessonContent | null {
  return lessonsContent[id] || null
}

export function getAllLessonIds(): string[] {
  return Object.keys(lessonsContent)
}
