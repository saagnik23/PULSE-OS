import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, UploadCloud, CheckCircle2, Building, Mail, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans p-6 selection:bg-[#7C3AED]/30 flex flex-col">
      <header className="flex items-center justify-between py-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Karyo OS</span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1.5 w-12 rounded-full ${i <= step ? 'bg-[#7C3AED]' : 'bg-white/10'}`} />
          ))}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full max-w-lg"
        >
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-semibold mb-2">Let's set up your brain</h1>
                <p className="text-[#A1A1AA]">Tell us about your business so Karyo can adapt.</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                    <input 
                      type="text" 
                      placeholder="Acme Corp" 
                      className="w-full bg-[#18181B] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">Industry</label>
                  <select className="w-full bg-[#18181B] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none">
                    <option>E-commerce</option>
                    <option>SaaS</option>
                    <option>Agency</option>
                    <option>Retail</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-semibold mb-2">Feed your AI</h1>
                <p className="text-[#A1A1AA]">Upload knowledge bases, CSVs, or PDFs.</p>
              </div>
              
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/5 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <UploadCloud className="w-8 h-8 text-[#A1A1AA]" />
                </div>
                <h3 className="font-medium mb-1">Drag and drop files</h3>
                <p className="text-sm text-[#A1A1AA]">or click to browse</p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 bg-white/5 text-white rounded-xl py-3 font-medium hover:bg-white/10 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-white text-black rounded-xl py-3 font-semibold hover:bg-zinc-200 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-semibold mb-2">Connect data sources</h1>
                <p className="text-[#A1A1AA]">Integrate your existing tools for real-time memory.</p>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "Gmail", icon: Mail, connected: true },
                  { name: "Stripe", icon: FileText, connected: false },
                  { name: "Shopify", icon: UploadCloud, connected: false },
                ].map((integration, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#18181B] border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <integration.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{integration.name}</span>
                    </div>
                    {integration.connected ? (
                      <div className="flex items-center gap-2 text-[#22C55E] text-sm font-medium px-3 py-1 rounded-full bg-[#22C55E]/10">
                        <CheckCircle2 className="w-4 h-4" /> Connected
                      </div>
                    ) : (
                      <button className="text-sm font-medium text-[#A1A1AA] hover:text-white px-4 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setStep(2)}
                  className="flex-1 bg-white/5 text-white rounded-xl py-3 font-medium hover:bg-white/10 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => navigate('/app')}
                  className="flex-[2] bg-[#7C3AED] text-white rounded-xl py-3 font-semibold hover:bg-[#6D28D9] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#7C3AED]/25"
                >
                  Initialize OS <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
