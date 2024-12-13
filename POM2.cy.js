import RegisterFormPage from '../PageObjects/RegisterFormPage.cs'
describe('Test suite', function(){

    it('Valid Register Test', function(){

        const rf=new RegisterFormPage()
        rf.visit()
        rf.fillFirstName('Gayathri')
        rf.fillLastName('j')
        rf.fillGender('Female')
        rf.fillHobbies('Testing')
        rf.fillDepartment('DCS')
        rf.fillUsername('Test@122')
        rf.fillPassword('Gayu@123')
        rf.fillConfirmPassword('Gayu@123')
        rf.fillEmail('gayu.jpkgmail.com')
        rf.fillContactNo('9696568921')
        rf.submit()
        cy.title().should('be.equal','Bootstrap Template')
        

       
        
        

    })
})