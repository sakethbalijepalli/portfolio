<script lang="ts">
    import { toaster } from "$lib/stores/toaster.store";
    import { X } from "lucide-svelte";
    import { fly } from "svelte/transition";
</script>

<div
    class="fixed bottom-0 right-0 z-[100] flex flex-col p-4 gap-2 w-full max-w-[420px]"
>
    {#each $toaster as t (t.id)}
        <div
            in:fly={{ y: 20, duration: 300 }}
            out:fly={{ x: 200, duration: 300 }}
            class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-[#2d2d2d] bg-[#151518] p-6 pr-8 shadow-lg transition-all"
        >
            <div class="grid gap-1">
                {#if t.title}
                    <div class="text-sm font-semibold text-[#e5e5e7]">
                        {t.title}
                    </div>
                {/if}
                {#if t.description}
                    <div class="text-sm opacity-90 text-[#a1a1aa]">
                        {t.description}
                    </div>
                {/if}
            </div>
            <button
                on:click={() => toaster.remove(t.id)}
                class="absolute right-2 top-2 rounded-md p-1 text-[#a1a1aa] opacity-0 transition-opacity hover:text-[#e5e5e7] group-hover:opacity-100"
            >
                <X size={16} />
            </button>
        </div>
    {/each}
</div>
