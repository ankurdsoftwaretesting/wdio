@regression
@todos-ui
Feature: todos page verification

    Background: load the todos application into browser
        Given I am on the todos home page

    Scenario: page verification when there is no todos item
        Then verify the title
        And verify the todos page is loaded
        And verify footer links are not shown

    Scenario: page verification when there is a todos item
        When enter "ABCD" as todos item
        And press return key
        Then verify the "ABCD" is added in todos list
        And verify "1 item left" in footer
        And verify footer links are shown
        


