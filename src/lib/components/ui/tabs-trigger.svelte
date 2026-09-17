<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    export let value: string;
    let className: string | undefined = undefined;
    export { className as class };

    const activeValue = getContext<Writable<string>>("tabs");

    function handleClick() {
        $activeValue = value;
    }
</script>

<button
    type="button"
    on:click={handleClick}
    class={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A441] disabled:pointer-events-none disabled:opacity-50 ${
        $activeValue === value
            ? "bg-[#D9A441] text-[#191510]"
            : "text-[#9C917C] hover:text-[#EDE6D6]"
    } ${className || ""}`}
>
    <slot />
</button>
