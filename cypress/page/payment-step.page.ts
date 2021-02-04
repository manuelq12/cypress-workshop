export class PaymentStepPage {
  private bankOption: string;

  constructor () {
    this.bankOption = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
  }

  public goToBankOption() {
    cy.get(this.bankOption).click();
  }
}
