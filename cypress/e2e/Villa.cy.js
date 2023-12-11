import VillaPage from "../fixtures/VillaPage";
import YatchPage from "../fixtures/YatchPage";
import CarsPage from "../fixtures/CarsPage";
import HomePage from "../fixtures/HomePage";

describe("Villa Page", () => {
  it("It should redirect to Villa page", () => {
    HomePage.Valid_Response();
    VillaPage.Villa_Page();
    cy.wait(4000);
  });
});
