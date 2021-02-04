export class SummaryStepPage {
  private nextStep: string;

  constructor () {
    this.nextStep = '.cart_navigation span';
  }

  public goToSignInStepPage() {
    cy.get(this.nextStep).click();
  }
}
