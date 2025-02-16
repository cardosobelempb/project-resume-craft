'use client'

import { ScrollText } from "lucide-react"
import { SectionTitle } from '../../base/section-title'
import { Controller, useFormContext } from "react-hook-form"
import { Editot } from "@/components/ui/editor"

export const ResumeSectionSummary = () => {

    const {control} = useFormContext()

    return (
        <div className="mb-4">
            <SectionTitle title="Sobre voçê" icon={ScrollText} />

            <Controller
                control={control}
                name="content.summary"
                render={({ field }) => (
                    <Editot
                        {...field}
                        className="min-h-[200px] max-h-[300px] mt-4"
                    />
                )}
            />
        </div>
    )
}
