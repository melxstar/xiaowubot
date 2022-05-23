/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/

let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Anda Bukan Owner')
if (autoketik === false) return m.reply('Auto Typing Sudah Mati')
//if (autoketik === false) return 
autoketik = false
m.reply(`Success Deactivated Mode Auto Typing`)

}
handler.help = ['offketik']
handler.tags = ['info', 'main']

handler.command = /^(offngetik|offk|offketik)$/i

module.exports = handler