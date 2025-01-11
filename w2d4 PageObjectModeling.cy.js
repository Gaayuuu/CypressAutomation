import RegisterPage from "./Page Object Model/Page Object Model Class.cy"

describe('Test Suite', function(){
    it('Valid Register test', function() {   
        const register = new RegisterPage()
        register.visit()
        register.fillFirstName('John')
        register.fillLastName('Oliver')
        register.checkGender('Male')
        register.selectDepartment('MCR')
        register.fillUserName('QA')
        register.fillPassword('Analyst')
        register.fillConfirmPassword('Test@123')
        register.fillEmail('john.oliver@abc.com')
        register.fillPhone('(415)8265412')
        register.submit()
     })
})