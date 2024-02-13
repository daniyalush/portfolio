import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-[#000000] border-b-2 border-purple-700' : 'text-[#2f353f]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-[#000000] ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton