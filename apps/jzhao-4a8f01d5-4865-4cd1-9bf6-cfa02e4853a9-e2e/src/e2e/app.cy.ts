import { getGreeting } from '../support/app.po';

describe('jzhao-4a8f01d5-4865-4cd1-9bf6-cfa02e4853a9-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
