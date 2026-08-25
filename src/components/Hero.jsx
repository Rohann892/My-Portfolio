function Particles() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-violet-400 animate-particle opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Animated background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050714] via-[#0d0a2e] to-[#050714] z-0" />

      {/* Orbs */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full
        bg-[radial-gradient(circle,rgba(124,58,237,0.35)_0%,transparent_70%)]
        blur-[80px] animate-orb z-0" />
      <div className="absolute -bottom-20 right-[20%] w-[400px] h-[400px] rounded-full
        bg-[radial-gradient(circle,rgba(6,182,212,0.25)_0%,transparent_70%)]
        blur-[80px] z-0" style={{ animation: 'orbFloat 8s ease-in-out -3s infinite' }} />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full
        bg-[radial-gradient(circle,rgba(124,58,237,0.2)_0%,transparent_70%)]
        blur-[80px] z-0" style={{ animation: 'orbFloat 8s ease-in-out -6s infinite' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid-bg z-[1] pointer-events-none" />

      {/* Particles */}
      <Particles />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8
        grid grid-cols-2 items-center gap-16 min-h-[calc(100vh-80px)]">

        {/* LEFT: Text */}
        <div className="flex flex-col gap-6 animate-fade-up">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start
            bg-violet-600/15 border border-violet-500/30
            px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400
            uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-dot" />
            Full Stack Developer
          </div>

          {/* Title */}
          <h1 className="font-space text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold
            leading-[1.1] tracking-[-2px]">
            Hi, I'm{' '}
            <span className="gradient-text">Rohan Lal</span>
            <br />
            I Build Digital
            <br />
            Experiences.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-400 font-normal">
            🚀 Crafting scalable web apps with modern tech
          </p>

          {/* Description */}
          <p className="text-base text-slate-500 leading-relaxed max-w-[450px]">
            Passionate full-stack developer with{' '}
            <strong className="text-violet-400 font-semibold">6+ months of hands-on experience</strong>{' '}
            building modern web applications. I love turning ideas into reality through clean code and stunning interfaces.
          </p>

          {/* Actions */}
          <div className="flex gap-4 items-center flex-wrap">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('contact') }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[0.95rem] text-white no-underline
                bg-gradient-to-r from-violet-600 to-cyan-500
                transition-all duration-300 hover:-translate-y-0.5
                shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)]"
            >
              Let's Work Together →
            </a>
            <a
              href="#about"
              onClick={e => { e.preventDefault(); scrollTo('about') }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-[0.95rem] text-slate-100 no-underline
                border border-white/10 bg-transparent
                transition-all duration-300
                hover:border-violet-400 hover:text-violet-400 hover:bg-violet-600/8"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT: Photo + badges */}
        <div className="flex flex-col items-center gap-6 animate-fade-right">
          <div className="relative w-[340px] h-[400px]">

            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-3xl glow-ring blur-[8px] opacity-70 z-0" />

            {/* Available to Work badge — top-left corner of photo */}
            <div className="absolute top-4 -left-3.5 z-20
              flex items-center gap-2
              bg-[#050714]/90 backdrop-blur-md
              border border-green-500/30
              px-3.5 py-2 rounded-full text-xs font-semibold text-green-400 whitespace-nowrap
              shadow-[0_4px_20px_rgba(34,197,94,0.15)]">
              <span className="ping-outer relative w-2.5 h-2.5 rounded-full" />
              Available to Work
            </div>

            {/* Photo frame */}
            <div className="relative z-[1] w-full h-full rounded-2xl overflow-hidden
              bg-gradient-to-br from-violet-600/20 to-cyan-500/10
              border border-white/10 flex items-center justify-center">
              {/* ── Swap this div for <img src={photo} alt="Rohan" className="w-full h-full object-cover" /> ── */}
              <div className="flex flex-col items-center gap-3 text-slate-500">
                <span className="text-6xl opacity-40">👤</span>
                <p className="text-xs text-center opacity-60">
                  Add your photo here
                  <br />
                  <code className="text-[0.65rem] opacity-50">src/assets/photo.jpg</code>
                </p>
              </div>
            </div>

            {/* Floating Experience card */}
            <div className="absolute -bottom-5 left-1/2 z-20
              bg-[#050714]/85 backdrop-blur-xl
              border border-white/10 rounded-2xl
              px-6 py-4 flex items-center gap-4 min-w-[220px]
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              animate-float-card whitespace-nowrap">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500
                flex items-center justify-center text-xl shrink-0">
                ⚡
              </div>
              <div>
                <div className="text-[0.65rem] text-slate-500 uppercase tracking-widest font-semibold">
                  Experience
                </div>
                <div className="text-lg font-extrabold font-space gradient-text">
                  6+ Months
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
