let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *OVO* : _088289338073_ (diutamakan)
║┊ ⌲ *DANA* : _088289338073_
║┊ ⌲ *GOPAY* : _088289338073_
║┊ ⌲ *INDOSAT* : _088289338073_
║┊ ⌲ *SMARTFREN* : _088289338073_
║┊ ⌲ *TRI3* : _089508025343_ (❌)
╰═ ┅ ═══════
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Payment')).buffer(), ext, `${wm}`, 'Nomor Owner', '.owner', 'Buy Premium', '.premium', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm