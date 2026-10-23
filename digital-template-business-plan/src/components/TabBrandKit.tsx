import React, { useState } from 'react';
import { BRAND, CENTRAL_PALETTE, COLLECTIONS, NAMING_FORMULA, PALETTE_DISTRIBUTION, CollectionId } from '../data/brand';
import { NICHES_DATA } from '../data/nichesData';
import { Copy, Check, Sparkles, Palette, Type, Shapes, AtSign, Mail, Quote, Compass } from 'lucide-react';

const COLLECTION_USE: Record<CollectionId, string> = {
  Pulse: 'Emprendedores, contenido, productividad, CVs modernos, freelancers.',
  Calm: 'Hábitos, estudiantes, bienestar, organización personal, terapias.',
  Élite: 'Belleza, estética, moda, negocios femeninos, B2B premium.',
  Core: 'Finanzas, Excel, CRM, facturación, dashboards, sistemas.',
};

const NICHE_COLLECTION = NICHES_DATA.map((n) => ({ name: n.name, collection: n.collection }));

export const TabBrandKit: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="space-y-6">
      {/* ============ IDENTIDAD ============ */}
      <div className="bg-[#0E1B3D] rounded-xl p-6 text-white shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#163A9F] rounded-full blur-3xl opacity-30 -translate-y-1/3 translate-x-1/3" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          {/* Logo SVG */}
          <div className="shrink-0">
            <div className="w-28 h-28 rounded-2xl bg-[#0E1B3D] border border-white/15 flex items-center justify-center">
              <svg viewBox="0 0 44 44" className="w-16 h-16">
                <line x1="4" y1="34" x2="40" y2="34" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="4" y1="22" x2="40" y2="22" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="4" y1="10" x2="40" y2="10" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="11" cy="34" r="4" fill="#FF5A36" />
                <circle cx="22" cy="22" r="4" fill="#FF5A36" />
                <circle cx="33" cy="10" r="4" fill="#FF5A36" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5A36] bg-white/10 px-3 py-1 rounded-full mb-3 font-label">
              <Sparkles className="w-3.5 h-3.5" /> Identidad principal de marca
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{BRAND.name}</h2>
            <p className="text-sm text-[#DCE4F5] mt-1 max-w-xl">{BRAND.tagline}</p>
            <p className="text-xs text-[#DCE4F5]/80 mt-2 max-w-xl">{BRAND.tone}</p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <button
                onClick={() => copy('bio', BRAND.bioExample)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FF5A36] hover:bg-[#D63E1E] text-white transition cursor-pointer"
              >
                {copied === 'bio' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                Copiar bio
              </button>
              <button
                onClick={() => copy('tagline', BRAND.tagline)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              >
                {copied === 'tagline' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                Copiar frase de marca
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============ LOGO ============ */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-4 font-label">
          <Shapes className="w-4 h-4 text-[#163A9F]" /> Logo único: “{BRAND.logo.concept}”
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="bg-[#F7F8FC] border border-[#DCE4F5] rounded-xl p-5">
              <div className="font-mono-num text-sm text-[#0E1B3D] leading-relaxed mb-4">
                {BRAND.logo.diagram.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line}
                  </div>
                ))}
              </div>
              <ul className="space-y-1.5">
                {BRAND.logo.structure.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#0E1B3D]">
                    <span className="w-4 h-4 rounded-full bg-[#FF5A36] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#5A6472] mt-3 italic">{BRAND.logo.means}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-[#F7F8FC] border border-[#DCE4F5] rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2 font-label">
                Cómo armarlo gratis en Canva
              </div>
              <ol className="space-y-1.5">
                {BRAND.canvaSteps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#0E1B3D]">
                    <span className="font-mono-num font-bold text-[#163A9F] shrink-0">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[#FFE9E3] border border-[#FFC9BC] rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D63E1E] mb-2 font-label">
                Reglas del logo (no negociables)
              </div>
              <ul className="space-y-1.5">
                {BRAND.logo.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#7C2A18]">
                    <span className="font-bold shrink-0">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Símbolos de comunicación */}
        <div className="mt-5 pt-4 border-t border-[#DCE4F5]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
            Símbolos de comunicación de marca
          </div>
          <div className="flex flex-wrap gap-2.5">
            {BRAND.symbols.map((s) => (
              <div
                key={s.symbol}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]"
              >
                <span className="text-lg text-[#FF5A36]">{s.symbol}</span>
                <span className="text-[11px] text-[#5A6472]">{s.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ PALETA CENTRAL ============ */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-4 font-label">
          <Palette className="w-4 h-4 text-[#163A9F]" /> Paleta central oficial
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CENTRAL_PALETTE.map((c) => (
            <button
              key={c.hex}
              onClick={() => copy(c.hex, c.hex)}
              className="text-left rounded-xl border border-[#DCE4F5] overflow-hidden hover:border-[#163A9F] transition cursor-pointer group"
            >
              <div className="h-16 w-full" style={{ backgroundColor: c.hex }} />
              <div className="p-2.5 bg-white">
                <div className="text-[11px] font-bold text-[#0E1B3D] leading-tight">{c.name}</div>
                <div className="font-mono-num text-[11px] text-[#5A6472] flex items-center gap-1">
                  {c.hex}
                  {copied === c.hex ? (
                    <Check className="w-3 h-3 text-[#37D67A]" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  )}
                </div>
                <div className="text-[10px] text-[#5A6472] mt-1 leading-tight">{c.usage}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {PALETTE_DISTRIBUTION.map((d) => (
            <div key={d.pct} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5]">
              <span className="w-6 h-6 rounded-md border border-black/10 shrink-0" style={{ backgroundColor: d.hex }} />
              <div>
                <div className="font-mono-num text-xs font-bold text-[#0E1B3D]">{d.pct}</div>
                <div className="text-[10px] text-[#5A6472] leading-tight">{d.color}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#5A6472] mt-3">
          El naranja es ACENTO, no dominante. Úsalo para “Comprar ahora”, precios, flechas,
          beneficios y etiquetas de “Nuevo / Editable / Oferta”.
        </p>
      </div>

      {/* ============ 4 COLECCIONES ============ */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-4 font-label">
          <Compass className="w-4 h-4 text-[#163A9F]" /> Las 4 colecciones de color (un solo logo, 4 personalidades)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COLLECTIONS.map((c) => (
            <div key={c.id} className="rounded-xl border border-[#DCE4F5] overflow-hidden bg-[#F7F8FC]">
              {/* Cabecera con la paleta de la colección */}
              <div className="flex h-12">
                {c.colors.map((col) => (
                  <div key={col.hex} className="flex-1" style={{ backgroundColor: col.hex }} title={`${col.name} ${col.hex}`} />
                ))}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-[#0E1B3D]">{c.name}</h3>
                  <span className="font-mono-num text-[11px] font-bold px-2 py-0.5 rounded bg-[#E4EBFB] text-[#163A9F]">
                    precio ×{c.priceMultiplier}
                  </span>
                </div>
                <p className="text-[11px] text-[#5A6472] mb-2">{c.style}</p>
                <p className="text-xs text-[#0E1B3D] italic mb-3">“{c.sensation}”</p>

                <div className="grid grid-cols-5 gap-1.5 mb-3">
                  {c.colors.map((col) => (
                    <button
                      key={col.hex}
                      onClick={() => copy(`${c.id}-${col.hex}`, col.hex)}
                      className="group"
                      title={`${col.name} · ${col.hex} (clic para copiar)`}
                    >
                      <div className="h-7 rounded-md border border-black/10" style={{ backgroundColor: col.hex }} />
                      <div className="font-mono-num text-[9px] text-[#5A6472] mt-0.5 truncate">
                        {copied === `${c.id}-${col.hex}` ? '✓' : col.hex}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#163A9F] font-label">Usala para</div>
                    <p className="text-[11px] text-[#0E1B3D] leading-relaxed">{COLLECTION_USE[c.id]}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#163A9F] font-label">Elementos gráficos</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {c.graphicElements.slice(0, 5).map((g) => (
                        <span key={g} className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-[#DCE4F5] text-[#5A6472]">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#163A9F] font-label">Tipografías</div>
                    <p className="text-[11px] text-[#0E1B3D]">
                      Títulos: {c.typography.titles} · Texto: {c.typography.body}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#D63E1E] font-medium">{c.priceNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ NOMBRES + REDES ============ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
            <Type className="w-4 h-4 text-[#163A9F]" /> Cómo nombrar tus productos
          </div>
          <div className="bg-[#0E1B3D] rounded-lg px-3 py-2 mb-3">
            <span className="font-mono-num text-sm text-[#FF5A36]">{NAMING_FORMULA.formula}</span>
          </div>
          <ul className="space-y-2">
            {NAMING_FORMULA.examples.map((e, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#0E1B3D]">
                <span className="font-mono-num font-bold text-[#163A9F] shrink-0">{i + 1}.</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-[#5A6472] mt-3 italic">{NAMING_FORMULA.note}</p>

          <div className="mt-4 pt-4 border-t border-[#DCE4F5]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-2 font-label">
              Colección sugerida por nicho
            </div>
            <div className="space-y-1.5">
              {NICHE_COLLECTION.map((n, i) => (
                <div key={i} className="flex items-center justify-between text-[11px]">
                  <span className="text-[#5A6472] truncate pr-2">{n.name}</span>
                  <span className="inline-flex items-center gap-1.5 shrink-0">
                    <span
                      className="w-3 h-3 rounded-full border border-black/10"
                      style={{ backgroundColor: COLLECTIONS.find((c) => c.id === n.collection)?.colors[0].hex }}
                    />
                    <span className="font-semibold text-[#0E1B3D]">{n.collection}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
              <AtSign className="w-4 h-4 text-[#163A9F]" /> Usuarios y correo
            </div>

            <div className="space-y-1.5 mb-4">
              {BRAND.socialUsers.options.map((u) => (
                <button
                  key={u}
                  onClick={() => copy(u, u)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                    u === BRAND.socialUsers.favorite
                      ? 'bg-[#FFE9E3] border border-[#FFC9BC] text-[#0E1B3D]'
                      : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#0E1B3D] hover:border-[#163A9F]/40'
                  }`}
                >
                  <span className="font-mono-num">{u}</span>
                  {u === BRAND.socialUsers.favorite ? (
                    <span className="text-[10px] font-bold text-[#D63E1E]">FAVORITO</span>
                  ) : copied === u ? (
                    <Check className="w-3.5 h-3.5 text-[#37D67A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#5A6472]" />
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-1.5">
              {BRAND.emails.options.map((e) => (
                <button
                  key={e}
                  onClick={() => copy(e, e)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                    e === BRAND.emails.favorite
                      ? 'bg-[#E4EBFB] border border-[#B9C7E4] text-[#0E1B3D]'
                      : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#0E1B3D] hover:border-[#163A9F]/40'
                  }`}
                >
                  <span className="font-mono-num flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#5A6472]" />
                    {e}
                  </span>
                  {e === BRAND.emails.favorite ? (
                    <span className="text-[10px] font-bold text-[#163A9F]">FAVORITO</span>
                  ) : copied === e ? (
                    <Check className="w-3.5 h-3.5 text-[#37D67A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#5A6472]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E1B3D] mb-3 font-label">
              <Quote className="w-4 h-4 text-[#163A9F]" /> Frases de marca (elegí una)
            </div>
            <div className="space-y-2">
              {[BRAND.tagline, ...BRAND.altSlogans].map((s, i) => (
                <button
                  key={i}
                  onClick={() => copy(`slogan-${i}`, s)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition cursor-pointer flex items-start justify-between gap-2 ${
                    i === 0
                      ? 'bg-[#0E1B3D] text-white'
                      : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#0E1B3D] hover:border-[#163A9F]/40'
                  }`}
                >
                  <span>{s}</span>
                  {copied === `slogan-${i}` ? (
                    <Check className="w-3.5 h-3.5 shrink-0 text-[#37D67A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 shrink-0 opacity-50" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
