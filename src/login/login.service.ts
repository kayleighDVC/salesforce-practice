import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class LoginService {
    login(){
        (async () => {
 
            const browser = await puppeteer.launch({
            headless: false,
            // executablePath: '/Applications/Google Chrome.app/',
            args: [
                '--disable-web-security',
                '--disable-features=IsolateOrigins,site-per-process'
            ]
            });
            
            try {
                const page: puppeteer.Page = await browser.newPage();
                await page.goto('https://dvcacquisition1--kayleigh.lightning.force.com/lightning/o/Account/list?filterName=Recent', {waitUntil: 'networkidle2'});
                await page.waitForTimeout(15000);


            } catch (err) {
                console.log(err)
                let pages = await browser.pages()
                await Promise.all(pages.map(page =>page.close()))
                await browser.close()
                console.log('fail');
            }
        });
    }
}

// import { Injectable } from '@nestjs/common';
// import * as puppeteer from 'puppeteer'

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World! testing';
//   }

//   openScreen() {
//     (async () => {
 
//       const browser = await puppeteer.launch({
//         headless: false,
//         // executablePath: '/Applications/Google Chrome.app/',
//         args: [
//           '--disable-web-security',
//           '--disable-features=IsolateOrigins,site-per-process'
//         ]
//       });

//       // const page = await browser.newPage();
//       // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
//       // await page.goto("https://disneyworld.disney.go.com/dining/#/reservations-accepted/");
//       // page.screenshot();
     
//       // let title = await page.evaluate(() => {
//       //   return document.querySelector(".title").textContent.trim();
//       // });
//       // console.log(title);

//       try {

//         // LOG IN
//         const page: puppeteer.Page = await browser.newPage();
//         await page.goto('https://disneyworld.disney.go.com/dining-reservation/', {waitUntil: 'networkidle2'});
//         await page.waitForTimeout(15000);

//         await page.waitForSelector('iframe');
//         console.dir(page);

//         const elementHandle = await page.$('#disneyid-iframe');
//         const frame: any = await elementHandle.contentFrame();
//         console.log(frame);

//         await frame.click('input[type=email]'); 
//         await frame.type('input[type=email]', 'disfan10624@gmail.com');
//         await page.waitForTimeout(2000);
//         await frame.click('input[type=password]'); 
//         await frame.type('input[type=password]', 'mjVxuWIG80LvBCsD6!X4!UFs');
//         await page.waitForTimeout(1000);
//         await frame.click('button[type=submit]', {waitUntil: 'networkidle2'});
//         await page.waitForTimeout(200000);
  
//         // RESERVATION
//         // await page.goto('https://disneyworld.disney.go.com/dining/#/reservations-accepted/', {waitUntil: 'networkidle2'});
//         // await page.waitForTimeout(2000);

//         // const date = document.querySelector('.date-input').querySelector('input');
//         // await frame.type(date, 'Monday, April 14, 2023');
//         // await page.waitForTimeout(1000);

//         // const time = document.querySelector('wdpr-single-select').shadowRoot.querySelector('button').querySelector('.button-text-container');
        
//       } catch (err) {
//        console.log(err)
//       //  let pages = await browser.pages()
//       //   await Promise.all(pages.map(page =>page.close()))
//         // await browser.close()
//         console.log('fail');
//       }
//       // await browser.close();
//     })();
//   }


// }

