import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable"
import { SidebarContent } from "./resume-content"
import { ResumeSidebar } from "./resume-sidebar"
import { ResumeStructure } from "./resume-structure"


export const ResumePage = () => {
    return (
        <ResizablePanelGroup direction="horizontal" className=" w-full h-full">
            <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
                <ResumeSidebar />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
                <SidebarContent />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
                <ResumeStructure/>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
