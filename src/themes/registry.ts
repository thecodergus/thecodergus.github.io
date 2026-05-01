// ── Theme Registry — static frozen map of all theme modules ──

import type { ThemeId } from "~/stores/themeStore";
import type { ThemeModule } from "~/engine/types";
import aiModule from "./ai";
import blockchainModule from "./blockchain";
import softwareModule from "./software";
import webModule from "./web";

export const REGISTRY: Readonly<Record<ThemeId, ThemeModule>> = Object.freeze({
  ai: aiModule,
  blockchain: blockchainModule,
  software: softwareModule,
  web: webModule,
});
