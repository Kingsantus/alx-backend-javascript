#!/usr/bin/node
// payment module that sum total and shipping Amount

const Utils = require('./utils');


function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
