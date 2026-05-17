export default function Hero() {
  const courses = [
    { icon: '💻', name: 'B.Tech – AI & Data Science', dur: '4 Years · 8 Semesters', bg: 'rgba(59,130,246,0.15)' },
    { icon: '📊', name: 'MBA – Business Management', dur: '2 Years · 4 Semesters', bg: 'rgba(16,185,129,0.15)' },
    { icon: '🔐', name: 'M.Sc. – Cyber Security', dur: '2 Years · 4 Semesters', bg: 'rgba(245,158,11,0.15)' },
    { icon: '⚖️', name: 'LL.B. – Law', dur: '3 Years · 6 Semesters', bg: 'rgba(139,92,246,0.15)' },
  ];

  const stats = [
    { num: '17+', label: 'Partner Colleges' },
    { num: '60+', label: 'Programmes' },
    { num: '1965', label: 'Est. Year' },
    { num: '95%', label: 'Placement Rate' },
  ];

  return (
    <section
      className="min-h-screen bg-[#0B1437] flex flex-col relative overflow-hidden"
      style={{ paddingTop: '116px' }}
      id="home"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          'w-[600px] h-[600px] -top-48 -right-36 animate-[pulseSlow_8s_ease-in-out_infinite]',
          'w-[400px] h-[400px] -bottom-24 -left-24 animate-[pulseSlow_8s_ease-in-out_2s_infinite]',
          'w-[250px] h-[250px] top-[30%] left-[40%] animate-[pulseSlow_8s_ease-in-out_4s_infinite]',
        ].map((cls, i) => (
          <div key={i} className={`absolute rounded-full bg-[rgba(212,168,67,0.08)] ${cls}`} />
        ))}
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center px-[5%] max-w-[1280px] mx-auto w-full gap-16 relative z-10 py-12 flex-wrap lg:flex-nowrap">
        {/* Left */}
        <div className="flex-1 max-w-[640px]">
          <div className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.15)] border border-[rgba(212,168,67,0.3)] text-[#F0C060] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 animate-[fadeUp_0.7s_ease_both]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-[blink_2s_infinite]" />
            UGC Approved · NAAC Accredited
          </div>

          <h1 className="font-playfair text-white font-black leading-[1.1] tracking-tight mb-6 text-4xl md:text-5xl lg:text-6xl animate-[fadeUp_0.7s_0.15s_ease_both]">
            Where Knowledge Meets{' '}
            <em className="text-[#F0C060] not-italic">Purpose</em> & Future
          </h1>

          <p className="text-white/65 text-lg leading-relaxed max-w-[520px] mb-10 animate-[fadeUp_0.7s_0.25s_ease_both]">
            A new-age tech-driven university offering industry-aligned programmes that evolve with future demand — empowering you to lead with confidence.
          </p>

          <div className="flex gap-4 flex-wrap animate-[fadeUp_0.7s_0.35s_ease_both]">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 bg-[#D4A843] text-[#0B1437] px-8 py-3.5 rounded-lg font-semibold no-underline hover:bg-[#F0C060] transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(212,168,67,0.4)] hover:shadow-[0_8px_32px_rgba(212,168,67,0.5)]"
            >
              Explore Programs
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 px-8 py-3.5 rounded-lg font-medium no-underline hover:border-white/50 hover:bg-white/[0.06] transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-10 border-t border-white/10 animate-[fadeUp_0.7s_0.45s_ease_both] flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-playfair text-3xl font-bold text-[#F0C060]">{s.num}</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-[380px] flex-shrink-0">
          <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="font-playfair text-white text-xl mb-6">Popular Programmes</h3>
            <div className="flex flex-col gap-4">
              {courses.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-4 p-3.5 bg-white/[0.05] rounded-xl border border-white/[0.07] hover:bg-white/[0.09] transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: c.bg }}>
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{c.name}</div>
                    <div className="text-xs text-white/45 mt-0.5">{c.dur}</div>
                  </div>
                  <span className="text-white/30">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-2.5 pb-8 text-white/35 text-[10px] tracking-[0.1em] uppercase relative z-10">
        Scroll to explore
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-[scrollDown_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
