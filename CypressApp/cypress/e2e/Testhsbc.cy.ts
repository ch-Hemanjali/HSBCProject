
import Homepage from './Homepage.cy';
import Logonpage from './Logonpage.cy';

describe('Login', () => {
  let userdata : {email : any; };
  before(function(){
    cy.fixture('example').then(function(data){
      userdata = data;
      return userdata;
  })
})

  it('Visits the Home page', () => {
    const home = new Homepage();
    const logon= new Logonpage();
    home.visit();
    home.validateTitle();
    home.clickLogonButton();
    logon.checkCoutinueBtndiasabled();
    logon.validateLogo();
    logon.checkUserNameBlank();
    logon.enterUserName(userdata.email);
    // // logon.checkCoutinueBtnenable();
    logon.checkRemCBIUnchecked();
    logon.checkRemCBIchecked();
    logon.Clickicon();
    logon.Clickdeleteicon();
  })
})
