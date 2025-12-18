<script lang="ts">
    import { Briefcase, Calendar } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Badge from "./ui/badge.svelte";
    import { myData } from "$lib/data/myData";
</script>

<section id="experience" class="py-20 bg-[#0f0f10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Work <span class="text-[#10b981]">Experience</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        <div class="relative">
            <div
                class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#2d2d2d]"
            ></div>

            <div class="space-y-12">
                {#each myData.experiences as exp, index (exp.id)}
                    <div
                        class={`relative flex items-center ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        }`}
                    >
                        <div
                            class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#10b981] rounded-full border-4 border-[#0f0f10] z-10"
                        ></div>

                        <div
                            class={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                        >
                            <Card
                                class="bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/20"
                            >
                                <CardContent class="p-6 space-y-4">
                                    <div
                                        class="flex items-start justify-between gap-4 flex-col sm:flex-row"
                                    >
                                        <div>
                                            <h3
                                                class="text-xl font-bold text-[#e5e5e7] mb-1"
                                            >
                                                {exp.title}
                                            </h3>
                                            <div
                                                class="flex items-center gap-2 text-[#10b981] font-medium"
                                            >
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                        <Badge
                                            class="bg-[#10b981]/10 text-[#10b981] border-0 shrink-0"
                                        >
                                            {exp.type}
                                        </Badge>
                                    </div>

                                    <div
                                        class="flex items-center gap-2 text-[#a1a1aa] text-sm"
                                    >
                                        <Calendar size={16} />
                                        <span>{exp.duration}</span>
                                    </div>

                                    <ul class="space-y-2">
                                        {#each exp.description as item}
                                            <li
                                                class="text-[#a1a1aa] text-sm leading-relaxed flex gap-2"
                                            >
                                                <span
                                                    class="text-[#10b981] mt-1.5 shrink-0"
                                                    >•</span
                                                >
                                                <span>{item}</span>
                                            </li>
                                        {/each}
                                    </ul>

                                    <div class="flex flex-wrap gap-2 pt-2">
                                        {#each exp.technologies as tech}
                                            <Badge
                                                variant="outline"
                                                class="border-[#2d2d2d] text-[#a1a1aa] hover:border-[#10b981] hover:text-[#10b981] transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        {/each}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
