Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    return false; // Prevent test failure due to exceptions
  });
  



describe('CodeBox', function(){

it('Test 1', function(){
    cy.viewport(1800, 1080); // Set viewport size


    cy.visit('https://codenboxautomationlab.com/practice', {
        timeout: 180000,  // Increase visit timeout
        failOnStatusCode: false
      });
      

     cy.wait(3000)
    cy.get('#dropdown-class-example').should('be.visible').select('Selenium');

    cy.get('[for="WebServices"]').should('be.visible').click()
    cy.get('#checkBoxOption2').click()
    cy.wait(3000)


    // Switch Window
    cy.xpath("//legend[normalize-space()='Switch Window Example']")
    .should('contain.text', 'Switch Window Example');
    cy.wait(3000)

    cy.get('#openwindow').should('be.visible').click();
    cy.maximize();
    cy.wait(8000)

    // Validate the new page
    cy.url().should('include', 'codenbox');
    cy.wait(3000)


    cy.get('#opentab').should('be.visible').click()
    cy.visit('https://www.youtube.com/@CodenboxAutomationLab?themeRefresh=1')
    cy.go('back')
    cy.wait(8000)


    cy.get('#name').should('be.visible').type('Gayathri')
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    cy.wait(3000)


    //Table

    cy.get('#product').should('be.visible')
    cy.wait(3000)

    //Specific Location
    cy.get('tbody > :nth-child(4) > :nth-child(1)').should('be.visible').contains('Sariful Islam')
    //any location value
    cy.get('#product > tbody > tr:nth-child(2) > td:nth-child(2)').contains('td', 'Selenium Webdriver with Java Basics + Advanced + Interview Guide').should('be.visible')
    //column
    cy.wait(3000)

    cy.get('tbody > :nth-child(12) > :nth-child(1)').should('contain.text','Total');
        cy.get(':nth-child(12) > :nth-child(3)').should('contain.text','297');

        cy.get('table[class="table-display"] > tbody').then(($tbody) => {
            cy.log($tbody.html());  // This will log the HTML of the tbody to verify its structure.
        });
   
        //Element Displayed Example
        cy.get('#displayed-text').type('Test QA')
        cy.wait(2000)
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(2000)
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        //Enabled/Disabled Example
        cy.get('#enabled-example-input').type('Test 122')
            cy.wait(3000)

        cy.get('#disabled-button').click()
        cy.get('#enabled-example-input').should('be.disabled')

        cy.get('#enabled-button').click()
        cy.get('#enabled-example-input').should('be.enabled')


        //Mouse Hover Example
        cy.get('#mousehover')
            cy.wait(3000)

        .trigger('mouseover{force: true}')
        .wait(500); // Wait briefly to ensure the menu is visible

        cy.get('#post-501 > div > div:nth-child(12) > div > fieldset > div > div > a:nth-child(1)')
        .should('be.visible')
        .contains('Top') // Replace with actual option text

        .click();



        /* //Calendar Example
        cy.get('fieldset > p > a').click()
        cy.visit('https://codenboxautomationlab.com/about/booking/')
        cy.wait(3000)

        cy.get('.sql_date_2025-02-25 > .wpbc-cell-box > .date-cell-content > a').click()
        cy.get('#rangetime1').select('11:00 AM - 12:00 PM (Noon)')
        cy.get('#name1').type('Test QA 01')
        cy.wait(3000)

        cy.get('#secondname1').type('00212')
        cy.get('#email1').type('abc@gmail.com')
        cy.get('#phone1').type('T5554446987')
        cy.wait(3000)

        cy.get('#details1').type(' Testing Practice')
        cy.get('.wpbc_button_light').click()
        cy.get('.wpbc_ty__message').contains('Your booking is received. We will confirm it soon. Many thanks!')*/




    


        


















        
        })
    })

























