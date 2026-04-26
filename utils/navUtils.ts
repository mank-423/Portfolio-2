export const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        // Check if Lenis is available
        if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 })
        } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
}

// Add TypeScript declaration for window.lenis
declare global {
    interface Window {
        lenis: any
    }
}