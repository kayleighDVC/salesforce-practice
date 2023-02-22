import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer'

@Injectable()
export class LoginService {

    getHello(): string {
        return 'Hello World! testing';
    }

    login() {
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
                const randName = "";

                // LOG IN
                const page: puppeteer.Page = await browser.newPage();
                await page.goto('https://dvcacquisition1--kayleigh.sandbox.lightning.force.com/lightning/o/Lead/list?filterName=Recent', { waitUntil: 'networkidle2' });
                await page.waitForTimeout(10000);


                // Page 1: Log In
                await page.click('input[type=email]');
                await page.type('input[type=email]', 'kayleigh@worldofdvc.com');
                await page.waitForTimeout(2000);
                await page.click('input[type=password]');
                await page.type('input[type=password]', 'Bo0ki3356!');
                await page.waitForTimeout(1000);
                await page.click('input[type=submit]');
                await page.waitForTimeout(10000);

                // Page 2: New 
                await page.click('a[title="New"]');
                await page.waitForTimeout(10000);

                // Page 3: Next
                await page.click('.slds-button_brand');
                await page.waitForTimeout(10000);

                //Page 4: Form
                await page.click('#combobox-input-417');
                // await page.$eval(
                //     '#combobox-input-417',
                //     (e, no) => e.setAttribute("data-value", no),
                //     'Grand Californian'
                // );
                // await page.click('#input-400');
                // await page.type('#input-400', this.makeid(8));
                // await page.waitForTimeout(2000);

                // await page.click('#input-406');
                // await page.type('#input-406', 'Monera');
                // await page.waitForTimeout(2000);
                


            } catch (err) {
                console.log(err)
                //  let pages = await browser.pages()
                //   await Promise.all(pages.map(page =>page.close()))
                // await browser.close()
                console.log('fail');
            }
            await browser.close();
        })();
    }

    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;

    }

}

