import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [

    {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        image: '/images/projects/1.jpg'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description 2',
        image: '/images/projects/2.jpg'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description 3',
        image: '/images/projects/3.png'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Description 4',
        image: '/images/projects/4.png'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Description 5',
        image: '/images/projects/5.png'
    },
];

const ProjectsSection = () => {
    return (
        <section className="mt-12">
            <h2 className='text-center text-4xl font-bold text-black my-8'>
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-4 font-semibold text-sm'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image} />
                ))};
            </div>
        </section>
    )
}

export default ProjectsSection