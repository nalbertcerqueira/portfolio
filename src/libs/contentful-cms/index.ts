import { Project, SkillsMap } from "@/types/general"
import { Base64Url, CMS, CMSClient } from "./cms"

import { ContentfulClientApi, CreateClientParams, createClient } from "contentful"
import { getPlaiceholder } from "plaiceholder"

class ContentfulCMSClient implements CMSClient {
    client: ContentfulClientApi<CMS.CustomModifiers>

    constructor(cmsParams: CreateClientParams) {
        this.client = createClient(cmsParams).withoutUnresolvableLinks
    }

    public async fetchData(): Promise<CMS.EntryCollectionList> {
        return await Promise.all([
            this.client.getEntries<CMS.ProjectSkeleton>({
                content_type: "portfolioProject",
                order: ["fields.slug"]
            }),
            this.client.getEntries<CMS.SkillSkeleton>({
                content_type: "portfolioSkill"
            })
        ])
    }

    public async generateBase64Image(id: string, url: string): Promise<Base64Url | null> {
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

    public async generateBase64UrlMap(entires: CMS.ProjectEntryCollection) {
        const base64UrlPromises = entires.items.map((item) => {
            const id = item.sys.id
            const url = "https:" + item.fields.banner?.fields.file?.url
            return this.generateBase64Image(id, url)
        })

        const base64Urls = await Promise.all(base64UrlPromises)
        return base64Urls.reduce((acc: Record<string, string>, item) => {
            if (item) acc[item.id] = item.url
            return acc
        }, {})
    }

    public async getFormattedProjectList(entries: CMS.ProjectEntryCollection): Promise<Project[]> {
        const base64UrlMap = await this.generateBase64UrlMap(entries)
        const projectList: Project[] = entries.items
            .map((item) => ({
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
            .reverse()

        return projectList
    }

    public generateSkillsMap(entries: CMS.SkillEntryColection): SkillsMap {
        const skillsMap = entries.items.reduce((acc, item) => {
            const key = item.fields.slug
            acc[key] = {
                name: item.fields.name,
                description: item.fields.description
            }
            return acc
        }, {} as SkillsMap)
        return skillsMap
    }
}

export const contentfulCMS = new ContentfulCMSClient({
    space: process.env.CMS_SPACE_ID as string,
    environment: process.env.CMS_ENVIROMENT_NAME as string,
    accessToken: process.env.CMS_ACCESS_TOKEN as string
})
