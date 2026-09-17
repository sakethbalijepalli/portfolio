<script lang="ts">
    export let variant: "default" | "secondary" | "destructive" | "outline" =
        "default";
    let className: string | undefined = undefined;
    export { className as class };

    const baseStyles =
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#D9A441]";

    const variants = {
        default:
            "border-transparent bg-[#D9A441] text-[#191510]",
        secondary:
            "border-transparent bg-[#2A2319] text-[#EDE6D6]",
        destructive:
            "border-transparent bg-red-500/90 text-white",
        outline: "text-[#9C917C] border-[#3D3527] bg-transparent",
    };

    $: styles = `${baseStyles} ${variants[variant]} ${className || ""}`;
</script>

<div class={styles}>
    <slot />
</div>
