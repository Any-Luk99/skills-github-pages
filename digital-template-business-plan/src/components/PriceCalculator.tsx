import React, { useMemo, useState } from 'react';
import {
  COLLECTIONS,
  PRICE_REFERENCE,
  CollectionId,
} from '../data/brand';
import {
  Calculator,
  DollarSign,
  Percent,
  Layers,
  Users,
  Globe,
  CheckCircle2,
  Info,
  ArrowRight,
} from 'lucide-react';

type ToolKey = 'Notion' | 'Excel' | 'Canva' | 'Word';
type ClientKey = 'consumidor' | 'profesional' | 'negocio';
type MarketKey = 'hispano' | 'ingles';

const TOOL_BASE: { key: ToolKey; label: string; base: number; note: string }[] = [
  { key: 'Notion', label: 'Notion (tracker / planner / portal)', base: 9, note: 'Base por estructura de bases de datos + botones nativos' },
  { key: 'Excel', label: 'Excel / Google Sheets (funcional con fórmulas)', base: 13, note: 'Base más alta: las fórmulas blindadas son trabajo técnico real' },
  { key: 'Canva', label: 'Canva (pack de diseños)', base: 9, note: 'Base por volumen de piezas editables' },
  { key: 'Word', label: 'Word / PowerPoint (documentos editables)', base: 11, note: 'Base por diagramación profesional' },
];

const COMPLEXITY: { value: number; label: string; add: number }[] = [
  { value: 1, label: '1 · Simple (1 pantalla o 1 tipo de pieza)', add: 0 },
  { value: 2, label: '2 · Básica (2–3 secciones claras)', add: 2 },
  { value: 3, label: '3 · Intermedia (varias vistas o automatización)', add: 4 },
  { value: 4, label: '4 · Avanzada (fórmulas cruzadas / botones)', add: 7 },
  { value: 5, label: '5 · Sistema completo (multi-pestaña + lógica)', add: 10 },
];

const CLIENTS: { key: ClientKey; label: string; mult: number; note: string }[] = [
  { key: 'consumidor', label: 'Consumidor final (organización personal)', mult: 1.0, note: 'Compra por impulso: precio accesible' },
  { key: 'profesional', label: 'Freelancer / profesional independiente', mult: 1.35, note: 'Compra por resultado: paga más' },
  { key: 'negocio', label: 'Negocio / agencia (B2B)', mult: 1.6, note: 'Compra por ROI: ticket alto' },
];

const MARKETS: { key: MarketKey; label: string; mult: number; note: string }[] = [
  { key: 'hispano', label: 'Hispanoamérica / España (ES)', mult: 1.0, note: 'Precio base del catálogo' },
  { key: 'ingles', label: 'Estados Unidos / UK (EN)', mult: 1.45, note: 'El mercado anglosajón paga +30–50%' },
];

const EXTRAS: { key: string; label: string; add: number }[] = [
  { key: 'tutorial', label: 'Video tutorial de uso incluido', add: 4 },
  { key: 'licencia', label: 'Licencia comercial / reventa permitida', add: 12 },
  { key: 'soporte', label: 'Soporte y actualizaciones por 6 meses', add: 5 },
  { key: 'bonus', label: 'Plantilla bonus de regalo (upsell interno)', add: 2 },
];

const RULES = [
  'Nunca compitas por precio: una plantilla de $2 USD genera desconfianza y te deja sin margen para Payhip.',
  'El naranja señala el precio: en tu portada y mockups, el precio y el “Comprar” van en #FF5A36.',
  'Subí el precio 10–15% cuando tengas 20+ ventas: los primeros clientes quedan a precio de lanzamiento.',
  'Un bundle (2 plantillas con 25% OFF) sube tu ticket promedio sin buscar clientes nuevos.',
  'Precios terminados en número redondo o .99: $14, $17, $19, $27 funcionan mejor que $16.43.',
];

