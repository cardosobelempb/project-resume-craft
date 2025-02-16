import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"


import { Download, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import { useControls } from "react-zoom-pan-pinch"

export const ResumeContentFooter = () => {

    const {zoomIn, zoomOut, centerView} = useControls()

    const controls = [
        {
            icon: ZoomIn,
            label: 'Aumentar Zoom',
            onclick: () => zoomIn(0.2),
        },
        {
            icon: ZoomOut,
            label: 'Diminuir Zoom',
            onclick: () => zoomOut(0.2),
        },
        {
            icon: RotateCcw,
            label: 'Resetar posição',
            onclick: () => centerView(0.5),
        },
        {
            icon: Download,
            label: 'Baixar PDF',
            onclick: () => console.log(),
        },
    ]

    return (
        <footer
            className={cn(
                'absolute left-1/2 -translate-x-1/2 bottom-4 z-10 bg-background border border-muted ',
                "py-3 px-4 rounded-full flex items-center gap-2"
            )}
        >
            {controls.map(control => (
                <Tooltip key={control.label} content={control.label}>
                    <Button
                    variant="secondary"
                    className="w-6 h-6 bg-transparent"
                    size="icon"
                    onClick={control.onclick}
                    >
                        <control.icon size={16}/>
                    </Button>
                </Tooltip>
            ))}
        </footer>
    )
}
