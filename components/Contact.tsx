'use client'

import React, { useState } from 'react'
import { FiMail, FiPhone, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text)
        setCopied(type)
        setTimeout(() => setCopied(null), 2000)
    }

    const contactMethods = [
        {
            icon: FiMail,
            title: "Email",
            value: "mk4664348@gmail.com",
            type: "email",
            color: "text-orange-400"
        },
        {
            icon: FiPhone,
            title: "Phone",
            value: "+91 88661 96721",
            type: "phone",
            color: "text-orange-400"
        }
    ]

    return (
        <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="text-center mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-[var(--foreground)]">
                    Let's Work Together
                </h1>
                <p className="text-[var(--foreground)] opacity-70 text-sm sm:text-base max-w-2xl mx-auto">
                    Have a project in mind, need a {" "} <span className='text-orange-400'>Full-Stack Engineer</span>, or want to collaborate on something exciting? 
                    I'd love to hear from you.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {contactMethods.map((method) => (
                        <div
                            key={method.type}
                            onClick={() => copyToClipboard(method.value, method.type)}
                            className="group bg-[var(--background)] rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-400 transition-all duration-300 cursor-pointer text-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-400/10 flex items-center justify-center mx-auto mb-3">
                                <method.icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-orange-400 mb-1">
                                {method.title}
                            </h3>
                            <p className="text-[var(--foreground)] font-medium mb-2">
                                {method.value}
                            </p>
                            <p className="text-xs text-[var(--foreground)] opacity-50">
                                {copied === method.type ? 'Copied! ✓' : `Click to copy ${method.title.toLowerCase()}`}
                            </p>
                        </div>
                    ))}

                    {/* Resume */}
                    <a
                        href="https://drive.google.com/file/d/1MGTduL-asCqsoOtja7ehdo6ku8NL1XlG/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[var(--background)] rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-400 transition-all duration-300 text-center block sm:col-span-2"
                    >
                        <div className="w-12 h-12 rounded-full bg-orange-400/10 flex items-center justify-center mx-auto mb-3">
                            <FiDownload className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-orange-400 mb-1">
                            Resume
                        </h3>
                        <p className="text-[var(--foreground)] font-medium mb-2">
                            Download my resume
                        </p>
                        <p className="text-xs text-[var(--foreground)] opacity-50">
                            PDF format
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact