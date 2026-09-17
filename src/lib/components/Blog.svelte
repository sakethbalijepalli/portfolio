<script lang="ts">
    import { Calendar, Clock } from "lucide-svelte";
    import { myData } from "$lib/data/myData";
</script>

<section id="blog" class="py-16 border-t border-[#3D3527]">
    <div class="mb-12">
        <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-3 flex items-baseline gap-3">
            <span class="font-mono text-lg text-[#D9A441]">07</span>
            Latest writing
        </h2>
        <p class="text-[#9C917C]">
            Thoughts on coding, backend development, and tech.
        </p>
    </div>

    <div class="max-w-3xl border-t border-[#3D3527]">
        {#each myData.blogPosts as post (post.id)}
            <a href="#" class="group block py-6 border-b border-[#3D3527] hover:bg-[#221D16] transition-colors -mx-2 px-2">
                <div class="flex flex-wrap gap-2 mb-3">
                    {#each post.tags as tag}
                        <span class="text-xs font-mono text-[#D9A441] border border-[#3D3527] px-2 py-0.5">
                            {tag}
                        </span>
                    {/each}
                </div>
                <h3 class="font-display text-xl text-[#EDE6D6] group-hover:text-[#D9A441] transition-colors mb-2">
                    {post.title}
                </h3>
                <p class="text-[#9C917C] leading-relaxed mb-4 max-w-xl">
                    {post.excerpt}
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-[#7A7060]">
                    <span class="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {post.date}
                    </span>
                    <span class="flex items-center gap-1.5">
                        <Clock size={13} />
                        {post.readTime}
                    </span>
                    <span class="text-[#D9A441] ml-auto group-hover:underline underline-offset-4">
                        Read more
                    </span>
                </div>
            </a>
        {/each}
    </div>
</section>
