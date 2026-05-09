import { describe, it, expect } from "vitest";
import { SOCIAL_ICON_MAP, resolveSocialIcon } from "~/hooks/socialIcons";
import Github from "lucide-solid/icons/github";
import Linkedin from "lucide-solid/icons/linkedin";
import Mail from "lucide-solid/icons/mail";
import ExternalLink from "lucide-solid/icons/external-link";

describe("SOCIAL_ICON_MAP", () => {
  it("contains github, linkedin, and gmail entries", () => {
    expect(SOCIAL_ICON_MAP).toHaveProperty("github");
    expect(SOCIAL_ICON_MAP).toHaveProperty("linkedin");
    expect(SOCIAL_ICON_MAP).toHaveProperty("gmail");
  });

  it("github maps to Github icon", () => {
    expect(SOCIAL_ICON_MAP.github).toBe(Github);
  });

  it("linkedin maps to Linkedin icon", () => {
    expect(SOCIAL_ICON_MAP.linkedin).toBe(Linkedin);
  });

  it("gmail maps to Mail icon", () => {
    expect(SOCIAL_ICON_MAP.gmail).toBe(Mail);
  });

  it("has exactly 3 entries", () => {
    expect(Object.keys(SOCIAL_ICON_MAP)).toHaveLength(3);
  });
});

describe("resolveSocialIcon", () => {
  it("returns Github for 'github'", () => {
    expect(resolveSocialIcon("github")).toBe(Github);
  });

  it("returns Linkedin for 'linkedin'", () => {
    expect(resolveSocialIcon("linkedin")).toBe(Linkedin);
  });

  it("returns Mail for 'gmail'", () => {
    expect(resolveSocialIcon("gmail")).toBe(Mail);
  });

  it("returns ExternalLink for unknown social names", () => {
    expect(resolveSocialIcon("twitter")).toBe(ExternalLink);
    expect(resolveSocialIcon("discord")).toBe(ExternalLink);
    expect(resolveSocialIcon("")).toBe(ExternalLink);
  });

  it("returns ExternalLink for differently cased names (case-sensitive)", () => {
    expect(resolveSocialIcon("GMAIL")).toBe(ExternalLink);
    expect(resolveSocialIcon("Github")).toBe(ExternalLink);
  });
});
