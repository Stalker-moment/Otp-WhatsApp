const { WAConnection } = require('@adiwajshing/baileys')

async function checkNumber() {
    const conn = new WAConnection()
    await conn.connect()

    const number = '62812xxxxxx' // Ganti dengan nomor yang ingin dicek
    const isRegistered = await conn.isOnWhatsApp(number + '@s.whatsapp.net')

    console.log(isRegistered ? 'Nomor terdaftar di WhatsApp' : 'Nomor tidak terdaftar di WhatsApp')
}

checkNumber().catch(console.log)
