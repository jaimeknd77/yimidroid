const tmi = require('tmi.js');

const yimiOptions = {
    identity: {
        username: 'jdeyimi',
        password: 'oauth:vs6w1n2z2lezrgw1lagho5zqpmkgv8'
    }
}

const yimi = new tmi.client(yimiOptions);
yimi.connect();

const options = {
    identity: {
        username: 'yimidroid',
        password: 'oauth:rgqvi4gsly6gcrl6qyv2qdtxwzzbjv'
    },
    channels: [
        'jdeyimi'
    ]
}

const client = new tmi.client(options);
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

    if (commandName[0] === '!regalo') {
        gift(channel, userstate, commandName[1]);
    }

    if (commandName[0] === '!amor') {
        love(channel, userstate, commandName[1]);
    }

    if (commandName[0] === '!promocion' && (userstate.mod || isYimi(userstate)) && !(commandName[1] === undefined)) {
        promotion(channel, commandName[1]);
    }

});

yimi.on('hosted', (channel, username, viewers, autohost) => {
    if(!autohost && viewers > 1) {
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

function isYimi(userstate) {
    return userstate.username === 'jdeyimi';
}

function love(channel, userstate, userTo) {
    let max = 100 + 1;
    let min = 0;

    let percentage = Math.round(Math.random() * (max - min) + min);

    if (userTo === undefined) {
        userTo = userstate.username;
    }

    let msg = `${userstate.username} quiere a ${userTo} un ${percentage}%`;

    client.say(channel, msg)
}

function gift(channel, userstate, userTo) {
    let regalos = [
        'un juguete para adultos',
        'mucho amor',
        'un dibujo de un culo',
        'la luna',
        'unos calcetines',
        'un chicle'
    ];
    let respuestas = [
        'y no se lo ha tomado bien',
        'y no ha parado de usarlo',
        ', acabó en la basura',
        ', ¿este es tu ídolo?',
        'aunque parecía falso',
        'y ahora no se separa ni para dormir',
        'aunque ya tenía 3 más'
    ];

    if (userTo === undefined) {
        userTo = userstate.username;
    }

    let regaloIndex = Math.ceil(Math.random() * (regalos.length)) - 1;
    let regalo = regalos[regaloIndex];

    let respuestaIndex = Math.ceil(Math.random() * (respuestas.length)) - 1;
    let respuesta = respuestas[respuestaIndex];

    let msg = `${userstate.username} ha regalado ${regalo} a ${userTo} ${respuesta}`;
    client.say(channel, msg);
}

function promotion(channel, username) {
    client.say(channel, `¡Id al canal de ${username} con este enlace twitch.tv/${username}!`);
}

/*
 ¡Id al canal de @noa_nk8 con este enlace twitch.tv/noa_nk8 y dadle un follow enoooooorme! <3 <3 <3 Viene de jugar a VALORANT PogChamp PogChamp
 */

/*
jdeyim1000IQ jdeyimLetsgo jdeyimBrasil
 */