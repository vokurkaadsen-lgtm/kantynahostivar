"use client"

import React, {useState, useContext, createContext} from "react"
import { canteens } from "../constants/canteens"

const defaultLayoutValue = canteens.length

const UseCanteenContext = createContext<UseCanteenContextType | undefined>(undefined)

export type UseCanteenContextType = {
    layout: number,
    setLayout: React.Dispatch<React.SetStateAction<number>>
    layoutBasicIndex: number
}

export type CanteenProviderProps = {
    children: React.ReactNode
}

export const UseCanteenProvider = ({children}: CanteenProviderProps) => {
    const [layout, setLayout] = useState<number>(defaultLayoutValue)
    const layoutBasicIndex = defaultLayoutValue

    return (
        <UseCanteenContext.Provider
            value={{layout, setLayout, layoutBasicIndex}}
        >
            {children}
        </UseCanteenContext.Provider>
    )
}

export const useCanteenContext = (): UseCanteenContextType => {
    const context: UseCanteenContextType | undefined = useContext(UseCanteenContext)

    if (!context) {
        throw new Error("Invalid canteen context")
    }

    return context
}