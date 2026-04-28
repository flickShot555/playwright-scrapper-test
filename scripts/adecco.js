import { chromium } from "playwright";

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function main(){
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://jobs.de.adecco.com/");

    await delay(3000);

    await browser.close();
}

main();