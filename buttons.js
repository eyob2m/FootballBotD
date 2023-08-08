const bot = require('./bot')

module.exports = Buttons = () => {
    let valid = []


    bot.action('Live Matchs', ctx=>{
      
        ctx.deleteMessage();
        bot.telegram.getChatMember( -1001969213008,ctx.chat.id).then(res=> valid = res).catch(e=> console.log(e))
        
        if(valid.status =='member' ||valid.status =='creator' || valid.status =='admin' ) { 
            const l = require('./page1')
            l.then(res=> {
           
        bot.telegram.sendMessage(ctx.chat.id, res,{
    
            reply_markup: {
                inline_keyboard: [
                    [
                    { text: 'Next' , callback_data: 'next'}
                   
                 ]
                ]
             
            },
            parse_mode: 'Markdown'
        
        
        
            }) } ).catch(e=> console.log(e));
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
    
    // next
    
    bot.action('next', ctx=> {
        ctx.deleteMessage();
        bot.telegram.getChatMember( -1001969213008,ctx.chat.id).then(res=> valid = res).catch(e=> console.log(e))
    
        if(valid.status =='member' ||valid.status =='creator' || valid.status =='admin' ) { 
            const l = require('./page2')
            l.then(res=> {
        bot.telegram.sendMessage(ctx.chat.id, res,{
    
            reply_markup: {
                inline_keyboard: [
                    [
                    { text: 'Prev' , callback_data: 'Live Matchs'},
                    { text: 'Next' , callback_data: 'next2'}
                   
                 ]
                ]
             
            },
            parse_mode: 'Markdown'
    
    }) } ).catch(e=> console.log(e));
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
    
    // next2
    
    bot.action('next2', ctx=> {
        ctx.deleteMessage();
        bot.telegram.getChatMember( -1001969213008,ctx.chat.id).then(res=> valid = res).catch(e=> console.log(e))
    
        if(valid.status =='member' ||valid.status =='creator' || valid.status =='admin' ) { 
            const l = require('./page3')
            l.then(res=> {
        bot.telegram.sendMessage(ctx.chat.id, res,{
    
            reply_markup: {
                inline_keyboard: [
                    [
                    { text: 'Prev' , callback_data: 'next'}
            
                   
                 ]
                ]
             
            },
            parse_mode: 'Markdown'
    
    })  } ).catch(e=> console.log(e));
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
    

}