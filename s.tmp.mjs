import { chromium } from 'playwright';
const b=await chromium.launch();
for (const w of [320,390,768,1024]){const p=await b.newPage({viewport:{width:w,height:900}});
await p.goto('https://www.onurkarapinar.com/a-propos',{waitUntil:'networkidle'});await p.waitForTimeout(800);
console.log(w, await p.evaluate(()=>[document.documentElement.scrollWidth, [...document.querySelectorAll('h1,h1 *,section:first-of-type *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>e.tagName+'.'+e.className.toString().slice(0,40)).slice(0,6)]));
await p.screenshot({path:`/tmp/h${w}.png`});}
await b.close();
