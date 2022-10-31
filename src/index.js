import React from 'react';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client"
import { createStore } from "state-pool"

/* GLOBAL VARIABLES */
const store = createStore()
store.setState("language", [
    {
        iconId: "primary-lang-icon",
        language: "en",
        classFlag: "twemoji-flag-for-flag-united-kingdom"
    },
    {
        iconId: "secondary-lang-icon",
        language: "pt-br",
        classFlag: "twemoji-flag-for-flag-brazil"
    }
])

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pt-br';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

serviceWorker.register();