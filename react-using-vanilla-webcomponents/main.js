import React from 'react'
import ReactDOM from 'react-dom'
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from 'prop-types'

class HelloMessage extends React.Component {
    render() {
        return <div>Hello <x-search name="testing123">{this.props.name}</x-search>!</div>;
    }
}

class XSearch extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
        const name = this.getAttribute('name');
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
    }
}
customElements.define('x-search', XSearch);

ReactDOM.render(<HelloMessage/>, document.getElementById("app"))