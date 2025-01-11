describe('Custom Command', ()=>{

    it('Login', ()=>{

       cy.login('student','Password123')
        cy.title().should('eq', 'Logged In Successfully | Practice Test Automation')
    })

    it('Login Valid', ()=>{

        cy.login('student','Password123')
         cy.title().should('be.equal', 'Logged In Successfully | Practice Test Automation')
     })

     it('Login Invalid', ()=>{

        cy.login('students','Password123')
         cy.title().should('be.equal', 'Test Login | Practice Test Automation')
     })
})


