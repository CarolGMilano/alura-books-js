let btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco');

function ordenarPorPreco() {
    //O método sort() usa o padrão Unicode pra ordenar. Então, geralmente, pra ordenar números, usa-se essa formulinha.
    let precosOrdenados = livros.sort((a, b) => a.preco - b.preco);
        //A ordem em que ele faz a comparação é bem confusa, mas o que precisa ficar claro é que: Quando cê quer ordenar crescentemente, usa-se "a - b". Se quiser ordenar decrescentemente, usa-se "b - a". 
    
        exibirLivros(precosOrdenados);
}
        btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)