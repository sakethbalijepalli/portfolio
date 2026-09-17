<script lang="ts">
  import { onMount } from "svelte";
  import {
    Github,
    Linkedin,
    Mail,
    Download,
    ChevronDown,
    Code,
    Instagram,
  } from "lucide-svelte";
  import XLogo from "./icons/XLogo.svelte";
  import DiscordLogo from "./icons/DiscordLogo.svelte";
  import { myData } from "$lib/data/myData";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

<section
  id="hero"
  class="min-h-screen flex items-center relative bg-[#191510]"
>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 w-full">
    <div class="space-y-6 max-w-xl">
        <p
          class={`font-mono text-sm text-[#D9A441] transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          Saketh Balijepalli / Software Engineer
        </p>

        <h1
          class={`font-display text-4xl md:text-5xl text-[#EDE6D6] leading-[1.1] transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {myData.profile.tagline}
        </h1>

        <p
          class={`text-[#9C917C] leading-relaxed transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {myData.profile.bio}
        </p>

        <p
          class={`font-mono text-xs text-[#7A7060] tracking-wide transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          {myData.profile.location}
        </p>

        <div
          class={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-[400ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <button
            on:click={() => scrollToSection("projects")}
            class="bg-[#D9A441] hover:bg-[#c99537] text-[#191510] font-medium px-5 py-2.5 text-sm transition-colors"
          >
            View projects
          </button>
          <button
            on:click={() => window.open(myData.profile.resumeUrl, "_blank")}
            class="border border-[#3D3527] hover:border-[#D9A441] hover:text-[#D9A441] text-[#EDE6D6] font-medium px-5 py-2.5 text-sm inline-flex items-center gap-2 transition-colors"
          >
            <Download size={15} />
            Resume
          </button>

          <div class="flex gap-4 ml-2">
            <a
              href={myData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href={myData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={myData.profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="LeetCode"
            >
              <Code size={19} />
            </a>
            <a
              href={myData.profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>
            <a
              href={myData.profile.x}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="X (Twitter)"
            >
              <XLogo size={17} />
            </a>
            <a
              href={myData.profile.discord}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="Discord"
            >
              <DiscordLogo size={19} />
            </a>
            <a
              href={`mailto:${myData.profile.email}`}
              class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>
      </div>
    </div>

  <button
    on:click={() => scrollToSection("about")}
    class="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#D9A441] animate-bounce"
    aria-label="Scroll to about section"
  >
    <ChevronDown size={26} />
  </button>
</section>
