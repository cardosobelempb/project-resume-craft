import { LucideIcon } from "lucide-react"
import { ResumeTitle } from "./resume-title"

export type ResumeArraykeys = Exclude<keyof ResumeContentData, "image" | "infos" | "summary">

export type ResumeMultipleDragListItemData = {
    formKey: ResumeArraykeys
    title: string
    icon: LucideIcon
    titleKey: string
    descriptionKey: string
}
type ResumeMultipleDragListProps = {
    data: ResumeMultipleDragListItemData
    onAdd: () => void
    onEdit: (index: number) => void
}

export const ResumeMultipleDragList: React.FC<ResumeMultipleDragListProps> = ({data, onAdd, onEdit}) => {
    return (
        <div>
            <ResumeTitle title={data.title} icon={data.icon}/>

            <div className="mt-4 flex flex-col"></div>
        </div>
    )
}
