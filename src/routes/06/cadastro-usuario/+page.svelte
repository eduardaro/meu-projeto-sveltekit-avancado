<script>
    let { form } = $props();
  </script>
  
  <h2>Cadastro do Úsuario</h2>
  <form method="POST">
    <input name="nome" type="text" placeholder="Nome de usuário" value={form?.email || ''} required />
    <input name="email" type="email" placeholder="E-mail" required />
    <input name="nascimento" type="date" placeholder="Data de nascimento" required />

    <button>Entrar</button>
  </form>
  
  {#if form?.error}
    <p style="color: red">{form.error}</p>
  {/if}