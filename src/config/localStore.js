import { createStore } from "state-pool"

// Docs
// https://yezyilomo.github.io/state-pool/docs/basic_concepts/using_store_state
const store = createStore()

export const useLocalState = store.useState
export const useLocalReducer = store.useReducer

export default store