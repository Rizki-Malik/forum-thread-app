/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:5173');
  });

  it('should display login page correctly', function() {
    // verification element that will show in page login
    cy.get('input[title="email"]').should('be.visible');
    cy.get('input[title="password"]').should('be.visible');
    cy.get('button').contains(/^Sign In$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // click button login without fill the email
    cy.get('button').contains(/^Sign In$/).click();

    // verification window.alert for show the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // fill the email
    cy.get('input[title="email"]').type('asd@asd.com');

    // click button without fill the password
    cy.get('button').contains(/^Sign In$/).click();

    // verification window.alert for show the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password wrong', () => {
    // fill the email
    cy.get('input[title="email"]').type('asd@asd.com');
    
    // fill the wrong password
    cy.get('input[title="password"]').type('wrong_password');

    // push button login
    cy.get('button').contains(/^Sign In$/).click();

    // verification window.alert for show the message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('User email or password wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // fill the email
    cy.get('input[title="email"]').type('asd@asd.com');
 
    // fill the password
    cy.get('input[title="password"]').type('asdasd');
 
    // menekan tombol Login
    cy.get('button').contains(/^Sign In$/).click();
 
    // verification the element will be show in homepage
    cy.get('nav').contains(/^Forum Apps$/).should('be.visible');
    cy.get('button').contains('Sign Out').should('be.visible');
  });
});