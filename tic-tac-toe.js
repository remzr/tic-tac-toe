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
function playerCreator(name, token, selection) {
    return {
        name: name,
        token: token,
        selection: selection + prompt(`${name} picks a Number:`),
        winner() {
            winningNumbers =  ["123", "456","789","147","258","369","159","753"];
            sortedSelection = selection.split("").sort().join("");
            console.log(sortedSelection);

            for (let i = 0; i < winningNumbers.length; i++) {
                if (sortedSelection.includes(winningNumbers[i]) === true) {
                    return(`${name} wins!`);
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
        if (playerOne.winner != undefined) {
            console.log(playerOne.winner);
        } else if (playerCreator.winner != undefined) {
            console.log(playerTwo.winner);
        } else if (turn >=9) {
            console.log("Its a draw!");
        } else if (turn % 2 != 0) {
            playerOne.selection;
        } else {
            playerTwo.selection;
        }
        turn++;
        }
    while (turn > 9);

} 

gameLoop();




