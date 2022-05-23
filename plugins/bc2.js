let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
    const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `BROADCAST✔️`, 
    orderTitle: `Menu`,
    thumbnail: await (await fetch(fla + 'bc')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = (/bc|broadcast/i.test(text) ? text : text)
  for (let id of chats) conn.relayWAMessage(conn.prepareMessageFromContent(id, {
        "listMessage": {
          "title": `──────❏ *BROADCAST* ❏──────`.trim(),
          "description": content.trim(),
          "footerText": 
global.botdate,
          "buttonText": "Click Here !",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": `🎀 MY OWNER`,
                                         "description": "List Owner XiaoWu-Bot",
                                         "rowId": ".owner"
                                    }, {
                                         "title": `📛 ABOUT`,
                                         "description": "Tentang XiaoWu-Bot", 
                                         "rowId": ".info"
                                    }, {
                                         "title": `📮 LIST MENU`,
                                         "description": "List Menu XiaoWu-Bot",
                                         "rowId": ".menu"
                                    }, {
                                         "title": `🧿 SCRIPT`,
                                         "description": "Source code XiaoWu-Bot",
                                         "rowId": ".sc"
                                         }, {
                                         "title": `🌸 GROUP BOT`,
                                         "description": "List Group Official XiaoWu-Bot",
                                         "rowId": ".gcbot"
                                         }, {
                                         "title": "🗒️ INFO BOT ",
                                         "description": "Menampilkan Info  XiaoWu-Bot",
                                         "rowId": ".info"
                       }],
                                "title": global.wm
                  }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                      }
                     }, {quoted: ftroli}), {waitForAck: true})
  conn.reply(m.chat, `📨Mengirim pesan broadcast ke ${chats.length} chat...`, m)
}
handler.help = ['broadcastlist','bclist'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastlist|bclist)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)