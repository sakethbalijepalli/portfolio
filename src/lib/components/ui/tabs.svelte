<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    export let value: string | undefined = undefined;
    export let defaultValue: string | undefined = undefined;
    let className: string | undefined = undefined;
    export { className as class };

    const uniqueId = writable(value || defaultValue);
    setContext("tabs", uniqueId);

    // If value prop changes, update store
    $: if (value !== undefined) $uniqueId = value;

    // We expose a way to listen to changes if needed,
    // but mostly relying on the store for children.
</script>

<div class={className}>
    <slot />
</div>
