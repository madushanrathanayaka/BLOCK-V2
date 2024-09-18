const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PUT YOUR SESSION ID",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/FbQYwM2/Whats-App-Image-2024-09-17-at-22-50-41-59482bc6.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃madushan-md 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : jaliya madushan ``| 2024🤍*"    
AUTO_VOICE : process.env.AUTO_VOICE || "true",
READ_CMD: process.env.READ_CMD || "false",
MODE : process.env.MODE || "public",
AUTO_BIO : process.env.AUTO_BIO || "true",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
