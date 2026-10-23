export interface PlatformComparison {
  id: string;
  name: string;
  verdictBadge: string;
  verdictType: 'recommended' | 'warning';
  monthlyCost: string;
  commissionPerSale: string;
  payoutMethod: string;
  hasOwnTraffic: string;
  whyUseIt: string;
  watchOut: string;
}

export const PLATFORMS_DATA: PlatformComparison[] = [
  {
    id: 'payhip',
    name: 'Payhip (Plan Forever Free)',
    verdictBadge: 'TOP #1 OFICIAL (GANADOR ABSOLUTO)',
    verdictType: 'recommended',
    monthlyCost: '$0 USD / mes',
    commissionPerSale: 'Solo 5% si vendes (+ comisión normal de PayPal)',
    payoutMethod: 'Pago INSTANTÁNEO directo a tu PayPal en cada venta',
    hasOwnTraffic: 'No (tú llevas tráfico con Pinterest, comunidades y links)',
    whyUseIt:
      'Ganas más dinero limpio que en Gumroad (Gumroad te quita 10% + $0.50 y retiene pagos). Payhip te deposita los dólares al segundo, entrega tus PDFs/plantillas automáticamente y te deja activar Order Bump (+$9) gratis.',
    watchOut:
      'Necesitas tener tu cuenta de PayPal asociada (toma 5 minutos con la guía de abajo).',
  },
  {
    id: 'notion-marketplace',
    name: 'Notion Marketplace Oficial (@notion.so/templates)',
    verdictBadge: 'MEJOR TRÁFICO ORGÁNICO GRATIS (SIN REDES)',
    verdictType: 'recommended',
    monthlyCost: '$0 USD / mes',
    commissionPerSale: '0% (apuntas tu botón de compra directo a tu Payhip)',
    payoutMethod: 'Vía tu link de Payhip hacia PayPal',
    hasOwnTraffic: 'SÍ — Millones de personas buscando plantillas directamente en Notion',
    whyUseIt:
      '¡No necesitas TikTok ni seguidores! Publicas tus plantillas adentro del directorio de Notion. La versión gratuita atrae cientos de personas y dentro de la plantilla ven el banner para comprar tu versión Pro.',
    watchOut:
      'El equipo de Notion revisa que la plantilla sea original y ordenada (tarda 2 a 5 días hábiles en aprobarse).',
  },
  {
    id: 'cafecito-uala',
    name: 'Cafecito (Modo Tienda) + Link de Cobro Ualá Bis',
    verdictBadge: 'ESENCIAL PARA VENTAS EN PESOS (ARGENTINA)',
    verdictType: 'recommended',
    monthlyCost: '$0 ARS / mes',
    commissionPerSale: 'Comisión local (~5% a 6%)',
    payoutMethod: 'Directo en Pesos a tu cuenta/CVU de Ualá o Mercado Pago',
    hasOwnTraffic: 'Bajo (sirve para cerrar a quienes no tienen tarjeta internacional)',
    whyUseIt:
      'En tu primera semana, muchos conocidos, amigos o personas de comunidades locales no querrán pagar en dólares. Les mandas tu link en pesos y recibes el dinero al instante en tu Ualá.',
    watchOut:
      'Cobras en pesos; para compradores de España, México o el resto del mundo usas Payhip en USD.',
  },
  {
    id: 'gumroad-verdict',
    name: '¿Y Gumroad? ¿Por qué NO lo usamos?',
    verdictBadge: 'DESCARTADO POR TU COACH (MENOS GANANCIA)',
    verdictType: 'warning',
    monthlyCost: '$0 USD / mes',
    commissionPerSale: '10% fijo + $0.50 por venta (+ hasta 30% si entran por Discover)',
    payoutMethod: 'Pagos diferidos (no inmediatos)',
    hasOwnTraffic: 'Bajo a menos que cedas el 30% de tu dinero a Gumroad Discover',
    whyUseIt:
      'Gumroad era popular en 2020, pero hoy cobra el doble de comisión que Payhip (10% + $0.50 vs 5%). En una venta de $15 USD, Gumroad te descuenta casi $2.50 USD y retiene tu dinero, mientras que Payhip te acredita de inmediato.',
    watchOut:
      'Por orden de tu Coach financiero: Gumroad queda FUERA de tu sistema para no perder dinero innecesario.',
  },
];

export interface UalaPaypalStep {
  step: number;
  title: string;
  duration: string;
  details: string;
  proSecret: string;
}

