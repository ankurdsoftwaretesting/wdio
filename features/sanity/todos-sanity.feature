@sanity
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

    Scenario Outline: add few todos items
        When enter "<TODOS_ITEM>" as todos item
        And press return key
        Then verify the "<TODOS_ITEM>" is added in todos list
        And verify "<FOOTER_COUNT>" in footer

        Examples:
            | TODOS_ITEM | FOOTER_COUNT |
            | PQRS       | 2 items left |
            | WXYZ       | 3 items left |
            | MNOP       | 4 items left |
            | EFGH       | 5 items left |
            | ZABC       | 6 items left |

    Scenario Outline: complete the todos
        When click on "<ITEM>" todos radio

        Examples:
            | ITEM | 
            | ABCD |
            | PQRS |
            | ZABC |

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 3           |
            | All       | 6           |
            | Active    | 3           |

    Scenario Outline: remove all items
        When click on "Active"
        Then verify "<TODOS_COUNT>" todos under "Active" tab
        When remove "<ITEM>" item from todos list

        Examples:
            |       ITEM        |   TODOS_COUNT     |
            |       WXYZ        |   3               |
            |       MNOP        |   2               |
            |       EFGH        |   1               |
            

    Scenario: no link (Completed/All/Active) is present
        When click on "Completed"
        And click on clear completed button
        Then verify "Completed" tab is not shown
        And verify "Active" tab is not shown
        And verify "All" tab is not shown