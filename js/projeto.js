const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`http://localhost:3000/api/projetos/${id}`)
    .then(res => res.json())
    .then(p => {
        document.getElementById("projetoInfo").innerHTML = `
            <h1>${p.titulo}</h1>
            <p>${p.descricao}</p>
            <p><strong>Meta:</strong> R$ ${p.valor_meta}</p>
            <p><strong>Arrecadado:</strong> R$ ${p.valor_atual}</p>
            <a href="#" class="btn-doar">Doar Agora</a>
        `;
    });
