<script lang="ts">
	import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex justify-center my-3">
	<div class="border max-w-lg p-3">
		<form method="POST" action="?/create">
			<div class="input-group">
				<input id="name" placeholder="Nombre…" name="name" class="input input-bordered" />
				<button type="submit" class="btn">Submit</button>
			</div>
		</form>
	</div>
</div>

{#each data.users as user}
	<div class="flex justify-center my-4">
		<div class="card card-compact w-64 p-2 shadow bg-primary text-primary-content">
			<div class="card-body">
				<h3 class="card-title">{user.name}</h3>
				<p>ID: {user.id}</p>
			</div>
		</div>
	</div>
{/each}

<style>
</style>
