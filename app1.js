
//let cells = document.querySelectorAll('.cell');

//cells.forEach(function(cell) {
//    cell.addEventListener("click", cellClicked);
//});

//function cellClicked(e) {

 //   e.target.textContent = "X";
    

//}


let cells = document.querySelectorAll(".row div");

console.log(cells);

for (let i = 0; i < cells.length; i++) {

   cells[i].addEventListener("click", cellClicked);
};

function cellClicked(event) {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "X";


}

//////////////////////////////////////////////////////
//not sure how to reset button




