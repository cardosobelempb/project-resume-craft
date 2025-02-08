import { ScrollText } from "lucide-react"
import { ResumeTitle } from "../../base/resume-title"
import { Controller, useFormContext } from "react-hook-form"
import { Editot } from "@/components/ui/editor"

export const ResumeSectionSummary = () => {

    const {control} = useFormContext()

    return (
        <div>
            <ResumeTitle title="Sobre voçê" icon={ScrollText}/>

            <Controller
                control={control}
                name="content.summary"
                render={({field}) => (
                    <Editot {...field} className="min-h-[200px] max-h-[300px] mt-4" />
                )}
            />
        </div>
    )
}
