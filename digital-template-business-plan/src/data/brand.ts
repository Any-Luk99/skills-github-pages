export type CollectionId = 'Pulse' | 'Calm' | 'Élite' | 'Core';

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Collection {
  id: CollectionId;
  name: string;
  style: string;
  colors: ColorSwatch[];
  sensation: string;
  uses: string[];
  graphicElements: string[];
  typography: { titles: string; body: string };
  priceMultiplier: number;
  priceNote: string;
}

export const BRAND = {
  name: 'Ábaco Digital',
  tagline: 'Plantillas que ordenan ideas y activan negocios.',
  altSlogans: [
    'Diseño listo. Sistemas claros. Tiempo recuperado.',
    'Menos caos. Más foco. Más negocio.',
    'Herramientas digitales para trabajar mejor.',
    'Tu negocio, más claro y más profesional.',
  ],
  tone: 'Tech-Pop limpio: digital, rápido, útil y actual. Azul = confianza. Naranja = impulso de compra.',
  bioExample:
    'Plantillas que ordenan tus ideas y hacen crecer tu negocio. Canva · Notion · Excel · Word ↗ Ábaco Digital ✦',
  symbols: [
    { symbol: '●', meaning: 'organización / piezas de un sistema' },
    { symbol: '↗', meaning: 'crecimiento' },
    { symbol: '✦', meaning: 'resultado premium' },
    { symbol: '▦', meaning: 'estructura digital' },
    { symbol: '⚡', meaning: 'rapidez' },
  ],
  logo: {
    concept: '“Datos que se ordenan y avanzan”',
    structure: [
      '3 líneas horizontales finas',
      '3 cuentas circulares en posiciones distintas',
      'Las cuentas forman una diagonal ascendente (abajo-izquierda → arriba-derecha)',
    ],
    diagram: [
      '— ● — — —',
      '— — ● — —',
      '— — — ● —',
    ],
    means: 'Organización, progreso, crecimiento financiero y movimiento de ideas desordenadas a sistemas claros.',
    rules: [
      'El logo es SIEMPRE de 2 colores: Azul Profundo (#0E1B3D) + Naranja (#FF5A36).',
      'NO cambies el logo por colección: el logo es el ancla visual. Lo que cambia son las plantillas.',
      'Funciona como foto de perfil, portada, miniatura de tienda, marca de agua e ícono de Notion.',
      'Podés usar 🧮 de forma ocasional en textos, nunca como logo oficial.',
    ],
  },
  socialUsers: {
    options: [
      '@abaco.digital',
      '@abacodigital.ar',
      '@abacodigital.co',
      '@abaco.digitalstudio',
      '@somosabacodigital',
    ],
    favorite: '@abaco.digital',
    fallback: '@somosabacodigital',
  },
  emails: {
    options: [
      'abacodigital.plantillas@gmail.com',
      'hola.abacodigital@gmail.com',
      'somosabacodigital@gmail.com',
      'abacodigital.estudio@gmail.com',
    ],
    favorite: 'hola.abacodigital@gmail.com',
  },
  canvaSteps: [
    'Diseño de 1080 x 1080 px en Canva.',
    'Fondo Azul Noche #0E1B3D.',
    'Tres líneas horizontales finas en blanco.',
    'Tres círculos Naranja Señal #FF5A36: uno abajo a la izquierda, uno al medio, uno arriba a la derecha.',
    'Texto “ÁBACO” (Sora SemiBold / Outfit Bold / Montserrat Bold).',
    'Debajo “DIGITAL” más chico (DM Sans / Manrope / Montserrat Medium) con espaciado entre letras.',
  ],
};

export const CENTRAL_PALETTE: (ColorSwatch & { usage: string })[] = [
  { name: 'Azul Cobalto Profundo', hex: '#163A9F', usage: 'Color principal / autoridad de marca' },
  { name: 'Azul Noche', hex: '#0E1B3D', usage: 'Fondo digital oscuro, header, logos' },
  { name: 'Naranja Señal', hex: '#FF5A36', usage: 'Acción, compra, precios, CTAs' },
  { name: 'Blanco Nube', hex: '#F7F8FC', usage: 'Fondo limpio de interfaz' },
  { name: 'Gris Grafito', hex: '#262A33', usage: 'Texto secundario' },
];

