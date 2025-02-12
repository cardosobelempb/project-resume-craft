'use client'

import Link from "next/link"
import Logo from '@/assets/images/logo.svg'
import { IaGenarationDropdown } from "../base/ia-generation-dropdown"
import { Separator } from "@/components/ui/separator"
import { ResumeSectionForm } from "./sections/resume-section-form"
import { ResumeSectionSummary } from "./sections/resume-section-summary"
import { ResumeSectionMultiples } from "./sections/resume-section-multiples"



export const ResumeSidebar = () => {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Link href="/dashboard/resumes">
                    <Logo className="w-full max-w-[80px]" />
                </Link>
                <IaGenarationDropdown />
            </div>
            <Separator className="my-5" />
            <ResumeSectionForm />
            <Separator className="my-5" />
            <ResumeSectionSummary />
            <ResumeSectionMultiples />
        </aside>
    )
}
