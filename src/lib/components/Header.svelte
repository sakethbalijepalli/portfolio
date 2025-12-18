<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';
  import Button from './ui/button.svelte';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  function handleScroll() {
    isScrolled = window.scrollY > 50;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      isMobileMenuOpen = false;
    }
  }
</script>

<header
  class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-[#0a0a0b]/95 backdrop-blur-md shadow-lg border-b border-[#2d2d2d]' : 'bg-transparent'
  }`}
>
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <button
        on:click={() => scrollToSection('hero')}
        class="text-xl font-bold text-[#10b981] hover:text-[#059669] transition-colors"
      >
        SB
      </button>

      <div class="hidden md:flex items-center gap-8">
        {#each navItems as item (item.id)}
          <button
            on:click={() => scrollToSection(item.id)}
            class="text-[#a1a1aa] hover:text-[#10b981] transition-colors text-sm font-medium"
          >
            {item.label}
          </button>
        {/each}
        <Button
          on:click={() => scrollToSection('contact')}
          class="bg-[#10b981] hover:bg-[#059669] text-white"
        >
          Get in touch
        </Button>
      </div>

      <button
        class="md:hidden text-[#e5e5e7]"
        on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
      >
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    {#if isMobileMenuOpen}
      <div class="md:hidden py-4 space-y-3 bg-[#151518] rounded-lg mt-2 px-4 border border-[#2d2d2d]">
        {#each navItems as item (item.id)}
          <button
            on:click={() => scrollToSection(item.id)}
            class="block w-full text-left text-[#a1a1aa] hover:text-[#10b981] transition-colors text-sm font-medium py-2"
          >
            {item.label}
          </button>
        {/each}
        <Button
          on:click={() => scrollToSection('contact')}
          class="w-full bg-[#10b981] hover:bg-[#059669] text-white"
        >
          Get in touch
        </Button>
      </div>
    {/if}
  </nav>
</header>
