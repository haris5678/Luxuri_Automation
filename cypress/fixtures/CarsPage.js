class CarsPage {
  elements = {
    Navigate_to_cars_page: () =>
      cy
        .get('.main_navbar_menu_items > [href="/luxury-car-rentals-miami"]')
        .click({ force: true }),
    Click_Car_Logo_Lamborghini: () =>
      cy.get(".swiper-slide-active").click({ force: true }),
    Check_Lamborghini_Logo_Contains_Lamborghini_Only: () =>
      cy
        .get(":nth-child(1) > .card > .card_image-container > .car-name")
        .contains("Lamborghini"),
    Car_detail: () =>
      cy
        .get(":nth-child(1) > .card > .card_info-container > .detail-btn")
        .click({ force: true }),
    Car_inquire: () => cy.get("#carDetail_Inquire").click({ force: true }),
    Wait_6000: () => cy.wait(6000),
    Wait_4000: () => cy.wait(4000),
    Car_booking_date_field: () => cy.get(".datepicker").click({ force: true }),
    Car_dropoff_date_13Dec: () =>
      cy
        .get(
          ":nth-child(4) > .react-datepicker__month > :nth-child(5) > .react-datepicker__day--030"
        )
        .click({ force: true }),
    Car_pickup_date_30Nov: () =>
      cy
        .get(
          ":nth-child(4) > .react-datepicker__month > :nth-child(5) > .react-datepicker__day--030"
        )
        .click({ force: true }),
    Car_calender_submit_button: () =>
      cy.get("#carDateRangeBtn").click({ force: true }),
    Prefered_contact_method_dropdown: () =>
      cy.get("#contactPreferenceType").click({ force: true }),
    Prefered_contact_method_dropdown_first_option: () =>
      cy.get(".ant-select-item-option-content").eq(0).click({ force: true }),
    Enter_phone_number: () => cy.get(":nth-child(3) > .ant-input"),
    Hear_about_us_dropdown: () =>
      cy.get("#sourcePreferenceType").click({ force: true }),
    Hear_about_us_second_option: () =>
      cy.get(".ant-select-item-option-content").eq(4).click({ force: true }),
    Enter_Name: () => cy.get(":nth-child(5) > .ant-input"),
    Press_submit_button: () =>
      cy.get("#carDetailInquirySubmitBtn").click({ force: true }),
    Sucess_message: () =>
      cy.get("#swal2-title").contains("Your request has been submitted."),
    message_button_ok: () => cy.get(".swal2-confirm").click({ force: true }),
    Car_Scroller_All: () => cy.get(".filter_items > .active").contains("All"),

    //negative test cases
    // Error_Message_For_date_field: () =>
    // cy.get(':nth-child(2) > .sc-aXZVg'),
    Error_Message_For_prefered_contact_field: () =>
      cy.get(":nth-child(2) > .sc-aXZVg"),
    Error_Message_For_How_Did_You_Hear_field: () =>
      cy.get(":nth-child(3) > .sc-aXZVg"),
    Error_Message_For_Name_field: () => cy.get(".sc-bXCLTC > .sc-aXZVg")
  };

  Cars_Page() {
    this.elements.Navigate_to_cars_page();
  }
  Explore_Car_Brands() {
    this.elements.Car_Scroller_All();
  }

  Click_Car_Logo_Lamborghini() {
    this.elements.Click_Car_Logo_Lamborghini();
    this.elements.Check_Lamborghini_Logo_Contains_Lamborghini_Only();
  }
  Car_detail_page() {
    this.elements.Car_detail();
    cy.scrollTo("center");
    this.elements.Wait_6000();
  }
  Open_Inquire_Form() {
    this.elements.Car_inquire();
    this.elements.Car_booking_date_field();
    this.elements.Car_pickup_date_30Nov();
    this.elements.Car_dropoff_date_13Dec();
    this.elements.Car_calender_submit_button();
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Enter_phone_number().type("12345678945");
    this.elements.Hear_about_us_dropdown();
    // this.elements.Wait_6000();
    this.elements.Hear_about_us_second_option();
    this.elements.Enter_Name().type("test");
    this.elements.Press_submit_button();
    this.elements.Wait_4000();
    this.elements.Sucess_message();
    this.elements.message_button_ok();
    // this.elements.Wait_6000();
  }

  //Negative Test Cases

  Submit_Empty_Inquire_Form() {
    this.elements.Car_inquire();

    this.elements.Press_submit_button();
    this.elements.Wait_4000();
    // Date field error message is missing
    this.elements
      .Error_Message_For_prefered_contact_field()
      .contains("Contact preference is required");
    this.elements
      .Error_Message_For_How_Did_You_Hear_field()
      .contains("Source preference is required");
    this.elements.Error_Message_For_Name_field().contains("Name is required");
  }

  Submit_Form_Without_Selecting_Source() {
    this.elements.Car_inquire();
    this.elements.Car_booking_date_field();
    this.elements.Car_pickup_date_30Nov();
    this.elements.Car_dropoff_date_13Dec();
    this.elements.Car_calender_submit_button();
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Enter_phone_number().type("12345678945");
    this.elements.Enter_Name().type("test017");
    this.elements.Press_submit_button();
    this.elements.Wait_4000();
    cy.get(".sc-aXZVg").contains("Source preference is required");
    // this.elements.Error_Message_For_How_Did_You_Hear_field().contains('Source preference is required')
  }

  Submit_Form_Without_Entering_Name() {
    this.elements.Car_inquire();
    this.elements.Car_booking_date_field();
    this.elements.Car_pickup_date_30Nov();
    this.elements.Car_dropoff_date_13Dec();
    this.elements.Car_calender_submit_button();
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Enter_phone_number().type("12345678945");
    this.elements.Hear_about_us_dropdown();
    this.elements.Hear_about_us_second_option();
    // this.elements.Enter_Name().type("test017");
    this.elements.Press_submit_button();
    this.elements.Wait_4000();
    cy.get(".sc-aXZVg").contains("Name is required");
  }
}

module.exports = new CarsPage();
