import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? 'bg-purple-500 border-black text-black' : 'text-[#6b7280] border-slate-500 hover:border-black';
    ;
    return (
        <button className={`${buttonStyles} rounded-full border-2 px-5 py-2 cursor-pointer`}
            onClick={() => onClick(name)}>
            {name}
        </button>
    )
}

export default ProjectTag