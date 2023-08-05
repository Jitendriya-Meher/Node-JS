
import chalk from 'chalk';

console.log("hello world!");
console.log(chalk.blue("Hello world!"));
console.log(chalk.red("i am awesome"));

console.log(chalk.green.underline("Hello world!"));

console.log(chalk.blue.inverse("Hello world!"));

console.log(chalk.green.inverse("success!"));


// validator

import validator from 'validator';

const isMail = validator.isEmail('foo@bar.com');

console.log("isValid : ", isMail ? chalk.green.inverse(isMail) : chalk.red.inverse(isMail));