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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0770811929";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_47_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjR6RFMvWmtlaXhvSWljTXh1THRodnVDRG4rWk8vMzFHZUJEUCtnM0hVYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc3MDgxMTkyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDM2QTEyNjNBQjlFQTE3MDlCM0NDNUE1QkFFQjQwQkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODAwODQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5nN0V6WDQyVFR1bmJFSDU4WC1LN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGI4NDFhOTYtMGFjZC00MWNkLWJkMWUtOTM2N2EyODRkMjIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDI1MSxcbiAgICAgIDExMixcbiAgICAgIDIxNyxcbiAgICAgIDE0MCxcbiAgICAgIDIzNSxcbiAgICAgIDI0NCxcbiAgICAgIDc1LFxuICAgICAgMTcyLFxuICAgICAgNSxcbiAgICAgIDIxNyxcbiAgICAgIDI1LFxuICAgICAgNTUsXG4gICAgICAxODksXG4gICAgICAyNTQsXG4gICAgICAyMTAsXG4gICAgICAxMjAsXG4gICAgICAxOTEsXG4gICAgICAxMTYsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDE1MyxcbiAgICAgIDIxNixcbiAgICAgIDQzLFxuICAgICAgOTQsXG4gICAgICA1MCxcbiAgICAgIDUwLFxuICAgICAgOTEsXG4gICAgICAxOSxcbiAgICAgIDIxNCxcbiAgICAgIDE2NSxcbiAgICAgIDEwMSxcbiAgICAgIDEwLFxuICAgICAgMTYxLFxuICAgICAgOTgsXG4gICAgICA2NixcbiAgICAgIDIzNyxcbiAgICAgIDE1MixcbiAgICAgIDUxLFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVNCQUJWRDFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQwNzcwODExOTI5OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi0pPMtuG0h8y24bSAzLbKgMy2yp/MtuG0h8y2c8y2c8y2XCIsXG4gICAgXCJsaWRcIjogXCI0MTQ1MTA0ODE5MDA4MTo4M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK3hyTUlCRU1TMXY3VUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZNVTUwbVlkK1Z6VWhsZDNiejRjWG9NaUc4bmhDb0hyTDkzMUNPRXViRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN2cvbitRY25YeC9wT01OZk5JdlNrd2g4MTlZb3VTOFNZNW1uRWlwK3dmY2FOajRibmdwT2ZZNWFObGNlV3N5YU9FcGZqUUhrcXNsYzg1dUU3U21HQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3h4OStleXQ0OWtlNlBhU2xsaEptS3RGVVNFNzM5VUhkTHVuR3JQc2U4dGVvejFORlVSWWU3VXRpeGU1cit6L3F4bUdDS0R1Q2tFK1kwdXZ0K1hBQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NzA4MTE5Mjk6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjgwMDg0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdkK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2QrLmpzb24iOiAie1wia2V5RGF0YVwiOlwicU1meXJSUnBmdEIwSDhrOFdmN0ZGM3RRWThCMnNHV29zckthZmg1QkNRUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDc1NzQ3NjcsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjgwMDYwNzgyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "0770811929",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "ANONIM-V2",
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
