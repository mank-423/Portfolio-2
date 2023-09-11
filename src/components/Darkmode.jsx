import React, { useEffect, useState } from 'react';

function Darkmode() {
    const [isChecked, setIsChecked] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleToggle = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        // Set the theme preference in localStorage
        localStorage.setItem('theme', newValue ? 'dark' : 'light');
        console.log(localStorage.getItem('theme')); // Log the value to the console
    };

    // Set theme state based on local storage on component mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            setIsChecked(storedTheme === 'dark');
        }
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <label className="flex items-center cursor-pointer">
                <div className={`relative w-10 h-5 transition duration-200 ease-in-out rounded-full ${isChecked ? 'bg-black' : 'bg-gray-300'}`}>
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <div className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${isChecked ? 'translate-x-5' : ''}`}></div>
                </div>
                <span className="ml-2">{isChecked ? <span>🌒</span> : <span>☀️</span>}</span>
            </label>
        </div>
    );
}

export default Darkmode;
