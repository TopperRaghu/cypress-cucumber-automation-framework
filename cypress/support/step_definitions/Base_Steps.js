/// <reference types ="cypress" />
import { When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(()=>{
    cy.log("Executes before each Scenario/Test.");
    cy.clearAllLocalStorage();
})

Before({tags:"@smoke or @regression"},  ()=>{
    cy.log("Executes before each Scenario/Test.");
})

After(()=>{
    cy.log("Executes after each Scenario/Test.");
})

When('I wait for {int} seconds',(seconds)=>{
    cy.wait(seconds*1000);  // we can use under Background in our feature file
})