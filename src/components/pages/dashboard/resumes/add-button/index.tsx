import {  Plus } from "lucide-react"
import { CardButton } from "../card"

export const AddButton = () => {
    return (
        <CardButton title="Criar um novo currículo" description="Comece do zero" icon={<Plus size={50}/>}/>
    )
}
