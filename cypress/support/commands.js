Cypress.Commands.add('seedAndVisit', (seedData = 'fixture:events') => {
  let polyfill;
  const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';
  cy.request(polyfillUrl)
    .then((response) => {
      polyfill = response.body;
    });

  cy.server();
  cy.route('GET', '/events', seedData);
  cy.visit('/', {
    onBeforeLoad (win) {
      delete win.fetch;
      win.eval(polyfill);
      win.fetch = win.unfetch; 
    },
  });
});
