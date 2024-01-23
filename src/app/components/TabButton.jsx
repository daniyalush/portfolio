import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-black border-b-2 border-purple-500' : 'text-[#374151]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-bold hover:text-black ${buttonClasses}`}></p>
            {children}
        </button>
    )
}

export default TabButton