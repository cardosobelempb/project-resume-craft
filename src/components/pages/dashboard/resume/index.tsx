'use client'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ResumeSidebar } from './resume-sidebar'
import { ResumeStructure } from './resume-structure'
import { FormProvider, useForm } from 'react-hook-form'
import { ResumeContent } from './resume-content'

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
            template: "ditto",
            colorTheme: 'slate',
            language: "portuguese",
            layout: {
                mainSections: [
                    {key: "socialMedias"},
                    {key: "summary"},
                    {key: "experiences"},
                    {key: "educations"},
                    {key: "certifications"},
                    {key: "projects"},
                ],
                sidebarSections: [
                    {key: "languages"},
                    {key: "skills"},
                ]
            },
        }
    }

    const methods = useForm<ResumeData>({
        defaultValues,
    })

    const data = methods.watch()

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
                    <ResumeContent data={data}  />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
                    <ResumeStructure />
                </ResizablePanel>
            </ResizablePanelGroup>
        </FormProvider>
    )
}
