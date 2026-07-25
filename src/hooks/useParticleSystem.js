import { useEffect } from 'react'

export default function useParticleSystem() {
  useEffect(() => {
    const handleClick = (e) => {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div')
        particle.classList.add('particle')
        particle.innerHTML = '❤️'
        particle.style.left = e.clientX + 'px'
        particle.style.top = e.clientY + 'px'
        particle.style.fontSize = Math.random() * 20 + 10 + 'px'
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px')
        particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px')
        document.body.appendChild(particle)
        setTimeout(() => particle.remove(), 1000)
      }
    }

    const handleMove = (e) => {
      if (Math.random() > 0.85) {
        const heart = document.createElement('div')
        heart.classList.add('trail-heart')
        heart.innerHTML = '✨'
        heart.style.left = e.clientX + 'px'
        heart.style.top = e.clientY + 'px'
        document.body.appendChild(heart)
        setTimeout(() => heart.remove(), 1000)
      }
    }

    window.addEventListener('click', handleClick)
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])
}
