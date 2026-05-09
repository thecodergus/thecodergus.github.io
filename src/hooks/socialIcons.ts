import type { Component } from "solid-js";
import type { LucideProps } from "lucide-solid";
import Github from "lucide-solid/icons/github";
import Linkedin from "lucide-solid/icons/linkedin";
import Mail from "lucide-solid/icons/mail";
import ExternalLink from "lucide-solid/icons/external-link";

export const SOCIAL_ICON_MAP: Record<string, Component<LucideProps>> = {
  github: Github,
  linkedin: Linkedin,
  gmail: Mail,
};

export function resolveSocialIcon(name: string): Component<LucideProps> {
  return SOCIAL_ICON_MAP[name] ?? ExternalLink;
}
