@regression
@edit-todos-item
Feature: edit todos items

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
            | TEST       | 3 items left |
            | EFGH       | 4 items left |
            | ZABC       | 5 items left |

    
    Scenario Outline: edit the todos item
        When double click on "<TODO_ITEM>" todos item
        And edit todos item with "<ADD_TEXT>"
        Then verify todos item "<TODO_ITEM>" is edited with "<EDITED_TODOS>"
        
    Examples:
        | TODO_ITEM |   ADD_TEXT     | EDITED_TODOS   |
        |   TEST    |  SANITY        | TEST - SANITY  |

    Scenario Outline: verify todos items in different tabs
        When click on "<TAB>"
        Then verify "<TODOS_COUNT>" todos under "<TAB>" tab

        Examples:
            | TAB       | TODOS_COUNT |
            | Completed | 0           |
            | Active    | 5           |
            | All       | 5           |
