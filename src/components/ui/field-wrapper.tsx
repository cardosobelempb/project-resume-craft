'use client'

import { ReactNode } from 'react'
import { Label } from './label'
import { cn } from '@/lib/utils'
import { FieldError } from 'react-hook-form'

type FielsWrapperProps = {
    label: string
    children: ReactNode
    className?: string
    error?: FieldError
}

export const FieldWrapper: React.FC<FielsWrapperProps> = ({
    label,
    className,
    children,
    error
}) => {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <Label>{label}</Label>
            {children}
            {error && (
                <p className="text-sm text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    )
}
