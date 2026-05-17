export default function Footer() {
  const cols = [
    { title: 'Programs', links: ['Undergraduate', 'Postgraduate', 'Doctoral (Ph.D.)', 'Certificate Courses'] },
    { title: 'University', links: ['About Us', 'Campus Life', 'Alumni', 'Faculty'] },
    { title: 'Admissions', links: ['Apply Now', 'Eligibility', 'Scholarships', 'Contact Us'] },
  ];

  return (
    <footer className="bg-[#070D21] text-white/50 pt-16 pb-8 px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="font-playfair text-2xl font-bold text-white mb-3">Apex University</div>
            <p className="text-sm leading-relaxed max-w-[280px] mb-6">
              A new-age, tech-driven university sponsored by ASIA Charitable Trust — empowering students since 1965.
            </p>
            <div className="flex gap-3">
              {['in', '𝕏', '▣', '▶'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/[0.07] flex items-center justify-center text-white/50 text-sm hover:bg-[#D4A843] hover:text-[#0B1437] transition-all no-underline">
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/45 no-underline hover:text-[#F0C060] transition-colors">{link}</a>
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
