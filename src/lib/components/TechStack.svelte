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
    } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Badge from "./ui/badge.svelte";
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
        };
        return iconMap[category] || Code2;
    }

    // Group stack
    const groupedStack = myData.techStack.reduce((acc: any, tech) => {
        if (!acc[tech.category]) {
            acc[tech.category] = [];
        }
        acc[tech.category].push(tech);
        return acc;
    }, {});
</script>

<section id="techstack" class="py-20 bg-[#0a0a0b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Tech <span class="text-[#10b981]">Stack</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
            <p class="text-[#a1a1aa] mt-4">
                Technologies I work with regularly
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each Object.entries(groupedStack) as [category, techs] (category)}
                <Card
                    class="bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300"
                >
                    <CardContent class="p-6 space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="p-2 bg-[#10b981]/10 rounded-lg">
                                <svelte:component
                                    this={getIconForCategory(category)}
                                    size={20}
                                    class="text-[#10b981]"
                                />
                            </div>
                            <h3 class="text-lg font-semibold text-[#e5e5e7]">
                                {category}
                            </h3>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            {#each techs as tech (tech.name)}
                                <Badge
                                    variant="outline"
                                    class="border-[#2d2d2d] text-[#a1a1aa] hover:border-[#10b981] hover:text-[#10b981] transition-colors"
                                >
                                    {tech.name}
                                </Badge>
                            {/each}
                        </div>
                    </CardContent>
                </Card>
            {/each}
        </div>
    </div>
</section>
