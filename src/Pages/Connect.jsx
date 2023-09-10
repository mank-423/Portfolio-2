import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import gmail from '../images/gmail.jpg'

function Connect() {
    return (
        <div>

            <div className='md:px-36 pt-5 lg:px-96 flex justify-center'>
                <div className='grid grid-cols-1 transition-transform'>

                    <a href="mailto:mk4664348@gmail.com" className='md:px-10 px-7 py-5 transform scale-110 transition-transform hover:scale-100'>
                        <button className='flex items-center justify-center bg-[#BBE8E8] font-semibold lg:w-72 w-full lg:py-3  md:py-3 md:px-3 rounded-2xl py-3 px-4 border-1 border-black animate-slideInFromLeftThree'>
                            <img src={gmail} alt="Gmail" height={30} width={30} />
                            &nbsp; mk4664348@gmail.com
                        </button>
                    </a>

                    <a href="https://twitter.com/okaymank" className='md:px-10 px-7 py-5 text-blue-500 hover:text-blue-700 transform scale-110 transition-transform hover:scale-100 animate-slideInFromLeftTwo'>
                        <button className='flex items-center justify-center bg-[#E3F4F4] w-full rounded-2xl py-2 border-1 border-black'>
                            <FaTwitter size={30} />
                            <span className='text-black font-semibold'>
                                @okaymank
                            </span>
                        </button>
                    </a>

                    <a href="www.linkedin.com/in/mayank-kumar42" className='md:px-10 px-7 py-5 text-blue-700 hover:text-blue-900 transform scale-110 transition-transform hover:scale-100 animate-slideInFromLeft'>
                        <button className='flex items-center justify-center bg-[#D2E9E9] font-semibold w-full rounded-2xl py-2 border-1 border-black'>
                            <FaLinkedin size={30} />
                            <span className='text-black'>
                                mayank-kumar42
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/mank-423" className='md:px-10 px-7 py-5 text-black transform scale-110 transition-transform hover:scale-100 animate-slideInFromLeft'>
                        <button className='flex items-center justify-center font-semibold bg-[#C4DFDF] w-full rounded-2xl py-2 border-1 border-black'>
                            <FaGithub size={30} />
                            @mank-423
                        </button>
                    </a>
                </div>
            </div>

        </div>

    )
}

export default Connect
