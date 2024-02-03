///<reference types= "cypress" />
import produtosPage from "../support/page-objects/produtos.page";



describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach('', () => {
        produtosPage.visitarUrl()
    });


    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('.product_title').should('contain' , 'Abominable')

    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addProdutos("Aero Daily Fitness Tee", "M", "Black", 2)
    });


    it('Deve Buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain' , 'Zeppelin')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('.product_title').should('contain' , 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('XS', 'Black', qtd)

        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

   it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)

        cy.get('.woocommerce-message').should("contain" , dados[1].nomeProduto)
        })

   });
    
});
