export const docsData = {
  variables: {
    title: '📦 Variables',
    description:
      "Una variable es como una caja donde guardas información. Le pones un nombre a la caja para saber qué hay adentro. Por ejemplo, una caja llamada 'likes' que guarda el número de me gusta en una publicación de Instagram.",
    subsections: [
      {
        title: 'Creando Variables',
        description:
          'Imagina que estás en Instagram mirando una publicación. Hay información que se guarda: cuántos likes tiene, quién la publicó, cuántos comentarios hay. Todo eso se guarda en variables.',
        syntax: 'variable nombre = valor',
        code: `
variable nombreUsuario = "maria_gomez"
variable likes = 127
variable comentarios = 45

mostrar nombreUsuario
mostrar likes
mostrar comentarios
  `,
        output: 'maria_gomez\n127\n45',
        notes: [
          "Escribimos 'variable' para crear una caja nueva donde guardar información",
          'El nombre de la variable va sin comillas: likes, nombreUsuario, comentarios',
          'Los números van sin comillas: 127, 45',
          'El texto va entre comillas: "maria_gomez"',
          "La palabra 'mostrar' hace que aparezca en pantalla lo que está guardado en la variable",
        ],
      },
      {
        title: 'Cambiando lo que Está Guardado',
        description:
          "Cuando alguien le da 'me gusta' a la publicación de Instagram, el número de likes tiene que aumentar. Necesitamos cambiar lo que está guardado en la variable.",
        code: `
variable likes = 127
mostrar likes

likes = 128
mostrar likes

likes = 130
mostrar likes
  `,
        output: '127\n128\n130',
        notes: [
          "Para cambiar el valor, NO escribas 'variable' de nuevo",
          'Solo escribís el nombre de la variable y el nuevo valor: likes = 128',
          'El número viejo (127) se borra y entra el nuevo (128)',
          'Podés cambiar el valor todas las veces que quieras',
          'Cada vez que alguien da like, el número cambia',
        ],
      },
      {
        title: 'Haciendo Cálculos con Variables',
        description:
          'En vez de escribir el número nuevo cada vez, podemos hacer una cuenta. Si la publicación tenía 127 likes y llegan 5 más, podemos sumarle 5 al número que ya estaba guardado.',
        code: `
variable likes = 127
mostrar likes

likes = likes + 5
mostrar likes

likes = likes + 10
mostrar likes
  `,
        output: '127\n132\n142',
        notes: [
          'likes + 5 significa: agarrá el número que hay en likes (127) y sumale 5',
          'El resultado de la suma (132) se guarda de vuelta en likes',
          'Esto es muy útil porque no necesitas saber cuánto había antes',
          'Funciona con suma (+), resta (-), multiplicación (*) y división (/)',
          'Es como cuando Instagram actualiza automáticamente el contador de likes',
        ],
      },
      {
        title: 'Atajos para Operaciones',
        description:
          "Cuando querés sumar, restar, multiplicar o dividir el valor actual de una variable, hay atajos más cortos que escribir 'likes = likes + 5'.",
        code: `
variable seguidores = 100
mostrar seguidores

seguidores += 25
mostrar seguidores

seguidores -= 10
mostrar seguidores

variable precio = 50
precio *= 2
mostrar precio

precio /= 4
mostrar precio
  `,
        output: '100\n125\n115\n100\n25',
        notes: [
          'seguidores += 25 es lo mismo que seguidores = seguidores + 25',
          'seguidores -= 10 es lo mismo que seguidores = seguidores - 10',
          'precio *= 2 es lo mismo que precio = precio * 2',
          'precio /= 4 es lo mismo que precio = precio / 4',
          'Estos atajos hacen tu código más corto y más fácil de leer',
          'Son muy útiles cuando actualizás contadores o acumuladores',
        ],
      },
    ],
  },
  constantes: {
    title: '🔒 Constantes',
    description:
      'Las constantes son valores que nunca cambian. Imagina las reglas fijas de Twitter/X: el límite de 280 caracteres por tweet, el precio de la suscripción premium. Estas son constantes porque Twitter decidió que no van a cambiar mientras uses la app.',
    subsections: [
      {
        title: '¿Qué son las Constantes?',
        description:
          'En Twitter/X hay cosas que cambian todo el tiempo (tus tweets, tus seguidores, los likes) y cosas que son reglas fijas de la plataforma (límite de caracteres, precio de verificación). Las constantes son para esas reglas fijas.',
        syntax: 'constante NOMBRE = valor',
        code: `
constante LIMITE_CARACTERES = 280
constante PRECIO_VERIFICACION = 8
constante MAX_HASHTAGS = 30
constante NOMBRE_PLATAFORMA = "Twitter/X"

mostrar "Límite de caracteres: " + LIMITE_CARACTERES
mostrar "Precio verificación: $" + PRECIO_VERIFICACION
mostrar "Plataforma: " + NOMBRE_PLATAFORMA
  `,
        output: 'Límite de caracteres: 280\nPrecio verificación: $8\nPlataforma: Twitter/X',
        notes: [
          'Las constantes se escriben con MAYUSCULAS_Y_GUIONES por convención',
          'Se usan para valores que NO deben cambiar: límites, precios, configuración',
          'Una vez que creas una constante, su valor queda fijo para siempre',
          'Si intentas cambiarla, el programa te muestra un error (esto es bueno, te protege)',
        ],
      },
      {
        title: 'Creando Constantes',
        description:
          "Para crear una constante, usas la palabra 'constante' en vez de 'variable'. El resto es igual: le das un nombre y un valor.",
        code: `
constante LIMITE_CARACTERES = 280
constante PRECIO_BASICO = 3
constante PRECIO_PREMIUM = 8
constante MAX_IMAGENES_TWEET = 4

mostrar "Un tweet puede tener máximo " + LIMITE_CARACTERES + " caracteres"
mostrar "Puedes adjuntar hasta " + MAX_IMAGENES_TWEET + " imágenes"
  `,
        output: 'Un tweet puede tener máximo 280 caracteres\nPuedes adjuntar hasta 4 imágenes',
        notes: [
          "Usa 'constante' en lugar de 'variable' para crearlas",
          'Por convención, los nombres van en MAYÚSCULAS (así es fácil identificarlas)',
          'Puedes crear constantes de texto, números o booleanos',
          'Las constantes se crean una sola vez al inicio del programa',
        ],
      },
      {
        title: 'Constantes vs Variables: ¿Cuándo usar cada una?',
        description:
          'La diferencia es simple: si el valor puede cambiar durante el uso de la app, usa variable. Si es una regla fija que nunca cambia, usa constante.',
        code: `
constante LIMITE_CARACTERES = 280
variable caracteresEscritos = 0

mostrar "Límite: " + LIMITE_CARACTERES
mostrar "Escritos: " + caracteresEscritos

caracteresEscritos = 50
mostrar "Escritos ahora: " + caracteresEscritos

caracteresEscritos = 150
mostrar "Escritos ahora: " + caracteresEscritos
  `,
        output: 'Límite: 280\nEscritos: 0\nEscritos ahora: 50\nEscritos ahora: 150',
        notes: [
          'LIMITE_CARACTERES es constante: Twitter no lo cambia mientras escribís',
          'caracteresEscritos es variable: cambia con cada letra que escribís',
          'Regla práctica: ¿esto cambia mientras uso la app? → variable. ¿Es una regla fija? → constante',
          'Las variables pueden cambiar todas las veces que quieras, las constantes jamás',
        ],
      },
      {
        title: '¿Qué pasa si intentas cambiar una Constante?',
        description:
          'Si intentas cambiar el valor de una constante, el programa te detiene con un error. Esto es una protección: te avisa que estás tratando de romper una regla fija.',
        code: `
constante LIMITE_CARACTERES = 280
mostrar LIMITE_CARACTERES

LIMITE_CARACTERES = 500
  `,
        output: '280\nError: No puedes reasignar una constante',
        notes: [
          'Intentar cambiar una constante causa un error inmediato',
          'Esto es intencional: te protege de modificar accidentalmente valores importantes',
          "Si necesitas que algo pueda cambiar, usa 'variable' en lugar de 'constante'",
          'Los operadores +=, -=, *=, /= tampoco funcionan con constantes',
        ],
      },
      {
        title: 'Casos de Uso Reales',
        description:
          'Las constantes son perfectas para configuración de tu app, límites del sistema, precios y cualquier valor que definas una vez y no deba cambiar.',
        code: `
constante NOMBRE_APP = "MiRedSocial"
constante VERSION = "1.0.0"
constante LIMITE_BIO = 160
constante MAX_SEGUIDORES_GRATIS = 5000
constante PRECIO_PREMIUM = 999

variable usuariosActivos = 1250
variable tweetsHoy = 450

mostrar "App: " + NOMBRE_APP + " v" + VERSION
mostrar "Límite de biografía: " + LIMITE_BIO + " caracteres"
mostrar "Usuarios activos hoy: " + usuariosActivos
mostrar "Tweets publicados hoy: " + tweetsHoy
  `,
        output:
          'App: MiRedSocial v1.0.0\nLímite de biografía: 160 caracteres\nUsuarios activos hoy: 1250\nTweets publicados hoy: 450',
        notes: [
          'Usa constantes para: nombre de app, versión, límites del sistema, precios, configuración',
          'Usa variables para: contadores, estadísticas, datos de usuarios, estados temporales',
          'Mezclar constantes y variables hace tu código más seguro y más fácil de entender',
          "Si alguien más lee tu código, las MAYUSCULAS indican 'esto no cambia'",
        ],
      },
    ],
  },
  comentarios: {
    title: '💬 Comentarios',
    description:
      "Los comentarios son notas que escribís en tu código para vos mismo o para otros programadores. El programa los ignora completamente, como si no existieran. Son como las anotaciones que hacés en una receta de cocina: 'no te olvides de precalentar' o 'esta parte es importante'.",
    subsections: [
      {
        title: '¿Qué son los Comentarios?',
        description:
          "Imagina que estás escribiendo tu receta favorita. Querés dejar notas como 'batir durante 5 minutos' o 'el secreto está en la temperatura'. Los comentarios en programación funcionan igual: son notas en tu código que ayudan a entender qué hace y por qué.",
        syntax: '// Tu nota aquí',
        code: `
// RECETA: Pizza Casera
// Tiempo total: 45 minutos

constante TEMPERATURA_HORNO = 220  // Grados centígrados
constante TIEMPO_HORNEADO = 15     // Minutos
  
variable pizzasHechas = 0

mostrar "Pizzas hechas: " + pizzasHechas  // Contador de producción
  `,
        output: 'Pizzas hechas: 0',
        notes: [
          'Los comentarios empiezan con dos barras: //',
          'Todo lo que escribas después de // es ignorado por el programa',
          'Puedes poner comentarios en su propia línea o al final de una línea de código',
          'Son solo para humanos, el programa no los lee ni los ejecuta',
        ],
      },
      {
        title: '¿Para qué sirven?',
        description:
          'Los comentarios tienen tres usos principales: explicar tu código (como tips en una receta), dejar recordatorios importantes, y desactivar pasos temporalmente sin borrarlos.',
        code: `
// RECETA: Torta de Chocolate
// Porciones: 8

constante HARINA_GRAMOS = 200
constante AZUCAR_GRAMOS = 150
constante HUEVOS = 3

variable pasoActual = 1

// PASO 1: Mezclar ingredientes secos
mostrar "Paso " + pasoActual + ": Tamizar harina"
pasoActual = pasoActual + 1

// PASO 2: Agregar ingredientes húmedos
mostrar "Paso " + pasoActual + ": Batir huevos"
pasoActual = pasoActual + 1

// Para hacer: Agregar paso de decoración
// Para hacer: Calcular calorías totales
  `,
        output: 'Paso 1: Tamizar harina\nPaso 2: Batir huevos',
        notes: [
          'Explica pasos importantes o complejos de tu receta/código',
          'Usa TODO: para dejar recordatorios de cosas pendientes',
          'Organiza tu código con comentarios como títulos de secciones',
          'Documenta cantidades, tiempos o decisiones importantes',
        ],
      },
      {
        title: 'Desactivar Código Temporalmente',
        description:
          "A veces querés probar tu receta sin ciertos ingredientes o pasos. En vez de borrar esas líneas, podés 'comentarlas' para desactivarlas temporalmente.",
        code: `
// RECETA: Panqueques
constante HARINA = 200
constante LECHE = 300
constante HUEVOS = 2

variable panquequesHechos = 0

// mostrar "Debug: harina = " + HARINA
// mostrar "Debug: leche = " + LECHE

panquequesHechos = 5
mostrar "Panqueques listos: " + panquequesHechos

// variable azucar = 50  // Desactivado: versión sin azúcar
  `,
        output: 'Panqueques listos: 5',
        notes: [
          'Comentar líneas es útil para probar diferentes versiones de tu código',
          'Puedes desactivar ingredientes/pasos sin borrarlos, por si los necesitas después',
          "Es más seguro que borrar: siempre podés 'des-comentar' sacando las //",
          'Útil para debug: desactiva líneas para encontrar dónde está el problema',
        ],
      },
      {
        title: 'Buenas Prácticas',
        description:
          'Como en una buena receta, tus comentarios deben agregar información útil, no repetir lo obvio. Aquí hay ejemplos de comentarios buenos y malos.',
        code: `
// ❌ MAL: Comentario obvio que no agrega valor
variable huevos = 3  // Declaramos variable huevos con valor 3
  
// ✅ BIEN: Explica el por qué o da contexto útil
variable huevos = 3  // 3 huevos para receta de 8 porciones
  
// ❌ MAL: Repite exactamente lo que el código hace
temperatura = temperatura + 10  // Sumamos 10 a temperatura
  
// ✅ BIEN: Explica la razón o el contexto
temperatura = temperatura + 10  // Ajuste para horno de gas
  
// ✅ BIEN: Documenta decisiones o tips importantes
constante TEMPERATURA_HORNO = 180
// 180°C es ideal para esta receta: más alto quema los bordes,
// más bajo deja el centro crudo. Probado múltiples veces.

variable tiempoReposo = 30  // IMPORTANTE: No saltear este paso
  `,
        output: '',
        notes: [
          "Explica el 'POR QUÉ', no el 'QUÉ' (el código ya muestra el qué)",
          "Evita comentarios obvios: 'variable x = 5 // asignamos 5 a x' no ayuda",
          'Documenta tips importantes: temperaturas críticas, tiempos exactos, trucos',
          'Si el código es claro por sí mismo, no necesita comentario',
          'Mantén los comentarios actualizados: si cambias el código, actualiza el comentario',
        ],
      },
    ],
  },
  tiposDatos: {
    title: '🔢 Tipos de Datos',
    description:
      "Cuando llenás un formulario online (Netflix, Gmail, Instagram), cada campo pide un tipo diferente de información: tu nombre es texto, tu edad es un número, 'acepto términos' es sí o no. En programación, estos son los tipos de datos.",
    subsections: [
      {
        title: 'Texto (Strings)',
        description:
          'El texto se usa para palabras, frases, nombres, direcciones, emails. Todo lo que escribirías con letras en un formulario. En programación, el texto siempre va entre comillas.',
        syntax: 'variable nombre = "valor entre comillas"',
        code: `
variable nombreUsuario = "maria_dev"
variable email = "maria@gmail.com"
variable ciudad = "Buenos Aires"
variable mensaje = "Hola, ¿cómo estás?"

mostrar nombreUsuario
mostrar email
mostrar ciudad
  `,
        output: 'maria_dev\nmaria@gmail.com\nBuenos Aires',
        notes: [
          'El texto SIEMPRE va entre comillas: "así" o \'así\'',
          'Puedes usar comillas dobles " " o simples \' \', pero sé consistente',
          'Si tu texto tiene comillas, usa el otro tipo: \'Ella dijo "hola"\'',
          'Los espacios dentro de las comillas cuentan: "hola" no es igual a "hola "',
          'El texto puede estar vacío: "" (comillas sin nada adentro)',
        ],
      },
      {
        title: 'Uniendo Texto (Concatenación)',
        description:
          'Puedes unir varios pedazos de texto usando el símbolo +. Es como armar una oración juntando palabras.',
        code: `
variable nombre = "María"
variable apellido = "González"

variable nombreCompleto = nombre + " " + apellido
mostrar nombreCompleto

variable edad = 28
variable presentacion = "Hola, soy " + nombre + " y tengo " + edad + " años"
mostrar presentacion

variable calle = "Av. Corrientes"
variable numero = 1234
variable direccion = calle + " " + numero
mostrar direccion
  `,
        output: 'María González\nHola, soy María y tengo 28 años\nAv. Corrientes 1234',
        notes: [
          'Usa el símbolo + para unir texto',
          'No olvides los espacios: nombre + apellido da "MaríaGonzález" (sin espacio)',
          'Agrega espacios así: nombre + " " + apellido',
          'Cuando unes texto con números, el número se convierte automáticamente a texto',
          'Puedes unir tantos pedazos como quieras: texto1 + texto2 + texto3',
        ],
      },
      {
        title: 'Números',
        description:
          'Los números se usan para cantidades, precios, edades, teléfonos. Cualquier cosa que cuentes o con la que hagas cálculos. Los números NO llevan comillas.',
        syntax: 'variable edad = 25',
        code: `
variable edad = 28
variable codigoPostal = 1414
variable precio = 999
variable temperatura = -5
variable precioConDecimales = 99.50

mostrar edad
mostrar precio
mostrar precioConDecimales

variable suma = 10 + 5
variable resta = 20 - 8
variable multiplicacion = 4 * 3
variable division = 100 / 2

mostrar suma
mostrar division
  `,
        output: '28\n999\n99.5\n15\n50',
        notes: [
          'Los números NO llevan comillas: edad = 25 (no edad = "25")',
          'Pueden ser positivos o negativos: 10, -5',
          'Para decimales usa punto (.), no coma: 99.50 (no 99,50)',
          'Puedes hacer operaciones: +, -, *, /',
          'Mezclar enteros y decimales funciona: 10 + 5.5 = 15.5',
        ],
      },
      {
        title: 'Booleanos (Verdadero o Falso)',
        description:
          'Los booleanos son como los checkbox en un formulario: están marcados o no marcados, sí o no, verdadero o falso. Solo tienen dos valores posibles.',
        syntax: 'variable activo = verdadero',
        code: `
variable aceptoTerminos = verdadero
variable recibirOfertas = falso
variable esMayorDeEdad = verdadero
variable cuentaVerificada = falso

mostrar aceptoTerminos
mostrar recibirOfertas
mostrar esMayorDeEdad
  `,
        output: 'verdadero\nfalso\nverdadero',
        notes: [
          'Solo hay dos valores: verdadero o falso',
          'NO llevan comillas: verdadero (no "verdadero")',
          'Se usan para estados de sí/no: activo/inactivo, marcado/no marcado',
          'Muy útiles para checkbox: aceptó términos (verdadero/falso)',
          'En HispanoLang se escriben en español: verdadero y falso',
        ],
      },
      {
        title: 'Valores Especiales: nulo e indefinido',
        description:
          'A veces un campo en un formulario es opcional (como teléfono secundario). Puede estar vacío a propósito (nulo) o ni siquiera existir (indefinido).',
        code: `
variable nombreUsuario = "juan_perez"
variable email = "juan@email.com"
variable telefonoOpcional = nulo
variable apellidoMaterno = nulo

mostrar nombreUsuario
mostrar email
mostrar telefonoOpcional
mostrar apellidoMaterno

variable edad = 30
variable direccionNoIngresada = indefinido
  `,
        output: 'juan_perez\njuan@email.com\nnulo\nnulo',
        notes: [
          'nulo significa: este campo existe pero está vacío a propósito',
          'indefinido significa: este campo ni siquiera fue creado/asignado',
          'NO llevan comillas: nulo (no "nulo")',
          'nulo es diferente de 0, "" (texto vacío), o falso',
          'Usa nulo para campos opcionales que el usuario dejó en blanco',
        ],
      },
      {
        title: '¿Qué Tipo de Dato Usar?',
        description: 'Guía rápida para decidir qué tipo usar según lo que necesites guardar.',
        code: `
variable nombre = "Ana"
variable apellido = "García"
variable edad = 25
variable email = "ana@email.com"
variable saldoCuenta = 1500.75
variable aceptoTerminos = verdadero
variable recibirNotificaciones = falso
variable telefonoSecundario = nulo
variable apodo = nulo

mostrar "Nombre: " + nombre + " " + apellido
mostrar "Edad: " + edad
mostrar "Saldo: $" + saldoCuenta
mostrar "Acepto términos: " + aceptoTerminos
  `,
        output: 'Nombre: Ana García\nEdad: 25\nSaldo: $1500.75\nAcepto términos: verdadero',
        notes: [
          'Texto: nombres, emails, direcciones, mensajes → entre comillas',
          'Número: edad, precio, cantidad, teléfono → sin comillas',
          'Booleano: checkbox, estados sí/no, activado/desactivado → verdadero o falso',
          'nulo: campos opcionales dejados vacíos → nulo',
          'Si no estás seguro: ¿tiene letras? → texto. ¿solo números? → número. ¿sí/no? → booleano',
        ],
      },
      {
        title: 'Errores Comunes',
        description: 'Errores típicos al elegir tipos de datos y cómo evitarlos.',
        code: `
  variable edadCorrecta = 25
  variable edadIncorrecta = "25"
  
  variable precioTotal = 100 + 50
  mostrar precioTotal
  
  variable precioTexto = "100" + "50"
  mostrar precioTexto
  
  variable mensaje = "Tengo " + 25 + " años"
  mostrar mensaje
  `,
        output: '150\n10050\nTengo 25 años',
        notes: [
          '❌ No pongas números entre comillas si vas a hacer cálculos: "25" es texto, 25 es número',
          '❌ "100" + "50" da "10050" (une texto), no 150',
          '✅ 100 + 50 da 150 (suma números)',
          '✅ Mezclar es OK: "Tengo " + 25 se convierte automáticamente a texto',
          'Si un número está entre comillas, se comporta como texto, no como número',
        ],
      },
    ],
  },
  metodosStrings: {
    title: '🔤 Métodos de Strings',
    description:
      'Los métodos de strings son como las herramientas de edición en Microsoft Word: contar caracteres, cambiar a mayúsculas, buscar y reemplazar texto. Cada texto tiene estas herramientas incorporadas que puedes usar.',
    subsections: [
      {
        title: 'Contar Caracteres',
        description:
          'Como el contador de palabras y caracteres que aparece abajo a la izquierda en Word. Te dice cuántos caracteres tiene tu texto.',
        syntax: 'texto.longitud()',
        code: `
variable titulo = "Mi Documento Importante"
variable parrafo = "Este es un párrafo de ejemplo para contar caracteres."

mostrar "El título tiene " + titulo.longitud() + " caracteres"
mostrar "El párrafo tiene " + parrafo.longitud() + " caracteres"

variable tweet = "Hola mundo"
variable limite = 280
variable restantes = limite - tweet.longitud()
mostrar "Te quedan " + restantes + " caracteres"
  `,
        output:
          'El título tiene 23 caracteres\nEl párrafo tiene 54 caracteres\nTe quedan 270 caracteres',
        notes: [
          '.longitud() retorna la cantidad de caracteres del texto',
          'Los espacios cuentan como caracteres',
          'Útil para límites de caracteres (Twitter, SMS, formularios)',
          'El método se escribe con paréntesis: .longitud()',
        ],
      },
      {
        title: 'Cambiar Mayúsculas y Minúsculas',
        description:
          "Como el botón 'Aa' en Word que cambia el texto a mayúsculas o minúsculas. Muy útil para títulos o para normalizar texto.",
        code: `
variable titulo = "mi documento importante"
variable grito = "no me gusta esto"
variable email = "USUARIO@EMAIL.COM"

mostrar titulo.mayusculas()
mostrar grito.mayusculas()
mostrar email.minusculas()

variable nombre = "JUAN PÉREZ"
variable nombreNormalizado = nombre.minusculas()
mostrar "Hola, " + nombreNormalizado
  `,
        output: 'MI DOCUMENTO IMPORTANTE\nNO ME GUSTA ESTO\nusuario@email.com\nHola, juan pérez',
        notes: [
          '.mayusculas() convierte todo el texto a MAYÚSCULAS',
          '.minusculas() convierte todo el texto a minúsculas',
          'El texto original NO cambia, se crea uno nuevo',
          'Útil para normalizar emails, usernames, comparaciones',
        ],
      },
      {
        title: 'Limpiar Espacios Extra',
        description:
          'Cuando copias texto de internet y pegas en Word, a veces trae espacios extra al inicio o al final. El método .recortar() los elimina automáticamente.',
        code: `
variable textoCopiado = "   Hola mundo   "
variable emailPegado = "  juan@email.com  "
variable nombreConEspacios = "    María    "
  
mostrar "Con espacios: '" + textoCopiado + "'"
mostrar "Sin espacios: '" + textoCopiado.recortar() + "'"
  
mostrar emailPegado.recortar()
mostrar nombreConEspacios.recortar()
  `,
        output:
          "Con espacios: '   Hola mundo   '\nSin espacios: 'Hola mundo'\njuan@email.com\nMaría",
        notes: [
          '.recortar() elimina espacios al inicio y al final del texto',
          'NO elimina espacios del medio, solo de los bordes',
          'Muy útil cuando el usuario copia/pega información',
          'Los espacios normales entre palabras se mantienen',
        ],
      },
      {
        title: 'Buscar en el Texto',
        description:
          'Como usar Ctrl+F en Word para buscar una palabra. Puedes verificar si un texto contiene algo, si empieza con algo, o si termina con algo.',
        code: `
variable documento = "Introducción a la Programación en HispanoLang"
variable email = "usuario@gmail.com"
variable archivo = "reporte_final.pdf"

mostrar documento.incluye("Programación")
mostrar documento.incluye("Python")

mostrar email.incluye("@")
mostrar email.terminaCon(".com")
mostrar email.empiezaCon("usuario")

mostrar archivo.terminaCon(".pdf")
mostrar archivo.terminaCon(".docx")
  `,
        output: 'verdadero\nfalso\nverdadero\nverdadero\nverdadero\nverdadero\nfalso',
        notes: [
          '.incluye(texto) verifica si contiene ese texto → retorna verdadero o falso',
          '.empiezaCon(texto) verifica si comienza con ese texto',
          '.terminaCon(texto) verifica si termina con ese texto',
          "La búsqueda distingue mayúsculas: 'Hola' ≠ 'hola'",
          'Útil para validar: emails tienen @, archivos terminan en .pdf, etc.',
        ],
      },
      {
        title: 'Buscar y Reemplazar',
        description:
          "Como la función Ctrl+H 'Buscar y Reemplazar' en Word. Encuentra todas las veces que aparece una palabra y la cambia por otra.",
        code: `
variable documento = "Hola mundo, mundo feliz"
variable correccion = "El perro es un aninal muy leal"
variable telefono = "123-456-7890"

mostrar documento.reemplazar("mundo", "universo")

mostrar correccion.reemplazar("aninal", "animal")

mostrar telefono.reemplazar("-", "")

variable texto = "Me gusta Python. Python es genial."
mostrar texto.reemplazar("Python", "HispanoLang")
  `,
        output:
          'Hola universo, universo feliz\nEl perro es un animal muy leal\n1234567890\nMe gusta HispanoLang. HispanoLang es genial.',
        notes: [
          '.reemplazar(buscar, reemplazo) cambia TODAS las apariciones',
          'Si la palabra aparece 5 veces, las cambia las 5 veces',
          'El texto original NO cambia, se crea uno nuevo',
          'Si no encuentra la palabra, retorna el texto original sin cambios',
          "La búsqueda distingue mayúsculas: 'Hola' ≠ 'hola'",
        ],
      },
      {
        title: 'Combinando Herramientas',
        description:
          'Como cuando en Word usas varias herramientas seguidas: primero quitas espacios, luego cambias a minúsculas, luego buscas y reemplazas. En programación puedes encadenar métodos.',
        code: `
variable emailSucio = "  USUARIO@EMAIL.COM  "
variable emailLimpio = emailSucio.recortar().minusculas()
mostrar emailLimpio
  
variable titulo = "   MI DOCUMENTO IMPORTANTE   "
variable tituloFormateado = titulo.recortar().minusculas()
mostrar tituloFormateado
  
variable texto = "  Hola MUNDO  "
variable procesado = texto.recortar().mayusculas().reemplazar("MUNDO", "AMIGO")
mostrar procesado
  `,
        output: 'usuario@email.com\nmi documento importante\nHOLA AMIGO',
        notes: [
          'Puedes usar varios métodos seguidos, uno tras otro',
          'Se ejecutan de izquierda a derecha, en orden',
          'Cada método crea un nuevo texto que el siguiente método usa',
          'Ejemplo: .recortar() quita espacios, luego .minusculas() convierte a minúsculas',
          'Es como una cadena de ediciones en Word',
        ],
      },
      {
        title: 'Casos Prácticos',
        description:
          'Situaciones reales donde estos métodos son útiles, como limpiar datos que copias de internet o preparar texto para guardar.',
        code: `
variable nombreUsuario = "  MARIA_DEV  "
variable usuarioLimpio = nombreUsuario.recortar().minusculas()
mostrar "Usuario: " + usuarioLimpio

variable emailFormulario = "Juan@Email.COM"
variable emailNormalizado = emailFormulario.minusculas()
mostrar "Email guardado: " + emailNormalizado

variable busqueda = "Cómo hacer pizza casera"
mostrar "Buscando: " + busqueda
mostrar "Longitud: " + busqueda.longitud() + " caracteres"

variable textoImportado = "   Este texto tiene espacios extra   "
variable textoCorregido = textoImportado.recortar()
mostrar "Antes: '" + textoImportado + "'"
mostrar "Después: '" + textoCorregido + "'"
  `,
        output:
          "Usuario: maria_dev\nEmail guardado: juan@email.com\nBuscando: Cómo hacer pizza casera\nLongitud: 25 caracteres\nAntes: '   Este texto tiene espacios extra   '\nDespués: 'Este texto tiene espacios extra'",
        notes: [
          'Limpia datos antes de guardarlos: quita espacios, normaliza mayúsculas',
          'Valida formatos: emails deben tener @, archivos deben terminar en extensión',
          "Procesa búsquedas: convierte a minúsculas para que 'Pizza' = 'pizza'",
          'Corrige errores comunes: reemplaza palabras mal escritas',
          'Formatea texto: prepara para mostrar o guardar en base de datos',
        ],
      },
    ],
  },
  templateStrings: {
    title: '📝 Template Strings',
    description:
      "Los template strings son como los mensajes automáticos de WhatsApp o emails: tienes una plantilla con espacios en blanco que se llenan automáticamente. En vez de escribir 'Hola ' + nombre + ', tu pedido ' + numero, escribes `Hola ${nombre}, tu pedido ${numero}`.",
    subsections: [
      {
        title: '¿Qué son los Template Strings?',
        description:
          "Imagina que escribes un mensaje automático: 'Hola [NOMBRE], tu saldo es [SALDO]'. Los template strings funcionan así: tienes un texto con espacios que se llenan automáticamente con valores.",
        syntax: '`Texto con ${variable} aquí`',
        code: `
variable nombre = "María"
variable edad = 25

mostrar "Hola, me llamo " + nombre + " y tengo " + edad + " años"

mostrar \`Hola, me llamo \${nombre} y tengo \${edad} años\`
  `,
        output: 'Hola, me llamo María y tengo 25 años\nHola, me llamo María y tengo 25 años',
        notes: [
          'Template strings usan backticks ` ` en lugar de comillas " "',
          'Para insertar variables usas ${variable}',
          'Es más fácil de leer que usar muchos + y comillas',
          'El resultado es exactamente el mismo, pero el código es más limpio',
          'Los backticks están en la tecla al lado del 1, arriba del Tab',
        ],
      },
      {
        title: 'Insertando Variables',
        description:
          'Puedes poner todas las variables que quieras dentro del texto usando ${}. Es como llenar los espacios en blanco de una plantilla.',
        code: `
variable producto = "Pizza"
variable precio = 850
variable cantidad = 2

mostrar \`Producto: \${producto}\`
mostrar \`Precio unitario: $\${precio}\`
mostrar \`Cantidad: \${cantidad}\`

variable cliente = "Juan Pérez"
variable direccion = "Av. Corrientes 1234"
variable telefono = "1234-5678"

mostrar \`Cliente: \${cliente}
Dirección: \${direccion}
Teléfono: \${telefono}\`
  `,
        output:
          'Producto: Pizza\nPrecio unitario: $850\nCantidad: 2\nCliente: Juan Pérez\nDirección: Av. Corrientes 1234\nTeléfono: 1234-5678',
        notes: [
          'Cada ${} se reemplaza automáticamente con el valor de la variable',
          'Puedes tener tantos ${} como necesites en el mismo texto',
          'Los espacios y saltos de línea dentro del template se mantienen',
          'Nota: Para mostrar el símbolo $, usa \\$ (escape) o escribe $ fuera de ${}',
        ],
      },
      {
        title: 'Comparación: Antes vs Ahora',
        description:
          'Veamos la diferencia entre concatenar con + (la forma vieja) y usar template strings (la forma nueva y más fácil).',
        code: `
variable nombre = "Ana"
variable ciudad = "Buenos Aires"
variable edad = 28

mostrar "Hola, soy " + nombre + ", vivo en " + ciudad + " y tengo " + edad + " años."

mostrar \`Hola, soy \${nombre}, vivo en \${ciudad} y tengo \${edad} años.\`

variable producto = "Laptop"
variable marca = "Dell"
variable precio = 50000

mostrar "El producto " + producto + " marca " + marca + " cuesta $" + precio

mostrar \`El producto \${producto} marca \${marca} cuesta $\${precio}\`
  `,
        output:
          'Hola, soy Ana, vivo en Buenos Aires y tengo 28 años.\nHola, soy Ana, vivo en Buenos Aires y tengo 28 años.\nEl producto Laptop marca Dell cuesta $50000\nEl producto Laptop marca Dell cuesta $50000',
        notes: [
          'Con +: muchas comillas, muchos símbolos, fácil olvidar espacios',
          'Con template strings: todo junto, más natural, como escribir normalmente',
          'Template strings son especialmente mejores cuando tienes muchas variables',
          'Es menos probable cometer errores (olvidar espacios, comillas mal cerradas)',
        ],
      },
      {
        title: 'Hacer Cálculos Dentro',
        description:
          'Dentro de ${} no solo puedes poner variables, también puedes hacer cálculos, usar métodos, o cualquier operación.',
        code: `
variable precio = 100
variable cantidad = 3
variable descuento = 15

mostrar \`Precio unitario: $\${precio}\`
mostrar \`Cantidad: \${cantidad}\`
mostrar \`Subtotal: $\${precio * cantidad}\`
mostrar \`Descuento: $\${descuento}\`
mostrar \`Total final: $\${precio * cantidad - descuento}\`

variable nombre = "juan pérez"
mostrar \`Bienvenido \${nombre.mayusculas()}\`

variable email = "  MARIA@EMAIL.COM  "
mostrar \`Email registrado: \${email.recortar().minusculas()}\`
  `,
        output:
          'Precio unitario: $100\nCantidad: 3\nSubtotal: $300\nDescuento: $15\nTotal final: $285\nBienvenido JUAN PÉREZ\nEmail registrado: maria@email.com',
        notes: [
          'Puedes hacer matemática dentro de ${}: ${precio * cantidad}',
          'Puedes usar métodos dentro de ${}: ${nombre.mayusculas()}',
          'Puedes encadenar métodos: ${email.recortar().minusculas()}',
          'Todo lo que está dentro de ${} se evalúa primero, luego se inserta en el texto',
        ],
      },
      {
        title: 'Mensajes de Múltiples Líneas',
        description:
          'Los template strings pueden tener saltos de línea naturales. Perfecto para recibos, emails, mensajes largos.',
        code: `
variable cliente = "María González"
variable fecha = "12/01/2026"
variable producto = "Zapatillas Nike"
variable cantidad = 2
variable precioUnitario = 15000
variable total = cantidad * precioUnitario

variable recibo = \`
═══════════════════════════
         RECIBO DE COMPRA
═══════════════════════════

Cliente: \${cliente}
Fecha: \${fecha}

Producto: \${producto}
Cantidad: \${cantidad}
Precio unitario: $\${precioUnitario}

───────────────────────────
TOTAL A PAGAR: $\${total}
═══════════════════════════
\`

mostrar recibo
  `,
        output:
          '\n═══════════════════════════\n         RECIBO DE COMPRA\n═══════════════════════════\n\nCliente: María González\nFecha: 12/01/2026\n\nProducto: Zapatillas Nike\nCantidad: 2\nPrecio unitario: $15000\n\n───────────────────────────\nTOTAL A PAGAR: $30000\n═══════════════════════════',
        notes: [
          'Los saltos de línea dentro del template se mantienen tal cual',
          'Perfecto para recibos, tickets, emails formateados',
          'Puedes hacer diseños con caracteres ASCII',
          'Todo el formato visual se preserva exactamente como lo escribiste',
        ],
      },
      {
        title: 'Casos Prácticos',
        description:
          'Situaciones reales donde los template strings hacen tu código más limpio y fácil de mantener.',
        code: `
variable nombreUsuario = "ana_dev"
variable seguidoresNuevos = 47
mostrar \`¡\${nombreUsuario}! Tienes \${seguidoresNuevos} seguidores nuevos\`

variable remitente = "Banco Nacional"
variable saldo = 15000
variable ultimoMovimiento = 2500
mostrar \`\${remitente}: Tu saldo actual es $\${saldo}. Último movimiento: -$\${ultimoMovimiento}\`

variable curso = "HispanoLang"
variable leccionActual = 5
variable leccionesTotales = 20
variable porcentaje = (leccionActual / leccionesTotales) * 100
mostrar \`Curso: \${curso} - Progreso: \${leccionActual}/\${leccionesTotales} (\${porcentaje}%)\`

variable nombreArchivo = "documento"
variable extension = "pdf"
variable tamanio = 2.5
mostrar \`Archivo: \${nombreArchivo}.\${extension} - Tamaño: \${tamanio}MB\`
  `,
        output:
          '¡ana_dev! Tienes 47 seguidores nuevos\nBanco Nacional: Tu saldo actual es $15000. Último movimiento: -$2500\nCurso: HispanoLang - Progreso: 5/20 (25%)\nArchivo: documento.pdf - Tamaño: 2.5MB',
        notes: [
          'Notificaciones de apps: más fácil personalizar mensajes',
          'Mensajes bancarios/financieros: insertar montos dinámicamente',
          'Progreso de cursos/tareas: calcular porcentajes en el mensaje',
          'Información de archivos: combinar nombre, extensión, tamaño',
          'Template strings hacen que estos casos sean mucho más simples de escribir',
        ],
      },
      {
        title: '¿Cuándo Usar Template Strings?',
        description:
          'Guía práctica para decidir cuándo usar template strings vs concatenación tradicional.',
        code: `
variable nombre = "Juan"

mostrar "Hola " + nombre

mostrar \`Hola \${nombre}\`

variable producto = "Laptop"
variable marca = "Dell"
variable precio = 45000
variable stock = 5

mostrar "Producto: " + producto + ", Marca: " + marca + ", Precio: $" + precio + ", Stock: " + stock

mostrar \`Producto: \${producto}, Marca: \${marca}, Precio: $\${precio}, Stock: \${stock}\`
  `,
        output:
          'Hola Juan\nHola Juan\nProducto: Laptop, Marca: Dell, Precio: $45000, Stock: 5\nProducto: Laptop, Marca: Dell, Precio: $45000, Stock: 5',
        notes: [
          '✅ Usa template strings cuando: tienes 2+ variables para insertar',
          '✅ Usa template strings cuando: necesitas hacer cálculos en el texto',
          '✅ Usa template strings cuando: el mensaje tiene múltiples líneas',
          '✅ Usa template strings cuando: usas métodos de strings en el mensaje',
          "⚖️ Concatenación simple (solo 1 variable) está OK: 'Hola ' + nombre",
          '📝 En general: template strings son más modernos y recomendados',
        ],
      },
    ],
  },
  operadores: {
    title: '➕ Operadores',
    description:
      'Los operadores son como las mecánicas de un videojuego: sumas puntos, restas vidas, comparas scores, verificas si cumples requisitos para pasar de nivel. Son símbolos que te permiten hacer operaciones con valores.',
    subsections: [
      {
        title: 'Operadores Aritméticos: La Calculadora del Juego',
        description:
          'Los operadores aritméticos son como la calculadora interna del juego que suma puntos, resta vidas, multiplica bonificaciones y calcula daño.',
        syntax: 'a + b, a - b, a * b, a / b, a % b',
        code: `
  variable puntos = 100
  variable bonus = 50
  variable vidas = 3
  
  variable puntosNuevos = puntos + bonus
  mostrar "Puntos totales: " + puntosNuevos
  
  variable vidasPerdidas = vidas - 1
  mostrar "Vidas restantes: " + vidasPerdidas
  
  variable multiplicador = 2
  variable puntosConMultiplicador = puntos * multiplicador
  mostrar "Puntos con multiplicador x2: " + puntosConMultiplicador
  
  variable mitadPuntos = puntos / 2
  mostrar "Mitad de puntos: " + mitadPuntos
  
  variable resto = 17 % 5
  mostrar "Resto de 17 dividido 5: " + resto
  `,
        output:
          'Puntos totales: 150\nVidas restantes: 2\nPuntos con multiplicador x2: 200\nMitad de puntos: 50\nResto de 17 dividido 5: 2',
        notes: [
          '+ (suma): Sumar puntos, bonus, experiencia',
          '- (resta): Restar vidas, energía, munición',
          '* (multiplicación): Aplicar multiplicadores, bonificaciones',
          '/ (división): Calcular promedios, dividir recursos',
          '% (módulo): Obtener el resto de una división (útil para ciclos, turnos)',
        ],
      },
      {
        title: 'Operadores de Asignación Compuesta: Acumulando Stats',
        description:
          'Cuando subes de nivel, tus stats se acumulan. Los operadores compuestos son atajos para actualizar valores: en vez de escribir puntos = puntos + 100, escribes puntos += 100.',
        code: `
  variable puntos = 100
  mostrar "Puntos iniciales: " + puntos
  
  puntos += 50
  mostrar "Después de conseguir moneda: " + puntos
  
  puntos += 30
  mostrar "Después de derrotar enemigo: " + puntos
  
  variable vidas = 5
  vidas -= 2
  mostrar "Vidas después de recibir daño: " + vidas
  
  variable experiencia = 100
  experiencia *= 2
  mostrar "Experiencia con boost x2: " + experiencia
  
  variable energia = 80
  energia /= 2
  mostrar "Energía después de habilidad especial: " + energia
  `,
        output:
          'Puntos iniciales: 100\nDespués de conseguir moneda: 150\nDespués de derrotar enemigo: 180\nVidas después de recibir daño: 3\nExperiencia con boost x2: 200\nEnergía después de habilidad especial: 40',
        notes: [
          '+= (sumar y asignar): puntos += 50 es igual a puntos = puntos + 50',
          '-= (restar y asignar): vidas -= 1 es igual a vidas = vidas - 1',
          '*= (multiplicar y asignar): experiencia *= 2 duplica la experiencia',
          '/= (dividir y asignar): energia /= 2 reduce la energía a la mitad',
          '%= (módulo y asignar): nivel %= 10 obtiene el resto',
        ],
      },
      {
        title: 'Operadores de Comparación: ¿Quién Ganó?',
        description:
          'Los operadores de comparación sirven para comparar valores: ¿tengo más puntos que el récord? ¿me quedan suficientes vidas? ¿es mi nivel mayor o igual a 10? Siempre retornan verdadero o falso.',
        code: `
  variable miScore = 1500
  variable recordAnterior = 1200
  variable vidasActuales = 3
  variable vidasMinimas = 1
  variable nivel = 10
  
  mostrar miScore > recordAnterior
  mostrar vidasActuales < vidasMinimas
  mostrar nivel >= 10
  mostrar nivel <= 5
  mostrar miScore == recordAnterior
  mostrar miScore != recordAnterior
  `,
        output: 'verdadero\nfalso\nverdadero\nfalso\nfalso\nverdadero',
        notes: [
          '> (mayor que): ¿miScore es mayor que el récord?',
          '< (menor que): ¿tengo menos vidas que el mínimo?',
          '>= (mayor o igual): ¿llegué al nivel 10 o más?',
          '<= (menor o igual): ¿estoy en nivel 5 o menos?',
          '== (igual): ¿mi score es exactamente igual al récord? (dos signos =)',
          '!= (diferente): ¿mi score es diferente al récord?',
          'Estos operadores retornan verdadero o falso, se usan en condicionales',
        ],
      },
      {
        title: 'Operadores Lógicos: Requisitos para Desbloquear',
        description:
          'En los juegos a veces necesitas cumplir múltiples requisitos: nivel 10 Y 500 monedas para comprar un item. O necesitas nivel 5 O tener la llave especial. Los operadores lógicos combinan condiciones.',
        code: `
variable nivel = 12
variable monedas = 600
variable tieneBonus = verdadero
variable tieneLlave = falso

variable puedeComprarEspada = nivel >= 10 y monedas >= 500
mostrar "¿Puede comprar espada? " + puedeComprarEspada

variable puedeEntrarMazmorra = nivel >= 15 o tieneLlave
mostrar "¿Puede entrar a mazmorra? " + puedeEntrarMazmorra

variable noTieneBonus = !tieneBonus
mostrar "¿NO tiene bonus? " + noTieneBonus

variable activarPowerUp = nivel > 10 y monedas > 100 y tieneBonus
mostrar "¿Activar power-up? " + activarPowerUp
  `,
        output:
          '¿Puede comprar espada? verdadero\n¿Puede entrar a mazmorra? falso\n¿NO tiene bonus? falso\n¿Activar power-up? verdadero',
        notes: [
          'y (AND): Ambas condiciones deben ser verdaderas. Ejemplo: nivel >= 10 Y monedas >= 500',
          'o (OR): Al menos una condición debe ser verdadera. Ejemplo: nivel >= 15 O tieneLlave',
          '! (NOT): Invierte el valor. !verdadero = falso, !falso = verdadero',
          'Se evalúan de izquierda a derecha',
          'Usa paréntesis para agrupar: (nivel > 5 y monedas > 100) o tieneLlave',
        ],
      },
      {
        title: 'Operadores de Incremento/Decremento: Contadores Rápidos',
        description:
          'Cuando subes de nivel, derrotas un enemigo, o recoges un item, necesitas sumar 1. Los operadores ++ y -- son atajos para incrementar o decrementar en 1.',
        code: `
variable enemigosDerrrotados = 0
variable vidas = 5
variable nivel = 1

enemigosDerrrotados++
mostrar "Enemigos derrotados: " + enemigosDerrrotados

enemigosDerrrotados++
mostrar "Enemigos derrotados: " + enemigosDerrrotados

vidas--
mostrar "Vidas restantes: " + vidas

nivel++
mostrar "Nivel actual: " + nivel

variable combo = 10
combo++
combo++
combo++
mostrar "Combo: " + combo
  `,
        output:
          'Enemigos derrotados: 1\nEnemigos derrotados: 2\nVidas restantes: 4\nNivel actual: 2\nCombo: 13',
        notes: [
          '++ (incremento): Suma 1 a la variable. contador++ es igual a contador = contador + 1',
          '-- (decremento): Resta 1 a la variable. vidas-- es igual a vidas = vidas - 1',
          'Muy útil para contadores: enemigos derrotados, vidas, nivel, combo',
          'Más corto y claro que escribir la versión completa',
        ],
      },
      {
        title: 'Precedencia: Orden de Operaciones',
        description:
          'Como en matemática, las operaciones tienen un orden: primero multiplicación y división, luego suma y resta. Usa paréntesis para controlar el orden.',
        code: `
variable puntos = 10 + 5 * 2
mostrar "10 + 5 * 2 = " + puntos

variable puntosConParentesis = (10 + 5) * 2
mostrar "(10 + 5) * 2 = " + puntosConParentesis

variable danioFinal = 50 - 10 / 2
mostrar "50 - 10 / 2 = " + danioFinal

variable danioConParentesis = (50 - 10) / 2
mostrar "(50 - 10) / 2 = " + danioConParentesis

variable calcComplejo = (100 + 50) * 2 - 25
mostrar "(100 + 50) * 2 - 25 = " + calcComplejo
  `,
        output:
          '10 + 5 * 2 = 20\n(10 + 5) * 2 = 30\n50 - 10 / 2 = 45\n(50 - 10) / 2 = 20\n(100 + 50) * 2 - 25 = 275',
        notes: [
          'Orden de precedencia (como en matemática):',
          '1. Paréntesis ( )',
          '2. Multiplicación * y División /',
          '3. Suma + y Resta -',
          'Ejemplo: 10 + 5 * 2 = 10 + 10 = 20 (primero 5*2, luego +10)',
          'Usa paréntesis para cambiar el orden: (10 + 5) * 2 = 15 * 2 = 30',
          'Si hay duda, usa paréntesis para que sea claro',
        ],
      },
      {
        title: 'Combinando Todo: Sistema de Puntuación',
        description:
          'Veamos un ejemplo completo que combina todos los operadores en un sistema de puntuación de videojuego.',
        code: `
variable puntos = 0
variable vidas = 3
variable nivel = 1
variable multiplicador = 1

puntos += 100
mostrar "Derrotaste un enemigo: +" + puntos + " puntos"

puntos += 50
mostrar "Recogiste una moneda: " + puntos + " puntos totales"

vidas--
mostrar "Recibiste daño: " + vidas + " vidas restantes"

multiplicador++
mostrar "¡Combo! Multiplicador x" + multiplicador

puntos *= multiplicador
mostrar "Puntos con multiplicador: " + puntos

variable tieneVidasSuficientes = vidas >= 1
variable puntosParaSiguienteNivel = 200
variable puedeAvanzar = puntos >= puntosParaSiguienteNivel y tieneVidasSuficientes

mostrar "¿Puede avanzar de nivel? " + puedeAvanzar

variable puntosFinales = puntos + (vidas * 10)
mostrar "Puntos finales (bonus por vidas): " + puntosFinales
  `,
        output:
          'Derrotaste un enemigo: +100 puntos\nRecogiste una moneda: 150 puntos totales\nRecibiste daño: 2 vidas restantes\n¡Combo! Multiplicador x2\nPuntos con multiplicador: 300\n¿Puede avanzar de nivel? verdadero\nPuntos finales (bonus por vidas): 320',
        notes: [
          'Este ejemplo muestra operadores en acción:',
          '• Aritméticos: sumar puntos, multiplicar bonus',
          '• Asignación: +=, *=, ++, --',
          '• Comparación: >=, verificar requisitos',
          '• Lógicos: y, combinar múltiples condiciones',
          '• Precedencia: (vidas * 10) primero, luego suma',
          'Así funcionan los sistemas de videojuegos reales',
        ],
      },
    ],
  },
  condicionales: {
    title: '🤔 Condicionales',
    description:
      'Los condicionales son como las reglas de calificación en la escuela: SI tu nota es mayor o igual a 90, obtienes una A. SI es mayor o igual a 70, una B. SINO, repruebas. Los condicionales permiten que tu programa tome decisiones basadas en condiciones.',
    subsections: [
      {
        title: 'Estructura si: Tomar Decisiones',
        description:
          "La estructura 'si' ejecuta código solo cuando se cumple una condición. Como cuando el profesor dice: 'Si tu nota es 90 o más, tienes una A'.",
        syntax: 'si condicion { código }',
        code: `
variable nota = 95

si nota >= 90 {
    mostrar "¡Excelente! Tienes una A"
}

variable asistencia = 80

si asistencia >= 75 {
    mostrar "Cumples con la asistencia mínima"
    mostrar "Puedes presentar el examen final"
}

variable tareaEntregada = verdadero

si tareaEntregada {
    mostrar "Tarea registrada correctamente"
}
`,
        output:
          '¡Excelente! Tienes una A\nCumples con la asistencia mínima\nPuedes presentar el examen final\nTarea registrada correctamente',
        notes: [
          'La condición debe evaluar a verdadero o falso',
          'Si la condición es verdadera, se ejecuta el código dentro de las llaves {}',
          'Si la condición es falsa, se salta todo el bloque',
          'Las llaves {} son obligatorias, incluso para una sola línea',
          'Puedes poner múltiples líneas de código dentro del bloque',
        ],
      },
      {
        title: 'Estructura si-sino: Dos Caminos',
        description:
          "A veces necesitas hacer algo cuando la condición es verdadera, y algo diferente cuando es falsa. Como: 'Si aprobaste, felicitaciones. Sino, debes recursar'.",
        syntax: 'si condicion { código } sino { código }',
        code: `
variable nota = 65

si nota >= 70 {
    mostrar "¡Aprobaste! Felicitaciones"
    mostrar "Pasa a la siguiente materia"
} sino {
    mostrar "No aprobaste"
    mostrar "Debes recursar la materia"
}

variable asistencia = 60
variable minimoAsistencia = 75

si asistencia >= minimoAsistencia {
    mostrar "Asistencia suficiente"
} sino {
    mostrar "Asistencia insuficiente"
    mostrar "No puedes rendir el examen"
}
`,
        output:
          'No aprobaste\nDebes recursar la materia\nAsistencia insuficiente\nNo puedes rendir el examen',
        notes: [
          'Exactamente UNO de los dos bloques se ejecuta, nunca ambos',
          "Si la condición es verdadera → ejecuta el bloque 'si'",
          "Si la condición es falsa → ejecuta el bloque 'sino'",
          'Útil cuando tienes dos caminos mutuamente excluyentes',
          "Piensa en 'sino' como 'en cualquier otro caso'",
        ],
      },
      {
        title: 'Estructura si-sino si: Múltiples Rangos',
        description:
          "Cuando tienes múltiples rangos o categorías, usas 'si-sino si'. Como el sistema de calificaciones: A (90+), B (80-89), C (70-79), F (<70).",
        syntax: 'si condicion1 { código } sino si condicion2 { código } sino { código }',
        code: `
variable nota = 85

si nota >= 90 {
    mostrar "Calificación: A - Excelente"
} sino si nota >= 80 {
    mostrar "Calificación: B - Muy Bueno"
} sino si nota >= 70 {
    mostrar "Calificación: C - Bueno"
} sino si nota >= 60 {
    mostrar "Calificación: D - Suficiente"
} sino {
    mostrar "Calificación: F - Reprobado"
}

variable promedio = 92

si promedio >= 95 {
    mostrar "Honor Roll - Mención de Honor"
} sino si promedio >= 85 {
    mostrar "Cuadro de Honor"
} sino si promedio >= 70 {
    mostrar "Aprobado"
} sino {
    mostrar "Necesita mejorar"
}
  `,
        output: 'Calificación: B - Muy Bueno\nCuadro de Honor',
        notes: [
          'Se evalúan las condiciones en orden, de arriba hacia abajo',
          'Se ejecuta el PRIMER bloque cuya condición sea verdadera',
          'Una vez que se ejecuta un bloque, se salta el resto',
          "El bloque 'sino' final es opcional (caso por defecto)",
          'Útil para rangos numéricos o múltiples categorías',
          'Importante: el orden importa. Pon las condiciones más específicas primero',
        ],
      },
      {
        title: 'Condicionales Anidados: Decisiones Dentro de Decisiones',
        description:
          "Puedes poner condicionales dentro de otros condicionales. Como: 'Si aprobaste, ENTONCES si tu nota es mayor a 95, obtienes beca'.",
        code: `
variable nota = 88
variable asistencia = 90
variable entregaTrabajos = verdadero

si nota >= 70 {
    mostrar "¡Aprobaste la materia!"
    
    si nota >= 90 {
        mostrar "Calificación sobresaliente"
        
        si asistencia >= 90 {
            mostrar "¡Eres candidato a beca!"
        }
    } sino si nota >= 80 {
        mostrar "Muy buen desempeño"
    }
} sino {
    mostrar "Reprobaste"
    
    si entregaTrabajos {
        mostrar "Puedes hacer un trabajo de recuperación"
    } sino {
        mostrar "Debes recursar la materia completa"
    }
}
  `,
        output: '¡Aprobaste la materia!\nMuy buen desempeño',
        notes: [
          "Puedes anidar 'si' dentro de otros 'si'",
          'Cada nivel de anidamiento verifica una condición adicional',
          'Mantén buena indentación para que sea legible',
          'No anides demasiado: más de 3 niveles se vuelve confuso',
          'A veces es mejor usar operadores lógicos (y, o) que anidar',
        ],
      },
      {
        title: 'Usando Operadores en Condiciones',
        description:
          'Puedes usar operadores de comparación (>, <, ==, !=) y operadores lógicos (y, o, !) para crear condiciones más complejas.',
        code: `
variable notaExamen = 85
variable notaTrabajos = 90
variable asistencia = 95

si notaExamen >= 70 y notaTrabajos >= 70 {
    mostrar "Aprobaste ambas partes"
}

si notaExamen >= 90 o notaTrabajos >= 90 {
    mostrar "Tienes al menos una nota excelente"
}

variable entregaTarde = falso

si !entregaTarde {
    mostrar "Entrega a tiempo - sin penalización"
}

si notaExamen >= 80 y notaTrabajos >= 80 y asistencia >= 90 {
    mostrar "¡Estudiante destacado!"
}

variable notaFinal = (notaExamen + notaTrabajos) / 2

si notaFinal >= 70 y asistencia >= 75 {
    mostrar "Cumples todos los requisitos para aprobar"
} sino {
    mostrar "No cumples los requisitos mínimos"
}
  `,
        output:
          'Aprobaste ambas partes\nTienes al menos una nota excelente\nEntrega a tiempo - sin penalización\n¡Estudiante destacado!\nCumples todos los requisitos para aprobar',
        notes: [
          'Operadores de comparación: >, <, >=, <=, ==, !=',
          "Operador 'y': Ambas condiciones deben ser verdaderas",
          "Operador 'o': Al menos una condición debe ser verdadera",
          "Operador '!': Invierte verdadero ↔ falso",
          'Puedes combinar múltiples operadores',
          'Usa paréntesis para agrupar condiciones complejas',
        ],
      },
      {
        title: 'Sistema Completo de Calificaciones',
        description:
          'Veamos un ejemplo completo que combina todo: calcular la nota final, determinar si aprueba, asignar letra de calificación, y verificar elegibilidad para honores.',
        code: `
variable notaExamen1 = 85
variable notaExamen2 = 90
variable notaTrabajos = 88
variable asistencia = 92
variable participacion = 95

variable promedioExamenes = (notaExamen1 + notaExamen2) / 2
variable notaFinal = (promedioExamenes * 0.5) + (notaTrabajos * 0.3) + (participacion * 0.2)

mostrar "=== REPORTE DE CALIFICACIONES ==="
mostrar "Promedio exámenes: " + promedioExamenes
mostrar "Trabajos: " + notaTrabajos
mostrar "Participación: " + participacion
mostrar "Nota final: " + notaFinal
mostrar ""

si notaFinal >= 70 y asistencia >= 75 {
    mostrar "Estado: APROBADO ✓"
    mostrar ""
    
    si notaFinal >= 90 {
        mostrar "Calificación: A - Excelente"
        
        si asistencia >= 90 y participacion >= 90 {
            mostrar "*** MENCIÓN DE HONOR ***"
        }
    } sino si notaFinal >= 80 {
        mostrar "Calificación: B - Muy Bueno"
        
        si asistencia >= 90 {
            mostrar "Elegible para Cuadro de Honor"
        }
    } sino {
        mostrar "Calificación: C - Bueno"
    }
} sino {
    mostrar "Estado: REPROBADO ✗"
    mostrar ""
    
    si notaFinal >= 60 {
        mostrar "Puedes presentar examen de recuperación"
    } sino si asistencia < 75 {
        mostrar "Asistencia insuficiente"
        mostrar "Debes recursar la materia"
    } sino {
        mostrar "Debes recursar la materia"
    }
}
`,
        output:
          '=== REPORTE DE CALIFICACIONES ===\nPromedio exámenes: 87.5\nTrabajos: 88\nParticipación: 95\nNota final: 89.5\n\nEstado: APROBADO ✓\n\nCalificación: B - Muy Bueno\nElegible para Cuadro de Honor',
        notes: [
          'Este sistema completo incluye:',
          '• Cálculo de promedios ponderados',
          '• Verificación de requisitos (nota Y asistencia)',
          '• Asignación de calificación por rangos (A, B, C)',
          '• Condicionales anidados para honores',
          '• Manejo de casos de reprobación',
          '• Uso de operadores lógicos (y)',
          'Así funcionan los sistemas de calificaciones reales',
        ],
      },
      {
        title: 'Consejos y Buenas Prácticas',
        description: 'Recomendaciones para escribir condicionales claros y efectivos.',
        code: `
variable nota = 85

si nota >= 90 {
    mostrar "Excelente"
} sino si nota >= 70 {
    mostrar "Aprobado"
} sino {
    mostrar "Reprobado"
}

variable aprobado = nota >= 70
si aprobado {
    mostrar "Has aprobado"
}

variable notaMinima = 70
si nota >= notaMinima {
    mostrar "Cumple el mínimo"
}
`,
        output: 'Aprobado\nHas aprobado\nCumple el mínimo',
        notes: [
          '✅ Usa nombres de variables descriptivos: notaMinima, aprobado',
          '✅ Guarda condiciones complejas en variables para claridad',
          '✅ Ordena condiciones de mayor a menor en rangos numéricos',
          '✅ Mantén la indentación consistente',
          '✅ Usa constantes para valores que no cambian (ej: NOTA_MINIMA = 70)',
          '❌ Evita anidar más de 3 niveles',
          '❌ Evita condiciones muy largas (usa variables intermedias)',
          "💡 Si tienes muchos 'sino si', considera usar 'elegir' más adelante",
        ],
      },
    ],
  },
  elegirCaso: {
    title: '🎯 Elegir/Caso (Switch)',
    description:
      "La estructura elegir/caso es como el menú de la cafetería escolar: tienes un número y según ese número obtienes un plato diferente. Es más limpia que escribir muchos 'si-sino si' cuando comparas un valor contra múltiples opciones.",
    subsections: [
      {
        title: '¿Qué es Elegir/Caso?',
        description:
          "Imagina que en la cafetería escolar eliges tu almuerzo por número: 1=Milanesa, 2=Pizza, 3=Ensalada. En vez de preguntar '¿es 1? ¿es 2? ¿es 3?', simplemente dices tu número y te dan el plato correspondiente. Eso es elegir/caso.",
        syntax: 'elegir (variable) { caso valor: código }',
        code: `
variable opcionMenu = 2

elegir (opcionMenu) {
    caso 1:
        mostrar "Milanesa con puré"
    caso 2:
        mostrar "Pizza de muzzarella"
    caso 3:
        mostrar "Ensalada César"
    caso 4:
        mostrar "Pasta con salsa"
    pordefecto:
        mostrar "Opción no disponible"
}
  `,
        output: 'Pizza de muzzarella',
        notes: [
          'elegir (variable) evalúa el valor de la variable',
          "Compara ese valor con cada 'caso'",
          'Ejecuta el código del caso que coincida',
          'pordefecto se ejecuta si ningún caso coincide (opcional pero recomendado)',
          'Más limpio que muchos si-sino si cuando comparas contra valores específicos',
        ],
      },
      {
        title: 'Comparación: Elegir vs Si-Sino Si',
        description:
          "Veamos la diferencia entre usar 'si-sino si' y 'elegir/caso' para el mismo problema.",
        code: `
variable dia = 3

si dia == 1 {
    mostrar "Lunes"
} sino si dia == 2 {
    mostrar "Martes"
} sino si dia == 3 {
    mostrar "Miércoles"
} sino si dia == 4 {
    mostrar "Jueves"
} sino si dia == 5 {
    mostrar "Viernes"
} sino {
    mostrar "Fin de semana"
}

elegir (dia) {
    caso 1:
        mostrar "Lunes"
    caso 2:
        mostrar "Martes"
    caso 3:
        mostrar "Miércoles"
    caso 4:
        mostrar "Jueves"
    caso 5:
        mostrar "Viernes"
    pordefecto:
        mostrar "Fin de semana"
}
  `,
        output: 'Miércoles\nMiércoles',
        notes: [
          'Ambos hacen exactamente lo mismo',
          "Con si-sino si: repetimos 'dia ==' muchas veces",
          "Con elegir/caso: mencionamos 'dia' una sola vez",
          'elegir/caso es más claro cuando comparas UNA variable contra MUCHOS valores',
          'si-sino si es mejor cuando tienes condiciones complejas (>, <, y, o)',
        ],
      },
      {
        title: 'Eligiendo Días de la Semana',
        description:
          'Un uso común es mostrar información según el día. Como el horario escolar que cambia cada día.',
        code: `
variable diaSemana = 1

elegir (diaSemana) {
    caso 1:
        mostrar "Lunes - Matemática, Historia, Educación Física"
    caso 2:
        mostrar "Martes - Lengua, Ciencias, Arte"
    caso 3:
        mostrar "Miércoles - Matemática, Inglés, Música"
    caso 4:
        mostrar "Jueves - Historia, Ciencias, Educación Física"
    caso 5:
        mostrar "Viernes - Lengua, Matemática, Laboratorio"
    caso 6:
        mostrar "Sábado - No hay clases"
    caso 7:
        mostrar "Domingo - No hay clases"
    pordefecto:
        mostrar "Día inválido"
}

variable mesActual = 12

elegir (mesActual) {
    caso 1:
        mostrar "Enero - Vacaciones de verano"
    caso 2:
        mostrar "Febrero - Vacaciones de verano"
    caso 3:
        mostrar "Marzo - Inicio de clases"
    caso 12:
        mostrar "Diciembre - Fin de año escolar"
    pordefecto:
        mostrar "Mes regular de clases"
}
  `,
        output: 'Lunes - Matemática, Historia, Educación Física\nDiciembre - Fin de año escolar',
        notes: [
          'Cada caso representa una opción diferente',
          'Los números deben coincidir exactamente: caso 1 solo coincide con 1',
          'El orden de los casos no importa (a diferencia de si-sino si)',
          'pordefecto captura cualquier valor que no coincida con los casos',
          'Útil para menús, días, meses, opciones numeradas',
        ],
      },
      {
        title: 'Uso con Texto: Calificaciones por Letra',
        description:
          'Los casos no solo funcionan con números. También puedes usar texto, como las letras de calificación (A, B, C, D, F).',
        code: `
variable calificacion = "B"

elegir (calificacion) {
    caso "A":
        mostrar "Excelente - 90 a 100 puntos"
        mostrar "¡Felicitaciones!"
    caso "B":
        mostrar "Muy Bueno - 80 a 89 puntos"
        mostrar "Buen trabajo"
    caso "C":
        mostrar "Bueno - 70 a 79 puntos"
        mostrar "Aprobado"
    caso "D":
        mostrar "Suficiente - 60 a 69 puntos"
        mostrar "Debes mejorar"
    caso "F":
        mostrar "Reprobado - Menos de 60 puntos"
        mostrar "Debes recursar"
    pordefecto:
        mostrar "Calificación inválida"
}
  `,
        output: 'Muy Bueno - 80 a 89 puntos\nBuen trabajo',
        notes: [
          'Los strings (texto) deben ir entre comillas: caso "A"',
          'La comparación distingue mayúsculas: "A" ≠ "a"',
          'Puedes poner múltiples líneas de código en cada caso',
          'Cada caso se ejecuta completo antes de salir del elegir',
          'Los casos con texto son útiles para menús, comandos, opciones',
        ],
      },
      {
        title: 'Sistema de Menú de Materias',
        description:
          'Veamos un ejemplo práctico: un sistema para elegir materias optativas según tu preferencia.',
        code: `
variable materiaElegida = "Deportes"

elegir (materiaElegida) {
    caso "Arte":
        mostrar "=== MATERIA: ARTE ==="
        mostrar "Horario: Lunes y Miércoles 14:00-16:00"
        mostrar "Profesor: María González"
        mostrar "Materiales: Pinceles, témperas, lienzo"
    caso "Música":
        mostrar "=== MATERIA: MÚSICA ==="
        mostrar "Horario: Martes y Jueves 14:00-16:00"
        mostrar "Profesor: Carlos Ruiz"
        mostrar "Materiales: Instrumento propio"
    caso "Deportes":
        mostrar "=== MATERIA: DEPORTES ==="
        mostrar "Horario: Lunes, Miércoles y Viernes 15:00-17:00"
        mostrar "Profesor: Ana Martínez"
        mostrar "Materiales: Ropa deportiva, zapatillas"
    caso "Teatro":
        mostrar "=== MATERIA: TEATRO ==="
        mostrar "Horario: Jueves 14:00-17:00"
        mostrar "Profesor: Roberto Silva"
        mostrar "Materiales: Ninguno especial"
    pordefecto:
        mostrar "Materia no disponible"
        mostrar "Opciones: Arte, Música, Deportes, Teatro"
}
  `,
        output:
          '=== MATERIA: DEPORTES ===\nHorario: Lunes, Miércoles y Viernes 15:00-17:00\nProfesor: Ana Martínez\nMateriales: Ropa deportiva, zapatillas',
        notes: [
          'Cada caso puede tener múltiples líneas de código',
          'Es como un menú interactivo: seleccionas una opción y obtienes info',
          'pordefecto muestra un mensaje de error y opciones válidas',
          'Más organizado que si-sino si para este tipo de selección',
          'Fácil de mantener: agregar una materia = agregar un caso',
        ],
      },
      {
        title: '¿Cuándo Usar Elegir vs Si-Sino Si?',
        description: 'Guía práctica para decidir cuándo usar cada estructura.',
        code: `
variable opcion = 2

elegir (opcion) {
    caso 1:
        mostrar "Opción A"
    caso 2:
        mostrar "Opción B"
    caso 3:
        mostrar "Opción C"
}

variable nota = 85

si nota >= 90 {
    mostrar "A"
} sino si nota >= 80 {
    mostrar "B"
} sino si nota >= 70 {
    mostrar "C"
}
  `,
        output: 'Opción B\nB',
        notes: [
          '✅ Usa elegir/caso cuando:',
          '  • Comparas UNA variable contra valores EXACTOS (==)',
          '  • Tienes muchas opciones específicas (menús, días, letras)',
          '  • Los valores son números o strings concretos',
          '  • Quieres código más limpio y organizado',
          '',
          '✅ Usa si-sino si cuando:',
          '  • Usas operadores como >, <, >=, <=',
          '  • Verificas rangos (nota >= 90, nota >= 80...)',
          "  • Combinas condiciones con 'y', 'o'",
          '  • Las condiciones son complejas',
          '',
          '💡 Regla simple: ¿Solo verificas igualdad (==)? → elegir. ¿Usas <, >, y, o? → si-sino si',
        ],
      },
      {
        title: 'Sistema Completo: Selector de Nivel de Dificultad',
        description:
          'Ejemplo completo que muestra cómo usar elegir/caso en un contexto real: un selector de dificultad de examen.',
        code: `
variable nivelSeleccionado = 2

mostrar "=== SELECTOR DE DIFICULTAD DE EXAMEN ==="
mostrar ""

elegir (nivelSeleccionado) {
    caso 1:
        mostrar "📗 NIVEL BÁSICO"
        mostrar "Duración: 60 minutos"
        mostrar "Preguntas: 20"
        mostrar "Temas: Conceptos fundamentales"
        mostrar "Puntaje mínimo: 70 puntos"
    caso 2:
        mostrar "📘 NIVEL INTERMEDIO"
        mostrar "Duración: 90 minutos"
        mostrar "Preguntas: 30"
        mostrar "Temas: Aplicación de conceptos"
        mostrar "Puntaje mínimo: 75 puntos"
    caso 3:
        mostrar "📙 NIVEL AVANZADO"
        mostrar "Duración: 120 minutos"
        mostrar "Preguntas: 40"
        mostrar "Temas: Análisis y síntesis"
        mostrar "Puntaje mínimo: 80 puntos"
    caso 4:
        mostrar "📕 NIVEL EXPERTO"
        mostrar "Duración: 150 minutos"
        mostrar "Preguntas: 50"
        mostrar "Temas: Casos complejos y resolución de problemas"
        mostrar "Puntaje mínimo: 85 puntos"
    pordefecto:
        mostrar "❌ Nivel inválido"
        mostrar "Por favor selecciona: 1, 2, 3 o 4"
}

mostrar ""
mostrar "Examen configurado correctamente"
  `,
        output:
          '=== SELECTOR DE DIFICULTAD DE EXAMEN ===\n\n📘 NIVEL INTERMEDIO\nDuración: 90 minutos\nPreguntas: 30\nTemas: Aplicación de conceptos\nPuntaje mínimo: 75 puntos\n\nExamen configurado correctamente',
        notes: [
          'Sistema organizado con información clara por nivel',
          'Cada caso muestra múltiples datos relacionados',
          'pordefecto maneja errores de entrada',
          'Fácil de expandir: agregar nivel 5 = agregar un caso',
          'Estructura clara para el usuario y el programador',
          'Este patrón se usa en: configuraciones, menús, selectores',
        ],
      },
      {
        title: 'Consejos y Buenas Prácticas',
        description: 'Recomendaciones para usar elegir/caso de forma efectiva.',
        code: `
variable opcion = 3

elegir (opcion) {
    caso 1:
        mostrar "Primera opción"
    caso 2:
        mostrar "Segunda opción"
    caso 3:
        mostrar "Tercera opción"
    pordefecto:
        mostrar "Opción no válida"
}

variable OPCION_BASICO = 1
variable OPCION_INTERMEDIO = 2
variable OPCION_AVANZADO = 3

variable nivelSeleccionado = 2

elegir (nivelSeleccionado) {
    caso OPCION_BASICO:
        mostrar "Básico"
    caso OPCION_INTERMEDIO:
        mostrar "Intermedio"
    caso OPCION_AVANZADO:
        mostrar "Avanzado"
}
  `,
        output: 'Tercera opción\nIntermedio',
        notes: [
          '✅ SIEMPRE incluye pordefecto (aunque creas que no es necesario)',
          '✅ Agrupa casos relacionados visualmente con líneas en blanco',
          '✅ Mantén los casos en orden lógico (1, 2, 3 o A, B, C)',
          '✅ Usa constantes para opciones: OPCION_BASICO = 1',
          '✅ Si todos los casos hacen lo mismo, considera usar otra estructura',
          '❌ No pongas lógica muy compleja dentro de un caso (crea funciones)',
          '❌ No uses elegir si solo tienes 2-3 opciones (usa si-sino)',
          '💡 elegir/caso brilla cuando tienes 4+ opciones específicas',
        ],
      },
    ],
  },
  bucles: {
    title: '🔄 Bucles',
    description:
      "Los bucles son como reproducir una playlist: repites canciones una y otra vez. En programación, los bucles te permiten repetir código sin tener que escribirlo múltiples veces. Imagina tener que escribir 'reproducir canción' 100 veces... ¡imposible! Los bucles lo hacen automáticamente.",
    subsections: [
      {
        title: '¿Qué son los Bucles?',
        description:
          "Imagina que tienes una playlist con 50 canciones. En vez de escribir 50 veces 'reproducir canción 1', 'reproducir canción 2', etc., el reproductor usa un bucle: repite la acción de reproducir para cada canción.\n\nEn programación es igual: los bucles repiten código automáticamente.",
        code: `
mostrar "Canción 1"
mostrar "Canción 2"
mostrar "Canción 3"
mostrar "Canción 4"
mostrar "Canción 5"

para (variable cancion = 1; cancion <= 5; cancion++) {
    mostrar "Canción " + cancion
}
`,
        output:
          'Canción 1\nCanción 2\nCanción 3\nCanción 4\nCanción 5\nCanción 1\nCanción 2\nCanción 3\nCanción 4\nCanción 5',
        notes: [
          'Sin bucles: tienes que escribir el código repetido muchas veces',
          'Con bucles: escribes el código una vez y se repite automáticamente',
          'Los bucles son fundamentales: listas, menús, búsquedas, cálculos repetitivos',
          "Hay dos tipos principales: 'mientras' (while) y 'para' (for)",
          'Los bucles ahorran tiempo, evitan errores y hacen el código más limpio',
        ],
      },
      {
        title: 'Bucle mientras: Reproduce Mientras Haya Canciones',
        description:
          "El bucle 'mientras' repite código MIENTRAS una condición sea verdadera. Como un reproductor que sigue reproduciendo MIENTRAS queden canciones en la playlist.",
        syntax: 'mientras condicion { código }',
        code: `
variable cancionActual = 1
variable totalCanciones = 5

mientras cancionActual <= totalCanciones {
    mostrar "Reproduciendo canción " + cancionActual
    cancionActual++
}

mostrar "Playlist terminada"

variable energia = 100

mientras energia > 0 {
    mostrar "Bailando... Energía: " + energia
    energia = energia - 20
}

mostrar "Sin energía, a descansar"
`,
        output:
          'Reproduciendo canción 1\nReproduciendo canción 2\nReproduciendo canción 3\nReproduciendo canción 4\nReproduciendo canción 5\nPlaylist terminada\nBailando... Energía: 100\nBailando... Energía: 80\nBailando... Energía: 60\nBailando... Energía: 40\nBailando... Energía: 20\nSin energía, a descansar',
        notes: [
          'mientras evalúa la condición ANTES de cada repetición',
          'Si la condición es verdadera → ejecuta el código',
          'Si la condición es falsa → sale del bucle',
          'IMPORTANTE: Asegúrate que la condición se vuelva falsa en algún momento',
          'Si no, tendrás un bucle infinito (nunca termina)',
        ],
      },
      {
        title: '⚠️ PELIGRO: Bucles Infinitos',
        description:
          'Un bucle infinito es como una canción en repeat que NUNCA para. El programa se queda atascado para siempre. Esto pasa cuando la condición nunca se vuelve falsa.',
        code: `
variable cancion = 1

mientras cancion <= 5 {
    mostrar "Canción " + cancion
}

variable contador = 1

mientras contador <= 5 {
    mostrar "Reproduciendo " + contador
    contador++
}

mostrar "Playlist terminada"
`,
        output:
          'Reproduciendo 1\nReproduciendo 2\nReproduciendo 3\nReproduciendo 4\nReproduciendo 5\nPlaylist terminada',
        notes: [
          "❌ PRIMER EJEMPLO: bucle infinito porque 'cancion' nunca cambia",
          '  • cancion siempre es 1',
          '  • 1 <= 5 es siempre verdadero',
          '  • El bucle NUNCA termina',
          '',
          "✅ SEGUNDO EJEMPLO: bucle correcto porque 'contador++' lo incrementa",
          '  • contador cambia: 1, 2, 3, 4, 5, 6',
          '  • Cuando llega a 6, la condición 6 <= 5 es falsa',
          '  • El bucle termina correctamente',
          '',
          '💡 REGLA: Siempre modifica la variable de la condición dentro del bucle',
        ],
      },
      {
        title: 'Bucle para: Reproduce N Canciones',
        description:
          "El bucle 'para' es perfecto cuando sabes exactamente cuántas veces quieres repetir algo. Como 'reproduce las primeras 10 canciones' o 'repite la canción 5 veces'.",
        syntax: 'para (inicialización; condición; incremento) { código }',
        code: `
para (variable i = 1; i <= 5; i++) {
    mostrar "Canción " + i
}

para (variable rep = 1; rep <= 3; rep++) {
    mostrar "Repetición " + rep + " de la canción favorita"
}

para (variable vol = 10; vol >= 0; vol = vol - 2) {
    mostrar "Volumen: " + vol
}

mostrar "Silencio"
`,
        output:
          'Canción 1\nCanción 2\nCanción 3\nCanción 4\nCanción 5\nRepetición 1 de la canción favorita\nRepetición 2 de la canción favorita\nRepetición 3 de la canción favorita\nVolumen: 10\nVolumen: 8\nVolumen: 6\nVolumen: 4\nVolumen: 2\nVolumen: 0\nSilencio',
        notes: [
          "El bucle 'para' tiene 3 partes separadas por punto y coma:",
          '1. Inicialización: variable i = 1 (se ejecuta UNA VEZ al inicio)',
          '2. Condición: i <= 5 (se verifica ANTES de cada repetición)',
          '3. Incremento: i++ (se ejecuta AL FINAL de cada repetición)',
          '',
          'Puedes contar hacia arriba: i++ o i = i + 1',
          'O hacia abajo: i-- o i = i - 1',
          'O con pasos: i = i + 2 (de 2 en 2)',
        ],
      },
      {
        title: 'mientras vs para: ¿Cuál Usar?',
        description:
          'Ambos bucles hacen lo mismo: repetir código. Pero cada uno es mejor en diferentes situaciones.',
        code: `
variable cancion = 1

mientras cancion <= 5 {
    mostrar "Canción " + cancion
    cancion++
}

para (variable cancion = 1; cancion <= 5; cancion++) {
    mostrar "Canción " + cancion
}

variable hayMasCanciones = verdadero
variable cancionesReproducidas = 0

mientras hayMasCanciones {
    cancionesReproducidas++
    mostrar "Reproduciendo canción " + cancionesReproducidas
    
    si cancionesReproducidas >= 3 {
        hayMasCanciones = falso
    }
}
`,
        output:
          'Canción 1\nCanción 2\nCanción 3\nCanción 4\nCanción 5\nCanción 1\nCanción 2\nCanción 3\nCanción 4\nCanción 5\nReproduciendo canción 1\nReproduciendo canción 2\nReproduciendo canción 3',
        notes: [
          "✅ Usa 'para' cuando:",
          '  • Sabes EXACTAMENTE cuántas repeticiones necesitas',
          '  • Tienes un contador (1 a 10, 0 a 100)',
          '  • Recorres listas, arrays, rangos de números',
          "  • Ejemplo: 'reproduce las primeras 10 canciones'",
          '',
          "✅ Usa 'mientras' cuando:",
          '  • NO sabes cuántas repeticiones necesitas',
          '  • Dependes de una condición que puede cambiar',
          '  • La repetición termina cuando algo pasa',
          "  • Ejemplo: 'reproduce mientras el usuario no pause'",
          '',
          "💡 Si tienes un contador claro (1, 2, 3...), usa 'para'. Si no, usa 'mientras'.",
        ],
      },
      {
        title: 'romper: Detener la Reproducción',
        description:
          "A veces necesitas detener un bucle antes de que termine naturalmente. Como cuando encuentras la canción que buscabas y ya no necesitas seguir buscando. Para eso existe 'romper'.",
        code: `
para (variable i = 1; i <= 10; i++) {
    si i == 5 {
        mostrar "¡Encontré mi canción favorita!"
        romper
    }
    mostrar "Revisando canción " + i
}

mostrar "Búsqueda terminada"

variable cancion = 1
variable encontrada = falso

mientras cancion <= 20 {
    mostrar "Buscando en canción " + cancion
    
    si cancion == 7 {
        mostrar "¡Ahí está!"
        encontrada = verdadero
        romper
    }
    
    cancion++
}

mostrar "Canción encontrada: " + encontrada
`,
        output:
          'Revisando canción 1\nRevisando canción 2\nRevisando canción 3\nRevisando canción 4\n¡Encontré mi canción favorita!\nBúsqueda terminada\nBuscando en canción 1\nBuscando en canción 2\nBuscando en canción 3\nBuscando en canción 4\nBuscando en canción 5\nBuscando en canción 6\nBuscando en canción 7\n¡Ahí está!\nCanción encontrada: verdadero',
        notes: [
          "'romper' detiene el bucle INMEDIATAMENTE",
          'Sale del bucle y continúa con el código después',
          'Útil para búsquedas: cuando encuentras lo que buscas, dejas de buscar',
          'También útil para salir de bucles cuando algo sale mal',
          "No abuses: si siempre usas 'romper', tal vez el bucle está mal diseñado",
        ],
      },
      {
        title: 'continuar: Saltar a la Siguiente Canción',
        description:
          "A veces quieres saltarte una repetición y continuar con la siguiente. Como cuando una canción no te gusta y la saltas. Para eso existe 'continuar'.",
        code: `
para (variable i = 1; i <= 5; i++) {
    si i == 3 {
        mostrar "Saltando canción " + i
        continuar
    }
    mostrar "Reproduciendo canción " + i
}

variable cancion = 0

mientras cancion < 8 {
    cancion++
    
    si cancion == 2 o cancion == 5 {
        mostrar "Anuncio publicitario - Saltando"
        continuar
    }
    
    mostrar "♪ Canción " + cancion
}
`,
        output:
          'Reproduciendo canción 1\nReproduciendo canción 2\nSaltando canción 3\nReproduciendo canción 4\nReproduciendo canción 5\n♪ Canción 1\nAnuncio publicitario - Saltando\n♪ Canción 3\n♪ Canción 4\nAnuncio publicitario - Saltando\n♪ Canción 6\n♪ Canción 7\n♪ Canción 8',
        notes: [
          "'continuar' salta el resto del código en esa repetición",
          'Va directamente a la siguiente iteración del bucle',
          "En 'para': ejecuta el incremento y verifica la condición",
          "En 'mientras': vuelve a verificar la condición",
          "Útil para filtrar: 'si no cumple X, continuar'",
          "Evita anidar muchos 'si': en vez de 'si... si... si...', usa 'si no... continuar'",
        ],
      },
      {
        title: 'Bucles Anidados: Playlist de Playlists',
        description:
          'Puedes poner un bucle dentro de otro bucle. Como tener múltiples playlists y reproducir todas las canciones de cada playlist.',
        code: `
para (variable playlist = 1; playlist <= 3; playlist++) {
    mostrar "=== PLAYLIST " + playlist + " ==="
    
    para (variable cancion = 1; cancion <= 4; cancion++) {
        mostrar "  ♪ Canción " + cancion
    }
    
    mostrar ""
}

para (variable album = 1; album <= 2; album++) {
    mostrar "ÁLBUM " + album
    
    para (variable track = 1; track <= 3; track++) {
        mostrar "  Track " + track + " del álbum " + album
    }
}
`,
        output:
          '=== PLAYLIST 1 ===\n  ♪ Canción 1\n  ♪ Canción 2\n  ♪ Canción 3\n  ♪ Canción 4\n\n=== PLAYLIST 2 ===\n  ♪ Canción 1\n  ♪ Canción 2\n  ♪ Canción 3\n  ♪ Canción 4\n\n=== PLAYLIST 3 ===\n  ♪ Canción 1\n  ♪ Canción 2\n  ♪ Canción 3\n  ♪ Canción 4\n\nÁLBUM 1\n  Track 1 del álbum 1\n  Track 2 del álbum 1\n  Track 3 del álbum 1\nÁLBUM 2\n  Track 1 del álbum 2\n  Track 2 del álbum 2\n  Track 3 del álbum 2',
        notes: [
          'Bucle externo: se ejecuta pocas veces (playlists)',
          'Bucle interno: se ejecuta muchas veces (canciones por playlist)',
          'Por cada iteración del externo, el interno se ejecuta COMPLETO',
          'Ejemplo: 3 playlists × 4 canciones = 12 reproducciones totales',
          'Útil para: tablas, matrices, listas de listas',
          '⚠️ Cuidado: pueden volverse lentos con muchos niveles',
        ],
      },
      {
        title: 'Sistema Completo: Reproductor de Música',
        description:
          'Veamos un ejemplo completo que combina todo: un reproductor de música con búsqueda, reproducción y estadísticas.',
        code: `
variable totalCanciones = 10
variable cancionActual = 1
variable reproducidas = 0
variable saltadas = 0

mostrar "🎵 REPRODUCTOR DE MÚSICA"
mostrar "Canciones en playlist: " + totalCanciones
mostrar ""

mientras cancionActual <= totalCanciones {
    mostrar "Reproduciendo canción " + cancionActual
    
    si cancionActual == 3 o cancionActual == 7 {
        mostrar "  ⏭️  Saltando (no me gusta)"
        saltadas++
        cancionActual++
        continuar
    }
    
    si cancionActual == 5 {
        mostrar "  ❤️  ¡Mi favorita! Repetir"
        reproducidas++
    }
    
    reproducidas++
    cancionActual++
    
    si reproducidas >= 7 {
        mostrar ""
        mostrar "Ya reproduje 7 canciones, suficiente por hoy"
        romper
    }
}

mostrar ""
mostrar "=== ESTADÍSTICAS ==="
mostrar "Canciones reproducidas: " + reproducidas
mostrar "Canciones saltadas: " + saltadas
mostrar "Total procesadas: " + (reproducidas + saltadas)
`,
        output:
          '🎵 REPRODUCTOR DE MÚSICA\nCanciones en playlist: 10\n\nReproduciendo canción 1\nReproduciendo canción 2\nReproduciendo canción 3\n  ⏭️  Saltando (no me gusta)\nReproduciendo canción 4\nReproduciendo canción 5\n  ❤️  ¡Mi favorita! Repetir\nReproduciendo canción 6\nReproduciendo canción 7\n  ⏭️  Saltando (no me gusta)\nReproduciendo canción 8\n\nYa reproduje 7 canciones, suficiente por hoy\n\n=== ESTADÍSTICAS ===\nCanciones reproducidas: 7\nCanciones saltadas: 2\nTotal procesadas: 9',
        notes: [
          'Sistema completo con:',
          '• Bucle mientras para recorrer playlist',
          '• continuar para saltar canciones',
          '• romper para detener cuando se alcanza límite',
          '• Contadores para estadísticas',
          '• Condiciones dentro del bucle',
          '• Mensajes informativos',
          'Así funcionan los reproductores de música reales',
        ],
      },
    ],
  },
  funciones: {
    title: '⚡ Funciones',
    description:
      'Las funciones son como los electrodomésticos de tu cocina: cada uno hace una tarea específica que puedes usar muchas veces. El microondas calienta, la licuadora mezcla, la tostadora tuesta. En programación, las funciones son bloques de código reutilizables que hacen tareas específicas.',
    subsections: [
      {
        title: '¿Qué son las Funciones?',
        description:
          'Imagina que cada vez que quieras calentar algo, tuvieras que conectar cables, ajustar resistencias, controlar temperatura... imposible. Por eso existen electrodomésticos: pones la comida, presionas un botón, y listo.\n\nLas funciones son lo mismo: encapsulan código que usarás muchas veces.',
        code: `
mostrar "Calentando pizza..."
mostrar "Tiempo: 2 minutos"
mostrar "Potencia: Alta"
mostrar "Listo!"

mostrar "Calentando sopa..."
mostrar "Tiempo: 3 minutos"
mostrar "Potencia: Media"
mostrar "Listo!"

funcion calentar(comida, minutos) {
    mostrar "Calentando " + comida + "..."
    mostrar "Tiempo: " + minutos + " minutos"
    mostrar "Listo!"
}

calentar("pizza", 2)
calentar("sopa", 3)
`,
        output:
          'Calentando pizza...\nTiempo: 2 minutos\nPotencia: Alta\nListo!\nCalentando sopa...\nTiempo: 3 minutos\nPotencia: Media\nListo!\nCalentando pizza...\nTiempo: 2 minutos\nListo!\nCalentando sopa...\nTiempo: 3 minutos\nListo!',
        notes: [
          'Sin funciones: repites el mismo código una y otra vez',
          'Con funciones: escribes el código una vez y lo usas múltiples veces',
          'Las funciones tienen un nombre descriptivo (calentar, mezclar, tostar)',
          "Puedes 'llamar' (usar) la función cuantas veces quieras",
          'Las funciones hacen tu código más limpio, organizado y fácil de mantener',
        ],
      },
      {
        title: 'Declaración de Funciones: Tu Primer Electrodoméstico',
        description:
          "Para crear una función usas la palabra 'funcion', le das un nombre, y defines qué hace entre llaves {}. Es como tener el manual de instrucciones de un electrodoméstico.",
        syntax: 'funcion nombreFuncion() { código }',
        code: `
funcion tostarPan() {
    mostrar "🍞 Tostando pan..."
    mostrar "Temperatura: Alta"
    mostrar "Tiempo: 3 minutos"
    mostrar "¡Pan tostado listo!"
}

tostarPan()

funcion licuarFrutas() {
    mostrar "🍓 Licuando frutas..."
    mostrar "Velocidad: Máxima"
    mostrar "¡Smoothie listo!"
}

licuarFrutas()
licuarFrutas()
`,
        output:
          '🍞 Tostando pan...\nTemperatura: Alta\nTiempo: 3 minutos\n¡Pan tostado listo!\n🍓 Licuando frutas...\nVelocidad: Máxima\n¡Smoothie listo!\n🍓 Licuando frutas...\nVelocidad: Máxima\n¡Smoothie listo!',
        notes: [
          'Declaración: funcion nombreFuncion() { ... }',
          'El nombre debe ser descriptivo (tostar, calentar, mezclar)',
          'Las llaves {} contienen el código que se ejecutará',
          "Para usar la función: nombreFuncion() (se llama 'llamar la función')",
          'Los paréntesis () son obligatorios, incluso si están vacíos',
        ],
      },
      {
        title: 'Funciones con Parámetros: Configurar el Electrodoméstico',
        description:
          'El microondas tiene configuración: tiempo, potencia. La tostadora tiene nivel de tostado. Los parámetros son esas configuraciones que le das a la función.',
        syntax: 'funcion nombreFuncion(parametro1, parametro2) { código }',
        code: `
funcion calentar(comida, minutos, potencia) {
    mostrar "Calentando " + comida
    mostrar "Tiempo: " + minutos + " minutos"
    mostrar "Potencia: " + potencia
    mostrar "¡Listo!"
}

calentar("pizza", 2, "Alta")
calentar("leche", 1, "Media")
calentar("arroz", 5, "Alta")

funcion tostar(alimento, nivel) {
    mostrar "Tostando " + alimento
    mostrar "Nivel: " + nivel
    mostrar "¡Tostado perfecto!"
}

tostar("pan", 3)
tostar("bagel", 5)
`,
        output:
          'Calentando pizza\nTiempo: 2 minutos\nPotencia: Alta\n¡Listo!\nCalentando leche\nTiempo: 1 minutos\nPotencia: Media\n¡Listo!\nCalentando arroz\nTiempo: 5 minutos\nPotencia: Alta\n¡Listo!\nTostando pan\nNivel: 3\n¡Tostado perfecto!\nTostando bagel\nNivel: 5\n¡Tostado perfecto!',
        notes: [
          'Parámetros = configuración del electrodoméstico',
          'Van entre paréntesis, separados por comas: (tiempo, potencia)',
          "Al llamar la función, pasas los valores: calentar('pizza', 2, 'Alta')",
          'El ORDEN importa: primer parámetro = primer valor',
          'Puedes tener 0, 1, 2 o más parámetros según necesites',
        ],
      },
      {
        title: 'Retornar Valores: El Resultado del Electrodoméstico',
        description:
          "Cuando usas la licuadora, no solo hace ruido: te da un smoothie. Cuando usas el microondas, te da comida caliente. Las funciones pueden 'retornar' (devolver) un resultado.",
        syntax: 'retornar valor',
        code: `
funcion calcularTiempoMicroondas(gramos) {
    variable minutos = gramos / 100
    retornar minutos
}

variable tiempo1 = calcularTiempoMicroondas(500)
mostrar "Para 500g necesitas: " + tiempo1 + " minutos"

variable tiempo2 = calcularTiempoMicroondas(300)
mostrar "Para 300g necesitas: " + tiempo2 + " minutos"

funcion licuar(fruta1, fruta2) {
    variable smoothie = fruta1 + " con " + fruta2
    retornar smoothie
}

variable bebida = licuar("frutilla", "banana")
mostrar "Tu smoothie: " + bebida

variable otraBebida = licuar("mango", "naranja")
mostrar "Tu smoothie: " + otraBebida
`,
        output:
          'Para 500g necesitas: 5 minutos\nPara 300g necesitas: 3 minutos\nTu smoothie: frutilla con banana\nTu smoothie: mango con naranja',
        notes: [
          "'retornar' devuelve un valor desde la función",
          'Puedes guardar el resultado en una variable',
          'Puedes usar el resultado directamente en operaciones',
          "'retornar' termina la función inmediatamente",
          "El código después de 'retornar' no se ejecuta",
        ],
      },
      {
        title: 'Funciones sin y con Retorno: Diferencias',
        description:
          'Algunos electrodomésticos solo hacen su trabajo (lavaplatos lava, pero no te da nada). Otros te dan un resultado (licuadora te da smoothie, cafetera te da café).',
        code: `
funcion lavarPlatos(cantidad) {
    mostrar "Lavando " + cantidad + " platos..."
    mostrar "Ciclo: Normal"
    mostrar "¡Platos limpios!"
}

lavarPlatos(10)

funcion hacerCafe(tipo) {
    variable cafe = "Café " + tipo + " listo"
    retornar cafe
}

variable miCafe = hacerCafe("Americano")
mostrar miCafe

variable tuCafe = hacerCafe("Cappuccino")
mostrar tuCafe

funcion calcularCalorias(porcion) {
    variable calorias = porcion * 150
    retornar calorias
}

variable totalCalorias = calcularCalorias(2) + calcularCalorias(3)
mostrar "Total de calorías: " + totalCalorias
`,
        output:
          'Lavando 10 platos...\nCiclo: Normal\n¡Platos limpios!\nCafé Americano listo\nCafé Cappuccino listo\nTotal de calorías: 750',
        notes: [
          'Función sin retorno: hace una acción (mostrar, modificar)',
          'Función con retorno: produce un resultado que puedes usar',
          'Sin retorno: solo llamas lavarPlatos(10)',
          "Con retorno: guardas en variable → variable x = hacerCafe('Latte')",
          'Puedes usar el retorno en cálculos: calcularCalorias(2) + calcularCalorias(3)',
        ],
      },
      {
        title: 'Ámbito (Scope): Dentro y Fuera del Electrodoméstico',
        description:
          'Lo que pasa dentro del microondas se queda dentro del microondas. Las variables creadas dentro de una función solo existen ahí dentro.',
        code: `
variable temperaturaExterna = 25

funcion calentar(comida) {
    variable temperaturaInterna = 100
    mostrar "Dentro del microondas: " + temperaturaInterna + "°C"
    mostrar "Temperatura externa: " + temperaturaExterna + "°C"
    mostrar "Calentando: " + comida
}

calentar("sopa")
mostrar "Afuera: " + temperaturaExterna + "°C"

funcion cocinar() {
    variable platoPrincipal = "Pasta"
    mostrar "Cocinando: " + platoPrincipal
}

cocinar()
`,
        output:
          'Dentro del microondas: 100°C\nTemperatura externa: 25°C\nCalentando: sopa\nAfuera: 25°C\nCocinando: Pasta',
        notes: [
          'Variables DENTRO de función = locales (solo existen dentro)',
          'Variables FUERA de función = globales (se ven en todas partes)',
          'Función puede usar variables globales',
          'Función NO puede ser usada fuera si es local',
          'Ejemplo: temperaturaInterna solo existe dentro de calentar()',
        ],
      },
      {
        title: 'Funciones que Usan Otras Funciones: Electrodomésticos Combinados',
        description:
          'A veces una receta usa varios electrodomésticos: primero la licuadora, luego el microondas. Las funciones pueden llamar a otras funciones.',
        code: `
funcion picar(ingrediente) {
    mostrar "Picando " + ingrediente
    retornar ingrediente + " picado"
}

funcion cocinar(ingrediente, minutos) {
    mostrar "Cocinando " + ingrediente + " por " + minutos + " minutos"
    retornar ingrediente + " cocido"
}

funcion prepararSopa() {
    variable cebolla = picar("cebolla")
    variable zanahoria = picar("zanahoria")
    
    mostrar "Agregando agua y sal"
    
    variable resultado = cocinar("sopa", 10)
    retornar resultado
}

variable sopa = prepararSopa()
mostrar "Resultado: " + sopa

funcion calcularPorciones(personas) {
    retornar personas * 250
}

funcion cocinarArroz(personas) {
    variable gramos = calcularPorciones(personas)
    mostrar "Cocinando " + gramos + "g de arroz"
    retornar "Arroz para " + personas + " personas"
}

variable plato = cocinarArroz(4)
mostrar plato
`,
        output:
          'Picando cebolla\nPicando zanahoria\nAgregando agua y sal\nCocinando sopa por 10 minutos\nResultado: sopa cocido\nCocinando 1000g de arroz\nArroz para 4 personas',
        notes: [
          'Las funciones pueden llamar a otras funciones',
          "Esto se llama 'composición' o 'modularidad'",
          'Cada función hace una tarea específica',
          'Las combinas para hacer tareas complejas',
          'Es como usar varios electrodomésticos para una receta completa',
          'Hace el código más organizado y reutilizable',
        ],
      },
      {
        title: 'Sistema Completo de Cocina: Múltiples Electrodomésticos',
        description:
          'Veamos un ejemplo completo que usa múltiples funciones trabajando juntas, como una cocina completa con todos sus electrodomésticos.',
        code: `
funcion calcularTiempo(gramos, tipoCoccion) {
    si tipoCoccion == "microondas" {
        retornar gramos / 100
    } sino si tipoCoccion == "horno" {
        retornar gramos / 50
    } sino {
        retornar gramos / 200
    }
}

funcion convertirTemperatura(celsius) {
    variable fahrenheit = (celsius * 9 / 5) + 32
    retornar fahrenheit
}

funcion prepararPlato(nombre, gramos, tipo) {
    mostrar "=== PREPARANDO: " + nombre + " ==="
    
    variable minutos = calcularTiempo(gramos, tipo)
    mostrar "Tiempo necesario: " + minutos + " minutos"
    
    si tipo == "horno" {
        variable temp = convertirTemperatura(180)
        mostrar "Temperatura: 180°C (" + temp + "°F)"
    }
    
    mostrar "Cocinando con: " + tipo
    mostrar "¡" + nombre + " listo!"
    mostrar ""
    
    retornar nombre + " terminado"
}

variable plato1 = prepararPlato("Pizza", 500, "horno")
variable plato2 = prepararPlato("Sopa", 300, "microondas")
variable plato3 = prepararPlato("Guiso", 800, "cocina")

mostrar "=== MENÚ COMPLETO ==="
mostrar plato1
mostrar plato2
mostrar plato3
`,
        output:
          '=== PREPARANDO: Pizza ===\nTiempo necesario: 10 minutos\nTemperatura: 180°C (356°F)\nCocinando con: horno\n¡Pizza listo!\n\n=== PREPARANDO: Sopa ===\nTiempo necesario: 3 minutos\nCocinando con: microondas\n¡Sopa listo!\n\n=== PREPARANDO: Guiso ===\nTiempo necesario: 4 minutos\nCocinando con: cocina\n¡Guiso listo!\n\n=== MENÚ COMPLETO ===\nPizza terminado\nSopa terminado\nGuiso terminado',
        notes: [
          'Sistema completo con múltiples funciones:',
          '• calcularTiempo(): calcula según tipo de cocción',
          '• convertirTemperatura(): convierte Celsius a Fahrenheit',
          '• prepararPlato(): función principal que usa las otras',
          '',
          'Ventajas de este diseño:',
          '✅ Cada función hace UNA cosa específica',
          '✅ Puedes reutilizar cada función individualmente',
          '✅ Fácil de testear y debuggear',
          '✅ Si cambias una función, no afectas las otras',
          '✅ Código organizado y mantenible',
        ],
      },
      {
        title: 'Consejos y Buenas Prácticas',
        description:
          'Recomendaciones para escribir funciones efectivas y mantener tu código limpio.',
        code: `
funcion calcularPrecioFinal(precio, descuento) {
    variable precioConDescuento = precio - (precio * descuento)
    retornar precioConDescuento
}

funcion mostrarRecibo(producto, precio) {
    mostrar "=== RECIBO ==="
    mostrar "Producto: " + producto
    mostrar "Precio: $" + precio
    mostrar "============="
}

variable precioFinal = calcularPrecioFinal(1000, 0.20)
mostrarRecibo("Microondas", precioFinal)

funcion validarTemperatura(temp) {
    si temp < 0 o temp > 250 {
        mostrar "Temperatura fuera de rango"
        retornar falso
    }
    retornar verdadero
}

variable esValida = validarTemperatura(180)
si esValida {
    mostrar "Temperatura OK, procediendo..."
}
`,
        output:
          '=== RECIBO ===\nProducto: Microondas\nPrecio: $800\n=============\nTemperatura OK, procediendo...',
        notes: [
          '✅ Usa nombres descriptivos: calcularPrecio, no cp() o calc()',
          '✅ Una función = una tarea específica',
          '✅ Funciones cortas (menos de 20 líneas ideal)',
          '✅ Si retorna algo, siempre retorna el mismo tipo',
          '✅ Evita modificar variables globales dentro de funciones',
          '✅ Documenta funciones complejas con comentarios',
          '❌ No hagas funciones gigantes que hagan 10 cosas',
          '❌ No uses nombres genéricos: funcion procesar(), funcion hacer()',
          '💡 Si tu función hace más de una cosa, divídela en varias',
        ],
      },
    ],
  },
  funcionesFlecha: {
    title: '➡️ Funciones Flecha',
    description:
      "Las funciones flecha son como las abreviaturas en WhatsApp: en vez de escribir 'también', escribes 'tmb'. En vez de escribir 'qué', escribes 'q'. Mismo significado, menos caracteres. Las funciones flecha son una forma más corta de escribir funciones: mismo resultado, menos código.",
    subsections: [
      {
        title: '¿Qué son las Funciones Flecha?',
        description:
          "Cuando chateás por WhatsApp, usas abreviaturas: 'tmb' = 'también', 'xq' = 'porque', 'q' = 'qué'. Entiendes perfectamente el mensaje, pero con menos caracteres.\n\nLas funciones flecha son lo mismo: una forma abreviada de escribir funciones.",
        code: `
funcion doble(x) {
    retornar x * 2
}

variable doble = x => x * 2

mostrar doble(5)
mostrar doble(10)

funcion sumar(a, b) {
    retornar a + b
}

variable sumar = (a, b) => a + b

mostrar sumar(3, 7)
mostrar sumar(10, 20)
`,
        output: '10\n20\n10\n30',
        notes: [
          'Función normal: funcion nombre(params) { retornar valor }',
          'Función flecha: variable nombre = params => valor',
          'Mismo resultado, sintaxis más corta',
          "La flecha => es como decir 'devuelve' o 'resulta en'",
          "Se llaman 'arrow functions' en inglés (funciones flecha)",
        ],
      },
      {
        title: 'Sintaxis: Versión Corta vs Larga',
        description:
          "Como en WhatsApp puedes escribir 'Hola, ¿cómo estás?' (formal) o 'Hola, q tal?' (casual), las funciones flecha tienen sintaxis flexible según cuántos parámetros tengas.",
        syntax: 'variable nombre = parametros => expresion',
        code: `
variable saludar = () => "Hola!"
mostrar saludar()

variable duplicar = x => x * 2
mostrar duplicar(4)

variable sumar = (a, b) => a + b
mostrar sumar(5, 3)

variable calcularIVA = precio => precio * 1.21
mostrar calcularIVA(100)
`,
        output: 'Hola!\n8\n8\n121',
        notes: [
          'Sin parámetros: () => resultado',
          'UN parámetro: x => resultado (sin paréntesis)',
          'DOS+ parámetros: (a, b) => resultado (con paréntesis)',
          'Si es una sola expresión, el retorno es automático',
          "No necesitas escribir 'retornar' cuando es una línea",
        ],
      },
      {
        title: 'Comparación: Normal vs Flecha',
        description:
          'Veamos lado a lado la diferencia entre escribir funciones normales (mensaje completo) y funciones flecha (mensaje abreviado).',
        code: `
funcion triple(numero) {
    retornar numero * 3
}

variable triple = numero => numero * 3

mostrar triple(5)

funcion esPar(n) {
    retornar n % 2 == 0
}

variable esPar = n => n % 2 == 0

mostrar esPar(4)
mostrar esPar(7)

funcion formatearPrecio(precio) {
    retornar "$" + precio
}

variable formatearPrecio = precio => "$" + precio

mostrar formatearPrecio(150)
`,
        output: '15\nverdadero\nfalso\n$150',
        notes: [
          'Función normal: 3 líneas (funcion, retornar, cierre)',
          'Función flecha: 1 línea (todo junto)',
          'Ambas hacen exactamente lo mismo',
          'Flecha es más rápida de escribir',
          'Usa la que prefieras, ambas funcionan igual',
        ],
      },
      {
        title: 'Retorno Implícito: Mensaje de Una Línea',
        description:
          "Cuando tu mensaje es corto ('ok', 'si', 'dale'), no necesitas explicaciones largas. Las funciones flecha de una línea retornan automáticamente, sin escribir 'retornar'.",
        code: `
variable cuadrado = x => x * x
mostrar cuadrado(5)
mostrar cuadrado(8)

variable mayorDeEdad = edad => edad >= 18
mostrar mayorDeEdad(15)
mostrar mayorDeEdad(21)

variable concatenar = (a, b) => a + " " + b
mostrar concatenar("Hola", "Mundo")

variable descuento = precio => precio * 0.8
mostrar descuento(100)
`,
        output: '25\n64\nfalso\nverdadero\nHola Mundo\n80',
        notes: [
          'Si la función es UNA sola expresión → retorno automático',
          "No necesitas escribir 'retornar'",
          'No necesitas llaves { }',
          'Sintaxis: parametro => expresion',
          'La expresión se evalúa y se retorna automáticamente',
        ],
      },
      {
        title: 'Retorno Explícito: Mensaje Largo',
        description:
          "A veces necesitas escribir un mensaje más largo con varias oraciones. Para funciones con múltiples líneas de código, usas llaves { } y debes escribir 'retornar' explícitamente.",
        code: `
variable calcularDescuento = (precio, porcentaje) => {
    variable descuento = precio * porcentaje / 100
    variable precioFinal = precio - descuento
    retornar precioFinal
}

mostrar calcularDescuento(1000, 20)

variable saludarPersona = nombre => {
    variable saludo = "Hola " + nombre
    variable mensaje = saludo + ", ¿cómo estás?"
    retornar mensaje
}

mostrar saludarPersona("Ana")

variable calcularTotal = (precio, cantidad, iva) => {
    variable subtotal = precio * cantidad
    variable conIVA = subtotal * (1 + iva)
    retornar conIVA
}

mostrar calcularTotal(100, 3, 0.21)
`,
        output: '800\nHola Ana, ¿cómo estás?\n363',
        notes: [
          'Si necesitas MÚLTIPLES líneas → usa llaves { }',
          "Con llaves, DEBES escribir 'retornar' explícitamente",
          'Sintaxis: parametro => { codigo; retornar valor }',
          'Útil cuando la lógica es más compleja',
          'Puedes tener variables intermedias, condicionales, etc.',
        ],
      },
      {
        title: 'Con Condicionales: Mensajes según Contexto',
        description:
          'Como cuando respondes diferente según quien te escriba, las funciones flecha pueden tener lógica condicional cuando necesitas decidir qué retornar.',
        code: `
variable calificar = nota => {
    si nota >= 90 {
        retornar "Excelente"
    } sino si nota >= 70 {
        retornar "Aprobado"
    } sino {
        retornar "Reprobado"
    }
}

mostrar calificar(95)
mostrar calificar(75)
mostrar calificar(50)

variable tipoDescuento = cantidad => {
    si cantidad >= 100 {
        retornar 0.30
    } sino si cantidad >= 50 {
        retornar 0.20
    } sino {
        retornar 0.10
    }
}

mostrar "Descuento: " + (tipoDescuento(120) * 100) + "%"
mostrar "Descuento: " + (tipoDescuento(60) * 100) + "%"
`,
        output: 'Excelente\nAprobado\nReprobado\nDescuento: 30%\nDescuento: 20%',
        notes: [
          'Funciones flecha pueden tener condicionales',
          'Necesitas llaves { } para múltiples líneas',
          'Cada rama del condicional puede retornar valores diferentes',
          'Útil para validaciones, cálculos condicionales, clasificaciones',
          "Recuerda: con llaves, 'retornar' es obligatorio",
        ],
      },
      {
        title: 'Funciones como Argumentos: Enviar Abreviaturas',
        description:
          'Como cuando le reenvías un mensaje abreviado a otra persona, puedes pasar funciones flecha como argumentos a otras funciones.',
        code: `
funcion aplicar(fn, valor) {
    retornar fn(valor)
}

variable resultado1 = aplicar(x => x * 2, 5)
mostrar resultado1

variable resultado2 = aplicar(x => x + 10, 5)
mostrar resultado2

variable resultado3 = aplicar(x => x * x, 5)
mostrar resultado3

funcion procesar(texto, transformar) {
    variable resultado = transformar(texto)
    retornar resultado
}

mostrar procesar("hola", t => t.mayusculas())
mostrar procesar("MUNDO", t => t.minusculas())
`,
        output: '10\n15\n25\nHOLA\nmundo',
        notes: [
          'Puedes pasar funciones flecha como argumentos',
          'Útil para callbacks y transformaciones',
          'La función que recibe se ejecuta con el valor',
          'Sintaxis: funcionReceptora(x => transformacion, valor)',
          'Patrón común en programación funcional',
        ],
      },
      {
        title: 'Casos Prácticos: Calculadoras y Conversiones',
        description:
          'Veamos ejemplos reales donde las funciones flecha brillan por su simplicidad: calculadoras rápidas y conversiones de unidades.',
        code: `
variable celsiusAFahrenheit = c => (c * 9 / 5) + 32
variable fahrenheitACelsius = f => (f - 32) * 5 / 9

mostrar "100°C = " + celsiusAFahrenheit(100) + "°F"
mostrar "212°F = " + fahrenheitACelsius(212) + "°C"

variable kmAMillas = km => km * 0.621371
variable millasAKm = mi => mi / 0.621371

mostrar "10km = " + kmAMillas(10) + " millas"
mostrar "10mi = " + millasAKm(10) + " km"

variable calcularPropina = (total, porcentaje) => total * (porcentaje / 100)

mostrar "Propina 15%: $" + calcularPropina(500, 15)
mostrar "Propina 20%: $" + calcularPropina(500, 20)

variable calcularCuotas = (monto, cuotas) => monto / cuotas

mostrar "12 cuotas de: $" + calcularCuotas(1200, 12)
`,
        output:
          '100°C = 212°F\n212°F = 100°C\n10km = 6.21371 millas\n10mi = 16.0934 km\nPropina 15%: $75\nPropina 20%: $100\n12 cuotas de: $100',
        notes: [
          'Funciones flecha perfectas para conversiones simples',
          'Calculadoras de una línea',
          'Fácil de leer: la fórmula es visible',
          'Útil para transformaciones matemáticas',
          'Se pueden reutilizar en cualquier parte',
        ],
      },
      {
        title: '¿Cuándo Usar Flecha vs Normal?',
        description:
          'Como elegir entre escribir un mensaje completo formal o uno casual abreviado, hay situaciones donde conviene cada tipo de función.',
        code: `
variable doble = x => x * 2

funcion procesarPedido(producto, cantidad) {
    mostrar "=== PEDIDO ==="
    mostrar "Producto: " + producto
    mostrar "Cantidad: " + cantidad
    
    variable total = cantidad * 100
    mostrar "Total: $" + total
    
    retornar total
}

variable esPositivo = n => n > 0

funcion generarReporte(datos) {
    mostrar "Generando reporte..."
    mostrar "Procesando datos..."
    mostrar "Reporte completo"
    retornar "Reporte listo"
}

mostrar doble(5)
procesarPedido("Laptop", 2)
mostrar esPositivo(10)
generarReporte("datos")
`,
        output:
          '10\n=== PEDIDO ===\nProducto: Laptop\nCantidad: 2\nTotal: $200\nverdadero\nGenerando reporte...\nProcesando datos...\nReporte completo',
        notes: [
          '✅ Usa función FLECHA cuando:',
          '  • La función es simple (1-2 líneas)',
          '  • Solo hace un cálculo o transformación',
          '  • Es una función auxiliar rápida',
          '  • Ejemplo: conversiones, validaciones, cálculos',
          '',
          '✅ Usa función NORMAL cuando:',
          '  • La función es compleja (5+ líneas)',
          '  • Tiene múltiples pasos o lógica',
          '  • Muestra mensajes o tiene efectos secundarios',
          '  • Necesitas que sea más descriptiva',
          '',
          '💡 Regla simple: ¿Es una operación rápida? → Flecha. ¿Es un proceso complejo? → Normal.',
        ],
      },
      {
        title: 'Sistema Completo: Calculadora de Precios',
        description:
          'Veamos un ejemplo completo que combina funciones normales y flecha: un sistema de cálculo de precios con descuentos e impuestos.',
        code: `
variable calcularSubtotal = (precio, cantidad) => precio * cantidad
variable aplicarDescuento = (monto, porcentaje) => monto * (1 - porcentaje / 100)
variable aplicarIVA = monto => monto * 1.21
variable redondear = numero => numero

funcion procesarCompra(producto, precio, cantidad, tieneDescuento) {
    mostrar "=== COMPRA ==="
    mostrar "Producto: " + producto
    mostrar "Precio unitario: $" + precio
    mostrar "Cantidad: " + cantidad
    mostrar ""
    
    variable subtotal = calcularSubtotal(precio, cantidad)
    mostrar "Subtotal: $" + subtotal
    
    variable montoFinal = subtotal
    
    si tieneDescuento {
        montoFinal = aplicarDescuento(montoFinal, 15)
        mostrar "Descuento 15%: $" + (subtotal - montoFinal)
    }
    
    montoFinal = aplicarIVA(montoFinal)
    mostrar "IVA 21%: $" + (montoFinal - (tieneDescuento ? aplicarDescuento(subtotal, 15) : subtotal))
    
    mostrar ""
    mostrar "TOTAL A PAGAR: $" + redondear(montoFinal)
    
    retornar montoFinal
}

procesarCompra("Teclado", 500, 2, verdadero)
procesarCompra("Mouse", 300, 1, falso)
`,
        output:
          '=== COMPRA ===\nProducto: Teclado\nPrecio unitario: $500\nCantidad: 2\n\nSubtotal: $1000\nDescuento 15%: $150\nIVA 21%: $178.5\n\nTOTAL A PAGAR: $1028.5\n=== COMPRA ===\nProducto: Mouse\nPrecio unitario: $300\nCantidad: 1\n\nSubtotal: $300\nIVA 21%: $63\n\nTOTAL A PAGAR: $363',
        notes: [
          'Sistema que combina:',
          '• Funciones flecha para cálculos simples',
          '• Función normal para el proceso completo',
          '• Las flecha son rápidas y reutilizables',
          '• La normal coordina todo y muestra mensajes',
          '',
          'Ventajas de este diseño:',
          '✅ Cálculos claros con funciones flecha',
          '✅ Fácil modificar una fórmula (cambiar una línea)',
          '✅ Reutilizar cálculos en otros lugares',
          '✅ Código organizado y mantenible',
        ],
      },
      {
        title: 'Consejos y Buenas Prácticas',
        description:
          'Recomendaciones para escribir funciones flecha efectivas y saber cuándo usarlas.',
        code: `
variable area = (base, altura) => base * altura

variable esPar = n => n % 2 == 0

variable nombreCompleto = (nombre, apellido) => \`\${nombre} \${apellido}\`

variable calcular = (a, b, operacion) => {
    si operacion == "suma" {
        retornar a + b
    } sino si operacion == "resta" {
        retornar a - b
    }
    retornar 0
}

mostrar area(5, 10)
mostrar esPar(7)
mostrar nombreCompleto("Ana", "García")
mostrar calcular(10, 5, "suma")
`,
        output: '50\nfalso\nAna García\n15',
        notes: [
          '✅ Usa nombres descriptivos: area, esPar, nombreCompleto',
          '✅ Funciones cortas y simples son ideales para flecha',
          '✅ Una operación = función flecha. Proceso complejo = normal',
          '✅ Si cabe en una línea legible, usa retorno implícito',
          '✅ Si necesitas variables intermedias, usa llaves { }',
          '',
          '❌ No hagas funciones flecha muy complejas',
          '❌ No anides muchas flechas (confuso de leer)',
          '❌ No uses flecha si necesitas nombre descriptivo largo',
          '',
          '💡 Piensa: ¿es un mensaje corto? → flecha. ¿Es un párrafo? → normal',
        ],
      },
    ],
  },
  funcionesMatematicas: {
    title: '🧮 Funciones Matemáticas',
    description:
      'Tu smartphone tiene una calculadora con botones especiales: √ para raíz, x² para potencia, sin/cos/tan para trigonometría. HispanoLang incluye estas mismas funciones matemáticas, listas para usar en tu código. Son como los botones de una calculadora científica: presionas uno y obtienes el resultado.',
    subsections: [
      {
        title: '¿Qué son las Funciones Matemáticas?',
        description:
          'Abre la calculadora de tu celular y gira la pantalla para ver la calculadora científica. Aparecen muchos botones: √, x², sin, cos, log, y más.\n\nCada botón hace un cálculo específico que sería tedioso hacer a mano. Las funciones matemáticas en HispanoLang son exactamente eso: botones pre-programados para cálculos comunes.',
        code: `variable raizDe16 = raiz(16)
mostrar raizDe16

variable dosAlCubo = potencia(2, 3)
mostrar dosAlCubo

variable sinSigno = valorAbsoluto(-10)
mostrar sinSigno

variable redondeado = redondear(3.7)
mostrar redondeado`,
        output: '4\n8\n10\n4',
        notes: [
          'Ya vienen incluidas en HispanoLang, no necesitas crearlas',
          'Solo llamas la función con su nombre: raiz(16)',
          'Como presionar un botón en la calculadora',
          'Retornan el resultado del cálculo',
          'Cubren desde operaciones básicas hasta trigonometría avanzada',
        ],
      },
      {
        title: 'Redondeo: Ajustar Decimales',
        description:
          'Cuando divides la cuenta del restaurante entre 3 personas, obtienes $156.6666... Necesitas redondear. La calculadora tiene tres formas de hacerlo, y HispanoLang también.',
        code: `variable numero = 3.7

variable cercano = redondear(numero)
mostrar "Redondear (más cercano): " + cercano

variable arriba = techo(numero)
mostrar "Techo (siempre arriba): " + arriba

variable abajo = piso(numero)
mostrar "Piso (siempre abajo): " + abajo

variable cuenta = 156.66
variable porPersona = redondear(cuenta / 3)
mostrar "Cada persona paga: $" + porPersona

variable productos = 15.3
variable cajas = techo(productos)
mostrar "Necesitas " + cajas + " cajas completas"

variable descuento = 99.99
variable precioBase = piso(descuento)
mostrar "Precio base: $" + precioBase`,
        output:
          'Redondear (más cercano): 4\nTecho (siempre arriba): 4\nPiso (siempre abajo): 3\nCada persona paga: $52\nNecesitas 16 cajas completas\nPrecio base: $99',
        notes: [
          'redondear(n): Al entero más cercano (3.4→3, 3.6→4)',
          'techo(n): Siempre hacia arriba (3.1→4, 3.9→4)',
          'piso(n): Siempre hacia abajo (3.1→3, 3.9→3)',
          '',
          'Casos de uso reales:',
          '• Dividir cuentas entre personas',
          '• Calcular cantidad de paquetes/cajas necesarias',
          '• Mostrar precios sin tantos decimales',
          '• Calcular propinas redondeadas',
        ],
      },
      {
        title: 'Números Aleatorios: Botón de Sorteo',
        description:
          "Las calculadoras científicas tienen un botón 'Random' o 'Rnd' que genera números aleatorios. Útil para simulaciones, juegos, sorteos, y decisiones al azar.",
        syntax:
          'aleatorio()  // 0 a 1\naleatorio(max)  // 0 a max\naleatorio(min, max)  // min a max',
        code: `variable entreCorY1 = aleatorio()
mostrar "Random (0-1): " + entreCorY1

variable entre0y10 = aleatorio(10)
mostrar "Random (0-10): " + entre0y10

variable entre5y15 = aleatorio(5, 15)
mostrar "Random (5-15): " + entre5y15

variable dado = piso(aleatorio(1, 7))
mostrar "Tirar dado (1-6): " + dado

variable moneda = aleatorio() < 0.5
si moneda {
    mostrar "Moneda: CARA"
} sino {
    mostrar "Moneda: CRUZ"
}

variable sorteo = piso(aleatorio(1, 101))
mostrar "Número de sorteo (1-100): " + sorteo

variable descuento = redondear(aleatorio(10, 31))
mostrar "Descuento aleatorio: " + descuento + "%"`,
        output:
          'Random (0-1): 0.547\nRandom (0-10): 7.32\nRandom (5-15): 12.8\nTirar dado (1-6): 4\nMoneda: CRUZ\nNúmero de sorteo (1-100): 67\nDescuento aleatorio: 23%',
        notes: [
          'aleatorio(): Número decimal entre 0.0 y 1.0',
          'aleatorio(max): Número decimal entre 0.0 y max',
          'aleatorio(min, max): Número decimal entre min y max',
          '',
          'Para enteros aleatorios:',
          '• Usa piso(aleatorio(min, max+1)) para incluir el máximo',
          '• Ejemplo: piso(aleatorio(1, 7)) → dado de 1 a 6',
          '',
          'Casos de uso:',
          '• Tirar dados virtuales',
          '• Sorteos y rifas',
          '• Cara o cruz',
          '• Selección aleatoria',
          '• Descuentos/ofertas aleatorias',
          '• Simulaciones y juegos',
        ],
      },
      {
        title: 'Potencias y Raíces: Cálculos Exponenciales',
        description:
          'Los botones x², x³, xʸ, y √ de la calculadora científica. Útiles para áreas, volúmenes, crecimiento exponencial, y problemas geométricos.',
        code: `variable cuadrado = potencia(5, 2)
mostrar "5² = " + cuadrado

variable cubo = potencia(3, 3)
mostrar "3³ = " + cubo

variable dosALaOcho = potencia(2, 8)
mostrar "2⁸ = " + dosALaOcho

variable raizDe16 = raiz(16)
mostrar "√16 = " + raizDe16

variable raizDe25 = raiz(25)
mostrar "√25 = " + raizDe25

variable ladoCuadrado = 7
variable area = potencia(ladoCuadrado, 2)
mostrar "Área de cuadrado 7x7: " + area + " m²"

variable areaCirculo = raiz(100)
mostrar "Si área es 100, radio ≈ " + areaCirculo

variable interesCompuesto = 1000 * potencia(1.05, 3)
mostrar "Inversión con 5% anual por 3 años: $" + redondear(interesCompuesto)

variable hipotenusa = raiz(potencia(3, 2) + potencia(4, 2))
mostrar "Hipotenusa de triángulo 3-4: " + hipotenusa`,
        output:
          '5² = 25\n3³ = 27\n2⁸ = 256\n√16 = 4\n√25 = 5\nÁrea de cuadrado 7x7: 49 m²\nSi área es 100, radio ≈ 10\nInversión con 5% anual por 3 años: $1158\nHipotenusa de triángulo 3-4: 5',
        notes: [
          'potencia(base, exponente): Eleva base a exponente',
          'raiz(n): Raíz cuadrada de n (√n)',
          '',
          'Casos de uso:',
          '• Calcular áreas (lado²) y volúmenes (lado³)',
          '• Interés compuesto en finanzas',
          '• Teorema de Pitágoras (a² + b² = c²)',
          '• Crecimiento exponencial',
          '• Escalas logarítmicas',
          '',
          'Ejemplos prácticos:',
          '• Área de terreno cuadrado',
          '• Volumen de cubo',
          '• Cálculos de inversión',
          '• Distancias en geometría',
        ],
      },
      {
        title: 'Valor Absoluto: Distancia Sin Signo',
        description:
          'El botón |x| o abs en la calculadora científica. Convierte cualquier número en su versión positiva. Útil para distancias, diferencias, y cuando el signo no importa.',
        code: `variable positivo = valorAbsoluto(10)
mostrar "Absoluto de 10: " + positivo

variable negativo = valorAbsoluto(-10)
mostrar "Absoluto de -10: " + negativo

variable cero = valorAbsoluto(0)
mostrar "Absoluto de 0: " + cero

variable temp1 = 25
variable temp2 = 15
variable diferencia = valorAbsoluto(temp1 - temp2)
mostrar "Diferencia de temperatura: " + diferencia + "°C"

variable saldo = -150
variable deuda = valorAbsoluto(saldo)
mostrar "Monto de deuda: $" + deuda

variable esperado = 100
variable obtenido = 85
variable error = valorAbsoluto(esperado - obtenido)
mostrar "Error absoluto: " + error

variable posicion1 = 50
variable posicion2 = 30
variable distancia = valorAbsoluto(posicion1 - posicion2)
mostrar "Distancia entre puntos: " + distancia + " unidades"`,
        output:
          'Absoluto de 10: 10\nAbsoluto de -10: 10\nAbsoluto de 0: 0\nDiferencia de temperatura: 10°C\nMonto de deuda: $150\nError absoluto: 15\nDistancia entre puntos: 20 unidades',
        notes: [
          'valorAbsoluto(n): Retorna el valor sin signo',
          'Números positivos → quedan igual',
          'Números negativos → se vuelven positivos',
          'Cero → queda en cero',
          '',
          'Casos de uso:',
          '• Calcular distancias (siempre positivas)',
          '• Diferencias de temperatura',
          '• Mostrar montos de deuda',
          '• Calcular errores o desviaciones',
          '• Cuando solo importa la magnitud, no la dirección',
          '',
          'Fórmula común:',
          'distancia = valorAbsoluto(punto1 - punto2)',
        ],
      },
      {
        title: 'Máximo, Mínimo, Suma, Promedio',
        description:
          'Funciones de agregación que operan sobre múltiples números. Como calcular la nota más alta, el producto más barato, el total de gastos, o el promedio de ventas.',
        code: `variable precios = maximo(100, 250, 180, 320)
mostrar "Precio más alto: $" + precios

variable barato = minimo(100, 250, 180, 320)
mostrar "Precio más bajo: $" + barato

variable notas = suma(85, 90, 78, 92)
mostrar "Suma de notas: " + notas

variable promedio = promedio(85, 90, 78, 92)
mostrar "Promedio de notas: " + promedio

variable mejorVenta = maximo(1500, 2300, 1800, 2100)
mostrar "Mejor día de ventas: $" + mejorVenta

variable peorVenta = minimo(1500, 2300, 1800, 2100)
mostrar "Peor día de ventas: $" + peorVenta

variable gastosMensuales = suma(500, 300, 150, 200, 400)
mostrar "Gastos totales: $" + gastosMensuales

variable gastoPromedio = promedio(500, 300, 150, 200, 400)
mostrar "Gasto promedio: $" + gastoPromedio`,
        output:
          'Precio más alto: $320\nPrecio más bajo: $100\nSuma de notas: 345\nPromedio de notas: 86.25\nMejor día de ventas: $2300\nPeor día de ventas: $1500\nGastos totales: $1550\nGasto promedio: $310',
        notes: [
          'maximo(...): Retorna el número más grande',
          'minimo(...): Retorna el número más pequeño',
          'suma(...): Retorna la suma de todos',
          'promedio(...): Retorna el promedio aritmético',
          '',
          'Todas aceptan múltiples argumentos:',
          '• maximo(10, 20, 15) → 20',
          '• minimo(10, 20, 15) → 10',
          '• suma(10, 20, 30) → 60',
          '• promedio(10, 20, 30) → 20',
          '',
          'Casos de uso:',
          '• Encontrar mejor/peor precio',
          '• Calcular nota más alta/baja',
          '• Sumar gastos o ventas',
          '• Calcular promedios de calificaciones',
          '• Análisis básico de datos',
          '• Comparaciones rápidas',
        ],
      },
      {
        title: 'Trigonometría: Ángulos y Círculos',
        description:
          'Los botones sin, cos, tan de la calculadora científica. Útiles para cálculos con ángulos, rotaciones, movimientos circulares, y geometría avanzada.',
        code: `variable sen0 = seno(0)
mostrar "seno(0°) = " + sen0

variable cos0 = coseno(0)
mostrar "coseno(0°) = " + cos0

variable sen90 = seno(90)
mostrar "seno(90°) = " + sen90

variable cos90 = coseno(90)
mostrar "coseno(90°) = " + cos90

variable tan45 = tangente(45)
mostrar "tangente(45°) = " + tan45

variable distancia = 100
variable angulo = 30
variable altura = distancia * seno(angulo)
mostrar "Altura del edificio: " + redondear(altura) + "m"

variable radio = 10
variable angulo = 45
variable x = radio * coseno(angulo)
variable y = radio * seno(angulo)
mostrar "Posición en círculo: (" + redondear(x) + ", " + redondear(y) + ")"`,
        output:
          'seno(0°) = 0\ncoseno(0°) = 1\nseno(90°) = 1\ncoseno(90°) = 0\ntangente(45°) = 1\nAltura del edificio: 50m\nPosición en círculo: (7, 7)',
        notes: [
          'seno(angulo): Calcula el seno del ángulo',
          'coseno(angulo): Calcula el coseno del ángulo',
          'tangente(angulo): Calcula la tangente del ángulo',
          '',
          '⚠️ Los ángulos se miden en GRADOS (0-360), no radianes',
          '',
          'Valores importantes:',
          '• seno(0°) = 0, seno(90°) = 1',
          '• coseno(0°) = 1, coseno(90°) = 0',
          '• tangente(45°) = 1',
          '',
          'Casos de uso:',
          '• Calcular alturas con ángulos',
          '• Movimiento circular (juegos, animaciones)',
          '• Rotaciones de objetos',
          '• Posiciones en círculo (reloj, rueda)',
          '• Navegación y direcciones',
          '• Física y simulaciones',
          '',
          '💡 Si no trabajas con ángulos, puedes omitir estas funciones',
        ],
      },
      {
        title: 'Logaritmos: Crecimiento y Escalas',
        description:
          'El botón log o ln en la calculadora científica. Útil para escalas logarítmicas, crecimiento exponencial inverso, y cálculos científicos avanzados.',
        code: `variable log10 = logaritmo(10)
mostrar "logaritmo(10) = " + log10

variable log100 = logaritmo(100)
mostrar "logaritmo(100) = " + log100

variable logE = logaritmo(2.71828)
mostrar "logaritmo(e) ≈ " + redondear(logE)

variable tiempoDoble = logaritmo(2) / logaritmo(1.05)
mostrar "Años para duplicar inversión al 5%: " + redondear(tiempoDoble)`,
        output:
          'logaritmo(10) = 2.302\nlogaritmo(100) = 4.605\nlogaritmo(e) ≈ 1\nAños para duplicar inversión al 5%: 14',
        notes: [
          'logaritmo(n): Logaritmo natural (base e) de n',
          "También conocido como 'ln' en calculadoras",
          '',
          'Relación con potencia:',
          '• Si potencia(e, x) = n, entonces logaritmo(n) = x',
          '• logaritmo es la operación inversa de potencia',
          '',
          'Casos de uso:',
          '• Cálculos financieros (tiempo para duplicar inversión)',
          '• Escalas logarítmicas (pH, decibeles, Richter)',
          '• Crecimiento exponencial',
          '• Algoritmos y complejidad computacional',
          '• Estadística y probabilidad',
          '',
          '💡 Función avanzada, no siempre necesaria para principiantes',
          '💡 Si no haces cálculos científicos, puedes omitirla',
        ],
      },
      {
        title: 'Combinando Funciones: Calculadora Completa',
        description:
          'Así como presionas varios botones en secuencia en la calculadora, puedes combinar múltiples funciones matemáticas para resolver problemas complejos.',
        code: `variable a = 3
variable b = 4
variable hipotenusa = raiz(potencia(a, 2) + potencia(b, 2))
mostrar "Hipotenusa: " + hipotenusa

variable ventas = suma(1500, 2300, 1800, 2100, 1900)
variable promVentas = promedio(1500, 2300, 1800, 2100, 1900)
mostrar "Total ventas: $" + ventas
mostrar "Promedio ventas: $" + promVentas

variable precio = 99.99
variable descuentoAleatorio = redondear(aleatorio(10, 31))
variable precioConDesc = precio * (1 - descuentoAleatorio / 100)
variable precioFinal = redondear(precioConDesc)
mostrar "Precio original: $" + precio
mostrar "Descuento: " + descuentoAleatorio + "%"
mostrar "Precio final: $" + precioFinal

variable nota1 = 85
variable nota2 = 90
variable nota3 = 78
variable promedioNotas = promedio(nota1, nota2, nota3)
variable notaRedondeada = redondear(promedioNotas)
variable notaMaxima = maximo(nota1, nota2, nota3)
variable notaMinima = minimo(nota1, nota2, nota3)
mostrar "Promedio: " + notaRedondeada
mostrar "Mejor nota: " + notaMaxima
mostrar "Peor nota: " + notaMinima

variable diferencia = valorAbsoluto(notaMaxima - notaMinima)
mostrar "Diferencia entre mejor y peor: " + diferencia`,
        output:
          'Hipotenusa: 5\nTotal ventas: $9600\nPromedio ventas: $1920\nPrecio original: $99.99\nDescuento: 23%\nPrecio final: $77\nPromedio: 84\nMejor nota: 90\nPeor nota: 78\nDiferencia entre mejor y peor: 12',
        notes: [
          'Puedes anidar funciones: raiz(potencia(x, 2) + potencia(y, 2))',
          'Combina resultados de varias funciones',
          'Cada función retorna un valor que puedes usar en otra',
          '',
          'Patrones comunes:',
          '• Teorema de Pitágoras: raiz(potencia(a,2) + potencia(b,2))',
          '• Redondear promedio: redondear(promedio(...))',
          '• Precio con descuento aleatorio: redondear(precio * aleatorio())',
          '• Diferencia absoluta: valorAbsoluto(maximo(...) - minimo(...))',
          '',
          'Consejos:',
          '✅ Usa variables intermedias para claridad',
          '✅ Guarda resultados parciales con nombres descriptivos',
          '✅ Redondea al final si trabajas con dinero',
          '✅ Combina funciones paso a paso, no todo en una línea',
        ],
      },
      {
        title: 'Casos de Uso Reales: Aplicaciones Prácticas',
        description:
          'Ejemplos completos de cómo usar estas funciones en situaciones del mundo real: finanzas, juegos, análisis de datos, y más.',
        code: `mostrar "=== CALCULADORA DE PROPINAS ==="
variable cuenta = 156.50
variable propina15 = cuenta * 0.15
variable propina20 = cuenta * 0.20
variable total15 = redondear(cuenta + propina15)
variable total20 = redondear(cuenta + propina20)
mostrar "Cuenta: $" + cuenta
mostrar "Con propina 15%: $" + total15
mostrar "Con propina 20%: $" + total20

mostrar ""
mostrar "=== SIMULADOR DE DADO ==="
variable dado1 = piso(aleatorio(1, 7))
variable dado2 = piso(aleatorio(1, 7))
variable sumaDados = suma(dado1, dado2)
mostrar "Dado 1: " + dado1
mostrar "Dado 2: " + dado2
mostrar "Suma: " + sumaDados

mostrar ""
mostrar "=== ANÁLISIS DE GASTOS ==="
variable gastos = suma(500, 300, 150, 450, 200)
variable promGasto = promedio(500, 300, 150, 450, 200)
variable mayorGasto = maximo(500, 300, 150, 450, 200)
variable menorGasto = minimo(500, 300, 150, 450, 200)
mostrar "Total gastado: $" + gastos
mostrar "Gasto promedio: $" + promGasto
mostrar "Mayor gasto: $" + mayorGasto
mostrar "Menor gasto: $" + menorGasto

mostrar ""
mostrar "=== CALCULADORA DE ÁREA ==="
variable radio = 5
variable areaCuadrado = potencia(radio, 2)
variable perimetro = 4 * radio
mostrar "Cuadrado de lado " + radio + ":"
mostrar "Área: " + areaCuadrado + " m²"
mostrar "Perímetro: " + perimetro + " m"

mostrar ""
mostrar "=== SISTEMA DE DESCUENTOS ==="
variable precioOriginal = 1000
variable descuento = redondear(aleatorio(10, 41))
variable ahorro = precioOriginal * descuento / 100
variable precioFinal = redondear(precioOriginal - ahorro)
mostrar "Precio: $" + precioOriginal
mostrar "Descuento sorpresa: " + descuento + "%"
mostrar "Ahorras: $" + redondear(ahorro)
mostrar "Pagas: $" + precioFinal`,
        output:
          '=== CALCULADORA DE PROPINAS ===\nCuenta: $156.5\nCon propina 15%: $180\nCon propina 20%: $188\n\n=== SIMULADOR DE DADO ===\nDado 1: 4\nDado 2: 6\nSuma: 10\n\n=== ANÁLISIS DE GASTOS ===\nTotal gastado: $1600\nGasto promedio: $320\nMayor gasto: $500\nMenor gasto: $150\n\n=== CALCULADORA DE ÁREA ===\nCuadrado de lado 5:\nÁrea: 25 m²\nPerímetro: 20 m\n\n=== SISTEMA DE DESCUENTOS ===\nPrecio: $1000\nDescuento sorpresa: 27%\nAhorras: $270\nPagas: $730',
        notes: [
          'Ejemplos completos de aplicaciones reales',
          '',
          'Calculadora de propinas:',
          '✅ Redondear totales para facilitar pago',
          '✅ Calcular múltiples opciones de propina',
          '',
          'Simulador de dado:',
          '✅ Generar números aleatorios enteros',
          '✅ Útil para juegos de mesa digitales',
          '',
          'Análisis de gastos:',
          '✅ Encontrar totales y promedios',
          '✅ Identificar mayor y menor gasto',
          '',
          'Calculadora de área:',
          '✅ Usar potencias para áreas',
          '✅ Cálculos geométricos básicos',
          '',
          'Sistema de descuentos:',
          '✅ Generar ofertas aleatorias',
          '✅ Calcular ahorros y precio final',
          '',
          '💡 Estos ejemplos se pueden expandir en aplicaciones completas',
        ],
      },
      {
        title: 'Referencia Rápida: Todas las Funciones',
        description:
          'Tabla de referencia con todas las funciones matemáticas disponibles en HispanoLang.',
        code: `// REDONDEO
redondear(3.7)        // → 4
techo(3.1)            // → 4
piso(3.9)             // → 3

// ALEATORIOS
aleatorio()           // → 0.0 a 1.0
aleatorio(10)         // → 0.0 a 10.0
aleatorio(5, 15)      // → 5.0 a 15.0

// POTENCIAS Y RAÍCES
potencia(2, 3)        // → 8
raiz(16)              // → 4

// VALOR ABSOLUTO
valorAbsoluto(-10)    // → 10

// AGREGACIÓN
maximo(10, 20, 5)     // → 20
minimo(10, 20, 5)     // → 5
suma(10, 20, 30)      // → 60
promedio(10, 20, 30)  // → 20

// TRIGONOMETRÍA
seno(90)              // → 1
coseno(0)             // → 1
tangente(45)          // → 1

// LOGARITMOS
logaritmo(10)         // → 2.302`,
        output: '',
        notes: [
          '📊 FUNCIONES MÁS ÚTILES (para principiantes):',
          '⭐⭐⭐ redondear(), techo(), piso() - Esenciales',
          '⭐⭐⭐ aleatorio() - Muy útil y divertido',
          '⭐⭐⭐ maximo(), minimo(), suma(), promedio() - Análisis básico',
          '⭐⭐ potencia(), raiz() - Cálculos comunes',
          '⭐⭐ valorAbsoluto() - Distancias y diferencias',
          '⭐ seno(), coseno(), tangente() - Solo si necesitas ángulos',
          '⭐ logaritmo() - Avanzado, raramente necesario',
          '',
          '💡 Empieza con las 3 estrellas y aprende las demás cuando las necesites',
          '',
          '🔗 Todas retornan un valor que puedes:',
          '• Guardar en variable',
          '• Mostrar directamente',
          '• Usar en cálculos',
          '• Pasar a otras funciones',
        ],
      },
    ],
  },
  listas: {
    title: '📋 Listas (Arrays)',
    description:
      'Imagina tu lista de compras del supermercado: tienes varios items escritos en orden. Puedes agregar más items, tachar los que ya compraste, contar cuántos hay, o ver el primer item de la lista. Las listas en programación funcionan igual: colecciones ordenadas de elementos donde puedes agregar, quitar, buscar, y procesar cada item. Es como tener una lista de compras digital con superpoderes.',
    subsections: [
      {
        title: '¿Qué son las Listas?',
        description:
          "Cuando vas al supermercado, haces una lista: 'leche, pan, huevos, manzanas'. En vez de tener 4 variables separadas (item1, item2, item3, item4), tienes UNA lista con todos los items.\n\nLas listas son perfectas cuando necesitas almacenar múltiples valores relacionados en una sola variable.",
        syntax: 'variable lista = [elemento1, elemento2, elemento3, ...]',
        code: `variable compras = ["leche", "pan", "huevos", "manzanas"]
mostrar compras

variable numeros = [1, 2, 3, 4, 5]
mostrar numeros

variable mixto = [1, "hola", verdadero, 3.14]
mostrar mixto

variable vacia = []
mostrar "Lista vacía: " + texto(vacia)

variable unoSolo = ["único item"]
mostrar unoSolo`,
        output:
          '["leche", "pan", "huevos", "manzanas"]\n[1, 2, 3, 4, 5]\n[1, "hola", verdadero, 3.14]\nLista vacía: []\n["único item"]',
        notes: [
          'Las listas se crean con corchetes: []',
          'Los elementos se separan con comas',
          'Pueden contener cualquier tipo de dato',
          'Puedes mezclar tipos diferentes (números, texto, booleanos)',
          'Una lista vacía es válida: []',
          '',
          '¿Cuándo usar listas?',
          '✅ Múltiples items relacionados (compras, tareas, notas)',
          '✅ Datos que necesitas recorrer (playlist, inventario)',
          '✅ Colecciones que crecen/decrecen (carrito, fila)',
          '',
          'Como tu lista de compras:',
          '• Ordenada: item 1, item 2, item 3...',
          '• Múltiples elementos en un solo lugar',
          '• Puedes agregar, quitar, contar',
        ],
      },
      {
        title: 'Acceder a Items: Índices',
        description:
          'Tu lista tiene posiciones numeradas: el primer item es posición 0, el segundo es posición 1, y así sucesivamente. En programación, SIEMPRE empezamos a contar desde 0, no desde 1.',
        code: `variable compras = ["leche", "pan", "huevos", "manzanas", "queso"]

mostrar "Item 0 (primero): " + compras[0]
mostrar "Item 1 (segundo): " + compras[1]
mostrar "Item 2 (tercero): " + compras[2]
mostrar "Item 3 (cuarto): " + compras[3]
mostrar "Item 4 (quinto): " + compras[4]

variable notas = [85, 90, 78, 92, 88]
mostrar "Primera nota: " + texto(notas[0])
mostrar "Segunda nota: " + texto(notas[1])
mostrar "Tercera nota: " + texto(notas[2])

variable primerItem = compras[0]
mostrar "Primer item de la lista: " + primerItem

variable ultimaPosicion = 4
mostrar "Último item: " + compras[ultimaPosicion]`,
        output:
          'Item 0 (primero): leche\nItem 1 (segundo): pan\nItem 2 (tercero): huevos\nItem 3 (cuarto): manzanas\nItem 4 (quinto): queso\nPrimera nota: 85\nSegunda nota: 90\nTercera nota: 78\nPrimer item de la lista: leche\nÚltimo item: queso',
        notes: [
          'Acceso con corchetes: lista[indice]',
          '⚠️ IMPORTANTE: Los índices empiezan en 0, no en 1',
          '',
          'Posiciones:',
          '• Primer elemento: lista[0]',
          '• Segundo elemento: lista[1]',
          '• Tercer elemento: lista[2]',
          '• ...',
          '',
          '¿Por qué empezar en 0?',
          '• Convención universal en programación',
          '• Lista de 5 elementos: índices 0, 1, 2, 3, 4',
          '• Más eficiente para la computadora',
          '',
          'Como tu lista de compras:',
          'Item #0: leche',
          'Item #1: pan',
          'Item #2: huevos',
          '',
          '⚠️ Acceder fuera de rango causa error',
          'Si tienes 3 items, solo existen índices 0, 1, 2',
        ],
      },
      {
        title: 'Modificar Items de la Lista',
        description:
          'Como cuando tachas un item de tu lista y escribes otro, puedes cambiar elementos usando su índice.',
        code: `variable compras = ["leche", "pan", "huevos"]
mostrar "Lista original: " + texto(compras)

compras[1] = "pan integral"
mostrar "Después de cambiar: " + texto(compras)

variable notas = [85, 90, 78]
mostrar "Notas originales: " + texto(notas)

notas[2] = 80
mostrar "Después de corregir: " + texto(notas)

variable tareas = ["Estudiar", "Comprar", "Cocinar"]
tareas[0] = "Estudiar matemáticas"
tareas[2] = "Cocinar pasta"
mostrar "Tareas actualizadas: " + texto(tareas)`,
        output:
          'Lista original: ["leche", "pan", "huevos"]\nDespués de cambiar: ["leche", "pan integral", "huevos"]\nNotas originales: [85, 90, 78]\nDespués de corregir: [85, 90, 80]\nTareas actualizadas: ["Estudiar matemáticas", "Comprar", "Cocinar pasta"]',
        notes: [
          'Modificar: lista[indice] = nuevoValor',
          'El índice debe existir en la lista',
          'No puedes modificar índices que no existen',
          '',
          'Ejemplos:',
          "• compras[0] = 'yogurt' - Cambia el primer item",
          '• notas[1] = 95 - Cambia la segunda nota',
          '',
          'Como tachar y reescribir:',
          "Lista: ['leche', 'pan', 'huevos']",
          "Tachas 'pan' y escribes 'pan integral'",
          "Resultado: ['leche', 'pan integral', 'huevos']",
          '',
          '💡 La lista mantiene su tamaño',
          '💡 Solo cambias el contenido, no agregas ni quitas',
        ],
      },
      {
        title: 'Información de la Lista: Longitud y Extremos',
        description:
          '¿Cuántos items tengo? ¿Cuál es el primero? ¿Cuál es el último? Métodos útiles para obtener información básica de tu lista.',
        code: `variable compras = ["leche", "pan", "huevos", "manzanas", "queso"]

mostrar "Cantidad de items: " + texto(compras.longitud())
mostrar "Primer item: " + compras.primero()
mostrar "Último item: " + compras.ultimo()

variable vacia = []
mostrar "Lista vacía tiene: " + texto(vacia.longitud()) + " items"

variable unoSolo = ["único"]
mostrar "Una lista con 1 item:"
mostrar "Longitud: " + texto(unoSolo.longitud())
mostrar "Primero: " + unoSolo.primero()
mostrar "Último: " + unoSolo.ultimo()

variable notas = [85, 90, 78, 92, 88]
variable cantidad = notas.longitud()
mostrar "Tienes " + texto(cantidad) + " notas"
mostrar "Primera nota: " + texto(notas.primero())
mostrar "Última nota: " + texto(notas.ultimo())`,
        output:
          'Cantidad de items: 5\nPrimer item: leche\nÚltimo item: queso\nLista vacía tiene: 0 items\nUna lista con 1 item:\nLongitud: 1\nPrimero: único\nÚltimo: único\nTienes 5 notas\nPrimera nota: 85\nÚltima nota: 88',
        notes: [
          '.longitud(): Retorna cuántos elementos tiene la lista',
          '.primero(): Retorna el primer elemento (índice 0)',
          '.ultimo(): Retorna el último elemento',
          '',
          'Equivalencias:',
          '• lista.primero() ≈ lista[0]',
          '• lista.ultimo() ≈ lista[lista.longitud() - 1]',
          '',
          'Como contar items en tu lista de compras:',
          '• .longitud() → contar líneas escritas',
          '• .primero() → mirar el primer item',
          '• .ultimo() → mirar el último item',
          '',
          'Casos de uso:',
          '✅ Saber cuántos items tienes',
          '✅ Verificar si la lista está vacía (longitud == 0)',
          '✅ Acceder rápido al primero/último',
          '',
          '💡 Si la lista tiene 1 elemento, primero y último son el mismo',
        ],
      },
      {
        title: 'Agregar Items: Construir tu Lista',
        description:
          'Como cuando vas agregando items a tu lista de compras conforme recuerdas lo que necesitas. El método .agregar() añade elementos al final de la lista.',
        code: `variable compras = ["leche", "pan"]
mostrar "Inicial: " + texto(compras)

compras.agregar("huevos")
mostrar "Después de agregar huevos: " + texto(compras)

compras.agregar("manzanas")
mostrar "Después de agregar manzanas: " + texto(compras)

compras.agregar("queso")
mostrar "Final: " + texto(compras)

mostrar ""
mostrar "=== CARRITO DE COMPRAS ==="
variable carrito = []
mostrar "Carrito vacío: " + texto(carrito)

carrito.agregar("Teclado")
carrito.agregar("Mouse")
carrito.agregar("Monitor")
mostrar "Carrito lleno: " + texto(carrito)
mostrar "Total de items: " + texto(carrito.longitud())`,
        output:
          'Inicial: ["leche", "pan"]\nDespués de agregar huevos: ["leche", "pan", "huevos"]\nDespués de agregar manzanas: ["leche", "pan", "huevos", "manzanas"]\nFinal: ["leche", "pan", "huevos", "manzanas", "queso"]\n\n=== CARRITO DE COMPRAS ===\nCarrito vacío: []\nCarrito lleno: ["Teclado", "Mouse", "Monitor"]\nTotal de items: 3',
        notes: [
          '.agregar(elemento): Agrega un elemento al final de la lista',
          'La lista crece dinámicamente',
          'Siempre se agrega al final, no al inicio',
          '',
          'Patrón común:',
          '1. Crear lista vacía: variable lista = []',
          '2. Ir agregando: lista.agregar(item1)',
          '3. Ir agregando: lista.agregar(item2)',
          '4. La lista crece automáticamente',
          '',
          'Como tu lista de compras:',
          '• Empiezas con papel en blanco',
          '• Vas escribiendo items conforme recuerdas',
          '• Cada .agregar() es escribir una línea nueva',
          '',
          'Casos de uso:',
          '✅ Construir carrito de compras',
          '✅ Acumular resultados en bucle',
          '✅ Lista de tareas que crece',
          '✅ Inventario que se actualiza',
          '',
          '💡 No hay límite de tamaño',
          '💡 Puedes agregar cualquier tipo de dato',
        ],
      },
      {
        title: 'Quitar Items: Remover del Final',
        description:
          'Como cuando tachas el último item de tu lista. El método .remover() elimina y retorna el último elemento.',
        code: `variable compras = ["leche", "pan", "huevos", "manzanas", "queso"]
mostrar "Lista completa: " + texto(compras)
mostrar "Longitud: " + texto(compras.longitud())

variable ultimo = compras.remover()
mostrar "Removiste: " + ultimo
mostrar "Ahora tienes: " + texto(compras)
mostrar "Longitud: " + texto(compras.longitud())

variable siguiente = compras.remover()
mostrar "Removiste: " + siguiente
mostrar "Ahora tienes: " + texto(compras)

mostrar ""
mostrar "=== DESHACER ACCIONES ==="
variable acciones = []
acciones.agregar("Escribir")
acciones.agregar("Guardar")
acciones.agregar("Editar")
mostrar "Acciones: " + texto(acciones)

variable deshacer = acciones.remover()
mostrar "Deshaciendo: " + deshacer
mostrar "Acciones restantes: " + texto(acciones)`,
        output:
          'Lista completa: ["leche", "pan", "huevos", "manzanas", "queso"]\nLongitud: 5\nRemoviste: queso\nAhora tienes: ["leche", "pan", "huevos", "manzanas"]\nLongitud: 4\nRemoviste: manzanas\nAhora tienes: ["leche", "pan", "huevos"]\n\n=== DESHACER ACCIONES ===\nAcciones: ["Escribir", "Guardar", "Editar"]\nDeshaciendo: Editar\nAcciones restantes: ["Escribir", "Guardar"]',
        notes: [
          '.remover(): Elimina el último elemento y lo retorna',
          'La lista se acorta en 1',
          'Retorna el elemento eliminado (puedes guardarlo)',
          'Si la lista está vacía, causa error',
          '',
          'Patrón común:',
          'variable elemento = lista.remover()',
          '• lista pierde el último elemento',
          '• elemento guarda el valor eliminado',
          '',
          'Como tachar el último item:',
          "Lista: ['leche', 'pan', 'huevos']",
          "Tachas 'huevos' (último)",
          "Resultado: ['leche', 'pan']",
          '',
          'Casos de uso:',
          '✅ Deshacer última acción (Ctrl+Z)',
          '✅ Stack/Pila de operaciones',
          '✅ Procesar items del final al inicio',
          '✅ Quitar items de carrito',
          '',
          '💡 .agregar() y .remover() trabajan en el mismo extremo (final)',
          "💡 Combinados forman una 'pila' (stack)",
        ],
      },
      {
        title: 'Verificar Existencia: ¿Tengo Este Item?',
        description:
          "¿Ya escribí 'leche' en mi lista? El método .contiene() verifica si un elemento existe en la lista.",
        code: `variable compras = ["leche", "pan", "huevos", "manzanas"]

mostrar "¿Tengo leche?: " + texto(compras.contiene("leche"))
mostrar "¿Tengo queso?: " + texto(compras.contiene("queso"))
mostrar "¿Tengo pan?: " + texto(compras.contiene("pan"))

si compras.contiene("huevos") {
    mostrar "Ya tienes huevos en la lista"
} sino {
    mostrar "Necesitas agregar huevos"
}

mostrar ""
mostrar "=== VALIDAR ANTES DE AGREGAR ==="
variable carrito = ["Mouse", "Teclado"]

variable nuevoItem = "Mouse"
si carrito.contiene(nuevoItem) {
    mostrar nuevoItem + " ya está en el carrito"
} sino {
    carrito.agregar(nuevoItem)
    mostrar "Agregado: " + nuevoItem
}

variable otroItem = "Monitor"
si carrito.contiene(otroItem) {
    mostrar otroItem + " ya está en el carrito"
} sino {
    carrito.agregar(otroItem)
    mostrar "Agregado: " + otroItem
}

mostrar "Carrito final: " + texto(carrito)`,
        output:
          '¿Tengo leche?: verdadero\n¿Tengo queso?: falso\n¿Tengo pan?: verdadero\nYa tienes huevos en la lista\n\n=== VALIDAR ANTES DE AGREGAR ===\nMouse ya está en el carrito\nAgregado: Monitor\nCarrito final: ["Mouse", "Teclado", "Monitor"]',
        notes: [
          '.contiene(elemento): Retorna verdadero si existe, falso si no',
          'Busca el elemento exacto (case-sensitive para texto)',
          'Útil para validar antes de agregar',
          'Recorre toda la lista hasta encontrarlo',
          '',
          'Como revisar tu lista de compras:',
          '• Miras línea por línea',
          '• Si encuentras el item → verdadero',
          '• Si terminas sin encontrarlo → falso',
          '',
          'Casos de uso:',
          '✅ Evitar duplicados en carrito',
          '✅ Verificar si completaste una tarea',
          '✅ Validar permisos/roles',
          '✅ Filtrar items únicos',
          '',
          'Patrón común: validar antes de agregar',
          'si !lista.contiene(item) {',
          '    lista.agregar(item)',
          '}',
          '',
          '💡 Compara con == (igualdad exacta)',
          "💡 'Leche' != 'leche' (case-sensitive)",
        ],
      },
      {
        title: 'Recorrer la Lista: Procesar Cada Item',
        description:
          'Como cuando pasas por cada línea de tu lista de compras en el super, revisando item por item. El método .recorrer() ejecuta una función para cada elemento.',
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
mostrar "=== CALCULAR TOTAL ==="
variable precios = [100, 250, 150, 300]
variable total = 0

precios.recorrer(funcion(precio) {
    total = total + precio
    mostrar "Agregando $" + texto(precio) + " → Total: $" + texto(total)
})

mostrar "Total final: $" + texto(total)`,
        output:
          '=== LISTA DE COMPRAS ===\n☐ leche\n☐ pan\n☐ huevos\n☐ manzanas\n\n=== CON ÍNDICE ===\nItem 0: leche\nItem 1: pan\nItem 2: huevos\nItem 3: manzanas\n\n=== CALCULAR TOTAL ===\nAgregando $100 → Total: $100\nAgregando $250 → Total: $350\nAgregando $150 → Total: $500\nAgregando $300 → Total: $800\nTotal final: $800',
        notes: [
          '.recorrer(funcion(elemento) { código })',
          'Ejecuta la función una vez por cada elemento',
          'Primer parámetro: el elemento actual',
          'Segundo parámetro (opcional): índice del elemento',
          '',
          'Patrón común:',
          'lista.recorrer(funcion(item) {',
          '    // Hacer algo con item',
          '})',
          '',
          'Con índice:',
          'lista.recorrer(funcion(item, indice) {',
          '    // Usar item y su posición',
          '})',
          '',
          'Como revisar tu lista físicamente:',
          '• Empiezas desde arriba',
          '• Miras cada línea (elemento)',
          '• Haces algo con cada una (mostrar, sumar, etc.)',
          '• Continúas hasta el final',
          '',
          'Casos de uso:',
          '✅ Mostrar todos los items',
          '✅ Sumar/calcular totales',
          '✅ Procesar cada elemento',
          '✅ Buscar manualmente',
          '',
          '💡 Más moderno que bucle para',
          '💡 Más legible y expresivo',
        ],
      },
      {
        title: 'Buscar en la Lista: Encontrar lo que Necesitas',
        description:
          "¿Dónde está el item que cuesta más de $100? ¿Hay alguno que empiece con 'M'? Métodos para buscar elementos que cumplan condiciones.",
        code: `variable precios = [50, 150, 80, 200, 90]

variable caro = precios.buscar(funcion(precio) {
    retornar precio > 100
})
mostrar "Primer precio > $100: $" + texto(caro)

variable hayCaros = precios.algunos(funcion(precio) {
    retornar precio > 100
})
mostrar "¿Hay precios > $100?: " + texto(hayCaros)

variable todosPositivos = precios.todos(funcion(precio) {
    retornar precio > 0
})
mostrar "¿Todos positivos?: " + texto(todosPositivos)

mostrar ""
mostrar "=== BUSCAR PRODUCTOS ==="
variable productos = ["Manzana", "Banana", "Mango", "Uva"]

variable conM = productos.buscar(funcion(producto) {
    retornar producto[0] == "M"
})
mostrar "Primer producto con M: " + conM

variable hayLargos = productos.algunos(funcion(producto) {
    retornar producto.longitud() > 5
})
mostrar "¿Hay nombres largos?: " + texto(hayLargos)`,
        output:
          'Primer precio > $100: $150\n¿Hay precios > $100?: verdadero\n¿Todos positivos?: verdadero\n\n=== BUSCAR PRODUCTOS ===\nPrimer producto con M: Manzana\n¿Hay nombres largos?: verdadero',
        notes: [
          '.buscar(fn): Retorna el primer elemento que cumple la condición',
          '.algunos(fn): Verdadero si AL MENOS UNO cumple',
          '.todos(fn): Verdadero si TODOS cumplen',
          '',
          'La función debe retornar verdadero/falso',
          '',
          'Ejemplos:',
          '• .buscar(x => x > 10) → encuentra primer número > 10',
          '• .algunos(x => x < 0) → ¿hay algún negativo?',
          '• .todos(x => x > 0) → ¿todos son positivos?',
          '',
          'Como buscar en tu lista de compras:',
          '• .buscar → encontrar el primer item que...',
          '• .algunos → ¿hay algún item que...?',
          '• .todos → ¿todos los items...?',
          '',
          'Casos de uso:',
          '✅ Encontrar primer item que cumple criterio',
          '✅ Validar si existe al menos uno',
          '✅ Verificar que todos cumplan regla',
          '✅ Búsquedas condicionales',
          '',
          '💡 .buscar retorna el elemento o indefinido',
          '💡 .algunos y .todos retornan booleano',
        ],
      },
      {
        title: 'Transformar: Mapear a Nueva Lista',
        description:
          '¿Y si quiero una lista con todos los precios con IVA? El método .mapear() transforma cada elemento y retorna una NUEVA lista.',
        code: `variable precios = [100, 200, 150, 300]

variable conIVA = precios.mapear(funcion(precio) {
    retornar precio * 1.21
})
mostrar "Precios originales: " + texto(precios)
mostrar "Precios con IVA: " + texto(conIVA)

mostrar ""
mostrar "=== TRANSFORMACIONES ==="
variable numeros = [1, 2, 3, 4, 5]

variable dobles = numeros.mapear(funcion(n) {
    retornar n * 2
})
mostrar "Originales: " + texto(numeros)
mostrar "Dobles: " + texto(dobles)

variable cuadrados = numeros.mapear(funcion(n) {
    retornar n * n
})
mostrar "Cuadrados: " + texto(cuadrados)

mostrar ""
mostrar "=== FORMATEAR TEXTO ==="
variable nombres = ["ana", "pedro", "luis"]

variable mayusculas = nombres.mapear(funcion(nombre) {
    retornar nombre.mayusculas()
})
mostrar "Originales: " + texto(nombres)
mostrar "Mayúsculas: " + texto(mayusculas)`,
        output:
          'Precios originales: [100, 200, 150, 300]\nPrecios con IVA: [121, 242, 181.5, 363]\n\n=== TRANSFORMACIONES ===\nOriginales: [1, 2, 3, 4, 5]\nDobles: [2, 4, 6, 8, 10]\nCuadrados: [1, 4, 9, 16, 25]\n\n=== FORMATEAR TEXTO ===\nOriginales: ["ana", "pedro", "luis"]\nMayúsculas: ["ANA", "PEDRO", "LUIS"]',
        notes: [
          '.mapear(fn): Transforma cada elemento y retorna NUEVA lista',
          'La lista original NO se modifica',
          'La nueva lista tiene la misma longitud',
          'La función debe retornar el nuevo valor',
          '',
          'Patrón:',
          'variable nueva = lista.mapear(funcion(elemento) {',
          '    retornar elementoTransformado',
          '})',
          '',
          'Como hacer una lista derivada:',
          'Lista original: [100, 200, 300]',
          'Transformar: multiplicar por 1.21',
          'Nueva lista: [121, 242, 363]',
          'Original intacta: [100, 200, 300]',
          '',
          'Casos de uso:',
          '✅ Aplicar descuento/impuesto a precios',
          '✅ Convertir unidades (km → mi)',
          '✅ Formatear texto (mayúsculas, minúsculas)',
          '✅ Extraer propiedades',
          '✅ Calcular derivados (dobles, cuadrados)',
          '',
          '💡 Lista original permanece igual',
          '💡 Crea nueva lista transformada',
          '💡 Longitud se mantiene',
        ],
      },
      {
        title: 'Filtrar: Quedarte con Algunos',
        description:
          '¿Y si solo quiero los items que cuestan menos de $200? El método .filtrar() retorna una NUEVA lista solo con los elementos que cumplen la condición.',
        code: `variable precios = [100, 250, 150, 300, 80, 200]

variable baratos = precios.filtrar(funcion(precio) {
    retornar precio < 200
})
mostrar "Todos: " + texto(precios)
mostrar "Baratos (< $200): " + texto(baratos)

mostrar ""
mostrar "=== FILTRAR NÚMEROS ==="
variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

variable pares = numeros.filtrar(funcion(n) {
    retornar n.esPar()
})
mostrar "Todos: " + texto(numeros)
mostrar "Pares: " + texto(pares)

variable mayoresQue5 = numeros.filtrar(funcion(n) {
    retornar n > 5
})
mostrar "Mayores que 5: " + texto(mayoresQue5)

mostrar ""
mostrar "=== FILTRAR TEXTO ==="
variable productos = ["Manzana", "Banana", "Mango", "Uva", "Melón"]

variable conM = productos.filtrar(funcion(producto) {
    retornar producto[0] == "M"
})
mostrar "Todos: " + texto(productos)
mostrar "Empiezan con M: " + texto(conM)`,
        output:
          'Todos: [100, 250, 150, 300, 80, 200]\nBaratos (< $200): [100, 150, 80]\n\n=== FILTRAR NÚMEROS ===\nTodos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nPares: [2, 4, 6, 8, 10]\nMayores que 5: [6, 7, 8, 9, 10]\n\n=== FILTRAR TEXTO ===\nTodos: ["Manzana", "Banana", "Mango", "Uva", "Melón"]\nEmpiezan con M: ["Manzana", "Mango", "Melón"]',
        notes: [
          '.filtrar(fn): Retorna NUEVA lista solo con elementos que cumplen',
          'La lista original NO se modifica',
          'La nueva lista puede ser más corta',
          'La función debe retornar verdadero/falso',
          '',
          'Patrón:',
          'variable filtrada = lista.filtrar(funcion(elemento) {',
          '    retornar condicion',
          '})',
          '',
          'Como filtrar tu lista de compras:',
          'Lista completa: [100, 250, 150, 300, 80]',
          'Filtrar: solo < 200',
          'Resultado: [100, 150, 80]',
          'Original intacta: [100, 250, 150, 300, 80]',
          '',
          'Casos de uso:',
          '✅ Productos en rango de precio',
          '✅ Números pares/impares',
          '✅ Elementos que cumplen condición',
          '✅ Búsquedas múltiples',
          '✅ Remover items no deseados',
          '',
          '💡 Lista original permanece igual',
          '💡 Nueva lista puede ser más corta',
          '💡 Si ninguno cumple, retorna lista vacía []',
        ],
      },
      {
        title: 'Reducir: Combinar Todo en Uno',
        description:
          '¿Cuál es el total de mi lista de compras? El método .reducir() combina todos los elementos en un solo valor.',
        code: `variable precios = [100, 250, 150, 300]

variable total = precios.reducir(funcion(acumulado, precio) {
    retornar acumulado + precio
}, 0)
mostrar "Precios: " + texto(precios)
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
mostrar "Producto: " + texto(producto)

mostrar ""
mostrar "=== CONCATENAR TEXTO ==="
variable palabras = ["Hola", "mundo", "desde", "HispanoLang"]

variable frase = palabras.reducir(funcion(acc, palabra) {
    retornar acc + " " + palabra
}, "")
mostrar "Frase: " + frase`,
        output:
          'Precios: [100, 250, 150, 300]\nTotal: $800\n\n=== OPERACIONES ===\nSuma: 15\nProducto: 120\n\n=== CONCATENAR TEXTO ===\nFrase:  Hola mundo desde HispanoLang',
        notes: [
          '.reducir(fn, inicial): Reduce la lista a un solo valor',
          'Combina todos los elementos usando la función',
          "Necesita valor inicial (0 para sumas, 1 para productos, '' para texto)",
          '',
          'Parámetros de la función:',
          '• acumulador: valor acumulado hasta ahora',
          '• elemento: elemento actual de la lista',
          '',
          'Patrón:',
          'variable resultado = lista.reducir(funcion(acc, elem) {',
          '    retornar acc + elem  // combinar',
          '}, valorInicial)',
          '',
          'Como sumar cuenta en el super:',
          'Empiezas en 0 (valorInicial)',
          'Item 1: $100 → total = 0 + 100 = $100',
          'Item 2: $250 → total = 100 + 250 = $350',
          'Item 3: $150 → total = 350 + 150 = $500',
          'Resultado final: $500',
          '',
          'Casos de uso:',
          '✅ Sumar precios (carrito de compras)',
          '✅ Calcular promedio',
          '✅ Encontrar máximo/mínimo',
          '✅ Concatenar strings',
          '✅ Contar ocurrencias',
          '',
          '💡 Valor inicial importa: 0 para suma, 1 para producto',
          '💡 El más poderoso pero también el más complejo',
        ],
      },
      {
        title: 'Combinar Métodos: Encadenar Operaciones',
        description:
          'La magia de las listas: puedes encadenar métodos para operaciones complejas en una sola expresión legible.',
        code: `variable precios = [100, 250, 150, 300, 80, 200]

mostrar "=== PRECIOS ORIGINALES ==="
mostrar "Todos: " + texto(precios)

mostrar ""
mostrar "=== FILTRAR Y MAPEAR ==="
variable baratosConIVA = precios
    .filtrar(funcion(precio) { retornar precio < 200 })
    .mapear(funcion(precio) { retornar precio * 1.21 })

mostrar "Baratos con IVA: " + texto(baratosConIVA)

mostrar ""
mostrar "=== FILTRAR, MAPEAR Y REDUCIR ==="
variable totalBaratos = precios
    .filtrar(funcion(p) { retornar p < 200 })
    .mapear(funcion(p) { retornar p * 1.21 })
    .reducir(funcion(acc, p) { retornar acc + p }, 0)

mostrar "Total de baratos con IVA: $" + texto(totalBaratos)

mostrar ""
mostrar "=== NÚMEROS ==="
variable numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

variable sumaParesDoblados = numeros
    .filtrar(funcion(n) { retornar n.esPar() })
    .mapear(funcion(n) { retornar n * 2 })
    .reducir(funcion(acc, n) { retornar acc + n }, 0)

mostrar "Suma de pares doblados: " + texto(sumaParesDoblados)`,
        output:
          '=== PRECIOS ORIGINALES ===\nTodos: [100, 250, 150, 300, 80, 200]\n\n=== FILTRAR Y MAPEAR ===\nBaratos con IVA: [121, 181.5, 96.8]\n\n=== FILTRAR, MAPEAR Y REDUCIR ===\nTotal de baratos con IVA: $399.3\n\n=== NÚMEROS ===\nSuma de pares doblados: 60',
        notes: [
          'Puedes encadenar métodos uno tras otro',
          'Cada método retorna una lista que alimenta al siguiente',
          'Se lee de arriba hacia abajo (o izquierda a derecha)',
          '',
          'Ejemplo de pipeline:',
          'lista',
          '  .filtrar(...)  → lista más pequeña',
          '  .mapear(...)   → lista transformada',
          '  .reducir(...)  → valor único',
          '',
          'Como procesar tu lista de compras:',
          '1. Filtrar: solo items < $200',
          '2. Mapear: agregar IVA a cada uno',
          '3. Reducir: sumar todo',
          'Resultado: total a pagar',
          '',
          'Casos de uso:',
          '✅ Filtrar → Transformar → Sumar',
          '✅ Seleccionar → Formatear → Unir',
          '✅ Limpiar → Calcular → Agregar',
          '',
          'Ventajas:',
          '✅ Código muy legible',
          '✅ Sin variables intermedias',
          '✅ Flujo claro de operaciones',
          '✅ Estilo funcional moderno',
          '',
          '💡 Cada método retorna nueva lista (inmutable)',
          '💡 Orden importa: filtrar antes de mapear es más eficiente',
        ],
      },
      {
        title: 'Casos de Uso Completos',
        description:
          'Ejemplos reales de cómo usar listas en aplicaciones: carrito de compras, inventario, y sistema de tareas.',
        code: `mostrar "=== CARRITO DE COMPRAS ==="
variable carrito = []

carrito.agregar("Mouse")
carrito.agregar("Teclado")
carrito.agregar("Monitor")

mostrar "Items en carrito: " + texto(carrito.longitud())
carrito.recorrer(funcion(producto, i) {
    mostrar (i + 1).aTexto() + ". " + producto
})

mostrar ""
mostrar "=== INVENTARIO CON PRECIOS ==="
variable productos = ["Mouse", "Teclado", "Monitor", "WebCam"]
variable precios = [150, 300, 2000, 500]

mostrar "Productos disponibles:"
productos.recorrer(funcion(producto, i) {
    mostrar producto + ": $" + precios[i].aTexto()
})

variable total = precios.reducir(funcion(acc, precio) {
    retornar acc + precio
}, 0)
mostrar "Valor total inventario: $" + total.aTexto()

mostrar ""
mostrar "=== ANÁLISIS DE VENTAS ==="
variable ventas = [1500, 2300, 1800, 2100, 1900]

variable mayorVenta = ventas.reducir(funcion(max, venta) {
    retornar venta > max ? venta : max
}, 0)

mostrar "Ventas: " + texto(ventas)
mostrar "Mayor venta: $" + mayorVenta.aTexto()

variable promedio = ventas.reducir(funcion(acc, v) {
    retornar acc + v
}, 0) / ventas.longitud()

mostrar "Promedio: $" + promedio.aTexto()`,
        output:
          '=== CARRITO DE COMPRAS ===\nItems en carrito: 3\n1. Mouse\n2. Teclado\n3. Monitor\n\n=== INVENTARIO CON PRECIOS ===\nProductos disponibles:\nMouse: $150\nTeclado: $300\nMonitor: $2000\nWebCam: $500\nValor total inventario: $2950\n\n=== ANÁLISIS DE VENTAS ===\nVentas: [1500, 2300, 1800, 2100, 1900]\nMayor venta: $2300\nPromedio: $1920',
        notes: [
          'Ejemplos completos de aplicaciones reales',
          '',
          '🛒 CARRITO DE COMPRAS:',
          '• Lista vacía inicial',
          '• Agregar productos',
          '• Mostrar con índices (numeración)',
          '• Contar items',
          '',
          '📦 INVENTARIO:',
          '• Dos listas paralelas (productos y precios)',
          '• Acceso por índice sincronizado',
          '• Calcular valor total con .reducir()',
          '',
          '📊 ANÁLISIS DE VENTAS:',
          '• Encontrar máximo con .reducir()',
          '• Calcular promedio (suma / longitud)',
          '• Múltiples cálculos sobre mismos datos',
          '',
          'Patrones comunes:',
          '✅ Empezar con lista vacía',
          '✅ Ir agregando elementos',
          '✅ Recorrer para mostrar',
          '✅ Reducir para cálculos',
          '✅ Listas paralelas (índices sincronizados)',
          '',
          '💡 Las listas son fundamentales en toda aplicación',
        ],
      },
      {
        title: 'Referencia Rápida: Todos los Métodos',
        description:
          'Tabla de referencia completa con todos los métodos de listas disponibles en HispanoLang.',
        code: `variable lista = ["a", "b", "c"]

lista[0]                    // Acceso: "a"
lista.longitud()            // 3
lista.primero()             // "a"
lista.ultimo()              // "c"

lista.agregar("d")          // ["a", "b", "c", "d"]
variable ultimo = lista.remover()  // "d", lista = ["a", "b", "c"]
lista.contiene("b")         // verdadero

lista.recorrer(fn)          // Ejecuta fn para cada elemento
lista.mapear(fn)            // Nueva lista transformada
lista.filtrar(fn)           // Nueva lista filtrada
lista.reducir(fn, inicial)  // Valor único combinado

lista.buscar(fn)            // Primer elemento que cumple
lista.algunos(fn)           // ¿Alguno cumple?
lista.todos(fn)             // ¿Todos cumplen?`,
        output: '',
        notes: [
          '📊 MÉTODOS DE LISTAS POR CATEGORÍA:',
          '',
          '🔍 INFORMACIÓN:',
          '⭐⭐⭐ .longitud() - Cantidad de elementos',
          '⭐⭐⭐ .primero() - Primer elemento',
          '⭐⭐⭐ .ultimo() - Último elemento',
          '',
          '✏️ MODIFICACIÓN:',
          '⭐⭐⭐ .agregar(elem) - Agregar al final',
          '⭐⭐⭐ .remover() - Quitar último',
          '⭐⭐⭐ lista[i] = valor - Modificar por índice',
          '',
          '🔎 BÚSQUEDA:',
          '⭐⭐⭐ .contiene(elem) - ¿Existe?',
          '⭐⭐ .buscar(fn) - Primer elemento que cumple',
          '⭐⭐ .algunos(fn) - ¿Alguno cumple?',
          '⭐⭐ .todos(fn) - ¿Todos cumplen?',
          '',
          '🔄 ITERACIÓN:',
          '⭐⭐⭐ .recorrer(fn) - Ejecutar para cada uno',
          '',
          '🎯 FUNCIONAL (Avanzado):',
          '⭐⭐⭐ .mapear(fn) - Transformar cada elemento',
          '⭐⭐⭐ .filtrar(fn) - Filtrar por condición',
          '⭐⭐ .reducir(fn, inicial) - Combinar en uno',
          '',
          '💡 ORDEN DE APRENDIZAJE:',
          '1. Crear, acceder, modificar',
          '2. longitud, primero, ultimo',
          '3. agregar, remover, contiene',
          '4. recorrer',
          '5. buscar, algunos, todos',
          '6. mapear, filtrar',
          '7. reducir (más complejo)',
          '',
          '🔗 ENCADENAR:',
          'lista.filtrar(...).mapear(...).reducir(...)',
        ],
      },
    ],
  },
  objetos: {
    title: '🗂️ Objetos',
    description:
      'Imagina tu perfil de Instagram o Facebook: tienes nombre, usuario, bio, cantidad de seguidores, foto de perfil... Son varios datos relacionados que describen QUIÉN eres. En vez de tener variables separadas (nombre, usuario, bio, seguidores), usas UN objeto que agrupa todo. Los objetos son perfectos para representar entidades con múltiples propiedades usando pares clave-valor, como tu perfil digital.',
    subsections: [
      {
        title: '¿Qué son los Objetos?',
        description:
          'Tu perfil de Instagram tiene campos: nombre, usuario, bio, seguidores, seguidos, verificado. No es una lista de valores aleatorios, cada dato tiene un nombre específico.\n\nLos objetos agrupan datos relacionados con nombres (claves) que los identifican.',
        syntax: 'variable objeto = { clave1: valor1, clave2: valor2 }',
        code: `variable perfil = {
    nombre: "Juan Pérez",
    usuario: "@juanperez",
    bio: "Desarrollador",
    seguidores: 1500,
    seguidos: 300,
    verificado: falso
}

mostrar perfil

variable producto = {
    nombre: "Mouse Gamer",
    precio: 150,
    marca: "Logitech",
    stock: 25
}

mostrar producto

variable vacio = {}
mostrar "Perfil vacío: " + texto(vacio)`,
        output:
          '{ nombre: "Juan Pérez", usuario: "@juanperez", bio: "Desarrollador", seguidores: 1500, seguidos: 300, verificado: falso }\n{ nombre: "Mouse Gamer", precio: 150, marca: "Logitech", stock: 25 }\nPerfil vacío: {}',
        notes: [
          'Los objetos se crean con llaves: {}',
          'Contienen pares clave:valor separados por comas',
          'Sintaxis: { clave1: valor1, clave2: valor2 }',
          'Las claves (nombres) identifican cada valor',
          'Los valores pueden ser cualquier tipo',
          '',
          '¿Cuándo usar objetos?',
          '✅ Representar una entidad (persona, producto, perfil)',
          '✅ Datos con nombres significativos',
          '✅ Propiedades relacionadas agrupadas',
          '',
          'Como tu perfil de red social:',
          '• Nombre: Juan Pérez',
          '• Usuario: @juanperez',
          '• Bio: Desarrollador',
          '• Seguidores: 1500',
          'Cada campo tiene un nombre claro',
        ],
      },
      {
        title: 'Acceder a Propiedades: Leer tu Perfil',
        description:
          'Como cuando abres tu perfil y ves tu nombre, tu bio, tus seguidores... Usas la notación de punto (objeto.propiedad) para acceder a cada campo.',
        code: `variable perfil = {
    nombre: "Ana García",
    usuario: "@anagarcia",
    seguidores: 2500,
    seguidos: 180,
    verificado: verdadero
}

mostrar "Nombre: " + perfil.nombre
mostrar "Usuario: " + perfil.usuario
mostrar "Seguidores: " + texto(perfil.seguidores)
mostrar "Seguidos: " + texto(perfil.seguidos)
mostrar "Verificado: " + texto(perfil.verificado)

variable producto = {
    nombre: "Teclado",
    precio: 300,
    stock: 15
}

mostrar ""
mostrar "Producto: " + producto.nombre
mostrar "Precio: $" + texto(producto.precio)
mostrar "Stock: " + texto(producto.stock) + " unidades"`,
        output:
          'Nombre: Ana García\nUsuario: @anagarcia\nSeguidores: 2500\nSeguidos: 180\nVerificado: verdadero\n\nProducto: Teclado\nPrecio: $300\nStock: 15 unidades',
        notes: [
          'Acceso con punto: objeto.propiedad',
          "perfil.nombre → 'Ana García'",
          'perfil.seguidores → 2500',
          '',
          'Como leer tu perfil:',
          '• perfil.nombre - ver tu nombre',
          '• perfil.usuario - ver tu @usuario',
          '• perfil.seguidores - ver cuántos seguidores',
          '',
          'Diferencia con listas:',
          '• Lista: lista[0], lista[1] (posición numérica)',
          '• Objeto: objeto.nombre, objeto.usuario (nombre significativo)',
          '',
          '💡 Las claves son como los campos de un formulario',
          '💡 Más legible que índices numéricos',
          '💡 Acceder a propiedad inexistente → indefinido',
        ],
      },
      {
        title: 'Modificar Propiedades: Actualizar tu Perfil',
        description:
          'Como cuando editas tu bio, cambias tu foto de perfil, o actualizas tu nombre. Puedes modificar propiedades existentes o agregar nuevas.',
        code: `variable perfil = {
    nombre: "Carlos López",
    usuario: "@carlos",
    seguidores: 500
}

mostrar "Perfil original: " + texto(perfil)

perfil.seguidores = 600
mostrar "Después de ganar seguidores: " + texto(perfil.seguidores)

perfil.nombre = "Carlos López Pérez"
mostrar "Nombre actualizado: " + perfil.nombre

perfil.bio = "Fotógrafo profesional"
mostrar "Bio agregada: " + perfil.bio

perfil.verificado = verdadero
perfil.ciudad = "Buenos Aires"

mostrar ""
mostrar "Perfil completo actualizado:"
mostrar "Nombre: " + perfil.nombre
mostrar "Usuario: " + perfil.usuario
mostrar "Bio: " + perfil.bio
mostrar "Seguidores: " + texto(perfil.seguidores)
mostrar "Verificado: " + texto(perfil.verificado)
mostrar "Ciudad: " + perfil.ciudad`,
        output:
          'Perfil original: { nombre: "Carlos López", usuario: "@carlos", seguidores: 500 }\nDespués de ganar seguidores: 600\nNombre actualizado: Carlos López Pérez\nBio agregada: Fotógrafo profesional\n\nPerfil completo actualizado:\nNombre: Carlos López Pérez\nUsuario: @carlos\nBio: Fotógrafo profesional\nSeguidores: 600\nVerificado: verdadero\nCiudad: Buenos Aires',
        notes: [
          'Modificar existente: objeto.propiedad = nuevoValor',
          'Agregar nueva: objeto.nuevaPropiedad = valor',
          'Los objetos son dinámicos (pueden crecer)',
          '',
          'Como editar tu perfil:',
          "• perfil.bio = 'Nueva bio' - actualizar bio",
          '• perfil.seguidores = 1000 - actualizar contador',
          "• perfil.ciudad = 'Madrid' - agregar campo nuevo",
          '',
          'Modificar vs Agregar:',
          '• Si existe → modifica el valor',
          '• Si no existe → crea la propiedad',
          '',
          'Diferencia con listas:',
          '• Lista: tamaño fijo, índices numéricos',
          '• Objeto: dinámico, propiedades con nombre',
          '',
          '💡 Puedes agregar propiedades en cualquier momento',
          '💡 No necesitas declarar todas desde el inicio',
        ],
      },
      {
        title: 'Objetos vs Listas: ¿Cuándo Usar Cada Uno?',
        description:
          '¿Lista de seguidores o perfil de usuario? Entender cuándo usar listas y cuándo usar objetos es fundamental.',
        code: `mostrar "=== LISTA: COLECCIÓN ORDENADA ==="
variable seguidores = ["@ana", "@pedro", "@luis", "@maria"]
mostrar "Seguidores: " + texto(seguidores)
mostrar "Primero: " + seguidores[0]
mostrar "Segundo: " + seguidores[1]
mostrar "Total: " + texto(seguidores.longitud())

mostrar ""
mostrar "=== OBJETO: DATOS ESTRUCTURADOS ==="
variable perfil = {
    nombre: "Juan Pérez",
    usuario: "@juan",
    seguidores: 1500,
    seguidos: 300,
    verificado: falso
}

mostrar "Nombre: " + perfil.nombre
mostrar "Usuario: " + perfil.usuario
mostrar "Seguidores: " + texto(perfil.seguidores)

mostrar ""
mostrar "=== COMBINADOS ==="
variable perfilCompleto = {
    nombre: "Ana García",
    usuario: "@ana",
    posts: ["Foto1", "Foto2", "Foto3"],
    seguidores: 2500
}

mostrar "Usuario: " + perfilCompleto.usuario
mostrar "Posts: " + texto(perfilCompleto.posts)
mostrar "Primer post: " + perfilCompleto.posts[0]`,
        output:
          '=== LISTA: COLECCIÓN ORDENADA ===\nSeguidores: ["@ana", "@pedro", "@luis", "@maria"]\nPrimero: @ana\nSegundo: @pedro\nTotal: 4\n\n=== OBJETO: DATOS ESTRUCTURADOS ===\nNombre: Juan Pérez\nUsuario: @juan\nSeguidores: 1500\n\n=== COMBINADOS ===\nUsuario: @ana\nPosts: ["Foto1", "Foto2", "Foto3"]\nPrimer post: Foto1',
        notes: [
          'USA LISTAS cuando:',
          '✅ Colección de elementos similares',
          '✅ El orden importa',
          '✅ Acceso por posición (índice)',
          '✅ Ejemplos: lista de seguidores, posts, comentarios',
          '',
          'USA OBJETOS cuando:',
          '✅ Datos con nombres específicos',
          '✅ Representar una entidad',
          '✅ Acceso por nombre de propiedad',
          '✅ Ejemplos: perfil de usuario, producto, configuración',
          '',
          'Comparación visual:',
          '',
          'Lista de seguidores:',
          "['@ana', '@pedro', '@luis']",
          'Acceso: seguidores[0], seguidores[1]',
          '',
          'Perfil de usuario:',
          "{ nombre: 'Ana', usuario: '@ana', seguidores: 1500 }",
          'Acceso: perfil.nombre, perfil.usuario',
          '',
          '💡 Puedes combinarlos: objeto con lista como propiedad',
          '💡 Lista de objetos: agenda de contactos, inventario',
        ],
      },
      {
        title: 'Objetos Anidados: Perfil con Dirección',
        description:
          "Como cuando tu perfil tiene una sección 'Dirección' con calle, ciudad, país... Un objeto puede contener otros objetos, creando estructura jerárquica.",
        code: `variable perfil = {
    nombre: "María González",
    usuario: "@maria",
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Madrid",
        pais: "España",
        codigoPostal: "28001"
    },
    verificado: verdadero
}

mostrar "Nombre: " + perfil.nombre
mostrar "Ciudad: " + perfil.direccion.ciudad
mostrar "País: " + perfil.direccion.pais
mostrar "Código postal: " + perfil.direccion.codigoPostal

mostrar ""
mostrar "=== PRODUCTO CON ESPECIFICACIONES ==="
variable producto = {
    nombre: "Laptop",
    precio: 50000,
    especificaciones: {
        procesador: "Intel i7",
        ram: "16GB",
        almacenamiento: "512GB SSD",
        pantalla: "15.6 pulgadas"
    },
    stock: 10
}

mostrar "Producto: " + producto.nombre
mostrar "Precio: $" + texto(producto.precio)
mostrar "Procesador: " + producto.especificaciones.procesador
mostrar "RAM: " + producto.especificaciones.ram
mostrar "Pantalla: " + producto.especificaciones.pantalla`,
        output:
          'Nombre: María González\nCiudad: Madrid\nPaís: España\nCódigo postal: 28001\n\n=== PRODUCTO CON ESPECIFICACIONES ===\nProducto: Laptop\nPrecio: $50000\nProcesador: Intel i7\nRAM: 16GB\nPantalla: 15.6 pulgadas',
        notes: [
          'Objetos anidados: objetos dentro de objetos',
          'Acceso multinivel: objeto.sub.propiedad',
          "perfil.direccion.ciudad → 'Madrid'",
          '',
          'Como secciones en tu perfil:',
          '• Perfil principal: nombre, usuario',
          '• Dirección: calle, ciudad, país',
          '• Contacto: email, teléfono',
          '',
          'Sintaxis:',
          'variable perfil = {',
          "    nombre: 'Ana',",
          '    direccion: {',
          "        ciudad: 'Madrid',",
          "        pais: 'España'",
          '    }',
          '}',
          '',
          'Acceso:',
          "• perfil.nombre → 'Ana'",
          "• perfil.direccion.ciudad → 'Madrid'",
          '',
          'Casos de uso:',
          '✅ Dirección (calle, ciudad, país)',
          '✅ Especificaciones técnicas',
          '✅ Configuración anidada',
          '✅ Datos jerárquicos',
          '',
          '💡 Puedes anidar cuantos niveles necesites',
        ],
      },
      {
        title: 'Lista de Objetos: Red Social Completa',
        description:
          'El patrón más común: una lista de objetos. Como tu feed de Instagram: cada post es un objeto con autor, imagen, likes, comentarios...',
        code: `variable usuarios = [
    {
        nombre: "Ana García",
        usuario: "@ana",
        seguidores: 2500,
        verificado: verdadero
    },
    {
        nombre: "Pedro López",
        usuario: "@pedro",
        seguidores: 800,
        verificado: falso
    },
    {
        nombre: "Luis Martínez",
        usuario: "@luis",
        seguidores: 3200,
        verificado: verdadero
    }
]

mostrar "=== TODOS LOS USUARIOS ==="
usuarios.recorrer(funcion(usuario, i) {
    mostrar (i + 1).aTexto() + ". " + usuario.nombre + " (" + usuario.usuario + ")"
    mostrar "   Seguidores: " + texto(usuario.seguidores)
})

mostrar ""
mostrar "=== VERIFICADOS ==="
variable verificados = usuarios.filtrar(funcion(u) {
    retornar u.verificado
})
mostrar "Usuarios verificados: " + texto(verificados.longitud())

mostrar ""
mostrar "=== INFLUENCERS (>1000) ==="
variable influencers = usuarios.filtrar(funcion(u) {
    retornar u.seguidores > 1000
})

influencers.recorrer(funcion(inf) {
    mostrar inf.nombre + ": " + texto(inf.seguidores) + " seguidores"
})`,
        output:
          '=== TODOS LOS USUARIOS ===\n1. Ana García (@ana)\n   Seguidores: 2500\n2. Pedro López (@pedro)\n   Seguidores: 800\n3. Luis Martínez (@luis)\n   Seguidores: 3200\n\n=== VERIFICADOS ===\nUsuarios verificados: 2\n\n=== INFLUENCERS (>1000) ===\nAna García: 2500 seguidores\nLuis Martínez: 3200 seguidores',
        notes: [
          'Lista de objetos: patrón fundamental',
          'Cada elemento es un objeto completo',
          'Sintaxis: [ {obj1}, {obj2}, {obj3} ]',
          '',
          'Acceso:',
          '• usuarios[0] → primer objeto completo',
          '• usuarios[0].nombre → propiedad del primer objeto',
          '• usuarios[1].seguidores → seguidores del segundo',
          '',
          'Métodos de lista funcionan:',
          '• .recorrer() - procesar cada perfil',
          '• .filtrar() - usuarios verificados, influencers',
          '• .mapear() - extraer solo nombres',
          '• .buscar() - encontrar por username',
          '',
          'Como tu feed de Instagram:',
          '• Cada post es un objeto',
          '• Feed completo es lista de posts',
          '• Filtras posts de seguidos',
          '• Mapeas para extraer imágenes',
          '',
          'Casos de uso:',
          '✅ Lista de usuarios',
          '✅ Inventario de productos',
          '✅ Agenda de contactos',
          '✅ Posts de blog',
          '✅ Transacciones bancarias',
          '',
          '💡 Este patrón está en TODA aplicación web',
        ],
      },
      {
        title: 'Funciones con Objetos: Pasar Perfiles',
        description:
          'Como cuando compartes un perfil o envías tus datos a una función. Los objetos se pasan completos como argumentos.',
        code: `funcion mostrarPerfil(usuario) {
    mostrar "=== PERFIL ==="
    mostrar "Nombre: " + usuario.nombre
    mostrar "Usuario: " + usuario.usuario
    mostrar "Seguidores: " + texto(usuario.seguidores)
    mostrar "Verificado: " + (usuario.verificado ? "✓" : "✗")
}

variable ana = {
    nombre: "Ana García",
    usuario: "@ana",
    seguidores: 2500,
    verificado: verdadero
}

mostrarPerfil(ana)

mostrar ""
funcion agregarSeguidores(usuario, cantidad) {
    usuario.seguidores = usuario.seguidores + cantidad
    mostrar usuario.nombre + " ahora tiene " + texto(usuario.seguidores) + " seguidores"
}

agregarSeguidores(ana, 100)
agregarSeguidores(ana, 50)

mostrar ""
funcion crearPerfil(nombre, usuario) {
    retornar {
        nombre: nombre,
        usuario: usuario,
        seguidores: 0,
        seguidos: 0,
        verificado: falso
    }
}

variable nuevoPerfil = crearPerfil("Pedro López", "@pedro")
mostrarPerfil(nuevoPerfil)`,
        output:
          '=== PERFIL ===\nNombre: Ana García\nUsuario: @ana\nSeguidores: 2500\nVerificado: ✓\n\nAna García ahora tiene 2600 seguidores\nAna García ahora tiene 2650 seguidores\n\n=== PERFIL ===\nNombre: Pedro López\nUsuario: @pedro\nSeguidores: 0\nVerificado: ✗',
        notes: [
          'Pasar objetos a funciones:',
          'funcion procesarPerfil(usuario) { ... }',
          '',
          'Modificar propiedades:',
          '• Los objetos se pasan por referencia',
          '• Modificaciones afectan el original',
          '• usuario.seguidores += 100 → modifica original',
          '',
          'Retornar objetos:',
          'funcion crearPerfil(...) {',
          '    retornar { nombre: ..., usuario: ... }',
          '}',
          '',
          'Casos de uso:',
          '✅ Validar perfil completo',
          '✅ Actualizar múltiples propiedades',
          '✅ Crear perfiles nuevos',
          '✅ Formatear para mostrar',
          '✅ Calcular estadísticas',
          '',
          'Patrones comunes:',
          '1. Función muestra: recibe objeto, muestra bonito',
          '2. Función modifica: recibe objeto, actualiza props',
          '3. Función crea: retorna nuevo objeto',
          '',
          '💡 Objetos permiten pasar muchos datos como uno solo',
          '💡 Más limpio que 10 parámetros separados',
        ],
      },
      {
        title: 'Transformar Lista de Objetos: Operaciones Comunes',
        description:
          'Combina objetos con métodos de listas para operaciones poderosas: extraer nombres, calcular totales, filtrar por criterio...',
        code: `variable productos = [
    { nombre: "Mouse", precio: 150, stock: 25 },
    { nombre: "Teclado", precio: 300, stock: 15 },
    { nombre: "Monitor", precio: 2000, stock: 8 },
    { nombre: "WebCam", precio: 500, stock: 12 }
]

mostrar "=== NOMBRES DE PRODUCTOS ==="
variable nombres = productos.mapear(funcion(p) {
    retornar p.nombre
})
mostrar nombres.unir(", ")

mostrar ""
mostrar "=== PRODUCTOS DISPONIBLES (stock > 10) ==="
variable disponibles = productos.filtrar(funcion(p) {
    retornar p.stock > 10
})

disponibles.recorrer(funcion(p) {
    mostrar p.nombre + ": " + texto(p.stock) + " unidades"
})

mostrar ""
mostrar "=== VALOR TOTAL INVENTARIO ==="
variable valorTotal = productos.reducir(funcion(acc, p) {
    retornar acc + (p.precio * p.stock)
}, 0)

mostrar "Valor total: $" + texto(valorTotal)

mostrar ""
mostrar "=== APLICAR DESCUENTO 10% ==="
variable conDescuento = productos.mapear(funcion(p) {
    retornar {
        nombre: p.nombre,
        precioOriginal: p.precio,
        precioFinal: p.precio * 0.9,
        stock: p.stock
    }
})

conDescuento.recorrer(funcion(p) {
    mostrar p.nombre + ": $" + texto(p.precioOriginal) + " → $" + texto(p.precioFinal)
})`,
        output:
          '=== NOMBRES DE PRODUCTOS ===\nMouse, Teclado, Monitor, WebCam\n\n=== PRODUCTOS DISPONIBLES (stock > 10) ===\nMouse: 25 unidades\nTeclado: 15 unidades\nWebCam: 12 unidades\n\n=== VALOR TOTAL INVENTARIO ===\nValor total: $24950\n\n=== APLICAR DESCUENTO 10% ===\nMouse: $150 → $135\nTeclado: $300 → $270\nMonitor: $2000 → $1800\nWebCam: $500 → $450',
        notes: [
          'Operaciones comunes con lista de objetos:',
          '',
          '🔍 EXTRAER PROPIEDAD (.mapear):',
          'productos.mapear(p => p.nombre)',
          '→ lista de solo nombres',
          '',
          '🎯 FILTRAR POR CRITERIO (.filtrar):',
          'productos.filtrar(p => p.stock > 10)',
          '→ solo productos con stock suficiente',
          '',
          '📊 CALCULAR TOTAL (.reducir):',
          'productos.reducir((acc, p) => acc + p.precio, 0)',
          '→ suma de todos los precios',
          '',
          '🔄 TRANSFORMAR OBJETOS (.mapear):',
          'productos.mapear(p => { ...p, precioConIVA: p.precio * 1.21 })',
          '→ nuevos objetos con propiedad extra',
          '',
          'Casos de uso:',
          '✅ Extraer emails de usuarios',
          '✅ Filtrar productos en stock',
          '✅ Calcular total de carrito',
          '✅ Aplicar descuentos masivos',
          '✅ Generar reportes',
          '',
          '💡 Combina filtrar → mapear → reducir',
          '💡 Pipeline de datos poderoso',
        ],
      },
      {
        title: 'Casos de Uso Completos',
        description:
          'Ejemplos reales completos: sistema de usuarios, inventario de productos, y red social básica.',
        code: `mostrar "=== SISTEMA DE USUARIOS ==="

variable usuarios = [
    { nombre: "Ana", edad: 25, rol: "admin", activo: verdadero },
    { nombre: "Pedro", edad: 30, rol: "usuario", activo: verdadero },
    { nombre: "Luis", edad: 22, rol: "usuario", activo: falso },
    { nombre: "María", edad: 28, rol: "moderador", activo: verdadero }
]

variable activos = usuarios.filtrar(funcion(u) { retornar u.activo })
mostrar "Usuarios activos: " + texto(activos.longitud())

variable admins = usuarios.filtrar(funcion(u) { retornar u.rol == "admin" })
mostrar "Administradores: " + texto(admins.longitud())

mostrar ""
mostrar "=== INVENTARIO DE PRODUCTOS ==="

variable inventario = [
    { id: 1, nombre: "Mouse", precio: 150, stock: 25, categoria: "perifericos" },
    { id: 2, nombre: "Teclado", precio: 300, stock: 15, categoria: "perifericos" },
    { id: 3, nombre: "Monitor", precio: 2000, stock: 0, categoria: "pantallas" }
]

variable sinStock = inventario.filtrar(funcion(p) { retornar p.stock == 0 })
mostrar "Productos sin stock: " + texto(sinStock.longitud())

variable perifericos = inventario.filtrar(funcion(p) { retornar p.categoria == "perifericos" })
mostrar "Periféricos disponibles: " + texto(perifericos.longitud())

variable valorInventario = inventario.reducir(funcion(acc, p) {
    retornar acc + (p.precio * p.stock)
}, 0)
mostrar "Valor total: $" + texto(valorInventario)

mostrar ""
mostrar "=== RED SOCIAL ==="

variable posts = [
    { autor: "@ana", texto: "¡Hola mundo!", likes: 150, comentarios: 12 },
    { autor: "@pedro", texto: "Nuevo proyecto", likes: 85, comentarios: 5 },
    { autor: "@ana", texto: "Tutorial completo", likes: 320, comentarios: 45 }
]

variable postsAna = posts.filtrar(funcion(p) { retornar p.autor == "@ana" })
mostrar "Posts de @ana: " + texto(postsAna.longitud())

variable totalLikes = posts.reducir(funcion(acc, p) { retornar acc + p.likes }, 0)
mostrar "Total likes: " + texto(totalLikes)

variable populares = posts.filtrar(funcion(p) { retornar p.likes > 100 })
mostrar "Posts populares: " + texto(populares.longitud())`,
        output:
          '=== SISTEMA DE USUARIOS ===\nUsuarios activos: 3\nAdministradores: 1\n\n=== INVENTARIO DE PRODUCTOS ===\nProductos sin stock: 1\nPeriféricos disponibles: 2\nValor total: $8250\n\n=== RED SOCIAL ===\nPosts de @ana: 2\nTotal likes: 555\nPosts populares: 2',
        notes: [
          'Ejemplos completos de aplicaciones reales:',
          '',
          '👥 SISTEMA DE USUARIOS:',
          '• Lista de usuarios con roles',
          '• Filtrar por estado (activo/inactivo)',
          '• Filtrar por rol (admin, usuario, moderador)',
          '• Gestión de permisos',
          '',
          '📦 INVENTARIO:',
          '• Lista de productos con propiedades',
          '• Filtrar sin stock',
          '• Filtrar por categoría',
          '• Calcular valor total',
          '',
          '📱 RED SOCIAL:',
          '• Lista de posts con estadísticas',
          '• Filtrar por autor',
          '• Calcular totales (likes, comentarios)',
          '• Identificar contenido popular',
          '',
          'Patrones aplicados:',
          '✅ Lista de objetos',
          '✅ Filtrar por propiedades',
          '✅ Reducir para totales',
          '✅ Contar con .longitud()',
          '',
          '💡 Estos patrones están en Facebook, Instagram, Amazon...',
          '💡 Base de toda aplicación web moderna',
        ],
      },
      {
        title: 'Referencia Rápida: Objetos',
        description:
          'Tabla de referencia completa con todo lo que necesitas saber sobre objetos en HispanoLang.',
        code: `variable perfil = {
    nombre: "Ana",
    edad: 25
}

perfil.nombre                    // Acceso: "Ana"
perfil.edad = 26                 // Modificar
perfil.ciudad = "Madrid"         // Agregar

variable empresa = {
    nombre: "TechCorp",
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    }
}

empresa.direccion.ciudad         // Anidado: "Madrid"

variable usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 30 }
]

usuarios[0].nombre               // "Ana"
usuarios.filtrar(u => u.edad > 25)
usuarios.mapear(u => u.nombre)`,
        output: '',
        notes: [
          '📊 OPERACIONES CON OBJETOS:',
          '',
          '🔨 CREAR:',
          '• Sintaxis: { clave: valor, clave2: valor2 }',
          '• Vacío: {}',
          '',
          '🔍 ACCEDER:',
          '• Leer: objeto.propiedad',
          '• Anidado: objeto.sub.propiedad',
          '',
          '✏️ MODIFICAR:',
          '• Cambiar: objeto.propiedad = nuevoValor',
          '• Agregar: objeto.nuevaProp = valor',
          '',
          '📋 LISTAS DE OBJETOS:',
          '• Crear: [ {obj1}, {obj2} ]',
          '• Acceso: lista[0].propiedad',
          '• Filtrar: lista.filtrar(x => x.prop > 10)',
          '• Mapear: lista.mapear(x => x.nombre)',
          '• Reducir: lista.reducir((acc, x) => acc + x.precio, 0)',
          '',
          '🔄 CON FUNCIONES:',
          '• Pasar: funcion(objeto) { ... }',
          '• Retornar: funcion() { retornar {...} }',
          '',
          '💡 CUÁNDO USAR:',
          '✅ Objetos: datos con nombres (perfil, producto)',
          '✅ Listas: colección ordenada (seguidores, posts)',
          '✅ Lista de objetos: múltiples entidades (usuarios, inventario)',
          '',
          '🎯 PATRONES COMUNES:',
          '• Perfil de usuario',
          '• Producto en inventario',
          '• Post en red social',
          '• Contacto en agenda',
          '• Transacción bancaria',
        ],
      },
    ],
  },
  buclesAvanzados: {
    title: '🔁 Bucles Avanzados',
    description:
      'HispanoLang incluye estructuras de bucle adicionales: hacer/mientras (ejecuta al menos una vez) y para cada (itera sobre elementos).',
    subsections: [
      {
        title: 'Bucle hacer/mientras',
        description:
          'Ejecuta el bloque al menos una vez, luego repite mientras la condición sea verdadera.',
        syntax: 'hacer { ... } mientras (condicion)',
        code: `variable contador = 1

hacer {
    mostrar contador
    contador = contador + 1
} mientras (contador <= 5)

// Diferencia con mientras:
variable x = 10
mientras (x < 5) {
    mostrar x  // Nunca se ejecuta (condición falsa desde inicio)
}

variable y = 10
hacer {
    mostrar y  // Se ejecuta una vez, aunque y >= 5
} mientras (y < 5)`,
        notes: [
          'El bloque se ejecuta ANTES de evaluar la condición',
          'Garantiza al menos una ejecución',
          'La condición se evalúa al FINAL de cada iteración',
          'Útil cuando necesitas ejecutar el código al menos una vez',
        ],
      },
      {
        title: 'Bucle para cada',
        description: 'Itera sobre cada elemento de un arreglo de forma simple.',
        syntax: 'para cada variable en arreglo { ... }',
        code: `variable frutas = ["manzana", "banana", "naranja"]

para cada fruta en frutas {
    mostrar fruta
}

// Sumar todos los números
variable numeros = [1, 2, 3, 4, 5]
variable suma = 0

para cada num en numeros {
    suma = suma + num
}
mostrar suma  // 15

// Con objetos
variable personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 }
]

para cada persona en personas {
    mostrar \`\${persona.nombre} tiene \${persona.edad} años\`
}`,
        notes: [
          'No necesitas manejar índices manualmente',
          'Más limpio que un bucle para tradicional',
          'La variable del elemento es local al bucle',
          'Funciona con cualquier tipo de arreglo',
        ],
      },
    ],
  },
  manejoErrores: {
    title: '🛡️ Manejo de Errores',
    description:
      'La estructura intentar-capturar permite manejar errores de forma controlada sin que el programa se detenga abruptamente.',
    subsections: [
      {
        title: 'Estructura intentar-capturar',
        description: 'Ejecuta código que puede fallar y captura el error si ocurre.',
        syntax: 'intentar { /* código */ } capturar (error) { /* manejar error */ }',
        code: `intentar {
    variable x = 10 / 0
    mostrar "Esto no se ejecuta"
} capturar (error) {
    mostrar "Error: " + error
}

mostrar "El programa continúa"`,
        notes: [
          "El bloque 'intentar' contiene código que podría generar error",
          "Si ocurre un error, se ejecuta el bloque 'capturar'",
          "El parámetro 'error' contiene información del error",
          "Si no hay error, el bloque 'capturar' se salta",
          'El programa continúa después del bloque intentar-capturar',
        ],
      },
      {
        title: 'Errores Comunes',
        description: 'Ejemplos de situaciones que generan errores y cómo manejarlos.',
        code: `// División entre cero
intentar {
    variable resultado = 10 / 0
} capturar (error) {
    mostrar "No se puede dividir entre cero"
}

// Acceso a índice inválido
variable lista = [1, 2, 3]
intentar {
    mostrar lista[10]
} capturar (error) {
    mostrar "Índice fuera de rango"
}`,
        notes: [
          'División entre cero genera error',
          'Acceder a índices fuera de rango en listas',
          'Acceder a propiedades de valores nulos o indefinidos',
          'Llamar funciones con parámetros incorrectos',
          'Usa intentar-capturar para operaciones que pueden fallar',
        ],
      },
    ],
  },
  conversionTipos: {
    title: '🔄 Conversión de Tipos',
    description:
      "Cuando llenas un formulario web, todo lo que escribes es texto: tu edad '25', tu teléfono '123456789', incluso si marcas una casilla 'verdadero' o 'falso'. Pero para hacer cálculos, validaciones o comparaciones, necesitas convertir ese texto a números o booleanos. Las funciones de conversión son como traductores que transforman datos de un tipo a otro sin cambiar su valor.",
    subsections: [
      {
        title: '¿Por Qué Convertir Tipos?',
        description:
          "Imagina un formulario de registro en una página web. Tienes un campo para 'Edad'. Escribes '25'. Para la computadora, eso es texto: la letra '2' seguida de la letra '5', no el número veinticinco.\n\nSi intentas hacer cálculos o comparaciones con ese texto, obtienes resultados incorrectos. Necesitas convertir el texto '25' al número 25.",
        code: `variable edadTexto = "25"
mostrar "Tipo: " + tipo(edadTexto)
mostrar "Valor: " + edadTexto

variable edadNumero = entero(edadTexto)
mostrar "Tipo: " + tipo(edadNumero)
mostrar "Valor: " + edadNumero

si edadNumero >= 18 {
    mostrar "Mayor de edad"
} sino {
    mostrar "Menor de edad"
}

variable precioTexto = "99.99"
variable precioNumero = decimal(precioTexto)
variable conIVA = precioNumero * 1.21
mostrar "Precio con IVA: $" + conIVA`,
        output:
          'Tipo: texto\nValor: 25\nTipo: numero\nValor: 25\nMayor de edad\nPrecio con IVA: $120.9879',
        notes: [
          'Los campos de formularios web siempre retornan TEXTO',
          "Aunque escribas '25', para el programa es texto '25'",
          'Para hacer cálculos matemáticos necesitas convertir a número',
          'Para comparaciones numéricas (>, <, >=, <=) necesitas números',
          '',
          'Problema común sin conversión:',
          "• '25' + '5' = '255' (concatenación de texto)",
          '• 25 + 5 = 30 (suma de números)',
          '',
          'La función tipo() te dice qué tipo de dato tienes',
        ],
      },
      {
        title: 'Texto a Número Entero: entero()',
        description:
          'La función entero() convierte texto a número entero. Útil para edades, cantidades, años, días, y cualquier número sin decimales que viene de un formulario.',
        code: `variable edadTexto = "25"
variable edadNumero = entero(edadTexto)
mostrar "Edad: " + edadNumero + " años"

variable cantidadTexto = "10"
variable cantidad = entero(cantidadTexto)
variable total = cantidad * 150
mostrar "Total: $" + total

variable añoTexto = "2024"
variable año = entero(añoTexto)
variable diferencia = 2026 - año
mostrar "Han pasado " + diferencia + " años"

variable decimalTexto = "3.7"
variable sinDecimales = entero(decimalTexto)
mostrar "3.7 truncado: " + sinDecimales

variable numeroYaEntero = 42
variable sigueEntero = entero(numeroYaEntero)
mostrar "42 sigue siendo: " + sigueEntero

variable booleanoTrue = entero(verdadero)
mostrar "verdadero como entero: " + booleanoTrue

variable booleanoFalse = entero(falso)
mostrar "falso como entero: " + booleanoFalse`,
        output:
          'Edad: 25 años\nTotal: $1500\nHan pasado 2 años\n3.7 truncado: 3\n42 sigue siendo: 42\nverdadero como entero: 1\nfalso como entero: 0',
        notes: [
          'entero(texto): Convierte texto a número entero',
          "entero('25') → 25",
          "entero('3.7') → 3 (trunca decimales, no redondea)",
          'entero(3.9) → 3 (elimina decimales)',
          '',
          'Conversiones especiales:',
          '• entero(verdadero) → 1',
          '• entero(falso) → 0',
          '• entero(42) → 42 (ya es número, no cambia)',
          '',
          'Casos de uso:',
          "✅ Campo 'Edad' en formulario",
          "✅ Campo 'Cantidad' en carrito de compras",
          "✅ Campo 'Año' en fechas",
          '✅ Cualquier número sin decimales del usuario',
          '',
          '⚠️ Si el texto no es un número válido, puede dar error',
        ],
      },
      {
        title: 'Texto a Número Decimal: decimal()',
        description:
          'La función decimal() convierte texto a número con decimales. Esencial para precios, medidas, porcentajes, y cualquier valor que necesite precisión decimal.',
        code: `variable precioTexto = "99.99"
variable precio = decimal(precioTexto)
mostrar "Precio: $" + precio

variable alturaTexto = "1.75"
variable altura = decimal(alturaTexto)
variable peso = 70
variable imc = peso / (altura * altura)
mostrar "IMC: " + imc

variable porcentajeTexto = "15.5"
variable porcentaje = decimal(porcentajeTexto)
variable descuento = 1000 * (porcentaje / 100)
mostrar "Descuento: $" + descuento

variable temperaturaTexto = "36.5"
variable temperatura = decimal(temperaturaTexto)
si temperatura > 37.0 {
    mostrar "Fiebre"
} sino {
    mostrar "Temperatura normal"
}

variable enteroTexto = "42"
variable comoDeci = decimal(enteroTexto)
mostrar "42 como decimal: " + comoDeci

variable booleanoTrue = decimal(verdadero)
mostrar "verdadero como decimal: " + booleanoTrue`,
        output:
          'Precio: $99.99\nIMC: 22.857\nDescuento: $155\nTemperatura normal\n42 como decimal: 42.0\nverdadero como decimal: 1.0',
        notes: [
          'decimal(texto): Convierte texto a número con decimales',
          "decimal('99.99') → 99.99",
          "decimal('42') → 42.0 (agrega .0)",
          '',
          'Conversiones especiales:',
          '• decimal(verdadero) → 1.0',
          '• decimal(falso) → 0.0',
          '• decimal(99.99) → 99.99 (ya es decimal, no cambia)',
          '',
          'Casos de uso:',
          "✅ Campo 'Precio' en e-commerce",
          "✅ Campo 'Altura' o 'Peso' en calculadoras",
          "✅ Campo 'Porcentaje' en descuentos",
          "✅ Campo 'Temperatura' en sensores",
          '✅ Cualquier medida con decimales',
          '',
          '💡 Usa decimal() cuando necesites precisión',
          '💡 Usa entero() cuando los decimales no importen',
        ],
      },
      {
        title: 'Número a Texto: texto()',
        description:
          'La función texto() convierte cualquier valor a texto. Fundamental para mostrar resultados, concatenar mensajes, y presentar información al usuario en formularios o pantallas.',
        code: `variable edad = 25
variable mensaje = "Tienes " + texto(edad) + " años"
mostrar mensaje

variable precio = 99.99
variable etiqueta = "$" + texto(precio)
mostrar etiqueta

variable cantidad = 10
variable precio = 150
variable total = cantidad * precio
mostrar "Total: $" + texto(total)

variable pi = 3.14159
variable textoPI = texto(pi)
mostrar "PI como texto: " + textoPI
mostrar "Tipo: " + tipo(textoPI)

variable booleano = verdadero
variable textoBooleano = texto(booleano)
mostrar "Booleano como texto: " + textoBooleano

variable resultado = 42
mostrar "El resultado es: " + texto(resultado)`,
        output:
          'Tienes 25 años\n$99.99\nTotal: $1500\nPI como texto: 3.14159\nTipo: texto\nBooleano como texto: verdadero\nEl resultado es: 42',
        notes: [
          'texto(valor): Convierte cualquier valor a texto',
          "texto(25) → '25'",
          "texto(99.99) → '99.99'",
          "texto(verdadero) → 'verdadero'",
          '',
          '¿Por qué convertir a texto?',
          '• Para concatenar con otros textos',
          '• Para mostrar en pantalla o formularios',
          '• Para formatear salidas',
          '• Para crear mensajes dinámicos',
          '',
          'Casos de uso:',
          '✅ Mostrar resultados de cálculos',
          '✅ Crear mensajes personalizados',
          '✅ Formatear precios y cantidades',
          '✅ Construir etiquetas dinámicas',
          '✅ Preparar datos para mostrar en UI',
          '',
          '💡 Muchas veces HispanoLang convierte automáticamente',
          '💡 Pero texto() hace la conversión explícita y clara',
        ],
      },
      {
        title: 'Conversión a Booleano: booleano()',
        description:
          'La función booleano() convierte valores a verdadero o falso. Útil para checkboxes, switches, validaciones, y decisiones basadas en datos del usuario.',
        code: `variable numero1 = booleano(1)
mostrar "booleano(1): " + texto(numero1)

variable numero0 = booleano(0)
mostrar "booleano(0): " + texto(numero0)

variable numeroPositivo = booleano(100)
mostrar "booleano(100): " + texto(numeroPositivo)

variable numeroNegativo = booleano(-5)
mostrar "booleano(-5): " + texto(numeroNegativo)

variable textoLleno = booleano("hola")
mostrar "booleano('hola'): " + texto(textoLleno)

variable textoVacio = booleano("")
mostrar "booleano(''): " + texto(textoVacio)

variable acepta = "si"
variable aceptaBooleano = booleano(acepta)
si aceptaBooleano {
    mostrar "Términos aceptados"
}

variable cantidad = "0"
variable cantidadNum = entero(cantidad)
variable hayItems = booleano(cantidadNum)
si !hayItems {
    mostrar "Carrito vacío"
}`,
        output:
          "booleano(1): verdadero\nbooleano(0): falso\nbooleano(100): verdadero\nbooleano(-5): verdadero\nbooleano('hola'): verdadero\nbooleano(''): falso\nTérminos aceptados\nCarrito vacío",
        notes: [
          'booleano(valor): Convierte valor a verdadero o falso',
          '',
          'Valores FALSOS (falsy):',
          '• booleano(0) → falso',
          "• booleano('') → falso (texto vacío)",
          '• booleano(falso) → falso',
          '',
          'Valores VERDADEROS (truthy):',
          '• booleano(1) → verdadero',
          '• booleano(100) → verdadero (cualquier número != 0)',
          '• booleano(-5) → verdadero (incluso negativos)',
          "• booleano('hola') → verdadero (cualquier texto no vacío)",
          '• booleano(verdadero) → verdadero',
          '',
          'Casos de uso:',
          "✅ Checkbox en formularios ('true'/'false' → booleano)",
          "✅ Validar si hay contenido (texto != '')",
          '✅ Validar si hay cantidad (número != 0)',
          '✅ Convertir respuestas de usuario a booleanos',
          '',
          "💡 Regla simple: 0 y '' son falso, todo lo demás es verdadero",
        ],
      },
      {
        title: 'Verificar Tipo: tipo()',
        description:
          'La función tipo() te dice qué tipo de dato tienes. Súper útil para debugging, validaciones, y entender qué recibiste de un formulario o API.',
        code: `variable edad = 25
mostrar tipo(edad)

variable nombre = "Ana"
mostrar tipo(nombre)

variable activo = verdadero
mostrar tipo(activo)

variable precio = 99.99
mostrar tipo(precio)

variable edadTexto = "25"
mostrar "Antes: " + tipo(edadTexto)
variable edadNumero = entero(edadTexto)
mostrar "Después: " + tipo(edadNumero)

funcion validarEdad(valor) {
    mostrar "Recibí tipo: " + tipo(valor)
    
    si tipo(valor) == "texto" {
        variable edadNum = entero(valor)
        mostrar "Convertido a número: " + edadNum
        retornar edadNum
    } sino {
        mostrar "Ya es número: " + valor
        retornar valor
    }
}

variable resultado1 = validarEdad("30")
variable resultado2 = validarEdad(25)`,
        output:
          'numero\ntexto\nbooleano\nnumero\nAntes: texto\nDespués: numero\nRecibí tipo: texto\nConvertido a número: 30\nRecibí tipo: numero\nYa es número: 25',
        notes: [
          'tipo(valor): Retorna el tipo como texto',
          '',
          'Tipos básicos:',
          "• tipo(25) → 'numero'",
          "• tipo('hola') → 'texto'",
          "• tipo(verdadero) → 'booleano'",
          '',
          'Casos de uso:',
          '✅ Debugging: saber qué tienes',
          '✅ Validaciones: verificar tipo correcto',
          '✅ Conversión inteligente: convertir solo si es necesario',
          '✅ Mensajes de error claros',
          '',
          'Patrón común de validación:',
          '```',
          "si tipo(valor) == 'texto' {",
          '    valor = entero(valor)',
          '}',
          '```',
          '',
          '💡 Combina tipo() con conversiones para código robusto',
          '💡 Útil cuando no sabes qué tipo recibirás',
        ],
      },
      {
        title: 'Conversiones en Formularios Reales',
        description:
          'Ejemplo completo de cómo usar conversiones en un formulario de registro típico: validar datos, convertir tipos, y procesar información del usuario.',
        code: `mostrar "=== FORMULARIO DE REGISTRO ==="

variable nombreTexto = "Ana García"
variable edadTexto = "25"
variable alturaTexto = "1.65"
variable pesoTexto = "60"
variable aceptaTerminos = "si"

mostrar "Datos recibidos (todo como texto):"
mostrar "Nombre: " + nombreTexto + " (" + tipo(nombreTexto) + ")"
mostrar "Edad: " + edadTexto + " (" + tipo(edadTexto) + ")"
mostrar "Altura: " + alturaTexto + " (" + tipo(alturaTexto) + ")"

mostrar ""
mostrar "Convirtiendo datos..."

variable nombre = nombreTexto
variable edad = entero(edadTexto)
variable altura = decimal(alturaTexto)
variable peso = decimal(pesoTexto)
variable acepta = booleano(aceptaTerminos)

mostrar ""
mostrar "Datos procesados:"
mostrar "Nombre: " + nombre + " (" + tipo(nombre) + ")"
mostrar "Edad: " + texto(edad) + " (" + tipo(edad) + ")"
mostrar "Altura: " + texto(altura) + "m (" + tipo(altura) + ")"

mostrar ""
mostrar "Validaciones:"

si edad >= 18 {
    mostrar "✓ Mayor de edad"
} sino {
    mostrar "✗ Menor de edad"
}

variable imc = peso / (altura * altura)
mostrar "✓ IMC calculado: " + texto(imc)

si acepta {
    mostrar "✓ Términos aceptados"
} sino {
    mostrar "✗ Debe aceptar términos"
}

mostrar ""
mostrar "Registro completado para " + nombre`,
        output:
          '=== FORMULARIO DE REGISTRO ===\nDatos recibidos (todo como texto):\nNombre: Ana García (texto)\nEdad: 25 (texto)\nAltura: 1.65 (texto)\n\nConvirtiendo datos...\n\nDatos procesados:\nNombre: Ana García (texto)\nEdad: 25 (numero)\nAltura: 1.65m (numero)\n\nValidaciones:\n✓ Mayor de edad\n✓ IMC calculado: 22.03\n✓ Términos aceptados\n\nRegistro completado para Ana García',
        notes: [
          'Flujo típico de formulario:',
          '',
          '1️⃣ RECIBIR: Todo llega como texto',
          '• Campos de texto → texto',
          '• Campos numéricos → texto',
          "• Checkboxes → texto 'true'/'false' o 'si'/'no'",
          '',
          '2️⃣ CONVERTIR: Según necesites',
          '• Edad → entero() para comparar',
          '• Altura/Peso → decimal() para calcular',
          '• Términos → booleano() para validar',
          '',
          '3️⃣ VALIDAR: Con los tipos correctos',
          '• Comparaciones numéricas (>=, <=)',
          '• Cálculos matemáticos (IMC, totales)',
          '• Decisiones booleanas (si/sino)',
          '',
          '4️⃣ MOSTRAR: Convertir de vuelta a texto',
          '• texto() para concatenar mensajes',
          '• Presentar resultados al usuario',
          '',
          '💡 Este patrón se repite en TODA aplicación web',
        ],
      },
      {
        title: 'Validación y Conversión Segura',
        description:
          'Cómo manejar conversiones de forma segura, validando antes de convertir para evitar errores cuando el usuario ingresa datos inválidos.',
        code: `funcion convertirEdadSegura(textoEdad) {
    mostrar "Intentando convertir: '" + textoEdad + "'"
    
    si tipo(textoEdad) != "texto" {
        mostrar "✗ No es texto, retornando 0"
        retornar 0
    }
    
    si textoEdad == "" {
        mostrar "✗ Campo vacío, retornando 0"
        retornar 0
    }
    
    variable edad = entero(textoEdad)
    
    si edad < 0 o edad > 150 {
        mostrar "✗ Edad inválida, retornando 0"
        retornar 0
    }
    
    mostrar "✓ Edad válida: " + texto(edad)
    retornar edad
}

variable edad1 = convertirEdadSegura("25")
variable edad2 = convertirEdadSegura("")
variable edad3 = convertirEdadSegura("200")

mostrar ""
mostrar "Resultados:"
mostrar "edad1: " + texto(edad1)
mostrar "edad2: " + texto(edad2)
mostrar "edad3: " + texto(edad3)

funcion calcularDescuento(precioTexto, porcentajeTexto) {
    variable precio = decimal(precioTexto)
    variable porcentaje = decimal(porcentajeTexto)
    
    si precio <= 0 {
        mostrar "Precio inválido"
        retornar 0
    }
    
    si porcentaje < 0 o porcentaje > 100 {
        mostrar "Porcentaje inválido"
        retornar precio
    }
    
    variable descuento = precio * (porcentaje / 100)
    variable precioFinal = precio - descuento
    
    retornar precioFinal
}

variable precio = calcularDescuento("1000", "20")
mostrar "Precio con descuento: $" + texto(precio)`,
        output:
          "Intentando convertir: '25'\n✓ Edad válida: 25\nIntentando convertir: ''\n✗ Campo vacío, retornando 0\nIntentando convertir: '200'\n✗ Edad inválida, retornando 0\n\nResultados:\nedad1: 25\nedad2: 0\nedad3: 0\nPrecio con descuento: $800",
        notes: [
          'Patrón de conversión segura:',
          '',
          '1️⃣ VALIDAR TIPO:',
          '• Verificar que sea texto con tipo()',
          '• Si no es texto, manejar el caso',
          '',
          '2️⃣ VALIDAR CONTENIDO:',
          '• Verificar que no esté vacío',
          "• Verificar que tenga sentido ('edad' no puede ser '')",
          '',
          '3️⃣ CONVERTIR:',
          '• Usar entero() o decimal()',
          '• Guardar resultado',
          '',
          '4️⃣ VALIDAR RESULTADO:',
          '• Verificar rangos válidos',
          '• Edad: 0-150',
          '• Porcentaje: 0-100',
          '• Precio: > 0',
          '',
          '5️⃣ RETORNAR:',
          '• Valor válido convertido',
          "• O valor por defecto si es inválido (0, '', etc.)",
          '',
          '💡 Siempre valida datos del usuario',
          '💡 No confíes en que ingresarán datos correctos',
          '💡 Proporciona valores por defecto razonables',
        ],
      },
      {
        title: 'Casos de Uso Completos',
        description:
          'Ejemplos reales de conversión de tipos en diferentes escenarios: calculadora, carrito de compras, y sistema de calificaciones.',
        code: `mostrar "=== CALCULADORA DE PROPINAS ==="
variable cuentaTexto = "156.50"
variable propinaPorcentaje = "15"

variable cuenta = decimal(cuentaTexto)
variable porcentaje = entero(propinaPorcentaje)
variable propina = cuenta * (porcentaje / 100)
variable total = cuenta + propina

mostrar "Cuenta: $" + cuentaTexto
mostrar "Propina " + propinaPorcentaje + "%: $" + texto(propina)
mostrar "Total: $" + texto(total)

mostrar ""
mostrar "=== CARRITO DE COMPRAS ==="
variable cantidadTexto = "3"
variable precioTexto = "99.99"
variable tieneDescuento = "si"

variable cantidad = entero(cantidadTexto)
variable precio = decimal(precioTexto)
variable descuento = booleano(tieneDescuento)

variable subtotal = cantidad * precio

si descuento {
    variable conDescuento = subtotal * 0.85
    mostrar "Subtotal: $" + texto(subtotal)
    mostrar "Con descuento 15%: $" + texto(conDescuento)
} sino {
    mostrar "Total: $" + texto(subtotal)
}

mostrar ""
mostrar "=== SISTEMA DE CALIFICACIONES ==="
variable nota1Texto = "85"
variable nota2Texto = "90"
variable nota3Texto = "78"

variable nota1 = entero(nota1Texto)
variable nota2 = entero(nota2Texto)
variable nota3 = entero(nota3Texto)

variable suma = nota1 + nota2 + nota3
variable promedio = suma / 3

mostrar "Notas: " + nota1Texto + ", " + nota2Texto + ", " + nota3Texto
mostrar "Promedio: " + texto(promedio)

si promedio >= 90 {
    mostrar "Calificación: A"
} sino si promedio >= 80 {
    mostrar "Calificación: B"
} sino {
    mostrar "Calificación: C"
}`,
        output:
          '=== CALCULADORA DE PROPINAS ===\nCuenta: $156.50\nPropina 15%: $23.475\nTotal: $179.975\n\n=== CARRITO DE COMPRAS ===\nSubtotal: $299.97\nCon descuento 15%: $254.9745\n\n=== SISTEMA DE CALIFICACIONES ===\nNotas: 85, 90, 78\nPromedio: 84.333\nCalificación: B',
        notes: [
          'Ejemplos completos muestran:',
          '',
          '📊 CALCULADORA DE PROPINAS:',
          '• decimal() para dinero preciso',
          '• entero() para porcentajes',
          '• texto() para mostrar resultados',
          '',
          '🛒 CARRITO DE COMPRAS:',
          '• entero() para cantidades',
          '• decimal() para precios',
          '• booleano() para flags (descuento sí/no)',
          '• Cálculos con tipos correctos',
          '',
          '📚 SISTEMA DE CALIFICACIONES:',
          '• entero() para notas',
          '• Operaciones matemáticas (suma, promedio)',
          '• Comparaciones numéricas',
          '• texto() para presentar resultados',
          '',
          'Patrón común:',
          '1. Recibir datos como texto',
          '2. Convertir al tipo apropiado',
          '3. Hacer cálculos/validaciones',
          '4. Convertir a texto para mostrar',
          '',
          '💡 Este patrón se repite en TODA aplicación',
        ],
      },
      {
        title: 'Referencia Rápida: Todas las Conversiones',
        description:
          'Tabla de referencia completa con todas las funciones de conversión y sus casos de uso.',
        code: `// TEXTO → NÚMERO
entero("42")           // → 42
entero("3.7")          // → 3 (trunca)
decimal("99.99")       // → 99.99
decimal("42")          // → 42.0

// NÚMERO → TEXTO
texto(42)              // → "42"
texto(99.99)           // → "99.99"

// CUALQUIER → BOOLEANO
booleano(1)            // → verdadero
booleano(0)            // → falso
booleano("hola")       // → verdadero
booleano("")           // → falso

// VERIFICAR TIPO
tipo(42)               // → "numero"
tipo("hola")           // → "texto"
tipo(verdadero)        // → "booleano"

// CASOS ESPECIALES
entero(verdadero)      // → 1
entero(falso)          // → 0
decimal(verdadero)     // → 1.0
decimal(falso)         // → 0.0
texto(verdadero)       // → "verdadero"`,
        output: '',
        notes: [
          '📊 FUNCIONES DE CONVERSIÓN:',
          '',
          '🔢 TEXTO → NÚMERO:',
          '⭐⭐⭐ entero(texto) - Para edades, cantidades, años',
          '⭐⭐⭐ decimal(texto) - Para precios, medidas, porcentajes',
          '',
          '📝 NÚMERO → TEXTO:',
          '⭐⭐⭐ texto(numero) - Para mostrar, concatenar, formatear',
          '',
          '✅ CUALQUIER → BOOLEANO:',
          '⭐⭐ booleano(valor) - Para checkboxes, validaciones',
          '',
          '🔍 VERIFICAR TIPO:',
          '⭐⭐ tipo(valor) - Para debugging, validaciones',
          '',
          '💡 CUÁNDO USAR CADA UNA:',
          '',
          'Usa entero() cuando:',
          '• Campo de edad, cantidad, año',
          '• No necesitas decimales',
          '• Vas a hacer comparaciones o conteos',
          '',
          'Usa decimal() cuando:',
          '• Campo de precio, medida, porcentaje',
          '• Necesitas precisión decimal',
          '• Vas a hacer cálculos matemáticos',
          '',
          'Usa texto() cuando:',
          '• Necesitas concatenar con otros textos',
          '• Vas a mostrar en pantalla',
          '• Necesitas formatear salida',
          '',
          'Usa booleano() cuando:',
          '• Tienes checkbox o switch',
          '• Necesitas validar si/no',
          '• Trabajas con flags (activo/inactivo)',
          '',
          'Usa tipo() cuando:',
          '• Estás debuggeando',
          '• No sabes qué tipo recibirás',
          '• Necesitas validar antes de convertir',
        ],
      },
    ],
  },
  metodosNumericos: {
    title: '🔢 Métodos Numéricos',
    description:
      "Imagina que cada número tiene etiquetas como los productos del supermercado: 'PAR', 'IMPAR', 'POSITIVO', 'NEGATIVO'. Los métodos numéricos son como leer esas etiquetas. En vez de hacer cálculos para saber si un número es par (n % 2 == 0), simplemente preguntas: ¿tienes la etiqueta 'PAR'? El número te responde: verdadero o falso.",
    subsections: [
      {
        title: '¿Qué son los Métodos Numéricos?',
        description:
          "En el supermercado, cada producto tiene etiquetas: 'ORGÁNICO', 'SIN GLUTEN', 'VEGANO'. No necesitas analizar el producto para saber sus características, solo lees la etiqueta.\n\nLos números son igual: tienen métodos (como etiquetas) que te dicen sus características sin que tengas que hacer cálculos.",
        code: `variable numero = 42

mostrar "¿Es par?: " + texto(numero.esPar())
mostrar "¿Es impar?: " + texto(numero.esImpar())
mostrar "¿Es positivo?: " + texto(numero.esPositivo())
mostrar "¿Es negativo?: " + texto(numero.esNegativo())

variable edad = 25
si edad.esImpar() {
    mostrar "Edad impar: " + edad.aTexto()
}

variable temperatura = -5
si temperatura.esNegativo() {
    mostrar "Temperatura bajo cero"
}`,
        output:
          '¿Es par?: verdadero\n¿Es impar?: falso\n¿Es positivo?: verdadero\n¿Es negativo?: falso\nEdad impar: 25\nTemperatura bajo cero',
        notes: [
          'Los métodos se llaman con punto: numero.metodo()',
          'Son como etiquetas que el número ya tiene',
          'No necesitas hacer cálculos manualmente',
          'Más legible: n.esPar() vs n % 2 == 0',
          '',
          'Métodos disponibles:',
          '• .esPar() - ¿Es divisible por 2?',
          '• .esImpar() - ¿No es divisible por 2?',
          '• .esPositivo() - ¿Es mayor que 0?',
          '• .esNegativo() - ¿Es menor que 0?',
          '• .aTexto() - Convertir a texto',
        ],
      },
      {
        title: 'Par e Impar: Alternancia y Turnos',
        description:
          'Los números pares e impares se alternan como los asientos de un avión: A-B-A-B. Útil para turnos, filas alternas, días alternos, y cualquier patrón que se repite cada 2.',
        code: `variable numero = 8
mostrar "8 es par: " + texto(numero.esPar())
mostrar "8 es impar: " + texto(numero.esImpar())

variable n = 7
mostrar "7 es par: " + texto(n.esPar())
mostrar "7 es impar: " + texto(n.esImpar())

variable cero = 0
mostrar "0 es par: " + texto(cero.esPar())

mostrar ""
mostrar "=== SISTEMA DE TURNOS ==="
para (variable i = 1; i <= 6; i = i + 1) {
    si i.esImpar() {
        mostrar "Turno " + i.aTexto() + ": Equipo A"
    } sino {
        mostrar "Turno " + i.aTexto() + ": Equipo B"
    }
}

mostrar ""
mostrar "=== ASIENTOS DE CINE ==="
variable asiento = 5
si asiento.esImpar() {
    mostrar "Asiento " + asiento.aTexto() + ": Lado izquierdo"
} sino {
    mostrar "Asiento " + asiento.aTexto() + ": Lado derecho"
}`,
        output:
          '8 es par: verdadero\n8 es impar: falso\n7 es par: falso\n7 es impar: verdadero\n0 es par: verdadero\n\n=== SISTEMA DE TURNOS ===\nTurno 1: Equipo A\nTurno 2: Equipo B\nTurno 3: Equipo A\nTurno 4: Equipo B\nTurno 5: Equipo A\nTurno 6: Equipo B\n\n=== ASIENTOS DE CINE ===\nAsiento 5: Lado izquierdo',
        notes: [
          '.esPar(): Verdadero si el número es divisible por 2',
          '.esImpar(): Verdadero si NO es divisible por 2',
          '',
          'Casos de uso:',
          '✅ Turnos alternos (Equipo A, Equipo B, ...)',
          '✅ Filas pares/impares en estadios',
          '✅ Asientos en cine/avión',
          '✅ Días alternos (riego, medicamento)',
          '✅ Patrones de diseño (colores alternos)',
          '',
          'Dato curioso:',
          '• El 0 es par (divisible por 2)',
          '• Números negativos: -2 es par, -3 es impar',
          '',
          'Alternativa manual:',
          'numero.esPar() ≈ numero % 2 == 0',
          'numero.esImpar() ≈ numero % 2 != 0',
          '¿Cuál es más legible? 😉',
        ],
      },
      {
        title: 'Positivo y Negativo: Temperatura y Finanzas',
        description:
          'Como el termómetro: números sobre cero (positivos) y bajo cero (negativos). O como el banco: saldo positivo (tienes dinero) y saldo negativo (debes dinero).',
        code: `variable temperatura = 25
mostrar "25°C es positivo: " + texto(temperatura.esPositivo())
mostrar "25°C es negativo: " + texto(temperatura.esNegativo())

variable bajo = -10
mostrar "-10°C es positivo: " + texto(bajo.esPositivo())
mostrar "-10°C es negativo: " + texto(bajo.esNegativo())

variable cero = 0
mostrar "0 es positivo: " + texto(cero.esPositivo())
mostrar "0 es negativo: " + texto(cero.esNegativo())

mostrar ""
mostrar "=== TEMPERATURA ==="
variable temp = -5
si temp.esNegativo() {
    mostrar "¡Alerta! Temperatura bajo cero: " + temp.aTexto() + "°C"
} sino si temp.esPositivo() {
    mostrar "Temperatura normal: " + temp.aTexto() + "°C"
} sino {
    mostrar "Temperatura en punto de congelación: 0°C"
}

mostrar ""
mostrar "=== SALDO BANCARIO ==="
variable saldo = -150
si saldo.esNegativo() {
    mostrar "Saldo negativo: $" + saldo.aTexto()
    mostrar "Debes: $" + texto(valorAbsoluto(saldo))
} sino si saldo.esPositivo() {
    mostrar "Saldo positivo: $" + saldo.aTexto()
} sino {
    mostrar "Saldo en cero"
}`,
        output:
          '25°C es positivo: verdadero\n25°C es negativo: falso\n-10°C es positivo: falso\n-10°C es negativo: verdadero\n0 es positivo: falso\n0 es negativo: falso\n\n=== TEMPERATURA ===\n¡Alerta! Temperatura bajo cero: -5°C\n\n=== SALDO BANCARIO ===\nSaldo negativo: $-150\nDebes: $150',
        notes: [
          '.esPositivo(): Verdadero si número > 0',
          '.esNegativo(): Verdadero si número < 0',
          '',
          '⚠️ IMPORTANTE: El cero NO es positivo NI negativo',
          '• 0.esPositivo() → falso',
          '• 0.esNegativo() → falso',
          '• El cero es neutral',
          '',
          'Casos de uso:',
          '✅ Temperatura (bajo cero, sobre cero)',
          '✅ Saldo bancario (deuda, crédito)',
          '✅ Altitud (bajo nivel del mar, sobre nivel del mar)',
          '✅ Coordenadas (positivas, negativas)',
          '✅ Ganancias/Pérdidas en finanzas',
          '',
          'Alternativa manual:',
          'numero.esPositivo() ≈ numero > 0',
          'numero.esNegativo() ≈ numero < 0',
          '',
          '💡 Combina con valorAbsoluto() para mostrar magnitud sin signo',
        ],
      },
      {
        title: 'Conversión a Texto: aTexto()',
        description:
          'Como poner la etiqueta de precio en un producto: convertir el número a su representación en texto para mostrarlo en pantalla o concatenarlo con mensajes.',
        code: `variable precio = 99.99
mostrar "Precio: $" + precio.aTexto()

variable puntos = 1500
mostrar "Puntos: " + puntos.aTexto()

variable edad = 25
variable mensaje = "Tienes " + edad.aTexto() + " años"
mostrar mensaje

mostrar ""
mostrar "=== CON LITERALES ==="
mostrar (42).aTexto()
mostrar (3.14).aTexto()
mostrar (-10).aTexto()

mostrar ""
mostrar "=== FORMATEO DE PRECIOS ==="
variable producto1 = 150
variable producto2 = 200
variable producto3 = 99.99

mostrar "Producto 1: $" + producto1.aTexto()
mostrar "Producto 2: $" + producto2.aTexto()
mostrar "Producto 3: $" + producto3.aTexto()

variable total = producto1 + producto2 + producto3
mostrar "Total: $" + total.aTexto()`,
        output:
          'Precio: $99.99\nPuntos: 1500\nTienes 25 años\n\n=== CON LITERALES ===\n42\n3.14\n-10\n\n=== FORMATEO DE PRECIOS ===\nProducto 1: $150\nProducto 2: $200\nProducto 3: $99.99\nTotal: $449.99',
        notes: [
          '.aTexto(): Convierte número a cadena de texto',
          'numero.aTexto() ≈ texto(numero)',
          '',
          'Con literales numéricos, usa paréntesis:',
          '• (42).aTexto() ✅',
          '• 42.aTexto() ❌ (error de sintaxis)',
          '',
          'Casos de uso:',
          '✅ Formatear precios para mostrar',
          '✅ Concatenar números en mensajes',
          '✅ Crear etiquetas dinámicas',
          '✅ Construir strings con datos numéricos',
          '',
          'Diferencia con texto():',
          '• numero.aTexto() - método del número',
          '• texto(numero) - función global',
          '• Ambos hacen lo mismo',
          '• Usa el que prefieras',
          '',
          "💡 .aTexto() es más 'orientado a objetos'",
          "💡 texto() es más 'funcional'",
          '💡 Ambos son válidos y equivalentes',
        ],
      },
      {
        title: 'Métodos vs Funciones: ¿Cuándo Usar Cada Uno?',
        description:
          'Tienes dos formas de hacer lo mismo: métodos (numero.metodo()) y funciones/operadores. ¿Cuál elegir? Depende de legibilidad y preferencia.',
        code: `variable n = 8

mostrar "=== PAR: DOS FORMAS ==="
mostrar "Con método: " + texto(n.esPar())
mostrar "Con operador: " + texto(n % 2 == 0)

mostrar ""
mostrar "=== IMPAR: DOS FORMAS ==="
mostrar "Con método: " + texto(n.esImpar())
mostrar "Con operador: " + texto(n % 2 != 0)

mostrar ""
mostrar "=== POSITIVO: DOS FORMAS ==="
variable temp = 25
mostrar "Con método: " + texto(temp.esPositivo())
mostrar "Con comparación: " + texto(temp > 0)

mostrar ""
mostrar "=== A TEXTO: DOS FORMAS ==="
variable precio = 99.99
mostrar "Con método: " + precio.aTexto()
mostrar "Con función: " + texto(precio)

mostrar ""
mostrar "=== LEGIBILIDAD ==="
variable edad = 25

si edad.esImpar() {
    mostrar "✓ edad.esImpar() - Más legible"
}

si edad % 2 != 0 {
    mostrar "✓ edad % 2 != 0 - Más técnico"
}`,
        output:
          '=== PAR: DOS FORMAS ===\nCon método: verdadero\nCon operador: verdadero\n\n=== IMPAR: DOS FORMAS ===\nCon método: falso\nCon operador: falso\n\n=== POSITIVO: DOS FORMAS ===\nCon método: verdadero\nCon comparación: verdadero\n\n=== A TEXTO: DOS FORMAS ===\nCon método: 99.99\nCon función: 99.99\n\n=== LEGIBILIDAD ===\n✓ edad.esImpar() - Más legible\n✓ edad % 2 != 0 - Más técnico',
        notes: [
          'Equivalencias:',
          '',
          'n.esPar() ≈ n % 2 == 0',
          'n.esImpar() ≈ n % 2 != 0',
          'n.esPositivo() ≈ n > 0',
          'n.esNegativo() ≈ n < 0',
          'n.aTexto() ≈ texto(n)',
          '',
          'Ventajas de MÉTODOS (.esPar(), etc):',
          '✅ Más legible en español',
          '✅ Intención más clara',
          '✅ Menos propenso a errores',
          '✅ Mejor para principiantes',
          '',
          'Ventajas de OPERADORES (%, >, <, etc):',
          '✅ Más conciso',
          '✅ Universal en todos los lenguajes',
          '✅ Ligeramente más rápido',
          '✅ Preferido por programadores experimentados',
          '',
          '¿Cuál usar?',
          '💡 Para código legible: métodos',
          '💡 Para código compacto: operadores',
          '💡 En proyectos educativos: métodos',
          '💡 En proyectos profesionales: lo que prefiera el equipo',
          '',
          'Ambos son correctos. Elige según contexto.',
        ],
      },
      {
        title: 'Casos de Uso Prácticos',
        description:
          'Ejemplos completos de cómo usar métodos numéricos en situaciones reales: sistema de turnos, validación de temperatura, y formateo de datos.',
        code: `mostrar "=== SISTEMA DE TURNOS (PAR/IMPAR) ==="
variable turno = 1
para (variable i = 1; i <= 8; i = i + 1) {
    si i.esImpar() {
        mostrar "Día " + i.aTexto() + ": Regar plantas (días impares)"
    } sino {
        mostrar "Día " + i.aTexto() + ": Descanso"
    }
}

mostrar ""
mostrar "=== VALIDACIÓN DE TEMPERATURA ==="
variable temperaturas = [-5, 0, 15, 25, 30]

para (variable i = 0; i < 5; i = i + 1) {
    variable temp = temperaturas[i]
    
    si temp.esNegativo() {
        mostrar temp.aTexto() + "°C: ❄️ Bajo cero - Precaución"
    } sino si temp.esPositivo() y temp < 20 {
        mostrar temp.aTexto() + "°C: 🌤️ Fresco"
    } sino si temp.esPositivo() {
        mostrar temp.aTexto() + "°C: ☀️ Cálido"
    } sino {
        mostrar temp.aTexto() + "°C: 🧊 Punto de congelación"
    }
}

mostrar ""
mostrar "=== FORMATEO DE DATOS ==="
variable ventas = [1500, 2300, 1800, 2100, 1900]
variable total = 0

para (variable i = 0; i < 5; i = i + 1) {
    total = total + ventas[i]
    variable dia = i + 1
    mostrar "Día " + dia.aTexto() + ": $" + ventas[i].aTexto()
}

variable promedio = total / 5
mostrar ""
mostrar "Total: $" + total.aTexto()
mostrar "Promedio: $" + promedio.aTexto()`,
        output:
          '=== SISTEMA DE TURNOS (PAR/IMPAR) ===\nDía 1: Regar plantas (días impares)\nDía 2: Descanso\nDía 3: Regar plantas (días impares)\nDía 4: Descanso\nDía 5: Regar plantas (días impares)\nDía 6: Descanso\nDía 7: Regar plantas (días impares)\nDía 8: Descanso\n\n=== VALIDACIÓN DE TEMPERATURA ===\n-5°C: ❄️ Bajo cero - Precaución\n0°C: 🧊 Punto de congelación\n15°C: 🌤️ Fresco\n25°C: ☀️ Cálido\n30°C: ☀️ Cálido\n\n=== FORMATEO DE DATOS ===\nDía 1: $1500\nDía 2: $2300\nDía 3: $1800\nDía 4: $2100\nDía 5: $1900\n\nTotal: $9600\nPromedio: $1920',
        notes: [
          'Ejemplos reales de métodos numéricos:',
          '',
          '🔄 SISTEMA DE TURNOS:',
          '• .esImpar() para días alternos',
          '• Útil para: riego, medicamentos, turnos',
          '• Patrón A-B-A-B automático',
          '',
          '🌡️ VALIDACIÓN DE TEMPERATURA:',
          '• .esNegativo() para bajo cero',
          '• .esPositivo() para sobre cero',
          '• Cero como caso especial',
          '',
          '💰 FORMATEO DE DATOS:',
          '• .aTexto() para mostrar precios',
          '• Crear mensajes legibles',
          '• Formatear reportes',
          '',
          'Patrón común:',
          '1. Verificar con .esPar(), .esPositivo(), etc.',
          '2. Tomar decisión basada en resultado',
          '3. Formatear output con .aTexto()',
          '',
          '💡 Combina métodos para código limpio y expresivo',
        ],
      },
      {
        title: 'Referencia Rápida: Todos los Métodos',
        description:
          'Tabla de referencia completa con todos los métodos numéricos disponibles en HispanoLang.',
        code: `variable n = 42

n.esPar()           // verdadero
n.esImpar()         // falso
n.esPositivo()      // verdadero
n.esNegativo()      // falso
n.aTexto()          // "42"

variable m = -7

m.esPar()           // falso
m.esImpar()         // verdadero
m.esPositivo()      // falso
m.esNegativo()      // verdadero
m.aTexto()          // "-7"

variable cero = 0

cero.esPar()        // verdadero
cero.esImpar()      // falso
cero.esPositivo()   // falso
cero.esNegativo()   // falso
cero.aTexto()       // "0"

(100).esPar()       // verdadero (literal con paréntesis)
(3.14).aTexto()     // "3.14" (literal con paréntesis)`,
        output: '',
        notes: [
          '📊 TODOS LOS MÉTODOS NUMÉRICOS:',
          '',
          '🔢 VERIFICACIÓN:',
          '⭐⭐⭐ .esPar() - ¿Divisible por 2?',
          '⭐⭐⭐ .esImpar() - ¿No divisible por 2?',
          '⭐⭐⭐ .esPositivo() - ¿Mayor que 0?',
          '⭐⭐⭐ .esNegativo() - ¿Menor que 0?',
          '',
          '📝 CONVERSIÓN:',
          '⭐⭐⭐ .aTexto() - Convertir a texto',
          '',
          '💡 CUÁNDO USAR:',
          '',
          '.esPar() / .esImpar():',
          '• Turnos alternos',
          '• Filas pares/impares',
          '• Días alternos',
          '• Patrones alternantes',
          '',
          '.esPositivo() / .esNegativo():',
          '• Validar temperaturas',
          '• Validar saldos bancarios',
          '• Verificar ganancias/pérdidas',
          '• Coordenadas y posiciones',
          '',
          '.aTexto():',
          '• Formatear precios',
          '• Crear mensajes',
          '• Concatenar con texto',
          '• Mostrar en pantalla',
          '',
          '⚠️ CASOS ESPECIALES:',
          '• El 0 es par',
          '• El 0 NO es positivo ni negativo',
          '• Literales necesitan paréntesis: (42).esPar()',
          '',
          '🔗 EQUIVALENCIAS:',
          'n.esPar() ≈ n % 2 == 0',
          'n.esImpar() ≈ n % 2 != 0',
          'n.esPositivo() ≈ n > 0',
          'n.esNegativo() ≈ n < 0',
          'n.aTexto() ≈ texto(n)',
        ],
      },
    ],
  },
  clases: {
    title: '🏗️ Clases',
    description:
      'Las clases son plantillas para crear objetos con propiedades y métodos. Permiten programación orientada a objetos en HispanoLang.',
    subsections: [
      {
        title: 'Definición de Clases',
        description: "Define clases usando la palabra 'clase' con un constructor y métodos.",
        syntax: 'clase NombreClase { constructor(params) { } metodo() { } }',
        code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }

    saludar() {
        retornar \`Hola, soy \${este.nombre}\`
    }

    cumplirAnios() {
        este.edad = este.edad + 1
        mostrar \`\${este.nombre} ahora tiene \${este.edad} años\`
    }
}`,
        notes: [
          'clase NombreClase { ... } - Define una clase',
          'constructor(params) - Inicializa la instancia',
          'este.propiedad - Accede a propiedades de la instancia',
          "Los métodos se definen sin la palabra 'funcion'",
        ],
      },
      {
        title: 'Instanciación con nuevo',
        description: "Crea instancias de clases usando la palabra 'nuevo'.",
        code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }

    saludar() {
        retornar \`Hola, soy \${este.nombre}\`
    }
}

variable persona = nuevo Persona("Juan", 25)

mostrar persona.nombre      // "Juan"
mostrar persona.edad        // 25
mostrar persona.saludar()   // "Hola, soy Juan"

// Múltiples instancias
variable persona2 = nuevo Persona("Ana", 30)
mostrar persona2.nombre     // "Ana"`,
        notes: [
          'nuevo Clase(args) - Crea una nueva instancia',
          'Cada instancia tiene sus propias propiedades',
          'Los métodos se comparten entre instancias',
          'tipo(instancia) retorna el nombre de la clase',
        ],
      },
    ],
  },
  herencia: {
    title: '🌳 Herencia',
    description:
      'La herencia permite crear clases basadas en otras clases existentes. La clase hija hereda propiedades y métodos de la clase padre.',
    subsections: [
      {
        title: 'Extender Clases',
        description:
          "Usa 'extiende' para heredar de otra clase y 'super' para llamar al constructor padre.",
        syntax: 'clase Hija extiende Padre { constructor() { super() } }',
        code: `clase Animal {
    constructor(nombre) {
        este.nombre = nombre
    }

    hablar() {
        retornar \`\${este.nombre} hace un sonido\`
    }
}

clase Perro extiende Animal {
    constructor(nombre, raza) {
        super(nombre)    // Llama al constructor de Animal
        este.raza = raza
    }

    hablar() {
        retornar \`\${este.nombre} dice: ¡Guau!\`
    }

    describir() {
        retornar \`\${este.nombre} es un \${este.raza}\`
    }
}

variable perro = nuevo Perro("Max", "Labrador")
mostrar perro.hablar()      // "Max dice: ¡Guau!"
mostrar perro.describir()   // "Max es un Labrador"`,
        notes: [
          'clase Hija extiende Padre - Define herencia',
          'super(args) - Llama al constructor del padre',
          'La clase hija hereda todas las propiedades y métodos',
          'Puedes sobrescribir métodos del padre',
        ],
      },
      {
        title: 'Polimorfismo',
        description: 'Diferentes clases pueden tener el mismo método pero comportarse diferente.',
        code: `clase Figura {
    constructor(nombre) {
        este.nombre = nombre
    }

    calcularArea() {
        retornar 0
    }
}

clase Rectangulo extiende Figura {
    constructor(ancho, alto) {
        super("Rectángulo")
        este.ancho = ancho
        este.alto = alto
    }

    calcularArea() {
        retornar este.ancho * este.alto
    }
}

clase Circulo extiende Figura {
    constructor(radio) {
        super("Círculo")
        este.radio = radio
    }

    calcularArea() {
        retornar 3.14159 * este.radio * este.radio
    }
}

variable figuras = [
    nuevo Rectangulo(10, 5),
    nuevo Circulo(7)
]

para cada figura en figuras {
    mostrar \`\${figura.nombre}: \${figura.calcularArea()}\`
}`,
        notes: [
          'Cada clase implementa el método a su manera',
          'El mismo método funciona diferente según la clase',
          'Permite código más flexible y reutilizable',
          'tipo(instancia) retorna la clase específica',
        ],
      },
    ],
  },
};
