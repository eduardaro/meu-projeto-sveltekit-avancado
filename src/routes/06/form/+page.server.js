export const actions = {
    default: async ({ request }) => {
      const data = await request.formData();
      const email = data.get('email');
      const senha = data.get('senha');
  
      if (!email || !senha) return { status: 400 };
      if (senha !== '1234') return { status: 401 };
  
      return { status: 200, email };
    }
  };