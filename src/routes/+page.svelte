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
  import LazySection from "$lib/components/ui/lazy-section.svelte";
</script>

<div class="App">
  <Header />
  <Hero />
  <LazySection>
    <About />
  </LazySection>
  <LazySection>
    <Experience />
  </LazySection>
  <LazySection>
    <Projects />
  </LazySection>
  <LazySection>
    <Skills />
  </LazySection>
  <LazySection>
    <TechStack />
  </LazySection>
  <LazySection>
    <Certifications />
  </LazySection>
  <LazySection>
    <Blog />
  </LazySection>
  <LazySection>
    <Contact />
  </LazySection>
  <LazySection>
    <Footer />
  </LazySection>
  <Toaster />
</div>

<style>
  :global(.App) {
    background-color: #0a0a0b;
    min-height: 100vh;
  }
</style>
