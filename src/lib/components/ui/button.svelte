<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";

  // We need to define cn utility or simple class merging. 
  // For now I'll just use template literals as in the React version or create a simple utility if needed. 
  // The React version used template literals but imported cn in Shadcn usually.
  // The React file I read in Step 65 did NOT import cn. It used simple string interpolation. "const styles = ...".
  // So I will replicate that logic.
  
  export let variant: 'default' | 'outline' | 'ghost' | 'link' = 'default';
  export let size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
  let className: string | undefined = undefined;
  export { className as class };

  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#10b981] disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-[#10b981] text-white hover:bg-[#059669] shadow",
    outline: "border border-[#2d2d2d] bg-transparent shadow-sm hover:bg-[#151518] hover:text-[#e5e5e7]",
    ghost: "hover:bg-[#151518] hover:text-[#e5e5e7]",
    link: "text-[#10b981] underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
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
