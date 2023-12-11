class HomePage {
  elements = {
    // Note: Increased the timeout to 120 seconds
    Url: () => cy.visit("https://luxuri.com/", { timeout: 200000 })
  };

  // It should return response 200 on the home page
  Valid_Response() {
    // Wrap the visit in a cy.then() to ensure proper command chaining
    cy.then(() => {
      this.elements.Url();
    });
  }
}

module.exports = new HomePage();
