import React, { useState } from 'react';

export default function Navbar() {
  const links = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Projects', link: '/projects' },
  ];

  const [open, setOpen] = useState(false);


  return (
    <nav>
      <div className="bg-white w-full">
        <div className="md:flex items-center justify-center bg-white py-4 md:px-2 px-7">

          <div
            onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
          </div>

          <ul
            className={`md:flex md:pb-0 pb-12 absolute md:static bg-white 
            md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
            ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 '}
            md:opacity-100`}
          >
            {links.map((link) => (
              <li key={link.id} className="md:ml-8 text-xl md:my-0 my-4 px-4">
                <a href={link.link} className="text-gray-900 hover:text-gray-500 duration-400">
                  <span className="text-sm md:text-base">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
