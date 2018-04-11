const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
[' ',' ',' '],
[' ',' ',' '],
[' ',' ',' ']
];

let displayBoard = ()=>{
for(let i=0; i < board.length; i++){
    let row = board[i]
    if(i < board.length-1){
      console.log(`${row[0]}|${row[1]}|${row[2]}`);
      console.log(`-----`);
    } else {
      console.log(`${row[0]}|${row[1]}|${row[2]}`);
    }
  }
};

let makeMove = ()=>{
  let col;
  let row;
  rl.question('What column, 1, 2, or 3? ', (col) => {
    rl.question('What row, 1, 2, or 3? ', (row) => {
      col = col - 1;
      row = row - 1;
      rl.close();
    })
  })
}

console.log('Tic Tac Toe');
displayBoard();
console.log('Player X Goes First');
makeMove();

