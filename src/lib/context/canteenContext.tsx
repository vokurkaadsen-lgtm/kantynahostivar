"use client"

import React, {useState, useContext, createContext} from "react"
import type { LayoutType, UseCanteenContextType, CanteenProviderProps } from "../types"
import { canteens } from "../constants/canteens"

const defaultLayoutValue = canteens.length

const UseCanteenContext = createContext<UseCanteenContextType | undefined>(undefined)

export const UseCanteenProvider = ({children}: CanteenProviderProps) => {
    const [layout, setLayout] = useState<LayoutType>(defaultLayoutValue as LayoutType)
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