let livros = [];
const API = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

    async function buscarLivros() {
        const consultaLivros = await fetch(API);
        
            livros = await consultaLivros.json();
            // console.table(livros); //Visualização em forma de tabela.

        let livrosComDesconto = aplicarDesconto(livros);

            exibirLivros(livrosComDesconto);
    }

        buscarLivros ();
