import React, { useState } from 'react';
import { Folder, User, Code2, Briefcase, Mail, HardDrive, Terminal } from 'lucide-react';

const iconMap = {
  about: User,
  projects: Code2,
  experience: Briefcase,
  contact: Mail,
  default: Folder
};

const DesktopIcon = ({ id, title, iconType = 'default', onOpen }) => {
  const [isSelected, setIsSelected] = useState(false);

  const IconComp = iconMap[id] || iconMap.default;

  return (
    <div 
      className={`group flex flex-col items-center justify-center w-24 p-2 m-1.5 rounded cursor-pointer transition-all border select-none ${
        isSelected 
          ? 'bg-blue-500/25 border-blue-300/60 shadow-[0_0_8px_rgba(100,180,255,0.4)] backdrop-blur-[2px]' 
          : 'border-transparent hover:bg-white/15 hover:border-white/20'
      }`}
      onClick={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      onDoubleClick={() => {
        setIsSelected(false);
        onOpen();
      }}
      tabIndex={0}
    >
      {/* Folder / App Icon with Windows 7 glow */}
      <div className="relative mb-1 transition-transform group-hover:scale-105 group-active:scale-95">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-400/90 to-yellow-200/90 shadow-md border border-amber-200/60 flex items-center justify-center">
          <IconComp size={24} className="text-amber-900 drop-shadow-sm" />
        </div>
      </div>

      {/* Label */}
      <span className="text-white text-xs font-semibold text-center drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.9)] leading-tight px-1 rounded line-clamp-2">
        {title}
      </span>
    </div>
  );
};

export default DesktopIcon;
