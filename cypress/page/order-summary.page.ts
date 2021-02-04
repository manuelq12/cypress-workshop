export class OrderSummaryPage {
  private orderConfirmation: string;

  constructor () {
    this.orderConfirmation = '.cheque-indent';
  }

  public checkOrderConfirmation() {
    cy.get(this.orderConfirmation)
      .should('have.text', 'Your order on My Store is complete.');
  }
}
