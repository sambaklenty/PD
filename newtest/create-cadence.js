describe('create cadence', function() {
  it('Prospects page', function(){
 cy.visit('https://klenty-test-3.herokuapp.com'); 
    cy.get('#username').type('sambatest07@zoho.com');
    cy.get('#password').type('klenty123$');
    cy.get('#loginSubmit').click();

 cy.wait(25000);
cy.get('[ui-sref="app.cadence"] > .md-ink-ripple').click();//click on cadence 
 cy.wait(1000);
cy.get(':nth-child(4) > .md-icon-button').click(); //create cadence icon 
cy.get('.cadencenametextbox').type(generateCadencename());
cy.get('md-fab-trigger').trigger('mouseover');
cy.get('.md-fab > .fa-envelope').click();//click email on hover
cy.get('[ng-model="selectedTemplateObj.subject"]').type("test email");//enter subject
cy.get('.n-kl-link').click(); //click placeholder
cy.get('.kl_cadence_list > :nth-child(2)').click();
cy.get('.md-actions > :nth-child(3) > .md-primary').click(); //inseert first name asplace holder to subject
//cy.get('#mce-content-body').type("lorem ipsum");//body of email
cy.get('.header > .col-md-12 > .col-md-4 > .md-raised').click();
cy.get('.col-md-4 > .btn').click();
cy.get('.selectedPanel').click();







function generateCadencename()
{
 var n=Math.random().toString(36).substr(2, 5);
var cadence_name = "cadence" + n ;
return cadence_name;
}



})
})
