import React from 'react'
import { canteens } from '@/lib/constants/canteens'
import CanteenLogo from './CanteenLogo'
import { useCanteenContext } from '@/lib/context/canteenContext'
import type { LayoutType } from '@/lib/types'
import Map from './Map'

type CanteeInfoProps = {
    index: number
}

const CanteenInfo = ({index}: CanteeInfoProps) => {
    const {layout, setLayout, layoutBasicIndex} = useCanteenContext()
    
    if (index > (canteens.length - 1)) {
        // error logic
        return null
    }

    console.log(layout)

  return (
    <div>
        <CanteenLogo index={index}/>

        {layout === layoutBasicIndex ? (
            <>
                <h3>
                    {canteens[index].type}
                </h3>

                <button onClick={() => setLayout(index as LayoutType)}>Menu</button>
            </>
        ) : layout === index as LayoutType ? (
            <>
                {/* line */}

                <h3>
                    {canteens[index].type}
                </h3>

                <div>
                    <h3>Otevírací doba</h3>    
                    <p>{canteens[index].openningTime.dayOfWeek}</p>
                    <p>{canteens[index].openningTime.time}</p>
                </div>   

                <div>
                    <h3>Kontakt</h3>    
                    <p>{canteens[index].conatct.phone}</p>
                    <p>{canteens[index].conatct.email}</p>
                </div>

                <div>
                    <h3>Adresa</h3>   
                    <p>{canteens[index].adress.street}</p>
                    <p>{canteens[index].adress.city}</p> 
                </div>   

                <Map />          
            </>
        ) : (
            null
        )}

        {/* context === 0 */}
            {/* canteenType */}

            {/* button */}

        {/* context !== 0 */}
            {/* line */}

            {/* canteen info */}

            {/* google map */}
    </div>
  )
}

export default CanteenInfo