import React from 'react'
import Image from 'next/image'
import { canteens } from '@/lib/constants/canteens'
import { useCanteenContext } from '@/lib/context/canteenContext'
import type { LayoutType } from '@/lib/types'

type CanteenLogoProps = {
    index: number
}

const CanteenLogo = ({index}: CanteenLogoProps) => {
    const { setLayout} = useCanteenContext()

    if (index > (canteens.length - 1)) {
        return null
    }

  return (
    <div>
        <div>
            <Image
                src={canteens[index].imageUrl}
                width={500}
                height={500}
                alt={`Kantýna ${canteens[index].heading} ${canteens[index].headingBold}`}
                onClick={() => setLayout(index as LayoutType)}
            />

            {/* <div>
                <h3>
                    {canteens[index].heading}<br/>
                    {canteens[index].headingBold}
                </h3>
            </div> */}
        </div>
    </div>
  )
}

export default CanteenLogo