const saludos = [
    'hola',
    'holi',
    'hey',
    'buenos días'
];

exports.execute = (msg) => {
    for (let i=0; i<saludos.length; i++) {
        if (msg.includes(saludos[i])) {
            return true;
        }
    }

    return false;
}