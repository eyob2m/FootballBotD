
require('dotenv').config()

const telegraf =  require('telegraf')
module.exports = bot = new  telegraf(process.env.API)

const Start =  require('./start')
Start()
const About = require('./about')
About()
const Table  = require('./tables')
Table()
const Live = require('./live')
Live()
const Btns = require('./buttons')
Btns()
bot.launch()