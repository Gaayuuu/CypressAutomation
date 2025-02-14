context('API automation test',()=>{

    it('Fetches posts and validates the response', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          
          const expectedData = [
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "userId": 1,
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }
          ]
    
          expectedData.forEach((item, index) => {
            expect(response.body[index]).to.deep.equal(item)
          })
        })
      })




      it('Sends a POST request', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.include({
            userId: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          })
        })
      })


      it('Updates a post using PUT request', () => {
        const requestBody = {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', requestBody)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal(requestBody)
          })
      })

      it('Updates a post using PATCH request', () => {
        const requestBody = {
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        }
    
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', requestBody)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.include(requestBody)
          })
      })

      it('Deletes a post using DELETE request', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.empty
          })
      })

      

    });