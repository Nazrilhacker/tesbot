let fs = require('fs')
let handler = async (m, { conn }) => {
let wm = global.wm
let anu = `Prefix nya mana kak?`
conn.send2But(m.chat, anu, wm, 'Menu', '.menu', 'Owner', '.owner',m)
}
handler.customPrefix = /^(menu|help)$/i
handler.command = new RegExp

module.exports = handler
