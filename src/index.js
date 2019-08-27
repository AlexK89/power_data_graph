import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import './normalize.scss'
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render((<App />), document.getElementById('reactMountPoint'));
});
