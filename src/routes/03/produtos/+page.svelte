<script>
    import { produtos } from '$lib/server/03/produtos.js';

	let categoria = '';
	let filtradas = produtos;

	let produtosFiltrados  = '';

	function buscar() {
		if (palavra.trim() === '') {
			filtradas = produtos
				? produtos.filter(p => p.categoria.startsWith(produtosFiltrados.toLowerCase()))
				: produtos;
		} else {
			filtradas = produtos.filter(p => p.categoria.toLowerCase().startsWith(categoria.toLowerCase()));
		}
	}
</script>
