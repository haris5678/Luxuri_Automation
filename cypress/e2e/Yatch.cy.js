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

  it.only("It should open the Fleet form and enter the details ", () => {
    HomePage.Valid_Response();
    YatchPage.Yatch_Page();
    YatchPage.Submit_Empty_Access_Secret_Fleets();
  });
});
