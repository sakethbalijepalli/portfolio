<script lang="ts">
    import Tabs from "./ui/tabs.svelte";
    import TabsList from "./ui/tabs-list.svelte";
    import TabsTrigger from "./ui/tabs-trigger.svelte";
    import TabsContent from "./ui/tabs-content.svelte";
    import SkillBar from "./SkillBar.svelte";
    import { myData } from "$lib/data/myData";
</script>

<section id="skills" class="py-16 border-t border-[#3D3527]">
    <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-12 flex items-baseline gap-3">
        <span class="font-mono text-lg text-[#D9A441]">04</span>
        Skills & expertise
    </h2>

    <Tabs defaultValue="backend" class="w-full max-w-3xl">
        <TabsList class="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="platform">Platform</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="backend">
            <div class="border border-[#3D3527] p-6 md:p-8 space-y-6">
                {#each myData.skills.backend as skill, index}
                    <SkillBar {skill} delay={index * 100} />
                {/each}
            </div>
        </TabsContent>

        <TabsContent value="platform">
            <div class="border border-[#3D3527] p-6 md:p-8 space-y-6">
                {#each myData.skills.platform as skill, index}
                    <SkillBar {skill} delay={index * 100} />
                {/each}
            </div>
        </TabsContent>

        <TabsContent value="data">
            <div class="border border-[#3D3527] p-6 md:p-8 space-y-6">
                {#each myData.skills.data as skill, index}
                    <SkillBar {skill} delay={index * 100} />
                {/each}
            </div>
        </TabsContent>

        <TabsContent value="testing">
            <div class="border border-[#3D3527] p-6 md:p-8 space-y-6">
                {#each myData.skills.testing as skill, index}
                    <SkillBar {skill} delay={index * 100} />
                {/each}
            </div>
        </TabsContent>
    </Tabs>
</section>
