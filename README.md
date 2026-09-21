# Playwright JavaScript Automation Framework

A Playwright + JavaScript automation framework for testing the [Practice Software Testing](https://practicesoftwaretesting.com/) web application.

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Page Object Model (POM)
* Custom Playwright Fixtures
* Git & GitHub
* GitHub Actions
* dotenv

## Framework Structure

```text
playwright-JS-framework/
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── login.spec.js
│   ├── home.spec.js
│   ├── product.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── fixtures/
│   └── page.js
├── data/
│   ├── LoginData.js
│   ├── Filters.js
│   └── UserDetails.js
├── .gitignore
├── playwright.config.js
├── package.json
└── README.md
```

## Test Coverage

### Login

* Valid login
* Invalid email
* Invalid password
* Login validation
* Logout

### Home Page

* Verify products are displayed
* Product search
* Product filtering
* Product sorting
* Product comparison
* Clear comparison

### Product Page

* Verify product details
* Verify product price
* Add product to cart
* Product availability

### Cart

* Add multiple products
* Update product quantity
* Remove products
* Verify cart contents
* Calculate and verify cart total

### Checkout

* Enter customer details
* Enter address information
* Enter payment information
* Proceed through checkout

## Framework Features

* Page Object Model for maintainable test code
* Custom Playwright fixtures for reusable page objects
* Data-driven testing
* Dynamic locators for reusable test methods
* Reusable page-level actions
* Assertions using Playwright's built-in `expect`
* Environment variables for test credentials and user details
* Chromium-based test execution
* GitHub Actions CI integration

## Test Data & Environment Variables

Sensitive test data such as login credentials, address details, and payment test data are stored using environment variables instead of being hardcoded directly into the test data files.

The project uses `dotenv` to load environment variables from a local `.env` file.

### Example `.env`

```env
USER1_EMAIL=your_test_email
USER1_PASSWORD=your_test_password
USER1_CITY=your_city
USER1_CARD_NUMBER=your_test_card
```

The `.env` file is excluded from Git using `.gitignore` and is not committed to the repository.

The test data files access these values through `process.env`, while the test cases continue to use the same data objects.

For example:

```javascript
await loginpage.login(
    users.user1.email,
    users.user1.password
);
```

This keeps credentials and other sensitive test data separate from the test implementation.

## Running Tests

### Install Dependencies

```bash
npm install
```

### Install Playwright Chromium

```bash
npx playwright install chromium
```

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run a Specific Test File

```bash
npx playwright test tests/login.spec.js
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### View the Playwright Report

```bash
npx playwright show-report
```

## CI/CD

The project is configured to run Playwright tests using GitHub Actions.

The workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs project dependencies
4. Installs Playwright Chromium
5. Runs the Playwright test suite
6. Uploads the Playwright report

Sensitive environment variables can be provided through GitHub Actions repository secrets rather than committing them to the repository.

## Browser Configuration

The framework is currently configured to run tests on Chromium using the Desktop Chrome configuration.

```javascript
projects: [
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    },
]
```

## Purpose

This project demonstrates practical experience in designing and implementing a maintainable Playwright automation framework using JavaScript.

It focuses on:

* Reusable page objects
* Custom fixtures
* Data-driven testing
* Dynamic locators
* Functional validation
* Environment-based test data
* CI execution using GitHub Actions
* Maintainable and scalable automation architecture
