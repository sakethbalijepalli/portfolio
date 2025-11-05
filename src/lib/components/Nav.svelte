<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  let open = false;
</script>

<header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
  <div class="container flex items-center justify-between py-3">
    <a href="/" class="flex items-center gap-2 font-semibold">
      <img src="/favicon.svg" alt="" class="w-6 h-6" />
      <span>Saketh&nbsp;Balijepalli</span>
    </a>
    <nav class="hidden sm:flex items-center gap-4">
      <a href="#work" class="hover:underline">Work</a>
      <a href="#projects" class="hover:underline">Projects</a>
      <a href="#skills" class="hover:underline">Skills</a>
      <a href="#blog" class="hover:underline">Blog</a>
      <a href="#contact" class="hover:underline">Contact</a>
      <ThemeToggle />
    </nav>
    <button class="sm:hidden btn" on:click={() => (open = !open)} aria-label="Menu">☰</button>
  </div>
  {#if open}
  <div class="sm:hidden container py-2">
    <div class="flex flex-col gap-2">
      <a href="#work" on:click={() => (open = false)}>Work</a>
      <a href="#projects" on:click={() => (open = false)}>Projects</a>
      <a href="#skills" on:click={() => (open = false)}>Skills</a>
      <a href="#blog" on:click={() => (open = false)}>Blog</a>
      <a href="#contact" on:click={() => (open = false)}>Contact</a>
      <ThemeToggle />
    </div>
  </div>
  {/if}
</header>
