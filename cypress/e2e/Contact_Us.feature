
@Contact_us @regression
Feature: Webdriver University - Contact Us Page

Background: Pre condition
        Given I navigate to Webdriver University homapage
        When  I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And   I enter the first name
        And   I enter the last name
        And   I enter email address
        And   I added the comment
        And   I clicked on the submit button
        Then  U should be presented with a successful contact us Submission message
@smoke
Scenario: Valid Contact Us Form Submission with -Specific data
        And   I enter the first name "Mark"
        And   I enter the last name "Wood"
        And   I enter email address "Mwood@gmail.com"
        And   I added the comment "Great pacer!"
        And   I clicked on the submit button
        Then  U should be presented with a successful contact us Submission message

Scenario Outline: Valid Contact Us Form 
        And   I enter the first name '<firstName>' and last name '<lastName>'
        And   I enter email address '<emailAddress>' and comment '<comment>'
        And   I clicked on the submit button
        Then  U should be presented with a successful contact us Submission message
    Examples:     
            |firstName | lastName | emailAddress          |comment|
            |Mark      | Wood     | Mwood@gmail.com       |Good Paccer!      |
            |John      | Cena     | Jcena@yahoo.com       |G.O.A.T Wrestler! |
            |BretT     | Lee      | BretTl@rediffmail.com |Great bowler!     |