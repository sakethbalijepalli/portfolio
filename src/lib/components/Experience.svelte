<script lang="ts">
    import { myData } from "$lib/data/myData";
</script>

<section id="experience" class="py-16 border-t border-[#3D3527]">
    <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-12 flex items-baseline gap-3">
        <span class="font-mono text-lg text-[#D9A441]">02</span>
        Experience
    </h2>

    <div class="border-t border-[#3D3527]">
        {#each myData.experiences as exp (exp.id)}
            <div class="py-8 border-b border-[#3D3527]">
                <div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 mb-4">
                    <div>
                        <h3 class="font-display text-xl md:text-2xl text-[#EDE6D6]">
                            {exp.title}
                        </h3>
                        <p class="text-[#9C917C] text-sm mt-1">{exp.company}</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="font-mono text-xs text-[#D9A441]">{exp.duration}</p>
                        <p class="font-mono text-[11px] text-[#7A7060] mt-1">{exp.type}</p>
                    </div>
                </div>

                <ul class="space-y-2.5 mb-5">
                    {#each exp.description as item}
                        <li class="text-[#9C917C] text-sm leading-relaxed flex gap-3">
                            <span class="text-[#574B34] shrink-0">—</span>
                            <span>{item}</span>
                        </li>
                    {/each}
                </ul>

                <div class="flex flex-wrap gap-2">
                    {#each exp.technologies as tech}
                        <span
                            class="border border-[#3D3527] text-[#9C917C] hover:border-[#D9A441] hover:text-[#D9A441] transition-colors text-xs font-mono px-2 py-1"
                        >
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
