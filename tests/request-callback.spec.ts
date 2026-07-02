import { test, expect } from "@playwright/test";
import { leadData } from "../test_data/request_callback.data";

test.describe("Request a call back form", () => {
  test("should fill the form, take screenshot, submit, and reach thank-you page", async ({
    page,
  }, testInfo) => {
    // Open the application under test.
    await page.goto("/");
    // Verify the page loaded before interacting with it.
    await expect(page).toHaveTitle("Landing Page");
    await expect(
      page.getByRole("heading", { name: "Interested in our Service?" }),
    ).toBeVisible();

    // Populate the form using external test data (id).
    await page.locator("#name").fill(leadData.name);
    await page.locator("#email").fill(leadData.email);
    await page.locator("#phone").fill(leadData.phone);
    await page.locator("#company").fill(leadData.company);
    await page.locator("#website").fill(leadData.website);

    // Exercise the bonus requirement.
    await page.locator("#employees").selectOption({
      label: leadData.employees,
    });

    // Verify that all values were entered correctly before submission.
    await expect(page.locator("#name")).toHaveValue(leadData.name);
    await expect(page.locator("#email")).toHaveValue(leadData.email);
    await expect(page.locator("#phone")).toHaveValue(leadData.phone);
    await expect(page.locator("#company")).toHaveValue(leadData.company);
    await expect(page.locator("#website")).toHaveValue(leadData.website);
    await expect(page.locator("#employees")).toHaveValue(leadData.employees);

    // Submit the request.
    await page.screenshot({
      path: `screenshots/before-submit-${testInfo.project.name}.png`,
      fullPage: true,
    });

    // Submit the request.
    await page.getByRole("button", { name: "Request a call back" }).click();

    // Verify successful navigation and confirmation page.
    await expect(page).toHaveURL(/thank-you\.html/);
    await expect(
      page.getByRole("heading", { name: "Thank You!" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "You'll hear from us soon." }),
    ).toBeVisible();

    // Write a success message to the console (exercise requirement).
    console.log(
      `[${testInfo.project.name}] Reached the thank you page successfully.`,
    );
  });
});
