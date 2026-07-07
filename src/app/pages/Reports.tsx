import { FileText, Download, LineChart, PieChart, BarChart3, ChevronDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

const revData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 7000 },
  { name: 'May', value: 6890 },
  { name: 'Jun', value: 8390 },
];

const expData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 3800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
];

export function Reports() {
  return (
    <div className="space-y-8 pb-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Executive Reports</h1>
          <p className="text-[#A1A1AA] text-sm">Compiled by your CFO Agent.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
            Last 6 Months <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#A1A1AA] text-sm font-medium">Total Revenue</h3>
            <span className="text-[#22C55E] text-xs font-medium bg-[#22C55E]/10 px-2 py-1 rounded-full">+24.5%</span>
          </div>
          <p className="text-3xl font-semibold mb-6">$34,280.00</p>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revData}>
                <defs key="defs">
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1" key="gradient">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} key="stop1" />
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0} key="stop2" />
                  </linearGradient>
                </defs>
                <Tooltip key="tooltip" contentStyle={{ backgroundColor: '#18181B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Area key="area" type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#A1A1AA] text-sm font-medium">Total Expenses</h3>
            <span className="text-[#F59E0B] text-xs font-medium bg-[#F59E0B]/10 px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-3xl font-semibold mb-6">$18,400.00</p>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expData}>
                <Tooltip key="tooltip" contentStyle={{ backgroundColor: '#18181B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                <Bar key="bar" dataKey="value" fill="#F59E0B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#A1A1AA] text-sm font-medium">Net Profit Margin</h3>
            <span className="text-[#7C3AED] text-xs font-medium bg-[#7C3AED]/10 px-2 py-1 rounded-full">+12.4%</span>
          </div>
          <p className="text-3xl font-semibold mb-6">46.3%</p>
          <div className="h-24 flex flex-col justify-end gap-2">
            <div className="flex justify-between text-xs text-[#A1A1AA]">
              <span>Target: 50%</span>
              <span>Actual: 46.3%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#7C3AED] w-[92%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#18181B] border border-white/5 rounded-2xl p-6">
        <h3 className="font-semibold mb-4">CFO Agent Insights</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
            <FileText className="w-5 h-5 text-[#7C3AED] mt-0.5" />
            <div>
              <h4 className="font-medium text-sm mb-1">Software subscriptions are up 15%</h4>
              <p className="text-sm text-[#A1A1AA]">I noticed an increase in AWS and Vercel bills this month. I recommend reviewing unused staging environments.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
            <LineChart className="w-5 h-5 text-[#22C55E] mt-0.5" />
            <div>
              <h4 className="font-medium text-sm mb-1">Strong performance in Enterprise tier</h4>
              <p className="text-sm text-[#A1A1AA]">Enterprise sales accounted for 60% of new revenue this month. The Sales Agent suggests doubling down on outbound sequences for this segment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
