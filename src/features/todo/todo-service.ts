import { ToDo } from "./todo"
import { store } from "../model"
import { produce } from "immer"

const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export async function loadAllToDos() {
    const response = await fetch(BASEURL)
    const toDos: [ToDo] = await response.json()
    var next = produce(store.getValue(), draft => {
        draft.toDos = toDos
    })
    console.log("next is", next)
    store.next(next)
}