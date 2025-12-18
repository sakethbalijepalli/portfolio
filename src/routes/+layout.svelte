<script lang="ts">
  import "../app.css";

  let ready = false;
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved === "light") document.documentElement.classList.add("light");
    else if (saved === "dark")
      document.documentElement.classList.remove("light");
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.classList.add("light");
    }
  }
  $: ready = true;
</script>

<svelte:head>
  <title>Saketh Balijepalli — Software Engineer</title>
  <meta
    name="description"
    content="Java 17, Spring Boot microservices, Kafka, CI/CD, Docker, Kubernetes, Oracle."
  />
  <link rel="icon" href="/favicon.svg" />
  <meta property="og:image" content="/og-image.png" />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <div class="flex-1">
    <slot />
  </div>
</div>
