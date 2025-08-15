import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Work() {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>

      <h2 className="text-center text-5xl font-Ovo text-amber-900">My Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div
              className="h-64 bg-center bg-cover transform group-hover:scale-110 transition-all duration-500"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-all duration-500"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm mt-1">{project.description}</p>
              <div className="mt-3 flex items-center gap-2 text-amber-400 cursor-pointer">
                <span>View Project</span>
                <Image src={assets.send_icon} alt="send icon" className="w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href='' className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10
        mx-auto my-20 hover:bg-lightHover duration-500'>

          Show more
          <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </a>
    </div>
  )
}

export default Work
