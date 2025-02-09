'use client'

import { ComponentProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { IconInput } from '.'
import { FieldWrapper } from '../field-wrapper'
import { Input } from '../input'

type IconFieldProps = ComponentProps<typeof Input> & {
    label: string
    name: string
    containerClassName?: string
}
export const IconField: React.FC<IconFieldProps> = ({
    label,
    name,
    required,
    containerClassName,
    ...props
}) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: required && 'Campo obrigatório.',
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper
                    label={label}
                    className={containerClassName}
                    error={fieldState?.error}
                >
                    <IconInput {...props} {...field} />
                </FieldWrapper>
            )}
        />
    )
}
