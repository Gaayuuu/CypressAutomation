///<reference types="cypress"/>
import DummyTicketPage from '../Page Object Model/Dummy Ticket POM.cy'

describe('Dummy Ticket Site Tests', () => {
    const dummyTicket = new DummyTicketPage();

    it('Validates non-input fields', () => {
        dummyTicket.visit();
        // Add assertions for non-input fields using POM methods if extended.
    });

    it('Fills and submits valid input data', () => {
        dummyTicket.visit()
        dummyTicket.checkCheckbox()
        dummyTicket.fillFirstName('Gayathri')
        dummyTicket.fillLastName('J')
        dummyTicket.fillComments('No comments yet')
        dummyTicket.selectDOB('2001', 'Oct', '17')
        dummyTicket.selectGender(2)
        dummyTicket.fillFromCity('Sathy')
        dummyTicket.fillToCity('Tirupur')
        dummyTicket.selectDepartDate('Feb', '28')
        dummyTicket.fillBillingDetails({
                name: 'Gayathri',
                phone: '2255446987',
                email: 'Gayu.test.com',
                address1: '14, Chennai',
                address2: 'Coimbatore',
                city: 'Coimbatore',
                state: 'Tamil Nadu',
                postcode: '638503'
            })
            dummyTicket.placeOrder();

        // Add assertions for successful form submission.
    });

    it('Validates input fields with invalid data', () => {
        dummyTicket.visit()
        dummyTicket.checkCheckbox()
        dummyTicket.fillLastName('T') // Missing first name to trigger validation
        dummyTicket.fillComments('No comments')
        dummyTicket.selectGender(1)
        dummyTicket.fillFromCity('Delhi')
        dummyTicket.fillToCity('Pune')
        dummyTicket.selectDepartDate('Sep', '10')
        dummyTicket.fillBillingDetails({
                name: 'Gaythri',
                phone: '2255446987', // Missing phone number
                email: 'xxx.gmail.com', // Missing email
                address1: '123, Trichy',
                address2: 'Karur',
                city: 'Coimbatore',
                state: 'Tamil Nadu',
                postcode: '60000038'
            })
            dummyTicket.placeOrder();

        // Assert error messages using Cypress.
        //cy.get('[data-id="travname"]').should('contain.text', 'First / Given name is a required field.');
        //cy.get('[data-id="billing_phone"]').should('contain.text', 'Billing Phone is a required field.');
        //cy.get('[data-id="billing_email"]').should('contain.text', 'Billing Email address is a required field.');
    });
});
