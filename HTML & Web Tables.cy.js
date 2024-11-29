describe('Sample Automation', () => {
    it('Handling Web/ HTML Table in Cypress', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#pagination > :nth-child(3) > a').click()
        cy.wait(2000)
        cy.get("table[name=BookTable]").should('be.visible')
        //Specific Location
        cy.get('table[name=BookTable] > tbody > tr:nth-child(3) > td:nth-child(1)').should('be.visible').contains('Learn Java')
        //any location value
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')
        //column
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e, index, $list) => {
            const author = $e.text()

            if (author.includes('Amod')) {
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index)
                .then(function(name){
                    const bname = name.text()
                    expect(bname).to.eq('Master In Java')
                })
            }
        })
    })
})
