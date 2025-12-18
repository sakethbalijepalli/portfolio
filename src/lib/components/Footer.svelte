<script lang="ts">
  import { Heart, Github, Linkedin, Mail } from "lucide-svelte";
  import { myData } from "$lib/data/myData";

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#0a0a0b] border-t border-[#2d2d2d] py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-center md:text-left">
        <p class="text-[#a1a1aa] text-sm">
          © {currentYear}
          {myData.profile.name}. Built with{" "}
          <Heart size={14} class="inline text-[#10b981]" /> using SvelteKit
        </p>
      </div>

      <div class="flex items-center gap-6">
        <a
          href={myData.profile.github}
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={myData.profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${myData.profile.email}`}
          class="text-[#a1a1aa] hover:text-[#10b981] transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </div>
</footer>
