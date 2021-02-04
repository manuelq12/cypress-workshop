export class PaymentStepPage {
  private bankOption: string;

  constructor () {
    this.bankOption = '.bankwire';
  }

  public goToBankOption() {
    cy.get(this.bankOption).click();
  }
}
