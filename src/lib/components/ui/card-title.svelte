<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<h3 class={`font-semibold leading-none tracking-tight ${className || ""}`}>
    <slot />
</h3>
