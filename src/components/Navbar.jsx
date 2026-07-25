export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-md border-b border-white/10 px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
      <div className="text-base sm:text-xl md:text-2xl font-bold font-script text-primary-300 truncate">🎂 Happy Birthday Weaam</div>
      <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm md:text-base">
        <a href="#cake" className="hover:text-primary-300 transition-colors whitespace-nowrap">التورتة</a>
        <a href="#memories" className="hover:text-primary-300 transition-colors whitespace-nowrap">ذكرياتنا</a>
        <a href="#video" className="hover:text-primary-300 transition-colors whitespace-nowrap">الفيديو</a>
        <a href="#wishes" className="hover:text-primary-300 transition-colors whitespace-nowrap">المنünsات</a>
      </div>
    </nav>
  )
}
