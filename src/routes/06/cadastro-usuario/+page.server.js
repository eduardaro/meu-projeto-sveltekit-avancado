import { fail, redirect } from '@sveltejs/kit';

/** retorna true se a string contem pelo menos um dos caractereres */
function contem(string, caracteres) {
  for (const caractere of caracteres) {
    if (string.includes(caractere)) return true;
  }
  return false;

}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const dados = {
    nome : data.get('nome'),
     email : data.get('email'),
    nascimento : data.get('nascimento'),
    senha : data.get('senha'),
     confirmacaosenha : data.get('confirmacaosenha'),
    erros: []
    }

    if (!dados.nome || !dados.email || !dados.nascimento || !dados.senha || !dados.confirmacaosenha)
      dados.erros.push('Preencha todos os campos.');

    if (!dados.email.includes('@'))
      dados.erros.push ('Email inválido.');

    if (!dados.senha != dados.confirmacaosenha) dados.erros.push('Senha e confirmação de senha não conferem.');
      return fail(400, { error: "Senha não conferem." })

    if (!contem(senha, "abcdefghijklmnopqrstuvwxyz")
      || !contem(senha, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      || !contem(senha, "0123456789")
      || !contem(senha, "!@#$%¨&*()-_=+")

    )

      return fail(400, { error: 'A senha deve ter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial' })


    let agora = new Date();
    let nasc = new Date(nascimento)
    if (agora - nasc < 378691200000)
      return fail(400, { error: 'Você ainda não completou 12 anos!', nome, email, nascimento });

    redirect(303, '/06/profile');
  }
};