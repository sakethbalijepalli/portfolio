<script lang="ts">
    import { Award, Calendar, TrendingUp } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Badge from "./ui/badge.svelte";
    import { myData } from "$lib/data/myData";

    function getStatusColor(status: string) {
        const colors: { [key: string]: string } = {
            "In Progress": "bg-[#3b82f6]/10 text-[#3b82f6]",
            Planning: "bg-[#a1a1aa]/10 text-[#a1a1aa]",
            Completed: "bg-[#10b981]/10 text-[#10b981]",
        };
        return colors[status] || colors["Planning"];
    }
</script>

<section id="certifications" class="py-20 bg-[#0f0f10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Certifications & <span class="text-[#10b981]">Learning</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
            <p class="text-[#a1a1aa] mt-4">
                Continuous learning and professional development
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {#each myData.certifications as cert (cert.id)}
                {#if cert.link}
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block h-full group"
                    >
                        <Card
                            class="bg-[#151518] border-[#2d2d2d] group-hover:border-[#10b981]/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-[#10b981]/20 h-full"
                        >
                            <CardContent class="p-6 space-y-4">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 bg-[#10b981]/10 rounded-lg">
                                        <Award
                                            size={24}
                                            class="text-[#10b981]"
                                        />
                                    </div>
                                    <div class="flex-1 space-y-2">
                                        <h3
                                            class="text-lg font-semibold text-[#e5e5e7] group-hover:text-[#10b981] transition-colors"
                                        >
                                            {cert.title}
                                        </h3>
                                        <p class="text-[#a1a1aa] text-sm">
                                            {cert.issuer}
                                        </p>
                                        <div
                                            class="flex items-center gap-2 text-[#a1a1aa] text-sm"
                                        >
                                            <Calendar size={14} />
                                            <span>{cert.date}</span>
                                        </div>
                                        <Badge
                                            class={`${getStatusColor(cert.status)} border-0`}
                                        >
                                            {cert.status}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                {:else}
                    <Card
                        class="bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#10b981]/20"
                    >
                        <CardContent class="p-6 space-y-4">
                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-[#10b981]/10 rounded-lg">
                                    <Award size={24} class="text-[#10b981]" />
                                </div>
                                <div class="flex-1 space-y-2">
                                    <h3
                                        class="text-lg font-semibold text-[#e5e5e7]"
                                    >
                                        {cert.title}
                                    </h3>
                                    <p class="text-[#a1a1aa] text-sm">
                                        {cert.issuer}
                                    </p>
                                    <div
                                        class="flex items-center gap-2 text-[#a1a1aa] text-sm"
                                    >
                                        <Calendar size={14} />
                                        <span>{cert.date}</span>
                                    </div>
                                    <Badge
                                        class={`${getStatusColor(cert.status)} border-0`}
                                    >
                                        {cert.status}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                {/if}
            {/each}

            <Card class="bg-[#151518] border-[#2d2d2d] border-dashed">
                <CardContent
                    class="p-6 flex items-center justify-center h-full"
                >
                    <div class="text-center space-y-3">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#10b981]/10 text-[#10b981]"
                        >
                            <TrendingUp size={32} />
                        </div>
                        <p class="text-[#a1a1aa]">
                            More certifications on the way...
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</section>
