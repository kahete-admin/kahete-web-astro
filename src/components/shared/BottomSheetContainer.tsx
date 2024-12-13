import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import 'react-spring-bottom-sheet/dist/style.css'

interface Props {
    open: boolean;
    children: React.ReactNode;
}

export const BottomSheetContainer = ({ open, children }: Props) => {
    return (
        <>
            <BottomSheet className="mx-auto md:w-4/12 px-4" open={open} snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}>{children}</BottomSheet>
        </>
    )
}