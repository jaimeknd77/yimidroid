const tmi = require('tmi.js');

const { commands } = require('./index');
const { timers } = require('./index');

// Commands
const hello = require('./commands/hello');
const love = require('./commands/love');
const promotion = require('./commands/promotion');
const gift = require('./commands/gift');

const yimiOptions = {
    identity: {
        username: 'jdeyimi',
        password: 'oauth:vs6w1n2z2lezrgw1lagho5zqpmkgv8'
    }
}

const options = {
    identity: {
        username: 'yimidroid',
        password: 'oauth:rgqvi4gsly6gcrl6qyv2qdtxwzzbjv'
    },
    channels: [
        'jdeyimi'
    ]
}
const yimi = new tmi.client(yimiOptions);
const client = new tmi.client(options);

yimi.connect();
client.connect();

client.on('connected', (address, port) => {
    console.log(`Conectado a ${address}:${port}`);
});

client.on('chat', (channel, userstate, message, self) => {
    if (self) {
        return;
    }

    const msg = message.trim();

    const commandName = msg.split(" ");

    let resp = '';

    if (hello.execute(msg) && commands.getHello()) {
        resp = `Bienvenido ${userstate.username}`;
    }

    if (commandName[0] === '!regalo' && commands.getGift()) {
        resp = gift.execute(channel, userstate, commandName[1]);
    }

    if (commandName[0] === '!amor' && commands.getLove()) {
        resp = love.execute(channel, userstate, commandName[1]);
    }

    if (commandName[0] === '!promo' && (userstate.mod || isYimi(userstate)) && !(commandName[1] === undefined) && commands.getPromotion()) {
        resp = promotion.execute(channel, commandName[1]);
    }

    if (resp != '') {
        client.say(channel, resp);
    }
});

// 30min = 1800000
setInterval(() => {
    if (timers.getAd()) {
        client.say('jdeyimi', 'Anuncio de 30s');
        yimi.say('jdeyimi', 'jdeyim1000IQ Gracias por el dinerito jeje jdeyim1000IQ');
        client.say('jdeyimi', '/commercial 30');
    }
}, 1800000);

/*
yimi.on('hosted', (channel, username, viewers, autohost) => {
    if (!autohost && viewers > 1) {
        client.say(channel, `${username} is now hosting with ${viewers} viewers`);
        yimi.say(channel, `¡Muchas gracias por el host ${username}!`);
        promotion(channel, username);
    }
});

client.on('raided', (channel, username, viewers) => {
    client.say(channel, `${username} has raided with ${viewers} viewers`);
    yimi.say(channel, `¡Muchas gracias por la raid ${username}! jdeyimBrasil jdeyimBrasil jdeyimBrasil jdeyimBrasil jdeyimBrasil`);
    promotion(channel, username);
});
*/

function isYimi(userstate) {
    return userstate.username === 'jdeyimi';
}

/*
 ¡Id al canal de @noa_nk8 con este enlace twitch.tv/noa_nk8 y dadle un follow enoooooorme! <3 <3 <3 Viene de jugar a VALORANT PogChamp PogChamp
 */

/*
jdeyim1000IQ jdeyimLetsgo jdeyimBrasil
 */