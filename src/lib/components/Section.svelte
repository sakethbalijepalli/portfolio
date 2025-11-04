<script lang="ts">
  export let id: string;
  export let title: string;
  export let description: string | undefined = undefined;
</script>

<section {id} class="py-12">
  <div class="container">
    <h2 class="text-2xl font-semibold mb-3">{title}</h2>
    {#if description}<p class="muted mb-6">{description}</p>{/if}
    <slot />
  </div>
</section>
