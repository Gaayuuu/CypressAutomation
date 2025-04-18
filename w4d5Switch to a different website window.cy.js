describe('Handling New Window Links Test 1', () => {
    it('Open new tab>same browser window', () => {

        cy.visit('https://the-internet.herokuapp.com/windows');
  
        // Force the link to open in the same tab
        cy.get('.example >a').invoke('removeAttr', 'target')   // invoke method will remove the attribute opens url in new tab
        .click(); 
  
        //New URL
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
  
        // Content on the new page
        cy.contains('New Window').should('be.visible');

        cy.wait(5000)
        // go back to parent tab
        cy.go('back') 
        
    });
})

    describe('Handling New Window Links Test 2', () => {
        it('Open new tab >same browser window', () => {
        
            cy.visit('https://the-internet.herokuapp.com/windows');
    
            cy.get('.example >a').then((e)=>{
             let url = e.prop('href')
            cy.visit(url);
    })

            // Limitation - child tab url should contain the parent domain url, then only this approach will work
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

            cy.wait(5000)
            // go back to parent tab
             cy.go('back') 

    })
})
  