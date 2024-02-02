class produtosPage {

    visitarUrl() {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    }

    buscarProduto() {

    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click()
    }

    visitarProduto() {

    }

    adicionarProdutoCarrinho() {

    }
}


export default new produtosPage()