import { ResumeAddButton } from "../resume-button-add"
import { ResumeCard } from "../resume-card"
import { ResumeNewDialog } from '../resume-new-dialog'

export const ResumesList = () => {
    return (
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 auto-rows-max gap-4 lg:gap-5 flex-1">
            <ResumeNewDialog>
                <ResumeAddButton />
            </ResumeNewDialog>
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
        </section>
    )
}
