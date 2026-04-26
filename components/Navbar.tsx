'use client'

import ThemeToggler from './ThemeToggler'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { listItem } from '@/constant/navItem'
import { scrollToSection } from '@/utils/navUtils'
import { NavItem } from '@/types/NavItem'
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<NavItem>(listItem[0]);

    const selectedChange = (item: NavItem) => {
        setSelected(item);
        scrollToSection(item.id)
    }

    return (
        <nav className="w-full">

            <div className="max-w-6xl mx-auto px-6 pb-2 border-b border-gray-200 dark:border-gray-700">

                {/* Top Row */}
                <div className='flex justify-between md:block'>

                    {/* Logo */}
                    <h1 className="font-semibold text-2xl md:py-2">
                        Mayank Kumar
                    </h1>

                    {/* Desktop Right */}
                    <div className="hidden md:flex items-center justify-between gap-6">

                        {/* Links */}
                        <ul className="flex items-center gap-6">
                            {listItem.map((item) => (
                                <li key={item.name}>
                                    <p
                                        onClick={() => selectedChange(item)}
                                        className={`
                                            text-md 
                                            font-medium 
                                            transition-colors 
                                            cursor-pointer 
                                            ${selected.id === item.id ?
                                                'text-orange-400 underline decoration-wavy' :
                                                'text-(--foreground) opacity-70 hover:opacity-100'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        {/* Toggle */}
                        <ThemeToggler />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden"
                    >
                        <FiMenu />
                    </button>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/50">

                    {/* Panel */}
                    <div className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-[#1c1c1c] p-6 shadow-lg">

                        {/* Close */}
                        <div className="flex justify-end mb-6">
                            <button onClick={() => setOpen(false)}>
                                <FiX />
                            </button>
                        </div>

                        {/* Links */}
                        <ul className="flex flex-col gap-6">
                            {listItem.map((item) => (
                                <li key={item.name}>
                                    <p
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                                    >
                                        {item.name}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        {/* Toggle */}
                        <div className="mt-8">
                            <ThemeToggler />
                        </div>

                    </div>
                </div>
            )}

            <div className='flex px-6 pt-2'>
                <Link href={'/'} className='text-gray-400 hover:text-(--foreground)'>
                    Home
                </Link>

                <p>&nbsp;{`>>`}</p>
                <p>
                    &nbsp;{selected.name}
                </p>
            </div>
        </nav>
    )
}

export default Navbar