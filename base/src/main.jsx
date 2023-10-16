import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker';
import './main.scss'
import store from "./config/localStore"

/* GLOBAL VARIABLES */
store.setState("languages", [
    {
        language: "pt-br",
        classItem: "iconify language-icon",
        flag: "twemoji-flag-for-flag-brazil",
    },
    {
        language: "en",
        classItem: "iconify language-icon mr-5",
        flag: "twemoji-flag-for-flag-united-kingdom"
    }
])

store.setState("language", "pt-br")
store.setState("theme", "light")


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.register();