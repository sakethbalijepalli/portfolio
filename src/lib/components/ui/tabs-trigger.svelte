<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    export let value: string;
    let className: string | undefined = undefined;
    export { className as class };

    const activeValue = getContext<Writable<string>>("tabs");

    // Helper to update store
    function handleClick() {
        $activeValue = value;
    }
</script>

<button
    type="button"
    on:click={handleClick}
    class={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        $activeValue === value
            ? "bg-[#10b981] text-white shadow"
            : "text-[#71717a] hover:text-[#e5e5e7]"
    } ${className || ""}`}
>
    <slot />
</button>
