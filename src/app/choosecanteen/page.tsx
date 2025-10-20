import React from 'react'
import CanteenInfoTable from '@/components/CanteenInfoTable'
import { UseCanteenProvider } from '@/lib/context/canteenContext'

const ChooseCanteenPage = () => {
  return (
    <UseCanteenProvider>
        <div className='kh-bg-gradient min-h-[100dvh] flex justify-center items-center'>
            <CanteenInfoTable />
        </div>
    </UseCanteenProvider>
  )
}

export default ChooseCanteenPage