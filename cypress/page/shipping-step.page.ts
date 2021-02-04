export class ShippingStepPage {
  private serviceTerms: string;
  private nextStep: string;

  constructor () {
    this.serviceTerms = '#cgv';
    this.nextStep = '[name="processCarrier"]';
  }

  public acceptTerms() {
    cy.get(this.serviceTerms).click();
  }

  public goToPaymentStepPage() {
    cy.get(this.nextStep).click();
  }
}
