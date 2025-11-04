<script lang="ts">
  export let p: {
    title: string;
    description: string;
    bullets: string[];
    link?: string;
    linkLabel?: string;
  };
</script>

<article class="card">
  <h3 class="font-semibold">{p.title}</h3>
  <p class="muted mt-1">{p.description}</p>
  <ul class="list-disc list-inside space-y-1 mt-2">
    {#each p.bullets as b}<li>{b}</li>{/each}
  </ul>
  {#if p.link}
    <a class="btn mt-3" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel || 'Open'}</a>
  {/if}
</article>
