describe('Validate GET request,  validate response message body have content and not contain word zombie', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 
      it('Sends a GET request, Validate response and each field content not null along with zombie word not exists in response body ', () => {
       const API_URL = pageURL.API_URL; //Url placed centrally
       
       //Send GET Request
       cy.request({
        method: 'GET',
        url: `${API_URL}posts` 
        }).then((response) => {
        cy.log(response.body)
       }).should(({status, body}) => {
        expect(status).to.eq(200);
        Cypress._.each(body, (value) => {

          //validate response body for each field is not null
           //expect(value.title).to.not.null;//With over all title clause
           //expect(value.body).to.not.null;//With over all Body clause
            expect(value).to.have.property('id').to.not.null;
            expect(value).to.have.property('title').to.not.null;
            expect(value).to.have.property('body').to.not.null;
            expect(value).to.have.property('userId').to.not.null;

            //validate response body, title and body does not contain word zombie
            expect(value.title).to.not.contains('zombie');
            expect(value.body).to.not.contains('zombie');
        })
      })
    });
});