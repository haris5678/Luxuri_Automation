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
