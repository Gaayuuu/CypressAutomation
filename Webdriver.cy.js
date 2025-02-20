describe('Visit WebDriverUniversity Contact Us Page', () => {
    it('should visit the contact us page', () => {
      cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
      cy.get('[name="first_name"]').should('be.visible').type('Gayathri')
      cy.get('[name="last_name"]').should('be.visible').type('J')
      cy.get('[name="email"]').should('be.visible').type('test@123.com')
      cy.get('textarea.feedback-input').should('be.visible').type('Test')
      cy.get('[type="reset"]').should('be.visible')
      cy.get('[type="submit"]').should('be.visible').click()
      cy.get('h1').should('contain','Thank You for your Message!')

    });
  });

  
  describe('Visit WebDriverUniversity Click Buttons Page', () => {
    before(() => {
      // Ignore uncaught exceptions to avoid test failure
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should visit the click buttons page', () => {
        cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html');
        cy.get('#button1').click({force: true})
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-header > .close')
        .should('be.visible').click()
        cy.get('#button1').click({force: true})
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-header')
        .should('contain','Congratulations!')
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-body > p').should('contain','Well done for successfully using the click() method!')
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click({force:true})



        cy.get('#button2').click({force: true})
        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-header > .close')
        .should('be.visible').click()
        cy.get('#button2').click({force: true})
        cy.wait(3000)
        cy.get('#myModalJSClick > .modal-dialog > .modal-content').should('be.visible').and('include.text', "It’s that Easy!!  Well I think it is.....");
        cy.get('#myModalJSClick .modal-header h4')
        .should('be.visible')
        .and('contain', "It’s that Easy!!  Well I think it is.....");
    
    
        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-body > p')
        .should('be.visible').and('contain','We can use JavaScript code if all else fails! Remember always try to use the WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).')
        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').should('be.visible').click({force: true})




        cy.get('#button3').click({force: true})
        cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-header > .close').click({force: true})
        cy.get('#button3').click({force: true})
        cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-header > .modal-title')
        .should('be.visible')
        .contains('Well done! the Action Move & Click can become very useful!');
        cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-body')
        .should('be.visible')
        .and('include.text', "Advanced user interactions (API) has been developed to enable you to perform more complex interactions such as:");
        cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn')
        .should('be.visible').click()

    
    });

describe('E-Shop Login', function (){


    it('Login Test', function(){
        cy.visit('https://demos.telerik.com/aspnet-core/eshop/account/login')
        cy.get('#Email').should('be.visible').clear().type('jaxons.danniels@company.com')

        cy.get('#Password').should('be.visible').type('User1234')

        cy.get('.k-button').should('be.visible').click()
        


    })
})



  });
  
  