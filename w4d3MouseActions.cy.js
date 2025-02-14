describe('DragAndDrop',()=>{

it('Drag & Drop-3',()=>{
    cy.visit('https://demo.guru99.com/test/drag_drop.html')
    cy.get('#credit2 > .button').drag("li[class='placeholder']", { force: true });  //cy.get('.sourceitem').drag('.targetitem')  // syntax

    cy.get(':nth-child(2) > .button').drag('#amt7', { force: true });
    cy.get('#credit1 > .button').drag('#loan > .placeholder',{ force: true });
    cy.get(':nth-child(4) > .button').drag('#amt8 > .placeholder',{ force: true });
    cy.wait(3000)
    cy.get('.table4_result > .button').should('be.visible');
})

})
