import React, { useState, useRef, useEffect } from 'react';
import { askCoach, QUICK_QUESTIONS, TabId } from '../data/coachKB';
import { MessageCircle, X, Send, Sparkles, ArrowUpRight } from 'lucide-react';

interface ChatMessage {
  id: number;
  role: 'user' | 'coach';
  text: string;
  tab?: TabId;
  tabLabel?: string;
}

interface CoachChatProps {
  onGoTab: (t: TabId) => void;
}

let msgId = 0;
const nextId = () => ++msgId;

export const CoachChat: React.FC<CoachChatProps> = ({ onGoTab }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nextId(),
      role: 'coach',
      text:
        '¡Hola! Soy tu coach de Ábaco Digital, disponible 24/7. Preguntame lo que quieras: precios (tengo calculadora), PayPal/Ualá, qué hacer hoy, por qué no venden... o elegí una de las consultas rápidas de abajo.',
    },
  ]);
  const [typing, setTyping] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: clean }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = askCoach(clean);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: 'coach', text: reply.answer, tab: reply.tab, tabLabel: reply.tabLabel },
      ]);
    }, 650);
  };

  const showQuickChips = messages.length <= 1;

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-[#163A9F] hover:bg-[#0E1B3D] text-white shadow-lg transition cursor-pointer"
        aria-label="Consultar al coach"
      >
        <span className="relative">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-pulse" />
        </span>
        <span className="text-sm font-bold hidden sm:inline">{open ? 'Cerrar' : 'Consultar al Coach'}</span>
      </button>

      {/* Panel del chat */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-5 z-50 w-[min(400px,calc(100vw-2rem))] h-[min(540px,calc(100vh-9rem))] bg-white rounded-2xl border border-[#DCE4F5] shadow-2xl flex flex-col overflow-hidden">
          {/* Cabecera */}
          <div className="bg-[#0E1B3D] text-white px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF5A36] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Tu Coach de Ábaco Digital</div>
                <div className="text-[11px] text-[#DCE4F5]">Consultas rápidas · respuesta al instante</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F7F8FC]">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#0E1B3D] text-white rounded-br-sm'
                      : 'bg-white border border-[#DCE4F5] text-[#0E1B3D] rounded-bl-sm shadow-xs'
                  }`}
                >
                  {m.text}
                  {m.role === 'coach' && m.tab && (
                    <button
                      onClick={() => {
                        onGoTab(m.tab!);
                        setOpen(false);
                      }}
                      className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#163A9F] hover:text-[#D63E1E] transition cursor-pointer"
                    >
                      Ir a {m.tabLabel} <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#DCE4F5] rounded-2xl rounded-bl-sm px-4 py-3 shadow-xs">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E95A5] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E95A5] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E95A5] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Chips rápidos */}
          {showQuickChips && !typing && (
            <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 bg-white border-t border-[#DCE4F5] shrink-0">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-[11px] font-medium px-2.5 py-1.5 rounded-full bg-[#F7F8FC] border border-[#DCE4F5] text-[#5A6472] hover:bg-[#163A9F] hover:text-white transition cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 bg-white border-t border-[#DCE4F5] flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta rápida..."
              className="flex-1 px-3 py-2 rounded-lg bg-[#F7F8FC] border border-transparent focus:border-[#163A9F] focus:bg-white outline-none text-xs"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-lg bg-[#FF5A36] text-white disabled:opacity-40 hover:bg-[#D63E1E] transition cursor-pointer disabled:cursor-not-allowed"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
