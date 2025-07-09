<script>
	import { produtos } from '$server/03/produtos.js';
	import { goto } from '$app/navigation';

	let categoria;

	 {
		const { produtos } = params;
		categoria = produtos.find(t => t.categoria === categoria);
	}

	function voltarLista() {
		goto('/dicionario'); 
	}
</script>

<style>
	button.voltar {
		display: block;
		margin: 2rem auto; 
		padding: 0.5rem 1.5rem;
		font-size: 1rem;
		cursor: pointer;
	}
</style>

{#if categoria}
	<h2>{categoria.produtos}</h2>
	<ul>
		{#each categoria.produtos as produtos}
			<li>{produtos}</li>
		{/each}
	</ul>
{:else}
	<h2>Produto não encontrado!</h2>
{/if}

<button class="voltar" on:click={voltarLista}>← Voltar para lista</button>
