// class YatchPage {
//     elements = {
//       Navigate_to_cars_page: () =>
//         cy
//           .get('.main_navbar_menu_items > [href="/luxury-car-rentals-miami"]')
//           .click({ force: true }),
//       Click_Car_Logo_Lamborghini: () =>
//         cy.get(".swiper-slide-active").click({ force: true }),
//       Check_Lamborghini_Logo_Contains_Lamborghini_Only: () =>
//         cy
//           .get(":nth-child(1) > .card > .card_image-container > .car-name")
//           .contains("Lamborghini"),
//       Car_detail: () =>
//         cy
//           .get(":nth-child(1) > .card > .card_info-container > .detail-btn")
//           .click({ force: true }),
//       Car_inquire: () => cy.get("#carDetail_Inquire").click({ force: true }),
//       Wait_6000: () => cy.wait(6000),
//       Wait_4000: () => cy.wait(4000),
//       Car_booking_date_field: () => cy.get(".datepicker").click({ force: true }),
//       Car_dropoff_date_14March: () =>
//         cy
//           .get(":nth-child(4) > .react-datepicker__day--019")
//           .click({ force: true }),
//       Car_pickup_date_19March_2024: () =>
//         cy
//           .get(":nth-child(4) > .react-datepicker__day--019")
//           .click({ force: true }),

//       Car_calender_submit_button: () =>
//         cy.get("#carDateRangeBtn").click({ force: true }),
//       Prefered_contact_method_dropdown: () =>
//         cy.get("#contactPreferenceType").click({ force: true }),
//       Prefered_contact_method_dropdown_first_option: () =>
//         cy.get(".ant-select-item-option-content").eq(0).click({ force: true }),
//       Prefered_contact_method_dropdown_second_option: () =>
//         cy.get(".ant-select-item-option-content").eq(1).click({ force: true }),
//       Prefered_contact_method_dropdown_third_option: () =>
//         cy.get(".ant-select-item-option-content").eq(2).click({ force: true }),
//       Enter_phone_number: () => cy.get(":nth-child(3) > .ant-input"),
//       Enter_Email: () => cy.get(":nth-child(3) > .ant-input"),
//       Hear_about_us_dropdown: () =>
//         cy.get("#sourcePreferenceType").click({ force: true }),
//       Hear_about_us_second_option: () =>
//         cy.get(".ant-select-item-option-content").eq(4).click({ force: true }),
//       Enter_Name: () => cy.get(":nth-child(5) > .ant-input"),
//       Press_submit_button: () =>
//         cy.get("#carDetailInquirySubmitBtn").click({ force: true }),
//       Sucess_message: () =>
//         cy.get("#swal2-title").contains("Your request has been submitted."),
//       message_button_ok: () => cy.get(".swal2-confirm").click({ force: true }),
//       Car_Scroller_All: () => cy.get(".filter_items > .active").contains("All"),

//       Car_pickup_date_19Nov: () =>
//         cy
//           .get(
//             ":nth-child(4) > .react-datepicker_month > :nth-child(5) > .react-datepicker_day--029"
//           )
//           .click({ force: true }),

//       //negative test cases

//       Error_Message_For_prefered_contact_field: () =>
//         cy.get(":nth-child(2) > .sc-aXZVg"),
//       Error_Message_For_How_Did_You_Hear_field: () =>
//         cy.get(":nth-child(3) > .sc-aXZVg"),
//       Error_Message_For_Name_field: () => cy.get(".sc-bXCLTC > .sc-aXZVg")
//     };

//     Cars_Page() {
//       this.elements.Navigate_to_cars_page();
//     }
//     Explore_Car_Brands() {
//       this.elements.Car_Scroller_All();
//     }

//     Click_Car_Logo_Lamborghini() {
//       this.elements.Click_Car_Logo_Lamborghini();
//       this.elements.Check_Lamborghini_Logo_Contains_Lamborghini_Only();
//     }
//     Car_detail_page() {
//       cy.wait(3000);
//       this.elements.Car_detail();
//       cy.wait(3000);
//       cy.scrollTo("center");
//       this.elements.Wait_6000();
//     }
//     Open_Inquire_Form() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_first_option();
//       this.elements.Enter_phone_number().type("12345678945");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("test");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       this.elements.Sucess_message();
//       this.elements.message_button_ok();
//     }

//     //Negative Test Cases

//     Submit_Empty_Inquire_Form() {
//       this.elements.Car_inquire();

//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       // Date field error message is missing
//       this.elements
//         .Error_Message_For_prefered_contact_field()
//         .contains("Contact preference is required");
//       this.elements
//         .Error_Message_For_How_Did_You_Hear_field()
//         .contains("Source preference is required");
//       this.elements.Error_Message_For_Name_field().contains("Name is required");
//     }

//     Submit_Form_Without_Selecting_Source() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_first_option();
//       this.elements.Enter_phone_number().type("12345678945");
//       this.elements.Enter_Name().type("test018");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       cy.get(".sc-aXZVg").contains("Source preference is required");
//     }

//     Submit_Form_Without_Entering_Name() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_first_option();
//       this.elements.Enter_phone_number().type("12345678945");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       // this.elements.Enter_Name().type("test019");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       cy.get(".sc-aXZVg").contains("Name is required");
//     }

