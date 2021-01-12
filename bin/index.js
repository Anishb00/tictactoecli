#!/usr/bin/env node

const readline = require("readline");


// var func = () => {
//   var board =
//   var newturn = function () => {

//   }
//   console.log(board);
// }

var board = {
  turn: true,
  board: [[1, 2, 3], [4,5,6], [7,8,9]],
  placepiece: function(input) {
    input = Number(input);
    if(input) {
      for(var i = 0; i < this.board.length; i++) {
        for(var j = 0; j < this.board.length; j++) {
          if(input === this.board[i][j]) {
            if(this.turn) {
              this.board[i][j] = 'X';
            } else {
              this.board[i][j] = 'O';
            }
          }
        }
      }
      this.turn = !this.turn;
    }
    return `
    ${board.board[0][0]} | ${board.board[0][1]} | ${board.board[0][2]}
    ${board.board[1][0]} | ${board.board[1][1]} | ${board.board[1][2]}
    ${board.board[2][0]} | ${board.board[2][1]} | ${board.board[2][2]}
    `;
  },

  checkwin: () => {

  },
  checkvertical: () => {
    for(var i = 0; i < 3; i ++) {
      var xcounter = 0;
      var ocounter = 0;
      for(var j = 0; j < 3; j ++){
        if(this.board[j][i] === 'X'){
          xcounter++;
        }
        if(this.board[j][i] === 'O'){
          ocounter++;
        }
      }
      if(xcounter === 3) {
        return 'X';
      } else if (ocounter === 3) {
        return 'O';
      } else {
        return false;
      }
    }
  },
  checkhorizontal: () => {
    for(var i = 0; i < 3; i ++) {
      var xcounter = 0;
      var ocounter = 0;
      for(var j = 0; j < 3; j ++){
        if(this.board[i][j] === 'X'){
          xcounter++;
        }
        if(this.board[i][j] === 'O'){
          ocounter++;
        }
      }
      if(xcounter === 3) {
        return 'X';
      } else if (ocounter === 3) {
        return 'O';
      } else {
        return false;
      }
    }
  },
  // checkdiagonal: () => {

  // }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var startnextturn = () => {
  rl.question(`Select one of the numbers available on the board ${board.placepiece()}`, function(input) {
    var result = board.placepiece(input);
    console.log(result);
    if(typeof result !== 'boolean'){
      startnextturn();
    }
  });
}


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


// func();

startnextturn();

// rl.question("Where do you live ? ", function(country) {
//   console.log(`${name}, is a citizen of ${country}`);
//   rl.close();
// });