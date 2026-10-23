import React, { useState } from 'react';
import { VIRAL_HOOKS } from '../data/viralAndPromptsData';
import {
  TrendingUp,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  Search,
  Users,
  Compass,
  MessageCircle,
  Sparkles,
  XCircle,
  Share2,
} from 'lucide-react';

export const TabViralStrategy: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner Cero TikTok */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#163A9F] bg-[#E4EBFB] px-3 py-1 rounded-full font-label">
            <Sparkles className="w-3.5 h-3.5" /> Estrategia 100% Cero TikTok · Tráfico Pasivo & Directo
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472]">
            Cero bailes · Cero videos personales
          </span>
        </div>

        <h2 className="text-xl font-bold text-[#0E1B3D]">
          No necesitás TikTok: Las 4 Vías Gratuitas para Vender en Silencio
        </h2>
        <p className="text-sm text-[#5A6472] mt-2 leading-relaxed">
          TikTok exige publicar videos todo el tiempo y los clips caducan a las 24 horas. Para alguien
          con <strong className="text-[#0E1B3D]">1 hora diaria</strong> y sin ganas de exponerse, las
          fuentes más rentables y duraderas son los motores de búsqueda y las comunidades con
          intención de compra real:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5">
          <div className="p-4 rounded-xl border border-[#DCE4F5] bg-[#F7F8FC]">
            <div className="w-8 h-8 rounded-lg bg-[#E4EBFB] text-[#163A9F] flex items-center justify-center mb-2.5">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-1 font-label">
              1. Pinterest SEO (Pasivo)
            </h3>
            <p className="text-xs text-[#5A6472] leading-relaxed">
              Pinterest no es una red social de amigos; es un <strong>buscador visual</strong>. Creás
              pines verticales estáticos en Canva en 5 minutos. Cada pin indexa en Google e ingresa
              visitas a tu Payhip durante meses.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#DCE4F5] bg-[#F7F8FC]">
            <div className="w-8 h-8 rounded-lg bg-[#E4EBFB] text-[#163A9F] flex items-center justify-center mb-2.5">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-1 font-label">
              2. Galería de Notion Oficial
            </h3>
            <p className="text-xs text-[#5A6472] leading-relaxed">
              Notion tiene millones de usuarios buscando plantillas dentro de su propio sitio.
              Publicás tu versión gratuita en su galería y el enlace interno lleva a tu versión de
              pago en Payhip con 0% de esfuerzo promocional.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#DCE4F5] bg-[#F7F8FC]">
            <div className="w-8 h-8 rounded-lg bg-[#FFE9E3] text-[#D63E1E] flex items-center justify-center mb-2.5">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-1 font-label">
              3. Imán Gratis en Comunidades
            </h3>
            <p className="text-xs text-[#5A6472] leading-relaxed">
              En grupos de Facebook, LinkedIn o foros de profesionales compartís una mini-muestra
              útil. Sin hacer spam: aportás valor real y dejás que la propia plantilla venda el pack
              completo a quien quiera más.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#DCE4F5] bg-[#F7F8FC]">
            <div className="w-8 h-8 rounded-lg bg-[#E8FBF0] text-[#1F9D55] flex items-center justify-center mb-2.5">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-1 font-label">
              4. Venta Directa en Pesos
            </h3>
            <p className="text-xs text-[#5A6472] leading-relaxed">
              Para generar tus primeros ingresos en la Semana 1, compartís tu solución en estados de
              WhatsApp o contactos con link de Cafecito / Ualá Bis. Un conocido prefiere pagarte a vos
              antes que a un desconocido.
            </p>
          </div>
        </div>
      </div>

      {/* Rutina + mecánica */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
            <TrendingUp className="w-4 h-4 text-[#163A9F]" /> La Mecánica del “Imán Gratuito” (Ventas en Piloto Automático)
          </div>
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="p-3.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]">
              <div className="font-mono-num font-bold text-[#163A9F] mb-1">
                PASO A: LA MUESTRA GRATIS IRRESISTIBLE (LEAD MAGNET)
              </div>
              <p className="text-[#0E1B3D]">
                En lugar de convencer a un extraño de pagarte $19 USD de entrada, le regalás el 15% de
                tu sistema (ej: la calculadora rápida de horas o el visor de gastos del mes). No
                tienen nada que perder y descargan al instante.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]">
              <div className="font-mono-num font-bold text-[#D63E1E] mb-1">
                PASO B: EL GATILLO INTERNO DENTRO DE LA PLANTILLA
              </div>
              <p className="text-[#0E1B3D]">
                Arriba o al pie de esa plantilla gratuita colocás un recuadro elegante:
                <br />
                <em>
                  “¿Necesitás el control de compras en cuotas de tarjeta y soporte multidivisa
                  pesos/dólares? Hacé clic aquí para obtener la versión completa con 20% de
                  descuento exclusivo”.
                </em>
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]">
              <div className="font-mono-num font-bold text-[#0E1B3D] mb-1">
                PASO C: VENTA CERRADA SIN NEGOCIAR
              </div>
              <p className="text-[#0E1B3D]">
                Como el usuario ya vio con sus propios ojos la calidad y prolijidad de tu trabajo en
                la versión gratis, la desconfianza desaparece y hace el pago en Payhip con tarjeta o
                PayPal.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
              <Clock className="w-4 h-4 text-[#FF5A36]" /> Tu Hora Diaria Sin TikTok
            </div>
            <p className="text-xs text-[#5A6472] mb-3">
              Así aprovechás tus 60 minutos diarios con foco en creación y tráfico pasivo:
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]">
                <span className="font-medium text-[#0E1B3D]">Diseñar 2 pines en Canva para Pinterest</span>
                <span className="font-mono-num font-bold text-[#163A9F]">15 min</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]">
                <span className="font-medium text-[#0E1B3D]">Compartir valor / responder en 1 comunidad</span>
                <span className="font-mono-num font-bold text-[#163A9F]">15 min</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#E4EBFB]/70 border border-[#B9C7E4]">
                <span className="font-semibold text-[#0E1B3D]">Crear / mejorar plantillas con IA</span>
                <span className="font-mono-num font-bold text-[#163A9F]">30 min</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5] text-[11px] text-[#5A6472] flex items-start gap-2">
            <Share2 className="w-4 h-4 text-[#163A9F] shrink-0 mt-0.5" />
            <span>
              <strong>Truco fin de semana:</strong> el sábado podés diseñar 5 pines en 30 minutos y
              programarlos para toda la semana.
            </span>
          </div>
        </div>
      </div>

      {/* Prohibido vs Permitido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-[#FFC9BC] bg-[#FFE9E3]/50 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309] flex items-center gap-1.5 mb-2.5 font-label">
            <XCircle className="w-4 h-4" /> Lo que PROHÍBO que hagas (quema tu hora)
          </h3>
          <ul className="space-y-2 text-xs text-[#0E1B3D]">
            <li>❌ Pagar Meta Ads o TikTok Ads en el Mes 1 (innecesario y arriesgado).</li>
            <li>❌ Crear carruseles largos de 10 diapositivas todos los días desde cero.</li>
            <li>❌ Grabar videos hablados de 3 minutos que requieren edición pesada.</li>
            <li>❌ Crearte TikTok si no querés: tu plan funciona 100% sin él.</li>
            <li>❌ Responder 40 mensajes a mano en lugar de tener el link claro en tu perfil.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#B9C7E4] bg-[#E4EBFB]/50 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#163A9F] flex items-center gap-1.5 mb-2.5 font-label">
            <CheckCircle2 className="w-4 h-4" /> Tu sistema “1 Pin = 4 canales” (20 min)
          </h3>
          <ul className="space-y-2 text-xs text-[#0E1B3D]">
            <li>
              ✅ <strong>1 diseño vertical en Canva</strong> (1000×1500 px, tipografía GRANDE) con
              mockup de tu plantilla.
            </li>
            <li>
              ✅ <strong>Ese mismo pin</strong> se publica en Pinterest con descripción SEO + link a
              Payhip.
            </li>
            <li>
              ✅ <strong>Reutilizalo</strong> como imagen de post en LinkedIn, grupos de Facebook y
              estados de WhatsApp.
            </li>
            <li>
              ✅ <strong>Pinterest trabaja 24/7:</strong> cada pin indexa en Google y sigue trayendo
              compradores meses después.
            </li>
          </ul>
        </div>
      </div>

      {/* 6 textos listos */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-lg font-bold text-[#0E1B3D] mb-1">
          6 Mensajes y Textos de Promoción Silenciosa Listos para Copiar
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6472] mb-4">
          Úsalos para tus pines de Pinterest, posts en comunidades o mensajes directos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VIRAL_HOOKS.map((hook) => {
            const fullText = `CANAL: ${hook.platformFocus}\nTÍTULO / ENCABEZADO: ${hook.onScreenHook}\nDISEÑO / FORMATO: ${hook.visualAction}\nTEXTO ACOMPAÑANTE: ${hook.captionCTA}`;
            const isCopied = copiedId === hook.id;
            return (
              <div
                key={hook.id}
                className="rounded-xl border border-[#DCE4F5] bg-[#F7F8FC] p-4 flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#DCE4F5] text-[#163A9F] font-label">
                      {hook.platformFocus}
                    </span>
                    <button
                      onClick={() => handleCopy(hook.id, fullText)}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#DCE4F5] hover:bg-[#0E1B3D] hover:text-white transition cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#37D67A]" /> Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copiar texto
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-sm font-bold text-[#0E1B3D] leading-snug">{hook.onScreenHook}</p>
                  <p className="text-xs text-[#5A6472]">
                    <strong className="text-[#0E1B3D]">Diseño / formato:</strong> {hook.visualAction}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#DCE4F5] text-xs text-[#0E1B3D]">
                  <span className="font-semibold text-[#163A9F]">Texto acompañante: </span>
                  {hook.captionCTA}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
