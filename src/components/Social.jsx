import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import gmail from '../images/gmail.jpg'

export default function Social() {
    return (
        <div className='md:px-36 pt-5 pb-8'>
            <div className='flex justify-center items-center'>
                <a href="https://twitter.com/okaymank" className='md:px-10 px-7 text-blue-500 hover:text-blue-700 transform scale-110 transition-transform hover:scale-100'>
                    <FaTwitter size={30} />
                </a>
                <a href="mailto:mk4664348@gmail.com" className='md:px-10 px-7 transform scale-110 transition-transform hover:scale-100'>
                    <img src={gmail} alt="Gmail" height={30} width={30} />
                </a>
                <a href="www.linkedin.com/in/mayank-kumar42" className='md:px-10 px-7 text-blue-700 hover:text-blue-900 transform scale-110 transition-transform hover:scale-100'>
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/mank-423" className='md:px-10 px-7 transform scale-110 transition-transform hover:scale-100'>
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    );
}
