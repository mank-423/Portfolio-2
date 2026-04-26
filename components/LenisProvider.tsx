'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            // Duration of scroll animation (higher = slower)
            duration: 0.7,
            
            // Easing function for scroll
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            
            // Direction of scrolling
            orientation: 'vertical',
            
            // Gesture direction
            gestureOrientation: 'vertical',
            
            // Enable smooth mouse wheel
            smoothWheel: true,
            
            // Multiplier for touch scrolling
            touchMultiplier: 2,
            
            // Infinite scrolling
            infinite: false,
        })

        // Get scroll target from URL hash
        if (window.location.hash) {
            const target = window.location.hash.slice(1)
            setTimeout(() => {
                const element = document.getElementById(target)
                if (element) {
                    lenis.scrollTo(element, { offset: -100 })
                }
            }, 100)
        }

        // Animation frame for Lenis
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Cleanup
        return () => {
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}

export default LenisProvider