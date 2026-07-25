export default function Wishes() {
  const wishes = [
    { emoji: "🎂", title: "الصحة", desc: "ربنا يديك صحة وعمر طويل يا Weaam، تقضي كل سنة أحلى من اللي قبلها." },
    { emoji: "❤️", title: "السعادة", desc: "اللهم ارزقه الفرحة والبسمة اللي ما بتنمحيش من وشه." },
    { emoji: "🌟", title: "النجاح", desc: "ربنا يوفقك في كل خطوة يا Weaam، وتحقق كل اللي تتمناه." },
    { emoji: "💪", title: "القوة", desc: "تفضل دايمًا قوي ومحدش يقدر يكسرك، أنت راجل." },
    { emoji: "✨", title: "الأحلام", desc: "كل حلم بتحلمه يتحقق بإذن الله يا Weaam." },
    { emoji: "🎉", title: "الحياة", desc: "الحياة تبتدي ليك من النهارده من جديد، كل سنة وأنت أحسن." }
  ]

  return (
    <section id="wishes" className="py-16 sm:py-24 px-4 relative z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-primary-300">❤️ كلمات من القلب ❤️</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {wishes.map((card, i) => (
          <div key={i} className="bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/5 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-900/50 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary-300 transition-colors border border-primary-300/30 text-2xl sm:text-2xl md:text-3xl">
              {card.emoji}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-100 mb-2 sm:mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
