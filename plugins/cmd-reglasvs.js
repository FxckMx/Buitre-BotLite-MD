import fetch from 'node-fetch'

let handler = async (m, {conn, command }) =>{

let url = pack6 [Math.floor(Math.random() * pack6.length)]

conn.sendFile(m.chat, url ,m)

}

handler.help = ['reglasvs']

handler.tags = ['internet']

handler.command = /^(reglasvs)$/i

handler.exp = 50

export default handler

global.pack6 = [

 

 "https://a.top4top.io/p_26635g36o0.png"

  ]
