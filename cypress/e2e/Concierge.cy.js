import conciergePage from "../fixtures/ConciergePage";
import HomePage from "../fixtures/HomePage";

describe("Villa Page", () => {
  it("It should Open Concierge Page And Reserve Booking", () => {
    HomePage.Valid_Response();
    conciergePage.concierge_Page();
  });
  it("It should submit empty form ", () => {
    HomePage.Valid_Response();
    conciergePage.Submit_Empty_Inquire_Form();
  });
  it("It should submit form without Entering Special Request Field", () => {
    HomePage.Valid_Response();
    conciergePage.Form_Without_Special_Request();
  });
  it("It should submit form without Entering Prefered Contact Field", () => {
    HomePage.Valid_Response();
    conciergePage.Form_Without_Prefered_Contact();
  });
  it.only(
    "It should submit form without Entering Prefered Contact Field",
    () => {
      HomePage.Valid_Response();
      conciergePage.Form_Without_Name();
    }
  );
});
