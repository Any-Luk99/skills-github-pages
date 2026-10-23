import React, { useState } from 'react';
import { NICHES_DATA, NicheBlueprint, ToolName } from '../data/nichesData';
import { COLLECTIONS } from '../data/brand';
import {
  AlertTriangle,
  CheckCircle,
  Sparkles,
  PackageCheck,
  ArrowRight,
  Check,
  Quote,
  Zap,
} from 'lucide-react';

interface TabNichesProps {
  selectedNicheId: string;
  onSelectNiche: (niche: NicheBlueprint) => void;
  onGoToPrompts: () => void;
}

export const TabNiches: React.FC<TabNichesProps> = ({
  selectedNicheId,
  onSelectNiche,
  onGoToPrompts,
}) => {
  const [toolFilter, setToolFilter] = useState<ToolName | 'Todas'>('Todas');

  const filteredNiches =
    toolFilter === 'Todas'
      ? NICHES_DATA
      : NICHES_DATA.filter((n) => n.tools.includes(toolFilter));

  return (
    <div className="space-y-6">
      {/* Intro & Filtro */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D63E1E] bg-[#FFE9E3] px-2.5 py-1 rounded-full mb-2 font-label">
          <Sparkles className="w-3.5 h-3.5" /> Quejas Reales Recolectadas de Compradores
        </span>
        <h2 className="text-xl font-bold text-[#0E1B3D]">
          Citas Textuales de Marketplaces & Foros: Tu Mina de Oro para Vender
        </h2>
        <p className="text-sm text-[#5A6472] mt-1 max-w-3xl">
          Recolecté lo que la gente odia de las plantillas existentes en Etsy, Reddit y foros
          hispanos. Si resolvés estas quejas específicas, te compran sin dudar porque sanás un dolor
          real. Cada nicho tiene asignada su colección de Ábaco Digital.
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          {(['Todas', 'Notion', 'Excel', 'Canva', 'Word'] as const).map((tool) => (
            <button
              key={tool}
              onClick={() => setToolFilter(tool)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                toolFilter === tool
                  ? 'bg-[#0E1B3D] text-white'
                  : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472] hover:bg-[#E4EBFB]'
              }`}
            >
              {tool === 'Todas' ? 'Todas tus herramientas' : `Con ${tool}`}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjetas de nichos */}
      <div className="space-y-6">
        {filteredNiches.map((niche, index) => {
          const isSelected = niche.id === selectedNicheId;
          const coll = COLLECTIONS.find((c) => c.id === niche.collection)!;
          return (
            <div
              key={niche.id}
              className={`bg-white rounded-xl overflow-hidden transition shadow-xs border ${
                isSelected ? 'border-2 border-[#163A9F]' : 'border-[#DCE4F5]'
              }`}
            >
              {/* Cabecera */}
              <div className="bg-[#F7F8FC] border-b border-[#DCE4F5] p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono-num text-xs font-bold px-2 py-0.5 rounded bg-[#0E1B3D] text-white">
                      NICHO #{index + 1}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFE9E3] text-[#B45309]">
                      {niche.categoryBadge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white border border-[#DCE4F5] text-[#0E1B3D]">
                      <span
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: coll.colors[0].hex }}
                      />
                      Colección {coll.name}
                    </span>
                    {niche.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white border border-[#DCE4F5] text-[#0E1B3D]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0E1B3D]">{niche.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6472] mt-1">
                    <strong>¿Quién la paga feliz?:</strong> {niche.whoBuysIt}
                  </p>
                  <p className="text-[11px] text-[#163A9F] font-medium mt-1.5">
                    Nombre oficial: <span className="font-mono-num">{niche.officialProductName}</span>
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                  <div className="bg-white border border-[#DCE4F5] rounded-lg px-3.5 py-2 text-right">
                    <div className="text-[11px] uppercase font-semibold text-[#5A6472]">
                      Precio sugerido
                    </div>
                    <div className="font-mono-num text-base font-extrabold text-[#D63E1E]">
                      {niche.ticketUSD}
                    </div>
                    <div className="text-[11px] text-[#5A6472]">Armado: {niche.buildTimeHours}</div>
                  </div>

                  <button
                    onClick={() => onSelectNiche(niche)}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold transition cursor-pointer inline-flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#163A9F] text-white'
                        : 'bg-[#0E1B3D] hover:bg-[#163A9F] text-white'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4" /> Nicho elegido
                      </>
                    ) : (
                      'Elegir para mis prompts'
                    )}
                  </button>
                </div>
              </div>

              {/* Cuerpo */}
              <div className="p-5 space-y-5">
                {/* Quejas */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D63E1E] mb-3 flex items-center gap-1.5 font-label">
                    <AlertTriangle className="w-4 h-4" /> Quejas reales de compradores (citas textuales)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {niche.realComplaints.map((rc, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-[#DCE4F5] bg-[#F7F8FC] p-4 flex flex-col justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-[#5A6472] mb-1.5">
                            <span className="font-semibold uppercase tracking-wider flex items-center gap-1 text-[#D63E1E] font-label">
                              <Quote className="w-3 h-3" /> Queja del comprador
                            </span>
                            <span className="bg-white border border-[#DCE4F5] px-1.5 py-0.5 rounded text-[10px]">
                              {rc.sourceContext}
                            </span>
                          </div>
                          <p className="text-xs italic text-[#0E1B3D] leading-relaxed font-medium">
                            {rc.userQuote}
                          </p>
                          <div className="mt-2 text-[11px] text-[#D63E1E] font-medium">
                            <strong>Problema detectado:</strong> {rc.theMissingElement}
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-[#DCE4F5] flex items-start gap-2 bg-white -mx-4 -mb-4 p-3 rounded-b-xl border-x-0 border-b-0">
                          <CheckCircle className="w-4 h-4 text-[#37D67A] shrink-0 mt-0.5" />
                          <p className="text-xs font-medium text-[#0E1B3D] leading-snug">
                            <span className="text-[#163A9F] font-bold">Cómo lo resolvés vos: </span>
                            {rc.yourWinningSolution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Producto ganador + táctica rápida */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-7 bg-[#E4EBFB]/60 border border-[#B9C7E4] rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163A9F] mb-1 font-label">
                      <PackageCheck className="w-4 h-4" /> La plantilla ganadora, lista para vender
                    </div>
                    <h5 className="text-base font-bold text-[#0E1B3D]">
                      {niche.winningTemplateTitle}
                    </h5>
                    <p className="text-xs text-[#5A6472] mt-0.5 mb-3">
                      {niche.winningTemplateSubtitle}
                    </p>
                    <ul className="space-y-1.5">
                      {niche.exactDeliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-[#0E1B3D] flex items-start gap-2 leading-relaxed"
                        >
                          <span className="font-mono-num font-bold text-[#163A9F]">0{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 bg-[#F7F8FC] border border-[#DCE4F5] rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2 font-label">
                        <Zap className="w-4 h-4 text-[#FF5A36]" /> Venta rápida semana 1 (sin TikTok)
                      </div>
                      <p className="text-xs text-[#0E1B3D] leading-relaxed">
                        {niche.fastSalesTactics}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onSelectNiche(niche);
                        onGoToPrompts();
                      }}
                      className="mt-4 w-full py-2 px-3 rounded-lg bg-white border border-[#0E1B3D] text-xs font-bold text-[#0E1B3D] hover:bg-[#0E1B3D] hover:text-white transition inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Generar prompts IA para este nicho <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
