describe('File Upload Test',()=>{

    before(() => {
        // Ignore uncaught exceptions from the application
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
      });
      
    it('Test 1',()=>{
        cy.visit('https://practice.expandtesting.com/upload')

        const imagefile = 'pngwing.png'
        
        cy.get('[data-testid="file-input"]').attachFile(imagefile)
            cy.get('#fileSubmit').click()

    })
    it.only('File Download',()=>{
      cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')


    })

})