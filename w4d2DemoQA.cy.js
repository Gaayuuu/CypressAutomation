import 'cypress-file-upload';
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe("Registration Page Tests", () => {
    it("Register Form", () => {
         cy.visit("https://demo.automationtesting.in/Register.html")
         cy.wait(5000)
         cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("Gayathri")
         cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("Jayaprakash")
         cy.get('.col-md-8 > .form-control').type("123,AnnaNagar,Chennai")
         cy.get('#eid > .form-control').type("gayathri123@gmail.com")
         cy.get(':nth-child(4) > .col-md-4 > .form-control').type("9879879870")
         cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').click()
         cy.get('#checkbox1').click()
         //cy.get('#msdd').should('be.visible')
         //cy.get('#msdd').click()
         //cy.get("a[style='text-decoration:none']").each(function($ele, index, list){
         //cy.log($ele.text())
         //})
         //cy.get('#Skills').select('Javascript').should('have.value', 'Javascript')
         //cy.get('#countries')
         //cy.get('b').select('India')
         //cy.get('#yearbox').select("2000")
         cy.get(':nth-child(11) > :nth-child(3) > .form-control').select("October")
         cy.get('#daybox').select("17")
         cy.get('#firstpassword').type("Gayathri@123")
         cy.get('#secondpassword').type("Gayathri@123")
         cy.get('#imagesrc').attachFile("laptop-icon.jpg")
         cy.get('#submitbtn').click()         
     });
});
