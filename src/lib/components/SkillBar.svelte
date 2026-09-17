<script lang="ts">
    import { onMount } from "svelte";

    export let skill: { name: string; level: number };
    export let delay: number;

    const totalTicks = 20;
    let filled = 0;
    let isVisible = false;
    let element: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            observer.disconnect();
        };
    });

    $: if (isVisible) {
        setTimeout(() => {
            filled = Math.round((skill.level / 100) * totalTicks);
        }, delay);
    }
</script>

<div bind:this={element} class="space-y-2">
    <div class="flex justify-between items-baseline">
        <span class="text-[#EDE6D6] font-medium text-sm">{skill.name}</span>
        <span class="text-[#D9A441] font-mono text-xs">{skill.level}%</span>
    </div>
    <div class="flex gap-[3px]">
        {#each Array(totalTicks) as _, i}
            <div
                class={`h-3.5 flex-1 transition-colors duration-300 ${i < filled ? "bg-[#D9A441]" : "bg-[#2A2319]"}`}
                style={`transition-delay: ${i * 18}ms`}
            ></div>
        {/each}
    </div>
</div>
