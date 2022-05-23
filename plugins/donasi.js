let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Dana:* _081212303461_
│┝‷✧ *Shopee:* _081212303461_
│┝‷✧ *Pulsa:* _081212303461_
│┝‷✧ *Gopay:* _081212303461_
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6281212303461?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm