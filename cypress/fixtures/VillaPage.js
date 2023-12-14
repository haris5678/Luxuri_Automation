class VillaPage {
  elements = {
    Open_Destination: () =>
      cy.get(".main_navbar_menu_items > p").click({ force: true }),
    Navigate_to_Miami: () =>
      cy.get(".searchVillas_content_places_card_1").click({ force: true }),
    Wait_6000: () => cy.wait(6000),
    Click_Villa_Isola_View_Detail_Button: () =>
      cy
        .get(
          ":nth-child(1) > .spaceCard_detail > .spaceCard_detail_card > .spaceCard_detail_card_btn > #viewDetailBtn"
        )
        .click({ force: true }),
    Wait_4000: () => cy.wait(4000),
    Click_Villa_Isola_View_Photo: () =>
      cy
        .get(
          ".propertyDetailPage_showCase_images_two_for_btn > #viewAllPhotosBtn"
        )
        .click(),
    Scroll_Next_In_View_Photo_Of_Villa_Isola: () =>
      cy
        .get(".viewAllPhotos_sliders_top > .swiper > .swiper-button-next")
        .click(),
    Close_In_View_Photo_Of_Villa_Isola: () => cy.get(".mobileView").click(),

    Villa_Inquire: () =>
      cy.get("#propertyDetail_Inquire").click({ force: true }),
    Wait_6000: () => cy.wait(6000),
    Wait_4000: () => cy.wait(4000),
    Villa_booking_date_field: () =>
      cy.get(".datepicker").click({ force: true }),
    Villa_Start_date_19Feb: () =>
      cy
        .get(
          ":nth-child(6) > .react-datepicker__month > :nth-child(4) > .react-datepicker__day--019"
        )
        .click({ force: true }),
    Villa_End_date_29Feb: () =>
      cy
        .get(
          ":nth-child(6) > .react-datepicker__month > :nth-child(5) > .react-datepicker__day--029"
        )
        .click({ force: true }),

    Villa_calender_submit_button: () =>
      cy.get("#submitDatesBtn").click({ force: true }),
    Number_Of_Guests_dropdown: () =>
      cy
        .get(
          ":nth-child(2) > .custom-select-inner > .ant-select > .ant-select-selector"
        )
        .click({ force: true }),
    Number_Of_Guests_dropdown_third_option: () =>
      cy.get(".ant-select-item-option-content").eq(2).click({ force: true }),
    Enter_Special_Request: () => cy.get(".customTextArea > .ant-input"),
    Prefered_contact_method_dropdown: () =>
      cy.get("#contactPreferenceType").click({ force: true }),
    Prefered_contact_method_dropdown_first_option: () =>
      cy.get(".ant-select-item-option-content").eq(2).click({ force: true }),
    Hear_about_us_dropdown: () =>
      cy
        .get(
          ":nth-child(5) > .custom-select-inner > .ant-select > .ant-select-selector"
        )
        .click({ force: true }),
    Hear_about_us_second_option: () =>
      cy.get(".ant-select-item-option-content").eq(2).click({ force: true }),
    Enter_Name: () => cy.get(".sc-dtInlm > .ant-input"),
    Press_submit_button: () =>
      cy.get("#submitInquiryBtn").click({ force: true }),
    Sucess_message: () =>
      cy.get("#swal2-title").contains("Your request has been submitted."),
    message_button_ok: () => cy.get(".swal2-confirm").click({ force: true })
  };

  Villa_Page() {
    this.elements.Wait_4000();
    this.elements.Open_Destination();
    this.elements.Wait_4000();
    this.elements.Navigate_to_Miami();
    this.elements.Wait_4000();
    this.elements.Click_Villa_Isola_View_Detail_Button();
    this.elements.Wait_4000();
  }

  Isola_View_Photo() {
    this.elements.Click_Villa_Isola_View_Photo();
    this.elements.Wait_4000();
    this.elements.Scroll_Next_In_View_Photo_Of_Villa_Isola();
    this.elements.Wait_4000();
    this.elements.Close_In_View_Photo_Of_Villa_Isola();
    this.elements.Wait_4000();
  }

  Villa_Inquire_Form() {
    this.elements.Villa_Inquire();
    this.elements.Villa_booking_date_field();
    cy
      .get(
        ".sc-lcIPJg > .sc-eqUAAy > .DateRangeCalender > :nth-child(1) > .react-datepicker > .react-datepicker__navigation > .react-datepicker__navigation-icon"
      )
      .click({ force: true });
    this.elements.Villa_Start_date_19Feb();
    this.elements.Villa_End_date_29Feb();
    this.elements.Villa_calender_submit_button();
    this.elements.Number_Of_Guests_dropdown();
    this.elements.Number_Of_Guests_dropdown_third_option();
    this.elements.Enter_Special_Request().type("Make It Super Clean");
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Hear_about_us_dropdown();
    this.elements.Hear_about_us_second_option();
    this.elements.Enter_Name().type("test");
    this.elements.Press_submit_button();
    // this.elements.Wait_4000();
    // this.elements.Sucess_message();
    // this.elements.message_button_ok();
  }
}

module.exports = new VillaPage();
