import {createRestaurant, createRestaurantWithDetails} from "../../src/test-utils/test-utils";

describe('Login Feature', () => {

  // it('should be enter in home page and see the list', () => {
  //
  //   cy.visit('/');
  //
  //   cy.contains('La Pasta');
  //   cy.contains('Niederdorfstrasse 80, 8001 Zürich, Schweiz');
  //   cy.contains('Type of cuisine: Italian');
  //
  //   cy.contains('Heugümper');
  //   cy.contains('Waaggasse 4, 8001 Zürich, Schweiz');
  //   cy.contains('Type of cuisine: Fusion');
  //
  //   cy.contains('Mesa');
  //   cy.contains('Weinbergstrasse 75, 8006 Zürich, Schweiz');
  //   cy.contains('Type of cuisine: European');
  //
  // });

  it('should show data of first restaurants at start', () => {

    cy.visit('/');

    cy.getByDataCySel("details-1");
    cy.getByDataCySel("details-2").should('not.exist');
  });


});
