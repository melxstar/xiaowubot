let handler = async (m, { conn, text }) => {
  let [teks, wm] = text.split`|`
  await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text: teks, wm: wm ? wm : conn.getName(m.sender) }, 'APIKEY'), 'file.jpg', 'Nih', m)
}
handler.help = ['quote'].map(v => v + 'maker <teks>|<wm>')
handler.tags = ['nulis', 'premium']
handler.command = /^quotemaker$/i

handler.limit = true
handler.premium = true
module.exports = handler
