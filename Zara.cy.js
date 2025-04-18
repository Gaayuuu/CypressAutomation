Cypress.on('uncaught:exception', () => false);

describe('Zara', () => {

  beforeEach(() => {
    cy.viewport(1440, 800); // Set screen resolution
    cy.visit('https://www.zara.com/in/'); 
    cy.wait(3000); 
  });

  it('should open and preview the hamburger menu', () => {
    // Click the hamburger menu (top-left icon)
    cy.get("button[aria-label='Open menu']").should('be.visible').click();

    // Verify the side menu appears
    cy.get("div[aria-label='Category menu']").should('be.visible');

    // Validate top-level options in the menu
    cy.contains('WOMAN').should('be.visible');
    cy.contains('MAN').should('be.visible');
    cy.contains('KIDS').should('be.visible');

    // Close the menu
    cy.get('.layout-header-icon.layout-menu-std__icon').should('be.visible').click();

    // Ensure the menu is closed
    cy.get("div[aria-label='Category menu']").should('not.be.visible');

  });

  it('should preview a product and see the Add to Cart modal', () => {
    // Click the search icon
    cy.get('.layout-header-action-search__content').click();
    cy.wait(2000); // Allow search field to open

    // Type product in the search and hit Enter
    cy.get("#search-home-form-combo-input").type('jacket{enter}');
    cy.wait(4000); // Wait for search results to load

  
    // Make sure product list has items
    cy.get('.product-grid__product-list li').should('be.visible')
      .its('length')
      .should('be.gt', 0); // Confirm at least 1 product is listed

      // Find and Click on the visible product name
      const ProductName = "PETAL JACKET";
      cy.get('.product-grid-product-info__main-info')
      .contains(ProductName).should('be.visible')
      .then(($el) => {
        cy.wrap($el.text().trim()).as('clickedProductName'); 
        cy.wrap($el).scrollIntoView().click();
      });
  
      
    cy.wait(3000); // Wait for product detail page

    // Click on the 'Add' button
    cy.xpath("//div[@class='product-detail-cart-buttons__main-action']//button").should('be.visible').click();

    // Select the out of stock size
    cy.xpath("//ul[@class='size-selector-sizes']//li").contains('XL').should('be.visible').click();

    // Expecting a popup to be visible on selecting a out of stock
    cy.get('.zds-dialog__wrapper').should('be.visible');
    // Close the popup and validate it's not present in DOM
    cy.get("button[aria-label='close']").should('be.visible').click()
    // Now Expecting a popup to be not exist in DOM 
    cy.get('.zds-dialog__wrapper').should('not.exist');
    // Select the required size in stock
    cy.xpath("//ul[@class='size-selector-sizes']//li").contains('L').should('be.visible').click();

    // Verify the 'Add to Cart' confirmation modal appears
    cy.get('.add-to-cart-notification-content').should('be.visible');
    cy.contains('Added to your basket').should('be.visible');
    
    // Validate  product name
    cy.get('.add-to-cart-notification-content__product-name')
      .invoke('text')
      .then((modalText) => {
        cy.get('@clickedProductName').then((clickedName) => {
          expect(modalText.trim()).to.include(clickedName);
        });

    // Close the modal
    cy.get('.zds-dialog-icon-button').should('be.visible').click();

    // Ensure the modal is dismissed
    cy.get('.add-to-cart-notification-content').should('not.exist');
  });

});
});

