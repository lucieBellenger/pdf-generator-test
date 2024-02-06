import puppeteer from "puppeteer";

export const openBrowser = async () => {
  const browser = await puppeteer.launch({ headless: false }); // rm headless false after
  const page = await browser.newPage();

  return {
    browser,
    page,
  };
};

export const closeBrowser = async (browser) => {
  await browser.close();
};
