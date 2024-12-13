

describe('My Test Suite', function (){
    
    it('LoginTest', function(){
        cy.login('abc123@gmail.com','Arun')

        //REDIFF REGISTRATION FORM
Cypress.Commands.add("login",(email,password) => {

    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details')
    cy.get('[width="200"] > input').type('Arun Kumar')
    cy.get('[valign="bottom"] > [type="text"]').should('be.visible').type('abcdefg')
    cy.get('.btn_checkavail').should('be.visible').click()
    cy.get(':nth-child(1) > [width="20"] > #radio_login').should('be.visible').click()
    cy.get('#newpasswd').should('be.visible').type('Abcd123@') //Abcd123@
    cy.get('#newpasswd1').should('be.visible').type('password')
    cy.get(':nth-child(1) > [width="185"] > input').type('abc123@gmail.com') //abc123@gmail.com
    cy.get('.nomargin').should('not.be.checked')
    cy.get('#mobno').type('9988776655')
    cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)').select("17")
    cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select("OCT")
    cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)').select("2000")
    cy.get('input[value=m]').should('be.checked')
    cy.get('#country')
    .select('Afghanistan')
    cy.get('.captcha').type('YP7K')
    cy.get('#Register').click()
    
    })
   
    })

})
