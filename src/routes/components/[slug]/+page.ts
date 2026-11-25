import { redirect } from '@sveltejs/kit';
// import { getDoc } from '$lib/utils';
import { error } from '@sveltejs/kit';
import { aceternityComponents } from '@/config/components.js';

// Prerender every component page, not only the ones the crawler finds links to
export function entries() {
	return aceternityComponents.map((component) => ({ slug: component.id }));
}

export async function load(event) {
	try {
		console.log('Entering', event.params.slug);

		const component = await import(`../../../content/components/${event.params.slug}.md`);

		console.log(component);

		const componentDetails = aceternityComponents.find(
			(component) => component.id === event.params.slug
		);

		console.log('componentDetails', componentDetails);

		if (!componentDetails) {
			redirect(301, '/components');
		}

		return {
			content: component.default,
			metadata: component.metadata,
			componentDetails
		};
	} catch (e) {
		console.log(e);
		error(404, `Could not find ${event.params.slug}`);
	}
}
