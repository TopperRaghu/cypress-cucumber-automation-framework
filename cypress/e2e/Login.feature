@login @regression
Feature: WebdriverUniversity - Login page
    Scenario: Validate valid and invalid login credentials
        Given I navigate to Webdriver University Login Page
        And   I enter the User name '<userName>' 
        And   I enter the password '<password>'
        And   I click on the login button
        Then  I should be presented with an alert box which contains text '<expextedAlertText>'

        Examples:
            | userName   | password      | expextedAlertText    |
            |  Webdriver | Webdriver123  | validation succeeded |
            |  Webdriver | Password123   | validation failed    |
            |  joe       | pass12345     | validation failed    |
