//Validando se a consulta de media passada como argumento 'bate' com a atual viewport.
export function matchMediaQuery(mediaQuery) {
    if (typeof window !== "undefined") {
        const mediaObject = matchMedia(mediaQuery)
        return { isMobile: mediaObject.matches, media: mediaObject.media }
    }

    return { isMobile: false, media: mediaQuery }
}
