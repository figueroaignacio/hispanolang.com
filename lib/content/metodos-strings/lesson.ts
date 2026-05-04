import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '🔤', text: 'Lección 5' },
  title: 'Métodos de Strings en',
  titleGradient: ' HispanoLang',
  description: 'Aprende a editar texto como en Microsoft Word',
  prev: { url: '/lecciones/tipos-datos', title: 'Tipos de Datos' },
  next: { url: '/lecciones/template-strings', title: 'Template Strings' },
  steps: [
    {
      title: 'Herramientas para Editar Texto',
      content:
        "En Microsoft Word tienes herramientas para editar texto: contar caracteres, cambiar a mayúsculas, buscar y reemplazar.\n\nEn programación, cada texto tiene estas mismas herramientas incorporadas. Se llaman 'métodos'.",
      code: `variable documento = "Mi Documento Importante"

mostrar documento
mostrar "Caracteres: " + documento.longitud()`,
      explanation:
        'Los métodos se escriben después del texto usando un punto (.)\n\n`.longitud()` es como el contador de caracteres en Word (abajo a la izquierda). Te dice cuántos caracteres tiene tu texto.\n\nRecuerda: los métodos llevan paréntesis () al final.',
      challenge:
        "Crea una variable `titulo` con el texto 'Aprendiendo HispanoLang'. Muestra el título y luego muestra cuántos caracteres tiene usando `.longitud()`.",
      validation: {
        requiredCode: ['/titulo.*=/', '/.longitud\\(\\)/', '/mostrar/'],
      },
    },
    {
      title: 'El Botón de Mayúsculas (Aa)',
      content:
        "En Word hay un botón 'Aa' que cambia el texto a mayúsculas o minúsculas. En programación usamos `.mayusculas()` y `.minusculas()`.",
      code: `variable titulo = "mi documento importante"
variable grito = "no me gusta esto"

mostrar titulo.mayusculas()
mostrar grito.mayusculas()

variable email = "USUARIO@EMAIL.COM"
mostrar email.minusculas()`,
      explanation:
        '`.mayusculas()` convierte TODO el texto a MAYÚSCULAS\n`.minusculas()` convierte todo el texto a minúsculas\n\nImportante: el texto original NO cambia. Estos métodos crean un texto nuevo transformado.\n\nÚtil para normalizar emails o usernames.',
      challenge:
        "Crea una variable `ciudad` con 'buenos aires'. Muéstrala en mayúsculas. Luego crea una variable `pais` con 'ARGENTINA' y muéstrala en minúsculas.",
      validation: {
        requiredCode: [
          '/ciudad/',
          '/.mayusculas\\(\\)/',
          '/pais/',
          '/.minusculas\\(\\)/',
          '/mostrar/',
        ],
        expectedOutputs: ['/BUENOS AIRES/i', '/argentina/i'],
      },
    },
    {
      title: 'Limpiando Espacios Extra',
      content:
        'Cuando copias texto de internet y lo pegas en Word, a veces trae espacios extra al inicio o al final.\n\nEl método `.recortar()` elimina esos espacios automáticamente.',
      code: `variable textoCopiado = "   Hola mundo   "
variable email = "  juan@email.com  "

mostrar "Con espacios: '" + textoCopiado + "'"
mostrar "Sin espacios: '" + textoCopiado.recortar() + "'"

mostrar email.recortar()`,
      explanation:
        '`.recortar()` elimina espacios al inicio y al final del texto.\n\nNO elimina espacios del medio, solo de los bordes.\n\nMuy útil cuando el usuario copia/pega información en formularios.',
      challenge:
        "Crea una variable `nombreSucio` con el texto '   María González   ' (con espacios al inicio y final). Usa `.recortar()` para limpiarla y muestra el resultado limpio.",
      validation: {
        requiredCode: ['/nombreSucio/', '/.recortar\\(\\)/', '/mostrar/'],
      },
    },
    {
      title: 'Buscar en el Texto (Ctrl+F)',
      content:
        'En Word usas Ctrl+F para buscar una palabra en tu documento. En programación usamos `.incluye()` para verificar si un texto contiene algo.',
      code: `variable documento = "Introducción a la Programación"
variable email = "usuario@gmail.com"
variable archivo = "reporte.pdf"

mostrar documento.incluye("Programación")
mostrar documento.incluye("Python")

mostrar email.incluye("@")
mostrar archivo.terminaCon(".pdf")
mostrar archivo.empiezaCon("reporte")`,
      explanation:
        '`.incluye(texto)` busca si contiene ese texto → retorna verdadero o falso\n`.empiezaCon(texto)` verifica si comienza con ese texto\n`.terminaCon(texto)` verifica si termina con ese texto\n\nEstos métodos retornan verdadero o falso, no modifican el texto.\n\nÚtil para validar: ¿el email tiene @? ¿el archivo es .pdf?',
      challenge:
        "Crea una variable `sitioWeb` con 'https://hispanolang.com'. Verifica:\n1. Si incluye 'hispano'\n2. Si empieza con 'https://'\n3. Si termina con '.com'\nMuestra los tres resultados.",
      validation: {
        requiredCode: [
          '/sitioWeb/',
          '/.incluye\\(/',
          '/.empiezaCon\\(/',
          '/.terminaCon\\(/',
          '/mostrar/',
        ],
        expectedOutputs: ['/verdadero/'],
      },
    },
    {
      title: 'Buscar y Reemplazar (Ctrl+H)',
      content:
        "En Word, Ctrl+H abre 'Buscar y Reemplazar': encuentra una palabra y la cambia por otra.\n\nEn programación usamos `.reemplazar()`.",
      code: `variable documento = "Hola mundo, mundo feliz"
variable correccion = "El perro es un aninal leal"
variable telefono = "123-456-7890"

mostrar documento.reemplazar("mundo", "universo")

mostrar correccion.reemplazar("aninal", "animal")

mostrar telefono.reemplazar("-", "")`,
      explanation:
        '`.reemplazar(buscar, reemplazo)` busca TODAS las apariciones y las cambia.\n\nSi la palabra aparece 3 veces, las cambia las 3 veces.\n\nEl texto original NO cambia, se crea uno nuevo.\n\nSi no encuentra la palabra, retorna el texto sin cambios.',
      challenge:
        "Crea una variable `frase` con 'Me gusta Python y Python es genial'. Usa `.reemplazar()` para cambiar 'Python' por 'HispanoLang' y muestra el resultado.",
      validation: {
        requiredCode: ['/frase/', '/.reemplazar\\(/', '/mostrar/'],
        expectedOutputs: ['/HispanoLang/'],
      },
    },
    {
      title: 'Combinando Herramientas',
      content:
        'En Word a veces usas varias herramientas seguidas: quitas espacios, luego cambias a minúsculas, luego buscas y reemplazas.\n\nEn programación puedes encadenar métodos (usarlos uno tras otro).',
      code: `variable emailSucio = "  USUARIO@EMAIL.COM  "

variable emailLimpio = emailSucio.recortar().minusculas()
mostrar emailLimpio

variable titulo = "   MI DOCUMENTO   "
variable limpio = titulo.recortar().minusculas()
mostrar limpio`,
      explanation:
        'Puedes encadenar métodos usando varios puntos seguidos.\n\nSe ejecutan de izquierda a derecha:\n1. `.recortar()` quita espacios\n2. `.minusculas()` convierte a minúsculas\n\nCada método crea un nuevo texto que el siguiente método usa.\n\nEs como una cadena de ediciones en Word.',
      challenge:
        "Crea una variable `datosUsuario` con '   MARIA_DEV   ' (con espacios y mayúsculas). Encadena `.recortar()` y `.minusculas()` para limpiar y normalizar. Muestra el resultado.",
      validation: {
        requiredCode: ['/datosUsuario/', '/.recortar\\(\\).*\\.minusculas\\(\\)/', '/mostrar/'],
        expectedOutputs: ['/maria_dev/'],
      },
    },
    {
      title: 'Procesador de Texto Completo',
      content:
        'Ahora combina todas las herramientas que aprendiste para procesar y validar texto como un profesional.',
      code: `variable nombreUsuario = "  JUAN_PEREZ  "
variable usuario = nombreUsuario.recortar().minusculas()
mostrar "Usuario limpio: " + usuario

variable email = "Maria@Gmail.COM"
variable emailNormal = email.minusculas()
mostrar "Email guardado: " + emailNormal

variable texto = "Este texto es importante"
mostrar "Longitud: " + texto.longitud()
mostrar "Tiene 'importante': " + texto.incluye("importante")

variable documento = "Error de tipeo"
variable corregido = documento.reemplazar("tipeo", "ortografía")
mostrar corregido`,
      explanation:
        'En el mundo real usas estos métodos para:\n\n• Limpiar datos: `.recortar()` quita espacios\n• Normalizar: `.minusculas()` para emails/usernames\n• Validar: `.incluye()`, `.empiezaCon()`, `.terminaCon()`\n• Contar: `.longitud()` para límites de caracteres\n• Corregir: `.reemplazar()` para autocorrección',
      challenge:
        "Simula un formulario de registro:\n• Variable `emailFormulario` = '  Usuario@Email.COM  '\n• Límpialo con `.recortar()` y `.minusculas()`\n• Verifica que incluya '@' con `.incluye()`\n• Verifica que termine en '.com' con `.terminaCon()`\n• Muestra el email limpio y los dos resultados de verificación",
      summary:
        '🎉 ¡Felicitaciones! Ahora dominas las herramientas de edición de texto:\n\n• `.longitud()` - Contar caracteres\n• `.mayusculas()` - Convertir a MAYÚSCULAS\n• `.minusculas()` - convertir a minúsculas\n• `.recortar()` - Quitar espacios de los bordes\n• `.incluye()` - Buscar si contiene texto\n• `.empiezaCon()` - Verificar inicio\n• `.terminaCon()` - Verificar final\n• `.reemplazar()` - Buscar y reemplazar\n• Encadenar - Combinar métodos\n\n💡 ¡Siguiente: aprende template strings para escribir texto más fácilmente!',
      validation: {
        requiredCode: [
          '/emailFormulario/',
          '/.recortar\\(\\)/',
          '/.minusculas\\(\\)/',
          '/.incluye\\(/',
          '/.terminaCon\\(/',
          '/mostrar/',
        ],
        expectedOutputs: ['/usuario@email.com/', '/verdadero/'],
      },
    },
  ],
};
