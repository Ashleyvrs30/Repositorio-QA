const { test, expect } = require("@playwright/test");


test("El link Home tiene la URL correcta", async ({ page }) => {
  // voy a la página donde están los links
  await page.goto('https://demoqa.com/links', { waitUntil: 'domcontentloaded' });


  // busco el link que dice "Home"
  const link = page.locator("a#simpleLink");
  // reviso que el link apunte al sitio correcto
  await expect(link).toHaveAttribute("href", "https://demoqa.com");
});
