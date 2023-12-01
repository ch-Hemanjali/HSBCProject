class hsbcatm{
    
    clickonmenu(){
        cy.get('span[class^="header-main"]').contains('Online Banking').click();
    }
    clickonBankandAtm(){
        // cy.get('a[href="/ways-to-bank/branches/"]').contains('Branches & ATM').click({force: true});
        cy.visit('https://www.hsbc.co.in/ways-to-bank/branches/');
    }
    // checkHeader(){
    //     cy.get('h1[class^="A-TYP38L-RW-ALL"]').should('eq',"Branches & ATMs");
    // }
    // clickBranchandAtmbtn(){
    //     cy.get('a[class="A-BTNP-RW-ALL"]').click({force: true});
    // }
    // searchPostcode(){
    //     cy.get('input[id="searchInput"]').type("India")
    // }

}

export default hsbcatm;