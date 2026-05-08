import { mount, StartClient } from "@solidjs/start/client";
import "./app.css";
import "./devicon-used.css";

const appEl = document.getElementById("app");
if (appEl) mount(() => <StartClient />, appEl);
