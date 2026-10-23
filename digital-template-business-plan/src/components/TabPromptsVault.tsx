import React, { useState } from 'react';
import { MASTER_PROMPTS } from '../data/viralAndPromptsData';
import { NICHES_DATA, NicheBlueprint, ToolName } from '../data/nichesData';
import { COLLECTIONS, CollectionId } from '../data/brand';
import { Copy, Check, Wand2, Sparkles, CalendarDays } from 'lucide-react';

interface TabPromptsVaultProps {
  selectedNiche: NicheBlueprint;
  onSelectNicheById: (id: string) => void;
}

export const TabPromptsVault: React.FC<TabPromptsVaultProps> = ({
  selectedNiche,
  onSelectNicheById,
}) => {
  const [brandName, setBrandName] = useState<string>('Ábaco Digital');
  const [selectedTool, setSelectedTool] = useState<ToolName>(selectedNiche.primaryTool);
  const [collection, setCollection] = useState<CollectionId>(selectedNiche.collection);
  const [priceUSD, setPriceUSD] = useState<number>(selectedNiche.recommendedPrice);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const handleNicheChange = (id: string) => {
    onSelectNicheById(id);
    const found = NICHES_DATA.find((n) => n.id === id);
    if (found) {
      setSelectedTool(found.primaryTool);
      setCollection(found.collection);
      setPriceUSD(found.recommendedPrice);
    }
  };

  const copyToClipboard = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2200);
  };

  const activeCollection = COLLECTIONS.find((c) => c.id === collection)!;

  return (
    <div className="space-y-6">
      {/* Personalizador */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163A9F] bg-[#E4EBFB] px-3 py-1 rounded-full w-fit mb-3 font-label">
          <Wand2 className="w-3.5 h-3.5" /> Trabajo Pesado Hecho Por Vos · Prompts Dinámicos
        </div>
        <h2 className="text-xl font-bold text-[#0E1B3D]">
          Bóveda de Prompts Maestros para Crear, Redactar y Viralizar con IA
        </h2>
        <p className="text-sm text-[#5A6472] mt-1 mb-5">
          Ajustá tu nicho, herramienta, colección y precio: los 7 prompts profesionales se reescriben
          solos al instante para que solo copies y pegues en ChatGPT o Claude gratis.{' '}
          <strong className="text-[#0E1B3D]">
            Cada prompt indica en qué día del plan se usa.
          </strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 bg-[#F7F8FC] border border-[#DCE4F5] rounded-xl p-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A6472] mb-1 font-label">
              Tu marca
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Ábaco Digital"
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#DCE4F5] text-xs font-semibold text-[#0E1B3D] focus:outline-none focus:border-[#163A9F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A6472] mb-1 font-label">
              Nicho activo
            </label>
            <select
              value={selectedNiche.id}
              onChange={(e) => handleNicheChange(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#DCE4F5] text-xs font-semibold text-[#0E1B3D] focus:outline-none focus:border-[#163A9F]"
            >
              {NICHES_DATA.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A6472] mb-1 font-label">
              Herramienta
            </label>
            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value as ToolName)}
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#DCE4F5] text-xs font-semibold text-[#0E1B3D] focus:outline-none focus:border-[#163A9F]"
            >
              <option value="Excel">Excel / Google Sheets</option>
              <option value="Notion">Notion</option>
              <option value="Canva">Canva</option>
              <option value="Word">Microsoft Word</option>
              <option value="PowerPoint">PowerPoint</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A6472] mb-1 font-label">
              Colección
            </label>
            <select
              value={collection}
              onChange={(e) => setCollection(e.target.value as CollectionId)}
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#DCE4F5] text-xs font-semibold text-[#0E1B3D] focus:outline-none focus:border-[#163A9F]"
            >
              {COLLECTIONS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5A6472] mb-1 font-label">
              Precio (USD)
            </label>
            <input
              type="number"
              min={7}
              max={79}
              value={priceUSD}
              onChange={(e) => setPriceUSD(Number(e.target.value) || 19)}
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#DCE4F5] font-mono-num text-xs font-bold text-[#D63E1E] focus:outline-none focus:border-[#163A9F]"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-[#5A6472]">
          <span className="font-semibold text-[#0E1B3D]">Paleta de la colección activa:</span>
          {activeCollection.colors.map((c) => (
            <span key={c.hex} className="inline-flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded border border-black/10" style={{ backgroundColor: c.hex }} />
              <span className="font-mono-num">{c.hex}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tarjetas de prompts */}
      <div className="space-y-5">
        {MASTER_PROMPTS.map((mp) => {
          const compiledPrompt = mp.buildPrompt({
            nicheName: selectedNiche.name,
            toolName: selectedTool,
            brandName: brandName.trim() || 'Ábaco Digital',
            collection: activeCollection.name,
            priceUSD,
          });
          const isCopied = copiedPromptId === mp.id;

          return (
            <div
              key={mp.id}
              className="bg-white border border-[#DCE4F5] rounded-xl overflow-hidden shadow-xs"
            >
              <div className="bg-[#F7F8FC] border-b border-[#DCE4F5] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#163A9F] mb-1 font-label">
                    <Sparkles className="w-3 h-3" /> {mp.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#0E1B3D]">{mp.title}</h3>
                  <p className="text-xs text-[#5A6472] mt-0.5">{mp.whenToUse}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(mp.id, compiledPrompt)}
                  className={`shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    isCopied ? 'bg-[#37D67A] text-[#0E1B3D]' : 'bg-[#FF5A36] hover:bg-[#D63E1E] text-white'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" /> ¡Prompt copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copiar prompt completo
                    </>
                  )}
                </button>
              </div>

              <div className="px-5 py-3 bg-[#E4EBFB]/40 border-b border-[#DCE4F5] flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#163A9F] font-label">
                  <CalendarDays className="w-3.5 h-3.5" /> Se usa en el plan:
                </span>
                {mp.usedOnDays.map((d) => (
                  <span
                    key={d}
                    className="font-mono-num text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-[#B9C7E4] text-[#0E1B3D]"
                  >
                    Día {d}
                  </span>
                ))}
              </div>

              <div className="p-4 sm:p-5 bg-[#F7F8FC]/40">
                <pre className="whitespace-pre-wrap font-mono-num text-xs leading-relaxed text-[#0E1B3D] bg-white border border-[#DCE4F5] rounded-lg p-4 overflow-x-auto">
                  {compiledPrompt}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
