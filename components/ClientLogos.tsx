'use client'

import { useEffect, useRef } from 'react'

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Client logos - actual client images
  const logos = [
    { id: 1, name: 'Client 1', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/1.png?fit=250%2C250&ssl=1' },
    { id: 2, name: 'Client 2', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/2-1.png?fit=250%2C250&ssl=1' },
    { id: 3, name: 'Client 3', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/3-1.png?fit=250%2C250&ssl=1' },
    { id: 4, name: 'Client 4', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/4.png?fit=250%2C250&ssl=1' },
    { id: 5, name: 'Client 5', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/5-1.png?fit=250%2C250&ssl=1' },
    { id: 6, name: 'Client 6', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/6-1.png?fit=250%2C250&ssl=1' },
    { id: 7, name: 'Client 7', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/7-1.png?fit=250%2C250&ssl=1' },
    { id: 8, name: 'Client 8', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/8-1.png?fit=250%2C250&ssl=1' },
    { id: 9, name: 'Client 9', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/9-1.png?fit=250%2C250&ssl=1' },
    { id: 10, name: 'Client 10', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/10.png?fit=250%2C250&ssl=1' },
    { id: 11, name: 'Client 11', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/11.png?fit=250%2C250&ssl=1' },
    { id: 12, name: 'Client 12', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/12-1.png?fit=250%2C250&ssl=1' },
    { id: 13, name: 'Client 13', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/13.png?fit=250%2C250&ssl=1' },
    { id: 14, name: 'Client 14', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/14.png?fit=250%2C250&ssl=1' },
    { id: 15, name: 'Client 15', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/15.png?fit=250%2C250&ssl=1' },
    { id: 16, name: 'Client 16', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/16.png?fit=250%2C250&ssl=1' },
    { id: 17, name: 'Client 17', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/17.png?fit=250%2C250&ssl=1' },
    { id: 18, name: 'Client 18', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/18.png?fit=250%2C250&ssl=1' },
    { id: 19, name: 'Client 19', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/19.png?fit=250%2C250&ssl=1' },
    { id: 20, name: 'Client 20', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/20.png?fit=250%2C250&ssl=1' },
    { id: 21, name: 'Client 21', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/21.png?fit=250%2C250&ssl=1' },
    { id: 22, name: 'Client 22', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/22.png?fit=250%2C250&ssl=1' },
    { id: 23, name: 'Client 23', src: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/23.png?fit=250%2C250&ssl=1' },
  ]

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos, ...logos]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset position when we've scrolled through one set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="relative">
      {/* Scrolling Logos Container */}
      <div className="overflow-hidden py-8">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-48 h-28 flex items-center justify-center transition-all duration-300 hover:scale-110 p-4 group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
    </div>
  )
}
