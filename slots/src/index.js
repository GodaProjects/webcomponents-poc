import {LitElement,  html } from '@polymer/lit-element'

class MyApp extends LitElement {
    render() {
        return html`
        <style>
            .container {
                display: grid;
                grid-template-areas: "header" "content";
            }

            .header {
                grid-area: "header"
            }

            .content {
                grid-area: "content"
            }
        </style>
        <div class="content">
            <div class="header">
                Header
                <slot></slot>
            </div>
            <div class="container">
                Container
            </div>
        </div>
        `
    }
}

customElements.define('my-app', MyApp)