export const UALA_PAYPAL_GUIDE: UalaPaypalStep[] = [
  {
    step: 1,
    title: 'Prepara tu Tarjeta Mastercard Internacional de Ualá',
    duration: '5 min',
    details:
      'Abre tu app Ualá y asegúrate de tener a mano tu tarjeta prepaga Mastercard (física o virtual). Aunque crear PayPal es 100% gratis, al asociar la tarjeta PayPal hace una micro-verificación de ~$1.95 USD que luego te devuelve íntegra a tu saldo.',
    proSecret:
      'Si hoy tienes saldo $0 en Ualá, transfiere $2.500 o $3.000 ARS desde otra cuenta sólo para pasar la validación internacional de PayPal.',
  },
  {
    step: 2,
    title: 'Crea tu cuenta PayPal Business / Propietario Individual ($0)',
    duration: '15 min',
    details:
      'Entra a paypal.com y regístrate. En los datos internos pon tu Nombre y Apellido REAL según tu DNI (esto es obligatorio por ley financiera). Elige cuenta "Business / Empresas" y tipo "Propietario único / Persona física". NO te pide monotributo ni sociedades.',
    proSecret:
      'Al ser cuenta Business individual, puedes colocar tu PSEUDÓNIMO en el campo "Nombre comercial visible". Así el comprador sólo ve tu marca y JAMÁS tu nombre ni apellido personal.',
  },
  {
    step: 3,
    title: 'Asocia y confirma la Mastercard de Ualá en PayPal',
    duration: '5 min',
    details:
      'En PayPal ve a Cartera -> "Asociar tarjeta" y coloca los 16 números de Ualá. Si te solicita el código de 4 dígitos, lo verás inmediatamente en los movimientos de tu app Ualá (figura como PP*1234CODE). Lo ingresas y tu cuenta queda 100% verificada.',
    proSecret:
      'La tarjeta Ualá es de red Mastercard internacional prepaga, por lo que nunca es rechazada por PayPal a diferencia de las tarjetas de débito bancarias comunes.',
  },
  {
    step: 4,
    title: 'Conecta PayPal a Payhip con 1 solo clic',
    duration: '5 min',
    details:
      'En tu panel gratuito de Payhip.com ve a Settings -> Payment Details e ingresa tu email de PayPal. ¡Listo! A partir de ese segundo, cada venta mundial se procesa y entra a tu PayPal de manera automática.',
    proSecret:
      'Payhip no te cobra nada fijo por mes. Si vendes $0, pagas $0. Cuando vendes, se queda sólo con el 5%.',
  },
  {
    step: 5,
    title: 'Cómo retirar tus USD de PayPal al CVU en Pesos de tu Ualá',
    duration: 'Al acumular tus ganancias',
    details:
      'Nunca hagas un retiro bancario tradicional Swift directo porque los bancos te cobran comisiones de $20–$40 USD por transferencias chicas. Los creadores digitales usamos plataformas puente oficiales como Saldo.com.ar, Takenos o Airtm: transfieres tus dólares de PayPal y en menos de 20 minutos te llega la transferencia en pesos directo a tu CVU de Ualá con cotización financiera competitiva.',
    proSecret:
      'Te sugiero retirar tus dólares cuando juntes al menos $30 a $60 USD para no pagar comisiones mínimas repetidas.',
  },
];

export const PSEUDONYM_RULES = {
  shortAnswer:
    'SÍ, 100%. Puedes y te conviene usar un PSEUDÓNIMO o Nombre de Estudio. Cero exposición personal, cero fotos tuyas y cero apellidos en recibos.',
  privateBackend: [
    'Datos de alta interna en PayPal (Nombre real según DNI por normas antilavado).',
    'Titularidad de tu cuenta Ualá (privada en la app de Ualá).',
    'Datos de registro legal interno en Payhip (invisibles al comprador).',
  ],
  publicFrontend: [
    'Nombre de tu tienda en Payhip (ej. "Ábaco Digital" o "Ábaco Digital Studio").',
    'Nombre que figura en el recibo de PayPal (configurado como "Nombre Comercial" en PayPal Business).',
    'Correo de soporte (ej. contacto.aureadigital@gmail.com — sin tu apellido en el remitente de Google).',
    'Propiedades del archivo Excel/Word: en Archivo -> Información -> Propiedades, cambia el autor por tu Pseudónimo.',
    'Espacio público de Notion: personaliza el título y logo del workspace antes de generar el link de compartir/duplicar.',
  ],
};
