
const telegraf =  require('telegraf')
module.exports = bot = new  telegraf('6468224337:AAGrt8G8xYxWtKND6yx5PvtGZgvDP1xKRCU')

bot.start(ctx=>{
    ctx.reply('hi')
})
bot.launch()