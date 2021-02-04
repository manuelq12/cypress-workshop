import { MenuContentPage, ProductsListPage,
  ProductAddedPage, SummaryStepPage,
  SignInStepPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage,
  BankPaymentPage, OrderSummaryPage } from '../page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productsListPage: ProductsListPage = new ProductsListPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const summaryPage: SummaryStepPage = new SummaryStepPage();
  const signInPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('Then should be bought a t-shirt', () => {
    cy.visit('http://automationpractice.com/');
    menuContentPage.goToTShirtMenu();
    productsListPage.selectTShirt();
    productAddedPage.goToSummaryStepPage();
    summaryPage.goToSignInStepPage();
    signInPage.goToAddressStepPage('cubillosalejandro0212@gmail.com', 'WorkshopProtractor');
    addressStepPage.goToShippingStepPage();
    shippingStepPage.acceptTerms();
    shippingStepPage.goToPaymentStepPage();
    paymentStepPage.goToBankOption();
    bankPaymentPage.goToOrderSummaryPage();
    orderSummaryPage.checkOrderConfirmation();
  });
});
