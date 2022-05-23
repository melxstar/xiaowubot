/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Anda Bukan Owner')
if (autoon === true) return m.reply('Auto Online Sudah Aktif')
if (autoon === true) return 
autoon = true
m.reply(`Success Activated Mode Auto Online`)
 
}
handler.help = ['online']
handler.tags = ['info', 'main']

handler.command = /^(online|ononline)$/i

module.exports = handler