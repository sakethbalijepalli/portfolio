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
    import XLogo from "./icons/XLogo.svelte";
    import DiscordLogo from "./icons/DiscordLogo.svelte";
    import Button from "./ui/button.svelte";
    import Input from "./ui/input.svelte";
    import Textarea from "./ui/textarea.svelte";
    import { myData } from "$lib/data/myData";
    import { toast } from "$lib/stores/toaster.store";
    import { PUBLIC_WEB3FORMS_ACCESS_KEY } from "$env/static/public";

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
        {
            icon: XLogo,
            label: "X",
            value: "x.com/saketh_b98",
            href: myData.profile.x,
        },
        {
            icon: DiscordLogo,
            label: "Discord",
            value: "312264899843588096",
            href: myData.profile.discord,
        },
    ];

    let isSubmitting = false;

    async function handleSubmit(e: Event) {
        e.preventDefault();
        isSubmitting = true;

        const formElement = e.target as HTMLFormElement;
        const formDataObj = new FormData(formElement);

        const accessKey = PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (accessKey) {
            formDataObj.append("access_key", accessKey);
        } else {
            toast({
                title: "Configuration error",
                description: "Access key is missing. Check .env file.",
                variant: "destructive",
            });
            isSubmitting = false;
            return;
        }

        formDataObj.append(
            "subject",
            `New message from portfolio: ${formData.name}`,
        );

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formDataObj,
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Message sent",
                    description:
                        "Thanks for reaching out. I'll get back to you soon.",
                });
                formData = { name: "", email: "", message: "" };
            } else {
                toast({
                    title: "Something went wrong",
                    description:
                        result.message || "Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="contact" class="py-16 border-t border-[#3D3527]">
    <div class="mb-12">
        <h2 class="font-display text-3xl md:text-4xl text-[#EDE6D6] mb-3 flex items-baseline gap-3">
            <span class="font-mono text-lg text-[#D9A441]">08</span>
            Get in touch
        </h2>
        <p class="text-[#9C917C]">
            Interested in working together or just want to say hi?
        </p>
    </div>

        <div class="grid md:grid-cols-2 gap-10 md:gap-16">
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-semibold text-[#EDE6D6] mb-3">
                        Let's connect
                    </h3>
                    <p class="text-[#9C917C] leading-relaxed mb-4">
                        I'm always open to discussing new opportunities,
                        collaborating on interesting projects, or just having a
                        chat about technology and software engineering.
                    </p>
                    <div class="flex items-center gap-2 text-[#9C917C] text-sm">
                        <MapPin size={16} class="text-[#D9A441]" />
                        <span>{myData.profile.location}</span>
                    </div>
                </div>

                <div class="border-t border-[#3D3527]">
                    {#each contactLinks as link}
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group flex items-center gap-4 py-4 border-b border-[#3D3527] hover:bg-[#221D16] transition-colors -mx-2 px-2"
                        >
                            <svelte:component
                                this={link.icon}
                                size={18}
                                class="text-[#D9A441] shrink-0"
                            />
                            <div>
                                <p class="text-xs text-[#7A7060] font-mono">
                                    {link.label}
                                </p>
                                <p class="text-[#EDE6D6] group-hover:text-[#D9A441] transition-colors">
                                    {link.value}
                                </p>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>

            <div class="border border-[#3D3527] p-6 md:p-8">
                <form
                    method="POST"
                    on:submit|preventDefault={handleSubmit}
                    class="space-y-4"
                >
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-[#EDE6D6] mb-2"
                        >
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            bind:value={formData.name}
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium text-[#EDE6D6] mb-2"
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
                        />
                    </div>

                    <div>
                        <label
                            for="message"
                            class="block text-sm font-medium text-[#EDE6D6] mb-2"
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
                            class="resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        class="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {#if isSubmitting}
                            <span class="animate-spin mr-2">⏳</span>
                            Sending...
                        {:else}
                            <Send size={16} class="mr-2" />
                            Send message
                        {/if}
                    </Button>
                </form>
            </div>
        </div>
</section>
