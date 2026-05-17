// Partners.jsx
export function Partners() {
  const partners = ['IBM', 'ISRO', 'SAC', 'Coding Pro', 'Yudiz Solutions', 'Virtual Height', 'Asian-African Chamber'];
  return (
    <section id="partners" className="py-16 px-[5%] bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="text-[#D4A843] text-xs font-semibold tracking-[0.12em] uppercase mb-3 reveal flex items-center gap-2 justify-center">
          <span className="w-5 h-0.5 bg-[#D4A843] rounded" />
          Trusted Partners
        </div>
        <h2 className="font-playfair text-2xl font-bold text-[#0B1437] mb-8 reveal">
          Partnering with Leaders Across Industries
        </h2>
        <div className="reveal flex items-center justify-center gap-4 flex-wrap">
          {partners.map(p => (
            <div
              key={p}
              className="px-6 py-3 bg-white rounded-xl border border-black/10 text-[#6B7399] font-semibold text-sm hover:text-[#0B1437] hover:border-[#0B1437] transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA.jsx
export function CTA() {
  return (
    <section
      id="cta"
      className="py-24 px-[5%] relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #0B1437 0%, #1a2d7a 50%, #162050 100%)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(212,168,67,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,168,67,0.08) 0%, transparent 50%)',
        }}
      />
      <div className="relative z-10 max-w-[640px] mx-auto">
        <div className="text-[#F0C060] text-xs font-semibold tracking-[0.12em] uppercase mb-3 reveal flex items-center gap-2 justify-center">
          <span className="w-5 h-0.5 bg-[#F0C060] rounded" />
          Start Your Journey
        </div>
        <h2 className="font-playfair text-5xl font-bold text-white leading-tight tracking-tight mb-4 reveal">
          Ready to Shape Your Future?
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 reveal">
          Admissions for 2025–26 are now open. Take the first step toward a transformative education that prepares you for tomorrow's world.
        </p>
        <div className="reveal flex gap-4 justify-center flex-wrap">
          <a
            href="#programs"
            className="inline-flex items-center gap-2 bg-[#D4A843] text-[#0B1437] px-8 py-3.5 rounded-lg font-semibold no-underline hover:bg-[#F0C060] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(212,168,67,0.4)]"
          >
            View All Programs
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-transparent text-white/80 border border-white/20 px-8 py-3.5 rounded-lg font-medium no-underline hover:border-white/50 hover:bg-white/[0.06] transition-all"
          >
            Download Prospectus
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer.jsx
export function Footer() {
  const cols = [
    {
      title: 'Programs',
      links: ['Undergraduate', 'Postgraduate', 'Doctoral (Ph.D.)', 'Certificate Courses'],
    },
    {
      title: 'University',
      links: ['About Us', 'Campus Life', 'Alumni', 'Faculty'],
    },
    {
      title: 'Admissions',
      links: ['Apply Now', 'Eligibility', 'Scholarships', 'Contact Us'],
    },
  ];

  return (
    <footer className="bg-[#070D21] text-white/50 pt-16 pb-8 px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-playfair text-2xl font-bold text-white mb-3">Apex University</div>
            <p className="text-sm leading-relaxed max-w-[280px] mb-6">
              A new-age, tech-driven university sponsored by ASIA Charitable Trust — empowering students since 1965.
            </p>
            <div className="flex gap-3">
              {['in', '𝕏', '▣', '▶'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.07] flex items-center justify-center text-white/50 text-sm hover:bg-[#D4A843] hover:text-[#0B1437] transition-all no-underline"
                  aria-label={`Social ${i}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/45 no-underline hover:text-[#F0C060] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-wrap gap-4 justify-between items-center text-xs">
          <span>© 2025 Apex University. All rights reserved.</span>
          <span>UGC Approved · NAAC Accredited · NEP 2020 Compliant</span>
        </div>
      </div>
    </footer>
  );
}

export default Partners;
