export default function Footer({ onFinalScene }) {
  return (
    <footer className="py-10 sm:py-16 text-center bg-white/80 backdrop-blur-md border-t border-primary-100 px-4">
      <div className="text-3xl sm:text-4xl mb-4">🎂🎉🎈</div>
      <p className="text-xl sm:text-2xl font-script text-gray-600 mb-2">Happy Birthday Weaam!</p>
      <button
        onClick={onFinalScene}
        className="bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-black transition-colors shadow-lg tracking-widest uppercase font-bold active:scale-95 mt-4"
      >
        🎁 المشهد الأخير
      </button>
    </footer>
  )
}
