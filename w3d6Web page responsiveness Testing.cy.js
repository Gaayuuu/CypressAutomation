///<reference types="cypress"/>

context('Responsiveness Testing',()=>{

    it('HRMS Login Page',()=>{
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        //cy.get('#CompanyId').select('Desicrew')
        cy.get('#Username').type('DC5114')
        cy.get('#Password').type('Gayu@123')
        cy.get('#btnLogin').click()

    })

    it('HRMS Login Page',()=>{
        cy.viewport('ipad-mini')
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        //cy.get('#CompanyId').select('Desicrew')
        cy.get('#Username').type('DC5114')
        cy.get('#Password').type('Gayu@123')
        cy.get('#btnLogin').click()
        cy.get('#cardTypeButtons > :nth-child(2) > .btn').click()


    })

    it('HRMS Login Page',()=>{
        cy.viewport('macbook-11')
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        //cy.get('#CompanyId').select('Desicrew')
        cy.get('#Username').type('DC5114')
        cy.get('#Password').type('Gayu@123')
        cy.get('#btnLogin').click()
        cy.get('#cardTypeButtons > :nth-child(2) > .btn').click()
    })

    it('HRMS Login Page',()=>{
        cy.viewport('samsung-note9')
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        //cy.get('#CompanyId').select('Desicrew')
        cy.get('#Username').type('DC5114')
        cy.get('#Password').type('Gayu@123')
        cy.get('#btnLogin').click()
        cy.get('#cardTypeButtons > :nth-child(2) > .btn').click()
    })


})