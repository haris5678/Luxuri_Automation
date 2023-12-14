import conciergePage from "../fixtures/ConciergePage";
import HomePage from "../fixtures/HomePage";

// const conciergePage = require("../fixtures/conciergePage");

describe("Villa Page", () => {
  it("It should Open Concierge Page And Reserve Booking", () => {
    HomePage.Valid_Response();
    conciergePage.concierge_Page();
  });
});
