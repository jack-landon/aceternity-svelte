<script lang="ts">
	import { Home, MessageCircle, User } from 'lucide-svelte';
	import FloatingNavbar from './FloatingNavbar.svelte';

	const navItems = [
		{
			name: 'Home',
			link: '/',
			icon: Home
		},
		{
			name: 'About',
			link: '/',
			icon: User
		},
		{
			name: 'Contact',
			link: '/',
			icon: MessageCircle
		}
	];
</script>

<div class="relative w-full">
	<FloatingNavbar {navItems} />
	<div
		class="relative grid h-[40rem] w-full grid-cols-1 rounded-md border border-neutral-200 bg-white dark:border-white/[0.2] dark:bg-black"
	>
		<p class="mt-40 text-center text-4xl font-bold text-neutral-600 dark:text-white">
			Scroll back up to reveal Navbar
		</p>
		<div class="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
	</div>
</div>
