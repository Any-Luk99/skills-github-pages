export interface ViralHookCard {
  id: string;
  angle: string;
  platformFocus: string;
  onScreenHook: string;
  visualAction: string;
  captionCTA: string;
}

export const VIRAL_HOOKS: ViralHookCard[] = [
  {
    id: 'h1',
    angle: 'Pin Magnético (Tráfico Pasivo)',
    platformFocus: 'Pinterest & Google Imágenes',
    onScreenHook:
      '“Plantilla Excel de Finanzas que calcula compras en cuotas de tarjeta y no se rompe”',
    visualAction:
      'Pin vertical (1000×1500 px) en Canva, fondo Azul Medianoche #0A0F1D, mockup de laptop con el dashboard y etiqueta Cyan “Descarga Inmediata”.',
    captionCTA:
      'Diseñada para registrar gastos en 60 segundos sin fórmulas complicadas. Por Ábaco Digital ↗ Consíguela en el enlace de la tienda.',
  },
  {
    id: 'h2',
    angle: 'Post de Valor en Comunidad',
    platformFocus: 'Grupos de Facebook / LinkedIn / Discord',
    onScreenHook:
      '“Armé esta calculadora en Excel para calcular mi precio por hora real sin perder plata por comisiones de tarjeta o impuestos”',
    visualAction:
      'Captura limpia de la calculadora con datos de ejemplo y link a la versión gratuita en Payhip.',
    captionCTA:
      'La comparto gratis con la comunidad por si a alguien más le sirve para cotizar a sus clientes sin regalar el trabajo.',
  },
  {
    id: 'h3',
    angle: 'Galería Oficial de Notion',
    platformFocus: 'Notion Marketplace (@notion.so/templates)',
    onScreenHook:
      'Planner “Mente en Calma”: Modo Alta Energía vs. Modo Batería Baja para mentes con TDAH',
    visualAction:
      'Captura limpia en tonos Avena y Salvia mostrando el botón interactivo nativo de reseteo en 1 clic.',
    captionCTA:
      'Duplicá la versión gratuita y organizá tu semana sin carteles rojos de tareas vencidas. Colección Ábaco Calm ●',
  },
  {
    id: 'h4',
    angle: 'Comparación Visual ATS',
    platformFocus: 'LinkedIn & Foros de Empleo Remoto',
    onScreenHook:
      '“Por qué el 80% de los CVs hechos con columnas en Canva son descartados por robots de RR.HH. (y cómo pasar el filtro)”',
    visualAction:
      'Imagen dividida: lado izquierdo CV gráfico ilegible para ATS; lado derecho plantilla Word ejecutiva 100% escaneable.',
    captionCTA:
      'Dejé el modelo editable en Word listo para descargar en mi catálogo. Colección Ábaco Pulse ▦',
  },
  {
    id: 'h5',
    angle: 'Estado de WhatsApp / Telegram',
    platformFocus: 'Contactos Cercanos & Clientes Locales',
    onScreenHook:
      '“Para los que siempre me preguntan cómo organizo las finanzas y los gastos de las tarjetas... armé este Excel bimonetario ultra fácil”',
    visualAction:
      'Mini clip o captura mostrando el saldo automático y las cuotas organizadas por mes.',
    captionCTA:
      'Si a alguien le sirve para ordenar este mes, me avisa por privado y le paso el link con descuento especial. Ábaco Digital ✦',
  },
  {
    id: 'h6',
    angle: 'Pin Educativo “Antes vs Después”',
    platformFocus: 'Pinterest Search SEO',
    onScreenHook:
      '“Antes: 25 menús desordenados en Notion que dan pereza. Después: 3 prioridades diarias y calma mental.”',
    visualAction:
      'Pin vertical con estética editorial, tipografía grande y legible desde el celular.',
    captionCTA:
      'Simplificá tu vida diaria con este sistema minimalista. Link directo en mi perfil. ↗',
  },
];

