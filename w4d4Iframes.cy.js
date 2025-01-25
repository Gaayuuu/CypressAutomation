//Handling iframes
describe('iframes Test', function() {

  it('iframes', function() {

      cy.visit("https://jqueryui.com/droppable/")
      cy.frameLoaded('.demo-frame') //frame load

      //create a function to return the values as 'res'
      cy.iframe().find('#draggable').then(function(res){

        //const is a keyword used to save values
          const frmValue = res.text() 

          expect(frmValue).to.contain('Drag me to my target')
          cy.log(frmValue)
      })

  })

})