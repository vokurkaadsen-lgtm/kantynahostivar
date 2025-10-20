export type LayoutType = 0 | 1 | 2 | 3 | 4

export type UseCanteenContextType = {
    layout: LayoutType,
    setLayout: React.Dispatch<React.SetStateAction<LayoutType>>
    layoutBasicIndex: number
}

export type CanteenProviderProps = {
    children: React.ReactNode
}