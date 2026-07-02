# Jones Automation Exercise

## Overview

This project contains an automated end-to-end test for the Jones Automation technical exercise using Playwright.

The automation verifies the complete user flow of the callback request form on:

https://test.netlify.app/

The test performs the following actions:

1. Opens the landing page.
2. Verifies that the page loaded successfully.
3. Fills in the required form fields:
   - Name
   - Email
   - Phone
   - Company
   - Website
4. Changes the **Number of Employees** value from **1-10** to **51-500** (bonus requirement).
5. Verifies that all entered values are present in the form.
6. Takes a full-page screenshot before submitting the form.
7. Clicks the **Request a call back** button.
8. Verifies successful navigation to the **Thank You** page.
9. Confirms that the success page contains the expected confirmation messages.
10. Writes a success message to the console.

---

# Technical Approach

The project uses **Playwright Test** (`@playwright/test`) instead of a standalone Playwright script because it provides a professional testing framework suitable for real QA automation projects.

Main advantages include:

- Test Runner
- Cross-browser execution
- Parallel execution
- Automatic test isolation
- Built-in assertions
- HTML reports
- Trace collection
- Video recording on failure
- Screenshot capture on failure
- Scalable project structure

---

# Project Structure

```text
Automotion_Jones/
│
├── tests/
│   └── request-callback.spec.ts
│
├── test_data/
│   └── request_callback.data.ts
│
├── screenshots/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# Design Decisions

## Separation of Test Logic and Test Data

The test data is stored separately from the automation logic.

This makes the test easier to maintain and allows different data sets to be used without changing the test itself.

---

## Stable Locators

The automation uses stable selectors whenever possible.

Examples include:

- Element IDs
- ARIA Roles
- Accessible headings

This follows Playwright best practices and produces tests that are easier to maintain.

---

## Assertions

The automation validates every important step instead of only performing user actions.

Examples include:

- Page title validation
- Form value verification
- Successful navigation
- Confirmation page validation

Assertions ensure the application behaves correctly rather than simply executing clicks.

---

## Cross-Browser Testing

The same test is executed on multiple browser engines:

- Chromium
- Firefox
- WebKit

It is also executed on representative mobile devices:

- Google Pixel 5
- iPhone 12

This verifies that the same functionality behaves consistently across desktop and mobile environments.

---

## Screenshot

A full-page screenshot is taken immediately before submitting the form, as required by the exercise.

---

## Reports

Playwright automatically generates an HTML report after the test execution.

If a test fails, Playwright also saves:

- Screenshot
- Video
- Trace

These artifacts make debugging significantly easier.

---

# Running the Project

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run the tests with visible browsers:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

---

# Technologies

- TypeScript
- Playwright Test
- Node.js

---

# Author

Reuven
