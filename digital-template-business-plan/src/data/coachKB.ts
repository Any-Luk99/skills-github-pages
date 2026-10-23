export type TabId = 'roadmap' | 'niches' | 'platforms' | 'viral' | 'prompts' | 'price' | 'brand';

export interface CoachEntry {
  id: string;
  keywords: string[];
  answer: string;
  tab?: TabId;
  tabLabel?: string;
}

export const COACH_KB: CoachEntry[] = [
  {
    id: 'precio',
    keywords: ['cuanto cobro', 'precio', 'cuanto vale', 'cuanto pido', 'cuanto poner', 'a cuanto', 'valor de mi', 'tarifa', 'calculadora'],
    answer:
      'Usá la CALCULADORA DE PRECIO (pestaña 6): elegís herramienta, complejidad, cantidad de archivos, tipo de cliente, colección, mercado y extras, y te devuelve el rango y el precio recomendado con tu ganancia neta en Payhip. Regla rápida mientras tanto: Consumidor final hispano $12–19 USD · Freelancer/profesional $19–27 USD · Negocio B2B $27–39 USD · Mercado inglés +30–50%.',
    tab: 'price',
    tabLabel: 'Abrir la Calculadora de Precio',
  },
  {
    id: 'payhip',
    keywords: ['payhip', 'comision', 'cuanto se queda', 'plan gratis', 'tarifa de la tienda'],
    answer:
      'Payhip plan Free: $0 fijo por mes y 5% por venta, con pago INSTANTÁNEO directo a tu PayPal. En una venta de $19 te quedan ~$17.2. Es la mitad de comisión que Gumroad y sin retención de fondos. Es tu caja principal del mes 1 al 12.',
    tab: 'platforms',
    tabLabel: 'Ver comparativa de plataformas',
  },
  {
    id: 'gumroad',
    keywords: ['gumroad'],
    answer:
      '¿Gumroad va o no? NO. Cobra 10% + $0.50 por venta (y hasta 30% si entrás por su buscador Discover) y retiene pagos varios días. En una venta de $15 te queda ~$12.50 vs ~$13.80 en Payhip, con el agravante de la demora. Quedó descartado por tu coach para no perder margen innecesario.',
    tab: 'platforms',
    tabLabel: 'Ver el análisis completo',
  },
  {
    id: 'etsy',
    keywords: ['etsy'],
    answer:
      'Etsy: NO en el Día 1 (cobra $15–29 USD de apertura + $0.20 por listado y su pasarela está restringida en varios países de LATAM). SÍ en el Mes 2: cuando ya cerraste el mes con +$100 USD ganados, abrila con ESOS dólares (no de tu bolsillo) y cargá tu plantilla ganadora en inglés. Ahí sí es una mina de oro.',
    tab: 'platforms',
    tabLabel: 'Ver la comparativa',
  },
  {
    id: 'paypal',
    keywords: ['paypal', 'cuenta paypal', 'abrir paypal'],
    answer:
      'PayPal en 4 pasos (Día 2 del plan): 1) Cuenta Business con tus datos REALES de DNI. 2) Tipo "Propietario único / Individual". 3) Poné "Ábaco Digital" en "Nombre comercial" → el recibo del cliente muestra tu marca, no tu apellido. 4) Vinculá la Mastercard Internacional de Ualá y confirmá el código de 4 dígitos. Todo gratis.',
    tab: 'platforms',
    tabLabel: 'Ver tutorial Ualá + PayPal',
  },
  {
    id: 'uala',
    keywords: ['uala', 'tarjeta uala', 'mastercard uala'],
    answer:
      'Tu Ualá cumple 3 roles: 1) Su Mastercard Internacional verifica PayPal (la micro-carga de $1.95 USD te la devuelven). 2) Su CVU recibe tus retiros en pesos desde Airtm/Saldo. 3) Ualá Bis te deja cobrar en pesos a locales sin tarjeta internacional. Con una sola app cerrás el circuito completo.',
    tab: 'platforms',
    tabLabel: 'Ver guía paso a paso',
  },
  {
    id: 'retiro',
    keywords: ['retirar', 'cobrar', 'pasar a pesos', 'pesos', 'transferir', 'llegar el dinero'],
    answer:
      'Retiro inteligente: no saques por cada venta (los $0.30 de fee + el spread te comen el margen). Acumulá lotes de $45–80 USD y pasalos de PayPal a tu CVU de Ualá usando una plataforma puente legal como Airtm o Saldo.com.ar: cotización financiera competitiva y depósito en minutos. El retiro bancario tradicional SWIFT NO lo toques: $20–40 de comisión por transferencia chica.',
    tab: 'platforms',
    tabLabel: 'Ver el paso 5 del tutorial',
  },
  {
    id: 'pseudonimo',
    keywords: ['pseudonimo', 'nombre real', 'mi nombre', 'aparece mi nombre', 'identidad', 'anonyma', 'anonima', 'quien soy'],
    answer:
      '100% PSEUDÓNIMO de cara al público. Tu nombre legal queda SOLO en el backend financiero (PayPal, Ualá, Payhip) donde es obligatorio. En el frontend (tienda, recibos, archivos, Notion) vive tu marca Ábaco Digital: cambiá el "Autor" en Archivo → Información de Excel/Word y el título del workspace de Notion antes de compartir. Nadie, jamás, ve tu apellido.',
    tab: 'platforms',
    tabLabel: 'Ver el protocolo completo',
  },
  {
    id: 'tiktok',
    keywords: ['tiktok', 'tik tok', 'tendencia'],
    answer:
      'No necesitás TikTok: tu plan es 100% CERO TIKTOK. Las 3 fuentes que venden sin redes efímeras son: 1) Pinterest SEO (pines que indexan en Google y venden meses después), 2) Notion Marketplace / Canva Community (millones de búsquedas internas), 3) Comunidades de Facebook/LinkedIn + WhatsApp en pesos. Un pin rinde 6 meses; un clip de TikTok, 24 horas.',
    tab: 'viral',
    tabLabel: 'Ver estrategia sin TikTok',
  },
  {
    id: 'publicidad',
    keywords: ['promocion', 'publicidad', 'anuncios', 'pagar', 'invertir en', 'meta ads', 'anunciar'],
    answer:
      'En el Mes 1: CERO publicidad pagada. Tu motor es orgánico (Pinterest SEO + comunidades + galería oficial + WhatsApp). Los anuncios se evalúan recién cuando tengas 30+ ventas orgánicas y un ticket promedio probado: ahí, $20–30 de test en Pinterest Ads sobre el producto ganador. Antes de eso, es quemar lo que no tenés.',
    tab: 'viral',
    tabLabel: 'Ver el motor de tráfico',
  },
  {
    id: 'novende',
    keywords: ['no vende', 'nadie compra', 'cero ventas', 'no me compra', 'no entra', 'no vendo'],
    answer:
      'Diagnóstico de coach en 2 preguntas: ¿Cuántas VISITAS tiene tu Payhip? Si son ~0 → el problema es TRÁFICO (más pines diarios + más grupos activos + muestra gratis en estados). Si hay visitas pero 0 compras → el problema es MENSAJE o PRECIO (mejor mockup, descripción con el Prompt #3, y subí la muestra gratis arriba del link de pago). El 90% de los "no vende" es el primer caso: simplemente nadie la vio todavía. La paciencia dura 2–3 semanas, después se dispara.',
    tab: 'viral',
    tabLabel: 'Ver el motor de tráfico',
  },
  {
    id: 'tiempo',
    keywords: ['no tengo tiempo', '1 hora', '60 minutos', 'falta un dia', 'me salteo', 'ocupada', 'demora'],
    answer:
      'Tu regla es 1 hora santa, y el temporizador de arriba (visible en todas las pestañas) es tu guardia: cuando suena, se para. ¿Fallaste un día? Nada se rompe: el plan tiene buffer (Día 30) y los canales pasivos (Pinterest, galería) siguen trabajando solos mientras descansás. Un mes de 25 horas trabajadas de 30 posibles sigue siendo un negocio. Lo único que no perdonás es saltarte 4 días seguidos.',
    tab: 'roadmap',
    tabLabel: 'Ver el plan',
  },
  {
    id: 'canvaproy',
    keywords: ['canva pro', 'elementos pro', 'coronita', 'canva gratis', 'sin canva pro'],
    answer:
      'Regla no negociable: TODAS tus plantillas se construyen 100% con Canva GRATIS (fuentes y elementos sin coronita). Es la queja #1 de las tiendas de Canva: "compré el pack y la mitad no se descarga sin suscripción". Si lo tuyo funciona sin Canva Pro, el comprador lo nota, lo agradece y lo cuenta. Canva Pro $29/mes recién se evalúa en Mes 2, y solo con plata ganada.',
    tab: 'niches',
    tabLabel: 'Ver el nicho de Canva',
  },
  {
    id: 'coleccion',
    keywords: ['coleccion', 'pulse', 'calm', 'elite', 'core', 'que color', 'paleta', 'colores'],
    answer:
      'Tenés 4 colecciones bajo una sola identidad Ábaco Digital: PULSE (Tech-Pop, emprendedores y contenido), CALM (zen, hábitos y estudiantes), ÉLITE (editorial premium, belleza y B2B: se cobra más caro), CORE (dark mode finanzas y sistemas). El logo NO cambia nunca: solo cambian los colores de la plantilla. Regla de distribución: 60% fondo, 25% azul cobalto, 10% grafito y 5% naranja como acento.',
    tab: 'brand',
    tabLabel: 'Ver el Kit de Marca completo',
  },
  {
    id: 'logo',
    keywords: ['logo', 'marca', 'identidad', 'tipografia', 'sora', 'fuente', 'nombre de usuario', 'usuario', 'correo', 'gmail', 'bio'],
    answer:
      'Tu marca es ÁBACO DIGITAL: símbolo de 3 líneas + 3 cuentas naranja en diagonal ascendente sobre azul noche (#0E1B3D y #FF5A36, siempre 2 colores). Tipografías: Sora para títulos, DM Sans para textos. Usuario: @abaco.digital (o @somosabacodigital). Correo: hola.abacodigital@gmail.com. Frase: "Plantillas que ordenan ideas y activan negocios". En la pestaña 7 tenés el kit completo con los pasos para armarlo gratis en Canva.',
    tab: 'brand',
    tabLabel: 'Ver el Kit de Marca',
  },
  {
    id: 'sheets',
    keywords: ['excel', 'google sheets', 'sheets', 'planilla'],
    answer:
      'Tu Excel se publica en dos espejos: el archivo .xlsx (para escritorio) y una copia en Google Sheets (para abrir desde el celular, que es donde el 60% la va a usar). Se arma una sola vez y se duplica: la fórmula funciona igual en ambos. En la descripción de venta decilo explícito: "Funciona en Excel Y Google Sheets desde el celular".',
    tab: 'niches',
    tabLabel: 'Ver el nicho Excel',
  },
  {
    id: 'notiongallery',
    keywords: ['notion marketplace', 'galeria', 'aprobacion', 'canva community', 'submit'],
    answer:
      'La galería oficial (Notion Creators o Canva Community) tarda 2–5 días hábiles en aprobar. Para que te pasen a la primera: portada minimalista sin textos de venta, descripción con keywords reales, y la plantilla funcionando SIN errores. Es el canal "configurar y olvidar": una vez aprobada, trae compradores sola todos los días. Si te rechazan, leen el motivo, lo corrigen y vuelven a mandar.',
    tab: 'viral',
    tabLabel: 'Ver canal paso a paso',
  },
  {
    id: 'ingles',
    keywords: ['ingles', 'traducir', 'traduccion', 'mercado en ingles', 'estadounidense'],
    answer:
      'Inglés = Día 24, y solo con la GANADORA (la que ya vende en español). Con el Prompt #6 la IA hace la traducción CULTURAL (no literal): "gastos hormiga" no se traduce, se convierte en "small everyday expenses that add up". Precio EN: +30–50% (así es el mercado, no es que tu trabajo valga menos). El mismo producto en 2 idiomas = 2 mercados por 60 minutos de trabajo.',
    tab: 'prompts',
    tabLabel: 'Abrir el Prompt #6',
  },
  {
    id: 'impuestos',
    keywords: ['impuesto', 'monotributo', 'afip', 'declarar', 'legal', 'tributo'],
    answer:
      'Seamos honestas: yo soy tu coach de negocio, no tu contadora. En Argentina, ventas digitales recurrentes eventualmente entran en monotributo/ingresos brutos. Acción concreta: con tus primeros $100–200 USD MENSUALES estables (probablemente Mes 2–3), consultá con un contador (muchos atienden online por $15–30 USD). Hasta ese umbral, estás bajo los mínimos; pero NO pospongas la consulta para siempre: regularizar a tiempo es barato, después es caro.',
  },
  {
    id: 'primera',
    keywords: ['primera venta', 'cuando vendo', 'cuando gano', 'cuanto demora'],
    answer:
      'Con el plan acelerado, la ventana real es el Día 7 al 14. La primera venta casi siempre viene por WhatsApp/contactos conocidos (Día 10) pagando en pesos, porque la confianza ya existe. La primera venta "fría" (extraña de internet) suele llegar entre el Día 12 y 21 por Pinterest o por el imán gratis. Si al Día 14 no hay nada: no es un fracaso, es diagnóstico (revisá la pestaña de tráfico y duplicá pines + grupos).',
    tab: 'roadmap',
    tabLabel: 'Ver días 8 a 14',
  },
  {
    id: 'bump',
    keywords: ['order bump', 'bump', 'combo', 'bundle', 'cross-sell', 'carrito'],
    answer:
      'Order Bump = la cajita en el carrito de Payhip que ofrece el 2do producto por +$9 (40% OFF). Convierte al 25–30% de los compradores y se configura UNA vez. El Bundle (los 2 juntos con 25% OFF) es otra lista aparte: la usás en pines y posts. Juntos, suben tu ticket promedio de $15 a $24–27 sin trabajar un minuto más. Día 19 del plan lo activa todo.',
    tab: 'roadmap',
    tabLabel: 'Ver el Día 19',
  },
  {
    id: 'gratis',
    keywords: ['gratis', 'muestra', 'lead magnet', 'regalar', 'descarga gratuita'],
    answer:
      'La muestra gratis es tu mejor vendedora: el 15% del producto (una función ÚTIL de verdad, no un trozo roto) + un banner elegante "versión completa con 20% OFF → link". Se sube a $0 en Payhip con captura de email. Meta: 100 descargas en la semana 2. Conversión esperada a Pro: 3–8% con el email del Día 22. Nunca regalés el 60%: la completa debe sentirse claramente más.',
    tab: 'viral',
    tabLabel: 'Ver la mecánica del imán',
  },
  {
    id: 'email',
    keywords: ['email', 'mailing', 'clientes', 'suscriptores', 'cupon'],
    answer:
      'Emails del mes 1: solo 2 (Días 22 y 28) con el Prompt #7. Día 22: valor real + cupón 48h de 20% a quienes descargaron la muestra. Día 28: "última hora". No mandes más: un email bien hecho gana a tres mediocres, y Payhip te envía gratis a tu lista. El asunto debe abrirse por un beneficio concreto, no por "¡OFERTA!".',
    tab: 'prompts',
    tabLabel: 'Abrir el Prompt #7',
  },
  {
    id: 'pinterest',
    keywords: ['pinterest', 'pin', 'pines'],
    answer:
      'Pinterest = buscador visual, no red social. Reglas: cuenta BUSINESS (con analítica), pines 1000×1500 con tipografía GRANDE, títulos y descripciones con palabras clave de búsqueda real ("plantilla excel gastos cuotas"), 2 pines por día espaciados, link directo a Payhip. No borres pines "fracasados": Pinterest madura en 2–4 semanas. Es tu canal que vende mientras dormís.',
    tab: 'viral',
    tabLabel: 'Ver los textos listos',
  },
  {
    id: 'logo2',
    keywords: ['cuanto tardo el logo', 'perfeccionismo', 'no me gusta mi logo', 'diseño de marca'],
    answer:
      'Regla de los 10 minutos: en Canva, 3 opciones de logo tipográfico + 2 paletas de 3 colores, y se elige en el mismo día. Si llevás más de 10 minutos, es parálisis del análisis disfrazada de "perfeccionismo". La marca vende por lo que resuelve, no por el logo. Tu Biblia de Marca (Día 1) congela la decisión y te libera para siempre.',
    tab: 'brand',
    tabLabel: 'Ver el Kit de Marca',
  },
  {
    id: 'ia',
    keywords: ['chatgpt', 'claude', ' ia', 'prompt', 'prompts', 'inteligencia artificial', 'generativa'],
    answer:
      'Tu "mano de IA" trabaja con los 7 Prompts Maestros de la pestaña 5: ya están personalizados con Ábaco Digital, tu nicho, herramienta, colección y precio (cambiá los selectores y se reescriben solos). Cada prompt indica EN QUÉ DÍA del plan se usa: #1 arquitectura (Días 4 y 15), #2 textos (6 y 17), #3 venta (7, 18 y 25), #4 pines (11, 12 y 25), #5 PDF (7 y 18), #6 inglés (24), #7 email (22 y 28).',
    tab: 'prompts',
    tabLabel: 'Abrir la Bóveda de Prompts',
  },
  {
    id: 'error',
    keywords: ['error', 'no funciona', 'se rompio', 'rotas', 'formula', 'se queda', 'bug', 'celda'],
    answer:
      'Pegame acá mismo la fórmula o el error con el nombre del rango (ej: "=SUMAR.SI(B2:B100;"...#¡VALOR!") y te la resuelvo al toque. Regla general: el 90% de los errores de plantillas viene de 3 causas: texto donde va número, fechas en formato texto, y comas vs punto y coma según el país (Excel en español usa ; no ,). Contame cuál es y lo cerramos.',
  },
  {
    id: 'empezar',
    keywords: ['empezar', 'por donde', 'que hago hoy', 'primer dia', 'arrancar', 'hoy que'],
    answer:
      'Hoy = Día 1: 10 min eligiendo UN nicho (pestaña 2), 10 min congelando la marca Ábaco Digital (pestaña 7), 12 min de Gmail de marca, 16 min de logo en Canva (máximo), 12 min escribiendo tu Biblia de Marca. En 1 hora tenés la identidad congelada. El resto de la semana tiene sus 60 minutos ya planificados en la pestaña 1: seguí el plan en orden, no saltees al Día 5.',
    tab: 'roadmap',
    tabLabel: 'Ver el Día 1',
  },
  {
    id: 'motivacion',
    keywords: ['aburrir', 'motiva', 'caer', 'desanimar', 'cansancio', 'rendirme', 'soledad'],
    answer:
      'Escuchame: vas a querer soltar entre el Día 9 y el 15. Ese es el valle normal del mes 1: los canales pasivos aún no rinden y las ventas no cayeron. Tu ancla no es la motivación, es el sistema: 60 minutos, temporizador, checklist. Los números del Día 27 (el retiro) son la recompensa diseñada del plan. Y recordá: ya pasaste el filtro más duro — la mayoría no sale del "pensarlo" al "hacerlo". Vos ya estás adentro.',
  },
  {
    id: 'saludo',
    keywords: ['hola', 'buenos dias', 'buenas', 'gracias', 'genial', 'perfecto'],
    answer:
      '¡Aca estoy, listísima! Preguntame lo que quieras sobre precios (tengo calculadora), PayPal/Ualá, nichos, qué pasa si no vende, cómo armar una plantilla, o "¿qué hago hoy?". Si tu duda no está en las respuestas preparadas, decime el contexto en una línea y te doy la jugada exacta de coach.',
  },
];

export const QUICK_QUESTIONS: string[] = [
  '¿Cuánto cobro por mi plantilla?',
  '¿Qué hago si no me vende?',
  '¿Cómo retiro el dinero de PayPal a Ualá?',
  '¿Qué colección uso para mi plantilla?',
  '¿Qué hago hoy (Día 1)?',
  '¿Gumroad o Payhip?',
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ');

export interface CoachReply {
  answer: string;
  tab?: TabId;
  tabLabel?: string;
}

export function askCoach(question: string): CoachReply {
  const q = normalize(question);
  let best: CoachEntry | null = null;
  let bestScore = 0;

  for (const entry of COACH_KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(normalize(kw))) score += normalize(kw).split(' ').length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (best) {
    return { answer: best.answer, tab: best.tab, tabLabel: best.tabLabel };
  }

  return {
    answer:
      'Buena pregunta, y no la tengo en mis respuestas rápidas. Dame una línea de contexto (¿de qué se trata? ¿qué intentaste?) y te respondo como coach. Mientras tanto, las pestañas ya tienen el 90% de lo que me suelen preguntar: plan día por día, quejas de nichos, cobros Ualá/PayPal, tráfico sin TikTok, prompts de IA, calculadora de precio y kit de marca.',
  };
}
