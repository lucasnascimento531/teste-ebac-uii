///<reference types= 'cypress' />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach('', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })    
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Lucas', 'Cruz', 'Lucas.qa')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes')
    });
});