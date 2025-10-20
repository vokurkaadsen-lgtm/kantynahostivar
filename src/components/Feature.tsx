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
    <div>
        <div>
            <Image 
                src={features[index].imageUrl}
                width={50}
                height={50}
                alt={features[index].heading}
            />
        </div>

        <div>
            <h3>
                {features[index].heading}
            </h3>
            <p>
                {features[index].text}
            </p>
        </div>
    </div>
  )
}

export default Feature