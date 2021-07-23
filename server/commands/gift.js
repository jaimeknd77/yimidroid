const regalos = [
    'un juguete para adultos',
    'mucho amor',
    'un dibujo de un culo',
    'la luna',
    'unos calcetines',
    'un chicle'
];

const respuestas = [
    'y no se lo ha tomado bien',
    'y no ha parado de usarlo',
    ', acabó en la basura',
    ', ¿este es tu ídolo?',
    'aunque parecía falso',
    'y ahora no se separa ni para dormir',
    'aunque ya tenía 3 más'
];

exports.execute = (channel, userstate, userTo) => {
    if (userTo === undefined) {
        userTo = userstate.username;
    }

    let regaloIndex = Math.ceil(Math.random() * (regalos.length)) - 1;
    let regalo = regalos[regaloIndex];

    let respuestaIndex = Math.ceil(Math.random() * (respuestas.length)) - 1;
    let respuesta = respuestas[respuestaIndex];

    let msg = `${userstate.username} ha regalado ${regalo} a ${userTo} ${respuesta}`;

    return msg;
}