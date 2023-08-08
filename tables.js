const bot = require('./bot')
const run = require('./api')
module.exports = Table = () => {
   
    let valid = []
   bot.hears('Table', ctx=>{
   
       bot.telegram.getChatMember( -1001969213008,ctx.chat.id).then( res=> valid = res).catch(e=> console.log(e))
   
       if(valid.status =='member' ||valid.status =='creator' || valid.status =='admin' ) { 
    
       bot.telegram.sendMessage(ctx.chat.id, "Select One League",{
   
           reply_markup: {
               inline_keyboard: [
                   [
                   { text: 'Premier League' , callback_data: 'pl'},
                   { text: ' Major League Soccer' , callback_data: 'mls'}
                ],
                [
                 
                    { text: 'Italian Serie A' , callback_data: 'tsa'},
                    { text: 'German Bundesliga' , callback_data: 'gb'}
               ]]
            
           }
       
       
       
           })
       }
       else {
           bot.telegram.sendMessage(ctx.chat.id, "Join Channel to use this Bot",{
   
           reply_markup: {
               inline_keyboard: [
                   [
                
                   { text: 'Join'  , url: 't.me/yutitech'}
                  
                ]
               ]
            
           }
       
       
       
           })
   
        }   
    
})

let arryL = ['pl','mls','tsa','gb']
bot.action(arryL, ctx=>{
 async function wait() {   
switch(ctx.match) { 
case 'pl': p = await  run('premier-league-table'); break;
case 'mls': p = await  run('mls-table'); break;
case 'tsa': p = await   run('serie-a-table'); break;
case 'gb':  p = await  run('bundesliga-table'); break;

}
let st =await  []

await  p.forEach(ef=> st.push(ef.rank + ". *" +  ef.name  + "* \n      Play: *" + ef.play + "* Goal: *" + ef.goal + "* Point: *" + ef.point + "*" )
 )
 let all = await  st.join('\n')
 await  ctx.reply(all,{
     parse_mode: 'Markdown'
 })


}  
wait();

})


}