const express = require('express');
const router = express.Router();

const { commands } = require('../index');
const { timers } = require('../index');

router.get('/status', (req, res) => {
    res.json({
        hello: commands.getHello(),
        love: commands.getLove(),
        promotion: commands.getPromotion(),
        gift: commands.getGift()
    });
});

router.get('/hello/activate',(req, res) => {
    commands.setHello(true);
    res.json({
        command: "hello",
        status: commands.getHello()
    });
});

router.get('/hello/deactivate', (req, res) => {
    commands.setHello(false);
    res.json({
        command: "hello",
        status: commands.getHello()
    });
});

router.get('/love/activate',(req, res) => {
    commands.setLove(true);
    res.json({
        command: "love",
        status: commands.getLove()
    });
});

router.get('/love/deactivate', (req, res) => {
    commands.setLove(false);
    res.json({
        command: "love",
        status: commands.getLove()
    });
});

router.get('/promotion/activate',(req, res) => {
    commands.setPromotion(true);
    res.json({
        command: "promotion",
        status: commands.getPromotion()
    });
});

router.get('/promotion/deactivate', (req, res) => {
    commands.setPromotion(false);
    res.json({
        command: "promotion",
        status: commands.getPromotion()
    });
});

router.get('/gift/activate',(req, res) => {
    commands.setGift(true);
    res.json({
        command: "gift",
        status: commands.getGift()
    });
});

router.get('/gift/deactivate', (req, res) => {
    commands.setGift(false);
    res.json({
        command: "gift",
        status: commands.getGift()
    });
});

router.get('/timer/ad/activate', (req, res) => {
    timers.setAd(true);
    res.json({
        timer: 'ad',
        status: timers.getAd()
    });
});

router.get('/timer/ad/deactivate', (req, res) => {
    timers.setAd(false);
    res.json({
        timer: 'ad',
        status: timers.getAd()
    });
});

module.exports = router;