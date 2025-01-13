/// <reference types ="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";
const basePage = new Base_PO();
const homapage = new Homepage_PO();
//const url = "https://webdriveruniversity.com/";

Given(`I navigate to Webdriver University homapage`, () => {
  // cy.visit(url);
  //basePage.navigate("");
  homapage.navigateToHomepage("");
});

When("I click on the contact us button", () => {
  //cy.get("#contact-us").invoke("removeAttr","target").click();
  //cy.clickAndOpenLink_InSameTab("#contact-us")
  homapage.clickOnContactUs_Button();
});

When("I click on the login portal button", () => {
  //  cy.get("#login-portal").invoke("removeAttr","target").click();
  //cy.clickAndOpenLink_InSameTab("#login-portal");
  homapage.clickOnLoginButton();
});
