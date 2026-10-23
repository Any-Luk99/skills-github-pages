import React, { useState } from 'react';
import { PLATFORMS_DATA, UALA_PAYPAL_GUIDE, PSEUDONYM_RULES } from '../data/platformsAndPaymentsData';
import {
  Store,
  CreditCard,
  ShieldCheck,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Lock,
  Globe,
} from 'lucide-react';

export const TabPlatformsPayments: React.FC = () => {
  const [checkedPaypalSteps, setCheckedPaypalSteps] = useState<number[]>([]);

  const toggleStep = (step: number) => {
    setCheckedPaypalSteps((prev) =>
      prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]
    );
  };

  return (
    <div className="space-y-8">
      {/* ============= 1. PSEUDÓNIMO ============= */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163A9F] bg-[#E4EBFB] px-3 py-1 rounded-full w-fit mb-3 font-label">
          <EyeOff className="w-3.5 h-3.5" /> Privacidad e Identidad de Creadora
        </div>
        <h2 className="text-xl font-bold text-[#0E1B3D]">
          ¿Nombre Real o Pseudónimo? La Regla de Oro (Puertas Adentro vs. Escaparate)
        </h2>
        <p className="text-sm text-[#0E1B3D] font-medium mt-2 bg-[#F7F8FC] border border-[#DCE4F5] p-3.5 rounded-lg">
          ✅ <strong>Respuesta de tu coach:</strong> {PSEUDONYM_RULES.shortAnswer}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border border-[#DCE4F5] bg-[#F7F8FC] p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A6472] mb-2.5 font-label">
              <Lock className="w-4 h-4 text-[#0E1B3D]" /> Donde SÍ va tu nombre legal (privado)
            </div>
            <p className="text-xs text-[#5A6472] mb-3">
              Las entidades financieras exigen por ley antilavado saber quién retira el dinero. Nunca
              inventes un nombre aquí o retendrán tus cobros:
            </p>
            <ul className="space-y-2">
              {PSEUDONYM_RULES.privateBackend.map((item, i) => (
                <li key={i} className="text-xs text-[#0E1B3D] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#163A9F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#B9C7E4] bg-[#E4EBFB]/50 p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163A9F] mb-2.5 font-label">
              <Globe className="w-4 h-4" /> Donde va Ábaco Digital (100% visible al público)
            </div>
            <p className="text-xs text-[#5A6472] mb-3">
              Siguiendo estos ajustes, ni tus seguidores ni tus compradores verán jamás tu nombre ni
              dirección personal:
            </p>
            <ul className="space-y-2">
              {PSEUDONYM_RULES.publicFrontend.map((item, i) => (
                <li key={i} className="text-xs text-[#0E1B3D] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#163A9F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ============= 2. DÓNDE PUBLICAR ============= */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] bg-[#F7F8FC] border border-[#DCE4F5] px-3 py-1 rounded-full w-fit mb-3 font-label">
          <Store className="w-3.5 h-3.5" /> Dónde vender tus plantillas con $0
        </div>
        <h2 className="text-xl font-bold text-[#0E1B3D]">
          Comparativa Honesta de Plataformas (La Combinación Perfecta Mes 1)
        </h2>
        <p className="text-sm text-[#5A6472] mt-1 mb-5">
          Con $0 de capital y 1 hora diaria, tu tridente ganador es:{' '}
          <strong className="text-[#0E1B3D]">
            Payhip (cobro mundial USD) + Notion Marketplace Oficial (tráfico gratis) + Cafecito/Ualá
            Bis (cobro local en pesos)
          </strong>
          . Gumroad quedó descartado: cobra el doble.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {PLATFORMS_DATA.map((plat) => {
            const badgeStyle =
              plat.verdictType === 'recommended'
                ? 'bg-[#E4EBFB] text-[#163A9F] border-[#B9C7E4]'
                : 'bg-[#FFE9E3] text-[#B45309] border-[#FFC9BC]';

            return (
              <div
                key={plat.id}
                className="rounded-xl border border-[#DCE4F5] p-4 bg-[#F7F8FC]/60 hover:bg-[#F7F8FC] transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-[#0E1B3D]">{plat.name}</h3>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyle}`}
                  >
                    {plat.verdictBadge}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3 text-xs">
                  <div className="bg-white border border-[#DCE4F5] rounded-lg p-2.5">
                    <span className="text-[#5A6472] block text-[11px]">Costo fijo</span>
                    <strong className="text-[#0E1B3D] font-mono-num">{plat.monthlyCost}</strong>
                  </div>
                  <div className="bg-white border border-[#DCE4F5] rounded-lg p-2.5">
                    <span className="text-[#5A6472] block text-[11px]">Comisión por venta</span>
                    <strong className="text-[#0E1B3D]">{plat.commissionPerSale}</strong>
                  </div>
                  <div className="bg-white border border-[#DCE4F5] rounded-lg p-2.5">
                    <span className="text-[#5A6472] block text-[11px]">¿Trae visitas solas?</span>
                    <strong className="text-[#0E1B3D]">{plat.hasOwnTraffic}</strong>
                  </div>
                </div>

                <p className="text-xs text-[#0E1B3D] leading-relaxed mb-1.5">
                  <strong>Por qué te sirve:</strong> {plat.whyUseIt}
                </p>
                <p className="text-xs text-[#5A6472] flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#FF5A36] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tené en cuenta:</strong> {plat.watchOut}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============= 3. TUTORIAL UALÁ + PAYPAL ============= */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163A9F] bg-[#E4EBFB] px-3 py-1 rounded-full w-fit mb-3 font-label">
          <CreditCard className="w-3.5 h-3.5" /> Tutorial Guiado Ualá + PayPal
        </div>
        <h2 className="text-xl font-bold text-[#0E1B3D]">
          Cómo Abrir PayPal desde Cero, Vincular tu Ualá y Cobrar en USD y Pesos
        </h2>
        <p className="text-sm text-[#5A6472] mt-1 mb-5">
          Seguí estos 5 pasos exactos en orden (menos de 35 minutos en total). Podés ir tildándolos a
          medida que los completás:
        </p>

        <div className="space-y-3.5">
          {UALA_PAYPAL_GUIDE.map((item) => {
            const done = checkedPaypalSteps.includes(item.step);
            return (
              <div
                key={item.step}
                onClick={() => toggleStep(item.step)}
                className={`rounded-xl border p-4 cursor-pointer transition ${
                  done
                    ? 'bg-[#F7F8FC] border-[#B9C7E4]'
                    : 'bg-white border-[#DCE4F5] hover:border-[#163A9F]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-7 h-7 rounded-full font-mono-num text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      done ? 'bg-[#37D67A] text-[#0E1B3D]' : 'bg-[#0E1B3D] text-white'
                    }`}
                  >
                    {done ? '✓' : item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          done ? 'line-through text-[#5A6472]' : 'text-[#0E1B3D]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="font-mono-num text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472]">
                        ⏱ {item.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5A6472] leading-relaxed mb-2.5">
                      {item.details}
                    </p>
                    <div className="bg-[#E4EBFB] border border-[#B9C7E4] rounded-lg px-3 py-2 text-xs text-[#0B2547]">
                      <strong>Secreto financiero:</strong> {item.proSecret}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
