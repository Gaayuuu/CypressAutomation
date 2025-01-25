Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});

  describe("Amazon Test ", function () {
    //Hooks
    beforeEach(()=> {
        cy.visit('https://www.amazon.in/') //runs before each test in this block
        cy.viewport('macbook-15') //Check Responsiveness
      })

      it("SignIn", function () {

        /*cy.get("#nav-link-accountList").should("be.visible").click("center");
        cy.wait(9000);
        cy.xpath("//input[@id='ap_email']").should("be.visible").type("gayu.jpk@gmail.com");
        cy.wait(13000);
        cy.get("#continue").should("be.visible").click("center");
        cy.get("#ap_password").should("be.visible").type("AmazonPassword@123");
        cy.get('.a-button-input').click({ force: true });*/

        //cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.reload()
        cy.wait(5000);
        cy.get("input[name='email']").should("be.visible").type("gayu.jpk@gmail.com");
        cy.wait(2000)
        cy.get('.a-button-input').click({ force: true });
        cy.wait(2000)
        cy.get('#ap_password').type("GayathriAmazonPassword@123")
        cy.wait(2000)
        cy.get('#signInSubmit').click({ force: true });
        cy.get('#ap_password').type('GayathriAmazonPassword@123')
        cy.get('#signInSubmit').click({ force: true })
        //cy.pause();
        //cy.get('#input-box-otp').type('')
       // cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click();
      });

      it.only("sign up", function () {
        cy.get("#nav-link-accountList").should("be.visible").click("center");
        cy.wait(1000);
        cy.contains("Create your Amazon account").click({ force: true });
        cy.wait(1000);
        cy.get("#ap_customer_name").type("Gayathri");
        cy.wait(1000);
        cy.get("#ap_phone_number").type("9361923171");
        cy.wait(1000);
        cy.get("#ap_password").type("GayathriAmazonPassword@123");
        cy.wait(1000);
        cy.get("#continue").should("be.visible").click({ force: true });
      });  

      it("Title & URL", function () {

      cy.viewport('macbook-15')
      cy.title().should("eq","Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
      cy.url().should("include", "amazon");
    });


    it("HOME DASHBOARD", function () {

      cy.get('#nav-logo-sprites').should("be.visible");
      cy.get("#nav-hamburger-menu").should("be.visible");
      cy.get("#nav-xshop > a:nth-child(2)").should("be.visible").click()
      cy.wait(3000)
      cy.get('a.a-link-normal').contains('Skip').click({force: true})
      cy.wait(8000)
      cy.get(':nth-child(2) > :nth-child(1) > .bxc-grid__content > .bxc-grid__image > a > img')
      //.scrollIntoView()  // Scrolls the page
      .should("be.visible")

      //Download Function
      cy.downloadFile('https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sep/Jupiter/Slider/V2/V3/rice-atta-dal.jpg','mydownloads','rice-atta-dal.jpg')
      //Go back to previous page
      cy.go(-1)
    });

  
    it("Search", function () {
      //Used Custom Command 
      cy.Search("Wireless Keyboard")
      cy.go(-1);
      //Clear Command
      cy.Search("Unisex Perfumes")
      cy.title().should('eq','Amazon.in : Unisex Perfumes')
      cy.get('#twotabsearchtextbox').click().clear()
      .type('Coffee Powder')
      cy.get('#sac-suggestion-row-1-cell-1 > .s-suggestion').click()
      //cy.go(-1);
    });

    it("Add Produt to Cart", function () {
      //Used Custom Command 
      cy.Search("Woodland Shoes")
      cy.wait(10000)

      cy.visit('https://www.amazon.in/Woodland-Charcoal-Leather-Casual-40777CMA/dp/B0C94BQK6N/ref=sr_1_5?crid=1E4A3AET0EMIZ&dib=eyJ2IjoiMSJ9.OT3FJfjhwI5WIMxezrAHe-diEpT61wnnnOnuQLZLYkFdaKqCrQWzx-bOPhAPvaNihKOzrVaESrRnzhltvmPbFOcFcK_cVO5GZbdqkaWxw5b2AK8HceQ0auv6UHZBOI79dCn1kmdzc1NBNqwzdtr7W64RJMlChS0KSw0-OjrzJuwSN-ugvB1iXnnk84KBRPJqoO9AUzuEjPzb6A3ymSff5Q3eNAtbMZJ9ifn9M_xK-o7TSN_H8alzOHy_R2LdReEfVeFwKK4-CW7e1AOFQj2_Xsiyip0gNhw2BUHpxwv6FTTL3i1bX_9md-WvAzES64_FsIk7tqc83-9xjMIF6zv7gHxd-CanctItffJ6X_a8kLEaXqxakvp60H-bBgkh3CK2bGcFRITi2nix7XugUBtV-8723crnPNQ9ViEOWZdXdVPKJl6c12B4ubbUQHKVoDKL.CEOPJ7rGHD3dBXo3WjmXXn5bqXfNQm8lBOK7Tabb5K8&dib_tag=se&keywords=Woodland+Shoes&nsdOptOutParam=true&qid=1736535026&s=shoes&sprefix=woodland+shoes%2Cshoes%2C379&sr=1-5')
      cy.get('#add-to-cart-button').click()
      cy.wait(3000)

      cy.get('#sw-atc-details-single-container').should('be.visible').and('contain','Added to cart') //check add to cart successfuly grid
      cy.get('.ewc-compact-actions > .a-spacing-base > .a-button > .a-button-inner > .a-button-text').click()
      cy.get('[aria-label="Increase quantity by one"] > .a-icon').click()

      //Buy Item
      cy.wait(3000)
      cy.get('#sc-buy-box-ptc-button').should('be.visible').and('contain','Buy Amazon items').click()

      /*Mouse event down
      cy.get('.sf-range-slider > :nth-child(10)')
      .realMouseMove(300, 0) // Drag the slider handle horizontally by 300px
      cy.wait(3000)
      cy.get('.a-button-input').click()*/

      
    });



  });
