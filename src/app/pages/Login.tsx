import { motion } from "motion/react";
import { ArrowRight, Sparkles, Github, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans flex items-center justify-center p-6 selection:bg-[#7C3AED]/30">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center shadow-lg shadow-[#7C3AED]/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="bg-[#18181B] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-50" />
          
          <h1 className="text-2xl font-semibold text-center mb-2">Welcome back</h1>
          <p className="text-[#A1A1AA] text-center mb-8 text-sm">Sign in to your Karyo workspace</p>

          <div className="space-y-4">
            <button 
              onClick={() => navigate('/app')}
              className="w-full bg-white text-black rounded-xl py-3 px-4 flex items-center justify-center gap-3 font-medium hover:bg-zinc-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button 
              onClick={() => navigate('/app')}
              className="w-full bg-[#24292F] text-white rounded-xl py-3 px-4 flex items-center justify-center gap-3 font-medium hover:bg-[#2c3238] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Continue with Email
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#A1A1AA]">
            <span>Don't have an account?</span>
            <button onClick={() => navigate('/onboarding')} className="text-white hover:text-[#7C3AED] transition-colors font-medium">Sign up</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
