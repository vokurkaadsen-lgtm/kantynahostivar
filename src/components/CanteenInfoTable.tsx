"use client"

import React from 'react'
import { useCanteenContext} from '@/lib/context/canteenContext'
import CanteenInfo from './CanteenInfo'
import { canteens } from '@/lib/constants/canteens'
import Menu from './Menu'
import { Fragment } from 'react'

const CanteenInfoTable = () => {
    const {layout, layoutBasicIndex} = useCanteenContext()

  return (
    <div className='mt-10'>
        {layout === layoutBasicIndex ? (
            <div className='m-10 lg:m-15'>
                <h2 className='text-lg lg:text-xl font-extrabold text-gray-3 py-6 lg:py-8'>Vyberte si kantýnu</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:flex flex-row gap-7 lg:space-y-10 space-x-15 xl:space-x-12'>
                    {canteens.map((_, index) => (
                        <CanteenInfo key={index} index={index} />
                    ))}
                </div>
            </div>
        ) : (
            <>
                <div className='flex flex-row'>
                    <div className='md:mr-10'>
                        <h2 className='text-sm lg:text-base font-extrabold uppercase text-gray-3 mx-auto my-5 lg:py-6'>Vyberte si kantýnu</h2>

                        <div className='ml-10 flex flex-col gap-12 xl:gap-16'>
                            {canteens.map((canteen, index) => (
                                <Fragment key={index}>
                                    <CanteenInfo index={index} />
                                </Fragment>
                            ))}
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        <Menu />
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default CanteenInfoTable