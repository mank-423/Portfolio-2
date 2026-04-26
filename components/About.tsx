'use client'

import Image from 'next/image'

const About = () => {
    return (
        <section
            id="about"
            className="max-w-6xl mx-auto px-6 py-2"
        >
            {/* Title */}
            <h1 className="text-3xl font-bold mb-8">
                About
            </h1>

            {/* Description + CTA */}
            <div className="mb-6">
                <p className="text-(--foreground) opacity-80 mb-3">
                    Hi, I'm Mayank Kumar, a software engineer from Vadodara, Gujarat, India.
                    Currently working at {" "}
                    <a href="http://mytravaly.com/" className='underline decoration-dashed underline-offset-4 hover:text-blue-400'>
                        MyTravaly Worldwide.
                    </a>
                </p>

                {/* CTA */}
                <a
                    href="https://drive.google.com/file/d/1MGTduL-asCqsoOtja7ehdo6ku8NL1XlG/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block underline decoration-dashed underline-offset-4 text-orange-400 hover:text-orange-500 transition-colors"
                >
                    Download Resume
                </a>
            </div>

            {/* Image */}
            <div className="flex justify-center mb-6">
                <div className="relative w-full md:w-[90%] h-100 md:h-120 overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src="/images/profile_img.png"
                        alt="Mayank Kumar"
                        fill
                        className="object-cover scale-120 md:scale-100"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default About