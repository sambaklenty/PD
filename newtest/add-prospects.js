describe('Add Prospect Page', function() {
  it('Prospects page', function() {
 cy.visit('https://klenty-test-3.herokuapp.com');
    cy.get('#username').type('sambatest07@zoho.com');
    cy.get('#password').type('klenty123$');
    cy.get('#loginSubmit').click();
    cy.wait(30000);
if (expect (cy.get('.p-b-sm > .fa')).to.exist){
cy.get('.p-b-sm > .fa').click();}
else{}
    cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
/*add prospects*/
    cy.get('.col-md-3 > .md-icon-button').click();
    cy.get('.col-md-10 > :nth-child(1) > .kl_inputbox').type('Automated prospectss');
    cy.get('.col-md-10 > :nth-child(2) > .kl_inputbox').type('Last name');
    cy.get('.col-md-10 > :nth-child(3) > .kl_inputbox').type(generateEmail());
    cy.get('#showQuickAddProspectModal > .right > .kl_new_slidein_filter > .f-footer > .md-raised').click(); //create quick add prospect
cy.wait(10000);

//select the topmost prospect and add to the top most cadence

/*cy.get(':nth-child(2) > tr > :nth-child(1) > .md-primary > .md-container').click();
cy.get('.btn-group.m-xs > .m-xs > .ng-scope').click();
cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').click();*/

//select all in page
cy.get('.selectAllCheckbox > .md-primary > .md-container').click(); 
cy.get('.btn-group.m-xs > .m-xs > .ng-scope').click();
cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').click();
 //select all prospects in dashboard
/*cy.get('.selectAllText').click(); 
cy.get('.dropdown-menu > .ng-scope > .ng-binding').click();*/


cy.get('.col-md-4 > .md-raised').click();//review
cy.get('.col-md-4 > .btn > .ng-scope').click(); //preview and start
cy.get('.col-md-4 > .md-raised > .ng-scope').click(); //start cadence
//cy.get('.col-md-4 > .md-raised').click(); //start cadence

  //cy.wait(2000);
    //cy.get('[ui-sref="app.addProspect"] > .md-ink-ripple').click();
    //cy.wait(13000);
    //cy.get('.fileContainer').click();




function generateEmail()
{
 var n=Math.floor(Math.random() * Math.floor(999));
var emailID = "testemail" + n + "@office.com";
return emailID;
}

})
})

