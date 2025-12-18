<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    export let value: string;
    let className: string | undefined = undefined;
    export { className as class };

    const activeValue = getContext<Writable<string>>("tabs");
</script>

{#if $activeValue === value}
    <div
        class={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 ${className || ""}`}
    >
        <slot />
    </div>
{/if}
