@regression
@clear-todo-list
Feature: clear complted todos items

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


    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Active    | 5           |
            | Completed | 0           |
            | All       | 5           |

    Scenario: complete the todos and verify its style
        When click on "PQRS" todos radio
        Then verify clear completed button is shown
        And verify style for "PQRS" todos item should be 'line-through'

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 1           |
            | Active    | 4           |
            | All       | 5           |

    Scenario: clear the completed todos
        When click on clear completed button
        And verify clear completed button is not shown

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 0           |
            | Active    | 4           |
            | All       | 4           |

    Scenario: no link (Completed/All/Active) is present
        When click on select all todos
        And click on clear completed button
        Then verify "Completed" tab is not shown
        And verify "Active" tab is not shown
        And verify "All" tab is not shown
            