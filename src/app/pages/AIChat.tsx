import { useState } from "react";
import { Sparkles, Send, Bot, User, Check, Package, FileText } from "lucide-react";
import { motion } from "motion/react";

export function AIChat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "I've reviewed today's performance. The Marketing Agent noticed a 20% drop in cart conversions. Would you like me to deploy the abandoned cart workflow?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "Understood. I've initiated the abandoned cart workflow via the Marketing Agent. I also prepared a draft report on the conversion drop." }]);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col max-w-4xl mx-auto">
      <div className="flex-1 overflow-y-auto pr-4 space-y-6 scrollbar-hide">
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center mb-4 shadow-xl shadow-[#7C3AED]/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">How can I help you lead today?</h1>
          <p className="text-[#A1A1AA] text-sm">Ask me to analyze data, execute workflows, or coordinate agents.</p>
        </div>

        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i} 
            className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-zinc-700' : 'bg-[#7C3AED]/20 border border-[#7C3AED]/30'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5 text-zinc-300" /> : <Bot className="w-5 h-5 text-[#7C3AED]" />}
            </div>
            <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#27272A] text-white' : 'bg-transparent text-white'}`}>
                {msg.content}
              </div>
              
              {/* Fake Interactive Component Example */}
              {msg.role === 'assistant' && i === 0 && (
                <div className="bg-[#18181B] border border-white/10 rounded-xl p-4 mt-2 w-full max-w-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#F59E0B]/20 rounded-lg">
                      <Package className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Abandoned Cart Workflow</h4>
                      <p className="text-xs text-[#A1A1AA]">Marketing Agent</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white text-black py-2 rounded-lg text-xs font-medium hover:bg-zinc-200 transition-colors">
                      Deploy Now
                    </button>
                    <button className="flex-1 bg-white/5 text-white border border-white/10 py-2 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors">
                      Review Steps
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 relative">
        <div className="absolute -top-12 left-0 right-0 flex justify-center gap-2">
          {["Generate P&L Report", "Check Inventory", "Draft Team Update"].map((prompt) => (
            <button key={prompt} onClick={() => setInput(prompt)} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors">
              {prompt}
            </button>
          ))}
        </div>
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Command your AI company..." 
            className="w-full bg-[#18181B] border border-white/10 rounded-2xl py-4 pl-4 pr-12 text-white focus:outline-none focus:border-[#7C3AED] transition-colors shadow-lg"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center mt-3">
          <span className="text-[10px] text-[#A1A1AA]">Karyo OS v1.0. AI can make mistakes. Consider verifying important actions.</span>
        </div>
      </div>
    </div>
  );
}
