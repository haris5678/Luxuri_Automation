import VillaPage from "../fixtures/VillaPage";
import YatchPage from "../fixtures/YatchPage";
import CarsPage from "../fixtures/CarsPage";
import HomePage from "../fixtures/HomePage";

// import VillaPage from "../fixtures/VillaPage";
// import HomePage from "../fixtures/HomePage";

describe("Villa Page", () => {
  it("It should redirect to Villa page and Open Isola Villa", () => {
    HomePage.Valid_Response();
    VillaPage.Villa_Page();
    cy.wait(4000);
  });

  it("It should Open View Photo Of Isola Villa", () => {
    HomePage.Valid_Response();
    VillaPage.Villa_Page();
    VillaPage.Isola_View_Photo();
  });

  it.only("It should Open Inquire Form", () => {
    HomePage.Valid_Response();
    VillaPage.Villa_Page();
    VillaPage.Villa_Inquire_Form();
  });
});
