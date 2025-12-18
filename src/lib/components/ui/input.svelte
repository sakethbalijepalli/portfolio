<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    let className: string | undefined = undefined;
    export { className as class };
    export let value: string | number | undefined | null = "";
</script>

<input
    class={`flex h-9 w-full rounded-md border border-[#2d2d2d] bg-[#0a0a0b] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#71717a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 text-[#e5e5e7] ${className || ""}`}
    bind:value
    {...$$restProps}
/>
