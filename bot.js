const t = require('telegraf')
const bot = new t('6468224337:AAGrt8G8xYxWtKND6yx5PvtGZgvDP1xKRCU')

bot.start(ctx=>{
    ctx.reply('hello')
})

bot.launch()
