import { cn } from "@/lib/utils"
import Link from "next/link"
import { ReactNode } from "react"

type CardButtonProps = {
    title: string
    description: string
    icon?: ReactNode
}
export const CardButton: React.FC<CardButtonProps> = ({title, description, icon}) => {
    return (
        <button
            className={cn(
                'w-full h-[300px] bg-muted/50 rounded border border-muted-foreground/20',
                "flex items-center justify-center relative outline-none overflow-hidden",
                "hover:brightness-105 dark:hover:brightness-125 transition-all"
            )}
        >
            {icon}
            <div className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/80">
                <h2 className="text-sm font-semibold font-title">{title}</h2>
                <p className="text-xs text-muted-foreground">{description}</p>
            </div>
        </button>
    )
}

export const ResumesCard = () => {
    return (
        <Link href={`/dasthboar/resumes/example`} className="block w-full">
            <CardButton title="Meu Currículo" description="Última atualização há 22 minutos"/>
        </Link>
    )
}
