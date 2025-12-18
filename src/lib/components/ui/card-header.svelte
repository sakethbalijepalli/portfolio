<script lang="ts">
    let className: string | undefined = undefined;
    export { className as class };
</script>

<div class={`flex flex-col space-y-1.5 p-6 ${className || ""}`}>
    <slot />
</div>
