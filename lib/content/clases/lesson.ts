import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '🏗️', text: 'Lección 20' },
  title: 'Clases en',
  titleGradient: ' HispanoLang',
  description: 'Programación orientada a objetos',
  prev: { url: '/lecciones/objetos', title: 'Objetos' },
  next: { url: '/lecciones/herencia', title: 'Herencia' },
  steps: [
    {
      title: '¿Qué son las clases?',
      content:
        'Las clases son plantillas para crear objetos. Definen las propiedades y comportamientos que tendrán los objetos creados a partir de ellas.',
      code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }
}

variable persona1 = nuevo Persona("Ana", 25)
variable persona2 = nuevo Persona("Luis", 30)

mostrar persona1.nombre  // "Ana"
mostrar persona2.edad    // 30`,
      explanation:
        "La clase define la estructura. 'nuevo' crea instancias. 'este' se refiere a la instancia actual.",
      challenge: 'Crea una clase Producto con nombre y precio. Crea dos productos diferentes.',
      validation: {
        requiredCode: ['clase', 'constructor', 'este.', 'nuevo'],
      },
    },
    {
      title: 'El constructor',
      content:
        'El constructor es un método especial que se ejecuta automáticamente al crear una nueva instancia.',
      code: `clase Rectangulo {
    constructor(ancho, alto) {
        este.ancho = ancho
        este.alto = alto
        mostrar "Rectángulo creado: " + ancho + "x" + alto
    }
}

variable rect1 = nuevo Rectangulo(10, 5)
variable rect2 = nuevo Rectangulo(8, 3)

mostrar "Ancho rect1: " + rect1.ancho
mostrar "Alto rect2: " + rect2.alto`,
      explanation: "El constructor inicializa las propiedades de la instancia usando 'este'.",
      challenge:
        "Crea una clase Libro con título y autor. El constructor debe mostrar 'Libro creado: [título]'.",
      validation: {
        requiredCode: ['clase', 'constructor', 'este.', 'mostrar'],
      },
    },
    {
      title: 'Métodos de instancia',
      content:
        'Los métodos son funciones definidas dentro de la clase que operan sobre la instancia.',
      code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }

    saludar() {
        retornar "Hola, soy " + este.nombre
    }

    cumplirAnios() {
        este.edad = este.edad + 1
        mostrar este.nombre + " ahora tiene " + este.edad + " años"
    }
}

variable persona = nuevo Persona("María", 28)
mostrar persona.saludar()
persona.cumplirAnios()
persona.cumplirAnios()`,
      explanation:
        "Los métodos pueden acceder y modificar las propiedades de la instancia usando 'este'.",
      challenge: 'Crea una clase CuentaBanco con saldo, depositar(cantidad) y retirar(cantidad).',
      validation: {
        requiredCode: ['clase', 'constructor', 'este.', 'retornar'],
      },
    },
    {
      title: 'Métodos con retorno',
      content:
        'Los métodos pueden calcular y retornar valores basados en las propiedades del objeto.',
      code: `clase Rectangulo {
    constructor(ancho, alto) {
        este.ancho = ancho
        este.alto = alto
    }

    calcularArea() {
        retornar este.ancho * este.alto
    }

    calcularPerimetro() {
        retornar 2 * (este.ancho + este.alto)
    }

    describir() {
        retornar "Rectángulo " + este.ancho + "x" + este.alto
    }
}

variable rect = nuevo Rectangulo(10, 5)
mostrar rect.describir()
mostrar "Área: " + rect.calcularArea()
mostrar "Perímetro: " + rect.calcularPerimetro()`,
      explanation: 'Los métodos encapsulan la lógica relacionada con el objeto.',
      challenge: 'Crea una clase Circulo con radio y métodos para calcular área y perímetro.',
      validation: {
        requiredCode: ['clase', 'retornar', '/area|Area|perímetro|perimetro/i'],
      },
    },
    {
      title: 'Múltiples instancias',
      content: 'Cada instancia tiene sus propias propiedades independientes.',
      code: `clase Jugador {
    constructor(nombre) {
        este.nombre = nombre
        este.puntos = 0
        este.vidas = 3
    }

    ganarPuntos(cantidad) {
        este.puntos = este.puntos + cantidad
        mostrar este.nombre + " ganó " + cantidad + " puntos"
    }

    perderVida() {
        este.vidas = este.vidas - 1
        si este.vidas <= 0 {
            mostrar este.nombre + ": Game Over"
        } sino {
            mostrar este.nombre + " tiene " + este.vidas + " vidas"
        }
    }
}

variable jugador1 = nuevo Jugador("Ana")
variable jugador2 = nuevo Jugador("Luis")

jugador1.ganarPuntos(100)
jugador2.ganarPuntos(150)
jugador1.perderVida()
mostrar jugador1.nombre + ": " + jugador1.puntos + " pts"
mostrar jugador2.nombre + ": " + jugador2.puntos + " pts"`,
      explanation: 'Cada jugador mantiene su propio estado (puntos, vidas) independientemente.',
      challenge: 'Crea dos instancias de CuentaBanco con diferentes saldos y realiza operaciones.',
      validation: {
        requiredCode: ['clase', 'nuevo', 'este.'],
      },
    },
    {
      title: '¡Práctica libre!',
      content: 'Las clases organizan tu código de manera lógica y reutilizable.',
      code: `clase Tarea {
    constructor(titulo, prioridad) {
        este.titulo = titulo
        este.prioridad = prioridad
        este.completada = falso
    }

    completar() {
        este.completada = verdadero
        mostrar "Tarea completada: " + este.titulo
    }

    describir() {
        variable estado = este.completada ? "Hecha" : "Pendiente"
        retornar "[" + este.prioridad + "] " + este.titulo + " - " + estado
    }
}

variable tareas = [
    nuevo Tarea("Estudiar", "Alta"),
    nuevo Tarea("Ejercicio", "Media"),
    nuevo Tarea("Compras", "Baja")
]

mostrar "=== Lista de Tareas ==="
para cada tarea en tareas {
    mostrar tarea.describir()
}

tareas[0].completar()
mostrar tareas[0].describir()`,
      explanation: 'Las clases son fundamentales para organizar programas grandes y complejos.',
      challenge:
        'Crea una clase Estudiante con nombre, notas (lista) y un método para calcular promedio.',
      summary:
        '🧠 Clases en HispanoLang:\n\n• clase NombreClase { ... } - define la clase\n• constructor(params) - inicializa instancias\n• este.propiedad - accede a propiedades\n• metodo() { ... } - define comportamientos\n• nuevo Clase() - crea una instancia\n• Cada instancia tiene estado independiente',
      validation: {
        requiredCode: ['clase', 'constructor', 'nuevo', 'promedio'],
      },
    },
  ],
};
