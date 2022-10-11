let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hai Kak, ${ye}👋 
Jika Ingin Mendapatkan Script Diimz Bot
Silahkan Ambil Di Link Ini : ${github} 

Jangan Lupa Berikan Stars Nya Digithub Ya^^`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
