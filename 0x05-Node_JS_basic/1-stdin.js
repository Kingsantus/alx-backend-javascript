#!/usr/bin/node

// print out the message
process.stdout.write('Welcome to Holberton School, what is your name?\n')
process.stdin.on('data', (data) => {
    // printing out the data provided
    process.stdout.write('Your name is: ' + data.toString().trim() + '\n');
    // print out end of code
    process.stdout.write('This important software is now closing\n');
    // close the process
    process.exit();
});
