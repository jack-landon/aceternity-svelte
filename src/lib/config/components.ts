import ThreeDCardImage from '$lib/assets/component-preview-images/3d-card.png?enhanced';
import ThreeDPinImage from '$lib/assets/component-preview-images/3d-pin.png?enhanced';
import AnimatedTooltipImage from '$lib/assets/component-preview-images/animated-tooltip.png?enhanced';
import BackgroundBeamsImage from '$lib/assets/component-preview-images/background-beams.png?enhanced';
import BackgroundBoxesImage from '$lib/assets/component-preview-images/background-boxes.png?enhanced';
import BackgroundGradientImage from '$lib/assets/component-preview-images/background-gradient.png?enhanced';
import BentoGridImage from '$lib/assets/component-preview-images/bento-grid.png?enhanced';
import CardHoverEffectImage from '$lib/assets/component-preview-images/card-hover-effect.png?enhanced';
import CardStackImage from '$lib/assets/component-preview-images/card-stack.png?enhanced';
import ContainerScrollAnimationImage from '$lib/assets/component-preview-images/container-scroll-animation.png?enhanced';
import DirectionAwareHoverImage from '$lib/assets/component-preview-images/direction-aware-hover.png?enhanced';
import EvervaultCardImage from '$lib/assets/component-preview-images/evervault-card.png?enhanced';
import FloatingNavbarImage from '$lib/assets/component-preview-images/floating-navbar.png?enhanced';
import FollowingPointerImage from '$lib/assets/component-preview-images/following-pointer.png?enhanced';
import GlowingStarsImage from '$lib/assets/component-preview-images/glowing-stars.png?enhanced';
import GoogleGeminiEffectImage from '$lib/assets/component-preview-images/google-gemini-effect.png?enhanced';
import GradientAnimationImage from '$lib/assets/component-preview-images/gradient-animation.png?enhanced';
import GridAndDotBackgroundsImage from '$lib/assets/component-preview-images/grid-and-dot-backgrounds.png?enhanced';
import HeroParallaxImage from '$lib/assets/component-preview-images/hero-parallax.png?enhanced';
import ImagesSliderImage from '$lib/assets/component-preview-images/images-slider.png?enhanced';
import InfiniteMovingCardsImage from '$lib/assets/component-preview-images/infinite-moving-cards.png?enhanced';
import LampEffectImage from '$lib/assets/component-preview-images/lamp-effect.png?enhanced';
import LayoutGridImage from '$lib/assets/component-preview-images/layout-grid.png?enhanced';
import MacbookScrollImage from '$lib/assets/component-preview-images/macbook-scroll.webp?enhanced';
import MeteorsImage from '$lib/assets/component-preview-images/meteors.png?enhanced';
import MovingBorderImage from '$lib/assets/component-preview-images/moving-border.png?enhanced';
import MultiStepLoaderImage from '$lib/assets/component-preview-images/multi-step-loader.webp?enhanced';
import NavbarMenuImage from '$lib/assets/component-preview-images/navbar-menu.png?enhanced';
import ParallaxScrollImage from '$lib/assets/component-preview-images/parallax-scroll.png?enhanced';
import SignupForm from '$lib/assets/component-preview-images/signup-form.webp?enhanced';
import SparklesImage from '$lib/assets/component-preview-images/sparkles.png?enhanced';
import SpotlightImage from '$lib/assets/component-preview-images/spotlight.png?enhanced';
import StickyScrollRevealImage from '$lib/assets/component-preview-images/sticky-scroll-reveal.png?enhanced';
import SvgMaskEffectImage from '$lib/assets/component-preview-images/svg-mask-effect.png?enhanced';
import TabsImage from '$lib/assets/component-preview-images/tabs.png?enhanced';
import TailwindCssButtonsImage from '$lib/assets/component-preview-images/tailwind-css-buttons.png?enhanced';
import TextGenerateEffectImage from '$lib/assets/component-preview-images/text-generate-effect.png?enhanced';
import TextRevealCardImage from '$lib/assets/component-preview-images/text-reveal-card.png?enhanced';
import TracingBeamImage from '$lib/assets/component-preview-images/tracing-beam.png?enhanced';
import TypewriterEffectImage from '$lib/assets/component-preview-images/typewriter-effect.png?enhanced';
import WavyBackgroundImage from '$lib/assets/component-preview-images/wavy-background.png?enhanced';

