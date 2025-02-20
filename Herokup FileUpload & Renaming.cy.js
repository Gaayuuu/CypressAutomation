describe('File Upload Test', () => {
    it('Choose file & upload', () => {
      cy.visit('https://the-internet.herokuapp.com/upload'); // Replace with your actual URL
  
      // Select file
      cy.get('#file-upload').selectFile('C:\\Users\\DCKLP-083\\Downloads\\AUXO\\Dummy Test File - 1.pdf', { force: true });
  
      // Drag and drop the file to the drop zone
      cy.get('#file-submit').click()
  
      // Verify upload success message
      cy.contains('File Uploaded!').should('be.visible');

      //Verify the uploaded file
      cy.get('#uploaded-files').should('be.visible').contains('Dummy Test File - 1.pdf')

    });


    //Drag & Drop
    it('should upload file by dragging and dropping', () => {
      cy.visit('https://the-internet.herokuapp.com/upload'); // Visit the test site
    
      // Create a DataTransfer object to simulate drag-and-drop
      const dataTransfer = new DataTransfer();
    
      // Select the file and attach it to the DataTransfer object
      cy.fixture('Dummy Test File - 1.pdf', 'base64').then(fileContent => {
        const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], 'Dummy Test File - 1.pdf', { type: 'application/pdf' });
        dataTransfer.items.add(file);
      });
    
      // Wait for the file to be added
      cy.wait(2000);
    
      // Trigger drag and drop
      cy.get('#drag-drop-upload')
        .trigger('dragenter', { dataTransfer })
        .trigger('dragover', { dataTransfer })
        .trigger('drop', { dataTransfer });
    
      // Verify successful upload (check the UI for correct element selector)
      cy.get('#drag-drop-upload').should('contain', 'Dummy Test File - 1.pdf');
    });


    //Rename

    it.only('should rename a file before uploading', () => {
      const oldFilePath = 'cypress/fixtures/Dummy Test File - 1.pdf';
      const newFilePath = 'cypress/fixtures/Dummy File Renaming.pdf';
    
      // Rename the file using cy.task
      cy.task('renameFile', { oldPath: oldFilePath, newPath: newFilePath });
    
      // Verify that the renamed file exists
      cy.readFile(newFilePath).should('exist');
    
      // Use the renamed file in a file upload test
      cy.visit('https://the-internet.herokuapp.com/upload');
      cy.get('#file-upload').selectFile(newFilePath, { force: true });
      cy.get('#file-submit').click();
      cy.get('#uploaded-files').should('contain', 'Dummy File Renaming.pdf');
    });
    

    


































    //Upload Multiple File

    it('Choose file & upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php'); // Replace with your actual URL
    
        // Select file
        cy.get('#filesToUpload').selectFile(['C:\\Users\\DCKLP-083\\Downloads\\AUXO\\Dummy Test File - 1.pdf',
            'C:\\Users\\DCKLP-083\\Downloads\\AUXO\\Dummy Test File - 2.pdf',
            'C:\\Users\\DCKLP-083\\Downloads\\AUXO\\Dummy Test File - 3.pdf',
            'C:\\Users\\DCKLP-083\\Downloads\\AUXO\\Dummy Test File - 4.pdf'], { force: true });


        cy.get('#fileList > :nth-child(1)')
        .should('be.visible')
        .contains('Dummy Test File - 1.pdf'); // Only check the file name
        cy.get('#fileList > :nth-child(2)')
        .should('be.visible')
        .contains('Dummy Test File - 2.pdf'); // Only check the file name
        cy.get('#fileList > :nth-child(3)')
        .should('be.visible')
        .contains('Dummy Test File - 3.pdf'); // Only check the file name
        cy.get('#fileList > :nth-child(4)')
        .should('be.visible')
        .contains('Dummy Test File - 4.pdf'); // Only check the file name
                      

  
      });
      
      
      //Upload Multiple File using Fixtures

      it('Choose file & upload Using Fixtures', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
      
        // Correct way to upload multiple files
        cy.get('#filesToUpload').selectFile([
          'cypress\\fixtures\\Dummy Test File - 1.pdf',
          'cypress\\fixtures\\Dummy Test File - 2.pdf',
        ], { force: true });
      
        cy.get('#fileList > :nth-child(1)').should('be.visible').contains('Dummy Test File - 1.pdf')
        cy.get('#fileList > :nth-child(2)').should('be.visible').contains('Dummy Test File - 2.pdf')

      });


      
      
      
      
  });
  