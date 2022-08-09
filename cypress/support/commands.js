Cypress.Commands.add('setToken', () => {
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: {
            email: 'flavio.machado@qacademy.io',
            password: 'qa-cademy'
        }
    }).then((response) => {
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })

})

Cypress.Commands.add('back2ThePast', () => {
    cy.api({
        method: 'DELETE',
        url: '/back2thepast/62cc387b41c6780016edc595'
    }).then((response) => {
        expect(response.status).to.eql(200)
    })
})

//POST /requisição que testa o cadastro de personagem
Cypress.Commands.add('postCharacter',(payload)=>{
    cy.api({
        method: 'POST',
        url: '/characters',
        body: payload,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then((response)=>{
        return response
    })
})
