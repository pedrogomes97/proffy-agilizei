/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: 
            {
                "name":"Agilizei",
                "avatar":"",
                "whatsapp":"agilizei",
                "bio":"agilizei",
                "subject":"Português",
                "cost":100,
                "schedule":[
                   {
                      "week_day":"1",
                      "from":"08:45",
                      "to":"09:45"
                   }
                ]
            }
        }).then((response) => {
            //asserções da resposta
            expect(response.status).to.eq(201)
            expect(response.duration).lessThan(50)
            expect(response.body[0])
                .to.have.property('week_day')
                .to.be.eq('1')
            
            expect(response.body[0].from)
                .an('number')
                .satisfy((totalValue) => {
                    return totalValue = 525
                })

            expect(response.body[0].to)
                .an('number')
                .satisfy((totalValue) => {
                    return totalValue = 585
                })

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});