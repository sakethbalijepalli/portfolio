<script lang="ts">
    import { Github, ExternalLink } from "lucide-svelte";
    import Badge from "./ui/badge.svelte";
    import Button from "./ui/button.svelte";
    import { myData } from "$lib/data/myData";
</script>

<section id="projects" class="py-16 border-t border-[#3D3527]">
    <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-12 flex items-baseline gap-3">
        <span class="font-mono text-lg text-[#D9A441]">03</span>
        Projects
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
        {#each myData.projects as project (project.id)}
            <div
                class="panel-tick border border-[#3D3527] hover:border-[#574B34] transition-colors flex flex-col p-6"
            >
                <Badge
                    variant="outline"
                    class={
                        project.status === "Completed"
                            ? "border-[#5FA295] text-[#5FA295] mb-3 self-start"
                            : "border-[#D9A441] text-[#D9A441] mb-3 self-start"
                    }
                >
                    {project.status}
                </Badge>

                <h3 class="font-display text-xl text-[#EDE6D6] mb-4">{project.title}</h3>

                <p class="text-[#9C917C] leading-relaxed mb-4">
                    {project.description}
                </p>

                <ul class="space-y-2 mb-5">
                    {#each project.highlights as highlight}
                        <li class="text-[#9C917C] text-sm flex gap-3">
                            <span class="text-[#574B34] shrink-0">—</span>
                            <span>{highlight}</span>
                        </li>
                    {/each}
                </ul>

                <div class="flex flex-wrap gap-2 mb-6">
                    {#each project.technologies as tech}
                        <span class="border border-[#3D3527] text-[#9C917C] text-xs font-mono px-2 py-1">
                            {tech}
                        </span>
                    {/each}
                </div>

                <div class="flex gap-3 mt-auto">
                    {#if project.githubUrl && project.githubUrl !== "#"}
                        <Button
                            on:click={() =>
                                window.open(project.githubUrl, "_blank")}
                            variant="outline"
                            class="flex-1"
                        >
                            <Github size={16} class="mr-2" />
                            Code
                        </Button>
                    {:else if project.githubUrl === "#"}
                        <Button disabled variant="outline" class="flex-1">
                            <Github size={16} class="mr-2" />
                            Coming soon
                        </Button>
                    {/if}
                    {#if project.liveUrl}
                        <Button
                            on:click={() =>
                                window.open(project.liveUrl, "_blank")}
                            class="flex-1"
                        >
                            <ExternalLink size={16} class="mr-2" />
                            Live demo
                        </Button>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</section>
