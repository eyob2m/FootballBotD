const puppeteer = require('puppeteer');


async function run()  {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://totalsportek.pro/soccer30/');

    const pg = await page.evaluate(()=> {
     let club1 = []; let club2 = []; let  links = []; let time = [];   let las = [];  let last = [];  let latt = []; let ol = []
                const me = document.querySelectorAll('.col-11').forEach((e,index)=> {
                links.push(document.querySelectorAll("a")[index])
                time.push(document.querySelectorAll(".col-3.fs-8.px-2.text-center.my-auto.xj.Bj.Aj")[index])

                    if(index%2==0) {
                      club1.push(e.innerHTML) }
                      else {
                          club2.push(e.innerHTML) 
                      }

          })

        

        club1.forEach((e,index)=>{

          ol.push('*'+ e+ '* Vs *' + club2[index] + '*\n' + time[index].innerText+ '\n [Watch]('+ links[index+21] +') ')

        })
      
     
        for(let g = 10 ;g<20;g++){
    
          last[g-10] = ol[g] 
       
          
        }

      
           let  pub2 = last.join('\n ----------------------------------  \n')
    

   
       

        return pub2
})



await browser.close();


return pg


}

module.exports = run();








