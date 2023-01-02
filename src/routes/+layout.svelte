<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Central</title>
	<meta name="description" content="Entradas Online" />
</svelte:head>

<nav class="navbar bg-black">
	<div class="navbar-start" />
	<div class="navbar-center">
		<img
			src="images/logo_blanco_subrayado.webp"
			alt="centralticket_logo.webp"
			class="h-16 btn bg-black border-0"
		/>
	</div>
	<div class="navbar-end" />
</nav>

<main>
	<slot />
</main>
