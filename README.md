Drupal Web Scraper with Puppeteer
This is a powerful web scraping tool designed specifically for Drupal websites, utilizing Puppeteer—a Node.js library for controlling headless browsers—to scrape all webpages and search for a specific word or pattern. The results are then saved to a text file for easy reference and analysis.

Features
Comprehensive Scraping: Scans all pages of a Drupal website to extract links and content.
Word Search: Searches for a specified word or pattern within the HTML content of each webpage.
Text File Output: Saves search results, including webpage URLs and word occurrences, to a text file.
Requirements
Node.js (Install from nodejs.org)
Puppeteer (Automatically installed via npm)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/drupal-web-scraper.git
Navigate to the project directory:

bash
Copy code
cd drupal-web-scraper
Install dependencies:

bash
Copy code
npm install
Usage
Customize the search parameters:

Open index.js in a text editor.
Update the wordToSearch variable with the word or pattern you want to search for.
Run the scraper:

bash
Copy code
node index.js
View results:

The results will be saved to results.txt in the project directory.
Example
Suppose you want to search for the word "Drupal" across all pages of a Drupal website. After running the scraper, the results.txt file will contain a list of URLs where the word "Drupal" was found and the number of occurrences on each page.

Contributing
Contributions are welcome! If you encounter issues, have ideas for improvements, or want to add new features, please open an issue or submit a pull request.
