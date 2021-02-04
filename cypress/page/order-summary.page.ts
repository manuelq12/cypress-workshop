export class OrderSummaryPage {
  private orderConfirmation: string;

  constructor () {
    this.orderConfirmation = '.cheque-indent';
  }

  public checkOrderConfirmation() {
    cy.get(this.orderConfirmation)
      .contains('Your order on My Store is complete.');
  }
}
