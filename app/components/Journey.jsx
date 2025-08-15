// import React from 'react'

import { Journeydata } from "@/assets/assets";

export default function Journey() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div id='' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo text-gray-500'>
          My Journey
        </h4>

        <h2 className='text-center text-5xl font-Ovo text-blue-600'>
          How I Got Here
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>

        </p>
      </div>
      <div className="relative border-l border-gray-300">
        {Journeydata.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-2.5 flex items-center justify-center w-4 h-4 bg-blue-200 rounded-full ring-8 ring-white"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
