let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/EueAK0p71i84ML004jd0j1

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'XiaoWu-Bot Groups')).buffer(), ext, '🎮 XiaoWu-Bot', 'Siap Star Xiue', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot1']
handler.tags = ['main']
handler.command = /^(gcbot1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
