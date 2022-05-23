let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `contoh:\n${usedPrefix + command} belajar nodejs`
  let results = await yts(text)
  await m.reply(global.wait)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
💌 *Title :* ${v.title}
💻 *Url :* ${v.url}
⏰ *Durasi :* ${v.timestamp}
📤 *Diupload :* ${v.ago}
👥 *View :*${v.views} Penonton

      `.trim()
      case 'channel': return `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

🏮 *Name :* ${v.name}
💻 *Url :* ${v.url}
👥 *Subscriber :* ${v.subCountLabel} (${v.subCount}) Subscriber
🎥 *Video :* ${v.videoCount} video

`.trim()
    }
  }).filter(v => v).join('\n┄┈┈┈┈┈┈┈┈┈┈┄┈┈┈┈┈┈┈┈┈┈\n')
  conn.sendFile(m.chat, 'https://telegra.ph/file/26fab825b2a3cb2b97459.jpg', null, teks, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler