// import "cypress-mochawesome-reporter/register";
import CarsPage from "../fixtures/CarsPage";
import HomePage from "../fixtures/HomePage";

//Seller Log in page
//******************************************************************** */
describe("Home Page", () => {
  it("It should return response 200 on homa page ", () => {
    HomePage.Valid_Response();
  });
});

describe("Cars Page", () => {
  it("It should redirect to cars page", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
  });
  it.only("It should open the car detail page and enter details ", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();

    // cy.visit("https://luxuri.com/luxury-car-rentals-miami");
    CarsPage.Car_detail_page();
  });
});

// it('Invalid Email', () => {

//     SellerloginPage.Invalid_Email()

// });

// it('Invalid Password', () => {

//     SellerloginPage.Invalid_Password()

// });

// it('Empty Fields', () => {

//     SellerloginPage.Empty_Fields()

// });

// it('Missing Email', () => {

//     SellerloginPage.Missing_Email()

// });

// it('Missing Password', () => {

//     SellerloginPage.Missing_Password()

// });

// it('Invalid Login', () => {

//     SellerloginPage.Invalid_Login()

// });

// it('Missing Email Invalid Password', () => {

//     SellerloginPage.Missing_Email_Invalid_Password()

// });

// it('Missing Password Invalid Email', () => {

//     SellerloginPage.Missing_Password_Invalid_Email()

// });

// });

//Seller Log in page end
//********************************************************* */
