import React, { useMemo, useState } from 'react';
import { ROADMAP_DAYS, PHASES, DayPlan } from '../data/roadmapData';
import { MASTER_PROMPTS } from '../data/viralAndPromptsData';
import {
  CheckCircle2,
  Circle,
  Lightbulb,
  Flame,
  RotateCcw,
  Package,
  Ban,
  CalendarDays,
  Check,
  Wand2,
  ArrowRight,
} from 'lucide-react';

interface TabRoadmapProps {
  completedIds: string[];
  onToggleTask: (id: string) => void;
  onResetTasks: () => void;
  onGoToPrompts: () => void;
}

export const TabRoadmap: React.FC<TabRoadmapProps> = ({
  completedIds,
  onToggleTask,
  onResetTasks,
  onGoToPrompts,
}) => {
  const [phaseFilter, setPhaseFilter] = useState<string>('all');

  const totalSteps = useMemo(
    () => ROADMAP_DAYS.reduce((acc, d) => acc + d.steps.length, 0),
    []
  );

  const completedSteps = useMemo(
    () =>
      ROADMAP_DAYS.reduce(
        (acc, d) => acc + d.steps.filter((s) => completedIds.includes(s.id)).length,
        0
      ),
    [completedIds]
  );

  const pct = Math.round((completedSteps / totalSteps) * 100);

  const isDayDone = (d: DayPlan) => d.steps.every((s) => completedIds.includes(s.id));
  const dayProgress = (d: DayPlan) =>
    d.steps.filter((s) => completedIds.includes(s.id)).length;

  const toggleWholeDay = (d: DayPlan) => {
    const done = isDayDone(d);
    d.steps.forEach((s) => {
      if (done ? !completedIds.includes(s.id) : completedIds.includes(s.id)) {
        onToggleTask(s.id);
      }
    });
  };

  const visibleDays =
    phaseFilter === 'all' ? ROADMAP_DAYS : ROADMAP_DAYS.filter((d) => d.phase === phaseFilter);

  const phaseStats = PHASES.map((phase) => {
    const days = ROADMAP_DAYS.filter((d) => d.phase === phase);
    return { phase, done: days.filter(isDayDone).length, total: days.length };
  });

  const promptById = (id: string) => MASTER_PROMPTS.find((p) => p.id === id);

  return (
    <div className="space-y-6">
      {/* Encabezado de progreso */}
      <div className="bg-white border border-[#DCE4F5] rounded-xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#163A9F] bg-[#E4EBFB] px-2.5 py-1 rounded-full mb-2 font-label">
              <Flame className="w-3.5 h-3.5" /> Plan Detallado Día por Día · Máx. 60 Minutos
            </span>
            <h2 className="text-xl font-bold text-[#0E1B3D]">
              30 Días con Pasos Minuto a Minuto, Prompts del Día y Entregables Claros
            </h2>
            <p className="text-sm text-[#5A6472] mt-1">
              Tildá cada paso al terminarlo (se guarda solo). Los días que usan prompts de IA tienen
              su acceso directo para copiarlos ya personalizados.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-center">
            <div className="text-right">
              <div className="font-mono-num text-2xl font-extrabold text-[#163A9F]">{pct}%</div>
              <div className="text-xs text-[#5A6472]">
                {completedSteps}/{totalSteps} pasos completados
              </div>
            </div>
            {completedSteps > 0 && (
              <button
                onClick={onResetTasks}
                title="Reiniciar todo el checklist"
                className="p-2 rounded-lg border border-[#DCE4F5] text-[#5A6472] hover:bg-[#F7F8FC] transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="w-full h-2.5 bg-[#E4EBFB] rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#163A9F] transition-all duration-300"
            style={{ width: `${Math.max(3, pct)}%` }}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPhaseFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              phaseFilter === 'all'
                ? 'bg-[#0E1B3D] text-white'
                : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472] hover:bg-[#E4EBFB]'
            }`}
          >
            Ver los 30 días
          </button>
          {phaseStats.map((ps) => (
            <button
              key={ps.phase}
              onClick={() => setPhaseFilter(ps.phase)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                phaseFilter === ps.phase
                  ? 'bg-[#163A9F] text-white'
                  : 'bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472] hover:bg-[#E4EBFB]'
              }`}
            >
              {ps.phase} ({ps.done}/{ps.total})
            </button>
          ))}
        </div>
      </div>

      {/* Lista de días */}
      <div className="space-y-5">
        {visibleDays.map((day) => {
          const done = isDayDone(day);
          const doneCount = dayProgress(day);
          const dayPrompts = (day.promptIds ?? []).map(promptById).filter(Boolean);
          return (
            <div
              key={day.day}
              className={`bg-white rounded-xl overflow-hidden transition border ${
                done ? 'border-[#B9C7E4] bg-[#FBFCFE]' : 'border-[#DCE4F5]'
              } shadow-xs`}
            >
              {/* Cabecera del día */}
              <div className="p-4 sm:p-5 bg-[#F7F8FC] border-b border-[#DCE4F5]">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleWholeDay(day)}
                    className="shrink-0 mt-0.5 cursor-pointer transition"
                    title={done ? 'Desmarcar día completo' : 'Completar todo el día de una vez'}
                  >
                    {done ? (
                      <CheckCircle2 className="w-7 h-7 text-[#37D67A] fill-[#E8FBF0]" />
                    ) : (
                      <Circle className="w-7 h-7 text-[#B9C7E4] hover:text-[#163A9F]" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono-num text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#0E1B3D] text-white">
                        DÍA {day.day}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-[#DCE4F5] text-[#5A6472]">
                        {day.phase}
                      </span>
                      <span className="font-mono-num text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#E4EBFB] text-[#163A9F]">
                        {doneCount}/{day.steps.length} pasos · 60 min
                      </span>
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-bold ${
                        done ? 'line-through text-[#5A6472]' : 'text-[#0E1B3D]'
                      }`}
                    >
                      {day.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6472] mt-0.5">{day.goal}</p>
                  </div>
                </div>

                {/* Entregable */}
                <div className="mt-3 flex items-center gap-2 bg-white border border-[#B9C7E4] rounded-lg px-3 py-2 text-xs">
                  <Package className="w-4 h-4 text-[#163A9F] shrink-0" />
                  <span className="text-[#0E1B3D]">
                    <strong className="text-[#163A9F]">Al terminar hoy tenés:</strong>{' '}
                    {day.deliverable}
                  </span>
                </div>

                {/* Prompts del día */}
                {dayPrompts.length > 0 && (
                  <div className="mt-2.5 bg-[#FFE9E3] border border-[#FFC9BC] rounded-lg px-3 py-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#D63E1E] font-label">
                        <Wand2 className="w-3.5 h-3.5" /> Usá hoy estos prompts de IA:
                      </span>
                      {dayPrompts.map((p) => (
                        <button
                          key={p!.id}
                          onClick={onGoToPrompts}
                          className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-md bg-white border border-[#FFC9BC] text-[#0E1B3D] hover:bg-[#0E1B3D] hover:text-white transition cursor-pointer"
                        >
                          {p!.badge.split('·')[0].trim()} · {p!.title.split('(')[0].trim()}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                    {day.promptNote && (
                      <p className="text-[11px] text-[#7C2A18] mt-1.5">{day.promptNote}</p>
                    )}
                  </div>
                )}

                {day.promptNote && dayPrompts.length === 0 && (
                  <div className="mt-2.5 bg-[#E4EBFB] border border-[#B9C7E4] rounded-lg px-3 py-2 text-[11px] text-[#0E1B3D]">
                    <Wand2 className="w-3.5 h-3.5 inline mr-1 text-[#163A9F]" />
                    {day.promptNote}
                  </div>
                )}
              </div>

              {/* Pasos */}
              <div className="divide-y divide-[#F0F4F8]">
                {day.steps.map((s, idx) => {
                  const sDone = completedIds.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      className={`px-4 sm:px-5 py-3.5 flex items-start gap-3 ${
                        sDone ? 'bg-[#F7F8FC]/70' : ''
                      }`}
                    >
                      <button
                        onClick={() => onToggleTask(s.id)}
                        className="shrink-0 mt-0.5 cursor-pointer text-[#163A9F] hover:scale-110 transition"
                      >
                        {sDone ? (
                          <CheckCircle2 className="w-5 h-5 fill-[#E8FBF0]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#C7D3EA]" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono-num text-[11px] font-bold text-[#0E1B3D] bg-[#F7F8FC] border border-[#DCE4F5] px-2 py-0.5 rounded">
                            ⏱ {s.time}
                          </span>
                          <span className="font-mono-num text-[10px] text-[#8E95A5]">
                            Paso {idx + 1}/{day.steps.length}
                          </span>
                        </div>
                        <p
                          className={`text-sm mt-1 leading-relaxed ${
                            sDone ? 'line-through text-[#5A6472]' : 'text-[#0E1B3D]'
                          }`}
                        >
                          {s.action}
                        </p>
                        {s.tip && (
                          <div className="flex items-start gap-1.5 mt-1.5 text-xs text-[#7C2A18]">
                            <Lightbulb className="w-3.5 h-3.5 text-[#FF5A36] shrink-0 mt-0.5" />
                            <span>{s.tip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trampa + Consejo Pro */}
              <div className="px-4 sm:px-5 py-4 bg-[#F7F8FC] border-t border-[#DCE4F5] grid grid-cols-1 md:grid-cols-2 gap-3">
                {day.avoid && (
                  <div className="flex items-start gap-2 bg-white border border-[#FFC9BC] rounded-lg px-3 py-2.5 text-xs text-[#7C2A18]">
                    <Ban className="w-4 h-4 text-[#D63E1E] shrink-0 mt-0.5" />
                    <span>
                      <strong>⛔ Trampa a evitar hoy:</strong> {day.avoid}
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-2 bg-white border border-[#B9C7E4] rounded-lg px-3 py-2.5 text-xs text-[#0B2547]">
                  <CalendarDays className="w-4 h-4 text-[#163A9F] shrink-0 mt-0.5" />
                  <span>
                    <strong>💎 Consejo Pro de tu coach:</strong> {day.coachProTip}
                  </span>
                </div>
              </div>

              {!done && (
                <div className="px-4 sm:px-5 py-2.5 border-t border-[#F0F4F8] flex justify-end">
                  <button
                    onClick={() => toggleWholeDay(day)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#DCE4F5] text-[#5A6472] hover:bg-[#0E1B3D] hover:text-white hover:border-[#0E1B3D] transition cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" /> Marcar día completo
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
