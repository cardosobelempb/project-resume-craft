'use client'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { SidebarContent } from './resume-content'
import { ResumeSidebar } from './resume-sidebar'
import { ResumeStructure } from './resume-structure'
import { FormProvider, useForm } from 'react-hook-form'

export const ResumePage = () => {
    const defaultValues: ResumeData = {
        content: {
            image: {
                url: '',
                visible: true,
            },
            infos: {
                fullName: '',
                email: '',
                headLine: '',
                location: '',
                phone: '',
                webSite: '',
            },
            summary: '',
            certifications: [],
            educations: [],
            experiences: [],
            languages: [],
            projects: [],
            skills: [],
            socialMedias: [],
        },
        structure: {
            template: undefined,
            colorTheme: '',
            layout: {
                mainSections: [],
                sidebarSections: []
            },
            language: undefined
        }
    }
    const methods = useForm<ResumeData>({
        defaultValues,
    })

    return (
        <FormProvider {...methods}>
            <ResizablePanelGroup
                direction="horizontal"
                className=" w-full h-full"
            >
                <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
                    <ResumeSidebar />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                    <SidebarContent />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
                    <ResumeStructure />
                </ResizablePanel>
            </ResizablePanelGroup>
        </FormProvider>
    )
}
