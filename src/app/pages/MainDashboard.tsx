import { motion } from "motion/react";
import { Sparkles, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, Brain } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 6890 },
  { name: 'Sat', value: 8390 },
  { name: 'Sun', value: 9490 },
];

export function MainDashboard() {
  return (
    <div className="space-y-8 pb-10">
      <header>
        <h1 className="text-2xl font-semibold mb-1">Good Morning, Rahul</h1>
        <p className="text-[#A1A1AA] flex items-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-[#7C3AED]" /> 
          AI Confidence is at 98%. 3 tasks require your attention.
        </p>
      </header>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Business Health", value: "94/100", trend: "+2%", color: "text-[#22C55E]" },
          { label: "Today's Revenue", value: "$12,450", trend: "+14%", color: "text-[#22C55E]" },
          { label: "Predicted EOD", value: "$18,200", trend: "High Confidence", color: "text-[#7C3AED]" },
          { label: "Active AI Agents", value: "8", trend: "Optimized", color: "text-[#A1A1AA]" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#18181B] border border-white/5 rounded-2xl p-5 shadow-sm">
            <h3 className="text-[#A1A1AA] text-sm mb-2 font-medium">{stat.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <span className={`text-xs font-medium ${stat.color}`}>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-[#18181B] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">Revenue Forecast</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg text-sm px-3 py-1.5 outline-none">
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs key="defs">
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1" key="gradient">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} key="stop1" />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} key="stop2" />
                  </linearGradient>
                </defs>
                <XAxis key="xaxis" dataKey="name" stroke="#A1A1AA" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis key="yaxis" stroke="#A1A1AA" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                  key="tooltip"
                  contentStyle={{ backgroundColor: '#18181B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area key="area" type="monotone" dataKey="value" stroke="#7C3AED" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6 flex flex-col">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#7C3AED]" /> 
            AI Recommendations
          </h3>
          <div className="flex-1 space-y-4">
            {[
              { title: "Approve Purchase Order", desc: "Inventory AI suggests ordering 50 units of SKU-A21.", icon: AlertTriangle, color: "text-[#F59E0B]" },
              { title: "Launch Promo Campaign", desc: "Marketing AI drafted an email for inactive customers.", icon: Sparkles, color: "text-[#7C3AED]" },
              { title: "Review Server Costs", desc: "CFO Agent found a potential 15% saving in AWS.", icon: TrendingUp, color: "text-[#22C55E]" },
            ].map((rec, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex gap-3">
                  <rec.icon className={`w-5 h-5 ${rec.color} flex-shrink-0`} />
                  <div>
                    <h4 className="font-medium text-sm mb-1 group-hover:text-[#7C3AED] transition-colors">{rec.title}</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">{rec.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
