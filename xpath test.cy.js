describe('XPath Test', () => {
    it('finds an element by XPath', () => {
      cy.visit('https://example.com');
      cy.xpath('//h1').should('contain', 'Example Domain');
    });
  });
  // utils.js
function getHits() {
    // Simulate a function that returns the number of hits
    return 42; // Example value
  }
  
  module.exports = { getHits };
  