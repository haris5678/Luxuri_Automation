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

  // //Log In with Invalid Email and valid Password
  //     Invalid_Email(){
  //         this.elements.Url()
  //         this.elements.email().type('haris.anwarcodistan.org')
  //         this.elements.password().type('Check@1122')
  //         this.elements.login().contains('Login').click()
  //         //this.elements.error_message().contains('User not found')
  //         this.elements.error_message().contains('Invalid email format')         // invalid error message
  //     }
}

module.exports = new HomePage();
