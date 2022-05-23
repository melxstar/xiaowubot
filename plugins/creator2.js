const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "StarXiue",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:StarXiue\nitem1.TEL;waid=6281212303461:6281212303462\nitem1.X-ABLabel:📍 Creator XiaoWu-Bot\nitem2.EMAIL;type=INTERNET:mzzack01@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | DKI JAKARTA\nitem5.X-ABLabel:──────[ StarXiue ]──────\nEND:VCARD"
  }, {
    "displayName": "XiaoMel",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:XiaoMel\nitem1.TEL;waid=6282157312489:6282157312489\nitem1.X-ABLabel:📍 Couple StarXiue\nitem2.EMAIL;type=INTERNET:melvie.puti@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawabarat\nitem5.X-ABLabel:────[ Melvie ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler
