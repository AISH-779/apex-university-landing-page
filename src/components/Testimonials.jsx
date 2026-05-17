const TESTIMONIALS = [
  {
    quote: 'The faculty members were more than just teachers; they served as mentors who supported and guided us at every step. The nurturing environment helped me explore my passions freely.',
    name: 'Jigardan Gadhvi',
    role: 'Celebrity Singer',
    initials: 'JG',
  },
  {
    quote: 'The demanding academic programme and exceptional faculty gave me a solid foundation. The emphasis on practical learning through internships gave me invaluable hands-on experience.',
    name: 'Disha Thaker',
    role: 'Project Associate, Cognizant',
    initials: 'DT',
  },
  {
    quote: 'Apex places a strong emphasis on personality development in addition to academics. I was encouraged to uncover skills I had no idea I possessed. This shaped my entire career trajectory.',
    name: 'Krishna Soni',
    role: 'Asst. Manager, ICICI Bank',
    initials: 'KS',
  },
];

const FEATURED = [
  { icon: '🎵', name: 'Jigardan Gadhvi', role: 'Celebrity Singer' },
  { icon: '💻', name: 'Yatendra Sinh Joddha', role: 'Technical Lead, TCS' },
  { icon: '🏦', name: 'Krishna Soni', role: 'Asst. Manager, ICICI Bank' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-[5%] bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-14">
          <div>
            <div className="text-[#D4A843] text-xs font-semibold tracking-[0.12em] uppercase mb-3 reveal flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#D4A843] rounded" />
              Alumni Voices
            </div>
            <h2 className="font-playfair text-4xl font-bold text-[#0B1437] leading-tight tracking-tight mb-4 reveal">
              What Our Graduates Say
            </h2>
            <p className="text-[#6B7399] leading-relaxed mb-8 reveal">
              Thousands of alumni have gone on to lead successful careers across industries — from TCS and Cognizant to celebrity stages and entrepreneurship.
            </p>
            <a
              href="#cta"
              className="reveal inline-flex items-center gap-2 bg-[#0B1437] text-white px-7 py-3.5 rounded-lg font-semibold no-underline hover:bg-[#162050] transition-colors"
            >
              Join Our Legacy
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Featured alumni card */}
          <div className="reveal bg-[#0B1437] rounded-2xl p-8 text-white">
            <div className="font-playfair text-5xl font-bold text-[#F0C060] leading-none mb-1">10,000+</div>
            <div className="text-sm text-white/60 mb-8">Proud Alumni Worldwide</div>
            <div className="flex flex-col gap-3">
              {FEATURED.map(f => (
                <div key={f.name} className="flex items-center gap-3 p-3 bg-white/[0.06] rounded-xl">
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <div className="text-sm font-semibold">{f.name}</div>
                    <div className="text-xs text-white/50">{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal bg-[#FAF7F2] rounded-2xl p-8 border border-black/10 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,20,55,0.08)] transition-all ${i === 1 ? 'md:mt-8' : ''}`}
            >
              <div className="font-playfair text-5xl text-[#D4A843] leading-none mb-2">"</div>
              <p className="text-sm text-[#6B7399] leading-relaxed italic mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0B1437] to-[#162050] flex items-center justify-center text-[#F0C060] font-semibold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0B1437]">{t.name}</div>
                  <div className="text-xs text-[#6B7399] mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
