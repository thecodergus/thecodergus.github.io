import React from 'react';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client"
import store from "./config/localStore"

/* GLOBAL VARIABLES */
store.setState("languages", [
    {
        language: "en",
        classItem: "iconify language-icon mr-5",
        flag: "twemoji-flag-for-flag-united-kingdom"
    },
    {
        language: "pt-br",
        classItem: "iconify language-icon",
        flag: "twemoji-flag-for-flag-brazil",
    }
])

store.setState("language", "en")
store.setState("theme", "light")

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

serviceWorker.register();