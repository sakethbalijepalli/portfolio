<script lang="ts">
  export let item: {
    role: string;
    company: string;
    period: string;
    bullets: string[];
    tags: string[];
  };
</script>

<article class="card">
  <div class="flex items-baseline justify-between gap-2">
    <h3 class="font-semibold">{item.role} — <span class="text-[color:var(--muted)]">{item.company}</span></h3>
    <time class="text-sm text-[color:var(--muted)]">{item.period}</time>
  </div>
  <ul class="list-disc list-inside space-y-1 mt-2">
    {#each item.bullets as b}<li>{b}</li>{/each}
  </ul>
  <div class="flex flex-wrap gap-2 mt-3 text-xs text-[color:var(--muted)]">
    {#each item.tags as t}<span class="px-2 py-1 rounded-full border border-white/10 bg-[color:var(--panel)]">{t}</span>{/each}
  </div>
</article>
