///<reference types= "cypress" />


describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach('', () => {

        cy.visit("http://lojaebac.ebaconline.art.br/produtos")

    });


    it('Deve selecionar um produto da lista', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"] ').contains("Ariel Roll Sleeve Sweatshirt").click()
        cy.get(".button-variable-item-M").click()
        cy.get(".button-variable-item-Purple").click()
        cy.get(".input-text").clear().type(quantidade)
        cy.get(".single_add_to_cart_button").click()

        cy.get(".dropdown-toggle > .mini-cart-items").should("contain" , quantidade)
        cy.get('.woocommerce-message').should("contain" , "2 x Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.")
    });

    it.only('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        cy.addProdutos("Aero Daily Fitness Tee", "M", "Black", 2)
    });
});
