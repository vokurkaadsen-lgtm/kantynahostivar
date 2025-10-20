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
    <div>
        <div>
            {layout === layoutBasicIndex ? (
                <>
                    <h2>Vyberte si kantýnu</h2>

                    <div className='flex flex-row'>
                        {canteens.map((_, index) => (
                            <CanteenInfo key={index} index={index} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className='flex flex-row'>
                        <div>
                            <h2>Vyberte si kantýnu</h2>

                            <div>
                                {canteens.map((canteen, index) => (
                                    <Fragment key={index}>
                                        <CanteenInfo index={index} />
                                    </Fragment>
                                ))}
                            </div>
                        </div>

                        <Menu />
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default CanteenInfoTable