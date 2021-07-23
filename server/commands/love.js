exports.execute = (channel, userstate, userTo) => {
    let max = 100 + 1;
    let min = 0;

    let percentage = Math.round(Math.random() * (max - min) + min);

    if (userTo === undefined) {
        userTo = userstate.username;
    }

    let msg = `${userstate.username} quiere a ${userTo} un ${percentage}%`;

    return msg;
}