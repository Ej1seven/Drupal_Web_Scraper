# <div align="center">Drupal Web Scraper with Puppeteer</div>

This is a powerful web scraping tool designed specifically for Drupal websites, utilizing Puppeteer—a Node.js library for controlling headless browsers—to scrape all webpages and search for a specific word or pattern. The results are then saved to a text file for easy reference and analysis. For a detailed, step-by-step guide, please refer to the following article: [Web Scraping Drupal Websites with Node.js and Puppeteer](https://website-name.com](https://codebuff.hashnode.dev/web-scraping-drupal-websites-with-nodejs-and-puppeteer) . If you found this repository useful, please consider giving it a star ⭐ on GitHub. This helps to promote the project and show your support.


## Features

- **Comprehensive Scraping:** Scans all pages of a Drupal website to extract links and content.
- **Word Search:** Searches for a specified word or pattern within the HTML content of each webpage.
- **Text File Output:** Saves search results, including webpage URLs and word occurrences, to a text file.

## Requirements

- Node.js (Install from [nodejs.org](https://nodejs.org/))
- Puppeteer (Automatically installed via npm)
- dotenv (Automatically installed via npm)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ej1seven/Drupal_Web_Scraper.git
   
2. Navigate to the project directory
    ```bash
   cd drupal-web-scraper
    
4. Install dependencies:
    ```bash
   npm install dotenv puppeteer

## Usage

1. Customize the search parameters:
  - Open index.js in a text editor.
  - Update the URL in the retrieveLinks function.
  - Update the second argument in wordSearch function with the word or pattern you want to search for.

2. Run the scraper:
   ```bash
   node index.js

3. View results:
  - The results will be saved to webpage_scan_results.txt in the project directory.

## Contributing
Contributions are welcome! If you encounter issues, have ideas for improvements, or want to add new features, please open an issue or submit a pull request.

   
