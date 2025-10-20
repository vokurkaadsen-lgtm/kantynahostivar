import React from 'react'
import Image from 'next/image'
import { canteens } from '@/lib/constants/canteens'
import { useCanteenContext } from '@/lib/context/canteenContext'

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
        <Image
            src={canteens[index].imageUrl}
            width={300}
            height={300}
            alt={`Kantýna ${canteens[index].heading} ${canteens[index].headingBold}`}
            onClick={() => setLayout(index)}
        />
    </div>
  )
}

export default CanteenLogo