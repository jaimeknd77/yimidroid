class CommandActivation {

    constructor() {
        this.helloActivated = true;
        this.loveActivated = true;
        this.promotionActivated = true;
        this.giftActivated = true;
    }

    getHello() {
        return this.helloActivated;
    }

    setHello(activate) {
        this.helloActivated = activate;
    }

    getLove() {
        return this.loveActivated;
    }

    setLove(activate) {
        this.loveActivated = activate;
    }

    getPromotion() {
        return this.promotionActivated;
    }

    setPromotion(activate) {
        this.promotionActivated = activate;
    }

    getGift() {
        return this.giftActivated;
    }

    setGift(activate) {
        this.giftActivated = activate;
    }
}

const commands = new CommandActivation();
module.exports = commands;