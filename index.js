// lu mau lihat apa babi? mau kelahi? ayok chat gw babi https://wa.me/6281354079196

console.log('Memulai..')
console.log('Menjalankan Server Di Port 36011..')
console.log('Status Server : OK')
console.log('Reading To Database..')

let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('XiaoWu-Bot', {
  font: 'tiny',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`'${package.name}' By @${package.author.name || package.author}\n XiaoWu-Bot ver 4.05\nRecode By XiaoWu`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
console.log('OK.. Menjalankan.. File index.js & main.js sedang di awasi XiaoWu-Bot ..')

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[✅ DI TERIMA]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('[❗] Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
