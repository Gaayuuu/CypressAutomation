// Ignore any uncaught exceptions so they don't fail the test
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false prevents Cypress from failing the test on JS errors from YouTube
  return false;
});

describe('YouTube Video - Share and Report Buttons', () => {
  const videoUrl = 'https://www.youtube.com/'; // Set the YouTube homepage URL

  beforeEach(() => {
    // Visit the YouTube homepage before each test
    cy.visit(videoUrl);

    // Set the browser size large enough to show all elements
    cy.viewport(1480, 900);

    // Wait for the page to load
    cy.wait(6000);
  });

  it('should open the Share modal when Share button is clicked', () => {

    // Type "cat" in the search bar and press Enter
    cy.get('.ytSearchboxComponentInputBox').type('cat{enter}');
    cy.wait(6000); // Wait for results to load

    // Click the "Videos" filter to narrow results
    cy.xpath('//body[1]/ytd-app[1]/div[1]/ytd-page-manager[1]/ytd-search[1]/div[1]/div[1]//yt-chip-cloud-chip-renderer[3]')
      .contains('Videos')
      .click({ force: true });

    cy.wait(9000); // Wait for filtered results to load

    // Locate the 3-dot menu (options) of the first video and click it
    cy.xpath("//body/ytd-app/div[@id='content']/ytd-page-manager[@id='page-manager']/ytd-search[@role='main']/div[@id='container']/ytd-two-column-search-results-renderer[@class='style-scope ytd-search']/div[@id='primary']/ytd-section-list-renderer[@class='style-scope ytd-two-column-search-results-renderer']/div[@id='contents']/ytd-item-section-renderer[@class='style-scope ytd-section-list-renderer']/div[@id='contents']/ytd-video-renderer/div/div/div/div/div/ytd-menu-renderer/yt-icon-button/button")
      .first() // Select the first video in the list
      .scrollIntoView() // Scroll to it
      .wait(5000) // Allow time for animation or rendering
      .should('be.visible') // Confirm it's visible
      .click(); // Click to open the menu

    cy.wait(3000); // Wait for the menu to appear

    // Find and click the "Share" option from the menu
    cy.xpath("//ytd-menu-popup-renderer[@role='menu']//ytd-menu-service-item-renderer")
      .contains('Share')
      .should('be.visible')
      .click();

    // Verify that the Share modal is visible and exists in the DOM
    cy.xpath("//tp-yt-paper-dialog[@role='dialog']")
      .should('be.visible')
      .should('exist');

    // Click the forward scroll button inside the share modal
    cy.get('#scroll-button-forward > #button > .scroll-button-icon > .yt-icon-shape > div').click();

    // Click the back scroll button to navigate back
    cy.get('#scroll-button-back > #button > .scroll-button-icon > .yt-icon-shape > div').click();

    // Wait a bit before closing the modal
    cy.wait(2000);

    // Click the close icon in the Share modal
    cy.xpath("//yt-icon[@class='style-scope ytd-unified-share-panel-renderer']//div").click();

    cy.wait(3000); // Wait for the modal to close

    // Verify the Share modal is no longer visible
    cy.xpath("//tp-yt-paper-dialog[@role='dialog']")
      .should('not.be.visible');
  });

});
