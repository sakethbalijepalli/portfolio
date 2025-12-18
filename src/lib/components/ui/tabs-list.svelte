<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div
    class={`inline-flex h-9 items-center justify-center rounded-lg bg-[#151518] p-1 text-[#71717a] ${className || ""}`}
>
    <slot />
</div>
