import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.camaralima.org.pe/asociados/#tab_directorio-de-asociados');

  await page.screenshot({path: 'screen.png'});

  await browser.close();
})();