Playwright JavaScript Automation Framework
==========================================

A Playwright + JavaScript automation framework for testing the Practice Software Testing web application.

Tech Stack
----------

*   Playwright
    
*   JavaScript
    
*   Node.js
    
*   Page Object Model (POM)
    
*   Custom Playwright Fixtures
    
*   Git & GitHub
    
*   GitHub Actions
    
*   dotenv
    

Framework Structure
-------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   playwright-JS-framework/  ├── pages/  │   ├── HomePage.js  │   ├── LoginPage.js  │   ├── ProductPage.js  │   ├── CartPage.js  │   └── CheckoutPage.js  ├── tests/  │   ├── login.spec.js  │   ├── home.spec.js  │   ├── product.spec.js  │   ├── cart.spec.js  │   └── checkout.spec.js  ├── fixtures/  │   └── page.js  ├── data/  │   ├── LoginData.js  │   ├── Filters.js  │   └── UserDetails.js  ├── .gitignore  ├── playwright.config.js  ├── package.json  └── README.md   `

Test Coverage
-------------

### Login

*   Valid login
    
*   Invalid email
    
*   Invalid password
    
*   Login validation
    
*   Logout
    

### Home Page

*   Verify products are displayed
    
*   Product search
    
*   Product filtering
    
*   Product sorting
    
*   Product comparison
    
*   Clear comparison
    

### Product Page

*   Verify product details
    
*   Verify product price
    
*   Add product to cart
    
*   Product availability
    

### Cart

*   Add multiple products
    
*   Update product quantity
    
*   Remove products
    
*   Verify cart contents
    
*   Calculate and verify cart total
    

### Checkout

*   Enter customer details
    
*   Enter address information
    
*   Enter payment information
    
*   Proceed through checkout
    

Framework Features
------------------

*   Page Object Model for maintainable test code
    
*   Custom Playwright fixtures for reusable page objects
    
*   Data-driven testing
    
*   Dynamic locators for reusable test methods
    
*   Reusable page-level actions
    
*   Assertions using Playwright's built-in expect
    
*   Environment variables for test credentials and user details
    
*   Chromium-based test execution
    
*   GitHub Actions CI integration
    

Test Data & Environment Variables
---------------------------------

Sensitive test data such as login credentials, address details, and payment test data are stored using environment variables instead of being hardcoded directly into the test data files.

The project uses dotenv to load environment variables from a local .env file.

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   USER1_EMAIL=your_test_email  USER1_PASSWORD=your_test_password  USER1_CITY=your_city  USER1_CARD_NUMBER=your_test_card   `

The .env file is excluded from Git using .gitignore and is not committed to the repository.

The test data files access these values through process.env, while the test cases continue to use the same data objects.

For example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   await loginpage.login(      users.user1.email,      users.user1.password  );   `

This keeps credentials and other sensitive test data separate from the test implementation.

Running Tests
-------------

Install dependencies:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

Install Playwright Chromium:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright install chromium   `

Run all tests:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright test   `

Run tests in headed mode:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright test --headed   `

Run a specific test file:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright test tests/login.spec.js   `

Run tests in debug mode:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright test --debug   `

View the Playwright report:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright show-report   `

CI/CD
-----

The project is configured to run Playwright tests using GitHub Actions.

The workflow:

1.  Checks out the repository
    
2.  Sets up Node.js
    
3.  Installs project dependencies
    
4.  Installs Playwright Chromium
    
5.  Runs the Playwright test suite
    
6.  Uploads the Playwright report
    

Sensitive environment variables can be provided through GitHub Actions repository secrets rather than committing them to the repository.

Browser Configuration
---------------------

The framework is currently configured to run tests on Chromium using the Desktop Chrome configuration.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   projects: [      {          name: 'chromium',          use: { ...devices['Desktop Chrome'] },      },  ]   `

Purpose
-------

This project demonstrates practical experience in designing and implementing a maintainable Playwright automation framework using JavaScript.

It focuses on reusable page objects, fixtures, data-driven testing, dynamic locators, functional validation, and CI execution.