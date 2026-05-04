import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '🧮', text: 'Lección 13' },
  title: 'Funciones Matemáticas en',
  titleGradient: ' HispanoLang',
  description: 'Aprende a usar la calculadora científica integrada',
  prev: { url: '/lecciones/funciones-flecha', title: 'Funciones Flecha' },
  next: { url: '/lecciones/listas', title: 'Listas' },
  steps: [
    {
      title: 'Tu Calculadora Científica Personal',
      content:
        'Abre la calculadora de tu celular y gira la pantalla. Ves muchos botones nuevos: √, x², sin, cos, y más.\n\nHispanoLang tiene estas mismas funciones integradas. Son como botones pre-programados: presionas uno y obtienes el resultado.',
      code: `mostrar "√16 = " + raiz(16)
mostrar "2³ = " + potencia(2, 3)
mostrar "|-5| = " + valorAbsoluto(-5)
mostrar "Redondear 3.7 = " + redondear(3.7)`,
      explanation:
        '**Funciones matemáticas integradas:**\n• Ya vienen en HispanoLang, listas para usar\n• Solo llamas la función: `raiz(16)`\n• Como presionar un botón: inmediato\n• Retornan el resultado del cálculo\n\n**Botones disponibles:**\n✅ raiz() → botón √\n✅ potencia() → botón x² o xʸ\n✅ valorAbsoluto() → botón |x|\n✅ redondear() → redondear decimales\n✅ Y muchos más...',
      challenge:
        'Practica usando tu calculadora científica:\n• Calcula la raíz cuadrada de 144\n• Calcula 2 elevado a la 5 (2⁵)\n• Muestra ambos resultados',
      validation: {
        requiredCode: ['/raiz\\s*\\(.*144/', '/potencia\\s*\\(.*2.*5/'],
        expectedOutputs: ['/12/', '/32/'],
      },
    },
    {
      title: 'Redondear: El Botón Más Útil',
      content:
        'Divides la cuenta del restaurante entre 3 personas: $156.66666...\n\nNecesitas redondear. Tu calculadora tiene tres formas de hacerlo.',
      code: `variable numero = 3.7

mostrar "Redondear (cercano): " + redondear(numero)
mostrar "Techo (arriba): " + techo(numero)
mostrar "Piso (abajo): " + piso(numero)

variable cuenta = 157
variable personas = 3
variable porPersona = redondear(cuenta / personas)
mostrar "Cada persona paga: $" + porPersona`,
      explanation:
        '**Tres formas de redondear:**\n\n• **redondear()**: Al más cercano\n  - 3.4 → 3\n  - 3.6 → 4\n  - Como el botón normal de redondeo\n\n• **techo()**: Siempre hacia arriba\n  - 3.1 → 4\n  - 3.9 → 4\n  - Útil para "cuántas cajas necesito"\n\n• **piso()**: Siempre hacia abajo\n  - 3.1 → 3\n  - 3.9 → 3\n  - Útil para "cuántos completos tengo"',
      challenge:
        'Tienes 20 productos y cada paquete contiene 6.\n• ¿Cuántos paquetes necesitas comprar?\n• Usa división (20 / 6)\n• Usa techo() para redondear hacia arriba\n• Muestra el resultado (debe ser 4 paquetes)',
      validation: {
        requiredCode: ['/techo\\s*\\(/', '/20.*6|20.*\\/.*6/'],
        expectedOutputs: ['/4/'],
      },
    },
    {
      title: 'Números Aleatorios: El Botón Random',
      content:
        "Las calculadoras científicas tienen un botón 'Random' o 'Rnd'. Genera números al azar. Perfecto para juegos, sorteos, y simulaciones.",
      code: `mostrar "Entre 0 y 1: " + aleatorio()
mostrar "Entre 0 y 10: " + aleatorio(10)
mostrar "Entre 5 y 15: " + aleatorio(5, 15)

variable dado = piso(aleatorio(1, 7))
mostrar "Tirar dado (1-6): " + dado

variable moneda = aleatorio() < 0.5
si moneda {
    mostrar "Moneda: CARA"
} sino {
    mostrar "Moneda: CRUZ"
}`,
      explanation:
        '**Tres formas de usar aleatorio():**\n\n• `aleatorio()` → 0.0 a 1.0\n• `aleatorio(10)` → 0.0 a 10.0\n• `aleatorio(5, 15)` → 5.0 a 15.0\n\n**Para números enteros:**\n• Combina con `piso()`\n• Ejemplo: `piso(aleatorio(1, 7))` → dado de 1 a 6\n• El 7 no se incluye, por eso usamos 7 para obtener hasta 6\n\n**Usos comunes:**\n🎲 Tirar dados\n🪙 Cara o cruz\n🎁 Sorteos\n🎮 Juegos',
      challenge:
        "Crea un simulador de dado:\n• Usa aleatorio(1, 7) para obtener número entre 1 y 6.99...\n• Usa piso() para convertirlo a entero (1, 2, 3, 4, 5, o 6)\n• Guárdalo en variable 'dado'\n• Muestra el resultado del dado",
      validation: {
        requiredCode: [
          '/variable\\s+dado/',
          '/aleatorio\\s*\\(/',
          '/piso\\s*\\(/',
          '/1.*7|aleatorio.*7/',
        ],
        expectedOutputs: ['/[1-6]/'],
      },
    },
    {
      title: 'Potencias y Raíces: x² y √',
      content:
        'Los botones x² y √ son súper útiles. Calcular áreas, distancias, crecimiento exponencial... aparecen en muchos problemas reales.',
      code: `mostrar "5² = " + potencia(5, 2)
mostrar "2³ = " + potencia(2, 3)
mostrar "2⁸ = " + potencia(2, 8)

mostrar "√16 = " + raiz(16)
mostrar "√144 = " + raiz(144)

variable lado = 7
variable area = potencia(lado, 2)
mostrar "Área cuadrado 7×7: " + area + "m²"

variable areaTerreno = 225
variable ladoTerreno = raiz(areaTerreno)
mostrar "Lado del terreno: " + ladoTerreno + "m"`,
      explanation:
        '**potencia(base, exponente):**\n• potencia(5, 2) = 5² = 25\n• potencia(2, 3) = 2³ = 8\n• potencia(2, 8) = 2⁸ = 256\n\n**raiz(numero):**\n• raiz(16) = 4 (porque 4² = 16)\n• raiz(144) = 12 (porque 12² = 144)\n\n**Casos de uso:**\n📐 Áreas de cuadrados (lado²)\n📦 Volúmenes de cubos (lado³)\n💰 Interés compuesto\n📏 Teorema de Pitágoras',
      challenge:
        'Tienes un terreno cuadrado de 400 m².\n• Calcula cuánto mide cada lado\n• Usa raiz(400)\n• Debe dar 20 metros\n• Muestra el resultado',
      validation: {
        requiredCode: ['/raiz\\s*\\(.*400/'],
        expectedOutputs: ['/20/'],
      },
    },
    {
      title: 'Valor Absoluto: El Botón |x|',
      content:
        'El botón |x| o abs convierte cualquier número en positivo. Útil para distancias, diferencias de temperatura, o cuando el signo no importa.',
      code: `mostrar "Absoluto de 10: " + valorAbsoluto(10)
mostrar "Absoluto de -10: " + valorAbsoluto(-10)
mostrar "Absoluto de 0: " + valorAbsoluto(0)

variable temp1 = 25
variable temp2 = 15
variable diferencia = valorAbsoluto(temp1 - temp2)
mostrar "Diferencia temperatura: " + diferencia + "°C"

variable posicion1 = 50
variable posicion2 = 30
variable distancia = valorAbsoluto(posicion1 - posicion2)
mostrar "Distancia: " + distancia + " unidades"`,
      explanation:
        '**valorAbsoluto() quita el signo:**\n• valorAbsoluto(10) = 10\n• valorAbsoluto(-10) = 10\n• valorAbsoluto(0) = 0\n\n**¿Para qué sirve?**\n🌡️ Diferencias de temperatura\n📏 Calcular distancias\n💵 Mostrar montos de deuda\n📊 Errores o desviaciones\n\n**Fórmula común:**\n`distancia = valorAbsoluto(punto1 - punto2)`\n\nSiempre retorna positivo, sin importar el orden.',
      challenge:
        'Calcula la diferencia absoluta entre dos números:\n• Primer número: 15\n• Segundo número: 42\n• Usa valorAbsoluto(15 - 42)\n• El resultado debe ser 27',
      validation: {
        requiredCode: ['/valorAbsoluto\\s*\\(/', '/15.*42|42.*15/'],
        expectedOutputs: ['/27/'],
      },
    },
    {
      title: 'Máximo y Mínimo: Comparar Varios',
      content:
        "¿Cuál es el precio más alto? ¿La nota más baja? En vez de comparar uno por uno con 'si', usa las funciones de agregación.",
      code: `variable precios = maximo(100, 250, 180, 320)
mostrar "Precio más alto: $" + precios

variable barato = minimo(100, 250, 180, 320)
mostrar "Precio más bajo: $" + barato

variable notas = maximo(85, 90, 78, 92, 88)
mostrar "Mejor nota: " + notas

variable peorNota = minimo(85, 90, 78, 92, 88)
mostrar "Peor nota: " + peorNota

variable diferencia = maximo(85, 90, 78, 92, 88) - minimo(85, 90, 78, 92, 88)
mostrar "Rango de notas: " + diferencia`,
      explanation:
        '**maximo(...números):**\n• Retorna el número más grande\n• maximo(10, 20, 15) → 20\n• Acepta cualquier cantidad de números\n\n**minimo(...números):**\n• Retorna el número más pequeño\n• minimo(10, 20, 15) → 10\n• Acepta cualquier cantidad de números\n\n**Casos de uso:**\n🏆 Encontrar ganador (puntaje máximo)\n💰 Encontrar mejor precio (mínimo)\n📚 Nota más alta/baja\n📊 Rangos de datos',
      challenge:
        'Tienes gastos de la semana: 500, 300, 150, 450, 200\n• Encuentra el gasto más alto con maximo()\n• Encuentra el gasto más bajo con minimo()\n• Muestra ambos resultados',
      validation: {
        requiredCode: ['/maximo\\s*\\(/', '/minimo\\s*\\(/', '/500.*300.*150.*450.*200/'],
        expectedOutputs: ['/500/', '/150/'],
      },
    },
    {
      title: 'Suma y Promedio: Análisis Rápido',
      content:
        'En vez de sumar manualmente con +, usa suma(). Y para calcular promedios, usa promedio(). Perfecto para analizar datos.',
      code: `variable totalGastos = suma(500, 300, 150, 450, 200)
mostrar "Gastos totales: $" + totalGastos

variable gastoPromedio = promedio(500, 300, 150, 450, 200)
mostrar "Gasto promedio: $" + gastoPromedio

variable notaTotal = suma(85, 90, 78, 92)
mostrar "Puntos totales: " + notaTotal

variable promedioNotas = promedio(85, 90, 78, 92)
mostrar "Promedio: " + promedioNotas

variable promedioRedondeado = redondear(promedio(85, 90, 78, 92))
mostrar "Promedio redondeado: " + promedioRedondeado`,
      explanation:
        '**suma(...números):**\n• Suma todos los números\n• suma(10, 20, 30) → 60\n• Más rápido que 10 + 20 + 30\n\n**promedio(...números):**\n• Calcula el promedio aritmético\n• promedio(10, 20, 30) → 20\n• Equivale a: suma(...) / cantidad\n\n**Combinar con redondear():**\n• `redondear(promedio(...))` para nota final\n• Promedios con decimales → redondear\n\n**Casos de uso:**\n💵 Gastos totales del mes\n📚 Promedio de calificaciones\n📊 Análisis de ventas\n🏃 Promedio de tiempos',
      challenge:
        'Calcula tu promedio de notas:\n• Notas: 85, 90, 78, 92, 88\n• Usa promedio() para calcular\n• Usa redondear() para redondear el resultado\n• Muestra el promedio redondeado (debe dar 87)',
      validation: {
        requiredCode: ['/promedio\\s*\\(/', '/redondear\\s*\\(/', '/85.*90.*78.*92.*88/'],
        expectedOutputs: ['/87/'],
      },
    },
    {
      title: 'Teorema de Pitágoras: Combinar Funciones',
      content:
        'Así como presionas varios botones en secuencia en tu calculadora, puedes combinar funciones para resolver problemas complejos.\n\nEjemplo clásico: calcular la hipotenusa de un triángulo.',
      code: `variable cateto1 = 3
variable cateto2 = 4

variable hipotenusa = raiz(potencia(cateto1, 2) + potencia(cateto2, 2))
mostrar "Catetos: " + cateto1 + " y " + cateto2
mostrar "Hipotenusa: " + hipotenusa

variable a = 5
variable b = 12
variable c = raiz(potencia(a, 2) + potencia(b, 2))
mostrar "Triángulo 5-12: " + c

variable lado1 = 8
variable lado2 = 15
variable diagonal = raiz(potencia(lado1, 2) + potencia(lado2, 2))
mostrar "Diagonal del rectángulo: " + redondear(diagonal)`,
      explanation:
        '**Teorema de Pitágoras:**\n• a² + b² = c²\n• En código: `raiz(potencia(a, 2) + potencia(b, 2))`\n\n**Paso a paso:**\n1. `potencia(a, 2)` → a²\n2. `potencia(b, 2)` → b²\n3. Sumar: a² + b²\n4. `raiz(...)` → √(a² + b²) = c\n\n**Usos reales:**\n📐 Calcular diagonal de rectángulo\n📏 Distancia entre dos puntos\n🏗️ Construcción y arquitectura\n🎮 Distancias en videojuegos',
      challenge:
        'Calcula la hipotenusa de un triángulo:\n• Cateto 1: 5\n• Cateto 2: 12\n• Usa el Teorema de Pitágoras: √(a² + b²)\n• Combina potencia() y raiz()\n• El resultado debe ser 13',
      validation: {
        requiredCode: ['/raiz\\s*\\(/', '/potencia\\s*\\(/', '/potencia\\s*\\(/', '/5.*12|12.*5/'],
        expectedOutputs: ['/13/'],
      },
    },
    {
      title: 'Calculadora de Propinas Completa',
      content:
        'Ahora combina todo lo aprendido para crear una calculadora de propinas útil y práctica.',
      code: `variable cuenta = 156.50

mostrar "=== CALCULADORA DE PROPINAS ==="
mostrar "Cuenta: $" + cuenta

variable propina10 = cuenta * 0.10
variable propina15 = cuenta * 0.15
variable propina20 = cuenta * 0.20

mostrar "Propina 10%: $" + redondear(propina10)
mostrar "Propina 15%: $" + redondear(propina15)
mostrar "Propina 20%: $" + redondear(propina20)

variable total10 = redondear(cuenta + propina10)
variable total15 = redondear(cuenta + propina15)
variable total20 = redondear(cuenta + propina20)

mostrar ""
mostrar "Total con 10%: $" + total10
mostrar "Total con 15%: $" + total15
mostrar "Total con 20%: $" + total20

variable personas = 3
variable porPersona = redondear(total15 / personas)
mostrar ""
mostrar "Entre " + personas + " personas: $" + porPersona + " c/u"`,
      explanation:
        '**Sistema completo que usa:**\n✅ Multiplicación para calcular propinas\n✅ redondear() para dinero limpio\n✅ División para dividir entre personas\n✅ Mostrar resultados organizados\n\n**Funciones matemáticas aplicadas:**\n• Cálculos con decimales\n• Redondeo de precios\n• División entre personas\n• Presentación clara\n\nComo usar varios botones de la calculadora en secuencia para resolver un problema real.',
      summary:
        '🎉 ¡Felicitaciones! Ahora dominas la calculadora científica:\n\n**Funciones esenciales:**\n• **redondear(), techo(), piso()** → Ajustar decimales\n• **aleatorio()** → Números al azar (juegos, sorteos)\n• **potencia(), raiz()** → Cálculos exponenciales\n• **valorAbsoluto()** → Distancias y diferencias\n• **maximo(), minimo()** → Encontrar extremos\n• **suma(), promedio()** → Análisis de datos\n\n**Consejos:**\n💡 Empieza con redondear y aleatorio (más útiles)\n💡 Combina funciones para problemas complejos\n💡 Usa variables intermedias para claridad\n💡 Redondea precios al final\n\n**Casos de uso reales:**\n✅ Calculadoras de propinas\n✅ Simuladores de dados\n✅ Análisis de gastos\n✅ Cálculos geométricos\n✅ Sorteos y juegos\n\n¡Siguiente: aprende sobre listas y arrays!',
      challenge:
        'Crea tu propio sistema de descuentos:\n• Variable precio = 1000\n• Genera descuento aleatorio entre 10% y 40%\n• Calcula el ahorro (precio * descuento / 100)\n• Calcula precio final (precio - ahorro)\n• Redondea el precio final\n• Muestra: precio original, descuento %, ahorro, y precio final\n• Usa: aleatorio(), redondear(), y operaciones básicas',
      validation: {
        requiredCode: [
          '/variable\\s+precio.*1000/',
          '/aleatorio\\s*\\(/',
          '/10.*40|40.*10/',
          '/redondear\\s*\\(/',
          '/100/',
        ],
        expectedOutputs: ['/1000/', '/[1-4][0-9]%|[1-9]%|40%/', '/\\$/'],
      },
    },
  ],
};
