import React from 'react'
import Image from "next/image"

const AboutSection = () => {
    return (
        <section className="text-black bg-[url('/images/about-image.png')]">
            <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16 mt-10' >
                <h2 className='text-4xl font font-bold text-black mb-4 place-self-center'>About Me</h2>
                <p className='text-base md:text-lg font-medium' >Experienced Full Stack Developer proficient in Next.js for both front and backend development.
                    Skilled in technologies such as Prisma, Node.js, Express.js, React, TailwindCSS. For databases I use MongoDB and PostgreSQL.
                    Well-versed in DevOps and project management, with additional knowledge of UI/UX design. Familiarity with Firebase and Supabase as well as Daisy UI and Next UI for enhanced user interface design.
                </p>
            </div>
        </section >
    )
}

export default AboutSection