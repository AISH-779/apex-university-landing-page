// About.jsx
export default function About() {
  const features = [
    {
      icon: '🏛️',
      title: 'UGC Approved & NAAC Accredited',
      desc: 'Globally recognised credentials backed by decades of academic integrity.',
    },
    {
      icon: '🤝',
      title: 'Industry Partnerships',
      desc: 'Collaborations with IBM, ISRO, SAC and leading tech firms for real-world placement.',
    },
    {
      icon: '🌍',
      title: 'International Exchange Programs',
      desc: 'Collaborate with foreign universities for curriculum, research, and student exchange.',
    },
  ];

  return (
    <section id="about" className="py-24 px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="reveal relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1437] to-[#2a3f8f] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5 w-[90%] h-[90%]">
              {['🎓','🔬','🌐','💡'].map((e, i) => (
                <div
                  key={i}
                  className="rounded-lg flex items-center justify-center text-5xl"
                  style={{
                    background: i % 2 === 0 ? 'rgba(212,168,67,0.15)' : 'rgba(255,255,255,0.06)',
                    animation: `float 6s ease-in-out ${i * 1.5}s infinite`,
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#D4A843] text-[#0B1437] p-5 rounded-2xl font-bold text-center shadow-[0_8px_32px_rgba(212,168,67,0.4)]">
              <span className="font-playfair text-3xl block leading-none">60+</span>
              <span className="text-xs opacity-80">Years in Education</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="reveal text-[#D4A843] text-xs font-semibold tracking-[0.12em] uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#D4A843] rounded" />
              Our Story
            </div>
            <h2 className="reveal font-playfair text-4xl font-bold text-[#0B1437] leading-tight tracking-tight mb-4">
              A Legacy of Excellence,<br />Redefined for Today
            </h2>
            <p className="reveal text-[#6B7399] leading-relaxed mb-6">
              Sponsored by the ASIA Charitable Trust — in education since 1965 — Apex University is a new-age, tech-driven institution offering programmes that evolve with industry demand.
            </p>
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="reveal flex items-start gap-4 p-4 rounded-xl border border-black/10 hover:border-[rgba(212,168,67,0.3)] hover:shadow-[0_4px_16px_rgba(212,168,67,0.08)] transition-all"
                >
                  <span className="text-2xl mt-0.5">{f.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B1437] mb-1">{f.title}</h4>
                    <p className="text-sm text-[#6B7399] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
