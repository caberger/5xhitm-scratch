import {html, render} from "lit-html"

const template = html`
<div>
Hello from App-Component
</div>
`

class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("App Component connected")
        render(template, this)
    }
}
customElements.define("app-component", AppComponent)
