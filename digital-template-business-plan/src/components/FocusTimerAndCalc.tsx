import React, { useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, Calculator, Sparkles, DollarSign, TrendingUp } from 'lucide-react';

/* ============================== TEMPORIZADOR ============================== */

interface FocusTimerWidgetProps {
  secondsLeft: number;
  isRunning: boolean;
  presetMinutes: number;
  onToggle: () => void;
  onPreset: (mins: number) => void;
}

export const FocusTimerWidget: React.FC<FocusTimerWidgetProps> = ({
  secondsLeft,
  isRunning,
  presetMinutes,
  onToggle,
  onPreset,
}) => {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const progressPct = ((presetMinutes * 60 - secondsLeft) / (presetMinutes * 60)) * 100;

  return (
    <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#E4EBFB] text-[#163A9F] flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5A6472] font-label">
            Reloj Regla 1 Hora / Día
          </span>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472]">
          Cero agotamiento
        </span>
      </div>

      <div className="flex items-baseline justify-between my-2">
        <div className="font-mono-num text-3xl font-bold text-[#0E1B3D] tracking-tight">
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FF5A36] hover:bg-[#D63E1E] text-white transition cursor-pointer"
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button
            onClick={() => onPreset(presetMinutes)}
            title="Reiniciar"
            className="p-1.5 rounded-lg border border-[#DCE4F5] text-[#5A6472] hover:bg-[#F7F8FC] transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="w-full h-1.5 bg-[#E4EBFB] rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-[#163A9F] transition-all duration-300"
          style={{ width: `${Math.max(2, progressPct)}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-1.5 text-[11px]">
        {[
          { label: 'Hora total (60m)', m: 60 },
          { label: 'Crear plantilla (35m)', m: 35 },
          { label: 'Clip / pines (20m)', m: 20 },
        ].map((p) => (
          <button
            key={p.m}
            onClick={() => onPreset(p.m)}
            className={`py-1 px-1.5 rounded-md font-medium transition cursor-pointer text-center truncate ${
              presetMinutes === p.m
                ? 'bg-[#0E1B3D] text-white'
                : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472] hover:bg-[#E4EBFB]'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ============================== SIMULADOR DE INGRESOS ============================== */

export const RevenueSimulatorCard: React.FC<{ defaultPrice?: number }> = ({
  defaultPrice = 19,
}) => {
  const [priceUSD, setPriceUSD] = React.useState<number>(defaultPrice);
  const [salesPerMonth, setSalesPerMonth] = React.useState<number>(22);
  const [includeOrderBump, setIncludeOrderBump] = React.useState<boolean>(true);

  useEffect(() => {
    setPriceUSD(defaultPrice);
  }, [defaultPrice]);

  const bumpExtraPerSale = includeOrderBump ? 0.28 * 9 : 0;
  const avgTicket = priceUSD + bumpExtraPerSale;
  const grossUSD = avgTicket * salesPerMonth;
  const payhipFee = grossUSD * 0.05;
  const paypalFee = grossUSD * 0.054 + salesPerMonth * 0.3;
  const netUSD = Math.max(0, grossUSD - payhipFee - paypalFee);
  const salesPerDay = (salesPerMonth / 30).toFixed(1);

  return (
    <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FFE9E3] text-[#D63E1E] flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0E1B3D]">
              Simulador de Ingreso Mensual Neto (Inversión $0)
            </h3>
            <p className="text-xs text-[#5A6472]">
              Descontando comisión real de Payhip (5%) + recepción PayPal internacional
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E4EBFB] text-[#163A9F]">
          <TrendingUp className="w-3.5 h-3.5" /> ~{salesPerDay} ventas/día
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-[#5A6472]">Precio de tu Plantilla Principal</span>
              <span className="font-mono-num font-bold text-[#0E1B3D]">${priceUSD} USD</span>
            </div>
            <input
              type="range"
              min={7}
              max={49}
              step={1}
              value={priceUSD}
              onChange={(e) => setPriceUSD(Number(e.target.value))}
              className="w-full accent-[#FF5A36] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#5A6472]">
              <span>$7 (impulso)</span>
              <span>$19 (punto dulce)</span>
              <span>$49 (B2B)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-[#5A6472]">Ventas totales en el Mes</span>
              <span className="font-mono-num font-bold text-[#0E1B3D]">{salesPerMonth} ventas</span>
            </div>
            <input
              type="range"
              min={5}
              max={90}
              step={1}
              value={salesPerMonth}
              onChange={(e) => setSalesPerMonth(Number(e.target.value))}
              className="w-full accent-[#FF5A36] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#5A6472]">
              <span>5 (validación)</span>
              <span>25 (meta mes 1)</span>
              <span>90 (pin semi-viral)</span>
            </div>
          </div>

          <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5] cursor-pointer">
            <input
              type="checkbox"
              checked={includeOrderBump}
              onChange={(e) => setIncludeOrderBump(e.target.checked)}
              className="mt-0.5 accent-[#163A9F]"
            />
            <span className="text-xs text-[#0E1B3D] leading-snug">
              <strong>Activar “Order Bump” gratis en Payhip (+$9 USD):</strong> el 28% de
              compradores suma una mini-plantilla complementaria en el carrito.
            </span>
          </label>
        </div>

        <div className="bg-[#0E1B3D] rounded-xl p-4 space-y-3 text-white">
          <div className="flex items-center justify-between text-xs text-[#DCE4F5]">
            <span>Facturación bruta:</span>
            <span className="font-mono-num font-semibold text-white">
              ${grossUSD.toFixed(0)} USD
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-[#DCE4F5]">
            <span>Comisiones (Payhip 5% + PayPal):</span>
            <span className="font-mono-num text-[#FF9C82]">
              -${(payhipFee + paypalFee).toFixed(0)} USD
            </span>
          </div>
          <div className="border-t border-white/15 pt-3 flex items-baseline justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#37D67A]">
                Limpio en tu bolsillo
              </p>
              <p className="text-[11px] text-[#DCE4F5]">PayPal → tu CVU de Ualá</p>
            </div>
            <div className="flex items-center font-mono-num text-2xl sm:text-3xl font-extrabold text-[#37D67A]">
              <DollarSign className="w-6 h-6 -mr-1" />
              {netUSD.toFixed(0)} <span className="text-sm font-semibold ml-1">USD</span>
            </div>
          </div>
          <p className="text-[11px] text-[#DCE4F5] bg-white/10 p-2 rounded-lg">
            <Sparkles className="w-3 h-3 inline mr-1 text-[#FF5A36]" />
            <strong>Dato de tu coach:</strong> con 1 solo pin de Pinterest que llegue a
            8.000–12.000 vistas (100% alcanzable en tus primeras 3 semanas), lograr 15–25 ventas
            es una meta realista.
          </p>
        </div>
      </div>
    </div>
  );
};
