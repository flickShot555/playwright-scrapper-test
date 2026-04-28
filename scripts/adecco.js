import { chromium } from "playwright";

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function handleCookiesButton(page){
    try{
        await page.waitForSelector("#onetrust-accept-btn-handler", {timeout:5000});
        await page.click("#onetrust-accept-btn-handler");
        console.log("#cookies policy button clicked");
        
        await delay(2000);

    }catch{
        console.log("No Cookies button appeared, continuing anyways!");
    }
}


async function main(){
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://jobs.de.adecco.com/", {waitUntil: "networkidle"});
    await handleCookiesButton(page);

    await delay(3000);

    await browser.close();
}

main();