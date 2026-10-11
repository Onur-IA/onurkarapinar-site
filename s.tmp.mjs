import { chromium } from 'playwright';
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1280,height:800}});await p.goto('https://www.onurkarapinar.com/livre?v='+Date.now(),{waitUntil:'networkidle'});
const e=await p.$('blockquote .hl');await e.scrollIntoViewIfNeeded();await p.waitForTimeout(800);await p.screenshot({path:'/tmp/q17b.png',clip:{x:60,y:250,width:900,height:200}});
for (const [n,w,h] of [['desktop',1280,800],['mobile',390,844]]){
const q=await b.newPage({viewport:{width:w,height:h}});
await q.goto('https://www.onurkarapinar.com/a-propos?v='+Date.now(),{waitUntil:'networkidle'});
for(let y=0;y<30000;y+=500){await q.evaluate(y=>scrollTo(0,y),y);await q.waitForTimeout(60)}
await q.evaluate(()=>scrollTo(0,0));await q.waitForTimeout(800);
await q.screenshot({path:`captures/v17-apropos-${n}.png`,fullPage:true});}
await b.close();
