export class ProductAddedPage {
  private summaryPage: string;

  constructor () {
    this.summaryPage = '[title="Proceed to checkout"]';
  }

  public goToSummaryStepPage() {
    cy.get(this.summaryPage).click();
  }
}