export interface MasterPrompt {
  id: string;
  badge: string;
  title: string;
  usedOnDays: number[];
  whenToUse: string;
  buildPrompt: (params: {
    nicheName: string;
    toolName: string;
    brandName: string;
    collection: string;
    priceUSD: number;
  }) => string;
}

export const MASTER_PROMPTS: MasterPrompt[] = [
  {
    id: 'p1-architect',
    badge: 'PASO 1 · CONSTRUCCIÓN RÁPIDA',
    title: 'Arquitecto de Plantilla Anti-Quejas (Estructura + Fórmulas)',
    usedOnDays: [4, 15],
    whenToUse: 'Días 4 y 15. La IA diseña todo el esqueleto técnico antes de que abras Canva, Excel o Notion.',
    buildPrompt: ({ nicheName, toolName, collection, priceUSD }) => `Actúa como Arquitecto Senior de Productos Digitales best-seller valuados en $${priceUSD} USD para la marca "Ábaco Digital".
Voy a construir una plantilla de la Colección ${collection} enfocada en: "${nicheName}", usando principalmente ${toolName} (nivel intermedio, intuitiva y a prueba de errores).

Los compradores de este nicho se quejan repetidamente de:
1) Sistemas gigantescos con 15 pestañas que dan pereza y se abandonan rápido.
2) Textos falsos en latín ("Lorem Ipsum") sin ejemplos reales.
3) Fórmulas que se rompen al borrar filas o diseños con elementos bloqueados de pago.

Hacé el trabajo pesado por mí y entregame:
1. NOMBRE COMERCIAL con la fórmula "Producto — Colección Ábaco ${collection} — ${toolName}" + subtítulo de beneficio inmediato.
2. ARQUITECTURA DE MÁXIMO 3 SECCIONES O PESTAÑAS: qué lleva cada una y por qué.
3. ${
      toolName === 'Excel'
        ? 'FÓRMULAS EXACTAS EN ESPAÑOL E INGLÉS para Excel y Google Sheets (SUMAR.SI.CONJUNTO, SI.ERROR, formato condicional suave) listas para copiar, indicando qué celdas debo proteger con bloqueo.'
        : toolName === 'Notion'
        ? 'ESTRUCTURA EXACTA DE BASES DE DATOS EN NOTION: propiedades indispensables, vistas limpias y cómo configurar 2 Botones Nativos que resuelvan la frustración del comprador.'
        : 'ESTRUCTURA DE PÁGINAS (para Canva o Word) con el TEXTO PERSUASIVO REAL redactado entre corchetes rellenables [Así] para que el cliente nunca vea una hoja vacía.'
    }
4. LA MINI-VERSIÓN GRATUITA (15% del producto) que pueda recortar en 10 minutos para usar como imán de prospectos, con el texto exacto del banner interno de venta.
5. Reglas visuales de la Colección ${collection}: colores hex, tipografías y elementos gráficos a usar para que la plantilla sea coherente con Ábaco Digital.`,
  },
  {
    id: 'p2-realcopy',
    badge: 'PASO 2 · CONTENIDO INTERNO',
    title: 'Rellenador de Ejemplos Reales y Micro-Instrucciones (Cero Lorem Ipsum)',
    usedOnDays: [6, 17],
    whenToUse: 'Días 6 y 17. Para rellenar la plantilla con textos guía que justifican un precio alto.',
    buildPrompt: ({ nicheName, toolName, collection, brandName }) => `Actuá como diseñador instruccional y redactor experto de la marca "${brandName}".
Estoy creando mi plantilla de "${nicheName}" en ${toolName}, Colección ${collection}. Quiero que cuando mi cliente la abra entienda cómo usarla en 30 segundos sin ver tutoriales eternos.

Redactá para copiar y pegar directo en mi plantilla:
1. MENSAJE DE BIENVENIDA DE 4 LÍNEAS: cálido, con la voz de Ábaco Digital, y los 3 pasos indispensables para arrancar.
2. 5 CASOS / FILAS DE EJEMPLO REALISTAS (con números y situaciones cotidianas hispanas) para que el comprador entienda cómo funciona antes de vaciarla.
3. MICRO-INSTRUCCIONES DE 1 LÍNEA (tooltips) para colocar arriba de cada sección clave.
4. PIE DE PÁGINA con el nombre de "${brandName}", los símbolos de marca (● ↗ ✦) y enlace a la tienda para ver más productos.`,
  },
  {
    id: 'p3-salespage',
    badge: 'PASO 3 · PÁGINA EN PAYHIP',
    title: 'Página de Ventas para Payhip (Directa, Clara y Sin Humo)',
    usedOnDays: [7, 18, 25],
    whenToUse: 'Días 7, 18 y 25. Para convertir visitas de Pinterest y comunidades en compradores.',
    buildPrompt: ({ nicheName, toolName, collection, brandName, priceUSD }) => `Actuá como redactor publicitario especializado en productos digitales útiles ($${priceUSD} USD).
Escribí la descripción de la página de producto para Payhip de mi plantilla de "${nicheName}" hecha en ${toolName}, Colección ${collection}, bajo la marca "${brandName}".

Estructura requerida:
1. TÍTULO CLARO + GANCHO DE RESULTADO EN 60 SEGUNDOS.
2. SECCIÓN "¿CANSADO DE ESTO?": 3 frustraciones reales que viven hoy los compradores de plantillas tradicionales.
3. POR QUÉ ESTA PLANTILLA ES DISTINTA: cómo resuelve esas quejas punto por punto.
4. QUÉ INCLUYE TU DESCARGA INMEDIATA (viñetas que eleven el valor percibido por encima de $${priceUSD * 3} USD).
5. PARA QUIÉN SÍ ES vs. PARA QUIÉN NO ES (honestidad absoluta = confianza).
6. 4 PREGUNTAS FRECUENTES (¿Necesito versión paga de ${toolName}? No, funciona 100% gratis / ¿Es pago único? Sí, de por vida / ¿Cómo lo recibo? Al instante por correo / ¿Sirve desde el celular?).`,
  },
  {
    id: 'p4-pinterest-seo',
    badge: 'PASO 4 · TRÁFICO PASIVO SIN TIKTOK',
    title: 'Fábrica de 10 Pines de Pinterest con Palabras Clave de Búsqueda',
    usedOnDays: [11, 12, 25],
    whenToUse: 'Días 11, 12 y 25. Para tener 10 títulos y descripciones optimizadas para posicionar en Google y Pinterest.',
    buildPrompt: ({ nicheName, toolName, collection }) => `Actuá como especialista en Pinterest SEO y marketing de tráfico pasivo para productos digitales.
NO uso TikTok ni grabo videos bailando. Uso Pinterest con Pines verticales estáticos diseñados en Canva apuntando directo a mi tienda en Payhip.

Mi producto es una plantilla de "${nicheName}" creada en ${toolName}, Colección ${collection} de Ábaco Digital.
Generá una tabla con 10 IDEAS DE PINES DE PINTEREST que atraigan tráfico constante de búsqueda orgánica durante meses:

Para cada Pin dame:
- TEXTO PRINCIPAL DEL PIN (tipografía grande, legible en 3 segundos desde el celular).
- SUBTÍTULO O FRASE GANCHO.
- TÍTULO SEO PARA PINTEREST (con palabras clave reales que busca la gente en Google/Pinterest).
- DESCRIPCIÓN CON PALABRAS CLAVE (2-3 oraciones que inviten a hacer clic en el enlace).
- 5 ETIQUETAS / HASHTAGS DE ALTO VOLUMEN DE BÚSQUEDA.
- Paleta y tipografía a usar según la Colección ${collection} (Azul Noche + Naranja Señal como acento, o la paleta de la colección).`,
  },
  {
    id: 'p5-pdf-delivery',
    badge: 'PASO 5 · PDF ENTREGABLE & RESEÑAS',
    title: 'Guía PDF de Entrega en Canva + Invitación a Reseña 5 Estrellas',
    usedOnDays: [7, 18],
    whenToUse: 'Días 7 y 18. Para diseñar en Canva la hoja que descarga el cliente automáticamente al pagar.',
    buildPrompt: ({ nicheName, toolName, collection, brandName }) => `Estoy armando en Canva el PDF entregable de 1 sola página para los clientes que compran mi plantilla de "${nicheName}" (${toolName}), Colección ${collection}, en la tienda "${brandName}".

Redactá el contenido exacto y ordenado:
1. Encabezado de bienvenida y agradecimiento por su compra.
2. Texto para el BOTÓN PRINCIPAL de acceso a la plantilla + instrucción vital (en Excel: "Descargar archivo .xlsx o Guardar copia en Google Drive"; en Notion: "Hacer clic en Duplicar arriba a la derecha").
3. 3 Recomendaciones breves para configurar todo en sus primeros 5 minutos.
4. Invitación cordial a dejar una calificación positiva en la tienda a cambio de un cupón de 30% OFF para su próxima compra en "${brandName}".
5. Nota de marca al pie con los símbolos ● ↗ ✦ y el nombre de la colección.`,
  },
  {
    id: 'p6-english-scale',
    badge: 'PASO 6 · ESCALA EN DÓLARES',
    title: 'Traducción y Adaptación Cultural al Mercado Anglosajón ($27–39 USD)',
    usedOnDays: [24],
    whenToUse: 'Día 24. Para adaptar tu plantilla ganadora al mercado en inglés y duplicar el precio.',
    buildPrompt: ({ nicheName, toolName }) => `Tengo mi plantilla validada en español sobre "${nicheName}" en ${toolName}. Ahora quiero adaptarla al mercado de EE.UU. y Reino Unido para venderla entre $27 y $39 USD sin que suene a traducción automática.

1. Dame los términos nativos exactos que buscan los compradores de EE.UU. para esta plantilla (ej. "Sinking Funds Tracker", "Freelance Client Portal", "Clean ADHD Daily Dashboard").
2. Traducí y adaptá culturalmente las secciones clave de la plantilla.
3. Generá 5 títulos de Pines de Pinterest en inglés con alto volumen de búsqueda en Google para atraer compradores en dólares pasivamente.
4. Dame el nombre del producto en inglés con formato profesional para el mercado anglosajón.`,
  },
  {
    id: 'p7-email',
    badge: 'PASO 7 · EMAIL DE REACTIVACIÓN',
    title: 'Email a quienes descargaron la muestra gratis (Cupón 48h)',
    usedOnDays: [22, 28],
    whenToUse: 'Días 22 y 28. Para convertir descargas gratuitas en compradores de la versión Pro.',
    buildPrompt: ({ nicheName, toolName, collection, brandName, priceUSD }) => `Actuá como copywriter de email marketing para productos digitales de Ábaco Digital.
Escribí UN email corto (máximo 180 palabras) para enviar desde Payhip a todas las personas que descargaron GRATIS la mini versión de mi plantilla de "${nicheName}" (${toolName}, Colección ${collection}).

Objetivo: que compren la versión completa ($${priceUSD} USD) con un cupón de 20% OFF válido por 48 horas.

Estructura:
1. ASUNTO con beneficio concreto (nada de "¡OFERTA!").
2. Apertura empática de 1 línea (sin sonar a robot).
3. UN consejo de valor real que puedan aplicar hoy con lo que ya tienen.
4. Presentación de la versión completa en 3 viñetas (qué gana que la gratis no tiene).
5. Llamado a la acción con el cupón y la urgencia real de 48 horas.
6. Firma cálida de "${brandName}" con los símbolos ● ↗.`,
  },
];
