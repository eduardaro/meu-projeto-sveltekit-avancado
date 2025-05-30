/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
	const postId = params.id;

	const [postRes, commentsRes] = await Promise.all([
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
	]);

	if (!postRes.ok || !commentsRes.ok) {
		throw new Error('Erro ao buscar dados da API');
	}

	const post = await postRes.json();
	const comments = await commentsRes.json();

	return {
		post,
		comments
	};
}
