describe('Add Prospect Page', function() {
  it('CSV prospects', function() {
 cy.visit('https://klenty-test-3.herokuapp.com');
    cy.get('#username').type('sambatest07@zoho.com');
    cy.get('#password').type('klenty123$');
    cy.get('#loginSubmit').click();
    cy.wait(30000);
if (expect (cy.get('.p-b-sm > .fa')).to.exist){
cy.wait(2000);
cy.get('.p-b-sm > .fa').click();
}

cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click();
cy.get('[ui-sref="app.addProspect"] > .md-ink-ripple').click();
cy.wait(2000);
cy.get('.col-md-12.m-b > .col-md-12.no-padding > .col-md-10 > .md-no-tab-content > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > .md-active').click();



         
    




})
})
