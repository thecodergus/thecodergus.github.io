import { createSignal, createEffect } from "solid-js";
import { useI18n } from "~/stores/i18nStore";
import { Github, Mail, ExternalLink, Linkedin } from "lucide-solid";

export default function Contact() {
  const { messages, sharedData } = useI18n();
  const [isVisible, setIsVisible] = createSignal(false);

  let sectionRef: HTMLDivElement | undefined;

  createEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef) observer.observe(sectionRef);
    return () => observer.disconnect();
  });

  const sectionName = () => messages()?.basic_info?.section_name?.contact || "";
  const contactText = () => messages()?.contact_message?.paragraph || "";
  const socials = () => sharedData()?.basic_info?.social || [];

  const iconMap: Record<string, typeof Github> = {
    github: Github,
    gmail: Mail,
    linkedin: Linkedin,
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      class="py-section bg-surface relative"
    >
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-display mb-6 text-text">
          <span class="text-accent-primary">&gt;</span> {sectionName()}
        </h2>

        <p class="text-text-secondary mb-12 max-w-xl mx-auto">
          {contactText()}
        </p>

        <div
          class="flex flex-wrap justify-center gap-6"
          style={{
            opacity: isVisible() ? 1 : 0,
            transform: isVisible() ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          {socials().map((item) => {
            const Icon = iconMap[item.name] || ExternalLink;
            return (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-bg border border-border min-w-[140px] hover:border-accent-primary hover:shadow-glow-primary transition-all hover:-translate-y-1"
                aria-label={item.name}
              >
                <Icon size={28} class="text-text-secondary group-hover:text-accent-primary transition-colors" />
                <span class="text-sm font-medium text-text-secondary group-hover:text-text capitalize">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
