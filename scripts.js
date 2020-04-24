const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}


// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  document.getElementById(id).innerHTML = currentMarker



  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));
  board[row][column] = currentMarker

  checkForWin()
}

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}


// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  const squares = document.getElementsByTagName("TD")

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}



const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"));
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"));
}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"));
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}