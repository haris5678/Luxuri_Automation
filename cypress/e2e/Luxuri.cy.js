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
//************************************cars page**************** */
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

  it("It should not submit inquire form without Name", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_Without_Entering_Name();
  });

  it("It should not submit inquire form without Email", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_Without_Entering_Email();
  });

  it("It should not Submit with Past Pickup Date", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_with_Past_Pickup_Date();
  });

  it("It should not submit with characters in number field", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_with_Nonnumeric_Characters_in_Phone_Number();
  });
  it("It should not select text message without entering phone number", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Select_Text_Message_without_Entering_Phone_Number();
  });

  it("It should not Submit Form with Special Characters in Name", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_with_Special_Characters_in_Name();
  });

  it("It should not Submit Form with invalid email format", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_with_Invalid_Email_Format();
  });

  it("It should not Submit Form with Dropoff Date Earlier than Pickup Date", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_with_Dropoff_Date_Earlier_than_Pickup_Date();
  });

  it("It should not Submit Form with long name", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Submit_Form_with_Very_Long_Name();
  });

  it.only("It should not Submit Form without centering phone number", () => {
    HomePage.Valid_Response();
    CarsPage.Cars_Page();
    CarsPage.Car_detail_page();
    CarsPage.Verify_Missing_Contact_Method_Selection();
  });
});
