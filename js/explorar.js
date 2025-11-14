fetch('http://localhost:3000/api/projetos')
    .then(res => res.json())
    .then(projetos => {
        const container = document.getElementById("listaProjetos");
        
        projetos.forEach(p => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${p.titulo}</h3>
                <p>${p.descricao}</p>
                <p><strong>Meta:</strong> R$${p.valor_meta}</p>
                <a href="projeto.html?id=${p.id}">Ver mais</a>
            `;

            container.appendChild(card);
        });
    });
