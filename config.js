const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_35_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic3FPc0lOMkpCcmVCd0tESVJqdXVWS3RuQ1RuRnpoZUZKZ2JBRjdUSkZnTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielVLaF8ybzVUMFdDenlmX2V0MEowQVwiLFxuICBcInBob25lSWRcIjogXCJhMmMwZWM0Zi1lYzEwLTQ1NjQtYTNhNi03NGI2MmIzYTQ5NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTY3LFxuICAgICAgMjA4LFxuICAgICAgMjM4LFxuICAgICAgMjM0LFxuICAgICAgMTE1LFxuICAgICAgMTY2LFxuICAgICAgNzgsXG4gICAgICAyMyxcbiAgICAgIDE4NCxcbiAgICAgIDIzOSxcbiAgICAgIDEyMyxcbiAgICAgIDY0LFxuICAgICAgMjQ5LFxuICAgICAgNDAsXG4gICAgICAyMDIsXG4gICAgICA0MixcbiAgICAgIDM1LFxuICAgICAgMTU1LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDEyLFxuICAgICAgMTk2LFxuICAgICAgMTIxLFxuICAgICAgMTYwLFxuICAgICAgNDEsXG4gICAgICA2NCxcbiAgICAgIDQ3LFxuICAgICAgMTIxLFxuICAgICAgMTI1LFxuICAgICAgMjA5LFxuICAgICAgMTg1LFxuICAgICAgMCxcbiAgICAgIDE1OCxcbiAgICAgIDE4LFxuICAgICAgMTYyLFxuICAgICAgOTQsXG4gICAgICAxNTUsXG4gICAgICAxNjYsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkFZTUxZUlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzOTk1NjQ3NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEwNDY2ODE5MzI2MTY2OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05HSWl0NENFTjJBcHJRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1lqR05jeGFZUlk1MUdESkM3cithMS9UeFM0OUdiMXhrRHFtZ1BSWEZEND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJISllkUXJmemZnZlRPUU9NcWt0blNITW5oUUhNNm5EbGlTNHhKeUg4eU9DcHQyVDA0UTZpaFBaQjdxVEdCSElmaEU4NmVYTFhJTWVEaG96bU42cy9DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOK3NxWWRmdUZwYm5VeEMrTHRZejRxUCthYXgvMXlhV1BZeXlqOXpJTm9zTWNCWm43SjMyWlR2NXFDZ20vWWx5SkNndVI1M0RZeWxUaEViT2VjZVVnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzk5NTY0NzY6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyODczMjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
