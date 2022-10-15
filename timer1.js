const process = require('process');

for (let i = 2; i < process.argv.length; i++) {
  if (!isNaN(process.argv[i]) && process.argv[i] > 0) {
    const timeout = process.argv[i] * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeout);
  }
};