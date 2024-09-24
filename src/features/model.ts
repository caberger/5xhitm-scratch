import { BehaviorSubject } from "rxjs"
import { ToDo } from "./todo"

export interface Model {
    toDos: ToDo[]
    user: string

}
const initialState : Model = {
    toDos: [],
    user: "Ich"
}
const store = new BehaviorSubject<Model>(initialState)

export {store}
