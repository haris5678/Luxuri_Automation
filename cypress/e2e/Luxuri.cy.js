// import "cypress-mochawesome-reporter/register";
import CarsPage from "../fixtures/CarsPage";
import HomePage from "../fixtures/HomePage";

//Seller Log in page
//************************ */
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
  it("It should check the car scroller", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Explore_Car_Brands();
  });
  it("it should open lamborghini cars only", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Click_Car_Logo_Lamborghini();
  });
  it("It should open the car detail page ", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
  });
  it("It should open the inquire form and Enter Details ", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Open_Inquire_Form();
  });
  it("It should reopen the inquire form and Enter Details again ", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Open_Inquire_Form();
    CarsPage.Car_detail_page();
    CarsPage.Open_Inquire_Form();
  });

  it("It should not submit empty inquire form", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Empty_Inquire_Form();
  });

  it("It should not submit inquire form without Selecting Source", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_Without_Selecting_Source();
  });

  it.only("It should not submit inquire form without Name", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_Without_Entering_Name();
  });
});
