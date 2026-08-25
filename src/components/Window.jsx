import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { 
  X, Minus, Square, ChevronLeft, ChevronRight, Search, 
  HardDrive, Folder, Star, Clock, Monitor, User,
  FileText, Briefcase, Mail, Code2, RefreshCw
} from 'lucide-react';

const Window = ({ 
  id, 
  title, 
  icon: IconComponent = Folder,
  path = "Computer > Local Disk (C:) > Portfolio",
  children, 
  onClose, 
  isActive, 
  onFocus, 
  onNavigate,
  width = 860, 
  height = 540,
  itemCount = "1 item"
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const quickNav = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <Draggable 
      handle=".window-header" 
      onMouseDown={onFocus} 
      bounds="parent"
      disabled={isMaximized}
    >
      <div 
        className={`absolute flex flex-col bg-[#f0f4f9] border border-[#3b71ca]/60 rounded-t-lg rounded-b shadow-2xl transition-all select-none overflow-hidden font-sans ${
          isMaximized 
            ? 'inset-0 w-full h-[calc(100vh-2.5rem)] rounded-none !transform-none z-50' 
            : isActive 
              ? 'z-50 shadow-[0_12px_45px_rgba(0,30,80,0.45)] ring-1 ring-white/40' 
              : 'z-40 shadow-[0_6px_25px_rgba(0,0,0,0.3)] opacity-95'
        }`}
        style={!isMaximized ? { width: `${width}px`, height: `${height}px`, minWidth: '480px', minHeight: '340px' } : {}}
        onClick={onFocus}
      >
        {/* Windows 7 Aero Glass Titlebar */}
        <div className="window-header relative flex items-center justify-between px-3 py-1.5 bg-gradient-to-b from-[#b8d2f2]/90 via-[#99bde6]/80 to-[#78a5dc]/90 backdrop-blur-lg border-b border-white/60 cursor-grab active:cursor-grabbing shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          {/* Glass sheen overlay */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-2 z-10">
            <div className="p-1 rounded bg-white/30 border border-white/40 shadow-sm flex items-center justify-center">
              <IconComponent size={15} className="text-blue-700" />
            </div>
            <span className="text-xs font-semibold text-[#1e395b] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] tracking-wide">
              {title}
            </span>
          </div>

          {/* Windows 7 Aero Window Controls */}
          <div className="flex items-center gap-1 z-10">
            <button 
              className="w-7 h-5 flex items-center justify-center rounded-sm bg-gradient-to-b from-white/30 to-blue-200/30 hover:from-white/50 hover:to-blue-200/60 border border-white/40 shadow-sm hover:shadow active:translate-y-[1px] transition-all" 
              title="Minimize"
            >
              <Minus size={11} className="text-[#1e395b]" />
            </button>
            <button 
              className="w-7 h-5 flex items-center justify-center rounded-sm bg-gradient-to-b from-white/30 to-blue-200/30 hover:from-white/50 hover:to-blue-200/60 border border-white/40 shadow-sm hover:shadow active:translate-y-[1px] transition-all" 
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized(!isMaximized);
              }}
              title={isMaximized ? "Restore Down" : "Maximize"}
            >
              <Square size={10} className="text-[#1e395b]" />
            </button>
            <button 
              className="w-10 h-5 flex items-center justify-center rounded-sm bg-gradient-to-b from-[#e87070] to-[#c93232] hover:from-[#f58484] hover:to-[#e03d3d] border border-[#a82222] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] active:translate-y-[1px] transition-all group" 
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
              title="Close"
            >
              <X size={12} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]" />
            </button>
          </div>
        </div>

        {/* Windows Explorer Navigation Bar (Address + Search) */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-[#f2f6fa] to-[#e4ebf3] border-b border-[#c2d0df] text-xs">
          {/* Back & Forward & Refresh Buttons */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => onNavigate && onNavigate('back')}
              className="w-6 h-6 rounded-full bg-gradient-to-b from-white to-[#cdd8e6] border border-[#8da5be] flex items-center justify-center text-[#2a4d77] hover:brightness-110 active:brightness-95 shadow-sm"
              title="Back"
            >
              <ChevronLeft size={14} />
            </button>
            <button 
              className="w-6 h-6 rounded-full bg-gradient-to-b from-white to-[#cdd8e6] border border-[#8da5be] flex items-center justify-center text-[#9bb0c4] cursor-not-allowed shadow-sm"
              title="Forward"
              disabled
            >
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Breadcrumb Address Bar */}
          <div className="flex-1 flex items-center px-2 py-1 bg-white border border-[#8da5be] rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] gap-1 overflow-x-auto text-[11px] text-[#334e68]">
            <HardDrive size={13} className="text-blue-600 shrink-0" />
            <span className="text-slate-400">Computer</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-400">Rohan (C:)</span>
            <span className="text-slate-400">›</span>
            <span className="font-semibold text-blue-900 bg-blue-50 px-1 rounded">{title}</span>
          </div>

          {/* Search Box */}
          <div className="w-48 hidden sm:flex items-center px-2 py-1 bg-white border border-[#8da5be] rounded shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] gap-1.5">
            <Search size={12} className="text-slate-400 shrink-0" />
            <input 
              type="text" 
              placeholder={`Search ${title}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[11px] outline-none text-slate-700 placeholder:text-slate-400 placeholder:italic"
            />
          </div>
        </div>

        {/* Windows Explorer Command Bar */}
        <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-gradient-to-b from-[#eef3f8] to-[#dfe7f0] border-b border-[#cbd7e4] text-[11px] text-[#2c4766]">
          <button className="px-2 py-0.5 rounded hover:bg-blue-100/70 border border-transparent hover:border-blue-300/60 transition-colors">
            Organize ▾
          </button>
          <div className="h-3 w-[1px] bg-slate-300 mx-1" />
          <button className="px-2 py-0.5 rounded hover:bg-blue-100/70 border border-transparent hover:border-blue-300/60 transition-colors">
            Open
          </button>
          <button className="px-2 py-0.5 rounded hover:bg-blue-100/70 border border-transparent hover:border-blue-300/60 transition-colors">
            Share with ▾
          </button>
          <div className="h-3 w-[1px] bg-slate-300 mx-1" />
          <button className="px-2 py-0.5 rounded hover:bg-blue-100/70 border border-transparent hover:border-blue-300/60 transition-colors">
            New folder
          </button>
        </div>

        {/* Main Explorer Body (Sidebar + Content View) */}
        <div className="flex-1 flex overflow-hidden bg-white">
          {/* Left Navigation Pane (Windows 7 Tree) */}
          <div className="w-44 hidden md:flex flex-col bg-[#f5f8fc] border-r border-[#d4deeb] p-2 overflow-y-auto text-[11px] text-[#223b57] shrink-0 select-none">
            {/* Favorites */}
            <div className="font-bold text-[#516f90] uppercase tracking-wider text-[10px] mb-1.5 flex items-center gap-1 px-1">
              <Star size={11} className="text-amber-500 fill-amber-400" /> Favorites
            </div>
            <div className="space-y-0.5 mb-3">
              <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-100/80 cursor-pointer text-slate-700">
                <Monitor size={13} className="text-blue-500" /> Desktop
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-100/80 cursor-pointer text-slate-700">
                <Clock size={13} className="text-indigo-500" /> Recent Places
              </div>
            </div>

            {/* Portfolio Folders Navigation */}
            <div className="font-bold text-[#516f90] uppercase tracking-wider text-[10px] mb-1.5 flex items-center gap-1 px-1">
              <Folder size={11} className="text-blue-500 fill-blue-400" /> Portfolio Root
            </div>
            <div className="space-y-0.5">
              {quickNav.map(item => {
                const ItemIcon = item.icon;
                const isSelected = item.id === id;
                return (
                  <div 
                    key={item.id}
                    onClick={() => onNavigate && onNavigate(item.id)}
                    className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                      isSelected 
                        ? 'bg-[#d8eafc] text-blue-900 font-semibold border border-[#9ac2ee]' 
                        : 'hover:bg-blue-100/70 text-slate-700'
                    }`}
                  >
                    <ItemIcon size={13} className={isSelected ? "text-blue-700" : "text-slate-500"} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* System Info Box */}
            <div className="mt-auto pt-3 border-t border-[#d4deeb] text-[10px] text-slate-500 px-1">
              <div className="font-semibold text-slate-700">Windows 7 Pro</div>
              <div>Rohan Lal Edition</div>
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-br from-white to-[#fbfcfe]">
            {children}
          </div>
        </div>

        {/* Windows Explorer Details / Status Pane */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-b from-[#e8eff7] to-[#d8e3f0] border-t border-[#c1d0e1] text-[11px] text-[#334e68] shrink-0">
          <div className="flex items-center gap-2">
            <IconComponent size={13} className="text-blue-600" />
            <span className="font-medium text-slate-700">{title}</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500">{itemCount}</span>
          </div>
          <div className="text-[10px] text-slate-500 hidden sm:block">
            Status: Ready · Portfolio v2.0
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;

