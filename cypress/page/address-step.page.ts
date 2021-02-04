export class AddressStepPage {
  private nextStep: string;

  constructor () {
    this.nextStep = '[name="processAddress"]';
  }

  public goToShippingStepPage() {
    cy.get(this.nextStep).click();
  }
}
