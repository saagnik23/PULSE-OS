import { Brain, Settings2, Power, BarChart3, Clock, AlertCircle } from "lucide-react";

const agents = [
  { role: "CEO Agent", name: "Alpha", status: "Active", task: "Reviewing daily OKRs", confidence: 98, memory: "1.2 TB", color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/10", border: "border-[#7C3AED]/20" },
  { role: "CFO Agent", name: "Vault", status: "Active", task: "Reconciling Stripe payouts", confidence: 99, memory: "840 GB", color: "text-[#22C55E]", bg: "bg-[#22C55E]/10", border: "border-[#22C55E]/20" },
  { role: "Marketing", name: "Growth", status: "Active", task: "A/B testing ad copy", confidence: 92, memory: "2.1 TB", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10", border: "border-[#F59E0B]/20" },
  { role: "Inventory", name: "Stock", status: "Paused", task: "Waiting for approval", confidence: 85, memory: "450 GB", color: "text-[#A1A1AA]", bg: "bg-white/5", border: "border-white/10" },
  { role: "Sales Rep", name: "Closer", status: "Active", task: "Drafting follow-up emails", confidence: 95, memory: "1.5 TB", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10", border: "border-[#4F46E5]/20" },
  { role: "Support", name: "Care", status: "Active", task: "Resolving 12 active tickets", confidence: 97, memory: "3.4 TB", color: "text-[#EC4899]", bg: "bg-[#EC4899]/10", border: "border-[#EC4899]/20" },
];

export function AIEmployees() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">AI Employees</h1>
          <p className="text-[#A1A1AA] text-sm">Manage, monitor, and deploy your intelligent workforce.</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
          Hire New Agent
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {agents.map((agent, i) => (
          <div key={i} className="bg-[#18181B] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${agent.bg} blur-3xl opacity-20 pointer-events-none`} />
            
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${agent.bg} ${agent.border} border flex items-center justify-center`}>
                  <Brain className={`w-6 h-6 ${agent.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{agent.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[#A1A1AA]">{agent.name}</span>
                    <span className="w-1 h-1 bg-[#A1A1AA] rounded-full" />
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${agent.status === 'Active' ? 'text-[#22C55E]' : 'text-[#A1A1AA]'}`}>
                      {agent.status}
                    </span>
                  </div>
                </div>
              </div>
              <button className="p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                <Settings2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-[#A1A1AA] block mb-1">Current Task</span>
                <p className="text-sm font-medium">{agent.task}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <span className="text-xs text-[#A1A1AA] block mb-1 flex items-center gap-1">
                    <BarChart3 className="w-3 h-3" /> Confidence
                  </span>
                  <span className="text-sm font-medium">{agent.confidence}%</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <span className="text-xs text-[#A1A1AA] block mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Memory
                  </span>
                  <span className="text-sm font-medium">{agent.memory}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-white/5 border border-white/5 text-white py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                Open Agent
              </button>
              <button className="px-4 bg-white/5 border border-white/5 text-white rounded-lg hover:bg-white/10 transition-colors">
                <Power className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
