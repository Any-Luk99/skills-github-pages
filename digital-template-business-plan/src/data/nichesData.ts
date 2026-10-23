import { CollectionId } from './brand';

export type ToolName = 'Notion' | 'Excel' | 'Canva' | 'Word' | 'PowerPoint';

export interface RealComplaintItem {
  userQuote: string;
  sourceContext: string;
  theMissingElement: string;
  yourWinningSolution: string;
}

export interface NicheBlueprint {
  id: string;
  name: string;
  collection: CollectionId;
  officialProductName: string;
  categoryBadge: string;
  ticketUSD: string;
  priceRangeUSD: [number, number];
  recommendedPrice: number;
  demandScore: number;
  tools: ToolName[];
  primaryTool: ToolName;
  buildTimeHours: string;
  whoBuysIt: string;
  realComplaints: RealComplaintItem[];
  winningTemplateTitle: string;
  winningTemplateSubtitle: string;
  exactDeliverables: string[];
  fastSalesTactics: string;
}

export const NICHES_DATA: NicheBlueprint[] = [
  {
    id: 'freelance-client-kit',
    name: 'Sistemas Cierra-Clientes para Freelancers & Servicios',
    collection: 'Élite',
    officialProductName: 'Kit Cierra-Clientes — Colección Ábaco Élite — Notion + Canva + Excel',
    categoryBadge: 'EL MEJOR PAGO (B2B) · VENTA DIRECTA',
    ticketUSD: '$19 – $39 USD',
    priceRangeUSD: [19, 39],
    recommendedPrice: 27,
    demandScore: 98,
    tools: ['Notion', 'Excel', 'Canva'],
    primaryTool: 'Notion',
    buildTimeHours: '4.5 horas (Días 4 a 7)',
    whoBuysIt:
      'Diseñadores, community managers, programadores, arquitectos, redactores y consultores que pierden trabajos por mandar presupuestos informales o desordenados por WhatsApp.',
    realComplaints: [
      {
        userQuote:
          '“Pagué $25 por una propuesta comercial en Canva divina, pero venía con puro Lorem Ipsum. No tengo idea de qué escribir en la propuesta para que el cliente no me pida rebaja.”',
        sourceContext: 'Reseña de 1 estrella en marketplace de plantillas Canva',
        theMissingElement: 'Falta texto persuasivo real y justificación de tarifas.',
        yourWinningSolution:
          'La propuesta en Canva ya trae textos comerciales reales listos para rellenar ([Problema detectado], [Plan en 3 etapas], [Opción Básica vs Opción Pro]). Cero Lorem Ipsum.',
      },
      {
        userQuote:
          '“Compré un portal de Notion para mis clientes y cuando se los compartí no entendieron nada. Tenía 15 bases de datos conectadas y mi cliente me terminó pidiendo todo por email como siempre.”',
        sourceContext: 'Comentario recurrente en Reddit r/Notion sobre sobreingeniería',
        theMissingElement: 'Falta simplicidad extrema para el cliente final (no técnico).',
        yourWinningSolution:
          'Portal de Cliente en Notion de 1 sola página: banner limpio, Estado del proyecto (En progreso / Para revisión / Listo), links a entregables y botón grande para aprobar.',
      },
      {
        userQuote:
          '“Nunca sé cuánto cobrar la hora sin perder dinero cuando considero impuestos, comisiones bancarias y horas no facturables.”',
        sourceContext: 'Hilo de debate en comunidad freelance hispana',
        theMissingElement: 'Falta una herramienta matemática de costeo rápido.',
        yourWinningSolution:
          'Calculadora de Tarifas en Excel: cargás gastos fijos del mes y horas objetivo y te calcula el precio mínimo por hora y por proyecto con comisiones incluidas.',
      },
      {
        userQuote:
          '“Mando la propuesta y el cliente desaparece durante 2 semanas. No sé cómo hacer seguimiento sin parecer pesado o desesperado.”',
        sourceContext: 'Foro de profesionales independientes',
        theMissingElement: 'Falta protocolo de cierre y plantillas de mensaje.',
        yourWinningSolution:
          'Pack de 3 plantillas de emails y mensajes de WhatsApp de seguimiento elegante, listas para copiar.',
      },
    ],
    winningTemplateTitle: 'Kit Cierra-Clientes Pro: Propuesta de Ventas + Portal Notion + Cotizador Excel',
    winningTemplateSubtitle:
      'Estilo Ábaco Élite (editorial, premium). El cliente freelance recupera la inversión con 1 solo cliente cerrado.',
    exactDeliverables: [
      'Propuesta comercial en Canva (10 slides) con copy persuasivo escrito y psicología de precios (cero texto en latín).',
      'Portal de clientes en Notion listo para compartir con 1 clic (minimalista, anti-confusión).',
      'Calculadora de tarifa hora y rentabilidad en Excel/Google Sheets con celdas protegidas.',
      '3 guiones de mensajes para seguimiento comercial por WhatsApp o correo.',
    ],
    fastSalesTactics:
      'Semana 1 (sin TikTok): entrá a 2 grupos de freelancers o diseño en Facebook, LinkedIn o Discord y compartí GRATIS la Calculadora de Tarifas en Excel: “Armé esta planilla para calcular cuánto cobrar sin perder plata por comisiones”. Quien la descargue verá adentro el link para comprar el Kit completo.',
  },
  {
    id: 'bimonetary-finance-excel',
    name: 'Finanzas Anti-Caos: Control Bimonetario & Tarjetas en Cuotas',
    collection: 'Core',
    officialProductName: 'Control de Gastos Mensual — Colección Ábaco Core — Excel',
    categoryBadge: 'MÁS BUSCADO EN HISPANOAMÉRICA',
    ticketUSD: '$12 – $24 USD',
    priceRangeUSD: [12, 24],
    recommendedPrice: 15,
    demandScore: 99,
    tools: ['Excel', 'Notion'],
    primaryTool: 'Excel',
    buildTimeHours: '4 horas (Días 4 a 7)',
    whoBuysIt:
      'Cualquier persona que cobra sueldo en pesos o dólares, hace compras en cuotas con tarjeta y nunca sabe con exactitud cuánto dinero le quedará libre el próximo mes.',
    realComplaints: [
      {
        userQuote:
          '“Todas las plantillas de finanzas que encuentro en internet están pensadas para EE.UU.: suponen que pagás todo en 1 solo pago y no contemplan las compras en 3, 6 o 12 cuotas con tarjeta de crédito.”',
        sourceContext: 'Queja masiva en foros de finanzas personales de Argentina, México y Colombia',
        theMissingElement: 'No existe seguimiento real de cuotas futuras de tarjetas.',
        yourWinningSolution:
          'Pestaña “Control de Cuotas de Tarjeta”: cargás una sola vez la compra y automáticamente distribuye el monto en los meses correspondientes.',
      },
      {
        userQuote:
          '“Cobro parte en pesos y tengo unos ahorros en dólares. En las plantillas normales se mezcla todo y rompe los gráficos porque tienen signos fijos de $ o €.”',
        sourceContext: 'Consulta en r/excel sobre hojas bimonetarias',
        theMissingElement: 'Soporte multidivisa simple sin fórmulas imposibles.',
        yourWinningSolution:
          'Selector de moneda con cotización editable en 1 sola celda que convierte automáticamente tus saldos sin tocar fórmulas.',
      },
      {
        userQuote:
          '“Borré una fila de gastos y de repente toda la columna me dio error #¡REF! y #¡VALOR!. No sé arreglar Excel y perdí todo el mes.”',
        sourceContext: 'Reseña de 2 estrellas en tienda de hojas de cálculo',
        theMissingElement: 'Protección de celdas y fórmulas a prueba de errores de usuario.',
        yourWinningSolution:
          'Bloqueo con contraseña libre de todas las celdas con fórmulas. Solo se editan las casillas coloreadas en verde suave (“zona segura”).',
      },
      {
        userQuote:
          '“Tienen 12 pestañas y se ven horribles en la pantalla del celular. Al tercer día me da pereza prender la notebook y la dejo de usar.”',
        sourceContext: 'Comentarios de compradores sobre abandono de planillas',
        theMissingElement: 'Falta vista móvil rápida para anotar gastos en 15 segundos.',
        yourWinningSolution:
          'Dashboard “Carga Rápida 60 Segundos” optimizado para Google Sheets desde la app del celular.',
      },
    ],
    winningTemplateTitle: 'Control de Gastos Mensual Bimonetario + Rastreador Automático de Cuotas',
    winningTemplateSubtitle:
      'Estilo Ábaco Core (dark mode, sistemas, finanzas). Compatible con Excel de escritorio y Google Sheets móvil.',
    exactDeliverables: [
      'Archivo Excel (.xlsx) con Dashboard anual, Vista mensual y Calculadora de Cuotas futuras de tarjeta.',
      'Versión gemela en Google Sheets para abrir en el celular con un toque.',
      'Guía visual en PDF de 2 páginas con instrucciones para principiantes absolutos.',
    ],
    fastSalesTactics:
      'Semana 1 (sin TikTok): publicá 3 Pines verticales en Pinterest con palabras clave exactas (“plantilla excel finanzas cuotas tarjeta”, “control de gastos argentina pesos dólares”) y ofrecé la mini versión gratis en grupos de ahorro de Facebook.',
  },
  {
    id: 'adhd-notion-reset',
    name: 'Organizador TDAH & Mentes Dispersas “Reinicio Sin Culpa”',
    collection: 'Calm',
    officialProductName: 'Planner Mente en Calma — Colección Ábaco Calm — Notion',
    categoryBadge: 'ALTA CONVERSIÓN EN NOTION MARKETPLACE',
    ticketUSD: '$14 – $27 USD',
    priceRangeUSD: [14, 27],
    recommendedPrice: 17,
    demandScore: 96,
    tools: ['Notion', 'Canva'],
    primaryTool: 'Notion',
    buildTimeHours: '3.5 horas (Días 4 a 7)',
    whoBuysIt:
      'Estudiantes, profesionales creativos y personas con déficit de atención o procrastinación que compran agendas y las abandonan en pocos días.',
    realComplaints: [
      {
        userQuote:
          '“Descargué un ‘Segundo Cerebro’ en Notion y me causó un ataque de pánico: 20 menús desplegables, trackers de meditación y colores chillones. Tardaba más tiempo cargando datos que trabajando.”',
        sourceContext: 'Queja en el foro r/Notion sobre sobrecarga visual y cognitiva',
        theMissingElement: 'Falta minimalismo y bajo estímulo visual.',
        yourWinningSolution:
          'Regla de las “3 Prioridades del Día”: pantalla limpia en tonos neutros cálidos y sin distracciones.',
      },
      {
        userQuote:
          '“Si me enfermé o estuve agotada 3 días, cuando abro Notion tengo 25 tareas en rojo gritándome que estoy atrasada y me da tanta culpa que cierro la pestaña y nunca más vuelvo.”',
        sourceContext: 'Reseña de usuario neurodivergente sobre productos de productividad',
        theMissingElement: 'Falta un mecanismo de reseteo emocional.',
        yourWinningSolution:
          'Botón nativo de Notion “Día de Batería Baja / Reiniciar Sin Culpa”: un clic mueve las tareas vencidas a una bandeja de descanso sin alarmas rojas.',
      },
      {
        userQuote:
          '“Mi cabeza tiene 50 ideas desordenadas a la vez y si no las anoto en 5 segundos las olvido, pero las plantillas te piden llenar categoría, fecha, proyecto y tags.”',
        sourceContext: 'Comentario en comunidad de TDAH para adultos',
        theMissingElement: 'Falta botón de descarga mental instantánea (“Brain Dump”).',
        yourWinningSolution:
          'Bandeja de volcado rápido con 1 solo campo de texto para vaciar la mente sin categorizar.',
      },
    ],
    winningTemplateTitle: 'Planner Mente en Calma: Modo Alta Energía + Modo Batería Baja',
    winningTemplateSubtitle:
      'Estilo Ábaco Calm (zen, cálido, sin presión). Aprobado para Notion Marketplace Oficial.',
    exactDeliverables: [
      'Plantilla interactiva en Notion con Botones Nativos de reseteo rápido.',
      'Filtros inteligentes que ocultan el desorden automáticamente.',
      'Set de 10 portadas e íconos minimalistas hechos en Canva.',
    ],
    fastSalesTactics:
      'Semana 1 (sin TikTok): subila a la galería oficial de Notion Marketplace con la etiqueta gratis en su versión básica. Millones de usuarios la encuentran desde el buscador interno de Notion y el 5–8% hace clic en el enlace para adquirir la versión Pro.',
  },
  {
    id: 'content-machine-canva',
    name: 'Fábrica de Carruseles con Copy de Ventas para Marcas',
    collection: 'Pulse',
    officialProductName: 'Calendario de Contenido para Emprendedores — Colección Ábaco Pulse — Canva',
    categoryBadge: 'ALTO VOLUMEN EN PINTEREST',
    ticketUSD: '$15 – $29 USD',
    priceRangeUSD: [15, 29],
    recommendedPrice: 19,
    demandScore: 94,
    tools: ['Canva', 'Notion'],
    primaryTool: 'Canva',
    buildTimeHours: '4 horas (Días 4 a 7)',
    whoBuysIt:
      'Nutricionistas, inmobiliarias, psicólogas, coaches y marcas de productos que saben de su rubro pero pierden horas frente a la pantalla en blanco intentando diseñar.',
    realComplaints: [
      {
        userQuote:
          '“Compré un megapack de 200 plantillas en Canva y la mitad tenían elementos de Canva Pro que no podía descargar sin pagar la suscripción cara de Canva.”',
        sourceContext: 'La queja #1 más repetida en tiendas de plantillas de Canva',
        theMissingElement: 'Uso de elementos premium que frustran a usuarios con cuenta gratuita.',
        yourWinningSolution:
          'Garantía 100% Canva Free: cada tipografía, forma e ícono usado es de la biblioteca gratuita de Canva.',
      },
      {
        userQuote:
          '“Son todos diseños con frases motivacionales trilladas tipo ‘Nunca te rindas’. Yo vendo servicios y eso no me trae ningún cliente.”',
        sourceContext: 'Reseña de dueña de negocio independiente',
        theMissingElement: 'Falta copywriting y estructura de embudo de ventas.',
        yourWinningSolution:
          'Carruseles de 7 diapositivas guionados slide por slide (Gancho, Problema, Error común, Solución, Testimonio y Llamado a la Acción).',
      },
      {
        userQuote:
          '“Quise cambiar la tipografía y los colores a mi marca y se desacomodaron todos los títulos y cajas de texto.”',
        sourceContext: 'Queja sobre mala alineación en plantillas de diseño',
        theMissingElement: 'Falta diagramación estructurada con márgenes fijos.',
        yourWinningSolution:
          'Guías de diseño fijas y paletas de 1 clic integradas en la pestaña de estilos de Canva.',
      },
    ],
    winningTemplateTitle: 'Pack 20 Carruseles de Ventas en Canva + Banco de 100 Ganchos en Notion',
    winningTemplateSubtitle:
      'Estilo Ábaco Pulse (Tech-Pop, viral). Sin coronitas ni pagos extra: 100% editable con Canva Gratis.',
    exactDeliverables: [
      'Link de plantilla de Canva con 20 carruseles comerciales listos.',
      'Banco en Notion con 100 títulos ganchos probados.',
      'Video tutorial sin rostro de 3 minutos sobre cómo cambiar colores en 1 segundo.',
    ],
    fastSalesTactics:
      'Semana 1 (sin TikTok): creá 5 Pines de Pinterest mostrando el “Antes vs Después” del carrusel con enlace directo a tu Payhip. Pinterest es un motor de búsqueda visual donde la gente busca activamente “plantillas canva carruseles instagram”.',
  },
  {
    id: 'ats-cv-career-tracker',
    name: 'Kit Empleo Remoto en USD: CV Word Anti-Filtros ATS + Tracker',
    collection: 'Pulse',
    officialProductName: 'CV Profesional Moderno — Colección Ábaco Pulse — Word',
    categoryBadge: 'NECESIDAD URGENTE · VENTAS EN LINKEDIN',
    ticketUSD: '$11 – $22 USD',
    priceRangeUSD: [11, 22],
    recommendedPrice: 14,
    demandScore: 92,
    tools: ['Word', 'Excel', 'Notion'],
    primaryTool: 'Word',
    buildTimeHours: '3 horas (Días 4 a 7)',
    whoBuysIt:
      'Candidatos buscando trabajo remoto internacional o ascenso laboral cuyos currículums quedan atascados en filtros informáticos de RR.HH.',
    realComplaints: [
      {
        userQuote:
          '“Hice mi CV en Canva con dos columnas y barras de porcentaje de habilidades. Luego me enteré que el software de selección de la empresa no pudo leer el texto y me descartó automáticamente.”',
        sourceContext: 'Queja masiva de postulantes a trabajos corporativos y remotos',
        theMissingElement: 'Compatibilidad con sistemas ATS (Applicant Tracking Systems).',
        yourWinningSolution:
          'Plantilla ejecutiva en Word (.docx) de 1 columna con etiquetas de texto legibles por cualquier robot de reclutamiento.',
      },
      {
        userQuote:
          '“No sé qué verbos de acción poner en la experiencia laboral para sonar convincente y profesional.”',
        sourceContext: 'Comentarios en grupos de búsqueda de empleo',
        theMissingElement: 'Falta redacción orientada a logros y métricas.',
        yourWinningSolution:
          'Frases redactadas con formato estándar de la industria: [Verbo de impacto] + [Proyecto ejecutado] + [Resultado porcentual obtenido].',
      },
      {
        userQuote:
          '“Mando 30 postulaciones a la semana y cuando me contactan por WhatsApp no sé qué salario había pedido ni qué decía el aviso.”',
        sourceContext: 'Desorden organizativo durante la búsqueda laboral',
        theMissingElement: 'Falta control del proceso de entrevistas.',
        yourWinningSolution:
          'Hoja de seguimiento en Excel/Notion con estados (Enviado, Primera Entrevista, Oferta Recibida) y preguntas frecuentes de RR.HH.',
      },
    ],
    winningTemplateTitle: 'Kit Empleo Remoto: 3 CVs en Word 100% ATS-Friendly + Tracker de Postulaciones',
    winningTemplateSubtitle:
      'Estilo Ábaco Pulse (moderno, ejecutivo). Aprovechá tu manejo de Word y Excel donde la mayoría de los diseñadores de Canva cometen errores técnicos.',
    exactDeliverables: [
      '3 Modelos de CV en Microsoft Word (.docx) y Google Docs con código tipográfico limpio para ATS.',
      'Modelo de Carta de Presentación a juego.',
      'Tracker en Excel para seguimiento de entrevistas y salarios pretendidos.',
    ],
    fastSalesTactics:
      'Semana 1 (sin TikTok): publicá un post de valor en LinkedIn o en grupos de empleo remoto mostrando una captura de cómo un filtro ATS rechaza un diseño gráfico vs cómo lee un CV limpio en Word, con link a la descarga.',
  },
];
