const skills = [
  { name: 'React.js',    icon: '⚛️' },
  { name: 'Node.js',     icon: '🟩' },
  { name: 'JavaScript',  icon: '🟨' },
  { name: 'TypeScript',  icon: '🔷' },
  { name: 'MongoDB',     icon: '🍃' },
  { name: 'Express.js',  icon: '🚂' },
  { name: 'HTML5',       icon: '🌐' },
  { name: 'CSS3',        icon: '🎨' },
  { name: 'Git & GitHub',icon: '🐙' },
  { name: 'REST APIs',   icon: '🔗' },
  { name: 'Tailwind CSS',icon: '💨' },
  { name: 'MySQL',       icon: '🐬' },
  { name: 'Python',      icon: '🐍' },
  { name: 'Docker',      icon: '🐳' },
  { name: 'Vite',        icon: '⚡' },
  { name: 'Figma',       icon: '🎭' },
]

// Duplicated for seamless infinite loop
const allSkills = [...skills, ...skills]

export default function SkillsMarquee() {
  return (
    <div className="py-14 pb-6 overflow-hidden relative bg-[#050714]">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-48 z-10 pointer-events-none
        bg-gradient-to-r from-[#050714] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-48 z-10 pointer-events-none
        bg-gradient-to-l from-[#050714] to-transparent" />

      {/* Label */}
      <p className="text-center text-[0.7rem] font-bold tracking-[3px] uppercase
        text-slate-600 mb-8">
        Technologies I work with
      </p>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
        >
          {allSkills.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-2.5
                bg-white/5 border border-white/10 rounded-full
                px-5 py-2.5 text-sm font-semibold text-slate-400 whitespace-nowrap
                cursor-default transition-all duration-300
                hover:border-violet-400/50 hover:text-violet-400 hover:bg-violet-600/10 hover:scale-105"
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
