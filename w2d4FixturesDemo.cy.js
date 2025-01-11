describe('Test 1', function () {
    before(function () {
        
      cy.fixture('form1').then(function(data){
          this.data=data

      })
    })
    it('Login',function()
    {
        cy.visit('https://practice.expandtesting.com/login')
        cy.wait(2000)
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('button[type=submit]').click()
    })
    
  })

