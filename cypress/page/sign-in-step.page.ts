export class SignInStepPage {
  private submitCreds: string;
  private emailCred: string;
  private passwCred: string;

  constructor () {
    this.emailCred = '#email';
    this.passwCred = '#passwd';
    this.submitCreds = '#SubmitLogin > span';
  }

  public goToAddressStepPage(email: string, password: string) {
    cy.get(this.emailCred).type(email);
    cy.get(this.passwCred).type(password);
    cy.get(this.submitCreds).click();
  }
}
