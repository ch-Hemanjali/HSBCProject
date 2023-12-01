class Logonpage{
    validateLogo(){
        cy.get("img[src='/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg']");
    }
    validateLogon(){
        cy.get('span').contains("Log On").should('eq','Log On');
    }
    checkCoutinueBtndiasabled(){
        cy.get('button[name="continue"]').should('be.disabled');
    }
    // checkCoutinueBtnenable(){
    //     cy.get('button[name="continue"]').should('be.enable');
    // }
    checkUserNameBlank(){
        cy.get('input[name="name"]').should('have.value','');
    }
    checkRemCBIUnchecked(){
        cy.get('[type="checkbox"]').should('not.be.checked');
    }
    checkRemCBIchecked(){
        cy.get('[type="checkbox"]').click();
    }
    getUserName(){
        return cy.get('input[name="name"]');
    }
    enterUserName(username:any){
        const un =this.getUserName();
        un.type(username);
    }
    clearUserName(){
        cy.get('input[name="name"]').clear();
    }
    Clickicon(){
        cy.get('span[class="sr-only"]').click({force: true});
    }
    Clickdeleteicon(){
        cy.get('span[class="icon icon-delete"]').click();
    }

}
export default Logonpage
