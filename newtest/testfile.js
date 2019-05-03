describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://app.klenty.com');
    cy.get('#username').type('samba@klenty.com');
    cy.get('#password').type('klenty123$');
    cy.get('#loginSubmit').click();
    cy.get('.ng-isolate-scope > :nth-child(1) > .md-icon-button').click();
    cy.get('#a >.kl_cs_ptr').click();
    
    })
})
