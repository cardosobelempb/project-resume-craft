import { Palette } from "lucide-react"
import { SectionTitle } from "../../base/section-title"
import colors from 'tailwindcss/colors'
import { Controller, useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const ThemeSection = () => {

    const keysToIgnote = [
        "current",
        "inherit",
        "currentColor",
        "transparent",
        "black",
        "white"
    ]
    const colorKeys = Object.keys(colors).filter(
        key => !keysToIgnote.includes(key),
    ) as (keyof typeof colors)[]

    const {control} = useFormContext<ResumeData>()

    return (
        <div>
            <SectionTitle title="Teme" icon={Palette}/>
            <Controller
                control={control}
                name="structure.colorTheme"
                render={(({field}) => (
                    <div className="grid grid-cols-7 gap-4 mt-4">
                        {colorKeys.map(colorKey => {
                            const isSelected = field.value === colorKey

                            return (
                                <Button key={colorKey} variant="ghost" className={cn(
                                    "w-7 h-7 p-1 rounded-full transition-all",
                                    isSelected && "ring-2 ring-foreground"
                                )} onClick={() => field.onChange(colorKey)}>
                                    <div className="w-full h-full rounded-full" style={{backgroundColor: colors[colorKey][500]}}/>
                                </Button>
                            )
                        })}
                    </div>
                ))}
            />
        </div>
    )
}

/* 4.238,52 - 1.761,04 = 2.477,484*/
