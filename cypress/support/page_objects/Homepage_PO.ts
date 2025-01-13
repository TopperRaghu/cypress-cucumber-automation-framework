/// <reference types ="cypress" />

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {

  homePageElement={
      contactUsButton:()=>cy.get("#contact-us"),
      loginButton:()=>cy.get("#login-portal"),
  }

  navigateToHomepage() {
    super.navigate("");
  }
 
  clickOnContactUs_Button(){
    this.homePageElement.contactUsButton().invoke("removeAttr","target").click();
  }

  clickOnLoginButton(){
    this.homePageElement.loginButton().invoke("removeAttr","target").click();
  }

}
export default Homepage_PO;
