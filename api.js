const puppeteer = require('puppeteer');


 module.exports =  async function run(type)  {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.skysports.com/'+type);

    const pg = await page.evaluate(()=> {
        info = []
      const me = document.querySelector('.standing-table__table tbody')
       const mew = me.querySelectorAll('tr').forEach(e=> {
        const rank =  e.querySelectorAll('td')[0].innerText
       const name =  e.querySelectorAll('td')[1].getAttribute('data-long-name')
       const play =  e.querySelectorAll('td')[2].innerText
       const goal =  e.querySelectorAll('td')[8].innerText
       const point =  e.querySelectorAll('td')[9].innerText
 
       
       info.push({
        rank: rank,
        name: name,
        play: play,
        goal: goal,
        point: point
        
       })
       })

    
    return info
    })



    await browser.close();







return pg

 }



