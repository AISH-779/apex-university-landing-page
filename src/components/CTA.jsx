export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 px-[5%] relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #0B1437 0%, #1a2d7a 50%, #162050 100%)' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(212,168,67,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,168,67,0.08) 0%, transparent 50%)',
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
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
