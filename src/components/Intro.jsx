import React from 'react'
import myPhoto from '../images/me2.png'

function Intro() {

    const intro = [
        { id: 10, text: 'A full stack developer working on MERN technology stack.' },
        { id: 20, text: 'I like to connect backend servers with user-friendly front-end.' },
        { id: 30, text: 'Always open to learn new technology and stuff and integrate them to solve problems.' }
    ]

    return (
        <section id='intro' className='relative px-36'>

            <div className='grid'>
                <div className='md:absolute md:right-32 md:top-3 lg:absolute lg:right-12 lg:top-3 flex justify-center items-center'>
                    <img src={myPhoto} alt="" height={250} width={250} />
                </div>

                <div className=''>
                    <div className='p-8'>
                        <div className='flex justify-center md:text-6xl text-3xl font-semibold p-2'>
                            Hi
                            <span className='md:flex md:items-center md:justify-between md:h-12 wave'>
                                👋
                            </span>
                            ,I am
                            <h1 className="font-semibold text-transparent md:px-3 px-2 md:h-24 h-12 bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-pink-600">
                                Mayank
                            </h1>
                            .
                        </div>
                        <p className='flex justify-center items-center text-center font-semibold p-2 text-xl'>My developed solutions runs on Internet!</p>
                    </div>

                    <div className='flex justify-center md:p-2 pl-5'>

                        <ul className='list-disc transition-transform'>

                            <li className="animate-slideInFromLeft md:text-lg py-1">
                                A full stack developer working on MERN technology stack.
                            </li>
                            
                            <li className='animate-slideInFromLeftTwo md:text-lg py-1'>
                                I like to connect backend servers with user-friendly front-end.
                            </li>

                            <li className='animate-slideInFromLeftThree md:text-lg py-1'>
                                Always open to learn new technology and stuff and integrate them to solve problems.
                            </li>
                        </ul>

                    </div>

                    <div className='flex justify-center gap-20 pt-6'>
                        <button className='flex justify-center items-center border rounded-lg p-3 md:shadow-sm animate-slideInFromBottomTwo bg-blue-400 font-bold'>
                            <a href="https://drive.google.com/file/d/1UjpWPSiud6Gh88toJCqfeFOoGLuecSd-/view?usp=sharing" target="_blank">
                                Resume
                            </a>
                        </button>

                        <button className='flex justify-center items-centerborder rounded-lg p-3 md:shadow-sm animate-slideInFromBottomOne bg-orange-400 font-bold'>
                            Get in Touch
                        </button>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Intro
