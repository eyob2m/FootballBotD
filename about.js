const bot = require('./bot')
module.exports = About = () => {


    bot.hears('About', ctx=>{
 
        bot.telegram.sendMessage(ctx.chat.id, "About Info",{
    
            reply_markup: {
                inline_keyboard: [
                    [
                    { text: 'Channel'  , url: 't.me/yutitech'},
                    { text: 'Contact'  , url: 't.me/bcimyuti'}
                   
                 ]
                ]
             
            }
        
        
        
            })
    
        
    })
    

}