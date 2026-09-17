<script lang="ts">
  import { onMount } from "svelte";
  import { Github, Linkedin, Mail, Code, Instagram } from "lucide-svelte";
  import XLogo from "./icons/XLogo.svelte";
  import DiscordLogo from "./icons/DiscordLogo.svelte";
  import { myData } from "$lib/data/myData";

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "techstack", label: "Tech Stack" },
    { id: "certifications", label: "Certifications" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  let activeId = sections[0].id;

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  });

  const connectLinks = [
    { icon: Github, href: myData.profile.github, label: "GitHub" },
    { icon: Linkedin, href: myData.profile.linkedin, label: "LinkedIn" },
    { icon: Code, href: myData.profile.leetcode, label: "LeetCode" },
    { icon: Instagram, href: myData.profile.instagram, label: "Instagram" },
    { icon: XLogo, href: myData.profile.x, label: "X" },
    { icon: DiscordLogo, href: myData.profile.discord, label: "Discord" },
    { icon: Mail, href: `mailto:${myData.profile.email}`, label: "Email" },
  ];
</script>

<aside class="hidden lg:block sticky top-28 self-start w-56 shrink-0">
  <p class="font-mono text-xs text-[#7A7060] mb-8">
    {myData.profile.location}
  </p>

  <nav>
    <p class="font-mono text-[11px] text-[#7A7060] tracking-wide mb-3">
      Contents
    </p>
    <ul class="space-y-0.5 mb-10">
      {#each sections as s, i}
        <li>
          <button
            on:click={() => scrollToSection(s.id)}
            class={`flex items-baseline gap-2.5 w-full text-left py-1.5 text-sm transition-colors ${
              activeId === s.id
                ? "text-[#D9A441]"
                : "text-[#9C917C] hover:text-[#EDE6D6]"
            }`}
          >
            <span
              class={`font-mono text-xs ${activeId === s.id ? "text-[#D9A441]" : "text-[#574B34]"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.label}
          </button>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="pt-6 border-t border-[#3D3527]">
    <p class="font-mono text-[11px] text-[#7A7060] tracking-wide mb-3">
      Connect
    </p>
    <ul class="space-y-1">
      {#each connectLinks as link}
        <li>
          <a
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            class="flex items-center gap-2.5 text-[#9C917C] hover:text-[#D9A441] transition-colors text-sm py-1"
          >
            <svelte:component this={link.icon} size={14} />
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</aside>
