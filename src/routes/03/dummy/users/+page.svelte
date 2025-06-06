<script>
    let { data } = $props();
</script>

<h3> Usúarios </h3>
<form>
    <input name="pais" placeholder="Filtrar por país" />
    <button>Filtrar</button>
</form>
<ul>
    {#each data.users.users as user }
    <li><a href="/03/dummy/users/{user.id}">
        {user.fisrtName} {user.lastName} ({user.address.country})
        </a>
    </li>
    {/each}
</ul>