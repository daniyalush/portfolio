import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div className='h-40 lg:h-60 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link href={gitUrl} className='h-12 w-12 mr-2 border-2 relative rounded-full border-[#9ca3af] hover:border-white group/link'>
                        <CodeBracketIcon className='h-8 w-8 text-[#9ca3af] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
                    </Link>
                    <Link href={previewUrl} className='h-12 w-12 border-2 relative rounded-full border-[#9ca3af] hover:border-white group/link'>
                        <EyeIcon className='h-8 w-8 text-[#9ca3af] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>

            </div>

            <div className='text-white rounded-b-xl bg-[#181818] py-4 px-4'>
                <h5 className='text-lg font-semibold mb-2 text-[#e2e8f4]'>{title}</h5>
                <p className='font-light text-[#94a3b8]'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard