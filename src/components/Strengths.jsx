// Strengths.jsx
export default function Strengths() {
  const items = [
    { icon: '🧩', title: 'Interdisciplinary Approach', desc: 'Students from diverse backgrounds collaborate to solve complex real-world problems using diverse frameworks.' },
    { icon: '🏭', title: 'Immersive & Experiential Learning', desc: 'Real-life projects and industry use-cases build hands-on expertise, not just theoretical knowledge.' },
    { icon: '🧠', title: 'Whole Brain Learning', desc: 'Pedagogy that empowers learners with future-proof technical skills while nurturing creative thinking.' },
    { icon: '👩‍🏫', title: 'Industry-Academia Faculty', desc: 'Dynamic scholars with deep academic knowledge and extensive real-world professional experience.' },
    { icon: '🌐', title: 'Global Collaborations', desc: 'Partnerships with foreign universities for curriculum delivery, joint research, and student exchange.' },
    { icon: '🏗️', title: 'State-of-the-Art Infrastructure', desc: 'IIoT labs, tech-enabled library, R&D incubation centres, and Wi-Fi-enabled smart campus.' },
    { icon: '💼', title: 'Full Pay On-the-Job Training', desc: 'Earn while you learn with paid internships and cross-sectoral training during your degree.' },
    { icon: '📋', title: 'NEP 2020 Compliant', desc: 'Programmes fully aligned with the National Education Policy 2020 and UGC guidelines.' },
  ];

  return (
    <section id="strengths" className="py-24 px-[5%] bg-[#0B1437] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-[#D4A843] text-xs font-semibold tracking-[0.12em] uppercase mb-3 reveal flex items-center gap-2">
          <span className="w-5 h-0.5 bg-[#D4A843] rounded" />
          Why Apex
        </div>
        <h2 className="font-playfair text-4xl font-bold text-white leading-tight tracking-tight mb-3 reveal">
          Built for the Thinkers of Tomorrow
        </h2>
        <p className="text-white/55 max-w-lg mb-12 reveal">
          Our pedagogy doesn't just educate — it transforms students into industry-ready innovators and global leaders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.09] hover:border-[rgba(212,168,67,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[rgba(212,168,67,0.15)] flex items-center justify-center text-2xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
