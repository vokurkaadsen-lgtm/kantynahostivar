import React from 'react'
import CanteenInfoTable from '@/components/CanteenInfoTable'
import { UseCanteenProvider } from '@/lib/context/canteenContext'

const ChooseCanteenPage = () => {
  return (
    <UseCanteenProvider>
        <div className='flex flex-row'>
            <CanteenInfoTable />
        </div>
    </UseCanteenProvider>
  )
}

export default ChooseCanteenPage