describe('Alerts', ()=>{

    it('Js alert',()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
                expect(t).contains('I am a JS Alert');
        })

        cy.get("#result").should('have.text','You successfully clicked an alert')

    })

    it('comfirm alert',()=>{

       cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
       cy.get("button[onclick='jsConfirm()']").click();
       cy.on('window:confirm',(t)=>{
           expect(t).contains('I am a JS Confirm');
        })
        cy.on('window:confirm',()=> false);

       cy.get("#result").should('have.text','You clicked: Cancel');
   })

   it('prompt alert',()=>{

      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome');
      })

      cy.get("button[onclick='jsPrompt()']").click();
      cy.get("#result").should('have.text','You entered: welcome');
    })

    it('Authenticated alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
    
         {
         username: "admin",
         password: "admin"
         }
   });
   cy.get("div[class='example'] p").should('have.contain',"Congratulations");
   })
})