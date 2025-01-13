/// <reference types ="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`I enter the first name`,()=>{
  cy.get('input[name="first_name"]').type("Augsitn")
})

When(`I enter the last name`,()=>{
  cy.get('input[name="last_name"]').type("Hue");
})

When(`I enter email address`,()=>{
  cy.get('input[name="email"]').type("HueAug@gmail.com")
})

When(`I added the comment`,()=>{
  cy.get('[name="message"]').type("I have the following comment")
})

When(`I clicked on the submit button`,()=>{
  cy.get('input[value="SUBMIT"]').click({force:true})
})

Then(`U should be presented with a successful contact us Submission message`,()=>{
    cy.get('#contact_reply h1').should('have.text','Thank You for your Message!')
})

When('I enter the first name {string}',(firstName)=>{
    cy.get('input[name="first_name"]').type(firstName)
  })
  
  When('I enter the last name {string}',(lastName)=>{
    cy.get('input[name="last_name"]').type(lastName);
  })
  
  When('I enter email address {string}',(email)=>{
    cy.get('input[name="email"]').type(email)
  })
  
  When('I added the comment {string}',(Comment)=>{
    cy.get('[name="message"]').type(Comment)
  })

  When('I enter the first name {string} and last name {string}',(firstName, lastName)=>{
    cy.get('input[name="first_name"]').type(firstName)
    cy.get('input[name="last_name"]').type(lastName);
  })

  When('I enter email address  {string} and comment {string}',(email, comment)=>{
    cy.get('input[name="email"]').type(email)
    cy.get('[name="message"]').type(comment)
  })
