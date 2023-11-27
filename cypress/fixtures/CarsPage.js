class CarsPage {
  elements = {
    Navigate_to_cars_page: () =>
      cy
        .get('.main_navbar_menu_items > [href="/luxury-car-rentals-miami"]')
        .click({ force: true }),
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
          ":nth-child(5) > .react-datepicker__month > :nth-child(3) > .react-datepicker__day--013"
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
    message_button_ok: () => cy.get(".swal2-confirm").click({ force: true })
  };

  Cars_Page() {
    this.elements.Navigate_to_cars_page();
  }
  Car_detail_page() {
    this.elements.Car_detail();
    this.elements.Wait_6000();
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
}

module.exports = new CarsPage();
