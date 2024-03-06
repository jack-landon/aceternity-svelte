<script lang="ts">
	import {
		Icons,
		// ModeToggle,
		MainNav,
		MobileNav,
		CommandMenu
	} from '@/components/docs';
	// import { buttonVariants } from "@/registry/new-york/ui/button";
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';
	import { Button } from '$components/ui/button';
	import Lightswitch from '$components/ui/Lightswitch.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<nav class="flex items-center">
				<!-- <Button>
					<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
						<div>
							<Icons.gitHub class="h-4 w-4" />
							<span class="sr-only">GitHub</span>
						</div>
					</a>
				</Button> -->
				<Button variant="outline" class="mr-2">
					<a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
						<div>
							<Icons.twitter class="h-3 w-3 fill-current" />
							<span class="sr-only">X (formerly known as Twitter)</span>
						</div>
					</a>
				</Button>

				<Lightswitch />
				<!-- <ModeToggle /> -->
			</nav>
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div>
		</div>
	</div>
</header>
