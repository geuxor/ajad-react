const { setNativeValue, findTimeout } = require('../support/helper');
const title = 'Graduation Party';
const date = '2119-07-12T19:30';
const venue = 'Codeworks';

describe('Full Stack tests', () => {
  context('Test connection between server and client', () => {
    let originalLength = 0;

    beforeEach(() => {
      cy.visit('/');
      cy.get('body').then(body => {
        return findTimeout(body, '#list')
          .then(element => {
            originalLength = element.children.length;
          })
          .catch(() => {
            originalLength = 0;
          });
      });
    });

    it('Post event on submit and rerender it in the list', () => {
      cy.get('input[name=title]').type(title);
      cy.get('input[name=venue]').type(venue);
      cy.get('input[name=date]').click()
        .then(([input]) => {
          setNativeValue(input, date);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
      cy.get('[type="submit"]').click();

      cy.get('#list')
        .children()
        .should('have.length', originalLength + 1)
        .and('contain', title)
        .and('contain', date.split('T')[0].split('-')[2])
        .and('contain', venue);
    });
  });
});
