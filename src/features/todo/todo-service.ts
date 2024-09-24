import {ToDo} from "./todo"

const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export async function loadAllTodos() {
    const response = await fetch(BASEURL)
    const todos: [ToDo] = await response.json()
    console.log("todos loaded", todos)
    return todos
}