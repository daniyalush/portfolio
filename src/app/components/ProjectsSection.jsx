"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [

    {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        image: '/images/projects/1.jpg',
        tag: ["All", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description 2',
        image: '/images/projects/2.jpg',
        tag: ["All", "Mobile"],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description 3',
        image: '/images/projects/3.png',
        tag: ["All", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Description 4',
        image: '/images/projects/4.png',
        tag: ["All", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Description 5',
        image: '/images/projects/5.png',
        tag: ["All", "Mobile"],
        gitUrl: '/',
        previewUrl: '/'
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <section className="mt-16">
            <h2 className='text-center text-4xl font-bold text-black my-4'>
                My Projects
            </h2>
            <div className='text-black flex flex-row justify-center items-center gap-2 py-4 font-semibold'>
                <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
                <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
                <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-4 font-semibold text-sm'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection