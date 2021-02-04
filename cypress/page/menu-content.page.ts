export class MenuContentPage {
  private tShirtMenuSelector: string;

  constructor () {
    this.tShirtMenuSelector = '#block_top_menu > ul > li > [title="T-shirts"]';
  }

  public goToTShirtMenu() {
    cy.get(this.tShirtMenuSelector).click();
  }
}
