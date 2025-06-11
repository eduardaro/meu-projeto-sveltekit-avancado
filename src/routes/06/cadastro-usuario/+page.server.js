import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const email = data.get('email');
    const nascimento = data.get('nascimento');


    if (!nome || !email || !nascimento ) return fail(400, { error: 'Preencha todas os campos.', nome,  email, nascimento });

    if (!email.includes('@')) return fail(400, { error: 'Email inválido.', email });


    let agora= new Date();
    let nasc = new Date(nascimento)
    if (agora - nasc < 378691200000)
        return fail (400, {error: 'Você ainda não completou 12 anos!', nome, email, nascimento});

    redirect(303, '/06/profile');
  }
};