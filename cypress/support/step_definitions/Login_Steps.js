/// <reference types ="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage=new Login_PO();

When('I navigate to Webdriver University Login Page',()=>{
    loginPage.navigate_To_LoginPage();
})

When('I enter the User name {string}',(userName)=>{
    loginPage.enter_Username(userName);
})

When('I enter the password {string}',(password)=>{
    loginPage.enter_Password(password);
})

When('I click on the login button',()=>{
    loginPage.click_On_Login_Button();
})

Then('I should be presented with an alert box which contains text {string}',(alert)=>{
    
})