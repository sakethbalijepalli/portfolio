<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { experience } from '$lib/data/experience';
  import { projects } from '$lib/data/projects';
  import { posts } from '$lib/data/posts';
</script>

<Hero />

<Section id="work" title="Experience">
   <div
  class="grid gap-4 items-start"
  style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
    {#each experience as item}
      <ExperienceCard {item} />
    {/each}
  </div>
</Section>

<Section id="projects" title="Selected Projects">
  <div
  class="grid gap-4"
  style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
    {#each projects as p}
      <ProjectCard {p} />
    {/each}
  </div>
</Section>

<Section id="skills" title="Skills & Toolbox">
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
    <div class="card">
      <h4 class="font-semibold mb-2">Backend</h4>
      <ul class="list-disc list-inside space-y-1 muted">
        <li>Java 17, Spring Boot, REST, JavaScript, Python</li>
        <li>AWS ECS, S3, Lambda services</li>
        <li>JUnit, Mockito</li>
      </ul>
    </div>
    <div class="card">
      <h4 class="font-semibold mb-2">Platform</h4>
      <ul class="list-disc list-inside space-y-1 muted">
        <li>Docker, Kubernetes (basic)</li>
        <li>CI/CD: Git, Jenkins, Gradle</li>
        <li>Observability & logging</li>
      </ul>
    </div>
    <div class="card">
      <h4 class="font-semibold mb-2">Data</h4>
      <ul class="list-disc list-inside space-y-1 muted">
        <li>Redis, Redis Cache</li>
        <li>MySQL</li>
      </ul>
    </div>
    <div class="card">
      <h4 class="font-semibold mb-2">Soft</h4>
      <ul class="list-disc list-inside space-y-1 muted">
        <li>Working with legacy systems</li>
        <li>Team collaboration</li>
        <li>Proactive, Interactive, Curious to learn new things</li>
      </ul>
    </div>
  </div>
</Section>

<Section id="blog" title="Blog">
  <div class="grid sm:grid-cols-2 gap-4">
    {#each posts as post}
      <article class="card">
        <div class="flex items-baseline justify-between gap-2">
          <h3 class="font-semibold"><a class="link" href={post.url}>{post.title}</a></h3>
          <time class="text-sm muted">{post.date}</time>
        </div>
        <p class="muted mt-1">{post.summary}</p>
      </article>
    {/each}
  </div>
</Section>

<Section id="contact" title="Contact">
  <div class="card text-sm">
    <p class="mb-2">Interested in working together or just want to say hi?</p>
    <ul class="list-disc list-inside space-y-1">
      <li>Email: <a class="link" href="mailto:saketh@icloud.com">saketh@icloud.com</a></li>
      <li>LinkedIn: <a class="link" href="https://www.linkedin.com/in/sakethbalijepalli/" aria-disabled="true">linkedin.com/in/sakethbalijepalli</a></li>
      <li>GitHub: <a class="link" href="https://github.com/sakethbalijepalli" aria-disabled="true">github.com/sakethbalijepalli</a></li>
      <li><a class="btn mt-3" href="/Saketh-Balijepalli-Resume.pdf" download>Download Resume</a></li>
    </ul>
  </div>
</Section>
