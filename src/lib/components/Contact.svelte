<script lang="ts">
    import {
        Mail,
        Linkedin,
        Github,
        MapPin,
        Code,
        Instagram,
        Send,
    } from "lucide-svelte";
    import Card from "./ui/card.svelte";
    import CardContent from "./ui/card-content.svelte";
    import Button from "./ui/button.svelte";
    import Input from "./ui/input.svelte";
    import Textarea from "./ui/textarea.svelte";
    import { myData } from "$lib/data/myData";
    import { toast } from "$lib/stores/toaster.store";

    let formData = {
        name: "",
        email: "",
        message: "",
    };

    const contactLinks = [
        {
            icon: Mail,
            label: "Email",
            value: myData.profile.email,
            href: `mailto:${myData.profile.email}`,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/sakethbalijepalli",
            href: myData.profile.linkedin,
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/sakethbalijepalli",
            href: myData.profile.github,
        },
        {
            icon: Code,
            label: "LeetCode",
            value: "leetcode.com/u/sakethbalijepalli",
            href: myData.profile.leetcode,
        },
        {
            icon: Instagram,
            label: "Instagram",
            value: "instagram.com/saketh_balijepalli",
            href: myData.profile.instagram,
        },
    ];

    function handleSubmit(e: Event) {
        // e.preventDefault() is handled by on:submit|preventDefault directive
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon!",
        });
        formData = { name: "", email: "", message: "" };
    }
</script>

```
<section id="contact" class="py-20 bg-[#0f0f10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#e5e5e7] mb-4">
                Get In <span class="text-[#10b981]">Touch</span>
            </h2>
            <div class="w-20 h-1 bg-[#10b981] mx-auto"></div>
            <p class="text-[#a1a1aa] mt-4">
                Interested in working together or just want to say hi?
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div class="space-y-6">
                <div>
                    <h3 class="text-2xl font-semibold text-[#e5e5e7] mb-4">
                        Let's Connect
                    </h3>
                    <p class="text-[#a1a1aa] leading-relaxed mb-6">
                        I'm always open to discussing new opportunities,
                        collaborating on interesting projects, or just having a
                        chat about technology and software engineering.
                    </p>
                    <div class="flex items-center gap-2 text-[#a1a1aa]">
                        <MapPin size={18} class="text-[#10b981]" />
                        <span>{myData.profile.location}</span>
                    </div>
                </div>

                <div class="space-y-4">
                    {#each contactLinks as link}
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="block"
                        >
                            <Card
                                class="bg-[#151518] border-[#2d2d2d] hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardContent
                                    class="p-4 flex items-center gap-4"
                                >
                                    <div class="p-3 bg-[#10b981]/10 rounded-lg">
                                        <svelte:component
                                            this={link.icon}
                                            size={20}
                                            class="text-[#10b981]"
                                        />
                                    </div>
                                    <div>
                                        <p class="text-sm text-[#a1a1aa]">
                                            {link.label}
                                        </p>
                                        <p class="text-[#e5e5e7] font-medium">
                                            {link.value}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    {/each}
                </div>
            </div>

            <Card class="bg-[#151518] border-[#2d2d2d]">
                <CardContent class="p-6">
                    <form
                        on:submit|preventDefault={handleSubmit}
                        class="space-y-4"
                    >
                        <div>
                            <label
                                for="name"
                                class="block text-sm font-medium text-[#e5e5e7] mb-2"
                            >
                                Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                bind:value={formData.name}
                                placeholder="Your name"
                                required
                                class="bg-[#0a0a0b] border-[#2d2d2d] text-[#e5e5e7] focus:border-[#10b981]"
                            />
                        </div>

                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-[#e5e5e7] mb-2"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                bind:value={formData.email}
                                placeholder="your.email@example.com"
                                required
                                class="bg-[#0a0a0b] border-[#2d2d2d] text-[#e5e5e7] focus:border-[#10b981]"
                            />
                        </div>

                        <div>
                            <label
                                for="message"
                                class="block text-sm font-medium text-[#e5e5e7] mb-2"
                            >
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                bind:value={formData.message}
                                placeholder="Your message..."
                                required
                                rows={6}
                                class="bg-[#0a0a0b] border-[#2d2d2d] text-[#e5e5e7] focus:border-[#10b981] resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            class="w-full bg-[#10b981] hover:bg-[#059669] text-white"
                        >
                            <Send size={16} class="mr-2" />
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>
</section>