export const PriceCalculator: React.FC = () => {
  const [tool, setTool] = useState<ToolKey>('Excel');
  const [complexity, setComplexity] = useState<number>(3);
  const [deliverables, setDeliverables] = useState<number>(3);
  const [client, setClient] = useState<ClientKey>('consumidor');
  const [collection, setCollection] = useState<CollectionId>('Core');
  const [market, setMarket] = useState<MarketKey>('hispano');
  const [extras, setExtras] = useState<string[]>(['tutorial']);
  const [hours, setHours] = useState<number>(4);

  const calc = useMemo(() => {
    const toolInfo = TOOL_BASE.find((t) => t.key === tool)!;
    const comp = COMPLEXITY.find((c) => c.value === complexity)!;
    const clientInfo = CLIENTS.find((c) => c.key === client)!;
    const marketInfo = MARKETS.find((m) => m.key === market)!;
    const collInfo = COLLECTIONS.find((c) => c.id === collection)!;
    const extrasAdd = EXTRAS.filter((e) => extras.includes(e.key)).reduce((a, e) => a + e.add, 0);
    const deliverablesAdd = (deliverables - 1) * 2;

    const subtotal = toolInfo.base + comp.add + deliverablesAdd + extrasAdd;
    const gross = subtotal * clientInfo.mult * collInfo.priceMultiplier * marketInfo.mult;

    const min = Math.max(5, Math.round(gross * 0.85));
    const max = Math.round(gross * 1.2);
    const recommended = Math.max(min, Math.round(gross));

    const payhipFee = recommended * 0.05;
    const paypalFee = recommended * 0.054 + 0.3;
    const net = Math.max(0, recommended - payhipFee - paypalFee);
    const netAt20 = net * 20;
    const hourValue = 20 > 0 ? net / 20 : 0;

    return {
      toolInfo,
      comp,
      clientInfo,
      marketInfo,
      collInfo,
      extrasAdd,
      deliverablesAdd,
      subtotal,
      min,
      max,
      recommended,
      payhipFee,
      paypalFee,
      net,
      netAt20,
      hourValue,
    };
  }, [tool, complexity, deliverables, client, collection, market, extras]);

  const toggleExtra = (key: string) =>
    setExtras((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const activeCollection = COLLECTIONS.find((c) => c.id === collection)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D63E1E] bg-[#FFE9E3] px-3 py-1 rounded-full mb-3 font-label">
          <Calculator className="w-3.5 h-3.5" /> Calculadora de Precio de Plantillas
        </span>
        <h2 className="text-xl font-bold text-[#0E1B3D]">
          ¿Cuánto cobrar? Calculalo según el tipo de plantilla y los factores que mueven el precio
        </h2>
        <p className="text-sm text-[#5A6472] mt-1 max-w-3xl">
          Elegí las características de tu producto y la calculadora te devuelve el{' '}
          <strong className="text-[#0E1B3D]">rango de precio</strong>, el{' '}
          <strong className="text-[#0E1B3D]">precio recomendado</strong>, tu{' '}
          <strong className="text-[#0E1B3D]">ganancia neta</strong> después de Payhip y PayPal, y
          cuánto vale tu hora de trabajo. Todo con la lógica de Ábaco Digital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* ============ PANEL DE FACTORES ============ */}
        <div className="lg:col-span-7 space-y-4">
          {/* 1. Herramienta */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
              <Layers className="w-4 h-4 text-[#163A9F]" /> 1. Tipo de plantilla / herramienta
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TOOL_BASE.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTool(t.key)}
                  className={`text-left p-3 rounded-lg border transition cursor-pointer ${
                    tool === t.key
                      ? 'border-[#163A9F] bg-[#E4EBFB]'
                      : 'border-[#DCE4F5] bg-[#F7F8FC] hover:border-[#163A9F]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0E1B3D]">{t.label}</span>
                    <span className="font-mono-num text-[11px] font-bold text-[#163A9F]">
                      base ${t.base}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A6472] mt-0.5">{t.note}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Complejidad */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#163A9F]" /> 2. Complejidad técnica
              </span>
              <span className="font-mono-num text-[11px] text-[#163A9F]">+${calc.comp.add} USD</span>
            </div>
            <div className="space-y-1.5">
              {COMPLEXITY.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setComplexity(c.value)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                    complexity === c.value
                      ? 'bg-[#0E1B3D] text-white'
                      : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#0E1B3D] hover:border-[#163A9F]/40'
                  }`}
                >
                  <span>{c.label}</span>
                  <span className="font-mono-num text-[11px] opacity-80">+${c.add}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Entregables */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2 font-label">
              <span>3. Cantidad de archivos / entregables incluidos</span>
              <span className="font-mono-num text-[11px] text-[#163A9F]">+${calc.deliverablesAdd} USD</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={1}
                max={6}
                value={deliverables}
                onChange={(e) => setDeliverables(Number(e.target.value))}
                className="flex-1 accent-[#FF5A36] cursor-pointer"
              />
              <span className="font-mono-num text-sm font-bold text-[#0E1B3D] w-16 text-right">
                {deliverables} {deliverables === 1 ? 'archivo' : 'archivos'}
              </span>
            </div>
            <p className="text-[11px] text-[#5A6472] mt-1">
              Ej: plantilla principal + versión Google Sheets + PDF de instrucciones + mockups.
            </p>
          </div>

          {/* 4. Tipo de cliente */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
              <Users className="w-4 h-4 text-[#163A9F]" /> 4. ¿Quién te compra?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CLIENTS.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setClient(c.key)}
                  className={`text-left p-3 rounded-lg border transition cursor-pointer ${
                    client === c.key
                      ? 'border-[#FF5A36] bg-[#FFE9E3]'
                      : 'border-[#DCE4F5] bg-[#F7F8FC] hover:border-[#FF5A36]/40'
                  }`}
                >
                  <div className="text-xs font-bold text-[#0E1B3D]">{c.label}</div>
                  <div className="font-mono-num text-[11px] font-bold text-[#D63E1E] mt-0.5">
                    ×{c.mult}
                  </div>
                  <p className="text-[11px] text-[#5A6472] mt-0.5">{c.note}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Colección + 6. Mercado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
                5. Colección Ábaco Digital
              </div>
              <div className="space-y-1.5">
                {COLLECTIONS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCollection(c.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                      collection === c.id
                        ? 'bg-[#163A9F] text-white'
                        : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#0E1B3D] hover:border-[#163A9F]/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c.colors[0].hex }}
                      />
                      {c.name}
                    </span>
                    <span className="font-mono-num text-[11px] opacity-80">×{c.priceMultiplier}</span>
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#5A6472] mt-2 italic">{activeCollection.priceNote}</p>
            </div>

            <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
                <Globe className="w-4 h-4 text-[#163A9F]" /> 6. Mercado de venta
              </div>
              <div className="space-y-2">
                {MARKETS.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setMarket(m.key)}
                    className={`w-full text-left p-3 rounded-lg border transition cursor-pointer ${
                      market === m.key
                        ? 'border-[#163A9F] bg-[#E4EBFB]'
                        : 'border-[#DCE4F5] bg-[#F7F8FC] hover:border-[#163A9F]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0E1B3D]">{m.label}</span>
                      <span className="font-mono-num text-[11px] font-bold text-[#163A9F]">
                        ×{m.mult}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5A6472] mt-0.5">{m.note}</p>
                  </button>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-[#DCE4F5]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2 font-label">
                  Extras que suman valor
                </div>
                <div className="space-y-1.5">
                  {EXTRAS.map((e) => (
                    <label
                      key={e.key}
                      className="flex items-center gap-2 text-xs text-[#0E1B3D] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={extras.includes(e.key)}
                        onChange={() => toggleExtra(e.key)}
                        className="accent-[#FF5A36]"
                      />
                      <span className="flex-1">{e.label}</span>
                      <span className="font-mono-num text-[11px] text-[#163A9F]">+${e.add}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Horas de producción */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2 font-label">
              <span>7. Horas que te llevó producirla</span>
              <span className="font-mono-num text-[11px] text-[#163A9F]">{hours} h</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-[#FF5A36] cursor-pointer"
            />
            <p className="text-[11px] text-[#5A6472] mt-1">
              Con 20 ventas al mes, tu hora de trabajo quedaría valuada en{' '}
              <strong className="text-[#0E1B3D]">${calc.hourValue.toFixed(2)} USD/h</strong> — y eso
              sin contar que la plantilla se sigue vendiendo sola después.
            </p>
          </div>
        </div>

        {/* ============ RESULTADO ============ */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
          <div className="bg-[#0E1B3D] rounded-xl p-5 text-white shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DCE4F5] mb-3 font-label">
              <DollarSign className="w-4 h-4 text-[#FF5A36]" /> Tu precio recomendado
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-mono-num text-4xl sm:text-5xl font-extrabold text-[#FF5A36]">
                ${calc.recommended}
              </span>
              <span className="text-sm font-semibold text-[#DCE4F5]">USD</span>
            </div>
            <p className="text-xs text-[#DCE4F5] mb-4">
              Rango saludable de venta:{' '}
              <strong className="text-white">
                ${calc.min} – ${calc.max} USD
              </strong>{' '}
              · {calc.toolInfo.label.split(' (')[0]} · {calc.collInfo.name} ·{' '}
              {calc.marketInfo.key === 'ingles' ? 'Mercado EN' : 'Mercado ES'}
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-[#DCE4F5]">
                <span>Precio de venta</span>
                <span className="font-mono-num text-white">${calc.recommended} USD</span>
              </div>
              <div className="flex justify-between text-[#DCE4F5]">
                <span className="flex items-center gap-1">
                  <Percent className="w-3 h-3" /> Payhip (5%)
                </span>
                <span className="font-mono-num text-[#FF9C82]">-${calc.payhipFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#DCE4F5]">
                <span className="flex items-center gap-1">
                  <Percent className="w-3 h-3" /> PayPal internacional
                </span>
                <span className="font-mono-num text-[#FF9C82]">-${calc.paypalFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-white/15 pt-2.5 flex justify-between items-baseline">
                <span className="font-bold text-[#37D67A]">NETO en tu PayPal</span>
                <span className="font-mono-num text-2xl font-extrabold text-[#37D67A]">
                  ${calc.net.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-[#DCE4F5] pt-1">
                <span>Si vendés 20 por mes</span>
                <span className="font-mono-num font-bold text-white">${calc.netAt20.toFixed(0)} USD</span>
              </div>
            </div>
          </div>

          {/* Desglose */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2.5 font-label">
              Cómo se armó el precio
            </div>
            <div className="space-y-1.5 text-xs">
              {[
                { label: `Base ${calc.toolInfo.key}`, value: calc.toolInfo.base },
                { label: 'Complejidad técnica', value: calc.comp.add },
                { label: `${deliverables} archivos incluidos`, value: calc.deliverablesAdd },
                { label: 'Extras', value: calc.extrasAdd },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-[#5A6472]">
                  <span>{row.label}</span>
                  <span className="font-mono-num text-[#0E1B3D]">${row.value}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-[#0E1B3D] border-t border-[#DCE4F5] pt-1.5">
                <span>Subtotal</span>
                <span className="font-mono-num">${calc.subtotal}</span>
              </div>
              <div className="flex justify-between text-[#5A6472]">
                <span>× Tipo de cliente ({calc.clientInfo.mult})</span>
                <span className="font-mono-num text-[#0E1B3D]">×{calc.clientInfo.mult}</span>
              </div>
              <div className="flex justify-between text-[#5A6472]">
                <span>× Colección ({calc.collInfo.priceMultiplier})</span>
                <span className="font-mono-num text-[#0E1B3D]">×{calc.collInfo.priceMultiplier}</span>
              </div>
              <div className="flex justify-between text-[#5A6472]">
                <span>× Mercado ({calc.marketInfo.mult})</span>
                <span className="font-mono-num text-[#0E1B3D]">×{calc.marketInfo.mult}</span>
              </div>
            </div>
          </div>

          {/* Reglas de oro */}
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2.5 font-label">
              <CheckCircle2 className="w-4 h-4 text-[#37D67A]" /> Reglas de oro del precio
            </div>
            <ul className="space-y-2">
              {RULES.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#0E1B3D] leading-relaxed">
                  <span className="font-mono-num font-bold text-[#FF5A36] shrink-0">{i + 1}.</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabla de referencia */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
          <Info className="w-4 h-4 text-[#163A9F]" /> Precios de referencia del catálogo Ábaco Digital
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-[#5A6472] border-b border-[#DCE4F5]">
                <th className="py-2 pr-3 font-semibold">Producto</th>
                <th className="py-2 pr-3 font-semibold">Colección</th>
                <th className="py-2 pr-3 font-semibold">Herramienta</th>
                <th className="py-2 font-semibold text-right">Precio sugerido</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_REFERENCE.map((p, i) => (
                <tr key={i} className="border-b border-[#F0F4F8] last:border-0">
                  <td className="py-2.5 pr-3 text-[#0E1B3D] font-medium">{p.product}</td>
                  <td className="py-2.5 pr-3">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{
                          backgroundColor:
                            COLLECTIONS.find((c) => c.id === p.collection)?.colors[0].hex,
                        }}
                      />
                      {p.collection}
                    </span>
                  </td>
                  <td className="py-2.5 pr-3 text-[#5A6472]">{p.tool}</td>
                  <td className="py-2.5 text-right font-mono-num font-bold text-[#D63E1E]">
                    {p.rangeUSD}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-[#5A6472] mt-3 flex items-start gap-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-[#163A9F] shrink-0 mt-0.5" />
          Estos rangos son tu punto de partida. Usá la calculadora de arriba con las
          características reales de TU plantilla para afinar el número.
        </p>
      </div>
    </div>
  );
};
