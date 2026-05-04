import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '➕', text: 'Lección 7' },
  title: 'Operadores en',
  titleGradient: ' HispanoLang',
  description: 'Aprende las mecánicas del juego: suma puntos, compara scores, verifica requisitos',
  prev: { url: '/lecciones/template-strings', title: 'Template Strings' },
  next: { url: '/lecciones/condicionales', title: 'Condicionales' },
  steps: [
    {
      title: 'La Calculadora del Juego',
      content:
        'En un videojuego todo el tiempo se hacen cálculos: sumas puntos, restas vidas, multiplicas bonificaciones, divides recursos.\n\nLos operadores aritméticos son la calculadora interna del juego.',
      code: `variable puntos = 100
variable bonus = 50

mostrar puntos + bonus
mostrar puntos - 20
mostrar puntos * 2
mostrar puntos / 2`,
      explanation:
        'Operadores básicos:\n\n• **+** (suma): Sumar puntos, bonus\n• **-** (resta): Restar vidas, energía\n• ***** (multiplicación): Aplicar multiplicadores\n• **/** (división): Dividir recursos\n\nSe escriben entre dos números y hacen la operación.',
      challenge:
        'Crea un sistema de puntos:\n• Variable `puntosBase` = 150\n• Variable `bonusMonedas` = 30\n• Muestra el total sumando ambos\n• Muestra el resultado de multiplicar los puntos base por 2',
      validation: {
        requiredCode: ['/puntosBase.*150/', '/bonusMonedas.*30/', '/\\+/', '/\\*.*2/'],
      },
    },
    {
      title: 'El Módulo: Números Pares e Impares',
      content:
        'El operador módulo (%) te da el resto de una división. Es super útil en juegos para alternar turnos, detectar números pares, crear ciclos.',
      code: `variable numero = 17
variable divisor = 5

mostrar "17 dividido 5 da resto: " + (numero % divisor)

variable enemigosDerrrotados = 10
variable esPar = enemigosDerrrotados % 2
mostrar "Resto al dividir por 2: " + esPar`,
      explanation:
        '**% (módulo)**: Retorna el resto de la división\n\n• 17 % 5 = 2 (17÷5 = 3 con resto 2)\n• 10 % 2 = 0 (10÷2 = 5 con resto 0)\n• 11 % 2 = 1 (11÷2 = 5 con resto 1)\n\nTruco: Si numero % 2 = 0 → es par. Si = 1 → es impar.',
      challenge:
        'Crea una variable `nivel` con valor 7. Calcula el resto de dividir ese nivel por 3 usando el operador %. Muestra el resultado.',
      validation: {
        requiredCode: ['/nivel.*7/', '/%.*3/', '/mostrar/'],
        expectedOutputs: ['/1/'],
      },
    },
    {
      title: 'Acumulando Stats con Atajos',
      content:
        'Cuando derrotas enemigos, tus puntos se acumulan. En vez de escribir puntos = puntos + 100, puedes usar el atajo puntos += 100.',
      code: `variable puntos = 100
mostrar "Puntos iniciales: " + puntos

puntos += 50
mostrar "Después de moneda: " + puntos

puntos += 30
mostrar "Después de enemigo: " + puntos

variable vidas = 5
vidas -= 2
mostrar "Vidas después de daño: " + vidas`,
      explanation:
        'Operadores de asignación compuesta (atajos):\n\n• **+=** suma y asigna: `x += 5` = `x = x + 5`\n• **-=** resta y asigna: `x -= 3` = `x = x - 3`\n• ***=** multiplica y asigna: `x *= 2` = `x = x * 2`\n• **/=** divide y asigna: `x /= 2` = `x = x / 2`\n\nMás corto y claro.',
      challenge:
        'Sistema de energía:\n• Variable `energia` = 100\n• Usa habilidad especial: resta 30 con `-=`\n• Recoges poción: suma 20 con `+=`\n• Activas boost: multiplica por 1.5 con `*=`\nMuestra la energía en cada paso.',
      validation: {
        requiredCode: ['/energia.*100/', '/-=.*30/', '/\\+=.*20/', '/\\*=.*1\\.5/', '/mostrar/'],
      },
    },
    {
      title: 'Incremento Rápido: Contadores',
      content:
        'Cuando derrotas un enemigo, subes de nivel, o pierdes una vida, cambias el valor en 1. Los operadores ++ y -- son atajos para esto.',
      code: `variable enemigosDerrrotados = 0
variable vidas = 3

enemigosDerrrotados++
mostrar "Enemigos: " + enemigosDerrrotados

enemigosDerrrotados++
mostrar "Enemigos: " + enemigosDerrrotados

vidas--
mostrar "Vidas: " + vidas

vidas--
mostrar "Vidas: " + vidas`,
      explanation:
        'Operadores de incremento/decremento:\n\n• **++** incrementa en 1: `contador++` = `contador = contador + 1`\n• **--** decrementa en 1: `vidas--` = `vidas = vidas - 1`\n\nPerfecto para contadores: enemigos derrotados, vidas, nivel, combo.',
      challenge:
        'Sistema de combo:\n• Variable `combo` = 0\n• Golpe exitoso: incrementa con `++` (3 veces)\n• Fallas: decrementa con `--` (1 vez)\nMuestra el combo final.',
      validation: {
        requiredCode: ['/combo.*0/', '/\\+\\+/', '/\\+\\+/', '/\\+\\+/', '/--/', '/mostrar/'],
        expectedOutputs: ['/2/'],
      },
    },
    {
      title: 'Comparando Scores',
      content:
        'En un juego necesitas comparar valores: ¿superé el récord? ¿tengo suficientes vidas? ¿llegué al nivel 10?\n\nLos operadores de comparación retornan verdadero o falso.',
      code: `variable miScore = 1500
variable record = 1200
variable vidas = 3
variable nivel = 10

mostrar "¿Superé el récord? " + (miScore > record)
mostrar "¿Tengo menos de 5 vidas? " + (vidas < 5)
mostrar "¿Llegué al nivel 10? " + (nivel >= 10)
mostrar "¿Es mi score igual al récord? " + (miScore == record)
mostrar "¿Es diferente? " + (miScore != record)`,
      explanation:
        'Operadores de comparación (retornan verdadero o falso):\n\n• **>** mayor que\n• **<** menor que\n• **>=** mayor o igual que\n• **<=** menor o igual que\n• **==** igual que (¡dos signos =!)\n• **!=** diferente de\n\nImportante: Para comparar usa == (dos =), no = (uno = es para asignar).',
      challenge:
        'Verifica requisitos para boss fight:\n• `nivelJugador` = 15, `nivelMinimo` = 10\n• `vidásJugador` = 80, `vidasMinimas` = 50\n• Compara si el nivel del jugador es mayor o igual al mínimo\n• Compara si las vidas son mayores o iguales a las mínimas\nMuestra ambos resultados.',
      validation: {
        requiredCode: [
          '/nivelJugador/',
          '/nivelMinimo/',
          '/vidasJugador/',
          '/vidasMinimas/',
          '/>=|==/',
          '/mostrar/',
        ],
        expectedOutputs: ['/verdadero/'],
      },
    },
    {
      title: 'Requisitos para Desbloquear',
      content:
        'A veces necesitas cumplir múltiples requisitos: nivel 10 Y 500 monedas para comprar un arma. O puedes entrar si tienes nivel 15 O la llave especial.\n\nLos operadores lógicos combinan condiciones.',
      code: `variable nivel = 12
variable monedas = 600
variable tieneLlave = falso

variable puedeComprar = nivel >= 10 y monedas >= 500
mostrar "¿Puede comprar espada? " + puedeComprar

variable puedeEntrar = nivel >= 15 o tieneLlave
mostrar "¿Puede entrar? " + puedeEntrar

variable noTieneLlave = !tieneLlave
mostrar "¿NO tiene llave? " + noTieneLlave`,
      explanation:
        'Operadores lógicos:\n\n• **y** (AND): Ambas condiciones deben ser verdaderas\n  `nivel >= 10 y monedas >= 500`\n\n• **o** (OR): Al menos una debe ser verdadera\n  `nivel >= 15 o tieneLlave`\n\n• **!** (NOT): Invierte verdadero ↔ falso\n  `!verdadero` = falso',
      challenge:
        'Sistema de acceso a sala secreta:\n• `nivelJugador` = 20, `tieneLlaveOro` = verdadero, `completoMision` = falso\n• Puede entrar si: nivel >= 15 Y (tiene llave O completó misión)\n• Usa paréntesis para agrupar: (condicion1 o condicion2)\nVerifica si puede entrar y muestra el resultado.',
      validation: {
        requiredCode: [
          '/nivelJugador/',
          '/tieneLlaveOro/',
          '/completoMision/',
          '/y/',
          '/o/',
          '/mostrar/',
        ],
        expectedOutputs: ['/verdadero/'],
      },
    },
    {
      title: 'Sistema Completo de Videojuego',
      content: 'Ahora combina todos los operadores para crear un sistema de puntuación completo.',
      code: `variable puntos = 0
variable vidas = 3
variable nivel = 1
variable combo = 0

// Derrotas enemigo
puntos += 100
combo++
mostrar "Enemigo derrotado! Puntos: " + puntos + " | Combo: " + combo

// Recoges moneda
puntos += 50
combo++
mostrar "Moneda! Puntos: " + puntos + " | Combo: " + combo

// Recibes daño
vidas--
combo = 0
mostrar "¡Auch! Vidas: " + vidas + " | Combo perdido"

// Bonus por combo alto (simulado)
variable bonusActivo = puntos > 100 y vidas >= 2
mostrar "¿Bonus activo? " + bonusActivo

// Puntos finales con bonus por vidas
variable puntosFinales = puntos + (vidas * 10)
mostrar "Puntos finales: " + puntosFinales`,
      explanation:
        'Este sistema usa:\n\n• Aritmética: +, *, para calcular puntos\n• Asignación: +=, --, para actualizar valores\n• Comparación: >, >=, para verificar condiciones\n• Lógicos: y, para combinar requisitos\n• Paréntesis: (vidas * 10) para orden de operaciones\n\nAsí funcionan los juegos reales.',
      challenge:
        'Crea tu propio sistema de batalla:\n• `vidaJugador` = 100, `vidaEnemigo` = 80\n• `ataque` = 25, `defensa` = 5\n• Calcula daño real: ataque - defensa\n• Resta el daño a vida enemigo con `-=`\n• Verifica si enemigo sigue vivo: vidaEnemigo > 0\n• Si enemigo murió, suma 500 puntos a una variable `puntos`\nMuestra todos los pasos.',
      summary:
        '🎉 ¡Felicitaciones! Ahora dominas los operadores:\n\n**Aritméticos:**\n• +, -, *, /, % → Calcular puntos, vidas, recursos\n\n**Asignación:**\n• +=, -=, *=, /= → Acumular stats\n• ++, -- → Contadores rápidos\n\n**Comparación:**\n• >, <, >=, <=, ==, != → Comparar valores\n• Retornan verdadero o falso\n\n**Lógicos:**\n• y, o, ! → Combinar condiciones\n• Para requisitos múltiples\n\n💡 ¡Siguiente: aprende condicionales (si/sino) para tomar decisiones!',
      validation: {
        requiredCode: [
          '/vidaJugador/',
          '/vidaEnemigo/',
          '/ataque/',
          '/defensa/',
          '/-=/',
          '/>/',
          '/puntos/',
          '/mostrar/',
        ],
      },
    },
  ],
};
