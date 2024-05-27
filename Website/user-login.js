document.getElementById("login-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const response = await fetch("https://664251513d66a67b3437020e.mockapi.io/usuario");
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    const usuarios = await response.json();
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
      sessionStorage.setItem("userId", usuario.id);
      window.location.href = `pet-list.html`;
    } else {
      alert("Email ou senha incorretos");
    }
  } catch (error) {
    console.error("Erro ao fazer login", error);
    alert("Erro ao fazer login");
  }
});
