@regression
@todos-active-link
Feature: todos items under active link

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

    
    Scenario: mark all todos as complete for all todos
        When click on "Active"
        And click on select all todos
        Then verify clear completed button is shown

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 5           |
            | Active    | 0           |
            | All       | 5           |

    Scenario: mark all todos as un-complete
        When click on select all todos
        Then verify clear completed button is not shown

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 0           |
            | Active    | 5           |
            | All       | 5           |

    Scenario: verify the order of the todos in all tab
        When click on "Active"
        Then verify the order of the todos