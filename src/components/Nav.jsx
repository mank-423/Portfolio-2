import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  const links = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Projects', link: '/projects' },
  ];

  const [open, setOpen] = useState(false);


  return (
    <nav>
      <div className="bg-white w-full">
        <div className="flex items-center justify-center bg-white py-4 md:px-2 px-7">

          {/* <div
            onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
          </div> */}

          <ul
            className={`flex justify-center items-center md:pb-0 pt-4 absolute md:static bg-white 
            md:z-auto left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in`}
          >
          {/* ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 '}
            md:opacity-100 */}
            {links.map((link) => (
              <li key={link.id} className="md:ml-8 text-xl md:my-0 my-4 px-4">
                <Link to={link.link} className="text-gray-900 hover:text-gray-500 duration-400">
                  <span className="text-sm md:text-base font-semibold">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
