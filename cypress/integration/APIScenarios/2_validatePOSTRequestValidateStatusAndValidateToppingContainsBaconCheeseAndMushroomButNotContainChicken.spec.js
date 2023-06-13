const productBody = require('../../fixtures/productBody.json');

describe('Validate POST request, status is 200 /201 and validate topping contains bacon, cheese and mushroom and does not contain chicken', function () {
  before(() => {
    cy.fixture('navigation/pageURL').then(pageURL => {
      globalThis.pageURL = pageURL; //Centralized url, define in fixture
    })
  });

  it('Send POST request and validate response and data', () => {
    const API_URL = pageURL.API_URL_For_POST; //Centralized url

    //Send GET Request
    cy.request({
      method: 'POST',
      url: `${API_URL}post`,
      body: productBody
    }).then((response) => {
    }).should(({ status, body }) => {

      //validate application response status is 200 or 201 
      expect(status).to.be.oneOf([200, 201]);

      //validate topping contains bacon, cheese and mushroom and does not contain chicken
      const { json } = body;
      const { topping } = json;
      expect(topping).to.have.lengthOf(3);
      expect(topping).to.have.contains('cheese');
      expect(topping).to.have.contains('bacon');
      expect(topping).to.have.contains('mushroom');
      expect(topping).to.not.contains('chicken');
    });
  });
});
