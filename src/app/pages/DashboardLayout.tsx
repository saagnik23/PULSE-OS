import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  Sparkles, Bell, Search, LayoutDashboard, Brain, Users, 
  Package, LineChart, Zap, Settings, Command, Menu
} from "lucide-react";
import { useState } from "react";

export function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/app", icon: LayoutDashboard },
    { name: "AI Chat", path: "/app/chat", icon: Sparkles },
    { name: "Business Brain", path: "/app/brain", icon: Brain },
    { name: "AI Employees", path: "/app/employees", icon: Users },
    { name: "Automation Center", path: "/app/automation", icon: Zap },
    { name: "Inventory", path: "/app/inventory", icon: Package },
    { name: "Reports", path: "/app/reports", icon: LineChart },
  ];

  return (
    <div className="flex h-screen bg-[#09090B] text-white font-sans overflow-hidden selection:bg-[#7C3AED]/30">
      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#111113] border-r border-white/5 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center gap-3 px-6 h-16 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Karyo OS</span>
        </div>
        
        <div className="p-4">
          <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-[#A1A1AA] bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Search...</span>
            </div>
            <div className="flex items-center gap-1">
              <Command className="w-3 h-3" />
              <span className="text-xs">K</span>
            </div>
          </button>
        </div>

        <nav className="px-3 space-y-1 mt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => { navigate(item.path); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-[#7C3AED]/10 text-[#7C3AED]" 
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 inset-x-0 p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Topbar */}
        <header className="h-16 flex-shrink-0 flex items-center justify-between px-6 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-[#A1A1AA] hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#A1A1AA] hover:text-white transition-colors rounded-full hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#7C3AED] rounded-full border-2 border-[#09090B]"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10" />
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
