"use client"

import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch'
import { ResumeContentTemplate } from './templates'
import { ResumeContentFooter } from './templates/resume-content-footer'
import { ResumeContentHeader } from './templates/resume-content-header'

export const SidebarContent = () => {
    return (
        <section className="w-full h-full p-6 overflow-hidden flex items-center justify-center relative bg-muted dark:bg-background">
            <TransformWrapper
                initialScale={0.5}
                minScale={0.4}
                centerOnInit
                centerZoomedOut
                limitToBounds={false}
            >
                <>
                    <ResumeContentHeader/>
                    <TransformComponent>
                        <ResumeContentTemplate />
                    </TransformComponent>
                    <ResumeContentFooter />
                </>
            </TransformWrapper>
        </section>
    )
}
