context('User management API automation test',()=>{

    it('GET-list user',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[1].first_name).equal('Lindsay')
        })
    })

    it('POST-Create user',()=>{
        var user={
            "name": "Gayathri",
            "job": "QA"
        }
        cy.request('POST','https://reqres.in/api/users',user)
        .then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)

        })
    })

    it('Update user',()=>{
        var user={
            "name": "QAonCloud",
            "job": "Qa Analyst"
        }
        cy.request('PUT','https://reqres.in/api/users/2',user)
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)

        })
    })

    it('Delect user',()=>{
    
        cy.request('DELETE','https://reqres.in/api/users/2')
        .then((response)=>{
            expect(response.status).equal(204)

        })
    })

})