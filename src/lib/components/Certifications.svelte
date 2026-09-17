<script lang="ts">
    import { Award, Calendar, TrendingUp } from "lucide-svelte";
    import { myData } from "$lib/data/myData";

    function statusColor(status: string) {
        if (status === "Completed") return "text-[#5FA295] border-[#5FA295]";
        if (status === "In Progress") return "text-[#D9A441] border-[#D9A441]";
        return "text-[#9C917C] border-[#3D3527]";
    }
</script>

<section id="certifications" class="py-16 border-t border-[#3D3527]">
    <div class="mb-12">
        <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-3 flex items-baseline gap-3">
            <span class="font-mono text-lg text-[#D9A441]">06</span>
            Certifications & learning
        </h2>
        <p class="text-[#9C917C]">
            Continuous learning and professional development.
        </p>
    </div>

    <div class="max-w-3xl border-t border-[#3D3527]">
        {#each myData.certifications as cert (cert.id)}
            <svelte:element
                this={cert.link ? "a" : "div"}
                href={cert.link || undefined}
                target={cert.link ? "_blank" : undefined}
                rel={cert.link ? "noopener noreferrer" : undefined}
                class="group flex items-start gap-4 py-5 border-b border-[#3D3527] hover:bg-[#221D16] transition-colors -mx-2 px-2"
            >
                <Award size={19} class="text-[#D9A441] mt-1 shrink-0" />
                <div class="flex-1 min-w-0">
                    <h3 class="font-medium text-[#EDE6D6] group-hover:text-[#D9A441] transition-colors">
                        {cert.title}
                    </h3>
                    <p class="text-[#9C917C] text-sm mt-0.5">{cert.issuer}</p>
                </div>
                <div class="flex flex-col items-end gap-2 shrink-0">
                    <span class="flex items-center gap-1.5 text-[#7A7060] text-xs font-mono">
                        <Calendar size={13} />
                        {cert.date}
                    </span>
                    <span class={`border text-xs font-mono px-2 py-0.5 ${statusColor(cert.status)}`}>
                        {cert.status}
                    </span>
                </div>
            </svelte:element>
        {/each}
        <div class="flex items-center gap-3 py-5 text-[#7A7060]">
            <TrendingUp size={17} class="shrink-0" />
            <span class="text-sm">More certifications on the way.</span>
        </div>
    </div>
</section>
