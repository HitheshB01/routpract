import React, { useState, useEffect } from 'react';

const Accordion = () => {
    // State to manage the toggle switch (on/off)
    // const [isOn, setIsOn] = useState(false);

    // return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <div className="flex items-center">
        //         <span className="mr-2 text-gray-700">{isOn ? 'ON' : 'OFF'}</span>
        //         <div
        //             className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        //                 isOn ? 'bg-green-500' : 'bg-gray-300'
        //             }`}
        //             onClick={() => setIsOn(!isOn)}
        //         >
        //             <div
        //                 className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
        //                     isOn ? 'translate-x-7' : ''
        //                 }`}
        //             ></div>
        //         </div>
        //     </div>
        // </div>

        // State to manage the theme (light/dark)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Apply the theme class to the body
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="flex items-center">
                <span className="mr-2 text-gray-700 dark:text-gray-300">
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
                <div
                    className={`w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300`}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    <div
                        className={`bg-white dark:bg-gray-400 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                            isDarkMode ? 'translate-x-7' : ''
                        }`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
