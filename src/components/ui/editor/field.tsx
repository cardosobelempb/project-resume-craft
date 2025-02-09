'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Editot } from '.'
import { FieldWrapper } from '../field-wrapper'

type EditorFieldProps = {
    label: string
    name: string
    containerClassName?: string
    required?: boolean
}
export const EditorField: React.FC<EditorFieldProps> = ({
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
                    <Editot {...props} {...field} />
                </FieldWrapper>
            )}
        />
    )
}
