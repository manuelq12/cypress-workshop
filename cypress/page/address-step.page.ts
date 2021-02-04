export class AddressStepPage {
  private nextStep: string;

  constructor () {
    this.nextStep = '#center_column > form > p > button > span';
  }

  public goToShippingStepPage() {
    cy.get(this.nextStep).click();
  }
}
