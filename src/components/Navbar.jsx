import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 transition-all duration-300
        backdrop-blur-xl border-b border-white/10
        ${scrolled ? 'py-3 bg-[#050714]/95' : 'py-4 bg-[#050714]/70'}`}
    >
      {/* Logo */}
      <a
        href="#home"
        onClick={e => { e.preventDefault(); scrollTo('home') }}
        className="font-space text-2xl font-bold gradient-text tracking-tight no-underline"
      >
        Rohan<span className="text-cyan-400">.</span>dev
      </a>

      {/* Links */}
      <ul className="flex items-center gap-1 list-none m-0 p-0">
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={e => { e.preventDefault(); scrollTo(id) }}
              className="nav-link relative font-space text-sm font-medium text-slate-400 no-underline
                px-4 py-2 rounded-lg transition-all duration-300
                hover:text-slate-100 hover:bg-white/5"
            >
              {label}
            </a>
          </li>
        ))}

        {/* CTA button */}
        <li>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('contact') }}
            className="ml-2 inline-flex items-center gap-1 px-5 py-2 rounded-full font-space font-semibold text-sm text-white no-underline
              bg-gradient-to-r from-violet-600 to-cyan-500
              transition-all duration-300 hover:-translate-y-0.5
              shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)]"
          >
            Hire Me ✦
          </a>
        </li>
      </ul>
    </nav>
  )
}
