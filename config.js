//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "243834979127";
global.owner = process.env.OWNER_NUMBER || "243834979127";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1nU24zUVVxR0xBVG83ZTFaTmZMdmdVenJKSEh6NWRTbVFIdlVRUTFGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHhENDEzeGs3Y2VJdmlQdWs3UGtEMzlLWnI0emFvUStLaWYzS3VwdVlWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RlZ3cHhHaGI3bC9mVkNNaDJ1V1BEc1JsUnFqc25RTGw0RzNxTTFpV2trPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwaUNRQ0JsMG9LRTBGS051TzllVC9ZN250UW96Si93clVUSzB1STlHZFZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhITGNrajFTanZyc09KTTFsZHpiYTFLei9sQjNIcXFuQlpzTkMzQy9TMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZlZGx4dEp5QlpUU1ZlRGEzb0FOZlMwZGF1Y1g1ZjhQQ0xEd1cwYkF4RU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VJQXVTRUZWd3dEcGJGZ3prTWRDamJZM3lHcEpPNHdlbzJPWmFMamkxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnVReU9xdWpSR2p6eHNob21tSmNqQ1Rwd3FYVW16cnhyaFNkZENLbU5WOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYybkJZS1BhQSs1cDA4QkhmOHluM2h4eXZFQWpXWkhVYWc1QVdodzZmOTNhL0EvdFNxaXRtandtcml3WGRVSXF3VVV5MkxqYU9SNTNRbCs4V3ZyTGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6ImF5di9rcG9waWJJb0V1bUxUMTNZQWwvcXBXL2Y3bUtXMkxiakxxV1lKZzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im44Rk0zc05aUWVDZGhRdzdidVg2RXciLCJwaG9uZUlkIjoiOGNmZThlZDctN2I0NC00MDQ3LTk5MGQtNDZiNmE3N2M3ZTgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDQ3hCYm5hUm14cDJIQ1JXWDFYd0ZqNm93dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjYnA3R0t3bHRmeUUvNXFQYlBKb3hMZUNyamM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUUzSDhRRUEiLCJtZSI6eyJpZCI6IjI0MzgzNDk3OTEyNzoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwlqCB4LWi4a2EzaLwnZeg6p2b4Y2d1p8gICDwnZeg8J2XnPCdl6HwnZqr8J2Xp/Cdmq8g44CG8J2XlPCdl6bwnZeg8J2XovCdl5fwnZeY8J2XqPCdl6bjgIbih7TwlqCB4a2EIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPM0c0dG9DRUpDOThyb0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJibmJ2ZmxiSGljUHI3aEJUNDBPRm1DZlB5dHREZ3Exd2oyRE1TNk5Sbms4PSIsImFjY291bnRTaWduYXR1cmUiOiIxWTdrLzdON2dMeng4d3ROOXRLNjV6bGpWOE5EVno2U0tqWkE1dFQyR3JoRjZndDZDbXR5UlBIYWEyWXVURVdVMmN2TC9JTnpUTnVYWGNMdjdQQlREUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidDAvc0t2UXdrNmRwNVlYRm85cUh1aTlKdWg4M1FpbFoyZ0g3d1J5N0dKQUFzVmRjZzQ5WTJhRXdPVGJlcHBvTVUwQS9oSDJxR0ZXUy9DUTQxTTUxaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM4MzQ5NzkxMjc6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzUyNzM1V3g0bkQ2KzRRVStORGhaZ256OHJiUTRLdGNJOWd6RXVqVVo1UCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDEyMzE2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFENXEifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "〆",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 🌹⃟⃢👑𝗠𝗥 𝗠𝗜𝗡𝗔𝗧𝗢🌹⃟⃢👑`",
  author: process.env.PACK_AUTHER || " 🌹𝗠𝗥 𝗠𝗜𝗡𝗔𝗧𝗢🌹",
  packname: process.env.PACK_NAME || "🌹⃟⃢👑𝗠𝗥 𝗠𝗜𝗡𝗔𝗧𝗢🌹⃟⃢👑",
  botname: process.env.BOT_NAME || "┘🌹𝗠𝗥 𝗠𝗜𝗡𝗔𝗧𝗢🌹𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑𝗠𝗥 𝗠𝗜𝗡𝗔𝗧𝗢🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
