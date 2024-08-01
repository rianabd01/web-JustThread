/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display sign out button when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login/');
  });
  afterEach(() => {
    cy.clearAllLocalStorage();
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Masukkan Email"]').should('be.visible');
    cy.get('input[placeholder="Masukkan Kata Sandi"]').should('be.visible');
    cy.get('button')
      .contains(/^Log in$/)
      .should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button')
      .contains(/^Log in$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Masukkan Email"]').type('email@email.com');

    cy.get('button')
      .contains(/^Log in$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Masukkan Email"]').type('email@gmail.com');

    cy.get('input[placeholder="Masukkan Kata Sandi"]').type('wrong_password');

    cy.get('button')
      .contains(/^Log in$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  // Positive E2E
  it('should display sign out button when email and password are correct', () => {
    cy.get('input[placeholder="Masukkan Email"]').type('rian2@gmail.com');

    cy.get('input[placeholder="Masukkan Kata Sandi"]').type('123456');

    cy.get('button')
      .contains(/^Log in$/)
      .click();

    cy.get('button')
      .contains(/^Sign out$/)
      .should('be.visible');
  });
});
