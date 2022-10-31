import {useReducer} from "react"

// Gerenciador de estados de objetos multiplos
function useObjectState(init) {
    return useReducer((s, patch) => {
        const changed = Object.entries(patch)
            .some(([k, v]) => s[k] !== v);
        return changed ? { ...s, ...patch } : s;
    }, init);
}

export {useObjectState}