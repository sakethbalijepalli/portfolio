<script>
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import SectionNav from "$lib/components/SectionNav.svelte";
  import About from "$lib/components/About.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import TechStack from "$lib/components/TechStack.svelte";
  import Certifications from "$lib/components/Certifications.svelte";
  import Blog from "$lib/components/Blog.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Toaster from "$lib/components/ui/toaster.svelte";
</script>

<div class="App">
  <Header />
  <Hero />

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:flex lg:gap-16 lg:items-start">
      <SectionNav />

      <div class="flex-1 min-w-0">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <TechStack />
        <Certifications />
        <Blog />
        <Contact />
      </div>
    </div>
  </div>

  <Footer />
  <Toaster />
</div>

<style>
  :global(.App) {
    background-color: #191510;
    min-height: 100vh;
  }
</style>
