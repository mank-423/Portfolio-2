'use client'

import React from 'react'
import Image from 'next/image'
import { liveProjects, personalProjects } from '@/constant'

const Projects = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[var(--foreground)]">
                Projects
            </h1>

            {/* Live/Work Projects Section */}
            {liveProjects.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
                        Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {liveProjects.map((project) => (
                            <LiveProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            )}

            {/* Personal Projects Section */}
            {personalProjects.length > 0 && (
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
                        Personal Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {personalProjects.map((project) => (
                            <PersonalProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

// Live Project Card (No tech stack, just image, title, description, and demo link)
const LiveProjectCard = ({ project }: { project: any }) => {
    const [imageError, setImageError] = React.useState(false)

    return (
        <div className="group bg-[var(--background)] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Image Container - Smaller/zoomed out */}
            <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-gradient-to-br from-orange-400/20 to-blue-400/20 flex-shrink-0">
                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600">
                        <span className="text-white text-lg font-bold px-4 text-center">
                            {project.title}
                        </span>
                    </div>
                )}
            </div>

            {/* Content - Compact */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {project.title}
                </h3>

                <p className="text-[var(--foreground)] opacity-70 text-xs leading-relaxed mb-3">
                    {project.description}
                </p>

                {/* Demo Link */}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-orange-400 hover:text-orange-500 transition-colors"
                    >
                        View Project →
                    </a>
                </div>
            </div>
        </div>
    )
}

// Personal Project Card (With tech stack and GitHub links)
const PersonalProjectCard = ({ project }: { project: any }) => {
    const [imageError, setImageError] = React.useState(false)

    return (
        <div className="group bg-[var(--background)] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Image Container - Smaller/zoomed out */}
            <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-gradient-to-br from-orange-400/20 to-blue-400/20 flex-shrink-0">
                {project.image && !imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600">
                        <span className="text-white text-lg font-bold px-4 text-center">
                            {project.title}
                        </span>
                    </div>
                )}
            </div>

            {/* Content - Compact */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    {project.title}
                </h3>

                <p className="text-[var(--foreground)] opacity-70 text-xs leading-relaxed mb-3">
                    {project.description}
                </p>

                {/* Tech Stack - Compact */}
                <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech: string, i: number) => (
                            <span
                                key={i}
                                className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[10px] text-gray-700 dark:text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-orange-400 hover:text-orange-500 transition-colors"
                        >
                            GitHub →
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-orange-400 hover:text-orange-500 transition-colors"
                        >
                            Live Demo →
                        </a>
                    )}
                    {project.paper && (
                        <a
                            href={project.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-500 transition-colors"
                        >
                            IEEE Paper →
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects