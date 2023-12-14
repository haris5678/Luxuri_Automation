class conciergePage {
  elements = {
    Click_Concierge_Page_Button: () =>
      cy.get('.main_navbar_menu_items > [href="/concierge-services"]').click(),
    Click_Massage_therapist_Reserve_Button: () =>
      cy
        .get(
          ":nth-child(1) > .concierge-slide-content > .sc-feUZmu > .text > #conciergeReserveBtn"
        )
        .click({ force: true }),
    Click_Massage_in_form: () =>
      cy.get(":nth-child(1) > .MuiTypography-root > .checkboxLabel").click(),
    Click_Massage_in_form: () =>
      cy.get(":nth-child(1) > .MuiTypography-root > .checkboxLabel").click(),
    Click_Vip_in_form: () =>
      cy.get(":nth-child(2) > .MuiTypography-root > .checkboxLabel").click(),
    Click_PrivateChef_in_form: () =>
      cy.get(":nth-child(3) > .MuiTypography-root > .checkboxLabel").click(),
    Click_Travel_in_form: () =>
      cy.get(":nth-child(4) > .MuiTypography-root > .checkboxLabel").click(),
    Click_Event_in_form: () =>
      cy.get(":nth-child(5) > .MuiTypography-root > .checkboxLabel").click(),
    Special_Request_Field: () =>
      cy.get(".customTextArea > .ant-input").type("Give High Quality"),
    Prefered_contact_method_dropdown: () =>
      cy.get("#contactPreferenceType").click({ force: true }),
    Prefered_contact_method_dropdown_first_option: () =>
      cy.get(".ant-select-item-option-content").eq(0).click({ force: true }),
    Contact_Number: () =>
      cy.get(":nth-child(4) > .ant-input").type("03001231234"),
    Enter_Name: () => cy.get(":nth-child(5) > .ant-input").type("03001231234"),
    Press_submit_button: () =>
      cy.get("#conciergeServiceBtn").click({ force: true }),
    Sucess_message: () =>
      cy.get(".swal2-popup").contains("Your request has been submitted"),
    message_button_ok: () => cy.get(".swal2-confirm").click({ force: true })
  };

  concierge_Page() {
    this.elements.Click_Concierge_Page_Button();
    cy.wait(5000);
    this.elements.Click_Massage_therapist_Reserve_Button();
    cy.scrollTo("bottom");
    this.elements.Click_Massage_in_form();
    this.elements.Click_Vip_in_form();
    this.elements.Click_PrivateChef_in_form();
    this.elements.Click_Travel_in_form();
    this.elements.Click_Event_in_form();
    this.elements.Special_Request_Field();
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Contact_Number();
    this.elements.Enter_Name();
    this.elements.Press_submit_button();
    cy.wait(4000);
    this.elements.Sucess_message();
    this.elements.message_button_ok();
  }
}

module.exports = new conciergePage();
