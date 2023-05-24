import { useEffect, useRef, useState } from "react"

export default function useLocalStorage(initialState, keyName) {
    const [state, setState] = useState(initialState)
    const firstRender = useRef(true)

    //Atualizando o estado com base no localstorage durante a primeira renderização
    //(montagem do componente no DOM).
    useEffect(() => {
        const stateFromStorage = localStorage.getItem(keyName)
        if (stateFromStorage !== null) setState(stateFromStorage)
    }, [keyName])

    //Atualizando o localstorage nas renderizações subsequentes.
    useEffect(() => {
        if (!firstRender.current) localStorage.setItem(keyName, state)
        if (firstRender.current) firstRender.current = false
    }, [state, keyName])

    return [state, setState]
}
