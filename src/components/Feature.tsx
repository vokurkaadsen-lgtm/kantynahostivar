import React from 'react'
import { features } from '@/lib/constants/features'
import Image from 'next/image'

type FetureProps = {
    index: number
}

const Feature = ({index}: FetureProps) => {
    if (index > (features.length - 1)) {
        // error logic
        return
    }

  return (
    <div className='flex flex-row gap-5 group hover:cursor-pointer'>
        <div className='flex-shrink-0'>
            <Image 
                src={features[index].imageUrl}
                width={80}
                height={80}
                alt={features[index].heading}
            />
        </div>

        <div className='flex flex-col justify-center items-start ml-5 lg:mr-5 overflow-visible'>
            {/* <div className='transition-transform duration-300 ease-in-out group-hover:-translate-y-6'> */}
                <h3 className='text-sm lg:text-base font-extrabold uppercase text-canteen-2 lg:max-w-60
                       transition-transform duration-300 ease-in-out
                       group-hover:-translate-y-2'>
                    {features[index].heading}
                </h3>

                <p className='font-medium text-xs lg:text-sm text-gray-3 mt-[0.625rem]
                      overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0
                      group-hover:max-h-40'>
                    {features[index].text}
                </p>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Feature