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
  import Button from "./ui/button.svelte";
  import { myData } from "$lib/data/myData";

  let displayedText = "";
  let isDeleting = false;
  let isTypingComplete = false;

  const fullText = `Hi, I'm ${myData.profile.name}.`;

  function handleTyping() {
    if (isDeleting) {
      displayedText = fullText.substring(0, displayedText.length - 1);
    } else {
      displayedText = fullText.substring(0, displayedText.length + 1);
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === fullText) {
      isTypingComplete = true;
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && displayedText === "") {
      isDeleting = false;
      typeSpeed = 500;
    }

    setTimeout(handleTyping, typeSpeed);
  }

  onMount(() => {
    handleTyping();
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
  class="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#0a0a0b] via-[#0f0f10] to-[#0a0a0b]"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <div class="inline-block">
          <div
            class="bg-[#151518] border border-[#10b981]/20 rounded-lg px-4 py-2 font-mono text-sm text-[#10b981] min-h-[40px] flex items-center"
          >
            <span class="text-[#a1a1aa] mr-2">$</span>
            <span class="whitespace-pre">{displayedText}</span>
            <span class="animate-pulse ml-1 inline-block w-2 h-4 bg-[#10b981]"
            ></span>
          </div>
        </div>

        <div
          class={`space-y-4 transition-opacity duration-500 ${isTypingComplete ? "opacity-100" : "opacity-0"}`}
        >
          <h2 class="text-2xl md:text-3xl text-[#e5e5e7] font-semibold">
            {myData.profile.title}
          </h2>
          <p class="text-lg text-[#a1a1aa] leading-relaxed">
            {myData.profile.tagline}
          </p>
          <p class="text-[#10b981] font-mono text-sm">
            {myData.profile.location}
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <Button
              on:click={() => scrollToSection("projects")}
              class="bg-[#10b981] hover:bg-[#059669] text-white font-medium"
            >
              View Projects
            </Button>
            <Button
              on:click={() => window.open(myData.profile.resumeUrl, "_blank")}
              variant="outline"
              class="border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white"
            >
              <Download size={16} class="mr-2" />
              Resume
            </Button>
          </div>

          <div class="flex gap-4 pt-4">
            <a
              href={myData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={myData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={myData.profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
            >
              <Code size={24} />
            </a>
            <a
              href={myData.profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href={`mailto:${myData.profile.email}`}
              class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div
        class={`transition-opacity duration-500 delay-300 ${isTypingComplete ? "opacity-100" : "opacity-0"}`}
      >
        <div
          class="bg-[#1e1e1e] rounded-lg border border-[#2d2d2d] overflow-hidden shadow-2xl"
        >
          <div
            class="bg-[#151518] px-4 py-2 flex items-center gap-2 border-b border-[#2d2d2d]"
          >
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span class="ml-2 text-xs text-[#a1a1aa] font-mono"
              >Profile.java</span
            >
          </div>
          <div class="p-6 font-mono text-sm space-y-2 leading-6">
            <div>
              <span class="text-[#c678dd]">public class</span>
              <span class="text-[#e5c07b]">SoftwareEngineer</span>
              {"{"}
            </div>
            <div class="ml-4">
              <span class="text-[#c678dd]">private</span>
              <span class="text-[#e5c07b]">String</span>
              name = <span class="text-[#98c379]">"Saketh Balijepalli"</span>;
            </div>
            <div class="ml-4">
              <span class="text-[#c678dd]">private</span>
              <span class="text-[#e5c07b]">String[]</span>
              skills = {"{"}
            </div>
            <div class="ml-8">
              <span class="text-[#98c379]">"Java"</span>,
            </div>
            <div class="ml-8">
              <span class="text-[#98c379]">"Python"</span>,
            </div>
            <div class="ml-8">
              <span class="text-[#98c379]">"Spring Boot"</span>,
            </div>
            <div class="ml-8">
              <span class="text-[#98c379]">"Microservices"</span>,
            </div>
            <div class="ml-8">
              <span class="text-[#98c379]">"Docker"</span>,
            </div>
            <div class="ml-8"><span class="text-[#98c379]">"AWS"</span></div>
            <div class="ml-4">{"}"};</div>
            <div class="ml-4">
              <span class="text-[#c678dd]">private</span>
              <span class="text-[#e5c07b]">boolean</span>
              openToWork = <span class="text-[#d19a66]">true</span>;
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button
    on:click={() => scrollToSection("about")}
    class="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#10b981] animate-bounce"
  >
    <ChevronDown size={32} />
  </button>
</section>
