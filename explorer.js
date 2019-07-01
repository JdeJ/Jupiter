const Jupiter = require('./jupiter');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const jupiter = new Jupiter();

console.log('Connecting to Jupiter explorer...')

readline.question(`Which area you want to inspect? (Number Number) `, (input) => {
  let [x, y] = input.trim().split(" ");
  x = Number(x);
  y = Number(y);
  if (jupiter.setGrid(x,y)) {
    readline.setPrompt('Which will be the initial position? (Number Number Direction) ');
    readline.prompt();
    readline.on('line', (input) => {
      let [x, y, face] = input.trim().split(" ");
      x = Number(x);
      y = Number(y);
      if (jupiter.setDirection(face) && jupiter.setPosition(x,y)) {
        readline.setPrompt('What do you want Jupiter do? (MMRLLLLMMRRMM or "exit" to leave) ');
        readline.prompt();
        readline.on('line', (input) => {
          let jupiterResponse = jupiter.task(input);
          if (jupiterResponse){
            console.log(jupiterResponse);
          } 
          if (input.toLowerCase().trim() === 'exit'){
            readline.close();
          } else {
            readline.prompt();
          }
        });
      }
    });
  }
});

readline.on('close', () => {
  console.error("Closing connection with Jupiter...");
});