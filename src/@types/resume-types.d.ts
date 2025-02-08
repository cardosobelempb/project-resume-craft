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

type ResumeContentData = {
    image: ResumeImageData
    infos: ResuneInfoData
}

// type ResumeStructureData = {}

type ResumeData = {
    content: ResumeContentData
    // structure: ResumeStructureData
}
