///<reference types="cypress" />



const perfil = require('../fixtures/perfil.json');





context('Funcionalidade login', () => {
    
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    afterEach('', () => {
        cy.screenshot()
    });
   
    
    it('Deve fazer login com sucesso', () => {
        
        cy.get("#username").type("aluno_ebac@teste.com")
        cy.get("#password").type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should("contain" , "Minha conta")
        
        
        
    });
        
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {

        cy.get("#username").type(perfil.usuario)
        cy.get("#password").type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should("contain" , "Minha conta")
        
    });

    it.only('Deve fazer login com sucesso -Usando o arquivo Fixture', () => {

        cy.fixture("perfil").then(dados =>{

            cy.get("#username").type(dados.usuario)
            cy.get("#password").type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should("contain" , "Minha conta")

        })
        
    });

    it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
        
        cy.get("#username").type("aluno_ebac@teste.con")
        cy.get("#password").type("teste@teste.com")
        cy.get(".woocommerce-form > .button").click() 
        cy.get(".woocommerce-error").should("contain" , "Endereço")

    });

    it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get("#username").type("aluno_ebac@teste.com")
        cy.get("#password").type("teste@test")
        cy.get(".woocommerce-form > .button").click() 
        cy.get('.woocommerce-error').should("contain" , "A senha")
        
    });
    
});