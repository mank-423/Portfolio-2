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
            className={`w-80 rounded-xl shadow-2xl lg:max-w-sm grid grid-flow-row
            overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105
            ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
        >
            {/* Image of the project */}
            <div className="flex flex-wrap justify-center items-center rounded-xl pb-2">
                <img
                    className="object-cover w-full h-full "
                    src={require(`../images/${props.imageName}.jpg`)}
                    alt={props.id}
                />
            </div>

            <div className="flex justify-center items-center">
                {props.info.map((infoItem, index) => (
                    <button key={index} className={`mr-2 text-xs border p-1 rounded-full ${props.colors[index]}`}>
                        {infoItem}
                    </button>
                ))}
            </div>

            <div className="p-4">
                {/* Title of the project */}
                <h1 className="mb-2 leading-normal flex justify-center items-center font-semibold">
                    {props.title}
                </h1>

                {/* Info of the project */}
                <p>
                    {props.text}
                </p>

                {/* Buttons for  github and website link*/}
                <div className="p-2 flex gap-4 justify-center items-center">
                    <a href={props.gitlink} target="_blank">
                        <button
                            className="flex justify-center items-center bg-gray-300 rounded-lg p-2 hover:bg-gray-400">
                            <FaGithub size={20} className="pr-1" />
                            GitHub
                        </button>
                    </a>

                    {props.weblink ?
                        <button className="flex justify-center items-center bg-green-300 rounded-lg p-2 hover:bg-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 
                                01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 
                                0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                            </svg>
                            <h1 className="pl-2">Link</h1>
                        </button>
                        :
                        ""
                    }
                </div>


            </div>
        </div>
    );
}