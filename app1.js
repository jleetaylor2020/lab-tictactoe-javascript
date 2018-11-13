//STUCK, CANNOT FIGURE OUT HOW TO DECLARE A WINNER
//STUCK, CANNOT FIGURE OUT HOW TO RESET BOARD

//adding X and O

//let cells = document.querySelectorAll(".row div");

//console.log(cells);

//for (let i = 0; i < cells.length; i++) {

//   cells[i].addEventListener("click", cellClicked);
//};

//function cellClicked(event) {
//    event.target.style.backgroundColor = "blue";
  //  event.target.textContent = "X";
//}


// Possible WINNING combinations: 
// [0,1,2] [3,4,5] [6,7,8] 
//[0,3,6] [1,4,7] [2,5,8]
//[0,4,8] [2,4,6]

let winners = [0,1,2];

function loadAnswers()
 {
   winners.push([0,1,2]);
   winners.push([3,4,5]);
   winners.push([6,7,8]);
   winners.push([0,3,6]);
   winners.push([1,4,7]);
   winners.push([2,5,8]);
   winners.push([0,4,8]);
   winners.push([2,4,6]);
alert("Winner!");
}

// let player1Selections = new Array();
// let player2Selections = new Array();

$(document).ready(function() {
  let player1 = "X"; 
  let player2 = "O";

  let currentTurn = 1;
  let movesMade = 0;

  let cell = $(".cell");
    cell.on('click', function(e) {
        movesMade++;
        
        if (currentTurn === 1) {
            event.target.innerHTML = player1;
            event.target.style.color ="purple";
            currentTurn++;
            
        } else {
            event.target.innerHTML = player2;
            event.target.style.color = "red";
            currentTurn--;          
       
        }
   });

   
checkForWinner();
});

movesMade = 0

    function checkForWinner() {
        if(movesMade>4) {
            letmoves = Array.prototype.slice.call($(".cell"));
            let results = moves.map(function(cell) {
                return cell.innerHTML;
         
            });
            console.log(results)
         }
    }
  


//////////////////////////////////////////////////////
//not sure how to reset button




