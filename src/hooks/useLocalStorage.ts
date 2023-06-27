import { useEffect, useRef, useState } from "react"

export default function useLocalStorage(initialState: string, keyName: string) {
    const [state, setState] = useState<string>(initialState)
    const firstRender = useRef<boolean>(true)

    //Atualizando o estado com base no localstorage durante a primeira renderização.
    useEffect(() => {
        const stateFromStorage = localStorage.getItem(keyName)
        if (stateFromStorage !== null) setState(stateFromStorage)
    }, [keyName])

    //Atualizando o localstorage nas renderizações subsequentes.
    useEffect(() => {
        if (!firstRender.current) localStorage.setItem(keyName, state)
        if (firstRender.current) firstRender.current = false
    }, [state, keyName])

    return [state, setState] as const
}
