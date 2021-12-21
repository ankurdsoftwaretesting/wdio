To run the test, please follow these steps:
Pre-requisite: Node must be installed.

Steps:
1- Go to 'TODOS' directory.
2- Run 'npm install --save-dev' command on terminal.
3- There are three commands to run the tests:
    a- To run sanity scenarios, run 'npm run test_san' on terminal.
    b- To run regression scenarios, run 'npm run test_reg' on terminal.
    c- To run all scenarios, run 'npm run test' on terminal.
    d- Every feature is tagged with a specific tag, you can run that specific feature by running following command:
        npm run test '@<tag_name>' OR
        npx wdio run ./wdio.conf.js --cucumberOpts.tagExpression '@<tag_name>'
4- To generate the report, run 'npm run gen_report' on terminal. This framework uses "allure" framework for reporting.

Scenarios:
Please refer the 'SCENARIOS.md' for the scenarios.

** Note: You can refer the report's screenshot here for the results (report_screenshot.png).

