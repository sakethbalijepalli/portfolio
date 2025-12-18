<script lang="ts">
    import { Github, ExternalLink, Code2 } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardHeader from "./ui/card-header.svelte";
    import CardTitle from "./ui/card-title.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Badge from "./ui/badge.svelte";
    import Button from "./ui/button.svelte";
    import { myData } from "$lib/data/myData";
</script>

<section id="projects" class="py-20 bg-[#0a0a0b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Selected <span class="text-[#10b981]">Projects</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            {#each myData.projects as project (project.id)}
                <Card
                    class="bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#10b981]/20 flex flex-col"
                >
                    <CardHeader>
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex items-center gap-3">
                                <div class="p-2 bg-[#10b981]/10 rounded-lg">
                                    <Code2 size={24} class="text-[#10b981]" />
                                </div>
                                <div>
                                    <CardTitle class="text-xl text-[#e5e5e7]"
                                        >{project.title}</CardTitle
                                    >
                                    <Badge
                                        class={`mt-2 ${
                                            project.status === "Completed"
                                                ? "bg-[#10b981]/10 text-[#10b981]"
                                                : "bg-[#3b82f6]/10 text-[#3b82f6]"
                                        } border-0`}
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent class="flex-1 flex flex-col space-y-4">
                        <p class="text-[#a1a1aa] leading-relaxed">
                            {project.description}
                        </p>

                        <ul class="space-y-2">
                            {#each project.highlights as highlight}
                                <li class="text-[#a1a1aa] text-sm flex gap-2">
                                    <span class="text-[#10b981] mt-1 shrink-0"
                                        >•</span
                                    >
                                    <span>{highlight}</span>
                                </li>
                            {/each}
                        </ul>

                        <div class="flex flex-wrap gap-2 pt-2">
                            {#each project.technologies as tech}
                                <Badge
                                    variant="outline"
                                    class="border-[#2d2d2d] text-[#a1a1aa] text-xs"
                                >
                                    {tech}
                                </Badge>
                            {/each}
                        </div>

                        <div class="flex gap-3 pt-4 mt-auto">
                            {#if project.githubUrl && project.githubUrl !== "#"}
                                <Button
                                    on:click={() =>
                                        window.open(
                                            project.githubUrl,
                                            "_blank",
                                        )}
                                    variant="outline"
                                    class="border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white flex-1"
                                >
                                    <Github size={16} class="mr-2" />
                                    Code
                                </Button>
                            {:else if project.githubUrl === "#"}
                                <Button
                                    disabled
                                    variant="outline"
                                    class="border-[#2d2d2d] text-[#a1a1aa] flex-1"
                                >
                                    <Github size={16} class="mr-2" />
                                    Coming Soon
                                </Button>
                            {/if}
                            {#if project.liveUrl}
                                <Button
                                    on:click={() =>
                                        window.open(project.liveUrl, "_blank")}
                                    class="bg-[#10b981] hover:bg-[#059669] text-white flex-1"
                                >
                                    <ExternalLink size={16} class="mr-2" />
                                    Live Demo
                                </Button>
                            {/if}
                        </div>
                    </CardContent>
                </Card>
            {/each}
        </div>
    </div>
</section>
