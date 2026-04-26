import { LiaLinkedin } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-4">

      {/* Text */}
      <div>
        <h6 className="text-sm text-center md:text-left">
          Copyright @ {new Date().getFullYear()} | Made with 💛
        </h6>
      </div>

      {/* Icons */}
      <div className="flex items-center justify-center gap-5">
        <Link href="https://github.com/mank-423" className="hover:text-orange-400">
          <FiGithub size={20} />
        </Link>

        <Link href="https://www.linkedin.com/in/mayank-kumar42/" className="hover:text-orange-400">
          <LiaLinkedin size={24} />
        </Link>

        <Link href="mailto:mk4664348@gmail.com" className="hover:text-orange-400">
          <MdOutlineEmail size={24} />
        </Link>

        <Link href="https://leetcode.com/u/mk4664348/" className="hover:text-orange-400">
          <SiLeetcode size={20} />
        </Link>

        <Link href="https://x.com/okaymank" className="hover:text-orange-400">
          <FaXTwitter size={20} />
        </Link>
      </div>

    </footer>
  )
}

export default Footer