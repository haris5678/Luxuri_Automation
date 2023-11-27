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

  // // Log in with Invalid Password and valid Email
  //     Invalid_Password(){
  //         this.elements.Url()
  //         this.elements.email().type('haris.anwar@codistan.org')
  //         this.elements.password().type('1122')
  //         this.elements.login().contains('Login').click()
  //         this.elements.error_message().contains('Incorrect password')
  //     }

  // // Log in with Missing Email and Password
  //     Empty_Fields(){
  //         this.elements.Url()
  //         //this.elements.email().type('')
  //         //this.elements.email().click()
  //         //this.elements.password().type('')
  //         //this.elements.password().click()
  //         this.elements.login().contains('Login').click()
  //         this.elements.require_email_error().contains('Email is required')
  //         this.elements.require_password_error().contains('Password is required')
  //         this.elements.error_message().contains('Mandatory(*) fields are required')              //check
  //     }

  // // Log in with Missing Email and Valid Password
  //     Missing_Email(){
  //         this.elements.Url()
  //         //this.elements.email().type('')
  //         this.elements.password().type('Check@1122')
  //         this.elements.login().contains('Login').click()
  //         this.elements.require_email_error().contains('Email is required')
  //         //this.elements.error_message().contains('User not found')
  //         this.elements.error_message().contains('Mandatory(*) fields are required')  //check
  //     }

  // // Log in with Missing Password and valid Email
  //     Missing_Password(){
  //         this.elements.Url()
  //         this.elements.email().type('haris.anwar@codistan.org')
  //         //this.elements.password().type('')
  //         this.elements.login().contains('Login').click()
  //         //this.elements.error_message().contains('User not found')
  //         this.elements.error_message().contains('Incorrect password')     //needs to verify
  //         //this.elements.require_password_error().contains('Password is required')
  //         this.elements.require_password_error().contains('Mandatory(*) fields are required')

  //     }

  // //Invalid Email and Password
  //     Invalid_Login(){
  //         this.elements.Url()
  //         this.elements.email().type('harisanwar@codistan.org')
  //         this.elements.password().type('Check1122')
  //         this.elements.login().contains('Login').click()
  //         this.elements.error_message().contains('User not found')
  //     }

  // // Miss Email and Invalid Password
  //     Missing_Email_Invalid_Password(){
  //         this.elements.Url()
  //         //this.elements.email().type('')
  //         //this.elements.email().click()
  //         this.elements.password().type('Check@22')
  //         this.elements.login().contains('Login').click()
  //         this.elements.require_email_error().contains('Email is required')
  //         this.elements.error_message().contains('Mandatory(*) fields are required')
  //         //this.elements.error_message().contains('User not found')
  //     }

  // // Miss Password and Invalid Email
  //     Missing_Password_Invalid_Email(){
  //         this.elements.Url()
  //         this.elements.email().type('haris@codistan.org')
  //         //this.elements.password().type('')
  //         this.elements.login().contains('Login').click()
  //         this.elements.require_password_error().contains('Password is required')
  //         //this.elements.error_message().contains('User not found')
  //         this.elements.error_message().contains('Mandatory(*) fields are required')

  //     }
}

module.exports = new HomePage();
