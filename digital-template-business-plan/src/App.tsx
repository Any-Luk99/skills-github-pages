import { useState, useEffect } from 'react';
import { NICHES_DATA, NicheBlueprint } from './data/nichesData';
import { TabId } from './data/coachKB';
import { BRAND } from './data/brand';
import { FocusTimerWidget, RevenueSimulatorCard } from './components/FocusTimerAndCalc';
import { TabRoadmap } from './components/TabRoadmap';
import { TabNiches } from './components/TabNiches';
import { TabPlatformsPayments } from './components/TabPlatformsPayments';
import { TabViralStrategy } from './components/TabViralStrategy';
import { TabPromptsVault } from './components/TabPromptsVault';
import { PriceCalculator } from './components/PriceCalculator';
import { TabBrandKit } from './components/TabBrandKit';
import { CoachChat } from './components/CoachChat';
import {
  CalendarCheck,
  Target,
  Wallet,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Compass,
  Wand2,
  MessageCircle,
  Calculator,
  Palette,
  Clock,
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react';

const STORAGE_TASKS_KEY = 'abacodigital_completed_steps_v4';
const STORAGE_NICHE_KEY = 'abacodigital_selected_niche_v4';

/* Logo SVG de Ábaco Digital: 3 líneas + 3 cuentas ascendentes */
const AbacoLogo: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 44 44" className={className} aria-label="Logo Ábaco Digital">
    <rect x="0" y="0" width="44" height="44" rx="10" fill="#0E1B3D" />
    <line x1="7" y1="34" x2="37" y2="34" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="7" y1="22" x2="37" y2="22" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="7" y1="10" x2="37" y2="10" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="13" cy="34" r="3.6" fill="#FF5A36" />
    <circle cx="22" cy="22" r="3.6" fill="#FF5A36" />
    <circle cx="31" cy="10" r="3.6" fill="#FF5A36" />
  </svg>
);

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('roadmap');
  const [showQuickAnswers, setShowQuickAnswers] = useState<boolean>(true);

  /* ---------- Temporizador global (visible en todas las pestañas) ---------- */
  const [presetMinutes, setPresetMinutes] = useState<number>(60);
  const [secondsLeft, setSecondsLeft] = useState<number>(60 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const selectPreset = (mins: number) => {
    setIsRunning(false);
    setPresetMinutes(mins);
    setSecondsLeft(mins * 60);
  };

  const timerMins = Math.floor(secondsLeft / 60);
  const timerSecs = secondsLeft % 60;

  /* ---------- Estado persistente ---------- */
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_TASKS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedNicheId, setSelectedNicheId] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_NICHE_KEY) || NICHES_DATA[0].id;
    } catch {
      return NICHES_DATA[0].id;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(completedIds));
    } catch {
      /* ignore */
    }
  }, [completedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_NICHE_KEY, selectedNicheId);
    } catch {
      /* ignore */
    }
  }, [selectedNicheId]);

  const selectedNiche: NicheBlueprint =
    NICHES_DATA.find((n) => n.id === selectedNicheId) || NICHES_DATA[0];

  const handleToggleTask = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetTasks = () => setCompletedIds([]);
  const handleSelectNiche = (niche: NicheBlueprint) => setSelectedNicheId(niche.id);

  const navItems: {
    id: TabId;
    label: string;
    shortLabel: string;
    icon: typeof CalendarCheck;
    badge?: string;
  }[] = [
    { id: 'roadmap', label: '1. Plan 30 Días al Detalle', shortLabel: 'Plan al Detalle', icon: CalendarCheck, badge: '30 días' },
    { id: 'niches', label: '2. Quejas Reales & Nichos', shortLabel: 'Quejas & Nichos', icon: Target, badge: 'Recolectadas' },
    { id: 'platforms', label: '3. Cobros & Pseudónimo', shortLabel: 'Cobros', icon: Wallet },
    { id: 'viral', label: '4. Tráfico Sin TikTok', shortLabel: 'Sin TikTok', icon: Compass },
    { id: 'prompts', label: '5. Prompts IA', shortLabel: 'Prompts IA', icon: Wand2, badge: 'Copiar' },
    { id: 'price', label: '6. Calculadora de Precio', shortLabel: 'Calculadora', icon: Calculator },
    { id: 'brand', label: '7. Kit de Marca', shortLabel: 'Kit de Marca', icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#0E1B3D] flex flex-col">
      {/* ================= HEADER (Azul Noche) ================= */}
      <header className="bg-[#0E1B3D] text-white sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <AbacoLogo className="w-10 h-10 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base text-white">{BRAND.name}</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FF5A36] text-white font-label">
                  $0 · 1h/día · Cero TikTok
                </span>
              </div>
              <p className="text-xs text-[#DCE4F5] hidden md:block">
                Coach de monetización de plantillas · Canva + Office + Notion · Cobros con Ualá & PayPal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* ===== TEMPORIZADOR GLOBAL (visible en todas las páginas) ===== */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3 py-1.5">
              <Clock className="w-4 h-4 text-[#FF5A36] shrink-0" />
              <span className="font-mono-num text-base font-bold text-white tabular-nums">
                {String(timerMins).padStart(2, '0')}:{String(timerSecs).padStart(2, '0')}
              </span>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="p-1 rounded-md bg-[#FF5A36] hover:bg-[#D63E1E] text-white transition cursor-pointer"
                title={isRunning ? 'Pausar' : 'Iniciar'}
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => selectPreset(presetMinutes)}
                className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title="Reiniciar"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <select
                value={presetMinutes}
                onChange={(e) => selectPreset(Number(e.target.value))}
                className="hidden sm:block bg-[#0E1B3D] border border-white/20 rounded-md text-[11px] font-semibold px-1.5 py-1 text-white cursor-pointer"
                title="Duración"
              >
                <option value={60}>60 min</option>
                <option value={35}>35 min</option>
                <option value={20}>20 min</option>
              </select>
            </div>

            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-medium">
              <MessageCircle className="w-3.5 h-3.5 text-[#FF5A36]" />
              ¿Duda? Botón <strong>Coach</strong> abajo
            </span>
            <button
              onClick={() => setActiveTab('prompts')}
              className="px-3.5 py-1.5 rounded-lg bg-[#FF5A36] hover:bg-[#D63E1E] text-white font-semibold transition cursor-pointer inline-flex items-center gap-1.5 text-xs"
            >
              <Wand2 className="w-3.5 h-3.5" /> Prompts IA
            </button>
          </div>
        </div>

        {/* Navegación */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto border-t border-white/10">
          <nav className="flex items-center gap-1 py-2 min-w-max">
            {navItems.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition cursor-pointer ${
                    isActive
                      ? 'bg-[#FF5A36] text-white shadow-xs'
                      : 'text-[#DCE4F5] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.shortLabel}</span>
                  {tab.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-[#0E1B3D] text-white' : 'bg-white/15 text-white'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ================= CONTENIDO ================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1 space-y-6">
        {/* Bienvenida + respuestas rápidas + herramientas */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-8 bg-white border border-[#DCE4F5] rounded-xl p-5 sm:p-6 shadow-xs">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#163A9F] bg-[#E4EBFB] px-2.5 py-1 rounded-full mb-2 font-label">
                  <Sparkles className="w-3.5 h-3.5" /> Coach Directo · {BRAND.name}
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0E1B3D] leading-tight">
                  Plan de 30 días al detalle, con tu Coach disponible 24/7 para dudas rápidas.
                </h1>
              </div>
              <button
                onClick={() => setShowQuickAnswers(!showQuickAnswers)}
                className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472] hover:text-[#0E1B3D] transition cursor-pointer"
              >
                {showQuickAnswers ? (
                  <>
                    Ocultar <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    Ver respuestas <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#5A6472] mt-2 leading-relaxed">
              Cada uno de los 30 días tiene sus minutos exactos, los prompts de IA del día, el
              entregable al terminar, la trampa a evitar y el consejo Pro. ¿Se te cruza una duda entre
              paso y paso? Abrí el <strong className="text-[#163A9F]">botón “Consultar al Coach”</strong>{' '}
              abajo a la derecha: te respondo al instante.
            </p>

            {showQuickAnswers && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#DCE4F5]">
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="text-left p-3 rounded-xl bg-[#F7F8FC] hover:bg-[#E4EBFB] border border-[#DCE4F5] transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#163A9F] mb-1 font-label">
                    <span>1. PLAN AL DETALLE POR DÍA</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-[#0E1B3D] leading-snug">
                    <strong>30 días × 60 min con pasos minuto a minuto</strong>: publicación el Día 7,
                    muestra gratis en grupos y WhatsApp los días 8–10, primeras ventas entre el Día 7
                    y el 14.
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab('niches')}
                  className="text-left p-3 rounded-xl bg-[#F7F8FC] hover:bg-[#E4EBFB] border border-[#DCE4F5] transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#163A9F] mb-1 font-label">
                    <span>2. QUEJAS REALES RECOLECTADAS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-[#0E1B3D] leading-snug">
                    Citas textuales de compradores de Etsy, Notion y Reddit: fórmulas rotas (#¡REF!),
                    Lorem Ipsum, cuotas de tarjeta inexistentes y ansiedad por sobrecarga. Cada una
                    con su solución ganadora.
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab('platforms')}
                  className="text-left p-3 rounded-xl bg-[#FFE9E3] hover:bg-[#FFD9CF] border border-[#FFC9BC] transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#B45309] mb-1 font-label">
                    <span>3. ¿GUMROAD VA O NO? → DESCARTADO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-[#0E1B3D] leading-snug">
                    <strong>NO usamos Gumroad:</strong> 10% + $0.50 por venta y pagos retenidos.{' '}
                    <strong>Payhip cobra 5%</strong> y te deposita al instante en PayPal. Etsy queda
                    para el Mes 2 con USD ganados.
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab('viral')}
                  className="text-left p-3 rounded-xl bg-[#F7F8FC] hover:bg-[#E4EBFB] border border-[#DCE4F5] transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#163A9F] mb-1 font-label">
                    <span>4. PROMOCIÓN 100% SIN TIKTOK</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-[#0E1B3D] leading-snug">
                    Pinterest SEO (pines que venden meses después) + Galería Oficial de Notion/Canva +
                    Comunidades de Facebook/LinkedIn + WhatsApp en pesos. Cero bailes, cero cámara.
                  </p>
                </button>
              </div>
            )}
          </div>

          {/* Columna de herramientas */}
          <div className="lg:col-span-4 space-y-4">
            <FocusTimerWidget
              secondsLeft={secondsLeft}
              isRunning={isRunning}
              presetMinutes={presetMinutes}
              onToggle={() => setIsRunning(!isRunning)}
              onPreset={selectPreset}
            />

            <button
              onClick={() => setActiveTab('price')}
              className="w-full text-left bg-[#0E1B3D] rounded-xl p-4 shadow-xs hover:bg-[#163A9F] transition cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] font-label">
                  <Calculator className="w-3.5 h-3.5" /> Calculadora de Precio
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#DCE4F5] group-hover:text-white" />
              </div>
              <p className="text-sm font-bold text-white">¿Cuánto cobrar por tu plantilla?</p>
              <p className="text-[11px] text-[#DCE4F5] mt-0.5">
                Según herramienta, complejidad, archivos, cliente, colección y mercado. Con tu
                ganancia neta en Payhip.
              </p>
            </button>

            <div className="bg-white border border-[#DCE4F5] rounded-xl p-4 shadow-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#5A6472] mb-1 font-label">
                Nicho activo
              </div>
              <div className="text-sm font-bold text-[#0E1B3D] leading-snug">{selectedNiche.name}</div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F0F4F8] text-xs">
                <span className="text-[#5A6472]">
                  Colección:{' '}
                  <strong className="text-[#0E1B3D]">{selectedNiche.collection}</strong> ·{' '}
                  {selectedNiche.primaryTool}
                </span>
                <span className="font-mono-num font-bold text-[#D63E1E]">
                  ${selectedNiche.recommendedPrice} USD
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Simulador */}
        <RevenueSimulatorCard defaultPrice={selectedNiche.recommendedPrice} />

        {/* Pestaña activa */}
        <section>
          {activeTab === 'roadmap' && (
            <TabRoadmap
              completedIds={completedIds}
              onToggleTask={handleToggleTask}
              onResetTasks={handleResetTasks}
              onGoToPrompts={() => setActiveTab('prompts')}
            />
          )}

          {activeTab === 'niches' && (
            <TabNiches
              selectedNicheId={selectedNiche.id}
              onSelectNiche={handleSelectNiche}
              onGoToPrompts={() => setActiveTab('prompts')}
            />
          )}

          {activeTab === 'platforms' && <TabPlatformsPayments />}

          {activeTab === 'viral' && <TabViralStrategy />}

          {activeTab === 'prompts' && (
            <TabPromptsVault selectedNiche={selectedNiche} onSelectNicheById={setSelectedNicheId} />
          )}

          {activeTab === 'price' && <PriceCalculator />}

          {activeTab === 'brand' && <TabBrandKit />}
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0E1B3D] text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DCE4F5]">
          <div>
            <strong className="text-white">{BRAND.name}</strong> · {BRAND.tagline} ● ↗
          </div>
          <div>
            Regla de Oro: <strong className="text-white">60 minutos, temporizador en marcha y entregable al final de cada día.</strong>
          </div>
        </div>
      </footer>

      {/* Chat flotante del Coach */}
      <CoachChat onGoTab={setActiveTab} />
    </div>
  );
}

export default App;
