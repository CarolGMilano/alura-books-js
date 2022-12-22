const botoes = document.querySelectorAll('.btn');

    function filtrarLivros() {
        const btnPressionado = document.getElementById(this.id);
        const categoriaDoBotao = btnPressionado.value;

        let livrosFiltrados = categoriaDoBotao == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoriaDoBotao);

            exibirLivros(livrosFiltrados);
    }

        botoes.forEach(botao => {
            botao.addEventListener('click', filtrarLivros)
        })
