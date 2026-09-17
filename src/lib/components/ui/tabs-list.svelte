<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div
    class={`inline-flex h-10 items-center justify-center rounded-sm border border-[#3D3527] bg-[#191510] p-1 text-[#9C917C] ${className || ""}`}
>
    <slot />
</div>
