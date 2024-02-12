<script>
	import { CardStack } from '.';

	const CARDS = [
		{
			id: 0,
			name: 'Manu Arora',
			designation: 'Senior Software Engineer',
			content:
				"These cards are amazing, <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>I want to use them</span> in my project. Framer motion is a godsend ngl tbh fam 🙏"
		},
		{
			id: 1,
			name: 'Elon Musk',
			designation: 'Senior Shitposter',
			content:
				"I dont like this Twitter thing, <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>deleting it right away</span> because yolo. Instead, I would like to call it <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>X.com</span> so that it can easily be confused with adult sites."
		},
		{
			id: 2,
			name: 'Tyler Durden',
			designation: 'Manager Project Mayhem',
			content:
				"The first rule of <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>Fight Club</span> is that you do not talk about fight club. The second rule of <span class='bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500'>Fight club</span> is that you DO NOT TALK about fight club."
		}
	];
</script>

<div class="flex h-[40rem] w-full items-center justify-center">
	<CardStack items={CARDS} />
</div>
