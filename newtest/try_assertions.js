describe('create cadence', function() {
  it('Prospects page', function(){
 cy.visit('https://klenty-test-3.herokuapp.com'); 
    cy.get('#username').type('sambatest07@zoho.com');
    cy.get('#password').type('klenty123$');
    cy.get('#loginSubmit').click();
    cy.should('be.visible');
cy.wait(25000);
cy.get('.p-b-sm > .fa').click();
/*cy.get('[ui-sref="app.cadence"] > .md-ink-ripple').click();//click on cadence 
 cy.wait(10000);
cy.get('.box-inner > :nth-child(2)').contains('1820').click();
cy.get('.m-b.no-padding > :nth-child(1) > .col-md-2 > .md-icon-button').click();
cy.get('[ng-click="moveNextStep(addProspectPageDetail.PROSPECTDETAILS, false, importType.EXISTING)"]').click();
cy.get()*/

cy.get('#aside > .box > .box-row > .box-cell > .box-inner > nav > .nav > .active > .md-ink-ripple').click();
cy.get('[ui-sref="app.addProspect"] > .md-ink-ripple').click();

    })
})
