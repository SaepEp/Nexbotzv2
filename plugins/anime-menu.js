let handler = async (m, { conn, command }) => {
	m.reply('_*Tunggu Bentar*_ 🐦')
  let api = `https://web-production-7c28.up.railway.app/api/wallpaper/${command}?apikey=APIKEY`
  //conn.sendButton(m.chat, 'iih wibu', author, api, [['lagii', `/${command}`]], m)  
conn.sendHydrated(m.chat, '*『 Random Anime 』*', `*${command}*`,'https://github.com/Yuri-Neko/', 'Github Dev', null, null, [
[`Next IMG`, `/${command}`]
], m)
}

handler.command = handler.help = [
'cosplay',
'shota',
'waifu',
'yotsuba',
'shinomiya',
'yumeko',
'tejina',
'chiho',
'boruto',
'kaori',
'shizuka',
'kaga',
'kotori',
'mikasa',
'akiyama',
'gremory',
'isuzu',
'shina',
'kagura',
'shinka',
'eba',
'elaina',
'erza',
'hinata',
'minato',
'naruto',
'sagiri',
'nezuko',
'rize',
'anna',
'deidara',
'yuki',
'anna',
'asuna',
'ayuzawa',
'chitoge',
'emilia',
'hestia',
'inori',
'itachi',
'madara',
'sakura',
'sasuke',
'tsunade',
'onepiece',
'bonekachucky',
'keneki',
'megumin',
'toukachan',
'akira',
'itori',
'kurumi',
'miku',
'pokemon'
]
handler.tags = ['anime']
handler.limit = 1
export default handler
