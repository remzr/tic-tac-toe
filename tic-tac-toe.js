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


// Gameflow Object
function gameLoop() {
//    const fieldAmount = Gameboard();
    
    let userInput = 0;
    let turn = 0;

        for (let i = 1; i < 9; i++) {
        if (userInput == 123||
            userInput == 456||
            userInput == 789||
            userInput == 147||
            userInput == 258||
            userInput == 369||
            userInput == 159||
            userInput == 753){
            console.log("User wins:" + userInput);
        } else if (turn >= 9) {
            console.log("Draw");
        } else if (turn < 9) {
            let userNumber = prompt(`Enter a number ${turn}`);
            userInput = userInput + userNumber;
            turn++;
            console.log(turn + userNumber);
        } else {
            console.log("Error");
        }
    }
}

gameLoop();




