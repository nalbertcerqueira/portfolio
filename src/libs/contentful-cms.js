import * as contentful from "contentful"
import { getPlaiceholder } from "plaiceholder"

//Iniciando o client do CMS
export function initiateClient() {
    const client = contentful.createClient({
        space: process.env.CMS_SPACE_ID,
        environment: process.env.CMS_ENVIROMENT_NAME,
        accessToken: process.env.CMS_ACCESS_TOKEN
    })

    return client
}

//Gerando o placeholder da imagem do projeto em base64
//que será utilizado em blurDataURL
async function generateBase64Url(url, assetId) {
    const imgBuffer = await fetch(url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    )
    const { base64 } = await getPlaiceholder(imgBuffer)
    return { base64Url: base64, assetId }
}

//Gerando um objeto contendo todos os placeholders em base64
async function generateBase64UrlMap(includes) {
    const base64Urls = await Promise.all(
        includes.Asset.map((asset) =>
            generateBase64Url("https:" + asset.fields.file.url, asset.sys.id)
        )
    )

    return base64Urls.reduce((acc, item) => {
        acc[item.assetId] = item.base64Url
        return acc
    }, {})
}

//Formatando os dados dos projetos vindos do CMS antes de utiliza-los.
export async function organizeProjectsData(entries) {
    const { items, includes } = entries
    const base64UrlMap = await generateBase64UrlMap(includes)

    const bannersData = includes.Asset.reduce((acc, asset) => {
        acc[asset.sys.id] = {
            alt: asset.fields.description,
            url: "https:" + asset.fields.file.url,
            base64Url: base64UrlMap[asset.sys.id],
            width: asset.fields.file.details.image.width,
            height: asset.fields.file.details.image.height
        }
        return acc
    }, {})

    const projectsData = items.map((item) => ({
        id: item.sys.id,
        name: item.fields.name,
        slug: item.fields.slug,
        description: item.fields.description,
        projectUrl: item.fields.projectUrl,
        githubUrl: item.fields.githubUrl,
        techList: item.fields.techList,
        banner: bannersData[item.fields.banner.sys.id]
    }))

    return projectsData
}

//Formatando os dados das habilidades vindas do CMS antes de utiliza-los.
export function organizeSkillsData(entries) {
    const { items } = entries

    const skillsData = items.reduce((acc, item) => {
        acc[item.fields.slug] = {
            name: item.fields.name,
            description: item.fields.description
        }
        return acc
    }, {})

    return skillsData
}
