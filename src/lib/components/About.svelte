<script lang="ts">
    import { Code2, Rocket, Users } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardContent from "./ui/card-content.svelte";
    import { myData } from "$lib/data/myData";

    const highlights = [
        {
            icon: Code2,
            title: "Clean Code",
            description:
                "Writing maintainable, scalable code that stands the test of time",
        },
        {
            icon: Rocket,
            title: "Performance First",
            description:
                "Optimizing systems to reduce latency, one microservice at a time",
        },
        {
            icon: Users,
            title: "Team Player",
            description:
                "Collaborating effectively across teams to ship features end-to-end",
        },
    ];
</script>

<section id="about" class="py-20 bg-[#0a0a0b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                About <span class="text-[#10b981]">Me</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        <div
            class="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center gap-8"
        >
            <div class="relative group shrink-0">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                ></div>
                <div
                    class="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl ring-1 ring-[#2d2d2d]"
                >
                    <img
                        src="/portrait.jpeg"
                        alt="Saketh Balijepalli"
                        loading="lazy"
                        decoding="async"
                        class="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
            <p
                class="text-lg text-[#a1a1aa] leading-relaxed text-center md:text-left flex-1"
            >
                {myData.profile.bio}
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
            {#each highlights as item}
                <Card
                    class="bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#10b981]/20"
                >
                    <CardContent class="p-6 text-center space-y-4">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#10b981]/10 text-[#10b981]"
                        >
                            <svelte:component this={item.icon} size={32} />
                        </div>
                        <h3 class="text-xl font-semibold text-[#e5e5e7]">
                            {item.title}
                        </h3>
                        <p class="text-[#a1a1aa]">{item.description}</p>
                    </CardContent>
                </Card>
            {/each}
        </div>
    </div>
</section>
