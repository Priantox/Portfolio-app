import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </h4>
            <h2 className='text-center text-5xl font-Ovo text-amber-600'>
                About Me
            </h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Hi! I’m Prianto, a passionate web developer and creative problem solver with a love for building clean, functional, and user-friendly digital experiences. Over the years, I’ve honed my skills in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and backend technologies, allowing me to turn ideas into interactive web solutions.

                        I enjoy tackling challenges that push me to learn and grow, whether it’s designing a responsive website, optimizing performance, or exploring new technologies. My goal is to create work that not only looks good but also makes a meaningful impact for users and businesses alike.

                        When I’m not coding, you’ll find me exploring design trends, working on personal projects, or simply brainstorming new ideas to bring to life. I’m always eager to collaborate, learn, and contribute to projects that excite me.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl 
                                p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 
                                duration-500 hover:shadow-black'>

                                <Image src={icon} alt={title} className='w-7 mt-3' />

                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center 
                                w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg 
                                cursor-pointer hover:-translate-y-1 duration-500'>

                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About