export const components = [
	{
		component: 'accordion',
		name: 'Accordion',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/accordion/Accordion.svelte',
			'src/lib/components/ui/accordion/AccordionContent.svelte',
			'src/lib/components/ui/accordion/AccordionItem.svelte',
			'src/lib/components/ui/accordion/AccordionTrigger.svelte',
			'src/lib/components/ui/accordion/index.ts'
		]
	},
	{
		component: 'alert',
		name: 'Alert',
		files: [
			'src/lib/components/ui/alert/Alert.svelte',
			'src/lib/components/ui/alert/AlertDescription.svelte',
			'src/lib/components/ui/alert/AlertTitle.svelte',
			'src/lib/components/ui/alert/index.ts'
		]
	},
	{
		component: 'alert-dialog',
		name: 'Alert Dialog',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/alert-dialog/AlertDialogAction.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogCancel.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogContent.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogDescription.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogFooter.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogHeader.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogOverlay.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogPortal.svelte',
			'src/lib/components/ui/alert-dialog/AlertDialogTitle.svelte',
			'src/lib/components/ui/alert-dialog/index.ts'
		]
	},
	{
		component: 'aspect-ratio',
		name: 'Aspect Ratio',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/aspect-ratio/AspectRatio.svelte',
			'src/lib/components/ui/aspect-ratio/index.ts'
		]
	},
	{
		component: 'avatar',
		name: 'Avatar',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/avatar/Avatar.svelte',
			'src/lib/components/ui/avatar/AvatarFallback.svelte',
			'src/lib/components/ui/avatar/AvatarImage.svelte',
			'src/lib/components/ui/avatar/index.ts'
		]
	},
	{
		component: 'badge',
		name: 'Badge',
		files: ['src/lib/components/ui/badge/Badge.svelte', 'src/lib/components/ui/badge/index.ts']
	},
	{
		component: 'button',
		name: 'Button',
		files: ['src/lib/components/ui/button/Button.svelte', 'src/lib/components/ui/button/index.ts']
	},
	{
		component: 'card',
		name: 'Card',
		files: [
			'src/lib/components/ui/card/Card.svelte',
			'src/lib/components/ui/card/CardContent.svelte',
			'src/lib/components/ui/card/CardDescription.svelte',
			'src/lib/components/ui/card/CardFooter.svelte',
			'src/lib/components/ui/card/CardHeader.svelte',
			'src/lib/components/ui/card/CardTitle.svelte',
			'src/lib/components/ui/card/index.ts'
		]
	},
	//   {
	//     component: "calendar",
	//     name: "Calendar",
	//     dependencies: ["react-day-picker", "date-fns"],
	//     files: ["components/ui/calendar.tsx"]
	//   },
	{
		component: 'checkbox',
		name: 'Checkbox',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/checkbox/Checkbox.svelte',
			'src/lib/components/ui/checkbox/index.ts'
		]
	},
	{
		component: 'collapsible',
		name: 'Collapsible',
		dependencies: ['radix-svelte'],
		files: ['src/lib/components/ui/collapsible/index.ts']
	},
	//   {
	//     component: "command",
	//     name: "Command",
	//     dependencies: ["cmdk"],
	//     files: ["components/ui/command.tsx"]
	//   },
	//   {
	//     component: "context-menu",
	//     name: "Context Menu",
	//     dependencies: ["@radix-ui/react-context-menu"],
	//     files: ["components/ui/context-menu.tsx"]
	//   },
	{
		component: 'dialog',
		name: 'Dialog',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/dialog/DialogContent.svelte',
			'src/lib/components/ui/dialog/DialogDescription.svelte',
			'src/lib/components/ui/dialog/DialogFooter.svelte',
			'src/lib/components/ui/dialog/DialogHeader.svelte',
			'src/lib/components/ui/dialog/DialogOverlay.svelte',
			'src/lib/components/ui/dialog/DialogPortal.svelte',
			'src/lib/components/ui/dialog/DialogTitle.svelte',
			'src/lib/components/ui/dialog/index.ts'
		]
	},
	//   {
	//     component: "dropdown-menu",
	//     name: "Dropdown Menu",
	//     dependencies: ["@radix-ui/react-dropdown-menu"],
	//     files: ["components/ui/dropdown-menu.tsx"]
	//   },
	{
		component: 'hover-card',
		name: 'Hover Card',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/hover-card/HoverCardContent.svelte',
			'src/lib/components/ui/hover-card/index.ts'
		]
	},
	{
		component: 'input',
		name: 'Input',
		files: ['src/lib/components/ui/input/Input.svelte', 'src/lib/components/ui/input/index.ts']
	},
	{
		component: 'label',
		name: 'Label',
		dependencies: ['radix-svelte'],
		files: ['src/lib/components/ui/label/Label.svelte', 'src/lib/components/ui/label/index.ts']
	},
	//   {
	//     component: "menubar",
	//     name: "Menubar",
	//     dependencies: ["@radix-ui/react-menubar"],
	//     files: ["components/ui/menubar.tsx"]
	//   },
	//   {
	//     component: "navigation-menu",
	//     name: "Navigation Menu",
	//     dependencies: ["@radix-ui/react-navigation-menu"],
	//     files: ["components/ui/navigation-menu.tsx"]
	//   },
	{
		component: 'pagination',
		name: 'Pagination',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/pagination/Pagination.svelte',
			'src/lib/components/ui/pagination/PaginationItem.svelte',
			'src/lib/components/ui/pagination/PaginationLink.svelte',
			'src/lib/components/ui/pagination/PaginationPrevButton.svelte',
			'src/lib/components/ui/pagination/PaginationNextButton.svelte',
			'src/lib/components/ui/pagination/PaginationEllipsis.svelte',
			'src/lib/components/ui/pagination/index.ts'
		]
	},
	//   {
	//     component: "popover",
	//     name: "Popover",
	//     dependencies: ["@radix-ui/react-popover"],
	//     files: ["components/ui/popover.tsx"]
	//   },
	{
		component: 'progress',
		name: 'Progress',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/progress/Progress.svelte',
			'src/lib/components/ui/progress/index.ts'
		]
	},
	{
		component: 'radio-group',
		name: 'Radio Group',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/radio-group/RadioGroup.svelte',
			'src/lib/components/ui/radio-group/RadioGroupItem.svelte',
			'src/lib/components/ui/radio-group/index.ts'
		]
	},
	//   {
	//     component: "scroll-area",
	//     name: "Scroll-area",
	//     dependencies: ["@radix-ui/react-scroll-area"],
	//     files: ["components/ui/scroll-area.tsx"]
	//   },
	//   {
	//     component: "select",
	//     name: "Select",
	//     dependencies: ["@radix-ui/react-select"],
	//     files: ["components/ui/select.tsx"]
	//   },
	{
		component: 'separator',
		name: 'Separator',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/separator/Separator.svelte',
			'src/lib/components/ui/separator/index.ts'
		]
	},
	{
		component: 'sheet',
		name: 'Sheet',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/sheet/SheetContent.svelte',
			'src/lib/components/ui/sheet/SheetDescription.svelte',
			'src/lib/components/ui/sheet/SheetFooter.svelte',
			'src/lib/components/ui/sheet/SheetHeader.svelte',
			'src/lib/components/ui/sheet/SheetOverlay.svelte',
			'src/lib/components/ui/sheet/SheetPortal.svelte',
			'src/lib/components/ui/sheet/SheetTitle.svelte',
			'src/lib/components/ui/sheet/index.ts'
		]
	},
	{
		component: 'skeleton',
		name: 'Skeleton',
		files: [
			'src/lib/components/ui/skeleton/Skeleton.svelte',
			'src/lib/components/ui/skeleton/index.ts'
		]
	},
	{
		component: 'slider',
		name: 'Slider',
		dependencies: ['radix-svelte'],
		files: ['src/lib/components/ui/slider/Slider.svelte', 'src/lib/components/ui/slider/index.ts']
	},
	{
		component: 'switch',
		name: 'Switch',
		dependencies: ['radix-svelte'],
		files: ['src/lib/components/ui/switch/Switch.svelte', 'src/lib/components/ui/switch/index.ts']
	},
	{
		component: 'table',
		name: 'Table',
		files: [
			'src/lib/components/ui/table/Table.svelte',
			'src/lib/components/ui/table/TableBody.svelte',
			'src/lib/components/ui/table/TableCaption.svelte',
			'src/lib/components/ui/table/TableCell.svelte',
			'src/lib/components/ui/table/TableFooter.svelte',
			'src/lib/components/ui/table/TableHead.svelte',
			'src/lib/components/ui/table/TableHeader.svelte',
			'src/lib/components/ui/table/TableRow.svelte',
			'src/lib/components/ui/table/index.ts'
		]
	},
	{
		component: 'tabs',
		name: 'Tabs',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/tabs/TabsContent.svelte',
			'src/lib/components/ui/tabs/TabsList.svelte',
			'src/lib/components/ui/tabs/TabsTrigger.svelte',
			'src/lib/components/ui/tabs/index.ts'
		]
	},
	{
		component: 'textarea',
		name: 'Textarea',
		files: [
			'src/lib/components/ui/textarea/Textarea.svelte',
			'src/lib/components/ui/textarea/index.ts'
		]
	},
	//   {
	//     component: "toast",
	//     name: "Toast",
	//     dependencies: ["@radix-ui/react-toast"],
	//     files: ["components/ui/toast.tsx", "components/ui/use-toast.ts"]
	//   },
	{
		component: 'toggle',
		name: 'Toggle',
		dependencies: ['radix-svelte'],
		files: ['src/lib/components/ui/toggle/Toggle.svelte', 'src/lib/components/ui/toggle/index.ts']
	},
	{
		component: 'tooltip',
		name: 'Tooltip',
		dependencies: ['radix-svelte'],
		files: [
			'src/lib/components/ui/tooltip/TooltipContent.svelte',
			'src/lib/components/ui/tooltip/index.ts'
		]
	}
];

