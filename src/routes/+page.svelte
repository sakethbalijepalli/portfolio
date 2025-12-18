<script>
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
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
  <About />

  <div class="lazy-render">
    <Experience />
  </div>

  <div class="lazy-render">
    <Projects />
  </div>

  <div class="lazy-render">
    <Skills />
  </div>

  <div class="lazy-render">
    <TechStack />
  </div>

  <div class="lazy-render">
    <Certifications />
  </div>

  <div class="lazy-render">
    <Blog />
  </div>

  <div class="lazy-render">
    <Contact />
  </div>

  <div class="lazy-render">
    <Footer />
  </div>
  <Toaster />
</div>

<style>
  :global(.App) {
    background-color: #0a0a0b;
    min-height: 100vh;
  }
</style>