export const PALETTE_DISTRIBUTION = [
  { pct: '60%', color: 'Blanco Nube o Azul Noche', hex: '#F7F8FC' },
  { pct: '25%', color: 'Azul Cobalto', hex: '#163A9F' },
  { pct: '10%', color: 'Gris Grafito', hex: '#262A33' },
  { pct: '5%', color: 'Naranja Señal (solo acento)', hex: '#FF5A36' },
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'Pulse',
    name: 'Ábaco Pulse',
    style: 'Tech-Pop / moderno / viral (colección troncal)',
    colors: [
      { name: 'Azul Eléctrico', hex: '#1D4ED8' },
      { name: 'Azul Noche', hex: '#0E1B3D' },
      { name: 'Naranja Vibrante', hex: '#FF5A36' },
      { name: 'Blanco Limpio', hex: '#FFFFFF' },
      { name: 'Gris Azulado', hex: '#DCE4F5' },
    ],
    sensation: 'Velocidad, creatividad, orden y crecimiento.',
    uses: [
      'Packs de Instagram para emprendedores',
      'Calendarios de contenido',
      'Planificadores de productividad',
      'Dashboards de Notion para freelancers',
      'Presupuestos digitales para jóvenes',
      'CVs modernos',
      'Kits para creadores de contenido',
    ],
    graphicElements: ['Flechas ascendentes ↗', 'Cuadrículas suaves', 'Círculos grandes', 'Etiquetas NEW / EDITABLE / LISTO', 'Líneas diagonales', 'Botones naranja'],
    typography: { titles: 'Sora SemiBold / Outfit Bold', body: 'DM Sans / Montserrat' },
    priceMultiplier: 1.0,
    priceNote: 'Precio base del catálogo. Es tu línea principal y la que más rota.',
  },
  {
    id: 'Calm',
    name: 'Ábaco Calm',
    style: 'Minimalismo zen / productividad tranquila',
    colors: [
      { name: 'Avena Suave', hex: '#F4F0EB' },
      { name: 'Verde Matcha', hex: '#7A8B76' },
      { name: 'Salvia Clara', hex: '#C9D2C4' },
      { name: 'Carbón Suave', hex: '#2B2B2B' },
      { name: 'Blanco Crema', hex: '#FCFBF8' },
    ],
    sensation: 'Calma, claridad mental, hábitos sostenibles y orden sin presión.',
    uses: [
      'Trackers de hábitos',
      'Planificadores semanales',
      'Diarios de gratitud',
      'Notion para estudiantes',
      'Planificadores de estudio',
      'Organización del hogar',
      'Rutinas y bienestar',
      'Psicólogas, coaches y terapeutas',
    ],
    graphicElements: ['Bordes redondeados', 'Líneas finas', 'Iconos simples', 'Espacios amplios', 'Botánica muy discreta', 'Puntos y mini retículas'],
    typography: { titles: 'Manrope SemiBold', body: 'DM Sans / Montserrat Light' },
    priceMultiplier: 0.95,
    priceNote: 'Ticket de impulso levemente menor: volumen por accesibilidad.',
  },
  {
    id: 'Élite',
    name: 'Ábaco Élite',
    style: 'Editorial / premium / negocios femeninos',
    colors: [
      { name: 'Alabastro', hex: '#FCFBF8' },
      { name: 'Borgoña Profundo', hex: '#4A2524' },
      { name: 'Champagne', hex: '#D4C2A3' },
      { name: 'Rosa Nude', hex: '#E8D8D1' },
      { name: 'Marrón Espresso', hex: '#2C1D1B' },
    ],
    sensation: 'Lujo tranquilo, cuidado, prestigio y detalle.',
    uses: [
      'Instagram para peluquerías',
      'Packs para uñas, cejas, estética y spa',
      'Menús de cafeterías boutique',
      'Media kits',
      'Tarifarios de servicios',
      'Agendas para maquilladoras',
      'Catálogos de indumentaria',
      'Coaches y marcas personales',
    ],
    graphicElements: ['Marcos finos', 'Fotos grandes y limpias', 'Serif + sans serif', 'Texturas sutiles de papel', 'Líneas verticales editoriales', 'Champagne con moderación'],
    typography: { titles: 'Playfair Display / Cormorant Garamond / DM Serif Display', body: 'DM Sans / Manrope / Montserrat' },
    priceMultiplier: 1.15,
    priceNote: 'Se cobra más caro porque se siente refinada. Es tu colección de mayor ticket.',
  },
  {
    id: 'Core',
    name: 'Ábaco Core',
    style: 'Dark mode / sistemas / finanzas',
    colors: [
      { name: 'Azul Medianoche', hex: '#0A0F1D' },
      { name: 'Gris Acero', hex: '#8E95A5' },
      { name: 'Cyan Digital', hex: '#00E5FF' },
      { name: 'Blanco Hielo', hex: '#F0F4F8' },
      { name: 'Verde Éxito', hex: '#37D67A' },
    ],
    sensation: 'Control, precisión, tecnología, dinero y resultados.',
    uses: [
      'Presupuestos mensuales en Excel',
      'Control de gastos',
      'Facturas para freelancers',
      'Dashboards financieros',
      'CRM en Notion',
      'Seguimiento de clientes',
      'Planificación de proyectos',
      'Tableros de metas financieras',
    ],
    graphicElements: ['Gráficos', 'Números grandes', 'Tablas limpias', 'Líneas tipo interfaz', 'Etiquetas Pendiente / Cobrado / En proceso', 'Indicadores verdes', 'Cyan solo para datos clave'],
    typography: { titles: 'Sora SemiBold', body: 'DM Sans / Manrope' },
    priceMultiplier: 1.1,
    priceNote: 'Productos funcionales de alto valor percibido: el cliente paga por el resultado.',
  },
];

