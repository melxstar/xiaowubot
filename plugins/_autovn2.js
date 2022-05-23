/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Anda Bukan Owner')
if (autovn === false) return m.reply('Auto VN Sudah Mati')
//if (autovn === false) return 
autovn = false
m.reply(`Success Deactivated Mode Auto Recording`)

}
handler.help = ['offvn']
handler.tags = ['info', 'main']

handler.command = /^(offv|offvn)$/i

module.exports = handler