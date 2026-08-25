import React, { useState, useEffect } from 'react';
import { 
  User, Code2, Briefcase, Mail, Power, 
  Search, Shield, Volume2, Wifi, ChevronUp, Sparkles, Terminal
} from 'lucide-react';

const iconMap = {
  about: User,
  projects: Code2,
  experience: Briefcase,
  contact: Mail,
};

const Taskbar = ({ openWindows, activeWindowId, onWindowClick, onOpenFolder }) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { id: 'about', title: 'About Rohan', subtitle: 'Developer Profile & Specs', icon: User },
    { id: 'projects', title: 'Projects Folder', subtitle: 'Browse all creations', icon: Code2 },
    { id: 'experience', title: 'Experience Log', subtitle: 'Work history & skills', icon: Briefcase },
    { id: 'contact', title: 'Contact Me', subtitle: 'Send email / message', icon: Mail },
  ];

  return (
    <>
      {/* Windows 7 Start Menu */}
      {startMenuOpen && (
        <div 
          className="absolute bottom-11 left-2 w-80 sm:w-96 rounded-t-xl bg-[#1e293b]/90 backdrop-blur-xl border border-blue-400/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] z-[70] overflow-hidden flex flex-col font-sans select-none animate-in fade-in slide-in-from-bottom-3 duration-150"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Start Menu Header / User Profile */}
          <div className="p-3.5 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 border-b border-white/20 flex items-center gap-3 text-white">
            <div className="w-11 h-11 rounded-lg bg-white/20 border border-white/40 shadow flex items-center justify-center font-bold text-lg text-white">
              RL
            </div>
            <div>
              <div className="font-bold text-sm leading-tight">Rohan Lal</div>
              <div className="text-[11px] text-blue-200">Full Stack Developer</div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="p-2 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] divide-y divide-slate-200 text-slate-800">
            <div className="space-y-1 pb-2">
              {menuItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onOpenFolder(item.id, item.title);
                      setStartMenuOpen(false);
                    }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100/80 cursor-pointer transition-all group"
                  >
                    <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                      <ItemIcon size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-slate-500">{item.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="pt-2 px-1 text-[11px] text-slate-600 flex items-center justify-between">
              <span className="font-semibold text-slate-700">Quick Actions</span>
              <a 
                href="https://github.com/rohanlal" 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* Start Menu Footer / Search & Power */}
          <div className="p-2.5 bg-[#0f172a] border-t border-slate-700 flex items-center justify-between gap-2">
            <div className="flex-1 flex items-center bg-slate-800/80 rounded px-2 py-1 text-xs border border-slate-700 text-slate-300">
              <Search size={12} className="mr-1.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search programs and files" 
                className="bg-transparent outline-none text-[11px] w-full placeholder:text-slate-500 placeholder:italic"
              />
            </div>
            <button 
              onClick={() => setStartMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold shadow-sm transition-colors"
              title="Close Menu"
            >
              <Power size={12} /> Shut down
            </button>
          </div>
        </div>
      )}

      {/* Taskbar Main Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a192f]/95 via-[#1a365d]/90 to-[#2b4c7e]/85 backdrop-blur-md border-t border-white/30 flex items-center px-2 z-[60] shadow-[0_-3px_15px_rgba(0,0,0,0.4)] select-none font-sans"
        onClick={() => startMenuOpen && setStartMenuOpen(false)}
      >
        {/* Windows 7 Pearl Start Orb */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setStartMenuOpen(!startMenuOpen);
          }}
          className={`relative flex items-center justify-center w-11 h-11 -mt-1 rounded-full transition-all group shrink-0 ${
            startMenuOpen ? 'scale-105 ring-2 ring-cyan-400' : 'hover:scale-105'
          }`}
          title="Start"
        >
          {/* Glass orb styling */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-800 shadow-[0_2px_8px_rgba(0,120,255,0.6)] border-2 border-white/60 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-white/70 group-hover:via-white/50 transition-colors flex items-center justify-center">
              {/* Windows 4-color emblem */}
              <div className="grid grid-cols-2 gap-0.5 transform -rotate-12 scale-90">
                <div className="w-2 h-2 bg-red-500 rounded-tl-sm shadow-sm" />
                <div className="w-2 h-2 bg-emerald-500 rounded-tr-sm shadow-sm" />
                <div className="w-2 h-2 bg-blue-500 rounded-bl-sm shadow-sm" />
                <div className="w-2 h-2 bg-amber-400 rounded-br-sm shadow-sm" />
              </div>
            </div>
          </div>
        </button>

        {/* Taskbar App Tabs */}
        <div className="flex-1 flex items-center gap-1.5 h-full py-1 px-2 overflow-x-auto">
          {openWindows.map((win) => {
            const IconComp = iconMap[win.id] || User;
            const isActive = activeWindowId === win.id;
            return (
              <button 
                key={win.id}
                onClick={() => onWindowClick(win.id)}
                className={`h-full px-3 text-xs text-white rounded flex items-center gap-2 transition-all max-w-[170px] truncate border shadow-sm ${
                  isActive 
                    ? 'bg-gradient-to-b from-white/35 to-white/15 border-white/50 text-white font-bold shadow-inner' 
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-slate-200'
                }`}
                title={win.title}
              >
                <IconComp size={14} className="text-cyan-300 shrink-0" />
                <span className="truncate">{win.title}</span>
              </button>
            );
          })}
        </div>

        {/* System Tray (Notifications, Wifi, Sound, Clock) */}
        <div className="flex items-center gap-2.5 px-2.5 py-1 bg-black/20 rounded border border-white/15 text-white shadow-inner shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-slate-300">
            <Wifi size={13} className="text-emerald-400" title="Connected to Internet" />
            <Volume2 size={13} className="text-slate-200" title="Speakers: 100%" />
          </div>

          <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

          {/* Clock & Date */}
          <div className="text-right leading-none cursor-pointer hover:text-cyan-300 transition-colors">
            <div className="text-[11px] font-bold font-mono">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="text-[9px] text-slate-300 font-mono mt-0.5">
              {time.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          {/* Show Desktop sliver */}
          <div 
            className="w-1.5 h-6 ml-1 bg-white/20 hover:bg-white/50 rounded-xs border-l border-white/30 cursor-pointer"
            title="Show Desktop"
            onClick={() => onWindowClick(null)}
          />
        </div>
      </div>
    </>
  );
};

export default Taskbar;
