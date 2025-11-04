<script lang="ts">
  import { Github, Linkedin } from 'lucide-svelte';
</script>

<section id="home" class="container grid md:grid-cols-[1.2fr,0.8fr] gap-6 items-center py-12">
  <div>
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
      Hi, I'm <span class="underline decoration-[color:var(--ring)]">Saketh</span>.
    </h1>
    <p class="mt-3 text-lg">Software Engineer focused on <b>Java 17</b>, <b>Spring Boot</b>, and <b>microservices</b> — shipping features end-to-end, keeping legacy systems stable, and making deployments boring.</p>
    <p class="muted mt-1">I work with <b>Docker</b>, <b>CI/CD (Git, Gradle, Jenkins)</b>, Oracle SQL, and I’m comfortable with <b>Kubernetes</b> & observability.</p>
    <div class="flex flex-wrap gap-2 mt-4">
      <a class="btn btn-primary" href="#projects">View Projects</a>
      <a class="btn" href="/Saketh-Balijepalli-Resume.pdf" download>Download Résumé</a>
      <a class="btn" href="#contact">Get in touch</a>
    </div>
    <div class="flex items-center gap-3 mt-4 text-sm muted">
      <span>Based in India • open to remote</span>
    </div>
    <div class="flex items-center gap-3 mt-4">
  <a class="btn" href="https://github.com/sakethbalijepalli" target="_blank" rel="noopener noreferrer">
    <Github size={18}/> GitHub
  </a>
  <a class="btn" href="https://www.linkedin.com/in/sakethbalijepalli/" target="_blank" rel="noopener noreferrer">
    <Linkedin size={18}/> LinkedIn
  </a>
  </div>
  </div>
  <div class="card flex items-center justify-center">
    <img src="/portrait.jpeg" alt="Portrait illustration" class="w-full h-auto" />
  </div>
</section>
