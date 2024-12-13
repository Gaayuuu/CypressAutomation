describe('MY test Suite',function(){
    before(function(){ 
       cy.fixture('example').then(function(data){
           this.data=data
       })
   })
   it('Fixtures Demo Test',function(){
       cy.visit('https://mytestingthoughts.com/Sample/home.html')
       cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control')
       .type('this.data.First Name') //First Name
       cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control')
       .type('this.data.Last Name') //Last Name
       cy.get('#inlineRadioFemale').click().should('be.checked') //Female Radio button
       cy.get('#inlineRadioMale').should('not.be.checked') //Male Rdio Button
       cy.get('#exampleFormControlSelect2') 
       .select('Running')//Hobbies
       cy.get('.selectContainer > .input-group > .form-control')
       .select('Accounting Office') //Department / Office
       cy.get(':nth-child(8) > .inputGroupContainer > .input-group > .form-control')
       .type('this.data.Username') //Username
       cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control')
       .type('this.data.Password')//Password
       cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control')
       .type('this.data.Confirm Password')//Confirm Password
       cy.get(':nth-child(11) > .inputGroupContainer > .input-group > .form-control')
       .type('abcd123@gmail.com')//E-Mail
       cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control')
       .type('(639) 998543')//Contact No.
       cy.get('#exampleFormControlTextarea1')
       .type('THANKS')//Additional Info.
       cy.get('.btn').click()
   })

})
