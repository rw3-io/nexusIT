const navColumns = [
  {
    title: 'Services',
    links: ['Managed IT', 'Cloud Solutions', 'Cybersecurity', 'Microsoft 365', 'Backup & Recovery', 'IT Consultancy'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Studies', 'Careers', 'Blog', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help Centre', 'System Status', 'Book an Audit', 'Contact Us', 'Remote Support'],
  },
]

const socials = [
  {
    name: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/6 bg-[#060a11] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Nexus<span className="gradient-text">IT</span>
              </span>
            </div>

            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              London's specialist IT partner for growing SMEs. Bespoke packages that scale with your strategy, backed by 24/7 UK support.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  title={social.name}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 text-white/50 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30 flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/45 text-sm hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-sm">
          <p>© {year} NexusIT Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
