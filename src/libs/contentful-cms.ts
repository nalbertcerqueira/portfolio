import { Project, SkillsMap } from "@/types/general"
import { getPlaiceholder } from "plaiceholder"

import {
    ContentfulClientApi,
    CreateClientParams,
    EntryCollection,
    EntryFieldTypes,
    createClient
} from "contentful"

type CustomModifiers = "WITHOUT_UNRESOLVABLE_LINKS"

interface ProjectSkeleton {
    contentTypeId: "portfolioProject"
    fields: {
        name: EntryFieldTypes.Text
        slug: EntryFieldTypes.Integer
        description: EntryFieldTypes.Text
        projectUrl: EntryFieldTypes.Text
        githubUrl: EntryFieldTypes.Text
        techList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
        banner: EntryFieldTypes.AssetLink
    }
}
interface SkillSkeleton {
    contentTypeId: "portfolioSkill"
    fields: {
        slug: EntryFieldTypes.Text
        name: EntryFieldTypes.Text
        description: EntryFieldTypes.Text
    }
}
type ProjectEntryCollection = EntryCollection<ProjectSkeleton, CustomModifiers>

type SkillEntryColection = EntryCollection<SkillSkeleton, CustomModifiers>

type EntryCollectionList = [ProjectEntryCollection, SkillEntryColection]

interface Base64Url {
    id: string
    url: string
}

class ContentfulCMSClient {
    client: ContentfulClientApi<CustomModifiers>

    constructor(cmsParams: CreateClientParams) {
        this.client = createClient(cmsParams).withoutUnresolvableLinks
    }

    static async generateBase64Url(id: string, url: string): Promise<Base64Url | null> {
        return await fetch(url)
            .then(async (res) => {
                return res.arrayBuffer()
            })
            .then(async (arrayBuffer) => {
                const buffer = Buffer.from(arrayBuffer)
                const base64 = (await getPlaiceholder(buffer)).base64
                return { id, url: base64 }
            })
            .catch((error: Error) => {
                console.log(error.message)
                return null
            })
    }

    public async generateBase64UrlMap(entires: ProjectEntryCollection) {
        const base64UrlPromises = entires.items.map((item) => {
            const id = item.sys.id
            const url = "https:" + item.fields.banner?.fields.file?.url
            return ContentfulCMSClient.generateBase64Url(id, url)
        })

        const base64Urls = await Promise.all(base64UrlPromises)
        return base64Urls.reduce((acc: Record<string, any>, item) => {
            if (item) acc[item.id] = item.url
            return acc
        }, {})
    }

    public async getFormattedProjectList(
        entries: ProjectEntryCollection
    ): Promise<Project[]> {
        const base64UrlMap = await this.generateBase64UrlMap(entries)
        const projectList: Project[] = entries.items.map((item) => ({
            id: item.sys.id,
            ...item.fields,
            banner: {
                url: item.fields.banner?.fields.file?.url as string,
                base64Url: base64UrlMap[item.sys.id],
                alt: item.fields.banner?.fields.description as string,
                width: item.fields.banner?.fields.file?.details.image?.width as number,
                height: item.fields.banner?.fields.file?.details.image?.height as number
            }
        }))

        return projectList
    }

    public generateSkillsMap(entries: SkillEntryColection): SkillsMap {
        const skillsMap = entries.items.reduce((acc: Record<string, any>, item) => {
            const key = item.fields.slug as string
            acc[key] = {
                name: item.fields.name,
                description: item.fields.description
            }
            return acc
        }, {})
        return skillsMap
    }

    public async getProjectsAndSkillsEntries(): Promise<EntryCollectionList> {
        return await Promise.all([
            this.client.getEntries<ProjectSkeleton>({
                content_type: "portfolioProject",
                order: ["fields.slug"]
            }),
            this.client.getEntries<SkillSkeleton>({
                content_type: "portfolioSkill"
            })
        ])
    }
}

export const contentfulCMS = new ContentfulCMSClient({
    space: process.env.CMS_SPACE_ID as string,
    environment: process.env.CMS_ENVIROMENT_NAME as string,
    accessToken: process.env.CMS_ACCESS_TOKEN as string
})
