const bot = require('./bot')
module.exports = Start = () => {

   

const start = `
Wellcome to XSport
features:

Tables:
  English Pr
  Major League Soccer
  Italian Serie A
  German Bundesliga
Live Football Links:
  Real Time Links for all football matchs

Powerd By: Ytech
@Ytech

`

bot.start(ctx=>{
    bot.telegram.getChatMember( -1001969213008,ctx.chat.id).then(res=> valid = res).catch(e=> console.log(e))

    ctx.reply(start)
    bot.telegram.sendMessage(ctx.chat.id, "hello",{

    reply_markup: {
        keyboard: [
            [
               { text: 'Table' , callback_data: 'table'},
               { text: 'Live Matchs' , callback_data: 'live'}
            ],
            [
             
                { text: 'About' , callback_data: 'about'}
             ]
        ]
        ,resize_keyboard: true
    }
    })
  
})


}