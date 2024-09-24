class AppComponent extends HTMLElement {
    connectedCallback() {
        console.log("App Component connected")
    }
}
customElements.define("app-component", AppComponent)
