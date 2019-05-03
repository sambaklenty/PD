describe('Add Prospect Page', function() {
  it('Prospects page', function() {

login();
//quickaddProspect();
//addanyoftheprospecttocadence();
//addallprospectsinpage();
//selectallindashboard();
//reviewandstartcadence();
more();


function reviewandstartcadence(){

cy.get('.col-md-4 > .md-raised').click();//review
cy.get('.col-md-4 > .btn > .ng-scope').click(); //preview and start
cy.get('.col-md-4 > .md-raised > .ng-scope').click(); //start cadence
//cy.get('.col-md-4 > .md-raised').click(); //start cadence
}


function addanyoftheprospecttocadence(){

//select the any one of the prospect and add to the top most cadence
    cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
cy.get('.mdi-navigation-expand-more').click(); cy.get('[ng-click="limitFilter(100)"] > a').click();//select list number in page
cy.get(':nth-child('+ prospectchild()+') > tr > :nth-child(1) > .md-primary > .md-container').click();
cy.get('.btn-group.m-xs > .m-xs > .ng-scope').click();
cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').click();
reviewandstartcadence();
}

function addallprospectsinpage(){
//select all in page and add to cadence
    cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
cy.wait(10000);
cy.get('.selectAllCheckbox > .md-primary > .md-container').click(); 
/*cy.get('.btn-group.m-xs > .m-xs > .ng-scope').click();//add to cadence
cy.wait(2000);
//cy.get('tbody > :nth-child('+ nthchild()+ ') > :nth-child(2) > .ng-binding').click();//cadence select */
cy.wait(2000);
cy.get('.btn.pull-left > .ng-scope').click();//send email
cy.get('[ng-model="mailMergeDetailsObj.subject"]').type("test email for mail merge");//subject for email
cy.get('.col-md-4 > .md-raised').click(); //preview and send
cy.get('.col-md-8 > .md-raised').click(); //send emails
}

function more(){
cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
cy.wait(20000);
/*cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
cy.get('.mdi-navigation-expand-more').click(); cy.get('[ng-click="limitFilter(100)"] > a').click();//select no of prospects to list in page
cy.get(':nth-child('+ prospectchild()+') > tr > :nth-child(1) > .md-primary > .md-container').click();*/
cy.get('.selectAllCheckbox > .md-primary > .md-container').click(); //select all prospects in the page
cy.get('[is-open="status.isopen3"] > .m-xs').click();
//createtask();
addtolist();


}

function selectallindashboard(){
 //select all prospects in dashboard
    cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
cy.wait(2000);
cy.get('.selectAllText').click(); 
cy.get('.dropdown-menu > .ng-scope > .ng-binding').click();   
cy.get('.btn-group.m-xs > .m-xs').click();
cy.get('tbody > :nth-child('+ nthchild()+') > :nth-child(2) > .ng-binding').click();

}

function generateEmail()
{
 var n=Math.floor(Math.random() * Math.floor(999));
var emailID = "testemail" + n + "@office.com";
return emailID;
}

function login ()
{

cy.visit('https://klenty-test-3.herokuapp.com');
    cy.get('#username').type('sambatest07@gmail.com');
    cy.get('#password').type('klenty123$');
    cy.get('#loginSubmit').click();
    cy.wait(20000);}

function quickaddProspect()
{
/*add prospects*/
    cy.get('[ui-sref="app.prospects"] > .md-ink-ripple > .icon').click(); 
    cy.get('.col-md-3 > .md-icon-button').click();
    cy.get('.col-md-10 > :nth-child(1) > .kl_inputbox').type('Automated prospectss');
    cy.get('.col-md-10 > :nth-child(2) > .kl_inputbox').type('Last name');
    cy.get('.col-md-10 > :nth-child(3) > .kl_inputbox').type(generateEmail());
    cy.get(':nth-child(5) > .kl_inputbox').type ("Softsolns");
cy.wait(2000);
cy.get('md-pagination-wrapper > [aria-controls="tab-content-21"] > .ng-binding').click();
//cy.get('[ng-if="quickAddProspectObj.prospectCustomFields && quickAddProspectObj.prospectCustomFields.length"] > .m-t > .kl_inputbox').type("Custom field entry");//custom field value
cy.get('.col-md-12 > .kl_link').click(); //add custom field
cy.get('.col-md-8 > .kl_inputbox').type(customfieldname());
cy.get('.col-md-4 > .md-raised').click();//add field

    cy.get('#showQuickAddProspectModal > .right > .kl_new_slidein_filter > .f-footer > .md-raised').click({force: true}); //create quick add prospect
cy.wait(10000);
}

function nthchild()
{
var cadence_child = Math.floor(Math.random() * 5);
return cadence_child;
}

function prospectchild()
{
var prospectchildID = Math.floor(Math.random() * 100);
return prospectchildID;
}

function customfieldname()
{ var n=Math.random().toString(36).substr(2, 5);
return n;
}

function createtask(){
cy.get('[ng-click="startMailValidation(mailSendingOption.TASK, selectedID, selectAllCheckbox.selectAll, chipsObj, dashboardStatus)"] > a').click();//trigger create task in more
cy.get('.col-md-10 > .kl_inputbox').type("new task" + prospectchild());
cy.get('.taskComments').type("commennts");
cy.get('.header > .col-md-12 > .t-r > .md-raised').click();
}

function addtolist()
{
cy.get('[ng-click="bulkList(selectedID, selectAllCheckbox.selectAll, chipsObj, dashboardStatus, searchBox, prospectTotalCount)"] > a').click();//trigger list in more section
cy.get('.dir_search > .ng-pristine').click();
}

})
})

