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
    Enter_Name: () => cy.get(":nth-child(5) > .ant-input").type("test"),
    Press_submit_button: () =>
      cy.get("#conciergeServiceBtn").click({ force: true }),
    Sucess_message: () =>
      cy.get(".swal2-popup").contains("Your request has been submitted"),
    message_button_ok: () => cy.get(".swal2-confirm").click({ force: true }),

    //negative test cases
    Error_Message_For_Additional_Request: () =>
      cy.get(".sc-hmdomO > .sc-aXZVg"),
    Error_Message_For_prefered_contact_field: () =>
      cy.get(".sc-fHjqPf > .sc-aXZVg"),
    Error_Message_For_Name_field: () => cy.get(".sc-hzhJZQ > .sc-aXZVg"),
    Name_Without_Contact: () => cy.get(".sc-hzhJZQ > .ant-input").type("test")
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
  Submit_Empty_Inquire_Form() {
    this.elements.Click_Concierge_Page_Button();
    cy.wait(5000);
    this.elements.Click_Massage_therapist_Reserve_Button();
    cy.scrollTo("bottom");
    this.elements.Press_submit_button();
    cy.wait(4000);
    // Date field error message is missing
    this.elements
      .Error_Message_For_Additional_Request()
      .contains("Request Message is required");
    this.elements
      .Error_Message_For_prefered_contact_field()
      .contains("Contact preference is required");

    this.elements.Error_Message_For_Name_field().contains("Name is required");
  }

  Form_Without_Special_Request() {
    this.elements.Click_Concierge_Page_Button();
    cy.wait(5000);
    this.elements.Click_Massage_therapist_Reserve_Button();
    cy.scrollTo("bottom");
    this.elements.Click_Event_in_form();
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Contact_Number();
    this.elements.Enter_Name();
    this.elements.Press_submit_button();
    cy.wait(4000);
    // Date field error message is missing
    this.elements
      .Error_Message_For_Additional_Request()
      .contains("Request Message is required");
  }

  Form_Without_Prefered_Contact() {
    this.elements.Click_Concierge_Page_Button();
    cy.wait(5000);
    this.elements.Click_Massage_therapist_Reserve_Button();
    cy.scrollTo("bottom");
    this.elements.Click_Event_in_form();
    this.elements.Special_Request_Field();
    this.elements.Name_Without_Contact();
    this.elements.Press_submit_button();
    cy.wait(4000);
    // Date field error message is missing
    this.elements
      .Error_Message_For_prefered_contact_field()
      .contains("Contact preference is required");
  }
  Form_Without_Name() {
    this.elements.Click_Concierge_Page_Button();
    cy.wait(5000);
    this.elements.Click_Massage_therapist_Reserve_Button();
    cy.scrollTo("bottom");
    this.elements.Click_Travel_in_form();
    this.elements.Click_Event_in_form();
    this.elements.Special_Request_Field();
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Contact_Number();
    this.elements.Press_submit_button();
    this.elements.Error_Message_For_Name_field().contains("Name is required");
  }
}

module.exports = new conciergePage();
