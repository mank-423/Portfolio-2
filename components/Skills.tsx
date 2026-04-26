'use client'

const Skills = () => {
    const expertiseData = {
        languages: ["JavaScript", "TypeScript", "Python", "C/C++"],
        frameworks: ["React.js", "React Native", "Next.js", "Node.js", "Express.js"],
        librariesAndTools: [
            "REST API", "GraphQL", "Postman", "Git", "Github", "Firebase", "MongoDB", "AWS (EC2, S3)", "AWS Lambda",
            "Tailwind CSS", "Jest", "Docker", "LLM", "LangChain", "OpenAI"
        ]
    }

    return (
        <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[var(--foreground)]">
                Skills
            </h1>

            {/* Languages */}
            <div className="mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3">
                    Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                    {expertiseData.languages.map((lang, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-400/10 hover:text-orange-400 dark:hover:text-orange-400 transition-all duration-200 hover:cursor-pointer"
                        >
                            {lang}
                        </span>
                    ))}
                </div>
            </div>

            {/* Frameworks */}
            <div className="mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3">
                    Frameworks
                </h2>
                <div className="flex flex-wrap gap-2">
                    {expertiseData.frameworks.map((framework, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-400/10 hover:text-orange-400 dark:hover:text-orange-400 transition-all duration-200 hover:cursor-pointer"
                        >
                            {framework}
                        </span>
                    ))}
                </div>
            </div>

            {/* Libraries and Tools */}
            <div>
                <h2 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3">
                    Libraries & Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                    {expertiseData.librariesAndTools.map((tool, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-400/10 hover:text-orange-400 dark:hover:text-orange-400 transition-all duration-200 hover:cursor-pointer"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills