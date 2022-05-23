let handler = function (m) {
	this.sendContact(m.chat, '6281212303461', 'Owner XiaoWu-Bot', m)
}

handler.customPrefix = ['Owner XiaoWu-Bot'] 
handler.command = new RegExp

module.exports = handler