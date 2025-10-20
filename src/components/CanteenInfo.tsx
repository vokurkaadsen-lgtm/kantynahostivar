import React from 'react'
import { canteens } from '@/lib/constants/canteens'
import CanteenLogo from './CanteenLogo'
import { useCanteenContext } from '@/lib/context/canteenContext'
import Map from './Map'
import Menu from './Menu'
import { cn } from '@/lib/utils'

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
    <div className='hover:cursor-pointer'>
        <CanteenLogo index={index}/>

        {layout === layoutBasicIndex ? (
                <div>
                    <h3 className={cn('text-sm lg:text-base font-extrabold uppercase text-gray-3 md:ml-4 mt-8 mb-6 lg:mt-10', canteens[index].type === "VEŘEJNÁ KANTÝNA" && ('text-orange-500'))}>
                        {canteens[index].type}
                    </h3>

                    <button 
                        onClick={() => setLayout(index)}
                        className='text-sm lg:text-base font-bold uppercase text-center text-white rounded-full shadow bg-canteen-2 hover:text-canteen-2 hover:bg-white hover:cursor-pointer px-5 py-0.5'
                    >
                        Menu
                    </button>
                </div>
        ) : layout === index ? (
            <div className='flex flex-col gap-7 mt-3'>
                {/* line */}

                <h2 className='text-sm lg:text-base font-extrabold uppercase text-gray-3'>
                    {canteens[index].type}
                </h2>

                <div>
                    <h3 className='text-sm lg:text-base font-extrabold uppercase text-gray-3'>Otevírací doba</h3>    
                    <p className='text-md lg:text-base font-semibold text-gray-3'>{canteens[index].openningTime.dayOfWeek}</p>
                    <p className='text-md lg:text-base font-semibold text-gray-3'>{canteens[index].openningTime.time}</p>
                </div>   

                <div>
                    <h3 className='text-sm lg:text-base font-extrabold uppercase text-gray-3'>Kontakt</h3>    
                    <p className='text-md lg:text-base font-semibold text-gray-3'>{canteens[index].conatct.phone}</p>
                    <p className='text-md lg:text-base font-semibold text-gray-3'>{canteens[index].conatct.email}</p>
                </div>

                <div>
                    <h3 className='text-sm lg:text-base font-extrabold uppercase text-gray-3'>Adresa</h3>   
                    <p className='text-md lg:text-base font-semibold text-gray-3'>{canteens[index].adress.street}</p>
                    <p className='text-md lg:text-base font-semibold text-gray-3'>{canteens[index].adress.city}</p> 
                </div>   

                <Map />    

                <div className='block -mx-40 md:hidden'>
                    <Menu />
                </div>      
            </div>
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