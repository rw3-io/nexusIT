export default function BottomCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] orb bg-indigo-700/25"/>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] orb bg-cyan-600/15"/>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Card */}
        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-indigo-900/10 backdrop-blur-sm p-12 lg:p-16 relative overflow-hidden">
          {/* Inner noise / grid */}
          <div className="absolute inset-0 grid-pattern opacity-40 rounded-3xl"/>

          {/* Corner glow accents */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-tl-3xl"/>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-br-3xl"/>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
              Free IT Audit — No Commitment
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Ready to take control{' '}
              <span className="gradient-text">of your IT?</span>
            </h2>

            <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Book a free, no-obligation IT audit with one of our London-based specialists. We'll review your current setup, identify risks, and show you exactly where you can save time and money.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@nexusit.co.uk"
                id="bottom-cta"
                className="btn-primary px-10 py-4 rounded-2xl text-base font-bold w-full sm:w-auto text-center"
              >
                <span>Unlock your IT</span>
              </a>
              <a
                href="tel:+44020XXXXXXX"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium px-6 py-4"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.38 2 2 0 0 1 3.62 2.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +44 (0)20 XXXX XXXX
              </a>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-white/8">
              {[
                { value: '200+', label: 'London SMEs' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '<1hr', label: 'Avg response time' },
                { value: '10yr+', label: 'Industry experience' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="text-white/40 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
