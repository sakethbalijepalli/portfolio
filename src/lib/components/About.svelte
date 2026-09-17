<script lang="ts">
    import { Code2, Rocket, Users } from "lucide-svelte";
    import { myData } from "$lib/data/myData";

    const highlights = [
        {
            icon: Code2,
            title: "Clean code",
            description:
                "Writing maintainable, scalable code that stands the test of time.",
        },
        {
            icon: Rocket,
            title: "Performance first",
            description:
                "Optimizing systems to reduce latency, one microservice at a time.",
        },
        {
            icon: Users,
            title: "Team player",
            description:
                "Collaborating effectively across teams to ship features end-to-end.",
        },
    ];
</script>

<section id="about" class="pb-16 pt-4 lg:pt-0">
    <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-12 flex items-baseline gap-3">
        <span class="font-mono text-lg text-[#D9A441]">01</span>
        About
    </h2>

    <div class="mb-16 flex flex-col md:flex-row items-start gap-10">
        <div class="panel-tick border border-[#3D3527] p-2 shrink-0 mx-auto md:mx-0">
            <img
                src="/portrait.jpeg"
                alt="Saketh Balijepalli"
                loading="lazy"
                decoding="async"
                class="w-40 h-40 md:w-48 md:h-48 object-cover"
            />
        </div>
        <p class="text-lg text-[#9C917C] leading-relaxed flex-1">
            {myData.profile.bio}
        </p>
    </div>

    <div class="grid md:grid-cols-3 border-t border-[#3D3527]">
        {#each highlights as item, i}
            <div
                class={`p-6 md:p-8 border-b border-[#3D3527] ${i < highlights.length - 1 ? "md:border-r" : ""}`}
            >
                <svelte:component this={item.icon} size={22} class="text-[#D9A441] mb-4" />
                <h3 class="text-lg font-semibold text-[#EDE6D6] mb-2">
                    {item.title}
                </h3>
                <p class="text-[#9C917C] text-sm leading-relaxed">{item.description}</p>
            </div>
        {/each}
    </div>
</section>
