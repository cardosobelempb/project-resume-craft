type ResumeImageData = {
    url: string
    visible: boolean
}

type ResuneInfoData = {
    fullName: string
    headLine: string
    email: string
    webSite: string
    phone: string
    location: string
}

type ResumeLanguages = "english" | "spanish" | "french" | "german" | "italian" | "portuguese"

type ResumeSections =
    | 'summary'
    | 'socialMedias'
    | 'experiences'
    | 'educations'
    | 'skills'
    | 'languages'
    | 'certifications'
    | 'projects'

type ResumeLayoutSection = {
    id?: string
    key: ResumeSections
}

type ResumeStructureData = {
    template: ResumeTemplates
    colorTheme: string
    layout: {
        mainSections: ResumeLayoutSection[]
        sidebarSections: ResumeLayoutSection[]
    }
    language: ResumeLanguages
}

type ResumeSocialMediaData = {
    name: string
    username: string
    url: string
    icon: string
}

type ResumeExperienceData = {
    company: string
    position: string
    date: string
    location: string
    website: string
    summary: string
}

type ResumeEducationData = {
    institution: string
    degree: string
    location: string
    date: string
    website: string
    summary: string
}

type ResumeSkillData = {
    name: string
    description: string
    level: number
    keywords: string
}

type ResumeLanguageData = {
    name: string
    description: string
    level: number
}

type ResumeCertificationData = {
    name: string
    institution: string
    date: string
    website: string
    summary: string
}

type ResumeProjectData = {
    name: string
    description: string
    date: string
    website: string
    summary: string
    keywords: string[]
}

type ResumeContentData = {
    image: ResumeImageData
    infos: ResumeInfosData
    summary: string
    socialMedias: Partial<ResumeSocialMediaData>[]
    experiences: Partial<ResumeExperienceData>[]
    educations: Partial<ResumeEducationData>[]
    skills: Partial<ResumeSkillData>[]
    languages: Partial<ResumeLanguageData>[]
    certifications: Partial<ResumeCertificationData>[]
    projects: Partial<ResumeProjectData>[]
}

type ResumeData = {
    content: ResumeContentData
    structure: ResumeStructureData
}

type ResumeTemplates = 'eevee' | 'onix' | 'jynx' | 'ditto'


