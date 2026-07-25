export default function Login({ password, onPasswordChange, handleLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans z-20 p-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute animate-float" style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            fontSize: Math.random() * 15 + 12 + 'px'
          }}>
            {['🎈', '🎉', '🎊', '🎂', '🎁'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[2rem] text-center shadow-2xl max-w-sm w-full border border-white/20">
        <div className="text-5xl sm:text-6xl mb-4">🎂</div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white drop-shadow-md leading-snug">عيد ميلاد سعيد يا Weaam!</h1>
        <p className="text-primary-200 mb-2 text-sm sm:text-base">من Doha ❤️</p>
        <p className="text-white/50 mb-6 sm:mb-8 text-xs sm:text-sm">انجز و دخل الرقم اللي قولتلك عليه انت لسه هتفكر 😂💗</p>
        <div className="flex gap-3 justify-center mb-6 sm:mb-8" dir="ltr">
          <input
            type="text"
            placeholder="كلمة السر"
            value={password}
            onChange={onPasswordChange}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full max-w-[256px] p-3 sm:p-4 rounded-2xl border border-white/30 bg-white/20 focus:border-primary-300 focus:bg-white/30 focus:outline-none text-center text-lg sm:text-xl text-white shadow-inner transition-all placeholder-white/50"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-primary-300 to-primary-600 text-white font-bold py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-primary-300/30 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base active:scale-95"
        >
          🎉 ادخل الحفلة
        </button>
      </div>
    </div>
  )
}
