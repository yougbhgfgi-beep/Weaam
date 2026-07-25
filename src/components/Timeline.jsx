const timelineData = [
  {
    text: "كل سنه و انت طيب و بخير ي خويا 💗",
    img: "/images/img1.jpg",
  },
  {
    text: "كل سنه وانت اخويا و ديما سوا مع بعض 🫵🏻❤️",
    img: "/images/img2.jpg",
  },
  {
    text: "",
    img: "/images/img3.jpg",
  },
]

export default function Timeline({ onSelectImage }) {
  return (
    <section id="memories" className="py-20 sm:py-32 px-4 relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-white drop-shadow-md">📸 صورك الجميلة 📸</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 to-primary-600 transform -translate-x-1/2 rounded-full" />
        
        {timelineData.map((item, i) => (
          <div key={i} className={`mb-10 md:mb-16 w-full ${i % 2 === 0 ? 'md:flex md:items-center md:justify-between md:flex-row-reverse' : 'md:flex md:items-center md:justify-between'}`}>
            {/* Center dot - hidden on mobile */}
            <div className="hidden md:block z-10 bg-gray-900 border-4 border-primary-300 w-8 h-8 rounded-full shadow-[0_0_15px_rgba(108,156,218,0.8)] relative flex-shrink-0" />
            
            {/* Card */}
            <div className={`w-full md:w-5/12 ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl border border-white/5 hover:bg-white/20 transition-all duration-300 group">
                <div
                  className="relative overflow-hidden rounded-xl mb-4 border border-primary-300/30 cursor-pointer group-hover:shadow-[0_0_20px_rgba(108,156,218,0.6)] transition-shadow duration-300 bg-black/20"
                  onClick={() => onSelectImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt="Memory"
                    loading="lazy"
                    className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-105 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.text && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                      <p className="text-white text-sm sm:text-base md:text-lg font-bold text-center leading-relaxed drop-shadow-lg">{item.text}</p>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/50 p-2 rounded-full border border-white/50 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
