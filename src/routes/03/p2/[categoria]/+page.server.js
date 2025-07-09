import { produtos } from '$lib/server/03/produtos.js';

export function load({ params, url }) {
    let busca = url.searchParams.get('busca');
    if (!busca) busca = '';
    else busca = busca.toLowerCase();

    let produtosFiltrados = [];
    for (const produto of produtos) {
        if (
            produto.categoria.includes(params.categoria) &&
            (
                busca === '' ||
                produto.titulo.toLowerCase().includes(busca) ||
                produto.descricao.toLowerCase().includes(busca)
            )
        )
            produtosFiltrados.push(produto);
        }
    return { produtosFiltrados, categoria: params.categoria}
    }