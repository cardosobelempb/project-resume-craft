'use client'

import { Button } from '@/components/ui/button'
import { BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { InputField } from '@/components/ui/input/field'
import { FormEvent } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

type DataFrom = {
    title: string
}

export const ResumeNewDialog: React.FC<BaseDialogProps> = props => {
    const methods = useForm<DataFrom>()

    const onSubmit = (data: DataFrom): FormEvent<HTMLFormElement> | void => {
        console.log(data)
    }
    return (
        <Dialog
            {...props}
            title="Criar novo currículo"
            description="Para comear, escolha um titilo para seu currículo."
            content={
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col'>
                        <InputField label="Título" name="title" required />

                        <Button type="submit" className="w-max mt-6 ml-auto">
                            Criar
                        </Button>
                    </form>
                </FormProvider>
            }
        />
    )
}
