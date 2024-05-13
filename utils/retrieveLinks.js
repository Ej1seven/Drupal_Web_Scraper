const puppeteer = require("puppeteer");

async function retrieveLinks(websiteUrl) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50, // slow down by 250ms
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`${websiteUrl}/user/login`);
  await page.waitForSelector("#user-login-form");
  await page.click("#edit-samlauth-login-link");
  await page.waitForSelector("#username");
  await page.type("#username", `${process.env.USERNAME}`);
  await page.click("#password");
  await page.type("#password", `${process.env.PASSWORD}`);
  await page.click(".idp3_form-submit");
  await page.waitForSelector("#dont-trust-browser-button");
  await page.click("#dont-trust-browser-button");
  await page.waitForSelector(".toolbar-icon-system-admin-content");
  await page.click(".toolbar-icon-system-admin-content");
  const contentPageUrl = page.url();
  const allLinks = [];
  const lastPageButton = await page.$(".pager__item--last > a");
  const lastPage = await lastPageButton.evaluate(
    (el) => el.href,
    page.$(".pager__item--last > a")
  );
  const numberOfPages = Number(lastPage.substring(lastPage.indexOf("=") + 1));
  const firstPagelinks = await page.$$(".views-field > a");
  for (let i = 0; i < firstPagelinks.length; i++) {
    const link = await firstPagelinks[i].evaluate(
      (el) => el.href,
      firstPagelinks[i]
    );
    if (
      !link.includes(`${websiteUrl}/admin/`) &&
      !link.includes(`${websiteUrl}/user/`)
    ) {
      allLinks.push(`${link}\n`);
    }
  }
  for (let x = 1; x < numberOfPages + 1; x++) {
    await page.goto(`${contentPageUrl}?page=${x}`);
    await page.waitForSelector("tbody");
    const newPagelinks = await page.$$(".views-field > a");
    for (let i = 0; i < newPagelinks.length; i++) {
      const link = await newPagelinks[i].evaluate(
        (el) => el.href,
        newPagelinks[i]
      );
      if (
        !link.includes(`${websiteUrl}/admin/`) &&
        !link.includes(`${websiteUrl}/user/`)
      ) {
        allLinks.push(`${link}\n`);
      }
    }
  }
  await browser.close();
  return allLinks;
}

module.exports = retrieveLinks;
