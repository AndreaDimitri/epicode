const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nome;
rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  nome = answer;
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  console.log("Hai inserito "+nome);
  rl.close();
});



function CreatePrompt()
{
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

}
