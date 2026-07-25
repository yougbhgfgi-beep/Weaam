import { useState, useRef, useEffect } from 'react'
import useParticleSystem from './hooks/useParticleSystem'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BirthdayCake from './components/BirthdayCake'
import Timeline from './components/Timeline'
import VideoSection from './components/VideoSection'
import Wishes from './components/Wishes'
import Counter from './components/Counter'
import Footer from './components/Footer'
import FinalScene from './components/FinalScene'
import Login from './components/Login'
import TypewriterText from './components/TypewriterText'

export default function App() {
  useParticleSystem()

  const [isLogged, setIsLogged] = useState(false)
  const [password, setPassword] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [showSecret, setShowSecret] = useState(false)
  const [showFinalScene, setShowFinalScene] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleLogin = () => {
    if (password.trim() === '29725') {
      setIsLogged(true)
      if (audioRef.current) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => console.log('Audio playback failed:', error))
        }
      }
      setTimeout(() => setShowMessage(true), 1200)
    } else {
      alert('كلمة السر غلط! جربي (29725) 🎂')
    }
  }

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const starCount = isMobile ? 20 : 40

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-100 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(starCount)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: Math.random() * 5 + 3 + 's'
            }}></div>
        ))}
      </div>

      <audio ref={audioRef} loop preload="auto">
        <source src="/media/song.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleAudio}
        className={`fixed top-3 left-3 sm:top-4 sm:left-4 z-50 p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 active:scale-90 ${
          isPlaying ? 'bg-primary-300 text-white animate-spin' : 'bg-white text-primary-300 hover:bg-gray-100'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      </button>

      {!isLogged ? (
        <Login password={password} setPassword={setPassword} handleLogin={handleLogin} />
      ) : (
        <div className="relative z-10">
          <Navbar />

          {showSecret && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 animate-fade-in backdrop-blur-sm" onClick={() => setShowSecret(false)}>
              <div className="bg-white px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 rounded-[2rem] text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 shadow-2xl transform scale-105 transition-transform text-center mx-4">
                🎂 كل سنة وانت طيب يا Weaam! 🎂
              </div>
            </div>
          )}

          {selectedImage && (
            <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center animate-fade-in p-4" onClick={() => setSelectedImage(null)}>
              <button className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <img src={selectedImage} alt="Full View" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-2 border-white/20" onClick={(e) => e.stopPropagation()} />
            </div>
          )}

          {showMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 animate-fade-in backdrop-blur-md p-4">
              <div className="bg-white/90 rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col relative border border-primary-100">
                <div className="overflow-y-auto p-5 sm:p-6 md:p-10">
                  <div className="text-center mb-5 sm:mb-6 md:mb-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">🎂</div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 font-sans leading-snug">رسالة من Doha لـ Weaam 🎂</h2>
                  </div>
                  <TypewriterText
                    lines={[
                      'كل سنه وانت طيب و بخير و تحقق كل اللي نفسك فيه 💗 ✨',
                      'وكل سنه و انا قرفاك في حياتك برده 😂🫵🏻',
                      'هو اينعم انا زبطها مع البيرث داي بتاعك بس انت عارف انها علشان حافظت ع صلاتك،، ربنا يثبتك ديما و يبعد عنك اي حرام',
                      'و اه صحيح عجبني فيك تربيه يور مام ليك وصحوبيه يورد داد حرفيا ربنا يخليكوا لبعض ديما',
                      'بس نصيحه متخونش ثقه اهلك فيك علشان اي حد و حافظ عليهم مش هتلاقي زيهم في حياتك و الله',
                      'و عايز يتكتب كتابه و يكون بيتكتب ع ورقه 📝',
                      '🎂🎉🎈'
                    ]}
                    speed={25}
                    lineDelay={300}
                    className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-gray-700 font-medium space-y-4 sm:space-y-5 md:space-y-6 text-right"
                  />
                  <div className="text-center mt-6 sm:mt-7 md:mt-8">
                    <button onClick={() => setShowMessage(false)} className="bg-gradient-to-r from-primary-300 to-primary-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-sm sm:text-base active:scale-95">
                      🎂 كل سنة وانت طيب يا Weaam
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showFinalScene && <FinalScene onClose={() => setShowFinalScene(false)} />}

          <div className="relative">
            <Hero onSurprise={() => { setShowSecret(true); setTimeout(() => setShowSecret(false), 2000) }} />
            <BirthdayCake />
            <Timeline onSelectImage={setSelectedImage} />
            <VideoSection audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} isLogged={isLogged} />
            <Counter />
            <Wishes />
            <Footer onFinalScene={() => setShowFinalScene(true)} />
          </div>
        </div>
      )}
    </div>
  )
}
