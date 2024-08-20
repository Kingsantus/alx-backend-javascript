#!/usr/bin/node

function displayMessage(msg) {
    process.stdout.write(msg + '\n');
}

process.exit()

module.exports = displayMessage;
