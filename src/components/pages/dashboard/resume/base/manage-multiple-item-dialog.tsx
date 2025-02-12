'use client'

import { BaseDialogProps, Dialog } from '@/components/ui/dialog'
import {
    ResumeArraykeys,
    ResumeMultipleDragListItemData,
} from './resume-multiple-drag-list'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { Fragment, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { InputField } from '@/components/ui/input/field'
import { EditorField } from '@/components/ui/editor/field'
import { IconField } from '@/components/ui/icon-input/field'
import { SliderField } from '@/components/ui/slider/field'
import { Badge } from '@/components/ui/badge'

import { toast } from 'sonner'


type ManageMultipleItemDialog = BaseDialogProps & {
    data: ResumeMultipleDragListItemData
    setOpen: (open: boolean) => void
    initialData: any
}

type FormConfig<T> = {
    label: string
    key: keyof T
    fieldType?: 'text' | 'editor' | 'icon' | 'slider' | 'keywords'
    type?: string
    placeholder?: string
    fullWidth?: boolean
    required?: boolean
    className?: string
}

type FormConfigObject = {
    [K in ResumeArraykeys]: FormConfig<ResumeData['content'][K][number]>[]
}

const formConfig: FormConfigObject = {
    socialMedias: [
        {
            label: 'Rede',
            key: 'name',
            placeholder: 'LinkedIn',
            required: true,
        },
        {
            label: 'Usuário',
            key: 'username',
            placeholder: 'seu-usuario',
            required: true,
        },
        {
            label: 'Site',
            key: 'url',
            placeholder: 'https://linkedin.com/in/seu-usuario',
            type: 'url',
            fullWidth: true,
        },
        {
            label: 'Ícone',
            key: 'icon',
            placeholder: 'linkedin',
            fieldType: 'icon',
            fullWidth: true,
        },
    ],
    experiences: [
        {
            label: 'Empresa',
            key: 'company',
            required: true,
        },
        {
            label: 'Posição',
            key: 'position',
        },
        {
            label: 'Data ou intervalo de datas',
            key: 'date',
            placeholder: 'Janeiro de 2024 - Presente',
        },
        {
            label: 'Localização',
            key: 'location',
        },
        {
            label: 'Site',
            key: 'website',
            type: 'url',
            fullWidth: true,
        },
        {
            label: 'Descrição',
            key: 'summary',
            fieldType: 'editor',
            fullWidth: true,
            className: 'min-h-[200px]',
        },
    ],
    educations: [
        {
            label: 'Instituição',
            key: 'institution',
            required: true,
        },
        {
            label: 'Curso',
            key: 'degree',
        },
        {
            label: 'Data ou intervalo de datas',
            key: 'date',
            placeholder: 'Janeiro de 2024 - Presente',
        },
        {
            label: 'Localização',
            key: 'location',
        },
        {
            label: 'Site',
            key: 'website',
            type: 'url',
            fullWidth: true,
        },
        {
            label: 'Descrição',
            key: 'summary',
            fieldType: 'editor',
            fullWidth: true,
            className: 'min-h-[200px]',
        },
    ],
    skills: [
        {
            label: 'Nome',
            key: 'name',
            required: true,
        },
        {
            label: 'Descrição',
            key: 'description',
        },
        {
            label: 'Nível',
            key: 'level',
            fieldType: 'slider',
            fullWidth: true,
        },
        {
            label: 'Palavras-chave',
            key: 'keywords',
            placeholder: 'Adicione palavras-chave separadas por vírgula',
            fieldType: 'keywords',
            fullWidth: true,
        },
    ],
    languages: [
        {
            label: 'Nome',
            key: 'name',
            required: true,
        },
        {
            label: 'Descrição',
            key: 'description',
        },
        {
            label: 'Nível',
            key: 'level',
            fieldType: 'slider',
            fullWidth: true,
        },
    ],
    certifications: [
        {
            label: 'Nome',
            key: 'name',
            required: true,
        },
        {
            label: 'Instituição',
            key: 'institution',
        },
        {
            label: 'Data',
            key: 'date',
            placeholder: 'Janeiro de 2024',
        },
        {
            label: 'Site',
            key: 'website',
            type: 'url',
        },
        {
            label: 'Descrição',
            key: 'summary',
            fieldType: 'editor',
            className: 'min-h-[200px]',
            fullWidth: true,
        },
    ],
    projects: [
        {
            label: 'Nome',
            key: 'name',
            required: true,
        },
        {
            label: 'Descrição',
            key: 'description',
        },
        {
            label: 'Data ou intervalo de datas',
            key: 'date',
            placeholder: 'Janeiro de 2024 - Presente',
        },
        {
            label: 'Site',
            key: 'website',
            type: 'url',
        },
        {
            label: 'Resumo',
            key: 'summary',
            fieldType: 'editor',
            className: 'min-h-[200px]',
            fullWidth: true,
        },
        {
            label: 'Palavras-chave',
            key: 'keywords',
            placeholder: 'Adicione palavras-chave separadas por vírgula',
            fieldType: 'keywords',
            fullWidth: true,
        },
    ],
}

export const ManageMultipleItemDialog: React.FC<ManageMultipleItemDialog> = ({
    data,
    open,
    initialData,
    setOpen,
}) => {
    const methods = useForm()
    const { setValue, getValues } = useFormContext<ResumeData>()
    const isEditting = !!initialData

    useEffect(() => {
        if (initialData) methods.reset(initialData)
    }, [initialData, methods])

    const formContent = useMemo(() => {
        const config = formConfig[data.formKey]

        console.log(config)
        return config.map((field, index) => {
            const fieldType = field?.fieldType ?? 'text'
            const isFullwidth = !!field.fullWidth

            const inputProps = {
                name: field.key,
                label: field.label,
                containerClassName: cn(isFullwidth && 'col-span-full'),
                required: field.required,
                placeholder: field.placeholder,
                type: field.type,
                className: field.className,
            }

            return (
                <Fragment key={index}>
                    {fieldType === 'text' && <InputField {...inputProps} />}
                    {fieldType === 'editor' && <EditorField {...inputProps} />}
                    {fieldType === 'icon' && <IconField {...inputProps} />}
                    {fieldType === 'slider' && <SliderField {...inputProps} />}
                    {fieldType === 'keywords' && (
                        <InputField
                            {...inputProps}
                            extraContent={value => (
                                <div className="flex gap-2 flex-wrap mt-1">
                                    {value?.split(',').map((keyword, index) => {
                                        if (!keyword.trim()) return null
                                        return (
                                            <Badge key={`keyword-${index}`}>
                                                {keyword}
                                            </Badge>
                                        )
                                    })}
                                </div>
                            )}
                        />
                    )}
                </Fragment>
            )
        })
    }, [data.formKey])

    const onDelete = () => {
        const currentValue = getValues()

        const formKey = data.formKey
        const currentFieldValue = currentValue.content[formKey] ?? []

        const removeItems = currentFieldValue.filter((item: any) => item.id !== initialData.id)

        setValue(`content.${formKey}`, removeItems)
        setOpen(false)
        toast.success('Item removido com sucesso!', {
            className: 'bg-green-200 border-none',
        })
    }

    const onSubmit = (formData: any) => {
        const currentValue = getValues()

        console.log('currentValue => ', currentValue)

        const formKey = data.formKey
        const currentFieldValue = currentValue.content[formKey] ?? []

        console.log('currentFieldValue => ', currentFieldValue)

        if(isEditting){
            const updatedItems = currentFieldValue.map((item: any) => {
                if(item.id === initialData.id){
                    return formData
                }
                return item
            })

            setValue(`content.${formKey}`, updatedItems)
            setOpen(false)
            toast.success('Item atualizado com sucesso!', {
                className: 'bg-green-200 border-none',
            })
            return
        }

        const uuid = self.crypto.randomUUID()
        setValue(`content.${formKey}`, [
            ...currentFieldValue,
            {
                ...formData,
                id: uuid,
            },
        ])

        setOpen(false)
        toast.success('Item adicionado com sucesso!', {className: "bg-green-200 border-none"})
        // toast.error('Item adicionado com sucesso!', {className: "bg-red-200 border-none"})
    }

    return (
        <Dialog
            title={isEditting ? 'Atualizar item' : 'Adicionar item'}
            open={open}
            setOpen={setOpen}
            content={
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className=" flex flex-col mt-2 mb-2 gap-3">
                        <FormProvider {...methods}>{formContent}</FormProvider>
                    </div>
                    <div className="ml-auto flex gap-3">
                        {isEditting && (
                            <Button variant="destructive" type="button" className="w-max" onClick={onDelete}>
                                Remove
                            </Button>
                        )}
                        <Button type="submit" className="w-max">
                            {isEditting ? 'Salvar' : 'Adicionar'}
                        </Button>
                    </div>
                </form>
            }
        />
    )
}
