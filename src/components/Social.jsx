import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import gmail from '../images/gmail.jpg'

export default function Social() {
    return (
        <div className='px-36 pb-7'>
            <div className='flex justify-center items-center'>
                <a href="https://twitter.com/okaymank" className='px-10 text-blue-500 hover:text-blue-700 transform scale-110 transition-transform hover:scale-100'>
                    <FaTwitter size={30} />
                </a>
                <a href="mailto:mk4664348@gmail.com" className='px-10 transform scale-110 transition-transform hover:scale-100'>
                    <img src={gmail} alt="Gmail" height={30} width={30} />
                </a>
                <a href="www.linkedin.com/in/mayank-kumar42" className='px-10 text-blue-700 hover:text-blue-900 transform scale-110 transition-transform hover:scale-100'>
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/mank-423" className='px-10 text-black transform scale-110 transition-transform hover:scale-100'>
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    );
}
