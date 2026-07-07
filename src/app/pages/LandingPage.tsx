import { motion } from "motion/react";
import { ArrowRight, Sparkles, Brain, Zap, Shield, BarChart3, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans selection:bg-[#7C3AED]/30">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Karyo OS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
            <a href="#" className="hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors">
              Log in
            </button>
            <button onClick={() => navigate('/onboarding')} className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
              Start Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-[#A1A1AA] mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#7C3AED]" />
            Introducing the future of enterprise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            Run Your Business <br className="hidden md:block" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">AI Employees.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-12"
          >
            Karyo OS is the world's first AI-native operating system for businesses. 
            Replace clunky traditional ERP software with intelligent, proactive AI agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={() => navigate('/onboarding')} className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
              Start Free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Book Demo
            </button>
          </motion.div>
        </div>

        {/* Floating Cards Demo */}
        <div className="max-w-6xl mx-auto mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          >
            {[
              { role: "CFO Agent", task: "Optimizing Q3 Budget", status: "Active" },
              { role: "Inventory AI", task: "Reordering low stock", status: "Active" },
              { role: "Sales Rep", task: "Drafting follow-ups", status: "Active" },
            ].map((agent, i) => (
              <div key={i} className="bg-[#18181B] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center border border-[#7C3AED]/30">
                      <Brain className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{agent.role}</h3>
                      <p className="text-xs text-[#A1A1AA]">{agent.task}</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/5 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] w-2/3" />
                  </div>
                  <div className="flex justify-between text-xs text-[#A1A1AA]">
                    <span>Progress</span>
                    <span>67%</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
