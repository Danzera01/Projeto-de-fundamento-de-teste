document.getElementById("formLogin").addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => {
        alert("Login efetuado!");
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "dashboard-estudante.html";
    });
});
