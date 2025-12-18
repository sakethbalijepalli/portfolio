<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let isVisible = false;
    let element: HTMLElement;
    let observer: IntersectionObserver;

    const options = {
        root: null,
        rootMargin: "100px", // Load 100px before it comes into view
        threshold: 0.1,
    };

    onMount(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.disconnect();
                }
            });
        }, options);

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    });
</script>

<div bind:this={element} class="min-h-[200px]">
    {#if isVisible}
        <div in:fade={{ duration: 500 }}>
            <slot />
        </div>
    {:else}
        <!-- Optional: Minimum height placeholder based on expected content size to reduce layout shift -->
        <div class="h-full w-full" aria-hidden="true"></div>
    {/if}
</div>
