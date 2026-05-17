'use client';
import { useState } from 'react';

const PROGRAMS = [
  { cat: 'ug', icon: '💻', tag: 'Undergraduate', title: 'B.Tech – CSE / AI / Data Science', desc: 'Industry-oriented engineering with specialisations in AI, ML, Big Data Analytics, and Computer Engineering.', meta: ['📅 4 Years', '📚 8 Semesters'] },
  { cat: 'ug', icon: '📈', tag: 'Undergraduate', title: 'BBA / iMBA', desc: 'Comprehensive business management with specialisations in International Trade, Aviation & Hospitality.', meta: ['📅 3–5 Years', '🌐 Global Track'] },
  { cat: 'ug', icon: '🔢', tag: 'Undergraduate', title: 'BCA / B.Com (Hons)', desc: 'Strong foundation in computing, accounting, and commerce with ACCA certification pathway available.', meta: ['📅 3–4 Years', '📜 ACCA Option'] },
  { cat: 'pg', icon: '🤖', tag: 'Postgraduate', title: 'MCA – AI & Full Stack', desc: 'Master computer applications with cutting-edge tracks in Artificial Intelligence and Full Stack Development.', meta: ['📅 2 Years', '💼 Industry Labs'] },
  { cat: 'pg', icon: '🔐', tag: 'Postgraduate', title: 'M.Sc. – Cyber Security', desc: 'Advanced cyber security and digital forensics with hands-on labs and industry mentors.', meta: ['📅 2 Years', '🛡️ Forensics Track'] },
  { cat: 'pg', icon: '🏛️', tag: 'Postgraduate', title: 'MBA / LL.M.', desc: 'Executive management and law programmes designed for ambitious professionals aiming for leadership.', meta: ['📅 2 Years', '🌐 Global MBA'] },
  { cat: 'cert', icon: '🧠', tag: 'Certificate', title: 'Data Science & AI/ML', desc: 'Intensive programme covering machine learning, deep learning, and practical AI applications.', meta: ['⏱️ 6 Months', '📜 Certified'] },
  { cat: 'cert', icon: '⛓️', tag: 'Certificate', title: 'Blockchain & Web3', desc: 'Future-proof skills in distributed ledger technology, smart contracts, and decentralised apps.', meta: ['⏱️ 3 Months', '🔗 Hands-on'] },
  { cat: 'phd', icon: '🎓', tag: 'Doctoral', title: 'Ph.D. Programs', desc: 'Research-intensive doctoral programmes in Management, Commerce, Computing, Law, and Interdisciplinary fields.', meta: ['📅 3–5 Years', '🔬 Research'] },
];

const TABS = [
  { key: 'all', label: 'All Programs' },
  { key: 'ug', label: 'Undergraduate' },
  { key: 'pg', label: 'Postgraduate' },
  { key: 'cert', label: 'Certificate' },
  { key: 'phd', label: 'Doctoral' },
];

export default function Programs() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? PROGRAMS : PROGRAMS.filter(p => p.cat === active);

  return (
    <section id="programs" className="py-24 px-[5%] bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <div className="reveal text-[#D4A843] text-xs font-semibold tracking-[0.12em] uppercase mb-3 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#D4A843] rounded" />
            Academic Programs
          </div>
          <h2 className="reveal font-playfair text-4xl font-bold text-[#0B1437] leading-tight tracking-tight mb-3">
            Programmes for Every Aspiration
          </h2>
          <p className="reveal text-[#6B7399] max-w-lg">
            From undergraduate to doctoral, our programmes are crafted to meet future industry demands.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal flex gap-2 flex-wrap mb-10">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                active === t.key
                  ? 'bg-[#0B1437] text-white border-[#0B1437]'
                  : 'bg-white text-[#6B7399] border-black/10 hover:bg-[#0B1437] hover:text-white hover:border-[#0B1437]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="reveal bg-white rounded-2xl border border-black/10 p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(11,20,55,0.12)] transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A843] to-[#F0C060] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="inline-block px-3 py-1 bg-[rgba(212,168,67,0.1)] text-[#8B6914] rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3">
                {p.tag}
              </div>
              <h3 className="text-lg font-semibold text-[#0B1437] mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B7399] leading-relaxed mb-5">{p.desc}</p>
              <div className="flex gap-4 text-xs text-[#6B7399] border-t border-black/[0.07] pt-4">
                {p.meta.map(m => <span key={m} className="flex items-center gap-1">{m}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