export const aceternityComponentsIds = [
	'3d-card-effect',
	'3d-pin',
	'animated-tooltip',
	'background-beams',
	'background-boxes',
	'background-gradient',
	'bento-grid',
	'card-hover-effect',
	'card-stack',
	'container-scroll-animation',
	'direction-aware-hover',
	'evervault-card',
	'floating-navbar',
	'following-pointer',
	'glowing-stars',
	'google-gemini-effect',
	'gradient-animation',
	'grid-and-dot-backgrounds',
	'hero-parallax',
	'images-slider',
	'infinite-moving-cards',
	'lamp-effect',
	'layout-grid',
	'macbook-scroll',
	'meteors',
	'moving-border',
	'multi-step-loader',
	'navbar-menu',
	'parallax-scroll',
	'signup-form',
	'sparkles',
	'spotlight',
	'sticky-scroll-reveal',
	'svg-mask-effect',
	'tabs',
	'tailwind-css-buttons',
	'text-generate-effect',
	'text-reveral-card',
	'tracing-beam',
	'typewriter-effect',
	'wavy-background'
];

export const aceternityComponents = [
	{
		id: '3d-card-effect',
		name: '3D Card Effect',
		description: 'A card perspective effect, hover over the card to elevate card elements.',
		thumbnail: ThreeDCardImage,
		video: 'https://assets.aceternity.com/cloudinary_bkp/3d-card.mp4',
		file: '3d-card-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: '3d-pin',
		name: '3D Pin',
		description: 'A gradient pin that animates on hover, perfect for product links',
		thumbnail: ThreeDPinImage,
		video: 'https://assets.aceternity.com/cloudinary_bkp/3dpin_g8kfkx.mp4',
		file: '3d-pin.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'animated-tooltip',
		name: 'Animated Tooltip',
		description: 'A cool tooltip that reveals on hover, follows mouse pointer.',
		thumbnail: AnimatedTooltipImage,
		video: '',
		file: 'animated-tooltip.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'background-beams',
		name: 'Background Beams',
		description:
			'Multiple background beams that follow a path of SVG, makes a good hero section background.',
		thumbnail: BackgroundBeamsImage,
		video: '',
		file: 'background-beams.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'background-boxes',
		name: 'Background Boxes',
		description: 'A full width background box container that highlights on hover',
		thumbnail: BackgroundBoxesImage,
		video: '',
		file: 'background-boxes.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'background-gradient',
		name: 'Background Gradient',
		description: 'An animated gradient that sits at the background of a card, button or anything.',
		thumbnail: BackgroundGradientImage,
		video: '',
		file: 'background-gradient.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: true
	},
	{
		id: 'bento-grid',
		name: 'Bento Grid',
		description: 'A skewed grid layout with Title, description and a header component',
		thumbnail: BentoGridImage,
		video: '',
		file: 'bento-grid.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'card-hover-effect',
		name: 'Card Hover Effect',
		description: 'Hover over the cards and the effect slides to the currently hovered card.',
		thumbnail: CardHoverEffectImage,
		video: '',
		file: 'card-hover-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'card-stack',
		name: 'Card Stack',
		description:
			'Cards stack on top of each other after some interval. Perfect for showing testimonials.',
		thumbnail: CardStackImage,
		video: '',
		file: 'card-stack.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'container-scroll-animation',
		name: 'Container Scroll Animation',
		description:
			'A scroll animation that rotates in 3d on scroll. Perfect for hero or marketing sections.',
		thumbnail: ContainerScrollAnimationImage,
		video: '',
		file: 'container-scroll-animation.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'direction-aware-hover',
		name: 'Direction Aware Hover',
		description:
			'A direction aware hover effect using Framer Motion, Tailwindcss and good old javascript.',
		thumbnail: DirectionAwareHoverImage,
		video: '',
		file: 'direction-aware-hover.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'evervault-card',
		name: 'Evervault Card',
		description:
			'A cool card with amazing hover effect, reveals encrypted text and a mixed gradient.',
		thumbnail: EvervaultCardImage,
		video: '',
		file: 'evervault-card.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'floating-navbar',
		name: 'Floating Navbar',
		description: 'A sticky Navbar that hides on scroll, reveals when scrolled up.',
		thumbnail: FloatingNavbarImage,
		video: '',
		file: 'floating-navbar.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'following-pointer',
		name: 'Following Pointer',
		description: 'A custom pointer that follows mouse arrow and animates in pointer and content.',
		thumbnail: FollowingPointerImage,
		video: '',
		file: 'following-pointer.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'glowing-stars',
		name: 'Glowing Stars',
		description: 'Card background stars that animate on hover and animate anyway',
		thumbnail: GlowingStarsImage,
		video: '',
		file: 'glowing-stars.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'google-gemini-effect',
		name: 'Google Gemini Effect',
		description: 'An effect of SVGs as seen on the Google Gemini Website',
		thumbnail: GoogleGeminiEffectImage,
		video: 'https://assets.aceternity.com/cloudinary_bkp/google-gemini.mp4',
		file: 'google-gemini-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'gradient-animation',
		name: 'Gradient Animation',
		description:
			'A smooth and elegant background gradient animation that changes the gradient position over time.',
		thumbnail: GradientAnimationImage,
		video: '',
		file: 'gradient-animation.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'grid-and-dot-backgrounds',
		name: 'Grid and Dot Backgrounds',
		description: 'A simple grid and dots background to make your sections stand out.',
		thumbnail: GridAndDotBackgroundsImage,
		video: '',
		file: 'grid-and-dot-backgrounds.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'hero-parallax',
		name: 'Hero Parallax',
		description: 'A scroll effect with rotation, translation and opacity animations.',
		thumbnail: HeroParallaxImage,
		video: '',
		file: 'hero-parallax.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'images-slider',
		name: 'Images Slider',
		description: 'A full page slider with images that can be navigated with the keyboard.',
		thumbnail: ImagesSliderImage,
		video: '',
		file: 'images-slider.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'infinite-moving-cards',
		name: 'Infinite Moving Cards',
		description:
			'A customizable group of cards that move infinitely in a loop. Made with Framer Motion and Tailwind CSS.',
		thumbnail: InfiniteMovingCardsImage,
		video: '',
		file: 'infinite-moving-cards.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'lamp-effect',
		name: 'Lamp Effect',
		description: 'A lamp effect as seen on linear, great for section headers.',
		thumbnail: LampEffectImage,
		video: '',
		file: 'lamp-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'layout-grid',
		name: 'Layout Grid',
		description:
			'A layout effect that animates the grid item on click, powered by framer motion layout',
		thumbnail: LayoutGridImage,
		video: '',
		file: 'layout-grid.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: true
	},
	{
		id: 'macbook-scroll',
		name: 'Macbook Scroll',
		description: 'Scroll through the page and see the image come out of the screen.',
		thumbnail: MacbookScrollImage,
		video: '',
		file: 'meteors.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-03-01T23:00:00+10:00',
		wip: false
	},
	{
		id: 'meteors',
		name: 'Meteors',
		description: 'A group of beams in the background of a container, sort of like meteors.',
		thumbnail: MeteorsImage,
		video: '',
		file: 'meteors.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'moving-border',
		name: 'Moving Border',
		description:
			'A border that moves around the container. Perfect for making your buttons stand out.',
		thumbnail: MovingBorderImage,
		video: '',
		file: 'moving-border.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	// {
	// 	id: 'multi-step-loader',
	// 	name: 'Multi Step Loader',
	// 	description:
	// 		'A step loader for screens that take a lot of time to load.',
	// 	thumbnail: MultiStepLoaderImage,
	// 	video: '',
	// 	file: 'multi-step-loader.md',
	// 	disabled: false,
	// 	dependencies: ['svelte-motion'],
	// 	props: [{ name: 'className', type: 'string', description: '' }],
	// 	dateModified: '2024-03-08T014:00:00+10:00',
	// 	wip: false
	// },
	{
		id: 'navbar-menu',
		name: 'Navbar Menu',
		description: 'A navbar menu that animates its children on hover, makes a beautiful bignav',
		thumbnail: NavbarMenuImage,
		video: '',
		file: 'navbar-menu.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'parallax-scroll',
		name: 'Parallax Scroll',
		description: 'A grid where two columns scroll in oposite directions, giving a parallax effect.',
		thumbnail: ParallaxScrollImage,
		video: '',
		file: 'parallax-scroll.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'signup-form',
		name: 'Signup Form',
		description:
			"A customizable form built on top of shadcn's input and label, with a touch of framer motion",
		thumbnail: SignupForm,
		video: '',
		file: 'signup-form.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-03-08T01:00:00+10:00',
		wip: false
	},
	{
		id: 'sparkles',
		name: 'Sparkles',
		description:
			'A configurable sparkles component that can be used as a background or as a standalone component.',
		thumbnail: SparklesImage,
		video: '',
		file: 'sparkles.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'spotlight',
		name: 'Spotlight',
		description:
			'A spotlight effect with Tailwind CSS, good for drawing attention to a particular element on the page.',
		thumbnail: SpotlightImage,
		video: '',
		file: 'spotlight.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'sticky-scroll-reveal',
		name: 'Sticky Scroll Reveal',
		description: 'A sticky container that sticks while scrolling, text reveals on scroll',
		thumbnail: StickyScrollRevealImage,
		video: '',
		file: 'sticky-scroll-reveal.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'svg-mask-effect',
		name: 'SVG Mask Effect',
		description:
			'A mask reveal effect, hover the cursor over a container to reveal what is underneath.',
		thumbnail: SvgMaskEffectImage,
		video: '',
		file: 'svg-mask-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'tabs',
		name: 'Tabs',
		description: 'Tabs to switch content, click on a tab to check background animation.',
		thumbnail: TabsImage,
		video: '',
		file: 'tabs.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'tailwind-css-buttons',
		name: 'Tailwind CSS Buttons',
		description: 'A curated list of awesome, battle tested Tailwind CSS buttons components',
		thumbnail: TailwindCssButtonsImage,
		video: '',
		file: 'tailwind-css-buttons.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: true
	},
	{
		id: 'text-generate-effect',
		name: 'Text Generate Effect',
		description: 'A cool text effect that fades in text on page load, one by one.',
		thumbnail: TextGenerateEffectImage,
		video: '',
		file: 'text-generate-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'text-reveal-card',
		name: 'Text Reveal Card',
		description: 'Mousemove effect to reveal text content at the bottom of the card.',
		thumbnail: TextRevealCardImage,
		video: '',
		file: 'text-reveal-card.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'tracing-beam',
		name: 'Tracing Beam',
		description:
			'A Beam that follows the path of an SVG as the user scrolls. Adjusts beam length with scroll speed.',
		thumbnail: TracingBeamImage,
		video:
			'https://assets.aceternity.com/cloudinary_bkp/Screen_Recording_2023-11-22_at_8.45.07_PM_cunzk7.mov',
		file: 'tracing-beam.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'typewriter-effect',
		name: 'Typewriter Effect',
		description: 'Text generates as if it is being typed on the screen.',
		thumbnail: TypewriterEffectImage,
		video: '',
		file: 'typewriter-effect.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	},
	{
		id: 'wavy-background',
		name: 'Wavy Background',
		description: 'A cool background effect with waves that move.',
		thumbnail: WavyBackgroundImage,
		video: '',
		file: 'wavy-background.md',
		disabled: false,
		dependencies: ['svelte-motion'],
		props: [{ name: 'className', type: 'string', description: '' }],
		dateModified: '2024-02-13T01:00:00+10:00',
		wip: false
	}
];
