"use client";
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-black bg-[url('/images/about-image.png')]">
            <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16 mt-10' >
                <p className='text-[#fffff0] text-sm md:text-md border-2 border-black p-5 rounded-3xl bg-[#030712]/85' >Experienced Full Stack Developer proficient in Next.js for both front and backend development.
                    Skilled in technologies such as Prisma, Node.js, Express.js, React, TailwindCSS. For databases I use MongoDB and PostgreSQL.
                    Well-versed in DevOps and project management, with additional knowledge of UI/UX design. Familiarity with Firebase and Supabase as well as Daisy UI and Next UI for enhanced user interface design.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {""}
                        Skills{""}
                    </TabButton>
                    <span className='mr-3 font-bold hover:text-black text-[#374151] border-b-2 border-purple-500 '>
                        Skills
                    </span>
                    <span>
                        Certifications
                    </span>
                    <span>
                        Experience
                    </span>
                </div>
            </div>
        </section >
    )
}

export default AboutSection