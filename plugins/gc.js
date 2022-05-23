let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*JOIN KE GROUP XIAOWU-BOT*\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: '💌 › Group XiaoWu-Bot', description: "Group Utama XiaoWu-Bot", rowId:".gcbot1"},
        {title: '✉️ › Gruop Otaku Desu.', description: "Group Kedua", rowId:".gcbot2"},
        {title: '📧 › Group Aneh', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator XiaoWu-Bot", rowId:".owner"},
        {title: '🧿 › Info XiaoWu-Bot', description: "Info XiaoWu-Bot", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk XiaoWu-Bot", rowId:".donasi"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot|grupbot|botgrup)$/i
handler.help = ['gcbot', 'grupbot', 'botgrup']
module.exports = handler
