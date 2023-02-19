// const btnFiltrarLivrosDeFront = document.getElementById ('btnFiltrarLivrosFront');

// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros);

const botoes = document.querySelectorAll('.btn'); //Criou um array com os "btns"
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)); //agora dá pra usar o "forEach"

function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id); //agora vejo onde está sendo clicado
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponíveis(livrosFiltrados);
                
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }

}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
        
    `
}

