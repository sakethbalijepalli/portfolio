<script lang="ts">
    import { onMount } from "svelte";

    export let skill: { name: string; level: number };
    export let delay: number;

    let width = 0;
    let isVisible = false;
    let element: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.disconnect(); // Stop observing once visible
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
        const timer = setTimeout(() => {
            width = skill.level;
        }, delay);
        // Cleanup is tricky in reactive statement, but this runs once when isVisible becomes true.
        // Ideally we should manage cleanup if destroyed.
    }
</script>

<div bind:this={element} class="space-y-2">
    <div class="flex justify-between items-center">
        <span class="text-[#e5e5e7] font-medium">{skill.name}</span>
        <span class="text-[#10b981] font-mono text-sm">{skill.level}%</span>
    </div>
    <div class="h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
        <div
            class="h-full bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full transition-all duration-1000 ease-out"
            style={`width: ${width}%`}
        ></div>
    </div>
</div>
