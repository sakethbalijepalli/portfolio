<script lang="ts">
    import { Calendar, Clock, ArrowRight } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardHeader from "./ui/card-header.svelte";
    import CardTitle from "./ui/card-title.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Badge from "./ui/badge.svelte";
    import Button from "./ui/button.svelte";
    import { myData } from "$lib/data/myData";
</script>

<section id="blog" class="py-20 bg-[#0a0a0b]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Latest <span class="text-[#10b981]">Blog Posts</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
            <p class="text-[#a1a1aa] mt-4">
                Thoughts on coding, backend development, and tech
            </p>
        </div>

        <div
            class={`grid gap-6 ${myData.blogPosts.length === 1 ? "place-items-center" : "md:grid-cols-3"}`}
        >
            {#each myData.blogPosts as post (post.id)}
                <Card
                    class={`bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#10b981]/20 flex flex-col ${myData.blogPosts.length === 1 ? "max-w-md w-full" : ""}`}
                >
                    <CardHeader>
                        <div class="space-y-3">
                            <div class="flex flex-wrap gap-2">
                                {#each post.tags as tag}
                                    <Badge
                                        class="bg-[#10b981]/10 text-[#10b981] border-0 text-xs"
                                    >
                                        {tag}
                                    </Badge>
                                {/each}
                            </div>
                            <CardTitle
                                class="text-xl text-[#e5e5e7] hover:text-[#10b981] transition-colors cursor-pointer"
                            >
                                {post.title}
                            </CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent class="flex-1 flex flex-col space-y-4">
                        <p class="text-[#a1a1aa] leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div
                            class="flex items-center gap-4 text-sm text-[#a1a1aa] pt-2"
                        >
                            <div class="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <Button
                            variant="ghost"
                            class="text-[#10b981] hover:text-[#059669] hover:bg-[#10b981]/10 justify-start px-0 mt-auto"
                        >
                            Read More <ArrowRight size={16} class="ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            {/each}
        </div>
    </div>
</section>
