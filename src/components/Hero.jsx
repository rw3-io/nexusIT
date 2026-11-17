export default function Hero() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden grid-pattern"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] orb bg-indigo-600/20" />
      <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] orb bg-cyan-500/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb bg-indigo-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
              London's Trusted IT Partner for SMEs
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
              IT That Grows{' '}
              <span className="gradient-text text-glow">With Your Business</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Bespoke IT services built for London SMEs. From cloud infrastructure to cybersecurity — scalable packages that align with your strategy, not just your budget.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                id="hero-cta"
                className="btn-primary px-8 py-4 rounded-2xl text-base font-bold w-full sm:w-auto text-center"
              >
                <span>Unlock your IT</span>
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium px-6 py-4"
              >
                See what's included
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                No long-term lock-in
              </span>
              <span className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                24/7 UK-based support
              </span>
              <span className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Free IT audit
              </span>
            </div>
          </div>

          {/* Right — illustration */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none float-anim">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 rounded-3xl blur-2xl scale-95" />

      {/* Main card */}
      <div className="relative rounded-3xl border border-white/10 bg-[#0d1525]/80 backdrop-blur-sm p-6 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/70"/>
            <div className="w-3 h-3 rounded-full bg-yellow-400/70"/>
            <div className="w-3 h-3 rounded-full bg-green-400/70"/>
          </div>
          <span className="text-white/30 text-xs font-mono">NexusIT Dashboard</span>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
        </div>

        {/* Stat chips */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Uptime', value: '99.9%', color: 'emerald' },
            { label: 'Tickets', value: '3 open', color: 'indigo' },
            { label: 'Speed', value: '+40%', color: 'cyan' },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/8 p-3 text-center">
              <p className={`text-base font-bold text-${stat.color}-400`}>{stat.value}</p>
              <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services list */}
        <div className="space-y-2 mb-5">
          {[
            { name: 'Cloud Infrastructure', status: 'Healthy', pct: 94 },
            { name: 'Endpoint Security', status: 'Secure', pct: 100 },
            { name: 'Microsoft 365', status: 'Active', pct: 78 },
            { name: 'Backup & Recovery', status: 'Synced', pct: 100 },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <ServiceIcon index={i} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/80 text-xs font-medium truncate">{item.name}</span>
                  <span className="text-emerald-400 text-xs ml-2 flex-shrink-0">{item.status}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1 rounded-full transition-all"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alert card */}
        <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/25 p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
          </div>
          <div>
            <p className="text-white/80 text-xs font-medium">Proactive maintenance scheduled</p>
            <p className="text-white/40 text-xs">Tonight 11pm — zero downtime expected</p>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl px-4 py-2 backdrop-blur-sm">
        <p className="text-emerald-400 text-xs font-bold">★ 4.9 / 5.0</p>
        <p className="text-white/40 text-xs">Client rating</p>
      </div>

      <div className="absolute -bottom-4 -left-4 bg-indigo-500/15 border border-indigo-500/30 rounded-2xl px-4 py-2 backdrop-blur-sm">
        <p className="text-indigo-300 text-xs font-bold">200+ London SMEs</p>
        <p className="text-white/40 text-xs">supported nationally</p>
      </div>
    </div>
  )
}

function ServiceIcon({ index }) {
  const icons = [
    <path key="cloud" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" stroke="#818cf8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    <><path key="shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#06b6d4" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
    <><rect key="mail" x="2" y="4" width="20" height="16" rx="2" stroke="#a78bfa" strokeWidth="1.5" fill="none"/><polyline key="mail2" points="2,4 12,13 22,4" stroke="#a78bfa" strokeWidth="1.5" fill="none"/></>,
    <><polyline key="db" points="22,12 22,20 2,20 2,12" stroke="#34d399" strokeWidth="1.5" fill="none" strokeLinecap="round"/><path key="db2" d="M2 12V4l10 8 10-8v8" stroke="#34d399" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>
  ]
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      {icons[index]}
    </svg>
  )
}
