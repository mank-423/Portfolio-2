import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projcard(props) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay the visibility of each card with a setTimeout
        const timeout = setTimeout(() => {
        setIsVisible(true);
        }, 300); // Adjust the delay time as needed

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, [props.id]);
    
    return (
        <div 
            className={`w-80 rounded-lg shadow-2xl lg:max-w-sm grid gird-flow-row
            overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105
            ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
        >
            <div className="flex justify-center items-center">
            <img
                className="object-cover w-full h-full p-4 rounded-lg "
                src={require(`../images/${props.imageName}.jpg`)}
                alt={props.id}
            />
            </div>
            <div className="p-4">
                <h1 className="mb-2 leading-normal flex justify-center items-center font-semibold">
                    {props.title}
                </h1>

                {/* Here I need to include tech stack*/}
                <p>
                    {props.info}
                </p>

                <p>
                    {props.text}
                </p>

                <div className="p-2">
                    <button className="flex justify-center items-center bg-gray-300 rounded-lg p-3 hover:bg-gray-400">
                        <FaGithub size={20} className="pr-1"/>
                        <a href={props.link}>Github</a>
                    </button>
                </div>

            </div>
        </div>
    );
}