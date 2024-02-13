"use client";
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>TailwindCSS</li>
                <li>Supabase</li>
                <li>Firebase</li>
                <li>UI/UX Design</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Front-End Web Development Certification</li>
                <li>Web Designing in Canva</li>
                <li>Web Designing using WordPress</li>
            </ul>
        )
    }
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-black bg-[url('/images/about-image.png')]">

            <div className='md:grid grid-cols-3 gap-8 items-start px-4 py-8 xl:gap-16 sm:py-16 xl:px-16 mt-16 h-[800px] md:h-[400px]' >
                <p id='grid-1' className='text-[#fffff0] text-md border-2 border-black p-5 rounded-3xl bg-[#030712]/85 col-span-2 sm:mt-10' >Experienced Full Stack Developer proficient in Next.js for both front and backend development.
                    Skilled in technologies such as Prisma, Node.js, Express.js, React, TailwindCSS. For databases I use MongoDB and PostgreSQL.
                    Well-versed in DevOps and project management, with additional knowledge of UI/UX design. Familiarity with Firebase and Supabase as well as Daisy UI and Next UI for enhanced user interface design.
                </p>
                <div id='grid-2'>
                    <div className='flex flex-row justify-center mt-8 md:mt-0'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                    </div>
                    <div className='text-[#fffff0] mt-4 text-sm border-2 border-black p-5 rounded-3xl bg-[#030712]/85'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>

        </section >
    )
}

export default AboutSection