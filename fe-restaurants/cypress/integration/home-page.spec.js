describe('Home Page Feature', () => {

  it('should be enter in home page and see the list', () => {

    cy.visit('/');

    cy.contains('La Pasta');
    cy.contains('Niederdorfstrasse 80, 8001 Zürich, Schweiz');
    cy.contains('Type of cuisine: Italian');

    cy.contains('Heugümper');
    cy.contains('Waaggasse 4, 8001 Zürich, Schweiz');
    cy.contains('Type of cuisine: Fusion');

    cy.contains('Mesa');
    cy.contains('Weinbergstrasse 75, 8006 Zürich, Schweiz');
    cy.contains('Type of cuisine: European');

  });

  it('should show details of first restaurants at start', () => {

    cy.visit('/');

    cy.get("#details-1");
    cy.get("#details-2").should('not.exist');
  });

  it('should close details when click the same restaurant in view details', () => {

    cy.visit('/');

    cy.get('#list-1').click();
    cy.get("#details-1").should('not.exist');
  });

  it('should show details of restaurant when click on a card', () => {

    cy.visit('/');

    cy.contains('Heugümper').click();

    cy.get("#details-2");
    cy.get("#details-1").should('not.exist');
  });

});
