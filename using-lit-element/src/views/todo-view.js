import {LitElement, html} from '@polymer/lit-element'

class TodoView extends LitElement {
    render() {
        return html`
            <p>Hello Gode!</p>
        `
    }
}

customElements.define('todo-view', TodoView)