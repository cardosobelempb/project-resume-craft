import {  Plus } from "lucide-react"
import { ResumeButton } from "../resume-card"

export const ResumeAddButton = () => {
    return (
        <ResumeButton
            title="Criar um novo currículo"
            description="Comece do zero"
            icon={<Plus size={50} />}
        />
    )
}
