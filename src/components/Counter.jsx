import { useState, useEffect } from 'react'

export default function Counter() {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const startDate = new Date('2026-04-25T00:00:00')

    const updateCounter = () => {
      const now = new Date()
      const diff = now - startDate

      const totalSeconds = Math.floor(diff / 1000)
      const totalMinutes = Math.floor(totalSeconds / 60)
      const totalHours = Math.floor(totalMinutes / 60)
      const totalDays = Math.floor(totalHours / 24)

      const years = Math.floor(totalDays / 365)
      const months = Math.floor((totalDays % 365) / 30)
      const days = totalDays % 30
      const hours = totalHours % 24
      const minutes = totalMinutes % 60
      const seconds = totalSeconds % 60

      setTime({ years, months, days, hours, minutes, seconds })
    }

    updateCounter()
    const interval = setInterval(updateCounter, 1000)
    return () => clearInterval(interval)
  }, [])

  const boxes = [
    { label: 'سنين', value: time.years },
    { label: 'شهور', value: time.months },
    { label: 'أيام', value: time.days },
    { label: 'ساعات', value: time.hours },
    { label: 'دقائق', value: time.minutes },
    { label: 'ثواني', value: time.seconds },
  ]

  return (
    <section className="py-12 sm:py-16 px-4 text-center relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-primary-300">⏰ عداد التعارف ⏰</h2>
      <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">من 25 / 4 / 2026 لحد دلوقتي</p>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {boxes.map((box, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-300 mb-1 sm:mb-2 font-mono">{box.value}</div>
            <div className="text-xs sm:text-sm text-gray-400">{box.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
