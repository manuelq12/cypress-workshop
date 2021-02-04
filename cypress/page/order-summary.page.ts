export class OrderSummaryPage {
  private orderConfirmation: string;

  constructor () {
    this.orderConfirmation = '#center_column > div > p > strong';
  }

  public checkOrderConfirmation() {
    cy.get(this.orderConfirmation)
      .should('have.text', 'Your order on My Store is complete.');
  }
}
