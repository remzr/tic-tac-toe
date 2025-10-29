//Global gameboard array
let gameboard = [];

//Create gameboard and fill it with cells
function createGameboard() {
    let fields = 9;

    //Fill gameboard array with cell object
    for (let i = 0; i <= fields; i++) {
        let cell = {
            token: "",
            value: i,
            id: "cell" + i,
        };
        gameboard.push(cell);
    }
    populateGameboard();
}

//Populate gameboard with cells
function populateGameboard() {
    const gameCanvas = document.querySelector(".gameCanvas");

    if (setting = "first") {
        for (let i = 1; i < gameboard.length; i++) {
            gameCanvas.insertAdjacentHTML("beforeend", `<div class="cell" id="${gameboard[i].id}" value="${gameboard[i].value}">${gameboard[i].token}</div>`);
        }
    }
}

function playerCreator(name, token) {
    return {
        name: name,
        token: token,
        isWinner: false,
        selector() {
            this.selection = this.selection + prompt(`${name} picks a Number:`);
        },
        winner() {
            winningNumbers = ["123", "456","789","147","258","369","159","753"];
            let sortedSelection = this.selection

            if (sortedSelection != undefined && sortedSelection != null) {

                sortedSelection = sortedSelection.split("").sort().join("");

                for (let i = 0; i < winningNumbers.length; i++) {
                    if (sortedSelection.includes(winningNumbers[i]) === true) {
                        this.isWinner = true;
                    }
                }
            }
        }
    }
}

function gameLoop() {
    
    //Create gameboard
    createGameboard();

    //Create players with creator
    let playerOne = playerCreator("playerOne", "X");
    let playerTwo = playerCreator("playerTwo", "O");
       
    // Create turn variable to count turns
    let turn = 1;

    //Gameloop
    do {
        playerOne.winner();
        playerTwo.winner();

        if (playerOne.isWinner == true) {
            console.log("Player 1 wins");

        } else if (playerTwo.isWinner == true) {
            console.log("Player 2 wins");

        } else if (turn == 9) {
            console.log("Its a draw!");

        } else if (turn % 2 != 0) {
            playerOne.selector();
            console.log(playerOne.selection);

        } else {
            playerTwo.selector();
        }
        turn++;
        }
    while (turn <= 10);
} 

gameLoop();




