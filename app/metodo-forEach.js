let estanteDeLivros = document.querySelector('#livros');

    function exibirLivros(listaDeLivros) {
        estanteDeLivros.innerHTML = '';

        listaDeLivros.forEach(livro => {
            let disponibilidade = livro.quantidade > 0 ? '' : 'indisponivel';

            /* Sempre que quiser ir adicionando ao elemento, sem perder os anteriores, usa-se += */ 
            estanteDeLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>

                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
        })
    }