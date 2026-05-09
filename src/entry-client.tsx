import { mount, StartClient } from "@solidjs/start/client";
import "./devicon-used.css";

const appEl = document.getElementById("app");
if (appEl) mount(() => <StartClient />, appEl);
