import { Package, Search, Filter, AlertTriangle, TrendingDown, ArrowUpRight } from "lucide-react";

export function Inventory() {
  const stock = [
    { sku: "SKU-A21", name: "Premium Widget V2", inStock: 42, threshold: 50, status: "Low Stock", forecast: "Out in 4 days" },
    { sku: "SKU-B09", name: "Standard Widget", inStock: 840, threshold: 100, status: "Healthy", forecast: "Stable" },
    { sku: "SKU-C44", name: "Widget Case", inStock: 12, threshold: 20, status: "Critical", forecast: "Out Tomorrow" },
    { sku: "SKU-D12", name: "Pro Bundle", inStock: 215, threshold: 50, status: "Healthy", forecast: "Stable" },
  ];

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Inventory & Supply Chain</h1>
          <p className="text-[#A1A1AA] text-sm">Managed by the Inventory AI Agent.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
            Generate PO
          </button>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#7C3AED]/20">
            Ask AI
          </button>
        </div>
      </header>

      {/* AI Suggestion Banner */}
      <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-2xl p-4 flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mt-1">
          <Package className="w-4 h-4 text-[#7C3AED]" />
        </div>
        <div className="flex-1">
          <h4 className="text-[#7C3AED] font-medium text-sm mb-1">Inventory AI Insight</h4>
          <p className="text-sm text-[#A1A1AA]">SKU-C44 and SKU-A21 are projected to run out within 4 days based on recent sales velocity. I have prepared a draft Purchase Order for your approval.</p>
        </div>
        <button className="text-sm font-medium text-[#7C3AED] hover:text-white px-4 py-2 rounded-lg border border-[#7C3AED]/30 hover:bg-[#7C3AED]/20 transition-colors">
          Review PO
        </button>
      </div>

      <div className="bg-[#18181B] border border-white/5 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]" />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
            />
          </div>
          <button className="p-2 border border-white/10 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs text-[#A1A1AA] bg-white/5">
                <th className="px-6 py-3 font-medium">Product</th>
                <th className="px-6 py-3 font-medium">In Stock</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">AI Forecast</th>
                <th className="px-6 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {stock.map((item, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="text-xs text-[#A1A1AA]">{item.sku}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium">{item.inStock}</div>
                    <div className="text-xs text-[#A1A1AA]">Min: {item.threshold}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Critical' ? 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20' :
                      item.status === 'Low Stock' ? 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20' :
                      'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20'
                    }`}>
                      {item.status === 'Healthy' ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      {item.forecast !== 'Stable' && <TrendingDown className="w-3 h-3 text-[#F59E0B]" />}
                      {item.forecast}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#A1A1AA] hover:text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Simple checkcircle for inventory since it's not imported at top
function CheckCircle2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
}
