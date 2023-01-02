<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const deleteItem = async (id: string) => {
		const body = new FormData();
		body.append('id', id);
		const res = await (await fetch(`?/deleteItem`, { method: 'POST', body })).json();
		console.log(res);
		await invalidateAll();
	};
</script>

<div class="flex justify-center my-3">
	<div class="border max-w-lg p-3">
		<form method="POST" action="create">
			<div class="input-group">
				<input placeholder="Email..." name="email" class="input input-bordered" />
				<button type="submit" class="btn">Submit</button>
			</div>
		</form>
	</div>
</div>

{#each data.users as user}
	<div class="flex justify-center my-4">
		<div class="card card-compact w-64 p-2 shadow bg-primary text-primary-content">
			<div class="card-body">
				<div class="card-actions justify-end">
					<button class="btn btn-square btn-sm" on:click={() => deleteItem(`${user.id}`)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/></svg
						>
					</button>
				</div>
				<h3 class="card-title">{user.email}</h3>
				<p>ID: {user.id}</p>
			</div>
		</div>
	</div>
{/each}

<style>
</style>
