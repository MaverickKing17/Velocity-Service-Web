
import React, { useState, useRef, useEffect } from 'react';
import { generateTriageResponse } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Thanks for calling Priority Plumbing! I'm Chloe. Are you calling for a quick repair or to ask about the $12,000 heat pump rebates?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const response = await generateTriageResponse(userMessage, messages);
      setMessages(prev => [...prev, { role: 'ai', text: response || "I'm having trouble connecting to dispatch. Please call us directly!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to AI. Please try calling us instead." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden">
          <div className="bg-navy-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-safetyOrange-500 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-robot text-sm"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm">Jessica AI Triage</h3>
                <p className="text-[10px] text-gray-300">Switching between Chloe & Sam</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-navy-800 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your issue..."
                className="flex-1 text-sm bg-gray-100 border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-navy-800 outline-none"
              />
              <button 
                onClick={handleSend}
                className="bg-safetyOrange-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-safetyOrange-600 transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-navy-900 text-white rounded-full shadow-2xl hover:bg-navy-800 transition-all transform hover:scale-110"
        >
          <div className="absolute -top-2 -right-2 bg-safetyOrange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
            LIVE AI
          </div>
          <i className="fa-solid fa-comment-dots text-2xl group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
