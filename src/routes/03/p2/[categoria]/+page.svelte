<script>
  let { data } = $props();
</script>

<h2>Produtos da categoria "{data.categoria}"</h2>

<form class="input-group mb-3">
  <input name="busca" class="form-control" placeholder="Busca por título ou descrição" />
  <button class="btn btn-outline-secondary">Buscar</button>
</form>

<div class="list-group">
  {#each data.produtosFiltrados as produto}
    <div href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{produto.titulo}</h5>
        <small class="text-body-secondary">R$ {produto.preco}</small>
      </div>
      <p class="mb-1">{produto.descricao}</p>
      <small class="text-body-secondary">
        {#each produto.categoria as categoria}
          <span class="badge bg-secondary"
            ><a class="text-decoration-none text-light" href="/03/p2/{categoria}">{categoria}</a></span
          >&nbsp;
        {/each}
      </small>
    </div>
  {/each}
</div>

