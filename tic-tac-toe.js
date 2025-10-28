// Gameboard Object

/*function Gameboard() {
    const fields = 9;
    const board = [];

/*    //Create cells based on field value (9)
    for (let i=0; i < fields; i++) {
        board[i].push(Cell(i));
    }; 
    return fields;
};*/

/* Cell Object
function Cell(number) {
    let value = number;
    return value;
};*/    
function playerCreator(name, token) {
    return {
        name: name,
        token: token,
        selector() {
            this.selection = prompt(`${name} picks a Number:`).toString;
        },
        winner() {
            winningNumbers = ["123", "456","789","147","258","369","159","753"];
            let sortedSelection = this.selection

            if (sortedSelection != undefined && sortedSelection != null) {

                sortedSelection = sortedSelection.split("").sort().join("");

                for (let i = 0; i < winningNumbers.length; i++) {
                    if (sortedSelection.includes(winningNumbers[i]) === true) {
                        this.isWinner(true);
                    }
                }
            }
        }
    }
}

// Gameflow Object
function gameLoop() {

    //Create players with creator
    let playerOne = playerCreator("playerOne", "X");
    let playerTwo = playerCreator("playerTwo", "O");
       
    // Create turn variable to count turns
    let turn = 1;

    //Gameloop
    do {
        if (playerOne.isWinner == true) {
            console.log("Player 1 wins");
        } else if (playerCreator.isWinner == true) {
            console.log("Player 2 wins");
        } else if (turn >=9) {
            console.log("Its a draw!");
        } else if (turn % 2 != 0) {
            playerOne.selector();
        } else {
            playerTwo.selector();
        }
        turn++;
        }
    while (turn < 9);
} 

gameLoop();




