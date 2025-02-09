'use client'

import { Separator } from "@/components/ui/separator";
import { Share2, BriefcaseBusiness, GraduationCap, BicepsFlexed, Languages, FileBadge2, Globe } from "lucide-react";
import { Fragment } from "react";
import { ResumeMultipleDragList, ResumeMultipleDragListItemData } from "../../base/resume-multiple-drag-list";

export const ResumeSectionMultiples = () => {

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

    return (
        <div>
            {sectionsKeys.map(section => (
                <Fragment key={`multiple-section-${section.title}`}>
                    <Separator className="" />
                    <ResumeMultipleDragList data={section} onAdd={() => {}} onEdit={() => {}} />
                </Fragment>
            ))}
        </div>
    )
}
