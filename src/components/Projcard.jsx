import React, { useEffect, useState } from "react";

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
            className={`w-32 rounded-lg shadow-md lg:max-w-sm grid gird-flow-row
            overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-110
            ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
        >
            <div className="flex justify-center items-center h-28">
            <img
                className="object-cover"
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

            </div>
        </div>
    );
}