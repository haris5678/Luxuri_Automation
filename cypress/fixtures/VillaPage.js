class VillaPage {
  elements = {
    Open_Destination: () =>
      cy.get(".main_navbar_menu_items > p").click({ force: true }),
    Navigate_to_Miami: () =>
      cy.get(".searchVillas_content_places_card_1").click({ force: true }),
    Wait_6000: () => cy.wait(6000),
    Wait_4000: () => cy.wait(4000)
  };
  Villa_Page() {
    this.elements.Wait_4000();
    this.elements.Open_Destination();
    this.elements.Wait_4000();
    this.elements.Navigate_to_Miami();
  }
}

module.exports = new VillaPage();
