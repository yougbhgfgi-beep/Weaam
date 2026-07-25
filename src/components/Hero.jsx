export default function Hero({ onSurprise }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-100/50 to-transparent -z-10"></div>

      <div className="text-6xl sm:text-7xl md:text-8xl mb-4 md:mb-6 animate-float">🎂</div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-600 drop-shadow-sm font-script pb-4 leading-tight">
        Happy Birthday
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 font-sans leading-snug">
        كل سنة وانت طيب يا <span className="text-primary-300">Weaam</span>! 🎉
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-primary-500 mb-3 md:mb-4 font-medium">هدية من Doha ❤️</p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-3 md:mb-4 font-light">29 / 7 / 2005</p>
      <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 md:mb-10">يوم ميلادك.. أجمل يوم في السنة</p>

      <button
        onClick={onSurprise}
        className="group relative overflow-hidden bg-white text-primary-300 px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-base sm:text-lg border border-primary-100 active:scale-95"
      >
        <span className="relative z-10 transition-colors group-hover:text-white">🎁 المفاجأة</span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
      </button>

      <div className="absolute bottom-6 sm:bottom-10 animate-bounce text-primary-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
      </div>
    </section>
  )
}
