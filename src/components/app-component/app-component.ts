import {html, render} from "lit-html"
import { Model, store } from "../../features/model"
import { ToDo } from "../../features/todo"

const template = html`
<div>
Hello from App-Component
</div>
`
class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("App Component connected")
        store.subscribe(model => this.render(model))
    }
    render(model: Model) {
        render(tableTemplate(model), this)
    }
}
customElements.define("app-component", AppComponent)

function tableTemplate(model: Model) {
    var rows = model.toDos.map(rowTemplate)
    return html`
        <table>
        <thead>
            <th>Id</th>
            <th>Title</th>
        </thead>
        <tbody>
            ${rows}
        </tbody>
        </table>
    `
}
function rowTemplate(toDo: ToDo) {
    return html`
        <tr>
            <td>${toDo.id}</td>
            <td>${toDo.title}<td>
        </tr>
    `
}