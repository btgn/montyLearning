const chalk = require('chalk');
const prompt = require('prompt');

console.log(chalk.cyan('PLease enter a number to find if it is even or not?'));

prompt.start();

function main() {
  sub();
}

function sub() {
  prompt.get(['number'], function(err, result) {
    if (result.number % 2 === 0) {
      console.log(chalk.green('It is an even number'));
    } else {
      console.log(chalk.red('It is an odd number'));
    }
    console.log('Do you want to Continue? (y/n)');
    prompt.get(['decision'], (err, res) => {
      if (res.decision === 'y') {
        main();
      }
    });
  });
}

main();
