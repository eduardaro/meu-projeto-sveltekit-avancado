import { produtos } from '$lib/server/03/produtos.js';

export async function load ({params, url}) {
    
	let categoria;

	{
        const produtos = url.searchParams.get('produtos');
		const { produtos } = params;
		categoria = produtos.find(t => t.categoria === categoria);
	}
    const produtosFiltrados = produtos;

    return { produtosFiltrados};

    
    
}