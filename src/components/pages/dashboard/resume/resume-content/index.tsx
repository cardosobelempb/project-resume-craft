import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import { ResumeContentTemplate } from "./templates"
import { ResumeContentHeader } from "./resume-content-header"
import { ResumeContentFooter } from "./resume-content-footer"

export type BaseResumeProps = {
    data: ResumeData
}

export const ResumeContent: React.FC<BaseResumeProps> = ({data}) => {
    return (
        <section>
            <TransformWrapper
                initialScale={0.5}
                minScale={0.4}
                centerOnInit
                centerZoomedOut
                limitToBounds={false}
            >
                <>
                    <TransformComponent>
                        <ResumeContentHeader />
                        <ResumeContentTemplate data={data} />
                        <ResumeContentFooter />
                    </TransformComponent>
                </>
            </TransformWrapper>
        </section>
    )
}
