<script lang="ts">
    import {
        Code2,
        Container,
        Cloud,
        GitBranch,
        Database,
        Zap,
        Boxes,
        Hammer,
        Bot,
    } from "lucide-svelte";
    import { myData } from "$lib/data/myData";

    function getIconForCategory(category: string) {
        const iconMap: { [key: string]: any } = {
            Language: Code2,
            Framework: Boxes,
            Platform: Container,
            Cloud: Cloud,
            "CI/CD": GitBranch,
            Messaging: Zap,
            Database: Database,
            Cache: Zap,
            "Version Control": GitBranch,
            "Build Tool": Hammer,
            "AI & Agents": Bot,
        };
        return iconMap[category] || Code2;
    }

    const groupedStack = myData.techStack.reduce((acc: any, tech) => {
        if (!acc[tech.category]) {
            acc[tech.category] = [];
        }
        acc[tech.category].push(tech);
        return acc;
    }, {});
</script>

<section id="techstack" class="py-16 border-t border-[#3D3527]">
    <div class="mb-12">
        <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-3 flex items-baseline gap-3">
            <span class="font-mono text-lg text-[#D9A441]">05</span>
            Tech stack
        </h2>
        <p class="text-[#9C917C]">
            Technologies I work with regularly.
        </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#3D3527]">
        {#each Object.entries(groupedStack) as [category, techs] (category)}
            <div class="p-6 border-r border-b border-[#3D3527]">
                <div class="flex items-center gap-2.5 mb-4">
                    <svelte:component
                        this={getIconForCategory(category)}
                        size={17}
                        class="text-[#D9A441]"
                    />
                    <h3 class="text-sm font-semibold text-[#EDE6D6] tracking-wide">
                        {category}
                    </h3>
                </div>
                <div class="flex flex-wrap gap-2">
                    {#each techs as tech (tech.name)}
                        <span
                            class="border border-[#3D3527] text-[#9C917C] hover:border-[#D9A441] hover:text-[#D9A441] transition-colors text-xs font-mono px-2 py-1"
                        >
                            {tech.name}
                        </span>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
