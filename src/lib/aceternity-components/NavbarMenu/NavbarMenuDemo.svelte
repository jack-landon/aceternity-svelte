<script lang="ts">
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '.';

	let active: string | null = null;
</script>

<div class="relative flex w-full items-center justify-center">
	<div class={'fixed inset-x-0 top-12 z-50 mx-auto max-w-2xl'}>
		<NavbarMenu {active}>
			<MenuItem {active} item="Services">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="/web-dev">Web Development</HoveredLink>
					<HoveredLink href="/interface-design">Interface Design</HoveredLink>
					<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
					<HoveredLink href="/branding">Branding</HoveredLink>
				</div>
			</MenuItem>
			<MenuItem {active} item="Products">
				<div class="  grid grid-cols-2 gap-10 p-4 text-sm">
					<ProductItem
						title="Algochurn"
						href="https://algochurn.com"
						src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
						description="Prepare for tech interviews like never before."
					/>
					<ProductItem
						title="Tailwind Master Kit"
						href="https://tailwindmasterkit.com"
						src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
						description="Production ready Tailwind css components for your next project"
					/>
					<ProductItem
						title="Moonbeam"
						href="https://gomoonbeam.com"
						src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
						description="Never write from scratch again. Go from idea to blog in minutes."
					/>
					<ProductItem
						title="Rogue"
						href="https://userogue.com"
						src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
						description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
					/>
				</div>
			</MenuItem>
			<MenuItem {active} item="Pricing">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="/hobby">Hobby</HoveredLink>
					<HoveredLink href="/individual">Individual</HoveredLink>
					<HoveredLink href="/team">Team</HoveredLink>
					<HoveredLink href="/enterprise">Enterprise</HoveredLink>
				</div>
			</MenuItem>
		</NavbarMenu>
	</div>
	<p class="text-black dark:text-white">The Navbar will show on top of the page</p>
</div>
