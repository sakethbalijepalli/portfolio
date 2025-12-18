<script lang="ts">
    import { onMount } from "svelte";
    import Card from "./ui/card.svelte";
    import CardHeader from "./ui/card-header.svelte";
    import CardTitle from "./ui/card-title.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Tabs from "./ui/tabs.svelte";
    import TabsList from "./ui/tabs-list.svelte";
    import TabsTrigger from "./ui/tabs-trigger.svelte";
    import TabsContent from "./ui/tabs-content.svelte";
    import { myData } from "$lib/data/myData";

    // SkillBar logic
    import SkillBar from "./SkillBar.svelte";
    // Wait, I should probably create SkillBar separately or inline it.
    // Given it's a small component used only here, I'll create a separate file to keep it clean, as Svelte components must be in separate files.
</script>

<section id="skills" class="py-20 bg-[#0f0f10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Skills & <span class="text-[#10b981]">Expertise</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        <Tabs defaultValue="backend" class="w-full">
            <TabsList
                class="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-[#151518] border border-[#2d2d2d]"
            >
                <TabsTrigger
                    value="backend"
                    class="data-[state=active]:bg-[#10b981] data-[state=active]:text-white"
                >
                    Backend
                </TabsTrigger>
                <TabsTrigger
                    value="platform"
                    class="data-[state=active]:bg-[#10b981] data-[state=active]:text-white"
                >
                    Platform
                </TabsTrigger>
                <TabsTrigger
                    value="data"
                    class="data-[state=active]:bg-[#10b981] data-[state=active]:text-white"
                >
                    Data
                </TabsTrigger>
                <TabsTrigger
                    value="testing"
                    class="data-[state=active]:bg-[#10b981] data-[state=active]:text-white"
                >
                    Testing
                </TabsTrigger>
            </TabsList>

            <TabsContent value="backend">
                <Card class="bg-[#151518] border-[#2d2d2d]">
                    <CardHeader>
                        <CardTitle class="text-[#e5e5e7]"
                            >Backend Development</CardTitle
                        >
                    </CardHeader>
                    <CardContent class="space-y-6">
                        {#each myData.skills.backend as skill, index}
                            <SkillBar {skill} delay={index * 100} />
                        {/each}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="platform">
                <Card class="bg-[#151518] border-[#2d2d2d]">
                    <CardHeader>
                        <CardTitle class="text-[#e5e5e7]"
                            >Platform & DevOps</CardTitle
                        >
                    </CardHeader>
                    <CardContent class="space-y-6">
                        {#each myData.skills.platform as skill, index}
                            <SkillBar {skill} delay={index * 100} />
                        {/each}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="data">
                <Card class="bg-[#151518] border-[#2d2d2d]">
                    <CardHeader>
                        <CardTitle class="text-[#e5e5e7]"
                            >Data & Messaging</CardTitle
                        >
                    </CardHeader>
                    <CardContent class="space-y-6">
                        {#each myData.skills.data as skill, index}
                            <SkillBar {skill} delay={index * 100} />
                        {/each}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="testing">
                <Card class="bg-[#151518] border-[#2d2d2d]">
                    <CardHeader>
                        <CardTitle class="text-[#e5e5e7]"
                            >Testing & Quality</CardTitle
                        >
                    </CardHeader>
                    <CardContent class="space-y-6">
                        {#each myData.skills.testing as skill, index}
                            <SkillBar {skill} delay={index * 100} />
                        {/each}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
</section>
