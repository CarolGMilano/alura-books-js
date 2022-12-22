const botoes = document.querySelectorAll('.btn');

    function exibirPreçoTotalPromocional() {
        promocaoParaLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
        </div>
        `
    }

    function filtrarPorDisponibilidade() {
        return livros.filter(livro => livro.quantidade > 0);
    }
    
    function filtrarPorCategoria(categoriaDoBotao) {
        return livros.filter(livro => livro.categoria == categoriaDoBotao);
    }

    function filtrarLivros() {
        const btnPressionado = document.getElementById(this.id);
        const categoriaDoBotao = btnPressionado.value;

        let livrosFiltrados = categoriaDoBotao == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoriaDoBotao);

            exibirLivros(livrosFiltrados);

            if (categoriaDoBotao == 'disponivel') {
                exibirPreçoTotalPromocional();
            }
    }

        botoes.forEach(botao => {
            botao.addEventListener('click', filtrarLivros)
        })

