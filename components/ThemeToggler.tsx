'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggler() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // ✅ Fix hydration issue
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const isDark = resolvedTheme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 cursor-pointer"
        >
            {isDark ? (
                <FiSun size={20} className="text-yellow-400 hover:text-orange-400" />
            ) : (
                <FiMoon size={20} className="text-blue-400" />
            )}
        </button>
    )
}