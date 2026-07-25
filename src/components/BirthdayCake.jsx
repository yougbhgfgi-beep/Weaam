import { useState } from 'react'

export default function BirthdayCake() {
  const [litCandles, setLitCandles] = useState(Array(10).fill(true))
  const [showMessage, setShowMessage] = useState(false)

  const blowCandle = (index) => {
    const newLit = [...litCandles]
    newLit[index] = false
    setLitCandles(newLit)

    if (newLit.every(c => !c)) {
      setTimeout(() => setShowMessage(true), 1000)
    }
  }

  const blowAll = () => {
    let delay = 0
    litCandles.forEach((lit, i) => {
      if (lit) {
        setTimeout(() => blowCandle(i), delay)
        delay += 100
      }
    })
  }

  return (
    <section id="cake" className="py-16 sm:py-20 px-4 text-center relative z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-primary-300">🎂 تورتة عيد الميلاد</h2>
      <p className="text-gray-400 mb-8 md:mb-10 text-sm sm:text-base">اضغط على الشمع عشان تنفخها، أو اضغط "نفخ الكل"</p>

      <div className="max-w-lg mx-auto relative">
        <div className="relative mx-auto" style={{ width: 'min(280px, 85vw)' }}>

          {/* Candles on top of cake */}
          <div className="flex justify-center gap-1.5 sm:gap-3 mb-0 relative z-10 px-4 sm:px-8">
            {litCandles.map((lit, i) => (
              <div key={i} className="relative cursor-pointer flex flex-col items-center" onClick={() => blowCandle(i)}>
                {/* Flame */}
                <div className={`w-2 sm:w-3 h-4 sm:h-5 mb-0.5 rounded-full transition-all duration-300 ${lit ? 'bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 shadow-[0_0_8px_2px_rgba(255,200,0,0.6)]' : 'opacity-0'}`}></div>
                {/* Candle Stick */}
                <div className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-t-full transition-all duration-300 ${lit ? 'bg-gradient-to-b from-primary-300 to-primary-500' : 'bg-gray-600'}`}></div>
              </div>
            ))}
          </div>

          {/* Cake Layer 1 (top) */}
          <div className="bg-gradient-to-b from-primary-200 to-primary-300 h-12 sm:h-16 rounded-t-2xl rounded-b-lg mx-4 sm:mx-6 shadow-lg border-2 border-primary-400 relative">
            <div className="absolute -bottom-2 left-0 right-0 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 sm:w-3 h-3 sm:h-4 bg-primary-200 rounded-b-full"></div>
              ))}
            </div>
            <div className="flex justify-center items-center h-full gap-2 sm:gap-3">
              {['🫐', '🍓', '🫐', '🍓', '🫐'].map((fruit, i) => (
                <span key={i} className="text-sm sm:text-lg">{fruit}</span>
              ))}
            </div>
          </div>

          {/* Cake Layer 2 (middle) */}
          <div className="bg-gradient-to-b from-primary-300 to-primary-400 h-16 sm:h-20 rounded-b-2xl mx-2 sm:mx-3 shadow-lg border-2 border-primary-500 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-2 sm:gap-4">
                {['⭐', '💙', '⭐', '💙', '⭐'].map((dec, i) => (
                  <span key={i} className="text-base sm:text-xl">{dec}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Cake Layer 3 (base) */}
          <div className="bg-gradient-to-b from-primary-400 to-primary-600 h-18 sm:h-24 rounded-b-3xl shadow-xl border-2 border-primary-700 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white font-bold text-base sm:text-xl font-script drop-shadow-lg">Happy Birthday</p>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-5 sm:h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-lg border border-gray-400"></div>
          </div>
        </div>

        {/* Date */}
        <div className="mt-6 sm:mt-8 bg-primary-900/50 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-block border border-primary-300/30">
          <p className="text-primary-200 text-xs sm:text-sm mb-1">تاريخ ميلادك</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-300 font-mono">29 / 7 / 2005</p>
        </div>

        {/* Blow All Button */}
        <div className="mt-6 sm:mt-8">
          <button
            onClick={blowAll}
            disabled={litCandles.every(c => !c)}
            className="bg-gradient-to-r from-primary-300 to-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold shadow-lg hover:shadow-primary-300/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base active:scale-95"
          >
            💨 نفخ الشموع
          </button>
        </div>

        {/* Success Message */}
        {showMessage && (
          <div className="mt-6 sm:mt-8 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-3xl border border-primary-300/30 shadow-xl">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 animate-bounce">🎂🎉🎈</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-300 mb-2">كل سنة وانت طيب</h3>
              <p className="text-gray-300 text-sm sm:text-base">ربنا يبارلك ويتمملك بالخير</p>
              <p className="text-primary-200 text-xs sm:text-sm mt-4">29 / 7 / 2005</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
