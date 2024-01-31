///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {

    beforeEach('', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.fixture("perfil").then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Lucas', 'Cruz', 'google', 'Av. Brasil', '3000', 'São Paulo', 'São Paulo', '06275555', '199999999', 'teste@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço')
    });
});
