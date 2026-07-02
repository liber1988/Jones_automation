# Test Cases

This document contains sample functional test cases for the Billing Widget.

---

# TC-001 – Successful Payment Submission

## Objective

Verify that a user can successfully submit the billing form using valid payment information.

## Preconditions

- User is on the Billing page.

## Steps

1. Select **Visa** as the card type.
2. Enter a valid card number.
3. Select a valid expiration month and year.
4. Enter the required billing information.
5. Click **Continue**.

## Expected Result

- The form is submitted successfully.
- The user proceeds to the next step of the payment flow.
- No validation errors are displayed.

---

# TC-002 – Required Field Validation

## Objective

Verify that the system prevents submission when required fields are missing.

## Preconditions

- User is on the Billing page.

## Steps

1. Leave one or more required fields empty.
2. Click **Continue**.

## Expected Result

- The form is not submitted.
- Validation messages are displayed for each missing required field.
- The user remains on the Billing page.

---

# TC-003 – Invalid Expiration Date

## Objective

Verify that expired credit cards cannot be submitted.

## Preconditions

- User is on the Billing page.

## Steps

1. Select a valid card type.
2. Enter a valid credit card number.
3. Select an expiration date in the past.
4. Complete all other required fields.
5. Click **Continue**.

## Expected Result

- The form is not submitted.
- A validation message indicates that the expiration date is invalid.
- The user remains on the Billing page.
