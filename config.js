//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : shanuwa Official
//  * @whatsapp  : https://whatsapp.com/channel/0029VaeKGfb2f3ERxuH60909
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by shanu Official
//GitHub: @manulofficial7
//WhatsApp: +94719827972
//want more free bot scripts? subscribe to my whatsapp  channel: https://whatsapp.com/channel/0029VaeKGfb2f3ERxuH60909
//   * Created By Github: manulofficial7.
//   * Credit To shanuwa Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&TM8w2QQR#1o__gRg2QHpH9AZL544lb4E7h87VaOjmFwY4TLcZnz0", // Session id එක දාන්න " " ඕව මැදට creds.json දානව නම් ඕව වෙනස් කරන්න එපා...✓💚
ALIVE_IMG : process.env.ALIVE_IMG || "‘අද රිදුනට මොකද, හෙට අපි දිනනවානෙ මැණික’ කියලා කියන්න කෙනෙක් නැති හැටි 🤧`",
ALIVE_MSG : process.env.ALIVE_MSG || "Put your alive messege",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public", // ඔයාට විතරක් වැඩ කරන්න් ඕනි නම් "private" දාන්න... හැමෝටම වැඩ කරන්න නම් "public" , ගෲප් වලට විතරක් ඕනි නම් "groups" දාන්න...✓💚 
ANTI_PHOTO: process.env.ANTI_PHOTO || "false",  // පොටෝ දැම්මාම ඩිලීට් වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
ANTI_STICKER: process.env.ANTI_STICKER || "false",  // ස්ටිකර් දැම්මාම ඩිලීට් වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
WARN_COUNT : process.env.WARN_COUNT || "3",

AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //ස්ටේට්ස් විව් ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_REACT: process.env.AUTO_REACT || "true", //ඔටෝ රිඇක්ට් වෙන්න් ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true", //කමාන්ඩ් Read වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_VOICE: process.env.AUTO_VOICE || "true", //ඔටෝ වොයිස් යන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
MENU: process.env.MENU || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
ANTI_LINK: process.env.ANTI_LINK || "true", //Whatsapp Group ලින්ක් දැම්මාම ඩිලීට් වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false", // හැම වෙලේම ඔන්ලයි ඉන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_TYPING : process.env.AUTO_TYPING || "false",
AUTO_RECORDING : process.env.AUTO_RECORDING || "true", //ඔටෝ රෙකෝඩින් පෙන්නන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
OWNER_NUMBER : process.env.OWNER_NUMBER || "94719827972", // ඔයාගෙ නම්බරේ ඔතනට දාගන්න මුලට 94 තියෙන්න ඕනි 0 දාන්න එපා !
DELCHAT : process.env.DELCHAT || "pm",
FOOT : process.env.FOOT || "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1500': process.env.MAX_SIZE,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
