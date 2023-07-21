import {web} from "../../support/userDataUtils"

Cypress.config
describe('BankBug', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.setDefaultMass(web.userRegistered, "Test mass 1", "504-1", web.password);
    cy.setDefaultMass(web.userToTransfer, "Test mass 2", "505-1", web.password);
  });

  it('Register accounts with amount', () => {
    cy.registerAccount(web.email1, web.name1, web.password);
    cy.validateRegister();
  });

  it('Transfer between accounts', () => {
    const valueToTranfer = 100;
    cy.login(web.userRegistered, web.password);
    cy.transferToAccount(web.userToTransfer, web.userRegistered, valueToTranfer);
    cy.validateTransfer();
    cy.validateAmount(web.userToTransfer, web.userRegistered, valueToTranfer);
  });

  it('account logout', () => {
    cy.login(web.userRegistered, web.password);
    cy.logout();
    cy.validateLogout();
  });
})