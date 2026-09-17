<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';

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
  class={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    isScrolled ? 'bg-[#191510]/95 backdrop-blur-md border-b border-[#3D3527]' : 'bg-transparent border-b border-transparent'
  }`}
>
  <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <button
        on:click={() => scrollToSection('hero')}
        class="w-9 h-9 border border-[#D9A441] text-[#D9A441] font-display font-semibold text-sm flex items-center justify-center hover:bg-[#D9A441] hover:text-[#191510] transition-colors"
        aria-label="Back to top"
      >
        SB
      </button>

      <div class="hidden md:flex items-center gap-8">
        {#each navItems as item (item.id)}
          <button
            on:click={() => scrollToSection(item.id)}
            class="text-[#9C917C] hover:text-[#D9A441] transition-colors text-sm font-medium"
          >
            {item.label}
          </button>
        {/each}
        <button
          on:click={() => scrollToSection('contact')}
          class="border border-[#3D3527] hover:border-[#D9A441] hover:text-[#D9A441] text-[#EDE6D6] text-sm font-medium px-4 py-2 transition-colors"
        >
          Get in touch
        </button>
      </div>

      <button
        class="md:hidden text-[#EDE6D6]"
        on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    {#if isMobileMenuOpen}
      <div class="md:hidden py-4 space-y-1 bg-[#221D16] border border-[#3D3527] mt-2 px-4 mb-4">
        {#each navItems as item (item.id)}
          <button
            on:click={() => scrollToSection(item.id)}
            class="block w-full text-left text-[#9C917C] hover:text-[#D9A441] transition-colors text-sm font-medium py-2 border-b border-[#3D3527] last:border-0"
          >
            {item.label}
          </button>
        {/each}
        <button
          on:click={() => scrollToSection('contact')}
          class="w-full text-left border border-[#3D3527] hover:border-[#D9A441] hover:text-[#D9A441] text-[#EDE6D6] text-sm font-medium px-4 py-2 mt-3 transition-colors"
        >
          Get in touch
        </button>
      </div>
    {/if}
  </nav>
</header>
