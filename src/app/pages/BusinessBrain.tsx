import { Search, FileText, Database, Network, Clock, UploadCloud, ChevronRight } from "lucide-react";

export function BusinessBrain() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Business Brain</h1>
          <p className="text-[#A1A1AA] text-sm">The semantic knowledge graph of your entire company.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#7C3AED]/20">
          <UploadCloud className="w-4 h-4" /> Add Knowledge
        </button>
      </header>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
        <input 
          type="text" 
          placeholder="Ask anything about past documents, decisions, or data..." 
          className="w-full bg-[#18181B] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors shadow-sm"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <span className="text-xs text-[#A1A1AA] border border-white/10 bg-white/5 px-2 py-1 rounded">Semantic Search Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <h3 className="font-medium text-[#A1A1AA] flex items-center gap-2">
            <Clock className="w-4 h-4" /> Recent Memories
          </h3>
          <div className="space-y-3">
            {[
              { type: "PDF", title: "Q3 Supplier Agreements", entity: "Legal", date: "2 hours ago" },
              { type: "Meeting", title: "Marketing Sync: Q4 Campaign", entity: "Marketing", date: "5 hours ago" },
              { type: "CSV", title: "Historical Inventory Data 2023", entity: "Operations", date: "1 day ago" },
              { type: "Decision", title: "Switched to AWS for hosting", entity: "Engineering", date: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#18181B] border border-white/5 rounded-xl hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#A1A1AA]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-white group-hover:text-[#7C3AED] transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#A1A1AA] bg-white/5 px-2 py-0.5 rounded">{item.type}</span>
                      <span className="text-xs text-[#A1A1AA]">{item.entity}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#A1A1AA]">{item.date}</span>
                  <ChevronRight className="w-4 h-4 text-[#A1A1AA] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-medium text-[#A1A1AA] flex items-center gap-2">
            <Network className="w-4 h-4" /> Knowledge Graph
          </h3>
          <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6 h-[400px] flex items-center justify-center relative overflow-hidden">
            {/* Fake Graph Visualization */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg shadow-[#7C3AED]/20 z-10">
                <Database className="w-6 h-6 text-white" />
              </div>
              
              {/* Nodes */}
              <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-[#4F46E5] rounded-full flex items-center justify-center opacity-80" />
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center opacity-80" />
              <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center opacity-80" />
              
              {/* Lines (SVG would be better here, but abstracting with CSS for quick mockup) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-white/10" strokeWidth="1">
                <line x1="50%" y1="50%" x2="25%" y2="25%" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" />
                <line x1="50%" y1="50%" x2="80%" y2="33%" />
              </svg>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-xs text-[#A1A1AA]">42,891 Nodes Indexed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
