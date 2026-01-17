
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { generateTriageResponse } from '../services/geminiService';

/** Utility for Tailwind classes merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'ai', 
      text: "Thanks for calling Priority Plumbing! I'm Chloe. Are you calling for a quick repair or to ask about the $12,000 heat pump rebates?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping) return;
    
    const userMessage: Message = { 
      role: 'user', 
      text: trimmedInput, 
      timestamp: new Date() 
    };
    
    setInput('');
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await generateTriageResponse(trimmedInput, messages);
      const aiMessage: Message = { 
        role: 'ai', 
        text: response || "I'm having trouble connecting to dispatch. Please call us directly at (289) 216-4428!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "System error. Please reach us at (289) 216-4428 for immediate assistance.",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white w-[90vw] sm:w-96 h-[600px] max-h-[80vh] rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] flex flex-col border border-slate-200 overflow-hidden mb-5"
            role="dialog"
            aria-label="AI Triage Chat"
          >
            {/* Header */}
            <div className="bg-navy-900 px-6 py-6 text-white flex justify-between items-center shrink-0 border-b border-navy-800">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-safetyOrange-500 rounded-2xl flex items-center justify-center rotate-3 shadow-lg shadow-safetyOrange-500/20">
                    <i className="fa-solid fa-headset text-xl"></i>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-navy-900 rounded-full shadow-sm"></div>
                </div>
                <div>
                  <h3 className="font-black text-lg leading-tight uppercase tracking-tight">Priority Triage</h3>
                  <p className="text-[10px] text-safetyOrange-400 font-black tracking-[0.15em] uppercase mt-1">AI Agent Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            {/* Chat History */}
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/80"
              role="log"
              aria-live="polite"
            >
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={cn(
                    "flex flex-col",
                    m.role === 'user' ? 'items-end' : 'items-start'
                  )}
                >
                  <div className={cn(
                    "max-w-[85%] px-5 py-3.5 rounded-3xl text-[14px] leading-relaxed font-medium shadow-sm",
                    m.role === 'user' 
                      ? 'bg-navy-800 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  )}>
                    {m.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 px-1 font-bold uppercase tracking-wider">
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-start"
                >
                  <div className="bg-white border border-slate-200 px-5 py-4 rounded-3xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-safetyOrange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-safetyOrange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-safetyOrange-500 rounded-full animate-bounce"></span>
                    <span className="ml-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Jessica is thinking</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-5 bg-white border-t border-slate-100">
              <div className="flex items-center gap-3 bg-slate-100/80 rounded-2xl px-5 py-2 focus-within:ring-2 focus-within:ring-navy-800 focus-within:bg-white transition-all shadow-inner">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Describe your issue..."
                  className="flex-1 text-sm bg-transparent border-none py-3 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                  aria-label="Chat input"
                  disabled={isTyping}
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center transition-all transform",
                    input.trim() && !isTyping
                      ? "bg-safetyOrange-500 text-white hover:bg-safetyOrange-600 shadow-lg shadow-safetyOrange-500/30 scale-100 active:scale-90"
                      : "bg-slate-200 text-slate-400 scale-95 cursor-not-allowed"
                  )}
                  aria-label="Send message"
                >
                  <i className="fa-solid fa-arrow-up text-lg"></i>
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-4 font-black uppercase tracking-[0.1em]">
                Emergency? Call <a href="tel:2892164428" className="text-navy-900 hover:text-safetyOrange-600 underline decoration-2 underline-offset-4 font-bold tracking-tight">(289) 216-4428</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - High Contrast for dark backgrounds */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center justify-center w-20 h-20 rounded-[1.75rem] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 border-2",
          isOpen 
            ? "bg-white text-navy-900 border-slate-200 shadow-xl" 
            : "bg-safetyOrange-500 text-white border-white/20 shadow-[0_15px_30px_rgba(249,115,22,0.5)]"
        )}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <i className="fa-solid fa-chevron-down text-2xl"></i>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="relative flex items-center justify-center"
            >
              {!isOpen && (
                <div className="absolute -top-14 right-0 bg-navy-900 text-white text-[11px] font-black px-4 py-2 rounded-2xl shadow-2xl whitespace-nowrap animate-bounce-subtle border border-navy-800">
                  <span className="text-safetyOrange-400">NEED HELP?</span> CHAT NOW
                  <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-navy-900 rotate-45 border-b border-r border-navy-800"></div>
                </div>
              )}
              <i className="fa-solid fa-comment-dots text-3xl"></i>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
