There are 8 test feature files as follows:

1- ./features/sanity/todos-sanity.feature
2- ./features/todos-all.feature
3- ./features/todos-clear.feature
4- ./features/todos-completed.feature
5- ./features/todos-edit.feature
6- ./features/todos-remove.feature
7- ./features/todos-ui.feature
8- ./features/todos-active.feature


Sanity scenarios are mixed which have ui verification, todos items creation, clearing items and removing items.

Rest are regression scenarios. Each feature file is tagged with a specific tag (on top of the file); you can use these tags to run specific feature file.

todos-all.feature:
    - add few todos items
    - mark all todos as complete for all todos
    - verify todos items in different tabs
    - mark all todos as un-complete
    - verify todos items in different tabs
    - verify the order of the todos in all tab

todos-clear.feature:
    - add few todos items
    - verify todos items in different tabs
    - complete the todos and verify its style
    - verify todos items in different tabs
    - clear the completed todos
    - verify todos items in different tabs
    - no link (Completed/All/Active) is present

todos-completed.feature:
    - add few todos items
    - mark all todos as complete for all todos
    - verify todos items in different tabs
    - verify the order of the todos in all tab
    - mark all todos as un-complete
    - verify todos items in different tabs
    - mark all todos as complete for active todos
    - verify todos items in different tabs
    - verify the order of the todos for completed
    - mark all todos as un-complete
    - verify todos items in different tabs


todos-edit.feature:
    - add few todos items
    - edit the todos item
    - verify todos items in different tabs

todos-remove.feature:
    - add few todos items
    - remove item from todos list
    - verify todos items in different tabs
    - remove all items
    - no link (Completed/All/Active) is present

todos-ui.feature:
    - page verification when there is no todos item
    - page verification when there is a todos item

todos-active.feature:
    - add few todos items
    - mark all todos as complete for all todos
    - verify todos items in different tabs
    - mark all todos as un-complete
    - verify todos items in different tabs
    - verify the order of the todos in all tab