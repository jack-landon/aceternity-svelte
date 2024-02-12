<script lang="ts">
	import { useElementScroll, useTransform } from 'svelte-motion';
	import { GoogleGeminiEffect } from '.';

	const ref: HTMLDivElement = {};

	// const scrollMotionValue = useElementScroll({
	// 	target: ref,
	// 	offset: ['start start', 'end start']
	// });

	const scrollMotionValue = useElementScroll(ref);

	const pathLengthFirst = useTransform(scrollMotionValue.scrollYProgress, [0, 0.8], [0.2, 1.2]);
	const pathLengthSecond = useTransform(scrollMotionValue.scrollYProgress, [0, 0.8], [0.15, 1.2]);
	const pathLengthThird = useTransform(scrollMotionValue.scrollYProgress, [0, 0.8], [0.1, 1.2]);
	const pathLengthFourth = useTransform(scrollMotionValue.scrollYProgress, [0, 0.8], [0.05, 1.2]);
	const pathLengthFifth = useTransform(scrollMotionValue.scrollYProgress, [0, 0.8], [0, 1.2]);
</script>

<div
	class="relative h-[400vh] w-full overflow-clip rounded-md bg-black pt-40 dark:border dark:border-white/[0.1]"
	bind:this={scrollMotionValue.ref}
>
	<GoogleGeminiEffect
		pathLengths={[
			pathLengthFirst,
			pathLengthSecond,
			pathLengthThird,
			pathLengthFourth,
			pathLengthFifth
		]}
	/>
</div>
