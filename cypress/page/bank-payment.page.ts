export class BankPaymentPage {
  private finishBuy: string;

  constructor () {
    this.finishBuy = '#cart_navigation > button > span';
  }

  public goToOrderSummaryPage() {
    cy.get(this.finishBuy).click();
  }
}
