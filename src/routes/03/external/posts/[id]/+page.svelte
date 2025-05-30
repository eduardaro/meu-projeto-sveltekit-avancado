
<script lang="ts">
    export let data;
    const { post, comments } = data;
  </script>
  
  <h1>Postagem #{post.id}</h1>
  <h2>{post.title}</h2>
  <p>{post.body}</p>
  
  <hr>
  
  <h3>Comentários</h3>
  {#if comments.length > 0}
    <ul>
      {#each comments as comment}
        <li>
          <strong>{comment.name}</strong> (<em>{comment.email}</em>)
          <p>{comment.body}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Nenhum comentário encontrado.</p>
  {/if}
  