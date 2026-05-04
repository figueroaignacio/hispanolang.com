import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '⚡', text: 'Lección 11' },
  title: 'Funciones en',
  titleGradient: ' HispanoLang',
  description: 'Aprende a crear código reutilizable como electrodomésticos',
  prev: { url: '/lecciones/bucles', title: 'Bucles' },
  next: { url: '/lecciones/listas', title: 'Listas' },
  steps: [
    {
      title: 'Tu Primer Electrodoméstico',
      content:
        'Imagina que cada vez que quieras calentar algo tuvieras que escribir todo el proceso: conectar, ajustar temperatura, esperar... Por suerte tienes un microondas: presionas un botón y listo.\n\nLas funciones son lo mismo: código que defines una vez y usas muchas veces.',
      code: `funcion tostarPan() {
    mostrar "🍞 Tostando pan..."
    mostrar "Nivel: Medio"
    mostrar "¡Pan tostado listo!"
}

tostarPan()
tostarPan()`,
      explanation:
        "**Crear una función:**\n\n1. Palabra clave: `funcion`\n2. Nombre descriptivo: `tostarPan`\n3. Paréntesis: `()`\n4. Código entre llaves: `{ ... }`\n\n**Usar la función:**\n• Escribes su nombre con paréntesis: `tostarPan()`\n• Se llama 'llamar' o 'invocar' la función\n• Puedes llamarla cuantas veces quieras\n\nEs como tener un electrodoméstico listo para usar.",
      challenge:
        "Crea una función llamada `licuarFrutas` que:\n• Muestre '🍓 Licuando frutas...'\n• Muestre 'Velocidad: Máxima'\n• Muestre '¡Smoothie listo!'\n• Llámala 2 veces",
      validation: {
        requiredCode: [
          '/funcion\\s+licuarFrutas\\s*\\(/',
          '/licuarFrutas\\s*\\(\\)/',
          '/licuarFrutas\\s*\\(\\)/',
          '/mostrar/',
        ],
        expectedOutputs: ['/Licuando|licuando/i', '/Smoothie|smoothie/i'],
      },
    },
    {
      title: 'Configurar el Electrodoméstico: Parámetros',
      content:
        'El microondas tiene configuración: tiempo y potencia. No siempre calientas 2 minutos. Los parámetros son esas configuraciones que le das a tu función.',
      code: `funcion calentar(comida, minutos) {
    mostrar "Calentando " + comida
    mostrar "Tiempo: " + minutos + " minutos"
    mostrar "¡Listo!"
}

calentar("pizza", 2)
calentar("sopa", 3)
calentar("leche", 1)`,
      explanation:
        "**Parámetros:**\n• Van entre paréntesis: `(comida, minutos)`\n• Son variables que la función recibe\n• Sepáralos con comas si hay varios\n\n**Al llamar la función:**\n• Pasas los valores: `calentar('pizza', 2)`\n• El ORDEN importa: primer valor = primer parámetro\n• `'pizza'` va a `comida`, `2` va a `minutos`\n\nComo ajustar tiempo y potencia en el microondas.",
      challenge:
        "Crea una función `tostar(alimento, nivel)` que:\n• Muestre 'Tostando [alimento]'\n• Muestre 'Nivel: [nivel]'\n• Muestre '¡Tostado perfecto!'\n• Llámala con 'pan' nivel 3, y con 'bagel' nivel 5",
      validation: {
        requiredCode: [
          '/funcion\\s+tostar\\s*\\(\\s*\\w+\\s*,\\s*\\w+/',
          "/tostar\\s*\\(.*pan.*3|tostar\\s*\\(.*'pan'.*3/",
          "/tostar\\s*\\(.*bagel.*5|tostar\\s*\\(.*'bagel'.*5/",
        ],
        expectedOutputs: ['/Tostando|tostando/i', '/pan/i', '/bagel/i'],
      },
    },
    {
      title: 'El Resultado: retornar Valores',
      content:
        "Cuando usas la licuadora, no solo hace ruido: te da un smoothie. Cuando usas una función, puede devolverte un resultado con 'retornar'.",
      code: `funcion calcularTiempoMicroondas(gramos) {
    variable minutos = gramos / 100
    retornar minutos
}

variable tiempo1 = calcularTiempoMicroondas(500)
mostrar "Para 500g: " + tiempo1 + " minutos"

variable tiempo2 = calcularTiempoMicroondas(300)
mostrar "Para 300g: " + tiempo2 + " minutos"`,
      explanation:
        '**retornar hace dos cosas:**\n\n1. Devuelve un valor desde la función\n2. Termina la función inmediatamente\n\n**Usar el valor retornado:**\n• Guardarlo: `variable x = calcular(...)`\n• Mostrarlo: `mostrar calcular(...)`\n• En operaciones: `calcular(500) + calcular(300)`\n\nEl código después de `retornar` NO se ejecuta.',
      challenge:
        "Crea función `calcularPorciones(personas)` que:\n• Cada persona necesita 250 gramos\n• Retorne el total de gramos\n• Calcula para 4 personas y muestra el resultado\n• Debe mostrar '1000'",
      validation: {
        requiredCode: [
          '/funcion\\s+calcularPorciones/',
          '/250/',
          '/retornar/',
          '/calcularPorciones\\s*\\(\\s*4/',
        ],
        expectedOutputs: ['/1000/'],
      },
    },
    {
      title: 'Con Resultado vs Sin Resultado',
      content:
        'Algunos electrodomésticos solo hacen su trabajo (lavaplatos lava, nada más). Otros te dan algo (licuadora te da smoothie, cafetera te da café).\n\nLas funciones son igual: algunas retornan, otras no.',
      code: `funcion lavarPlatos(cantidad) {
    mostrar "Lavando " + cantidad + " platos..."
    mostrar "¡Platos limpios!"
}

funcion hacerCafe(tipo) {
    variable cafe = "Café " + tipo + " listo"
    retornar cafe
}

lavarPlatos(10)

variable miCafe = hacerCafe("Americano")
mostrar miCafe

variable tuCafe = hacerCafe("Latte")
mostrar tuCafe`,
      explanation:
        "**Sin retornar:**\n• Solo ejecuta acciones (mostrar, modificar)\n• Se llama: `lavarPlatos(10)`\n• No guardas el resultado\n\n**Con retornar:**\n• Produce un valor que usas\n• Se llama: `variable x = hacerCafe('Latte')`\n• Puedes guardar, mostrar, o usar en cálculos\n\n💡 Si necesitas el resultado después, usa `retornar`",
      challenge:
        "Crea dos funciones:\n1. `mostrarRecibo(producto)` - Muestra 'Producto: [producto]' y 'Gracias por su compra' (sin retornar)\n2. `calcularIVA(precio)` - Retorna precio * 1.21\n• Llama mostrarRecibo con 'Microondas'\n• Calcula IVA de 1000 y muestra el resultado",
      validation: {
        requiredCode: [
          '/funcion\\s+mostrarRecibo/',
          '/funcion\\s+calcularIVA/',
          '/retornar.*1\\.21|retornar.*precio.*\\*.*1\\.21/',
          '/mostrarRecibo\\s*\\(/',
          '/calcularIVA\\s*\\(.*1000/',
        ],
        expectedOutputs: ['/Microondas|microondas/i', '/1210/'],
      },
    },
    {
      title: 'Variables Locales: Dentro del Electrodoméstico',
      content:
        'Lo que pasa dentro del microondas se queda dentro del microondas. Las variables creadas dentro de una función solo existen ahí dentro.',
      code: `variable temperaturaExterna = 25

funcion calentar(comida) {
    variable temperaturaInterna = 100
    mostrar "Dentro: " + temperaturaInterna + "°C"
    mostrar "Fuera: " + temperaturaExterna + "°C"
}

calentar("sopa")
mostrar "Temperatura externa: " + temperaturaExterna + "°C"`,
      explanation:
        '**Variables locales:**\n• Creadas DENTRO de función\n• Solo existen dentro de esa función\n• Se destruyen cuando termina la función\n• `temperaturaInterna` no existe fuera\n\n**Variables globales:**\n• Creadas FUERA de funciones\n• Se ven en todas partes\n• `temperaturaExterna` se ve dentro y fuera\n\nComo el calor dentro del microondas: no sale.',
      challenge:
        "Crea una función `prepararBebida()` que:\n• Tenga una variable local `temperatura` = 80\n• Muestre 'Temperatura de bebida: [temperatura]°C'\n• Fuera de la función, crea variable `temperaturaAmbiente` = 20\n• Llama la función y luego muestra la temperatura ambiente",
      validation: {
        requiredCode: [
          '/funcion\\s+prepararBebida/',
          '/variable\\s+temperatura.*=.*80/',
          '/temperaturaAmbiente.*=.*20/',
          '/prepararBebida\\s*\\(/',
        ],
        expectedOutputs: ['/80/', '/20/'],
      },
    },
    {
      title: 'Electrodomésticos que Usan Otros',
      content:
        'Una receta puede usar varios electrodomésticos: primero la licuadora, luego el horno. Las funciones pueden llamar a otras funciones.',
      code: `funcion picar(ingrediente) {
    mostrar "Picando " + ingrediente
    retornar ingrediente + " picado"
}

funcion cocinar(ingrediente) {
    mostrar "Cocinando " + ingrediente
    retornar ingrediente + " cocido"
}

funcion prepararSopa() {
    variable cebolla = picar("cebolla")
    variable zanahoria = picar("zanahoria")
    variable resultado = cocinar("sopa")
    retornar resultado
}

variable sopa = prepararSopa()
mostrar "Resultado: " + sopa`,
      explanation:
        '**Composición de funciones:**\n• Una función llama a otras\n• Cada una hace una tarea específica\n• Las combinas para tareas complejas\n\n**Ventajas:**\n✅ Código organizado en piezas pequeñas\n✅ Cada función es fácil de entender\n✅ Puedes reutilizar cada pieza\n✅ Fácil encontrar y arreglar errores\n\nComo usar varios electrodomésticos en secuencia.',
      challenge:
        "Crea un sistema de conversión:\n• Función `celsiusAFahrenheit(c)` que retorne `c * 9 / 5 + 32`\n• Función `mostrarTemperatura(celsius)` que:\n  - Convierta usando la primera función\n  - Muestre '[celsius]°C = [fahrenheit]°F'\n• Llama mostrarTemperatura con 100",
      validation: {
        requiredCode: [
          '/funcion\\s+celsiusAFahrenheit/',
          '/funcion\\s+mostrarTemperatura/',
          '/celsiusAFahrenheit\\s*\\(/',
          '/retornar/',
          '/mostrarTemperatura\\s*\\(.*100/',
        ],
        expectedOutputs: ['/100.*212|212.*100/'],
      },
    },
    {
      title: 'Funciones Anónimas: Electrodomésticos Portátiles',
      content:
        'A veces no necesitas darle nombre a una función, especialmente si la usas en un solo lugar. Como un batidor manual que guardas en un cajón específico.',
      code: `variable calentar = funcion(comida, minutos) {
    mostrar "Calentando " + comida + " por " + minutos + " min"
    retornar comida + " caliente"
}

variable resultado = calentar("pizza", 2)
mostrar resultado

variable calcularCosto = funcion(precio, cantidad) {
    retornar precio * cantidad
}

variable total = calcularCosto(150, 3)
mostrar "Total: $" + total`,
      explanation:
        '**Función anónima:**\n• No tiene nombre después de `funcion`\n• Se guarda en una variable\n• Se usa a través de esa variable\n\n**Sintaxis:**\n```\nvariable nombre = funcion(params) {\n    código\n}\n```\n\n**Usar:**\n• Igual que función normal: `nombre(argumentos)`\n\nÚtil para funciones auxiliares pequeñas.',
      challenge:
        'Crea una función anónima guardada en `calcularDescuento` que:\n• Reciba `precio` y `porcentaje`\n• Retorne el precio con descuento aplicado\n• Ejemplo: precio 1000, descuento 20% → retorna 800\n• Calcula el descuento de $500 con 30% y muéstralo',
      validation: {
        requiredCode: [
          '/variable\\s+calcularDescuento\\s*=\\s*funcion/',
          '/retornar/',
          '/calcularDescuento\\s*\\(.*500.*30|calcularDescuento\\s*\\(.*500.*0\\.3/',
        ],
        expectedOutputs: ['/350/'],
      },
    },
    {
      title: 'Cocina Completa: Sistema Integrado',
      content:
        'Ahora combina todo lo aprendido: crea un sistema completo con múltiples funciones trabajando juntas, como una cocina moderna con todos sus electrodomésticos.',
      code: `funcion calcularTiempo(gramos, tipo) {
    si tipo == "microondas" {
        retornar gramos / 100
    } sino {
        retornar gramos / 50
    }
}

funcion validarTemperatura(temp) {
    si temp < 0 o temp > 250 {
        retornar falso
    }
    retornar verdadero
}

funcion prepararComida(nombre, gramos, tipo, temp) {
    mostrar "=== " + nombre + " ==="
    
    variable esValida = validarTemperatura(temp)
    si !esValida {
        mostrar "Temperatura inválida"
        retornar "Error"
    }
    
    variable minutos = calcularTiempo(gramos, tipo)
    mostrar "Tiempo: " + minutos + " min"
    mostrar "Temperatura: " + temp + "°C"
    mostrar "Método: " + tipo
    mostrar "¡Listo!"
    
    retornar nombre + " preparado"
}

variable plato1 = prepararComida("Pizza", 500, "horno", 180)
mostrar plato1

variable plato2 = prepararComida("Sopa", 300, "microondas", 100)
mostrar plato2`,
      explanation:
        '**Sistema completo incluye:**\n\n✅ Funciones auxiliares (`calcularTiempo`, `validarTemperatura`)\n✅ Función principal que las usa (`prepararComida`)\n✅ Validaciones (temperatura válida)\n✅ Lógica condicional (diferentes cálculos)\n✅ Retornos útiles\n✅ Mensajes informativos\n\n**Principios aplicados:**\n• Cada función hace UNA cosa\n• Funciones pequeñas y reutilizables\n• Composición: unas llaman a otras\n• Código organizado y mantenible',
      challenge:
        "Crea tu propio sistema de pedidos de café:\n• Función `calcularPrecio(tipo)`: 'Espresso'=50, 'Latte'=80, 'Cappuccino'=90, otros=60\n• Función `aplicarDescuentoCliente(precio, esVIP)`: si esVIP retorna precio * 0.8, sino retorna precio\n• Función `procesarPedido(tipoCafe, esVIP)` que:\n  - Calcule el precio base con calcularPrecio\n  - Aplique descuento con aplicarDescuentoCliente\n  - Muestre 'Café: [tipo] - Precio: $[precioFinal]'\n  - Retorne el precio final\n• Procesa un pedido de 'Latte' con cliente VIP (debe mostrar 64)",
      summary:
        '🎉 ¡Felicitaciones! Ahora dominas las funciones:\n\n**Conceptos clave:**\n• **Declaración**: `funcion nombre(params) { código }`\n• **Parámetros**: Configuración de la función\n• **retornar**: Devuelve un resultado\n• **Variables locales**: Solo existen dentro\n• **Composición**: Funciones que usan funciones\n• **Anónimas**: Sin nombre, en variables\n\n**Ventajas:**\n✅ Reutilizar código sin repetir\n✅ Organizar código en piezas pequeñas\n✅ Más fácil de entender y mantener\n✅ Fácil probar y debuggear\n\n**Buenas prácticas:**\n💡 Nombres descriptivos\n💡 Una función = una tarea\n💡 Funciones cortas (<20 líneas)\n💡 Documenta las complejas\n\n¡Siguiente: aprende sobre listas y arrays!',
      validation: {
        requiredCode: [
          '/funcion\\s+calcularPrecio/',
          '/funcion\\s+aplicarDescuentoCliente/',
          '/funcion\\s+procesarPedido/',
          '/Espresso.*50|50.*Espresso/',
          '/Latte.*80|80.*Latte/',
          '/0\\.8|\\*.*0\\.8/',
          "/procesarPedido\\s*\\(.*Latte.*verdadero|procesarPedido\\s*\\(.*'Latte'.*verdadero/i",
          '/retornar/',
        ],
        expectedOutputs: ['/64/'],
      },
    },
  ],
};
