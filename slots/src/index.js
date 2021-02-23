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

            ::slotted(img) {
                background-color: orange;
                padding: 10px;
            }
        </style>
        <div class="content">
            <div class="header">
                Header
                <slot></slot>
                <slot name="named-slot"></slot>
                <img src="../images/GTY_baby_deer_jt_140802_16x9_1600.jpg"/>
            </div>
            <div class="container">
                Container
            </div>
        </div>
        `
    }
}

customElements.define('my-app', MyApp)