'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '.'
import { ComponentProps } from 'react'
import { FieldWrapper } from '../field-wrapper'

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string
    name: string
    containerClassName?: string
}
export const InputField: React.FC<InputFieldProps> = ({
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
                required: required && "Campo obrigatório."
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label} className={containerClassName}>
                    <Input {...props} {...field} />
                    {fieldState.error && (
                        <p className='text-sm text-red-500'>{fieldState.error.message}</p>
                    )}
                </FieldWrapper>
            )}
        />
    )
}
