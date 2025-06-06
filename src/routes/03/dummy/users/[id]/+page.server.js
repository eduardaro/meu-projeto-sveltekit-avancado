export async function load({ fetch }) {
    const resUser = await fetch(`https://dummyjson.com/users${user.id}`);
    const user = await resUser.json();
  
    const resPosts = await fetch(`https://dummyjson.com/users${user.id}/posts`);
    const posts = await resPosts.json();
  
    return { user, posts };
  }