export class MenuContentPage {
  private OptionList: string;

  constructor () {
    this.OptionList = '#block_top_menu > ul';
  }

  public goToTShirtMenu() {
    cy.get(this.OptionList).within(($list) => {
      cy.get('li').last().click();
    })
  }
}
