<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  export let variant: 'default' | 'outline' | 'ghost' | 'link' = 'default';
  export let size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  let className: string | undefined = undefined;
  export { className as class };

  const baseStyles = "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A441] disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-[#D9A441] text-[#191510] hover:bg-[#c99537]",
    outline: "border border-[#3D3527] bg-transparent text-[#EDE6D6] hover:border-[#D9A441] hover:text-[#D9A441]",
    ghost: "hover:bg-[#2A2319] hover:text-[#EDE6D6]",
    link: "text-[#D9A441] underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-sm px-3 text-xs",
    lg: "h-11 rounded-sm px-8",
    icon: "h-9 w-9",
  };

  $: styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;
</script>

<button
  class={styles}
  {...$$restProps}
  on:click
>
  <slot />
</button>
