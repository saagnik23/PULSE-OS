import { Zap, Play, CheckCircle2, XCircle, ArrowRight, Plus } from "lucide-react";

export function AutomationCenter() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Automation Center</h1>
          <p className="text-[#A1A1AA] text-sm">Design, monitor, and approve autonomous agent workflows.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#7C3AED]/20">
          <Plus className="w-4 h-4" /> New Workflow
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 text-lg">Active Workflows</h3>
            <div className="space-y-4">
              {[
                { name: "Abandoned Cart Recovery", agents: ["Marketing", "Sales"], triggers: 142, success: "98%", status: "Running" },
                { name: "Low Stock Auto-PO", agents: ["Inventory", "CFO"], triggers: 12, success: "100%", status: "Running" },
                { name: "Customer Complaint Routing", agents: ["Support"], triggers: 84, success: "94%", status: "Running" },
              ].map((wf, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <div>
                    <h4 className="font-medium text-sm mb-1">{wf.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <span>{wf.agents.join(" + ")}</span>
                      <span>•</span>
                      <span>{wf.triggers} executions today</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="block text-sm font-medium">{wf.success}</span>
                      <span className="text-xs text-[#A1A1AA]">Success</span>
                    </div>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Pending Approvals</h3>
            <div className="space-y-4">
              {[
                { title: "Purchase Order #8492", amount: "$4,200", agent: "Inventory AI" },
                { title: "Refund Request", amount: "$120", agent: "Support AI" },
              ].map((app, i) => (
                <div key={i} className="p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-medium text-[#F59E0B]">{app.title}</h4>
                    <span className="text-sm font-semibold">{app.amount}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mb-3">Requested by {app.agent}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#F59E0B] text-black py-1.5 rounded-lg text-xs font-medium hover:bg-[#D97706] transition-colors">
                      Approve
                    </button>
                    <button className="flex-1 bg-white/5 text-white py-1.5 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors border border-white/10">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
