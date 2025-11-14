document.getElementById("formProjeto").addEventListener("submit", e => {
    e.preventDefault();

    const projeto = {
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        valor_meta: document.getElementById("meta").value
    };

    fetch('http://localhost:3000/api/projetos', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(projeto)
    })
    .then(res => res.json())
    .then(() => alert("Projeto criado com sucesso!"));
});
