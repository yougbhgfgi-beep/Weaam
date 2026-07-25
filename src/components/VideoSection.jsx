export default function VideoSection({ audioRef, isPlaying, setIsPlaying, isLogged }) {
  return (
    <section id="video" className="py-24 px-4 text-center relative z-10">
      <div className="max-w-4xl mx-auto bg-black/40 p-4 rounded-[2rem] shadow-2xl border border-white/10 backdrop-blur-sm transform hover:scale-[1.01] transition-transform duration-500 relative group">
        <video
          className="w-full rounded-xl shadow-lg"
          playsInline
          onClick={(e) => e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause()}
          onPlay={() => {
            if (audioRef.current) {
              audioRef.current.pause()
              setIsPlaying(false)
            }
          }}
          onPause={() => {
            if (audioRef.current && isLogged) {
              audioRef.current.play()
              setIsPlaying(true)
            }
          }}
          onEnded={() => {
            if (audioRef.current && isLogged) {
              audioRef.current.play()
              setIsPlaying(true)
            }
          }}
        >
          <source src="/media/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
          style={{ opacity: 0 }}
        >
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
