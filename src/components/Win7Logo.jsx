import React from 'react';

const Win7Logo = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
      {/* Background ambient radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-transparent rounded-full blur-3xl" />
      
      <div className="relative flex flex-col items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
        {/* Windows 7 4-Color Wave Glass Logo */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Glass / Light trails background */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse" />

          {/* 4 Quadrants of the Windows Flag */}
          <div className="grid grid-cols-2 gap-2 transform -rotate-12 scale-110 drop-shadow-[0_10px_25px_rgba(0,40,120,0.5)]">
            {/* Red (Top Left) */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff5252] via-[#e53935] to-[#b71c1c] rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-tl-2xl" />
            </div>

            {/* Green (Top Right) */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#66bb6a] via-[#43a047] to-[#1b5e20] rounded-tr-2xl rounded-tl-sm rounded-bl-2xl rounded-br-sm border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-tr-2xl" />
            </div>

            {/* Blue (Bottom Left) */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#42a5f5] via-[#1e88e5] to-[#0d47a1] rounded-bl-2xl rounded-br-sm rounded-tr-2xl rounded-tl-sm border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-bl-2xl" />
            </div>

            {/* Yellow / Amber (Bottom Right) */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffca28] via-[#fbc02d] to-[#f57f17] rounded-br-2xl rounded-bl-sm rounded-tl-2xl rounded-tr-sm border border-white/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-sm transform hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-br-2xl" />
            </div>
          </div>
        </div>

        {/* Windows 7 Wordmark */}
        <div className="mt-4 flex items-baseline gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          <span className="text-white text-3xl sm:text-4xl font-light tracking-wide font-sans">
            Windows
          </span>
          <span className="text-white text-4xl sm:text-5xl font-bold font-sans tracking-tight bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent">
            7
          </span>
        </div>

        <div className="text-[11px] sm:text-xs text-blue-100/80 font-medium tracking-[4px] uppercase mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          Ultimate · Rohan Lal Edition
        </div>
      </div>

      {/* Classic bottom-right desktop watermark */}
      <div className="absolute bottom-14 right-6 text-right text-white/50 text-[11px] font-sans leading-tight pointer-events-none drop-shadow">
        <div>Windows 7 Ultimate</div>
        <div className="text-[10px] text-white/40">Portfolio Evaluation Copy. Build 7601</div>
      </div>
    </div>
  );
};

export default Win7Logo;
