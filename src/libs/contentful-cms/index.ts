import { getPlaiceholder } from "plaiceholder"
import { AssetFields, AssetsQueries, ContentfulClientApi, CreateClientParams, createClient } from "contentful"

import { Project, SkillsMap } from "@/types/general"
import { Base64Url, CMS, CMSClient } from "./cms"

export class ContentfulCMSClient implements CMSClient<CMS.CustomModifiers> {
    public client: ContentfulClientApi<CMS.CustomModifiers>

    public static generateSkillsMap(entries: CMS.SkillEntryCollection): SkillsMap {
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

    public static async getFormattedProjectList(entries: CMS.ProjectEntryCollection): Promise<Project[]> {
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

    private static async generateBase64Image(id: string, url: string): Promise<Base64Url | null> {
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

    private static async generateBase64UrlMap(entries: CMS.ProjectEntryCollection) {
        const base64UrlPromises = entries.items.map((item) => {
            const id = item.sys.id
            const url = `https:${item.fields.banner?.fields.file?.url}`
            return this.generateBase64Image(id, url)
        })

        const base64Urls = await Promise.all(base64UrlPromises)
        return base64Urls.reduce((acc: Record<string, string>, item) => {
            if (item) acc[item.id] = item.url
            return acc
        }, {})
    }

    constructor(cmsParams: CreateClientParams) {
        this.client = createClient(cmsParams).withoutUnresolvableLinks
    }

    public async fetchSkills(): Promise<CMS.SkillEntryCollection> {
        return this.client.getEntries<CMS.SkillSkeleton>({
            content_type: "portfolioSkill"
        })
    }

    public async fetchProjects(): Promise<CMS.ProjectEntryCollection> {
        return this.client.getEntries<CMS.ProjectSkeleton>({
            content_type: "portfolioProject",
            order: ["fields.slug"]
        })
    }

    public async getAssetUrl(query: AssetsQueries<AssetFields, CMS.CustomModifiers>): Promise<string | null> {
        const queryResult = await this.client.getAssets(query)
        const assetUrl = queryResult.items[0].fields.file?.url

        if (!assetUrl) {
            return null
        }

        return `https:${queryResult.items[0].fields.file?.url}`
    }
}

export const contentfulClient = new ContentfulCMSClient({
    space: process.env.CMS_SPACE_ID as string,
    environment: process.env.CMS_ENVIRONMENT_NAME as string,
    accessToken: process.env.CMS_ACCESS_TOKEN as string
})
