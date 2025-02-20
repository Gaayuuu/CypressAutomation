Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('postMessage') || err.message.includes('Script error')) {
      return false;
    }
  });
  

describe('Desicrew HRMS', () => {
    before(function () {
        cy.fixture('form1').then((data) => {
            this.data = data;
        });
    });

    it('Login', function () {
        cy.visit(this.data.Url);
        cy.title().should('contain', 'Employee Information Portal');

        cy.get('#Username').type(this.data.Username);
        cy.get('#Password').type(this.data.Password);
        cy.get('#btnLogin').click({ force: true });

        cy.url().should('include', this.data.HomeUrl);
        cy.get(".dropdown-toggle[data-toggle='dropdown']").click({ force: true });
        cy.get("a[href='/Account/Logout']").click({ force: true });
        cy.url().should('eq', this.data.Url);
    });
  });



    
describe('Desicrew QAonCloud', () => {
  before(function () {
      cy.fixture('form1').then((data) => {
          this.data = data;
      });
  });

    it.only('Services & Solutions', function () {
        // Step 1: Visit Desicrew site
        cy.visit('https://desicrew.in/');
        cy.viewport(1920, 1080);
    
        // Fill and submit the form
        cy.get('.elementor-sticky--active .elementor-button', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });
    
        cy.get('#form-field-first_name').type('Gayathri');
        cy.get('#form-field-email').type('test123@gmail.com');
        cy.get('#form-field-phone_number').type('9876543210');
        cy.wait(3000)
        cy.get('#form-field-comapny_name').type('TEST');
        cy.get('#form-field-how_can_we_help').type('Testing');
        cy.get('.elementor-field-type-submit .elementor-button').should('be.visible');
    
        // Navigate to Software Testing section
        cy.get(".elementor-icon-list-text:contains('Software Testing')")
          .should('be.visible')
          .click({ force: true });
        cy.url().should('include', '/solution/software-testing');
    
        // Click the "Get in Touch" button
        cy.get('.elementor-element-36c7806 .elementor-button')
          .should('be.visible')
          .click({ force: true });
    
        // Step 2: Handle cross-origin interaction with qaoncloud.com
        cy.origin('https://www.qaoncloud.com', () => {
          // Ignore known exceptions on this origin
          Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('GET_ELEMENTS') || err.message.includes('postMessage')) {
              return false;
            }
          });
    
          cy.visit('/contact-us');
    
          // Interact with the form
          //cy.get('.elementor-button-text').contains('Contact Us')
            //.should('be.visible')
            //.click({ force: true });
    
            cy.get('form > [name="name"]').type('Gayathri');
            cy.get('form > [name="email"]').type('test123@gmail.com');
            cy.get('form > .onlyNumber').type('9876543210');
            cy.get('form > [name="companyname"]').type('QAonCloud');
            cy.get('form > [name="role"]').type('QA');
            cy.get('form > textarea.form-control').type('XXX');
        });
      });                  
          })


    