export const NAMING_FORMULA = {
  formula: 'Producto + categoría + colección + herramienta',
  examples: [
    'Planner Semanal Minimalista — Colección Ábaco Calm — Notion',
    'Pack de Stories para Peluquerías — Colección Ábaco Élite — Canva',
    'Control de Gastos Mensual — Colección Ábaco Core — Excel',
    'Calendario de Contenidos para Emprendedores — Colección Ábaco Pulse — Canva',
    'CV Profesional Moderno — Colección Ábaco Pulse — Word',
  ],
  note: 'Esta fórmula hace que tu catálogo parezca una tienda profesional aunque recién empieces con 4 productos.',
};

export interface PriceReference {
  product: string;
  collection: CollectionId;
  tool: string;
  rangeUSD: string;
}

export const PRICE_REFERENCE: PriceReference[] = [
  { product: 'Pack de 10 stories para peluquerías', collection: 'Élite', tool: 'Canva', rangeUSD: 'USD 8 – 15' },
  { product: 'Tracker de hábitos semanal', collection: 'Calm', tool: 'Notion', rangeUSD: 'USD 6 – 14' },
  { product: 'Control de gastos mensual (bimonetario + cuotas)', collection: 'Core', tool: 'Excel', rangeUSD: 'USD 12 – 24' },
  { product: 'Calendario de contenido mensual', collection: 'Pulse', tool: 'Canva / Notion', rangeUSD: 'USD 8 – 17' },
  { product: 'CV Profesional Moderno ATS + tracker', collection: 'Pulse', tool: 'Word', rangeUSD: 'USD 11 – 22' },
  { product: 'Kit Cierra-Clientes (propuesta + portal + cotizador)', collection: 'Élite', tool: 'Notion + Canva + Excel', rangeUSD: 'USD 19 – 39' },
];
