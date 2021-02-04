export class ProductsListPage {
  private tShirt: string;

  constructor () {
    this.tShirt = '[title="Add to cart"]';
  }

  public selectTShirt() {
    cy.get(this.tShirt).click();
  }
}
