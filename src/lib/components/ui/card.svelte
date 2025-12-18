<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div
    class={`rounded-xl border border-[#2d2d2d] bg-[#151518] text-[#e5e5e7] shadow-sm ${className || ""}`}
>
    <slot />
</div>
