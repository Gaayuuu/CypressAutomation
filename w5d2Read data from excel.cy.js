describe("Data Driven With", () => {

    it("Normal Login", () => {
        cy.parseXlsx('cypress/fixtures/Read Excel Data File.xlsx')
        .then((excelData) => {
        const rowCount = Cypress.$(excelData[0].data).length; //sheet num in excel
        cy.log(rowCount);


        for (let i = 1; i < rowCount; i++) {
            let value = excelData[0].data[i];
            cy.visit('https://demo.guru99.com/test/newtours/index.php');
            cy.get('input[name="userName"]').type(value[0]);
            cy.get('input[name="password"]').type(value[1]);
            cy.get('input[name="submit"]').click();
          }

      });
      
    });

    it("Normal Login", () => {
        cy.parseXlsx('cypress/fixtures/Read Excel Data File.xlsx')
        .then((excelData) => {
            const sheet1 = Cypress.$(excelData[0].data).length; //sheet num in excel
            cy.log(sheet1);
            const sheet2 = Cypress.$(excelData[1].data).length; //sheet num in excel
            cy.log(sheet2);


        for (let i = 1; i < sheet1; i++) {
            let sheet1_row = excelData[0].data[i];
            let sheet2_row = excelData[1].data[i];

            cy.visit('https://demo.guru99.com/test/newtours/index.php');
            cy.get('input[name="userName"]').type(sheet1_row[0]);
            cy.get('input[name="password"]').type(sheet2_row[0]);
            cy.get('input[name="submit"]').click();


            if (sheet1_row[0] == 'mercury' && sheet2_row[0] == 'mercury') {
                cy.get('h3').should('have.text', 'Login Successfully');
              } else {
                cy.get('tbody tr td span')
                  .contains("Enter your userName and password correct")
                  .should('be.visible');
              }
              




          }
          





      });


  
  });
});
  