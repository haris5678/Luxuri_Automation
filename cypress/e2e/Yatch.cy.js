import YatchPage from "../fixtures/YatchPage";
import CarsPage from "../fixtures/CarsPage";
import HomePage from "../fixtures/HomePage";

describe("Yatch Page", () => {
  it("It should redirect to Yatch page", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    cy.wait(4000);
    cy.get(".MuiSlider-thumb").click({ force: true });
    // CarsPage.Cars_Page();
  });
  // });

  it("It should open the Fleet form and enter the details ", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Open_Access_Secret_Fleets();
  });

  it("It should open the Fleet form and enter the details ", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Submit_Empty_Access_Secret_Fleets();
  });

  it("It should not submit inquire form without Name", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Submit_Form_Without_Entering_Name();
  });

  it("It should not submit inquire form without Email", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Submit_Form_Without_Entering_Email();
  });

  it("It should not submit with characters in number field", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Submit_Form_with_Nonnumeric_Characters_in_Phone_Number();
  });

  it("It should not select text message without entering phone number", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Select_Text_Message_without_Entering_Phone_Number();
  });

  it.only("It should not Submit Form with invalid email format", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Submit_Form_with_Invalid_Email_Format();
  });
});
