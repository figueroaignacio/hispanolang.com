import { LessonContent } from '@/lib/lessons/types';

export const lesson: LessonContent = {
  badge: { emoji: '🔄', text: 'Lección 10' },
  title: 'Bucles en',
  titleGradient: ' HispanoLang',
  description: 'Aprende a repetir código como reproducir una playlist',
  prev: { url: '/lecciones/elegir-caso', title: 'Elegir/Caso' },
  next: { url: '/lecciones/listas', title: 'Listas' },
  steps: [
    {
      title: 'Reproducir Canciones Automáticamente',
      content:
        "Imagina que tienes 5 canciones en una playlist. En vez de escribir 'reproducir canción 1', 'reproducir canción 2', etc., el reproductor usa un bucle: repite la acción automáticamente.\n\nLos bucles son eso: repetir código sin escribirlo múltiples veces.",
      code: `variable cancion = 1

mientras cancion <= 5 {
    mostrar "♪ Reproduciendo canción " + cancion
    cancion = cancion + 1
}

mostrar "Playlist terminada"`,
      explanation:
        'El bucle **mientras** funciona así:\n\n1. Verifica la condición (cancion <= 5)\n2. Si es verdadera → ejecuta el código\n3. Repite desde el paso 1\n4. Si es falsa → sale del bucle\n\nEn este ejemplo:\n• Empieza con cancion = 1\n• Reproduce y suma 1\n• Cuando llega a 6, la condición 6 <= 5 es falsa\n• Termina el bucle\n\n⚠️ IMPORTANTE: siempre incrementa la variable (cancion + 1), sino el bucle nunca termina.',
      challenge:
        "Crea un reproductor que baje el volumen gradualmente:\n• Variable `volumen` = 10\n• Mientras volumen > 0, muestra 'Volumen: X'\n• Baja el volumen de 2 en 2 (volumen = volumen - 2)\n• Al final muestra 'Silencio'",
      validation: {
        requiredCode: ['/volumen\\s*=.*10/', '/mientras/', '/volumen.*-.*2/', '/mostrar/'],
        expectedOutputs: ['/10/', '/8/', '/6/', '/4/', '/2/', '/Silencio/i'],
      },
    },
    {
      title: '⚠️ Cuidado con los Bucles Infinitos',
      content:
        'Un bucle infinito es como una canción en repeat que NUNCA para. El programa se queda atascado para siempre.\n\nEsto pasa cuando olvidas cambiar la variable de la condición.',
      code: `variable cancion = 1

mientras cancion <= 3 {
    mostrar "Canción " + cancion
    cancion++
}

mostrar "Fin"`,
      explanation:
        'Este código está BIEN porque:\n• cancion empieza en 1\n• cancion++ la incrementa (1 → 2 → 3 → 4)\n• Cuando llega a 4, la condición 4 <= 3 es falsa\n• El bucle termina\n\n❌ Bucle infinito sería:\n```\nmientras cancion <= 3 {\n    mostrar "Canción " + cancion\n    // ¡Olvidé incrementar!\n}\n```\n\n💡 REGLA DE ORO: Siempre modifica la variable de la condición dentro del bucle.',
      challenge:
        "Crea un contador de reproducciones:\n• Variable `reproducidas` = 0\n• Mientras reproducidas < 5\n• Muestra 'Reproducción número: X'\n• Incrementa reproducidas (reproducidas++)\nAsegúrate que termine correctamente.",
      validation: {
        requiredCode: [
          '/reproducidas\\s*=.*0/',
          '/mientras/',
          '/reproducidas.*<.*5/',
          '/reproducidas\\+\\+|reproducidas.*=.*reproducidas.*\\+.*1/',
        ],
        expectedOutputs: ['/1/', '/2/', '/3/', '/4/', '/5/'],
      },
    },
    {
      title: 'Bucle para: Cantidad Exacta',
      content:
        "Cuando sabes EXACTAMENTE cuántas veces quieres repetir algo, usa el bucle 'para'. Es más compacto y claro.\n\nComo decir: 'reproduce las primeras 10 canciones'.",
      code: `para (variable i = 1; i <= 5; i++) {
    mostrar "♪ Canción " + i
}

para (variable rep = 1; rep <= 3; rep++) {
    mostrar "Repetición " + rep + " de tu favorita"
}`,
      explanation:
        'El bucle **para** tiene 3 partes separadas por `;`:\n\n**para (inicialización; condición; incremento)**\n\n1. **Inicialización**: `variable i = 1` (se ejecuta UNA VEZ al inicio)\n2. **Condición**: `i <= 5` (se verifica ANTES de cada repetición)\n3. **Incremento**: `i++` (se ejecuta AL FINAL de cada repetición)\n\nEs como mientras, pero todo en una línea más compacta.',
      challenge:
        "Crea una tabla de reproducción:\n• Usa 'para' para reproducir canciones del 1 al 8\n• Muestra 'Track X de 8'\n• El formato debe ser exactamente ese",
      validation: {
        requiredCode: ['/para\\s*\\(/', '/i\\s*<=?\\s*8|i\\s*<\\s*9/', '/i\\+\\+/'],
        expectedOutputs: ['/Track 1/', '/Track 5/', '/Track 8/'],
      },
    },
    {
      title: 'mientras vs para: ¿Cuál Usar?',
      content:
        'Ambos repiten código, pero cada uno es mejor en diferentes situaciones. Es como elegir entre shuffle o reproducción ordenada.',
      code: `variable cancion = 1
mientras cancion <= 5 {
    mostrar "Canción " + cancion
    cancion++
}

para (variable cancion = 1; cancion <= 5; cancion++) {
    mostrar "Canción " + cancion
}`,
      explanation:
        "**Usa 'para' cuando:**\n✅ Sabes EXACTAMENTE cuántas repeticiones\n✅ Tienes un contador claro (1 a 10)\n✅ Ejemplo: 'reproduce las primeras 10 canciones'\n\n**Usa 'mientras' cuando:**\n✅ NO sabes cuántas repeticiones\n✅ Dependes de una condición variable\n✅ Ejemplo: 'reproduce mientras el usuario no pause'\n\n💡 Si cuentas 1, 2, 3... → 'para'. Si esperas que algo pase → 'mientras'.",
      challenge:
        "Crea dos contadores:\n1. Con 'para': cuenta canciones del 1 al 5\n2. Con 'mientras': empieza en 10 y cuenta hacia atrás hasta 1\nMuestra ambos resultados.",
      validation: {
        requiredCode: ['/para\\s*\\(/', '/mientras/', '/--/'],
        expectedOutputs: ['/1/', '/5/', '/10/'],
      },
    },
    {
      title: 'romper: Detener Cuando Encuentres lo que Buscas',
      content:
        "A veces necesitas detener un bucle antes de que termine. Como cuando buscas una canción específica y la encuentras: ya no necesitas seguir buscando.\n\nPara eso existe 'romper'.",
      code: `para (variable i = 1; i <= 20; i++) {
    mostrar "Revisando canción " + i
    
    si i == 7 {
        mostrar "¡Encontré mi canción favorita!"
        romper
    }
}

mostrar "Búsqueda terminada"`,
      explanation:
        "**romper** hace esto:\n• Detiene el bucle INMEDIATAMENTE\n• Sale del bucle por completo\n• Continúa con el código después del bucle\n\nEn este ejemplo:\n• Revisa canciones 1, 2, 3, 4, 5, 6, 7\n• En la 7, encuentra la favorita\n• 'romper' detiene el bucle\n• Se salta las canciones 8-20\n• Muestra 'Búsqueda terminada'\n\nÚtil para búsquedas: cuando encuentras algo, dejas de buscar.",
      challenge:
        "Sistema de búsqueda de canción:\n• Busca en canciones del 1 al 50\n• Si encuentra la canción número 23, muestra '¡Encontrada!' y usa romper\n• Muestra 'Búsqueda completada' al final",
      validation: {
        requiredCode: ['/para\\s*\\(|mientras/', '/23/', '/romper/', '/mostrar/'],
        expectedOutputs: ['/Encontrada|encontrada/i', '/completada|terminada/i'],
      },
    },
    {
      title: 'continuar: Saltar Canción',
      content:
        "A veces quieres saltarte una repetición y seguir con la siguiente. Como cuando una canción no te gusta y presionas 'siguiente'.\n\nPara eso existe 'continuar'.",
      code: `para (variable i = 1; i <= 6; i++) {
    si i == 3 o i == 5 {
        mostrar "Saltando canción " + i
        continuar
    }
    
    mostrar "♪ Reproduciendo canción " + i
}`,
      explanation:
        '**continuar** hace esto:\n• Salta el resto del código en esa repetición\n• Va directamente a la siguiente iteración\n\nEn este ejemplo:\n• Canción 1: se reproduce\n• Canción 2: se reproduce\n• Canción 3: se SALTA (continuar)\n• Canción 4: se reproduce\n• Canción 5: se SALTA (continuar)\n• Canción 6: se reproduce\n\nÚtil para filtrar cosas que no quieres procesar.',
      challenge:
        "Playlist con anuncios:\n• Reproduce canciones del 1 al 10\n• En las canciones 4 y 8, muestra 'Anuncio publicitario' y usa continuar (no las reproduzcas)\n• Las demás canciones se reproducen normal",
      validation: {
        requiredCode: ['/para\\s*\\(/', '/4.*8|8.*4/', '/continuar/', '/mostrar/'],
        expectedOutputs: ['/Canción 1|♪ 1/', '/Anuncio/i', '/Canción 5|♪ 5/'],
      },
    },
    {
      title: 'Bucles Anidados: Álbumes y Canciones',
      content:
        'Puedes poner un bucle dentro de otro. Como tener varios álbumes, y cada álbum tiene varias canciones.\n\nPor cada álbum, reproduces todas sus canciones.',
      code: `para (variable album = 1; album <= 3; album++) {
    mostrar "=== ÁLBUM " + album + " ==="
    
    para (variable track = 1; track <= 4; track++) {
        mostrar "  ♪ Track " + track
    }
    
    mostrar ""
}`,
      explanation:
        'Bucles anidados:\n\n• **Bucle externo** (álbumes): se ejecuta 3 veces\n• **Bucle interno** (tracks): se ejecuta 4 veces POR CADA álbum\n• Total: 3 álbumes × 4 tracks = 12 canciones\n\nFlujo:\n1. Álbum 1 → tracks 1, 2, 3, 4\n2. Álbum 2 → tracks 1, 2, 3, 4\n3. Álbum 3 → tracks 1, 2, 3, 4\n\nPor cada iteración del externo, el interno se ejecuta COMPLETO.',
      challenge:
        "Sistema de playlists:\n• 2 playlists\n• Cada playlist tiene 3 canciones\n• Formato:\n  'Playlist X:'\n  '  Canción Y'\nMuestra todas las combinaciones.",
      validation: {
        requiredCode: [
          '/para\\s*\\(.*para\\s*\\(/s',
          '/Playlist|playlist/',
          '/Canción|canción|Cancion|cancion/',
        ],
        expectedOutputs: ['/Playlist 1/i', '/Canción 3/i', '/Playlist 2/i'],
      },
    },
    {
      title: 'Reproductor Completo con Estadísticas',
      content:
        'Ahora combina todo lo aprendido: crea un sistema completo de reproducción con búsqueda, saltos y estadísticas.',
      code: `variable totalCanciones = 12
variable cancionActual = 1
variable reproducidas = 0
variable saltadas = 0

mostrar "🎵 REPRODUCTOR"
mostrar "Canciones: " + totalCanciones
mostrar ""

mientras cancionActual <= totalCanciones {
    si cancionActual == 4 o cancionActual == 9 {
        mostrar "Canción " + cancionActual + " - ⏭️ Saltando"
        saltadas++
        cancionActual++
        continuar
    }
    
    mostrar "Canción " + cancionActual + " - ♪ Reproduciendo"
    reproducidas++
    cancionActual++
    
    si reproducidas >= 8 {
        mostrar ""
        mostrar "Ya reproduje 8 canciones"
        romper
    }
}

mostrar ""
mostrar "=== ESTADÍSTICAS ==="
mostrar "Reproducidas: " + reproducidas
mostrar "Saltadas: " + saltadas`,
      explanation:
        'Sistema completo con:\n\n✅ Bucle mientras para recorrer playlist\n✅ continuar para saltar canciones específicas\n✅ romper para detener al llegar al límite\n✅ Contadores para estadísticas\n✅ Mensajes informativos\n\nEsto es similar a cómo funcionan Spotify, YouTube Music o cualquier reproductor real.',
      challenge:
        'Crea tu propio sistema de reproducción avanzado:\n• 15 canciones total\n• Salta las canciones 3, 7 y 11 (usa continuar)\n• Detente cuando hayas reproducido 10 canciones (usa romper)\n• Cuenta cuántas reprodujiste y cuántas saltaste\n• Muestra estadísticas al final con formato claro',
      summary:
        "🎉 ¡Felicitaciones! Ahora dominas los bucles:\n\n**Tipos de bucles:**\n• **mientras**: Repite mientras condición sea verdadera\n• **para**: Cuando sabes cuántas repeticiones exactas\n\n**Control de flujo:**\n• **romper**: Detiene el bucle inmediatamente\n• **continuar**: Salta a la siguiente iteración\n\n**Consejos:**\n⚠️ Siempre modifica la variable de condición (evita bucles infinitos)\n✅ Usa 'para' con contadores, 'mientras' con condiciones\n✅ romper para búsquedas, continuar para filtros\n✅ Bucles anidados: uno dentro de otro\n\n💡 Los bucles son fundamentales para:\n• Recorrer listas\n• Repetir tareas\n• Hacer cálculos acumulativos\n• Buscar elementos\n\n¡Siguiente: aprende sobre listas y arrays!",
      validation: {
        requiredCode: [
          '/15/',
          '/mientras|para\\s*\\(/',
          '/3.*7.*11|3.*11.*7|7.*3.*11|7.*11.*3|11.*3.*7|11.*7.*3/',
          '/continuar/',
          '/10/',
          '/romper/',
          '/reproducidas|reproducido/i',
          '/saltadas|saltado/i',
        ],
      },
    },
  ],
};
