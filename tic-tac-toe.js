//Global gameboard array & turn guide
let gameboard = [];
let playerTurn = 1;

//Onclick function
function clickCell(value) {
    cellValue = value;

    switch (playerTurn) {
        case 1:
            playerOne.selector();
            break;
        case 2:
            playerTwo.selector();
            break;
    }
}

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
            gameCanvas.insertAdjacentHTML("beforeend", `<div class="cell" id="${gameboard[i].id}" value="${gameboard[i].value}" onclick="clickCell(${gameboard[i].value});">${gameboard[i].token}</div>`);
        }
    }
}

function playerCreator(name, token) {
    return {
        name: name,
        token: token,
        isWinner: false,
        selector() {
            
            
            //this.selection = this.selection + prompt(`${name} picks a Number:`);
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
    console.log(turn);

    if (turn = undefined) {
        //Create gameboard
        createGameboard();

        //Create players with creator
        let playerOne = playerCreator("playerOne", "X");
        let playerTwo = playerCreator("playerTwo", "O");
        
        // Create turn variable to count turns
        let turn = 1;
    }
}

gameLoop();




