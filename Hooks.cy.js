describe('Hooks Test', function () {
    before(function () {
        cy.wait(1000)
      cy.log("runs once before the first test in this block");
    })
  
    after(function () {
      cy.log("runs once after the last test in this block");
    })
  
    beforeEach(function () {
      cy.log("runs before each test in this block");
    })
  
    afterEach(function () {
      cy.log("runs after each test in this block")
    })
  
    it('Example test1', () => {
        cy.log("Test1")
        
    })
    it('Example test2', () => {
        cy.log("Test2")
        
    })
  })