import { prisma } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		users: await prisma.user.findMany()
	};
};

export const actions: Actions = {
	create: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());
		console.log(form);
		await prisma.user.create({
			data: {
				name: form.name.toString()
			}
		});
	}
};
