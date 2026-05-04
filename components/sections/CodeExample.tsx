export default function CodeExample() {
  return (
    <section id="ejemplos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sintaxis Clara y Elegante
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo HispanoLang hace que la programación sea más intuitiva y accesible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 rounded-xl p-6 overflow-hidden">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">ejemplo.hl</span>
            </div>
            <pre
              className="text-gray-300 text-sm leading-relaxed overflow-x-auto"
              style={{ fontVariantLigatures: 'none' }}
            >
              <code>{`// Calculadora simple en HispanoLang
funcion calcular(operacion, a, b) {
    si operacion == "suma" {
        retornar a + b
    } sino si operacion == "resta" {
        retornar a - b
    } sino si operacion == "multiplicacion" {
        retornar a * b
    } sino si operacion == "division" {
        si b != 0 {
            retornar a / b
        } sino {
            retornar "Error: División por cero"
        }
    } sino {
        retornar "Operación no válida"
    }
}

// Programa principal
inicio {
    numero resultado = calcular("suma", 10, 5)
    escribir("El resultado es: " + resultado)
    
    lista numeros = [1, 2, 3, 4, 5]
    para cada numero en numeros {
        escribir("Número: " + numero)
    }
}`}</code>
            </pre>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Sintaxis en Español</h3>
              <p className="text-gray-600">
                Palabras clave como <code className="bg-gray-100 px-2 py-1 rounded">funcion</code>,
                <code className="bg-gray-100 px-2 py-1 rounded">si</code>, y
                <code className="bg-gray-100 px-2 py-1 rounded">para</code>
                hacen que el código sea más natural de leer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Tipado Estático</h3>
              <p className="text-gray-600">
                Sistema de tipos robusto que previene errores en tiempo de compilación, similar a
                TypeScript pero con sintaxis más clara.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔧 Herramientas Modernas</h3>
              <p className="text-gray-600">
                Compilador rápido, formateador automático, y soporte completo para editores modernos
                con autocompletado inteligente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
