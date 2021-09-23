//  **  Declarations

var clickListener, keydownListener;

//  **  Functions

function main() {
    

    // GIVEN I am taking a code quiz

    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question   -- setInterval() JA
    
    // WHEN I answer a question
    // THEN I am presented with another question                -- question Array JA
    
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock                   -- exciting effect JA
    
    // WHEN all questions are answered or the timer reaches 0   -- dynamic ending JA
    // THEN the game is over
    
    // WHEN the game is over
    // THEN I can save my initials and score                    -- localStorage JA

}

function addListItem () {

}

//  **  Event Handlers

function clickEventHandler (event) {
    event.preventDefault();

    var targetElement = event.target;
    var targetId = targetElement.id;

    alert("You clicked " + targetId);
}

function keydownEventHandler (event) {
    event.preventDefault();

    var keyPressed = event.key;

    alert("You pressed " + keyPressed);
    
}

//  **  Logic

// main();

clickListener = document.addEventListener("click", clickEventHandler);
keydownListener = document.addEventListener("keydown", keydownEventHandler);
