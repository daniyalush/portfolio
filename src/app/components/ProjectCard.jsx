import React from 'react'

const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        <div>
            <div className='h-52 md:h-82 rounded-t-xl'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className=' text-[#fffff0]'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard