const { program } = require('commander');
program.version('0.0.1');

const cToF = () => {
  const cTemp = process.argv.slice(2)[1];
  const cToFahr = (cTemp * 9) / 5 + 32;
  const message = cTemp + '\xB0C is equal to ' + cToFahr.toFixed(2) + '\xB0F.';
  console.log(message);
  return message;
};

const fToC = () => {
  const fTemp = process.argv.slice(2)[1];
  const fToCel = ((fTemp - 32) * 5) / 9;
  const message = fTemp + '\xB0F is equal to ' + fToCel.toFixed(2) + '\xB0C.';
  console.log(message);
  return message;
};

program
  .command('cToF')
  .description('Convent from Celsius to Fahrenheit ')
  .action(cToF);
program
  .command('fToC')
  .description('Convent from Fahrenheit to  Celsius')
  .action(fToC);

program.parse();

module.exports = {
  cToF,
  fToC
};
