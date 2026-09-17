<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div
    class={`rounded-sm border border-[#3D3527] bg-[#221D16] text-[#EDE6D6] ${className || ""}`}
>
    <slot />
</div>
