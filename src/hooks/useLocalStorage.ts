import { useEffect, useRef, useState } from "react"

export default function useLocalStorage<T>(initialState: T, keyName: string) {
    const [state, setState] = useState<T>(initialState)
    const firstRender = useRef<boolean>(true)

    //Atualizando o estado com base no localstorage durante a primeira renderização.
    useEffect(() => {
        const stateFromStorage = localStorage.getItem(keyName)
        if (stateFromStorage) {
            setState(() => {
                try {
                    return JSON.parse(stateFromStorage)
                } catch (error) {
                    return stateFromStorage
                }
            })
        }
    }, [keyName])

    //Atualizando o localstorage nas renderizações subsequentes.
    useEffect(() => {
        if (!firstRender.current) {
            localStorage.setItem(keyName, typeof state === "string" ? state : JSON.stringify(state))
        } else {
            firstRender.current = false
        }
    }, [state, keyName])

    return [state, setState] as const
}
