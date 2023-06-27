interface MatchMediaReturn {
    isMobile: boolean
    media: string
}

//Validando se a consulta de media passada como argumento condiz com a viewport atual.
export function matchMediaQuery(mediaQuery: string): MatchMediaReturn {
    if (typeof window !== "undefined") {
        const mediaObject = matchMedia(mediaQuery)
        return { isMobile: mediaObject.matches, media: mediaObject.media }
    }

    return { isMobile: false, media: mediaQuery }
}
