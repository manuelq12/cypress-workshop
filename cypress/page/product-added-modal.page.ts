export class ProductAddedPage {
  private summaryPage: string;

  constructor () {
    this.summaryPage = '[style*="display: block;"] .button-container > a';
  }

  public goToSummaryStepPage() {
    cy.get(this.summaryPage).click();
  }
}
