import React from 'react';

const Win7Logo = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
      {/* Subtle radial dark glow behind emblem */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle desktop typography watermark */}
      <div className="absolute bottom-24 flex flex-col items-center justify-center text-center opacity-80">
        <div className="flex items-baseline gap-2 drop-shadow-[0_2px_12px_rgba(0,180,255,0.4)]">
          <span className="text-white/90 text-2xl sm:text-3xl font-light tracking-wide font-sans">
            Windows
          </span>
          <span className="text-3xl sm:text-4xl font-black font-sans tracking-tight bg-gradient-to-b from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            7
          </span>
        </div>
        <div className="text-[10px] sm:text-[11px] text-cyan-200/70 font-semibold tracking-[4px] uppercase mt-0.5 drop-shadow">
          Dark Edition · Rohan Lal Portfolio
        </div>
      </div>

      {/* Classic bottom-right desktop watermark */}
      <div className="absolute bottom-14 right-6 text-right text-slate-400/60 text-[11px] font-sans leading-tight pointer-events-none drop-shadow">
        <div className="font-semibold text-slate-300/70">Windows 7 Dark Ultimate</div>
        <div className="text-[10px] text-slate-500/80">Portfolio Evaluation Copy. Build 7601</div>
      </div>
    </div>
  );
};

export default Win7Logo;

