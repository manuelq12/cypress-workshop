export class ProductsListPage {
  private tShirt: string;

  constructor () {
    this.tShirt = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
  }

  public selectTShirt() {
    cy.get(this.tShirt).click();
  }
}
