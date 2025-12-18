<script lang="ts">
    export let variant: "default" | "secondary" | "destructive" | "outline" =
        "default";
    let className: string | undefined = undefined;
    export { className as class };

    const baseStyles =
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2";

    const variants = {
        default:
            "border-transparent bg-[#10b981] text-white shadow hover:bg-[#059669]",
        secondary:
            "border-transparent bg-[#151518] text-[#e5e5e7] hover:bg-[#151518]/80",
        destructive:
            "border-transparent bg-red-500 text-white shadow hover:bg-red-500/80",
        outline: "text-[#e5e5e7] border-[#2d2d2d]",
    };

    $: styles = `${baseStyles} ${variants[variant]} ${className || ""}`;
</script>

<div class={styles}>
    <slot />
</div>
