export class MenuContentPage {
  private optionList: string;

  constructor () {
    this.optionList = '#block_top_menu > ul';
  }

  public goToTShirtMenu() {
    cy.get(this.optionList).within(($list) => {
      cy.get('li').last().click();
    });
  }
}