//     Submit_Form_Without_Entering_Email() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_third_option();
//       //this.elements.Enter_phone_number().type("12345678945");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("test020");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       cy.get(".sc-aXZVg").contains("Email is required");
//     }

//     //******************New testcases*******************/

//     Submit_Form_with_Past_Pickup_Date() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       this.elements.Car_pickup_date_19Nov();
//     }

//     Submit_Form_with_Nonnumeric_Characters_in_Phone_Number() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_first_option();
//       this.elements.Enter_phone_number().type("ABCDEFGHIJKL");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("test017");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       cy.get(".sc-aXZVg").contains("Phone is required");
//     }

//     Select_Text_Message_without_Entering_Phone_Number() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_second_option();
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("test017");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//     }

//     Submit_Form_with_Special_Characters_in_Name() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_first_option();
//       this.elements.Enter_phone_number().type("12345678945");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("#!@*&^");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//     }

//     Submit_Form_with_Invalid_Email_Format() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_third_option();
//       this.elements.Enter_Email().type("testemail");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("test017");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//       cy.get(".sc-aXZVg").contains("Email should be valid");
//     }

//     Submit_Form_with_Dropoff_Date_Earlier_than_Pickup_Date() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_third_option();
//       this.elements.Enter_Email().type("testemail@gmail.com");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("test017");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//     }

//     Submit_Form_with_Very_Long_Name() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_third_option();
//       this.elements.Enter_Email().type("testemail@gmail.com");
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements
//         .Enter_Name()
//         .type(
//           "Submit_Form_with_Very_Long_Namesdjashdjhasdhjashdjhakdhkjashdkhasjdhjashdkhasdhakshdjkashdjhkashdshak"
//         );
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//     }

//     Verify_Missing_Contact_Method_Selection() {
//       this.elements.Car_inquire();
//       this.elements.Car_booking_date_field();
//       cy
//         .get(
//           ".react-datepicker__navigation--next > .react-datepicker__navigation-icon"
//         )
//         .click({ force: true });
//       this.elements.Car_pickup_date_19March_2024();
//       this.elements.Car_dropoff_date_14March();
//       this.elements.Car_calender_submit_button();
//       this.elements.Prefered_contact_method_dropdown();
//       this.elements.Prefered_contact_method_dropdown_first_option();
//       this.elements.Hear_about_us_dropdown();
//       this.elements.Hear_about_us_second_option();
//       this.elements.Enter_Name().type("TC032");
//       this.elements.Press_submit_button();
//       this.elements.Wait_4000();
//     }
//   }

//   module.exports = new YatchPage();

class YatchPage {
  elements = {
    Navigate_to_yatch_page: () =>
      cy
        .get('.main_navbar_menu_items > [href="/luxury-yacht-rentals-miami"]')
        .click({ force: true }),
    Access_Fleet: () =>
      cy.get("#yachtAccessSecretFleetBtn").click({ force: true }),
    Wait_6000: () => cy.wait(6000),
    Wait_4000: () => cy.wait(4000),
    Required_Message: () => cy.get(".customTextArea > .ant-input"),
    Prefered_contact_method_dropdown: () =>
      cy.get("#contactPreferenceType").click({ force: true }),
    Prefered_contact_method_dropdown_first_option: () =>
      cy.get(".ant-select-item-option-content").eq(0).click({ force: true }),
    Enter_phone_number: () => cy.get(":nth-child(3) > .ant-input"),
    Enter_Name: () => cy.get(":nth-child(4) > .ant-input"),
    Press_submit_button: () =>
      cy.get("#yachtSecretFleetSubmitBtn").click({ force: true }),
    Sucess_message: () =>
      cy.get("#swal2-title").contains("Your request has been submitted."),
    message_button_ok: () => cy.get(".swal2-confirm").click({ force: true }),
    //negative test cases

    Error_Message_For_prefered_contact_field: () =>
      cy.get(":nth-child(2) > .sc-aXZVg"),
    Error_Message_For_How_Did_You_Hear_field: () =>
      cy.get(":nth-child(3) > .sc-aXZVg"),
    Error_Message_For_Name_field: () => cy.get(".sc-dAbbOL > .sc-aXZVg")
  };

  Yatch_Page() {
    this.elements.Navigate_to_yatch_page();
    this.elements.Wait_4000();
  }
  Open_Access_Secret_Fleets() {
    this.elements.Access_Fleet();
    this.elements.Required_Message().type("NO");
    this.elements.Prefered_contact_method_dropdown();
    this.elements.Prefered_contact_method_dropdown_first_option();
    this.elements.Enter_phone_number().type("092038238");
    this.elements.Enter_Name().type("Yatch_Test");
    this.elements.Press_submit_button();
    this.elements.Sucess_message();
  }
  Submit_Empty_Access_Secret_Fleets() {
    this.elements.Access_Fleet();
    this.elements.Press_submit_button();
    this.elements.Wait_4000();
    // Date field error message is missing
    this.elements
      .Error_Message_For_prefered_contact_field()
      .contains("Contact preference is required");
    // this.elements
    //   .Error_Message_For_How_Did_You_Hear_field()
    //   .contains("Source preference is required");
    this.elements.Error_Message_For_Name_field().contains("Name is required");
  }
}

module.exports = new YatchPage();
