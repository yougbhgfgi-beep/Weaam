import { useState, useEffect } from 'react'

export default function FinalScene({ onClose }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timeouts = []
    const schedule = (ms, s) => timeouts.push(setTimeout(() => setStep(s), ms))

    schedule(1000, 1)
    schedule(4000, 2)
    schedule(7000, 3)
    schedule(10000, 4)
    schedule(13000, 5)
    schedule(16000, 6)
    schedule(19000, 7)
    schedule(22000, 8)
    schedule(26000, 10)
    schedule(27000, 11)
    schedule(30000, 12)
    schedule(33000, 13)
    schedule(38000, 14)
    schedule(48000, 15)

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center text-center p-4 sm:p-6 overflow-hidden transition-colors duration-[2s]">
      <button onClick={onClose} className="fixed top-4 sm:top-6 right-4 sm:right-6 z-[110] bg-white/10 backdrop-blur-md border border-white/20 text-white p-2.5 sm:p-3 rounded-full hover:bg-white/30 transition-all" title="خروج">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-float" style={{
            left: Math.random() * 100 + '%',
            top: '-10%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: Math.random() * 5 + 5 + 's',
            fontSize: Math.random() * 12 + 8 + 'px'
          }}>
            {['🎈', '🎉', '🎊', '⭐', '✨', '💙'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center min-h-[60vh]">
        {step === 1 && (
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 animate-slide-up leading-tight px-2">
            🎂 كل سنة وانت طيب يا Weaam 🎂
          </h1>
        )}

        {step >= 2 && step < 10 && (
          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 px-2">
            {step >= 2 && <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-fade-in leading-relaxed">في يوم زي النهارده… <span className="text-primary-300 font-bold block mt-2 text-xl sm:text-2xl md:text-3xl">اتولد وئام، أعز إنسان في حياتي.</span></p>}
            {step >= 3 && <p className="text-lg sm:text-xl md:text-2xl text-gray-300 animate-fade-in mt-6 sm:mt-8 leading-relaxed">عايزه اقولك… <span className="text-primary-400 font-bold block mt-2 text-xl sm:text-2xl md:text-3xl">إنت أغلى حد في حياتي.</span></p>}
            {step >= 5 && <div className="h-px w-24 bg-gray-800 mx-auto my-6 sm:my-8 animate-fade-in"></div>}
            {step >= 6 && <p className="text-base sm:text-lg md:text-xl text-gray-500 italic animate-fade-in px-2">"لو كل سنة ليك أجمل من اللي قبلها…"</p>}
            {step >= 7 && <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 sm:mt-6 animate-slide-up px-2">ربنا يبارلك يا Weaam…</p>}
            {step >= 8 && <p className="text-lg sm:text-xl md:text-2xl text-primary-300 mt-3 sm:mt-4 animate-fade-in px-2">ويتمملك بالخير في كل عام. من كل قلب Doha ❤️</p>}
          </div>
        )}

        {step >= 11 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black animate-fade-in px-2">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary-400 to-primary-600 animate-pulse-slow mb-6 sm:mb-8">
              🎂 Happy Birthday Weaam 🎂
            </h1>

            {step >= 12 && (
              <div className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl text-gray-400 animate-fade-in font-light tracking-wide">
                <span>29 / 7 / 2005</span>
                <span className="text-3xl sm:text-4xl md:text-5xl text-primary-300">🎂</span>
              </div>
            )}

            {step >= 13 && (
              <p className="mt-8 sm:mt-12 text-xl sm:text-2xl md:text-3xl font-script text-white/60 animate-slide-up">Doha ❤️ Weaam</p>
            )}
            {step >= 14 && (
              <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-primary-200 font-light animate-slide-up max-w-2xl leading-relaxed px-4">
                "يا وئام، ربنا يخليك ويباركلك في عمرك، ويعمل كل خير ليك. كل سنة وانت طيب يا أغلى إنسان.. Doha ❤️"
              </p>
            )}
          </div>
        )}

        {step >= 15 && (
          <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[110] animate-fade-in flex flex-col items-end gap-2">
            <p className="text-xs text-gray-500 mb-1 sm:mb-2 mr-2">شكراً إنك موجود يا Weaam 🎂</p>
            <button onClick={onClose} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2 text-sm sm:text-base active:scale-95">
              <span>الرجوع للرئيسية</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
