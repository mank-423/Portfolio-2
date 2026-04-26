'use client'

import { experiences } from '@/constant'
import { useEffect, useRef, useState } from 'react'

const Experience = () => {

    return (
        <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
                Experience
            </h1>

            {/* Timeline Container */}
            <div className="relative">
                {/* Vertical Line - Hidden on mobile, visible on sm and up */}
                <div className="hidden sm:block absolute left-[11px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-400/50 to-transparent"></div>

                {/* Experience Items */}
                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>

        </section>
    )
}

// Timeline Item Component for Experience
const TimelineItem = ({ exp, index }: { exp: any, index: number }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return (
        <div ref={ref} className="relative flex flex-col sm:flex-row gap-3 sm:gap-6">
            {/* Left Column with Dot - Mobile friendly */}
            <div className="relative flex items-center sm:items-start gap-3 sm:block">
                {/* Mobile connection line */}
                <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-orange-400/30 sm:hidden"></div>

                {/* Dot */}
                <div className="relative z-10">
                    <div
                        className={`w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-orange-400 border-4 border-white dark:border-gray-900 shadow-md transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            }`}
                    >
                        {/* Work icon on mobile */}
                        <span className="block sm:hidden text-center text-white text-xs font-bold"></span>
                    </div>
                </div>

                {/* Mobile company & title */}
                <div className="flex-1 sm:hidden">
                    <h3 className="text-lg font-bold text-[var(--foreground)]">
                        {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-orange-400">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-[var(--foreground)] opacity-60 text-xs">{exp.period}</span>
                    </div>
                </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 pb-6 sm:pb-8 ml-11 sm:ml-0">
                <div
                    className={`bg-[var(--background)] rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-700 ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-8 sm:-translate-x-12'
                        }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                >
                    {/* Header - Desktop only */}
                    <div className="hidden sm:block mb-4">
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                            {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-orange-400 mb-2">
                            <span className="font-semibold">{exp.company}</span>
                            <span className="text-gray-400">•</span>
                            <span>{exp.location}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-[var(--foreground)] opacity-60">{exp.period}</span>
                        </div>
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-2">
                        {exp.achievements.map((achievement: string, i: number) => (
                            <li
                                key={i}
                                className={`text-[var(--foreground)] opacity-80 text-xs sm:text-sm leading-relaxed flex gap-2 transition-all duration-500 ${isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-4 sm:-translate-x-8'
                                    }`}
                                style={{ transitionDelay: `${index * 200 + i * 100}ms` }}
                            >
                                <span className="text-orange-400 mt-0.5 sm:mt-1">▹</span>
                                <span className="flex-1">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Experience