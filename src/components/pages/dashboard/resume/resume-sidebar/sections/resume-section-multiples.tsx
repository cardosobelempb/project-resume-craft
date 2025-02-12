'use client'

import { Separator } from "@/components/ui/separator";
import { Share2, BriefcaseBusiness, GraduationCap, BicepsFlexed, Languages, FileBadge2, Globe } from "lucide-react";
import { Fragment, useState } from "react";
import { ResumeMultipleDragList, ResumeMultipleDragListItemData } from "../../base/resume-multiple-drag-list";
import { ManageMultipleItemDialog } from "../../base/manage-multiple-item-dialog";
import { useFormContext } from "react-hook-form";

export const ResumeSectionMultiples = () => {

    const {getValues} = useFormContext()

    const [sectionToAdd, setSectionToAdd] =
        useState<ResumeMultipleDragListItemData | null>(null)

    const [initialData, setInitialData] =
        useState<ResumeMultipleDragListItemData | null>(null)

    const sectionsKeys: ResumeMultipleDragListItemData[] = [
        {
            formKey: 'socialMedias',
            title: 'Redes Sociais',
            icon: Share2,
            titleKey: 'name',
            descriptionKey: 'username',
        },
        {
            formKey: 'experiences',
            title: 'Experiências',
            icon: BriefcaseBusiness,
            titleKey: 'company',
            descriptionKey: 'position',
        },
        {
            formKey: 'educations',
            title: 'Educação',
            icon: GraduationCap,
            titleKey: 'institution',
            descriptionKey: 'degree',
        },
        {
            formKey: 'skills',
            title: 'Habilidades',
            icon: BicepsFlexed,
            titleKey: 'name',
            descriptionKey: 'description',
        },
        {
            formKey: 'languages',
            title: 'Idiomas',
            icon: Languages,
            titleKey: 'name',
            descriptionKey: 'description',
        },
        {
            formKey: 'certifications',
            title: 'Certificações',
            icon: FileBadge2,
            titleKey: 'name',
            descriptionKey: 'institution',
        },
        {
            formKey: 'projects',
            title: 'Projetos',
            icon: Globe,
            titleKey: 'name',
            descriptionKey: 'description',
        },
    ]

    const onEdit = (section: ResumeMultipleDragListItemData, index: number) => {
        const currentValue = getValues()
        const currentItems = currentValue.content[section.formKey]

        setSectionToAdd(section)
        setInitialData(currentItems[index])
    }

    return (
        <div>
            {sectionsKeys.map(section => (
                <Fragment key={`multiple-section-${section.title}`}>
                    <Separator className="" />
                    <ResumeMultipleDragList
                        data={section}
                        onAdd={() => setSectionToAdd(section)}
                        onEdit={(index) => onEdit(section, index)}
                    />
                </Fragment>
            ))}
            {sectionToAdd && (
                <ManageMultipleItemDialog
                initialData={initialData}
                data={sectionToAdd}
                open={!!sectionToAdd}
                setOpen={(value) => {
                    if(!value) {
                        setSectionToAdd(null)
                        setInitialData(null)
                    }
                }}
            />
            )}
        </div>
    )
}
