@regression
@remove-todos-item
Feature: remove todos items by clicking on X

    Background: load the todos application into browser
        Given I am on the todos home page

    Scenario Outline: add few todos items
        When enter "<TODOS_ITEM>" as todos item
        And press return key
        Then verify the "<TODOS_ITEM>" is added in todos list
        And verify "<FOOTER_COUNT>" in footer

        Examples:
            | TODOS_ITEM | FOOTER_COUNT |
            | PQRS       | 1 item left  |
            | WXYZ       | 2 items left |
            | MNOP       | 3 items left |
            | EFGH       | 4 items left |
            | ZABC       | 5 items left |

    
    Scenario: remove item from todos list
        When remove "PQRS" item from todos list
        And click on "All"
        Then verify "4" todos under "All" tab

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 0           |
            | Active    | 4           |
            | All       | 4           |

    Scenario Outline: remove all items
        When click on "All"
        Then verify "<TODOS_COUNT>" todos under "All" tab
        When remove "<ITEM>" item from todos list

        Examples:
            |       ITEM        |   TODOS_COUNT     |
            |       WXYZ        |   4               |
            |       MNOP        |   3               |
            |       EFGH        |   2               |
            |       ZABC        |   1               |

    Scenario: no link (Completed/All/Active) is present
        Then verify "Completed" tab is not shown
        And verify "Active" tab is not shown
        And verify "All" tab is not shown