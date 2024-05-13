require("dotenv").config();
const puppeteer = require("puppeteer");
const retrieveLinks = require("./utils/retrieveLinks");
const fs = require("node:fs/promises");
const wordSearch = require("./utils/wordSearch");

(async () => {
  const links = await retrieveLinks(`${process.env.HR_URL}`);
  let { page, browser } = await createBrowser();

  await fs.writeFile(`${process.env.FILE_PATH}/webpage_scan_results.txt`, "");

  for (let i = 0; i < links.length; i++) {
    let results = await wordSearch(links[i], "twitter", page, browser);
    await fs.appendFile(
      `${process.env.FILE_PATH}/webpage_scan_results.txt`,
      results.results,
      (err) => {
        if (err) {
          return console.error(err);
        }
      }
    );
  }
  await browser.close();
})();

async function createBrowser() {
  // initiate puppeteer browser/page

  let browser = await puppeteer.launch({ headless: true });

  let page = await browser.newPage();

  return { page, browser };
}
