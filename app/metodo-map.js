function aplicarDesconto(livrosSemDesconto) {
    const desconto = 0.3;

        livrosComDesconto = livrosSemDesconto.map(livro => {
            return {...livro, preco: livro.preco - (livro.preco * desconto)}
            //Faz uma CÓPIA de "livros", muda o "preco", que será...
        })

        return livrosComDesconto;
}