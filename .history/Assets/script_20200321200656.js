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

//  Given text, adds an answer to the bottom of the answer list.
function addListAnswer (answerText) {
    if ((answerText == "") || (answerText === null)) {
        return;
    }

    var newElement = document.createElement("li");
    var answerList = document.getElementById("answer-list");

    var newIndex = answerList.childElementCount + 1;
    newElement.id = "answer" + newIndex;
    newElement.textContent = answerText;
}

//  **  Event Handlers

//  Catches click events for the answer list
function clickEventHandler (event) {
    event.preventDefault();

    var targetElement = event.target;
    var targetClass = targetElement.class;
    
    // alert("You clicked " + targetId);

    if (targetClass.indexOf("answer-index") > -1) {
        alert("You picked " + targetId);
    }
}

//  Catches keydown events that match up with the answer list
function keydownEventHandler (event) {
    var keyPressed = event.key;
    var indexPressed = parseInt(keyPressed);
    var maxIndex = document.getElementById("answer-list").childElementCount;

    // alert("You pressed " + keyPressed);
    
    if ((indexPressed > 0) && (indexPressed <= maxIndex)) {
        event.preventDefault();

        alert("You picked answer" + indexPressed);

    } else {
        return;
    }

}

//  **  Logic

// main();

clickListener = document.addEventListener("click", clickEventHandler);
keydownListener = document.addEventListener("keydown", keydownEventHandler);
