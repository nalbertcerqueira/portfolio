import { EntryCollection, EntryFieldTypes } from "contentful"

export namespace CMS {
    export interface ProjectSkeleton {
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

    export interface SkillSkeleton {
        contentTypeId: "portfolioSkill"
        fields: {
            slug: EntryFieldTypes.Text
            name: EntryFieldTypes.Text
            description: EntryFieldTypes.Text
        }
    }

    export type CustomModifiers = "WITHOUT_UNRESOLVABLE_LINKS"

    export type ProjectEntryCollection = EntryCollection<ProjectSkeleton, CustomModifiers>

    export type SkillEntryColection = EntryCollection<SkillSkeleton, CustomModifiers>

    export type EntryCollectionList = [ProjectEntryCollection, SkillEntryColection]
}

export interface Base64Url {
    id: string
    url: string
}

export interface CMSClient {
    client: Record<string, any>

    fetchData(): Promise<any[]>
}
