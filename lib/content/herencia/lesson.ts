import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '🌳', text: 'Lección 21' },
  title: 'Herencia en',
  titleGradient: ' HispanoLang',
  description: 'Extender clases con extiende y super',
  prev: { url: '/lecciones/clases', title: 'Clases' },
  next: { url: '/lecciones/manejo-errores', title: 'Manejo de Errores' },
  steps: [
    {
      title: '¿Qué es la herencia?',
      content:
        'La herencia permite crear clases basadas en otras clases existentes. La clase hija hereda propiedades y métodos de la clase padre.',
      code: `clase Animal {
    constructor(nombre) {
        este.nombre = nombre
    }

    hablar() {
        mostrar este.nombre + " hace un sonido"
    }
}

clase Perro extiende Animal {
    constructor(nombre) {
        super(nombre)
    }

    hablar() {
        mostrar este.nombre + " dice: ¡Guau!"
    }
}

variable animal = nuevo Animal("Criatura")
variable perro = nuevo Perro("Max")

animal.hablar()  // "Criatura hace un sonido"
perro.hablar()   // "Max dice: ¡Guau!"`,
      explanation:
        "'extiende' indica herencia. 'super()' llama al constructor del padre. Los métodos pueden sobrescribirse.",
      challenge: 'Crea una clase Gato que extienda Animal y sobrescriba el método hablar().',
      validation: {
        requiredCode: ['clase', 'extiende', 'super('],
      },
    },
    {
      title: 'La palabra clave super',
      content:
        'super() llama al constructor de la clase padre. Es obligatorio en el constructor de una clase hija.',
      code: `clase Vehiculo {
    constructor(marca, modelo) {
        este.marca = marca
        este.modelo = modelo
    }

    describir() {
        retornar este.marca + " " + este.modelo
    }
}

clase Auto extiende Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo)  // Llama al constructor de Vehiculo
        este.puertas = puertas
    }

    describir() {
        retornar super.describir() + " (" + este.puertas + " puertas)"
    }
}

variable auto = nuevo Auto("Toyota", "Corolla", 4)
mostrar auto.describir()  // "Toyota Corolla (4 puertas)"`,
      explanation:
        'super(args) pasa argumentos al constructor padre. super.metodo() llama métodos del padre.',
      challenge: "Crea Moto que extienda Vehiculo y agregue la propiedad 'cilindrada'.",
      validation: {
        requiredCode: ['extiende', 'super('],
      },
    },
    {
      title: 'Agregar propiedades y métodos',
      content:
        'Las clases hijas pueden tener propiedades y métodos adicionales que el padre no tiene.',
      code: `clase Persona {
    constructor(nombre, edad) {
        este.nombre = nombre
        este.edad = edad
    }

    saludar() {
        retornar "Hola, soy " + este.nombre
    }
}

clase Empleado extiende Persona {
    constructor(nombre, edad, cargo, salario) {
        super(nombre, edad)
        este.cargo = cargo
        este.salario = salario
    }

    presentarse() {
        retornar este.saludar() + " y trabajo como " + este.cargo
    }

    obtenerSalarioAnual() {
        retornar este.salario * 12
    }
}

variable emp = nuevo Empleado("Ana", 28, "Ingeniera", 5000)
mostrar emp.presentarse()
mostrar "Salario anual: $" + emp.obtenerSalarioAnual()`,
      explanation:
        'Empleado hereda nombre, edad y saludar() de Persona, pero agrega cargo, salario y métodos propios.',
      challenge:
        'Crea una clase Gerente que extienda Empleado y agregue un método bonus() que retorne 20% del salario.',
      validation: {
        requiredCode: ['extiende', 'super(', 'bonus'],
      },
    },
    {
      title: 'Jerarquías de clases',
      content: 'Puedes crear jerarquías con múltiples niveles de herencia.',
      code: `clase Animal {
    constructor(nombre) {
        este.nombre = nombre
    }

    hablar() {
        retornar este.nombre + " hace un sonido"
    }
}

clase Perro extiende Animal {
    constructor(nombre, raza) {
        super(nombre)
        este.raza = raza
    }

    hablar() {
        retornar este.nombre + " dice: ¡Guau!"
    }

    describir() {
        retornar este.nombre + " es un " + este.raza
    }
}

clase Gato extiende Animal {
    hablar() {
        retornar este.nombre + " dice: ¡Miau!"
    }
}

variable perro = nuevo Perro("Max", "Labrador")
variable gato = nuevo Gato("Michi")

mostrar perro.hablar()
mostrar perro.describir()
mostrar gato.hablar()

mostrar tipo(perro)  // "Perro"
mostrar tipo(gato)   // "Gato"`,
      explanation: 'tipo() retorna el nombre de la clase de una instancia.',
      challenge: 'Agrega una clase Pajaro que extienda Animal con un método volar().',
      validation: {
        requiredCode: ['clase', 'extiende', 'Pajaro', 'volar'],
      },
    },
    {
      title: 'Polimorfismo',
      content:
        'Diferentes clases pueden tener el mismo método pero comportarse de manera diferente.',
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
    nuevo Circulo(7),
    nuevo Rectangulo(3, 8)
]

para cada figura en figuras {
    mostrar figura.nombre + ": " + figura.calcularArea()
}`,
      explanation:
        'Cada figura calcula su área de manera diferente, pero todas responden al mismo método.',
      challenge: 'Agrega una clase Triangulo que calcule el área (base * altura / 2).',
      validation: {
        requiredCode: ['clase', 'extiende', 'Triangulo', 'calcularArea'],
      },
    },
    {
      title: '¡Práctica libre!',
      content: 'La herencia es fundamental para crear código organizado y reutilizable.',
      code: `clase Cuenta {
    constructor(titular, saldoInicial) {
        este.titular = titular
        este.saldo = saldoInicial
    }

    depositar(cantidad) {
        este.saldo = este.saldo + cantidad
        mostrar "Depósito: $" + cantidad
    }

    retirar(cantidad) {
        si cantidad <= este.saldo {
            este.saldo = este.saldo - cantidad
            mostrar "Retiro: $" + cantidad
            retornar verdadero
        }
        mostrar "Saldo insuficiente"
        retornar falso
    }
}

clase CuentaAhorro extiende Cuenta {
    constructor(titular, saldoInicial, tasaInteres) {
        super(titular, saldoInicial)
        este.tasaInteres = tasaInteres
    }

    aplicarInteres() {
        variable interes = este.saldo * este.tasaInteres
        este.saldo = este.saldo + interes
        mostrar "Interés aplicado: $" + interes
    }
}

variable cuenta = nuevo CuentaAhorro("María", 1000, 0.05)
cuenta.depositar(500)
cuenta.aplicarInteres()
mostrar "Saldo final: $" + cuenta.saldo`,
      explanation: 'CuentaAhorro hereda todo de Cuenta y agrega funcionalidad de intereses.',
      challenge:
        'Crea una clase CuentaCorriente que extienda Cuenta y permita sobregiro hasta un límite.',
      summary:
        '🧠 Herencia en HispanoLang:\n\n• clase Hija extiende Padre { }\n• super(args) - llama constructor del padre\n• super.metodo() - llama método del padre\n• Las clases hijas heredan todo del padre\n• Pueden agregar propiedades y métodos\n• Pueden sobrescribir métodos del padre\n• tipo(instancia) retorna el nombre de clase',
      validation: {
        requiredCode: ['clase', 'extiende', 'super(', 'sobregiro'],
      },
    },
  ],
};
