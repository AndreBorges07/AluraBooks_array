let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco () {
    // o elemento "a" é o primeiro elemento, o sinal de "menos" explica que o primeiro precisa ser menor que o segundo, que é o "b".

   let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco );

   
   exibirLivrosNaTela(livrosOrdenados); //Esse método já existe no "metodoForEach". 
}