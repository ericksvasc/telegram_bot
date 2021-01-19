const { Telegraf } = require('telegraf')

const bot = new Telegraf('1590039111:AAHnZvfsizJqQxEqwh_HaOs7w3YdbbfHJfg')

bot.command('final', (c) => {
  c.deleteMessage()
  c.reply('Finalizando sessão')
})
bot.command('start', (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, `
Olá, tudo bem? Esperamos que sim!!
Seja bem-vindo ao Camping Tiradentes😁😁

<b>Como podemos te ajudar?</b>
`, {
  parse_mode: 'HTML',
  reply_markup: {
    inline_keyboard: [
      [{text: "Fazer uma reserva", callback_data: 'FR'}],
      [{text:'Tirar algumas duvidas', callback_data: 'TD'}],
      [{text: 'Falar com um atendente', callback_data: 'FalarAtendente'}]
    ]
  }
})
})
bot.action('FalarAtendente', (c) => {
  c.deleteMessage()
  c.telegram.sendMessage(c.chat.id, '<b>Aguarde que já iremos atender você</b>', {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{text: 'Voltar  ⏪', callback_data: 'VMP'}]
      ]
    }
  })
})
bot.action('FR', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, `
<b>Segue o link abaixo para fazer a reserva:</b>
https://docs.google.reserva.com
  `, {parse_mode: 'HTML', reply_markup: {inline_keyboard: [[{text: 'voltar ao menu principal', callback_data: "VMP"}]]}})
})
bot.action('VMP', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, `
Olá, tudo bem? Esperamos que sim!!
Seja bem-vindo ao Camping Tiradentes😁😁

<b>Como podemos te ajudar?</b>
`, {
  parse_mode: 'HTML',
  reply_markup: {
    inline_keyboard: [
      [{text: "Fazer uma reserva", callback_data: 'FR'}],
      [{text:'tirar algumas duvidas', callback_data: 'TD'}],
      [{text: 'Falar com um atendente', callback_data: 'FalarAtendente'}]
    ]
  }
})
})

bot.action('TD', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, 'Sobre o que é a sua duvida', {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{text: 'Valores', callback_data: 'Valores'}],
        [{text: 'Estrutura', callback_data: 'Estrutura'}],
        [{text: 'wifi', callback_data: 'Wifi'}],
        [{text: 'Voltar  ⏪', callback_data: 'VMP'}]
      ]
    }
  })
})
bot.action('Valores', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, `

<b>Em baixa temporada:</b>

R$30,00 por pessoa e mais a taxa de estaciomento do veiculo que é:
R$5,00 para motos
R$10,00 para carros
R$20 para RV(Motorhome, Kombihome e etc)

<b>Em alta temporada:</b>

R$50,00 por pessoa e a partir de duas diarias a taxa de estaciomento é inclusa.
  `, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{text: 'Voltar  ⏪', callback_data: 'TD'}]
      ]
    }
  })
})
bot.action('Estrutura', (ctx) => {
  ctx.deleteMessage()
  ctx.telegram.sendMessage(ctx.chat.id, `
<b>Somos totalmente estruturados:</b>

temos pontos de agua e energia no camping inteiro, mais de 3 banheiros com sanitarios e agua quente, piscina para ultilização( mas em periodo de pandemia apenas com reserva ) e temos um amplo espaço.

<i>Qualquer duvida é so mandar aqui que ja te respondemos.</i>
  `, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{text: 'Voltar  ⏪', callback_data: 'TD'}]
      ]
    }
  })
})
bot.action('Wifi', (c) => {
  c.deleteMessage()
  c.telegram.sendMessage(c.chat.id,`
<b>Seque abaixo todas nossas senhas dos wifi´s</b>

<b>Camping Tiradentes Bar: </b>ctb33552828
<b>Camping Tiradentes Portaria: </b>ctp33552828
<b>Camping Tiradentes Quartos: </b>ctq33552828  
`, {
  parse_mode: 'HTML',
  reply_markup: {
    inline_keyboard: [
      [{text: 'Voltar  ⏪', callback_data: 'TD'}]
    ]
  }
})
})









bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})



bot.launch()
