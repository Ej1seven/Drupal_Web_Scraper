// Function to search for a specific word on a webpage
async function searchWordOnPage(url, word, page, browser) {
  let results;
  try {
    await page.goto(url);

    const bodyText = await page.evaluate(
      () => document.getElementsByTagName("html")[0].innerHTML
    );
    const wordCount = countOccurrences(bodyText, word);
    if (wordCount > 0) {
      results = url;
    } else {
      results = `The word "${word}" is not found on ${url}`;
    }
  } catch (error) {
    return console.log(error);
  }
  return { page, browser, results };
}

// Helper function to count occurrences of a word in a string
function countOccurrences(text, word) {
  const regex = new RegExp(word, "gi");
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

module.exports = searchWordOnPage;
