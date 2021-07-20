const { setNativeValue } = require('../support/helper');
const title = 'Graduation Party';
const date = '2050-06-24T19:30';
const venue = 'Codeworks';

describe('Front End tests', () => {
  context('Test inputs', () => {
    beforeEach(() => {
      cy.seedAndVisit([]);
    });

    it('Have input type="text" named title', () => {
      cy.get('input[name=title]')
        .should('have.attr', 'type', 'text')
        .should('be.visible')
        .type(title)
        .should('have.value', title);
    });

    it('Have input type="datetime-local" named date', () => {
      cy.get('input[name=date]')
        .should('have.attr', 'type', 'datetime-local')
        .should('be.visible')
        .click()
        .then(([input]) => {
          setNativeValue(input, date);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        })
        .should('have.value', date);
    });

    it('Have input type="text" named venue', () => {
      cy.get('input[name=venue]')
        .should('have.attr', 'type', 'text')
        .should('be.visible')
        .type(venue)
        .should('have.value', venue);
    });

    it('Should reset the inputs after submit', () => {
      cy.route('POST', '/events', { title, date, venue, _id: 1 });
      cy.get('input[name=title]').type(title);
      cy.get('input[name=venue]').type(venue);
      cy.get('input[name=date]').click()
        .then(([input]) => {
          setNativeValue(input, date);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });

      cy.get('[type="submit"]').click();

      cy.get('input[name=title]').should('have.value', '');
      cy.get('input[name=venue]').should('have.value', '');
      cy.get('input[name=date]').should(
        'have.value',
        new Date().toISOString().slice(0, 16)
      );
    });
  });

  context('Test events list', () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it('Should have an events list container with id "list"', () => {
      cy.get('#list').should('be.visible');
    });

    it('Loads events on page load', () => {
      cy.get('#list')
        .children()
        .should('have.length', 3);
    });

    it('Render correclty next event', () => {
      cy.get('#list > :nth-child(1)')
        .should('be.visible')
        .should('contain', title)
        .should('contain', date.split('T')[0].split('-')[2])
        .should('contain', venue)
        .contains(/next event/i);
      
      cy.get('#list > :nth-child(2)')
        .should('not.match', /next event/i);
    });

    it('Check item in list after submit', () => {
      // console.log(cy.route('POST', '/events', { title, date, venue, _id: 1 }));
      cy.route('POST', '/events', { title, date, venue, _id: 1 });
      cy.get('input[name=title]').type(title);
      cy.get('input[name=date]')
        .click()
        .then(input => input.val(date));
      cy.get('input[name=venue]').type(venue);
      cy.get('[type="submit"]').click();

      cy.get('#list')
        .children()
        .should('have.length', 4)
        .should('contain', title)
        .should('contain', date.split('T')[0].split('-')[2])
        .should('contain', venue);
    });
  });

});
