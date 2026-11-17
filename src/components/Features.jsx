const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
      </svg>
    ),
    color: 'indigo',
    title: 'Cloud Without Complexity',
    description: 'We migrate, manage and optimise your cloud environment so your team can focus on the work that actually matters.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: 'cyan',
    title: 'Enterprise-Grade Security',
    description: 'Layered cybersecurity covering endpoints, email, and identity — protecting your business from threats before they hit.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: 'violet',
    title: '24/7 Helpdesk Support',
    description: 'Real engineers, real answers — anytime. Our London-based support team resolves issues fast so downtime never drains your day.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    color: 'emerald',
    title: 'Scalable IT Packages',
    description: 'Start with what you need today and scale as you grow — our packages flex with your headcount, sites, and strategic goals.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    color: 'amber',
    title: 'Microsoft 365 Mastery',
    description: 'Get the most from your M365 licence — from Teams and SharePoint to Azure AD — fully configured, secured and supported.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    color: 'pink',
    title: 'Bulletproof Backup',
    description: 'Automated, encrypted backups with rapid recovery — so a ransomware attack or hardware failure never means you lose everything.',
  },
]

const colorMap = {
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', icon: 'text-indigo-400', badge: 'bg-indigo-500/15 text-indigo-300' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   icon: 'text-cyan-400',   badge: 'bg-cyan-500/15 text-cyan-300' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', icon: 'text-violet-400', badge: 'bg-violet-500/15 text-violet-300' },
  emerald:{ bg: 'bg-emerald-500/10',border: 'border-emerald-500/20',icon: 'text-emerald-400',badge: 'bg-emerald-500/15 text-emerald-300' },
  amber:  { bg: 'bg-amber-500/10',  border: 'border-amber-500/20',  icon: 'text-amber-400',  badge: 'bg-amber-500/15 text-amber-300' },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   icon: 'text-pink-400',   badge: 'bg-pink-500/15 text-pink-300' },
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb bg-indigo-700/10"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium mb-6">
            Everything Included
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Everything your business needs,{' '}
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Each package is crafted around your business goals — not a one-size-fits-all template.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const c = colorMap[feature.color]
            const delayClass = `reveal-delay-${(i % 3) + 1}`
            return (
              <div
                key={i}
                className={`feature-card rounded-2xl p-7 reveal ${delayClass}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} ${c.icon} flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
