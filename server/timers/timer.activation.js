class TimerActivation {

    constructor() {
        this.adActivated = true;
    }

    getAd() {
        return this.adActivated;
    }

    setAd(activated) {
        this.adActivated = activated;
    }
}

const timers = new TimerActivation();
module.exports = timers;