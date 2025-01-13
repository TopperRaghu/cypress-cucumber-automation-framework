/// <reference types ="cypress" />

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO{

    loginPageElement={
        userName:()=>cy.get("#text"),
        passWord:()=>cy.get("#password"),
        loginButton:()=>cy.get("#login-button")
    }

    navigate_To_LoginPage(){
         super.navigate("Login-Portal/index.html")
         //cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
    }

    enter_Username(userName){
        this.loginPageElement.userName().type(userName);
    }

    enter_Password(passWord){
      this.loginPageElement.passWord().type(passWord);
    }

    click_On_Login_Button(){
        this.loginPageElement.loginButton().click();
    }

}
export default Login_PO;