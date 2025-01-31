import {
    Dialog as DialogRoot,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog/primitive'
import { ReactNode } from 'react'

type DialogProps = {
    children?: ReactNode
    title: string
    description?: string
    content: ReactNode
    open?: boolean
    setOpen?: (open: boolean) => void
}

export const Dialog: React.FC<DialogProps> = ({title, description, content, open, setOpen, children}) => {
    return (
        <DialogRoot open={open} onOpenChange={setOpen}>
            {children && <DialogTrigger asChild></DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                {content}
            </DialogContent>
        </DialogRoot>
    )
}
