export default function HeroBanner({ title, subtitle, ctaText, onCTAClick }) {
  return (
    <section className="bg-gradient-to-r from-[#0b2340] via-[#102d4d] to-[#0b2340] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
      <p className="mb-6 text-lg text-slate-100">{subtitle}</p>
      <button
        onClick={onCTAClick}
        className="bg-[#d4af37] text-[#0b2340] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#e5c75f] transition"
      >
        {ctaText}
      </button>
    </section>
  )
}
