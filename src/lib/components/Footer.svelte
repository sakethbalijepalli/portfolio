<script lang="ts">
  import { Github, Linkedin, Mail } from "lucide-svelte";
  import { myData } from "$lib/data/myData";

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#191510] border-t border-[#3D3527] py-8">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-[#7A7060] text-sm font-mono text-center md:text-left">
        © {currentYear} {myData.profile.name}. Built with SvelteKit.
      </p>

      <div class="flex items-center gap-6">
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
          href={`mailto:${myData.profile.email}`}
          class="text-[#9C917C] hover:text-[#D9A441] transition-colors"
          aria-label="Email"
        >
          <Mail size={19} />
        </a>
      </div>
    </div>
  </div>
</footer>
