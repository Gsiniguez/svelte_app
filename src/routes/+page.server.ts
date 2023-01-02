import { prisma } from '$lib/server/prisma';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		users: await prisma.user.findMany({
			where: { state: { in: ["Active"] } }
		})
	};
};

export const actions: Actions = {
	create: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());
		console.log(form);
		await prisma.user.create({
			data: {
				email: form.email.toString()
			}
		}).catch(err => {
			throw error(502, "Email existente")
		})
	},
	deleteItem: async ({ request }) => {
		console.log("DELETE EXCUTED")
		const form = Object.fromEntries(await request.formData());

		await prisma.user.update({
			where: { id: +form.id! ?? undefined },
			data: {
				state: "Delete"
			}
		})

		return { success: true }
	}
};
