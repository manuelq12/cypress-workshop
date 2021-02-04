export class ProductsListPage {
  private tShirt: string;

  constructor () {
    this.tShirt = 'a[title="Add to cart"]';
  }

  public selectTShirt() {
    cy.get(this.tShirt).click();
  }
}
