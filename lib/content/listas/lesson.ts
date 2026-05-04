import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '📋', text: 'Lección 16' },
  title: 'Listas en',
  titleGradient: ' HispanoLang',
  description: 'Aprende a manejar tu lista de compras digital',
  prev: { url: '/lecciones/metodos-numericos', title: 'Métodos Numéricos' },
  next: { url: '/lecciones/bucles-avanzados', title: 'Bucles Avanzados' },
  steps: [
    {
      title: 'Tu Lista de Compras Digital',
      content:
        "Cuando vas al supermercado, escribes una lista: 'leche, pan, huevos, manzanas'. En vez de tener 4 variables separadas (item1, item2, item3, item4), tienes UNA lista con todos los items.\n\n¡Las listas son perfectas para almacenar múltiples valores relacionados!",
      code: `variable compras = ["leche", "pan", "huevos", "manzanas"]
mostrar compras

variable numeros = [1, 2, 3, 4, 5]
mostrar numeros

variable vacia = []
mostrar "Lista vacía: " + texto(vacia)

mostrar "Cuántos items: " + texto(compras.longitud())`,
      explanation:
        "**Crear listas:**\n• Usa corchetes: `[]`\n• Separa elementos con comas: `[1, 2, 3]`\n• Pueden estar vacías: `[]`\n• Puedes mezclar tipos: `[1, 'hola', verdadero]`\n\n**Método básico:**\n• `.longitud()` → cuántos elementos tiene\n\n**Como tu lista de compras:**\n• Papel en blanco = lista vacía `[]`\n• Escribes items separados por comas\n• Cuentas cuántas líneas tienes",
      challenge:
        "Crea una lista de compras:\n• Variable compras con 4 items: 'arroz', 'frijoles', 'aceite', 'sal'\n• Muestra la lista completa\n• Muestra cuántos items tiene usando .longitud()",
      validation: {
        requiredCode: [
          '/variable\\s+compras/',
          '/\\[.*arroz.*frijoles.*aceite.*sal.*\\]/',
          '/\\.longitud\\s*\\(/',
        ],
        expectedOutputs: ['/arroz/', '/4/'],
      },
    },
    {
      title: 'Acceder a Items: Posiciones Numeradas',
      content:
        'Tu lista tiene posiciones: el PRIMER item es posición 0 (no 1), el segundo es posición 1, y así. ⚠️ En programación SIEMPRE empezamos a contar desde 0.',
      code: `variable compras = ["leche", "pan", "huevos", "manzanas"]

mostrar "Item 0 (primero): " + compras[0]
mostrar "Item 1 (segundo): " + compras[1]
mostrar "Item 2 (tercero): " + compras[2]
mostrar "Item 3 (cuarto): " + compras[3]

mostrar ""
mostrar "Atajos útiles:"
mostrar "Primero: " + compras.primero()
mostrar "Último: " + compras.ultimo()`,
      explanation:
        '**Acceso por índice:**\n• Primer elemento: `lista[0]` (¡no lista[1]!)\n• Segundo elemento: `lista[1]`\n• Tercer elemento: `lista[2]`\n• ...\n\n**Atajos:**\n• `.primero()` = `lista[0]`\n• `.ultimo()` = último elemento\n\n**¿Por qué empezar en 0?**\n• Convención universal en programación\n• Lista de 4 items: índices 0, 1, 2, 3\n\n**Como tu lista:**\nItem #0: leche\nItem #1: pan\nItem #2: huevos\nItem #3: manzanas',
      challenge:
        'Crea una lista de 5 números: [10, 20, 30, 40, 50]\n• Muestra el primer número usando [0]\n• Muestra el tercer número usando [2]\n• Muestra el último usando .ultimo()',
      validation: {
        requiredCode: ['/\\[0\\]/', '/\\[2\\]/', '/\\.ultimo\\s*\\(/'],
        expectedOutputs: ['/10/', '/30/', '/50/'],
      },
    },
    {
      title: 'Modificar Items: Tachar y Reescribir',
      content:
        "Como cuando tachas 'pan' en tu lista y escribes 'pan integral'. Puedes cambiar elementos usando su posición.",
      code: `variable compras = ["leche", "pan", "huevos"]
mostrar "Original: " + texto(compras)

compras[1] = "pan integral"
mostrar "Modificada: " + texto(compras)

variable notas = [85, 90, 78]
mostrar "Notas: " + texto(notas)

notas[2] = 80
mostrar "Corregida: " + texto(notas)

mostrar ""
mostrar "Cambiar primero y último:"
compras[0] = "leche descremada"
mostrar "Primera cambiada: " + texto(compras)`,
      explanation:
        "**Modificar elemento:**\n• Sintaxis: `lista[indice] = nuevoValor`\n• `compras[1] = 'pan integral'`\n• El índice debe existir\n\n**Como tachar y reescribir:**\n```\nLista: ['leche', 'pan', 'huevos']\nTachas 'pan' (posición 1)\nEscribes 'pan integral'\nResultado: ['leche', 'pan integral', 'huevos']\n```\n\n💡 La lista mantiene su tamaño\n💡 Solo cambias el contenido",
      challenge:
        'Crea lista de temperaturas: [20, 25, 30]\n• Cambia la segunda (índice 1) a 28\n• Cambia la tercera (índice 2) a 32\n• Muestra la lista modificada',
      validation: {
        requiredCode: ['/\\[1\\].*=.*28/', '/\\[2\\].*=.*32/'],
        expectedOutputs: ['/28/', '/32/'],
      },
    },
    {
      title: 'Agregar Items: Construir tu Lista',
      content:
        'Vas recordando lo que necesitas y agregando items. El método .agregar() añade elementos al final de la lista.',
      code: `variable compras = []
mostrar "Lista vacía: " + texto(compras)

compras.agregar("leche")
mostrar "Después de agregar: " + texto(compras)

compras.agregar("pan")
compras.agregar("huevos")
compras.agregar("manzanas")
mostrar "Lista completa: " + texto(compras)
mostrar "Total items: " + texto(compras.longitud())

mostrar ""
mostrar "=== CARRITO DE COMPRAS ==="
variable carrito = []
carrito.agregar("Mouse")
carrito.agregar("Teclado")
carrito.agregar("Monitor")
mostrar "Carrito: " + texto(carrito)`,
      explanation:
        '**Agregar al final:**\n• `.agregar(elemento)` añade al final\n• La lista crece automáticamente\n• No hay límite de tamaño\n\n**Patrón común:**\n1. Crear vacía: `variable lista = []`\n2. Ir agregando: `lista.agregar(item1)`\n3. La lista crece: `[item1]`\n4. Agregar más: `lista.agregar(item2)`\n5. Lista crece: `[item1, item2]`\n\n**Como escribir tu lista:**\n• Papel en blanco\n• Vas escribiendo líneas\n• Cada .agregar() = línea nueva',
      challenge:
        "Construye una lista de tareas:\n• Empieza con lista vacía\n• Agrega 'Estudiar'\n• Agrega 'Comprar'\n• Agrega 'Cocinar'\n• Muestra cuántas tareas tienes (debe ser 3)",
      validation: {
        requiredCode: [
          '/\\[\\]/',
          '/\\.agregar\\s*\\(/',
          '/\\.agregar\\s*\\(/',
          '/\\.agregar\\s*\\(/',
          '/\\.longitud\\s*\\(/',
        ],
        expectedOutputs: ['/3/'],
      },
    },
    {
      title: 'Quitar Items: Remover del Final',
      content:
        'Como tachar el último item de tu lista. El método .remover() elimina el último elemento y te lo devuelve.',
      code: `variable compras = ["leche", "pan", "huevos", "manzanas"]
mostrar "Lista completa: " + texto(compras)
mostrar "Longitud: " + texto(compras.longitud())

variable ultimo = compras.remover()
mostrar "Removiste: " + ultimo
mostrar "Ahora tienes: " + texto(compras)
mostrar "Longitud: " + texto(compras.longitud())

variable siguiente = compras.remover()
mostrar "Removiste: " + siguiente
mostrar "Ahora: " + texto(compras)

mostrar ""
mostrar "Agregar y quitar:"
compras.agregar("queso")
mostrar "Agregado queso: " + texto(compras)
compras.remover()
mostrar "Quitado último: " + texto(compras)`,
      explanation:
        "**Remover del final:**\n• `.remover()` quita el último\n• Retorna el elemento eliminado\n• La lista se acorta en 1\n• Si está vacía, da error\n\n**Patrón:**\n```\nvariable elemento = lista.remover()\n• lista pierde el último\n• elemento guarda lo eliminado\n```\n\n**Como tachar:**\nLista: ['leche', 'pan', 'huevos']\nTachas último: 'huevos'\nResultado: ['leche', 'pan']\n\n💡 .agregar() y .remover() trabajan en el mismo extremo",
      challenge:
        "Crea lista: ['a', 'b', 'c', 'd']\n• Remueve el último y guárdalo en variable\n• Remueve otro\n• Muestra lo que queda (debe tener 2 elementos)\n• Muestra la longitud",
      validation: {
        requiredCode: ['/\\.remover\\s*\\(/', '/\\.remover\\s*\\(/', '/\\.longitud\\s*\\(/'],
        expectedOutputs: ['/2/'],
      },
    },
    {
      title: 'Verificar: ¿Tengo Este Item?',
      content:
        "¿Ya escribí 'leche'? El método .contiene() verifica si un elemento existe en tu lista.",
      code: `variable compras = ["leche", "pan", "huevos", "manzanas"]

mostrar "¿Tengo leche?: " + texto(compras.contiene("leche"))
mostrar "¿Tengo queso?: " + texto(compras.contiene("queso"))

si compras.contiene("huevos") {
    mostrar "Ya tienes huevos"
} sino {
    mostrar "Necesitas huevos"
}

mostrar ""
mostrar "=== EVITAR DUPLICADOS ==="
variable carrito = ["Mouse", "Teclado"]

variable item = "Mouse"
si carrito.contiene(item) {
    mostrar item + " ya está en el carrito"
} sino {
    carrito.agregar(item)
    mostrar "Agregado: " + item
}

variable otro = "Monitor"
si !carrito.contiene(otro) {
    carrito.agregar(otro)
    mostrar "Agregado: " + otro
}

mostrar "Carrito: " + texto(carrito)`,
      explanation:
        "**Verificar existencia:**\n• `.contiene(elemento)` → verdadero o falso\n• Busca el elemento exacto\n• Case-sensitive para texto\n\n**Patrón: evitar duplicados**\n```\nsi !lista.contiene(item) {\n    lista.agregar(item)\n}\n```\n\n**Como revisar tu lista:**\n• Miras línea por línea\n• Si encuentras → verdadero\n• Si terminas sin encontrar → falso\n\n💡 'Leche' != 'leche' (case-sensitive)",
      challenge:
        "Sistema anti-duplicados:\n• Lista: ['rojo', 'azul']\n• Variable color = 'verde'\n• Si NO está en lista, agrégalo\n• Intenta agregar 'rojo' (no debe agregarse)\n• Muestra la lista final (debe tener 3: rojo, azul, verde)",
      validation: {
        requiredCode: [
          '/\\.contiene\\s*\\(/',
          '/!\\.contiene|contiene.*==.*falso/',
          '/\\.agregar\\s*\\(/',
        ],
        expectedOutputs: ['/verde/'],
      },
    },
    {
      title: 'Recorrer: Procesar Cada Item',
      content:
        'Como cuando pasas tu lista línea por línea en el super. El método .recorrer() ejecuta código para cada elemento.',
      code: `variable compras = ["leche", "pan", "huevos", "manzanas"]

mostrar "=== LISTA DE COMPRAS ==="
compras.recorrer(funcion(item) {
    mostrar "☐ " + item
})

mostrar ""
mostrar "=== CON ÍNDICE ==="
compras.recorrer(funcion(item, indice) {
    mostrar "Item " + texto(indice) + ": " + item
})

mostrar ""
mostrar "=== SUMAR PRECIOS ==="
variable precios = [100, 250, 150, 300]
variable total = 0

precios.recorrer(funcion(precio) {
    total = total + precio
})

mostrar "Total: $" + texto(total)`,
      explanation:
        "**Recorrer lista:**\n• `.recorrer(funcion(elemento) { código })`\n• Se ejecuta una vez por cada elemento\n• Primer parámetro: elemento actual\n• Segundo parámetro (opcional): índice\n\n**Patrón simple:**\n```\nlista.recorrer(funcion(item) {\n    mostrar item\n})\n```\n\n**Con índice:**\n```\nlista.recorrer(funcion(item, i) {\n    mostrar i + ': ' + item\n})\n```\n\n**Como revisar físicamente:**\n• Empiezas desde arriba\n• Procesas cada línea\n• Continúas hasta el final",
      challenge:
        'Lista de notas: [85, 90, 78, 92, 88]\n• Usa .recorrer() para sumarlas todas\n• Guarda en variable suma\n• Calcula promedio (suma / longitud)\n• Muestra el promedio',
      validation: {
        requiredCode: ['/\\.recorrer\\s*\\(/', '/funcion\\s*\\(/', '/\\+/', '/\\.longitud\\s*\\(/'],
        expectedOutputs: ['/86/'],
      },
    },
    {
      title: 'Filtrar: Quedarte con Algunos',
      content:
        '¿Solo quiero items que cuestan menos de $200? El método .filtrar() crea una NUEVA lista solo con los que cumplen la condición.',
      code: `variable precios = [100, 250, 150, 300, 80]

variable baratos = precios.filtrar(funcion(precio) {
    retornar precio < 200
})

mostrar "Todos: " + texto(precios)
mostrar "Baratos: " + texto(baratos)

mostrar ""
mostrar "=== FILTRAR NÚMEROS ==="
variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

variable pares = numeros.filtrar(funcion(n) {
    retornar n.esPar()
})

mostrar "Pares: " + texto(pares)

variable mayores = numeros.filtrar(funcion(n) {
    retornar n > 5
})

mostrar "Mayores que 5: " + texto(mayores)`,
      explanation:
        '**Filtrar elementos:**\n• `.filtrar(funcion(elem) { retornar condicion })`\n• Retorna NUEVA lista con los que cumplen\n• Original NO se modifica\n• Nueva puede ser más corta\n\n**Patrón:**\n```\nvariable filtrada = lista.filtrar(funcion(x) {\n    retornar x > 10\n})\n```\n\n**Como filtrar tu lista:**\nLista: [100, 250, 150, 300, 80]\nFiltro: < 200\nResultado: [100, 150, 80]\nOriginal intacta: [100, 250, 150, 300, 80]\n\n💡 Si ninguno cumple → lista vacía []',
      challenge:
        'Lista de edades: [15, 22, 17, 30, 12, 25]\n• Filtra solo los mayores de edad (>= 18)\n• Guarda en variable mayores\n• Muestra cuántos son mayores de edad\n• Debe mostrar 3',
      validation: {
        requiredCode: [
          '/\\.filtrar\\s*\\(/',
          '/funcion\\s*\\(/',
          '/retornar/',
          '/>=\\s*18|>\\s*17/',
        ],
        expectedOutputs: ['/3/'],
      },
    },
    {
      title: 'Transformar: Mapear a Nueva Lista',
      content:
        '¿Quiero todos los precios con IVA? El método .mapear() transforma cada elemento y retorna una NUEVA lista.',
      code: `variable precios = [100, 200, 150]

variable conIVA = precios.mapear(funcion(precio) {
    retornar precio * 1.21
})

mostrar "Original: " + texto(precios)
mostrar "Con IVA: " + texto(conIVA)

mostrar ""
mostrar "=== DOBLES Y CUADRADOS ==="
variable numeros = [1, 2, 3, 4, 5]

variable dobles = numeros.mapear(funcion(n) {
    retornar n * 2
})
mostrar "Dobles: " + texto(dobles)

variable cuadrados = numeros.mapear(funcion(n) {
    retornar n * n
})
mostrar "Cuadrados: " + texto(cuadrados)`,
      explanation:
        '**Transformar elementos:**\n• `.mapear(funcion(elem) { retornar nuevo })`\n• Retorna NUEVA lista transformada\n• Original NO se modifica\n• Misma longitud que original\n\n**Patrón:**\n```\nvariable nueva = lista.mapear(funcion(x) {\n    retornar x * 2\n})\n```\n\n**Como derivar lista:**\nOriginal: [100, 200, 300]\nTransformar: × 1.21\nNueva: [121, 242, 363]\nOriginal: [100, 200, 300] (intacta)\n\n💡 Original permanece igual',
      challenge:
        'Lista de temperaturas en Celsius: [0, 10, 20, 30]\n• Usa .mapear() para convertir a Fahrenheit\n• Fórmula: F = C * 9 / 5 + 32\n• Muestra la lista en Fahrenheit\n• 0°C debe dar 32°F',
      validation: {
        requiredCode: [
          '/\\.mapear\\s*\\(/',
          '/funcion\\s*\\(/',
          '/retornar/',
          '/9.*5|1\\.8/',
          '/32/',
        ],
        expectedOutputs: ['/32/', '/50/', '/68/', '/86/'],
      },
    },
    {
      title: 'Reducir: Combinar Todo en Uno',
      content:
        '¿Cuál es el total de mi lista? El método .reducir() combina todos los elementos en un solo valor.',
      code: `variable precios = [100, 250, 150, 300]

variable total = precios.reducir(funcion(acumulado, precio) {
    retornar acumulado + precio
}, 0)

mostrar "Total: $" + texto(total)

mostrar ""
mostrar "=== OPERACIONES ==="
variable numeros = [1, 2, 3, 4, 5]

variable suma = numeros.reducir(funcion(acc, n) {
    retornar acc + n
}, 0)
mostrar "Suma: " + texto(suma)

variable producto = numeros.reducir(funcion(acc, n) {
    retornar acc * n
}, 1)
mostrar "Producto: " + texto(producto)`,
      explanation:
        '**Reducir a un valor:**\n• `.reducir(funcion(acc, elem) { ... }, inicial)`\n• Combina todos en un solo valor\n• acc = acumulador (valor hasta ahora)\n• elem = elemento actual\n• inicial = valor de inicio\n\n**Patrón:**\n```\nvariable total = lista.reducir(funcion(acc, x) {\n    retornar acc + x\n}, 0)\n```\n\n**Como sumar cuenta:**\nEmpiezas: $0\nItem 1: $100 → 0 + 100 = $100\nItem 2: $250 → 100 + 250 = $350\nItem 3: $150 → 350 + 150 = $500\n\n💡 Inicial: 0 para suma, 1 para producto',
      challenge:
        'Lista de cantidades: [5, 10, 15, 20]\n• Usa .reducir() para sumarlas\n• Empieza en 0\n• Guarda en variable total\n• Muestra el total (debe ser 50)',
      validation: {
        requiredCode: [
          '/\\.reducir\\s*\\(/',
          '/funcion\\s*\\(/',
          '/retornar/',
          '/\\+/',
          '/,\\s*0\\s*\\)/',
        ],
        expectedOutputs: ['/50/'],
      },
    },
    {
      title: 'Encadenar: Combinar Métodos',
      content:
        'La magia de las listas: puedes encadenar métodos para hacer operaciones complejas en forma clara y legible.',
      code: `variable precios = [100, 250, 150, 300, 80, 200]

mostrar "=== FILTRAR Y MAPEAR ==="
variable baratosConIVA = precios
    .filtrar(funcion(p) { retornar p < 200 })
    .mapear(funcion(p) { retornar p * 1.21 })

mostrar "Baratos con IVA: " + texto(baratosConIVA)

mostrar ""
mostrar "=== TODO EN UNO ==="
variable totalBaratos = precios
    .filtrar(funcion(p) { retornar p < 200 })
    .mapear(funcion(p) { retornar p * 1.21 })
    .reducir(funcion(acc, p) { retornar acc + p }, 0)

mostrar "Total: $" + texto(totalBaratos)

mostrar ""
mostrar "=== NÚMEROS ==="
variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

variable resultado = numeros
    .filtrar(funcion(n) { retornar n.esPar() })
    .mapear(funcion(n) { retornar n * 2 })
    .reducir(funcion(acc, n) { retornar acc + n }, 0)

mostrar "Suma de pares doblados: " + texto(resultado)`,
      explanation:
        '**Encadenar métodos:**\n• Cada método retorna lista\n• Puedes llamar otro método inmediatamente\n• Se lee de arriba hacia abajo\n\n**Pipeline:**\n```\nlista\n  .filtrar(...)  → lista filtrada\n  .mapear(...)   → lista transformada\n  .reducir(...)  → valor único\n```\n\n**Como procesar compras:**\n1. Filtrar: solo < $200\n2. Mapear: agregar IVA\n3. Reducir: sumar todo\n\n💡 Código muy legible\n💡 Sin variables intermedias',
      challenge:
        'Lista: [10, 15, 20, 25, 30, 35, 40]\n• Filtra números mayores que 20\n• Multiplica cada uno por 2\n• Suma todos\n• Todo en un encadenamiento\n• Debe dar 260',
      validation: {
        requiredCode: [
          '/\\.filtrar\\s*\\(/',
          '/\\.mapear\\s*\\(/',
          '/\\.reducir\\s*\\(/',
          '/>\\s*20/',
          '/\\*\\s*2/',
        ],
        expectedOutputs: ['/260/'],
      },
    },
    {
      title: 'Sistema Completo: Carrito de Compras',
      content:
        'Combina todo lo aprendido: crea un sistema de carrito con productos, precios, filtros, y totales.',
      code: `mostrar "=== SISTEMA DE CARRITO ==="

variable productos = ["Mouse", "Teclado", "Monitor", "WebCam", "Audífonos"]
variable precios = [150, 300, 2000, 500, 200]

mostrar "Productos disponibles:"
productos.recorrer(funcion(producto, i) {
    mostrar (i + 1).aTexto() + ". " + producto + ": $" + precios[i].aTexto()
})

mostrar ""
mostrar "=== ANÁLISIS ==="

variable totalInventario = precios.reducir(funcion(acc, p) {
    retornar acc + p
}, 0)
mostrar "Valor total: $" + totalInventario.aTexto()

variable accesibles = precios.filtrar(funcion(p) {
    retornar p <= 500
})
mostrar "Productos accesibles (≤$500): " + texto(accesibles.longitud())

variable promedio = totalInventario / precios.longitud()
mostrar "Precio promedio: $" + promedio.aTexto()

mostrar ""
mostrar "=== APLICAR DESCUENTO ==="

variable conDescuento = precios.mapear(funcion(p) {
    retornar p * 0.8
})
mostrar "Precios con 20% descuento:"
productos.recorrer(funcion(prod, i) {
    mostrar prod + ": $" + conDescuento[i].aTexto()
})`,
      explanation:
        '**Sistema completo usa:**\n\n✅ **Listas paralelas:**\n• productos[i] corresponde a precios[i]\n• Índice sincronizado\n\n✅ **Métodos combinados:**\n• .recorrer() para mostrar\n• .reducir() para totales\n• .filtrar() para seleccionar\n• .mapear() para transformar\n\n✅ **Operaciones:**\n• Sumar inventario\n• Filtrar por precio\n• Calcular promedio\n• Aplicar descuentos\n\nEste es un patrón real de e-commerce.',
      summary:
        '🎉 ¡Felicitaciones! Ahora dominas las listas:\n\n**Crear y acceder:**\n• `[elem1, elem2, ...]` - Crear lista\n• `lista[indice]` - Acceder (empieza en 0)\n• `.longitud()` - Cantidad de elementos\n• `.primero()`, `.ultimo()` - Atajos\n\n**Modificar:**\n• `.agregar(elem)` - Añadir al final\n• `.remover()` - Quitar último\n• `lista[i] = valor` - Modificar por índice\n\n**Buscar:**\n• `.contiene(elem)` - ¿Existe?\n\n**Procesar:**\n• `.recorrer(fn)` - Ejecutar para cada uno\n\n**Transformar:**\n• `.filtrar(fn)` - Nueva lista filtrada\n• `.mapear(fn)` - Nueva lista transformada\n• `.reducir(fn, inicial)` - Combinar en uno\n\n**Patrones:**\n💡 Lista vacía → agregar items → procesar\n💡 Filtrar → Mapear → Reducir (pipeline)\n💡 Listas paralelas (índices sincronizados)\n\n¡Las listas son fundamentales en toda aplicación!',
      challenge:
        'Sistema de ventas completo:\n• Lista ventas: [1500, 2300, 1800, 2100, 1900]\n• Filtra ventas mayores a 1800\n• Calcula el total de esas ventas con .reducir()\n• Muestra cuántas ventas fueron mayores a 1800\n• Muestra el total de esas ventas\n• Debe haber 3 ventas y sumar 6300',
      validation: {
        requiredCode: [
          '/\\.filtrar\\s*\\(/',
          '/\\.reducir\\s*\\(/',
          '/1800/',
          '/\\.longitud\\s*\\(/',
        ],
        expectedOutputs: ['/3/', '/6300/'],
      },
    },
  ],
};
