<script lang="ts">
    import type { HTMLTextareaAttributes } from "svelte/elements";
    let className: string | undefined = undefined;
    export { className as class };
    export let value: string | number | undefined | null = "";
</script>

<textarea
    class={`flex min-h-[60px] w-full rounded-sm border border-[#3D3527] bg-[#191510] px-3 py-2 text-sm placeholder:text-[#7A7060] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A441] focus-visible:border-[#D9A441] disabled:cursor-not-allowed disabled:opacity-50 text-[#EDE6D6] ${className || ""}`}
    bind:value
    {...$$restProps}
></textarea>
