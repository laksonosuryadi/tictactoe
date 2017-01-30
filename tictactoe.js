//Variables Declaration
var filled;
var content;
var turn = Math.round(Math.random()*10);
var theCanvas;
var c;
var ctx;
var canvasFilled = 0;
var q = 0 ;
var y;
var player1;
var player2;

var Announce1 = function(player1, symbol) {
    this.name = player1;
    this.symbol = symbol;
    this.isTheWinner = function isTheWinner(){
        return "Congrats "+this.symbol+" player, "+this.name+"! YOU WIN!!";
    }
}
var Announce2 = function(player2, symbol) {
    this.name = player2;
    this.symbol = symbol;
    this.isTheWinner = function isTheWinner(){
        return "Congrats "+this.symbol+" player, "+this.name+"! YOU WIN!!";
    }
}

function start(){
  player1 = prompt("Please input Player - X - Name: ");
  player2 = prompt("Please input Player - O - Name: ");
}

//Game Initialization
window.onload = function(){
    start();
    filled = [];
    content = [];
    for(var l = 0; l <= 8; l++){
        filled[l] = false;
		    content[l] = '';
	  }

    if(turn%2 === 0){
        document.getElementById("turn").innerHTML = player1 + " is X & gets the 1st Turn!";
    } else {
        document.getElementById("turn").innerHTML = player2 + " is O & gets the 1st Turn!";
    }
}; //END OF Game Initialization


//Game Mechanics
function canvasClicked(canvasNumber){
    theCanvas = "canvas" + canvasNumber;
    c = document.getElementById(theCanvas);
    ctx = c.getContext("2d");
    ctx.lineWidth = 6;

    if(filled[canvasNumber] === false && q === 0){
        if(turn%2 === 0){
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(15,15);
            ctx.lineTo(73,73);
            ctx.moveTo(73,15);
            ctx.lineTo(15,73);
            ctx.stroke();
            ctx.closePath();
            content[canvasNumber] = 'X';
        } else {
            ctx.strokeStyle = 'green';
            ctx.beginPath();
            ctx.arc(43,43,29,0,2*Math.PI,false);
            ctx.stroke();
            ctx.closePath();
            content[canvasNumber] = 'O';
        }

        turn++;
        filled[canvasNumber] = true;
        checkForWinner(content[canvasNumber]);
        canvasFilled++;


        if(turn%2 === 0){
            document.getElementById("turn").innerHTML = "Now is "+ player1 +"'s (X) Turn";
        } else {
            document.getElementById("turn").innerHTML = "Now is "+ player2 +"'s (O) Turn";
        }

        if(canvasFilled === 9 && q === 0){
            sayDraw();
        }

    } else if (filled[canvasNumber] === false && q === 1){
        if(filled[canvasNumber] === false){
            if(turn%2 === 0){
                alert("THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.");
            } else {
                alert("THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.");
            }
        }
    } else if(filled[canvasNumber] === true && q === 1){
          if(turn%2 === 0){
              alert("THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.");
          } else {
              alert("THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.");
          }
    } else if (filled[canvasNumber] === true && canvasFilled === 9){
        alert("THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.");
    } else {
        alert("That box is already occupied. Please TIC another box.");
    }
} //END OF function canvasClicked(canvasNumber)


//CANVAS ARRAY NUMBER TO CHECK THE WINNING COMBINATION:
//[0,1,2], [3,4,5], [6,7,8], [0,3,6]
//[1,4,7], [2,5,8], [0,4,8], [2,4,6]

function checkForWinner(symbol){
	if(content[0] == symbol && content[1] == symbol && content[2] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[3] == symbol && content[4] == symbol && content[5] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[6] == symbol && content[7] == symbol && content[8] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[0] == symbol && content[3] == symbol && content[6] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[1] == symbol && content[4] == symbol && content[7] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[2] == symbol && content[5] == symbol && content[8] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[0] == symbol && content[4] == symbol && content[8] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else if(content[2] == symbol && content[4] == symbol && content[6] == symbol){
	   sayWinner(symbol);
       document.getElementById("button").style.visibility="visible";
       q = 1;
	}
    else {
      return true;
    }
} //END OF function checkForWinner(symbol)


function sayWinner(symbol){
  var p1 = new Announce1 (player1, symbol);
  var p2 = new Announce2 (player2, symbol);
    if(symbol === "X"){
        document.getElementById("winnerX").innerHTML = p1.isTheWinner();
        document.getElementById("turn").style.visibility = "hidden";
    } else if (symbol === "O") {
        document.getElementById("winnerO").innerHTML = p2.isTheWinner();
        document.getElementById("turn").style.visibility = "hidden";
    }
} //END OF function sayWinner(symbol)


function sayDraw(){
     document.getElementById("button2").style.visibility = "visible";
     document.getElementById("turn").style.visibility = "hidden";
} //END OF function sayDraw()


function reset(){
	y = confirm("PLAY AGAIN? \n - Click CANCEL to End Game \n - Click OK to Restart Game" );
    if(y === true){
        alert("Now Loading...");
        location.reload(true);
    } else {
 	    alert("Thanks for playing! See you again!");
    }
} //END OF function reset()
