import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '🔒', text: 'Lección 2' },
  title: 'Constantes en',
  titleGradient: ' HispanoLang',
  description: 'Aprende sobre valores que nunca cambian, como las reglas de Twitter/X',
  prev: { url: '/lecciones/variables', title: 'Variables' },
  next: { url: '/lecciones/comentarios', title: 'Comentarios' },
  steps: [
    {
      title: '¿Qué son las Constantes?',
      content:
        'En Twitter/X hay reglas fijas que nunca cambian: el límite de 280 caracteres por tweet, el precio de la suscripción premium, el máximo de imágenes por post.\n\nEstas son constantes: valores que se definen una vez y nunca cambian.',
      code: `constante LIMITE_CARACTERES = 280
constante PRECIO_PREMIUM = 8
constante MAX_IMAGENES = 4

mostrar "Límite por tweet: " + LIMITE_CARACTERES
mostrar "Precio premium: $" + PRECIO_PREMIUM
mostrar "Máximo de imágenes: " + MAX_IMAGENES`,
      explanation:
        'Usamos `constante` en lugar de `variable` para valores que no deben cambiar. Por convención, los nombres van en MAYÚSCULAS para que sea fácil identificar que son constantes.\n\nTwitter decidió estas reglas y no las cambia mientras usas la app.',
      challenge:
        'Crea una constante llamada `LIMITE_BIO` con el valor 160 (el límite de caracteres en la bio de Twitter) y muéstrala con `mostrar LIMITE_BIO`.',
      validation: {
        requiredCode: ['/constante/', '/LIMITE_BIO/', '/160/', '/mostrar/'],
        expectedOutputs: ['/160/'],
      },
    },
    {
      title: 'Constantes vs Variables',
      content:
        'La diferencia es simple: las variables cambian, las constantes no.\n\nMientras escribís un tweet, el contador de caracteres cambia (variable). Pero el límite de 280 nunca cambia (constante).',
      code: `constante LIMITE_CARACTERES = 280
variable caracteresEscritos = 0

mostrar "Límite: " + LIMITE_CARACTERES
mostrar "Escritos: " + caracteresEscritos

caracteresEscritos = 45
mostrar "Escritos ahora: " + caracteresEscritos

caracteresEscritos = 120
mostrar "Escritos ahora: " + caracteresEscritos`,
      explanation:
        'LIMITE_CARACTERES es constante porque Twitter no lo cambia.\ncaracteresEscritos es variable porque cambia con cada letra que escribís.\n\nRegla simple: ¿cambia mientras uso la app? → variable. ¿Es una regla fija? → constante.',
      challenge:
        'Crea una constante `MAX_HASHTAGS` con valor 30. Luego crea una variable `hashtagsUsados` que empiece en 0, cámbiala a 5, y muestra ambos valores.',
      validation: {
        requiredCode: [
          '/constante.*MAX_HASHTAGS.*30/',
          '/variable.*hashtagsUsados.*0/',
          '/hashtagsUsados.*5/',
          '/mostrar/',
        ],
        expectedOutputs: ['/30/', '/5/'],
      },
    },
    {
      title: '¿Qué pasa si intentas cambiar una Constante?',
      content:
        'Si intentas cambiar una constante, el programa te detiene con un error. Esto te protege de romper reglas importantes.\n\nImagina si por error tu código intentara cambiar el límite de caracteres a 1000. El error te avisa que algo está mal.',
      code: `constante LIMITE_CARACTERES = 280
mostrar "Límite: " + LIMITE_CARACTERES

variable caracteresEscritos = 0
caracteresEscritos = 150
mostrar "Escritos: " + caracteresEscritos

caracteresEscritos = 200
mostrar "Escritos: " + caracteresEscritos`,
      explanation:
        'La variable `caracteresEscritos` puede cambiar todas las veces que quieras.\n\nPero si intentaras hacer `LIMITE_CARACTERES = 500`, obtendrías un error inmediato. Las constantes no se pueden cambiar, y eso es bueno: te protege.',
      challenge:
        'Crea una constante `PRECIO_VERIFICACION` con valor 8. Crea una variable `saldoCuenta` que empiece en 20. Resta el precio de verificación del saldo usando `saldoCuenta = saldoCuenta - PRECIO_VERIFICACION`. Muestra el saldo final.',
      validation: {
        requiredCode: [
          '/constante.*PRECIO_VERIFICACION.*8/',
          '/variable.*saldoCuenta.*20/',
          '/saldoCuenta.*saldoCuenta.*PRECIO_VERIFICACION/',
          '/mostrar/',
        ],
        expectedOutputs: ['/12/'],
      },
    },
    {
      title: 'Constantes en Cálculos',
      content:
        'Las constantes son perfectas para cálculos que usan valores fijos. Por ejemplo, calcular cuántos tweets puedes publicar según tu plan.',
      code: `constante TWEETS_GRATIS_DIA = 10
constante TWEETS_PREMIUM_DIA = 100

variable tweetsPublicados = 3
variable tweetsRestantes = TWEETS_GRATIS_DIA - tweetsPublicados

mostrar "Publicados hoy: " + tweetsPublicados
mostrar "Restantes (plan gratis): " + tweetsRestantes

variable tweetsRestantesPremium = TWEETS_PREMIUM_DIA - tweetsPublicados
mostrar "Restantes (plan premium): " + tweetsRestantesPremium`,
      explanation:
        'Las constantes `TWEETS_GRATIS_DIA` y `TWEETS_PREMIUM_DIA` son límites fijos de Twitter.\n\nLa variable `tweetsPublicados` cambia cada vez que publicas.\n\nUsamos las constantes en cálculos para saber cuántos tweets te quedan.',
      challenge:
        'Crea constantes `LIMITE_CARACTERES` (280) y `LIMITE_CARACTERES_PREMIUM` (4000). Crea una variable `caracteresUsados` con 250. Calcula cuántos caracteres te quedan en el plan gratis usando resta, y muéstralo.',
      validation: {
        requiredCode: [
          '/constante.*LIMITE_CARACTERES.*280/',
          '/variable.*caracteresUsados.*250/',
          '/LIMITE_CARACTERES.*caracteresUsados/',
          '/mostrar/',
        ],
        expectedOutputs: ['/30/'],
      },
    },
    {
      title: 'Configuración de tu App',
      content:
        'Las constantes son ideales para la configuración de tu aplicación: nombre, versión, límites, precios. Todo lo que defines una vez y no debe cambiar.',
      code: `constante NOMBRE_APP = "MiRedSocial"
constante VERSION = "1.0.0"
constante LIMITE_BIO = 160
constante MAX_SEGUIDORES_GRATIS = 5000
constante PRECIO_PREMIUM = 999

variable usuariosActivos = 1250
variable publicacionesHoy = 430

mostrar NOMBRE_APP + " v" + VERSION
mostrar "Límite de biografía: " + LIMITE_BIO + " caracteres"
mostrar "---"
mostrar "Usuarios activos: " + usuariosActivos
mostrar "Publicaciones hoy: " + publicacionesHoy`,
      explanation:
        'Constantes para configuración:\n• NOMBRE_APP, VERSION: información de la app\n• LIMITE_BIO, MAX_SEGUIDORES_GRATIS: reglas del sistema\n• PRECIO_PREMIUM: precios fijos\n\nVariables para datos que cambian:\n• usuariosActivos, publicacionesHoy: estadísticas en tiempo real',
      challenge:
        'Crea tu propia configuración de red social con:\n• Constantes: `NOMBRE_PLATAFORMA` (tu nombre), `LIMITE_TWEET` (280), `PRECIO_SUSCRIPCION` (un número)\n• Variables: `tweetsHoy` (empieza en 0), súmale 5 tweets\n• Muestra toda la información',
      summary:
        '🎉 ¡Felicitaciones! Ahora sabes:\n\n• Crear constantes: `constante NOMBRE = valor`\n• Los nombres van en MAYÚSCULAS por convención\n• Las constantes NO se pueden cambiar (te protegen)\n• Variables: cambian. Constantes: nunca cambian\n• Usar constantes para: límites, precios, configuración\n• Usar variables para: contadores, estados, datos temporales\n\n💡 ¡Siguiente: aprende a documentar tu código con comentarios!',
      validation: {
        requiredCode: [
          '/constante.*NOMBRE_PLATAFORMA/',
          '/constante.*LIMITE_TWEET.*280/',
          '/constante.*PRECIO_SUSCRIPCION/',
          '/variable.*tweetsHoy.*0/',
          '/tweetsHoy.*5/',
          '/mostrar/',
        ],
      },
    },
  ],
};
