document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("/petspot/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, senha: senha }),
    });

    if (response.ok) {
      const data = await response.json();
      window.location.href = `index-logged.html/${data.id}`;
    } else {
      // Handle error
      console.error("Erro ao fazer login");
    }
  });
