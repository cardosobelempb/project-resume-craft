'use client'

import { ReactNode } from 'react'
import { Label } from './label'
import { cn } from '@/lib/utils'

type FielsWrapperProps = {
    label: string
    children: ReactNode
    className?: string
}

export const FieldWrapper: React.FC<FielsWrapperProps> = ({
    label,
    className,
    children,
}) => {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <Label>{label}</Label>
            {children}
        </div>
    )
}
