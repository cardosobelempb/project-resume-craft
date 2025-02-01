'use client'

import { ReactNode } from 'react'
import { Label } from './label'

type FielsWrapperProps = {
    label: string
    children: ReactNode
}

export const FieldWrapper: React.FC<FielsWrapperProps> = ({
    label,
    children,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <Label>{label}</Label>
            {children}
        </div>
    )
}
