let livros = [];
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

    async function buscarLivros() {
        const consultaLivros = await fetch(url);
        
            livros = await consultaLivros.json();
            console.log(livros)
    }

        buscarLivros ();