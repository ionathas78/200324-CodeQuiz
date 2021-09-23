//  **  Declarations
const _GAME_STARTTIME_SECONDS = 90;
const _BASE_QUESTIONSCORE = 1000;
const _TIME_SCOREPENALTY = 100;
const _CORRECT_TIMEBONUS = 2;
const _INCORRECT_TIMEPENALTY = 3;

const _1SECOND = 1000;

var _clickListener, _keydownListener;
var _questionArray = [];
var _questionIndex = -1;
var _correctCount = 0;
var _masterTimer = 0;
var _questionTimer = 0;

var _timerTag = document.getElementById("game-timer");

//  these and the functionList() function from the questionSet module.
var _questionName = _QUESTION_NAME;
var _choicePrefix = _CHOICE_PREFIX;
var _answerName = _ANSWER_NAME;


//
//  _masterTimer is the overall countdown clock for the entire session.
//  _questionTimer tracks the user's time for each question.
//
//  Score for a particular question begins at 1,000.
//      Each second reduces the question's score by 100.
//      On a correct answer, the user's score goes up by the remaining score.
//      On an incorrect answer, the user's score goes down by 1/2 the remaining score, to a minimum of zero.
//      That way, people get higher scores for answering quickly, but they also risk losing more points if they're wrong.
//

//  **  Functions

function main() {
    
    _questionArray = initQuestionList();
    console.log(_questionArray);

    debugger;

    _questionIndex++;
    renderQuestion(_questionIndex);

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

//  Sets up the list of questions to ask.
function initQuestionList () {
    var returnArray = [];

    var questions = questionList();

    var questionLength = questions.length;
    var indexArray = [];

    for (var i = 0; i < questionLength; i++) {
        indexArray.push(i);
    }

    indexArray = shuffleArray(indexArray);
        
    for (var j = 0; j < questionLength; j++) {
        returnArray.push(questions[indexArray[j]]);
    }

    return returnArray;
}

//  Redraws the screen and displays the question in targetIndex.
function renderQuestion (targetIndex) {
    var questionObject = _questionArray[targetIndex];

    clearAnswerList();

    var tagQuestion = document.getElementById("question-text");
    var listAnswers = document.getElementById("answer-list");
    var questionNumber = document.getElementById("question-number");

    var answerIndex = 0;
    var newAnswer = questionObject[_choicePrefix + answerIndex];

    tagQuestion.textContent = questionObject[_questionName];
    questionNumber.textContent = targetIndex + 1;

    while (newAnswer !== undefined) {
        if (newAnswer != "") {
            addListAnswer (newAnswer);
        }

        answerIndex++;
        newAnswer = questionObject[_choicePrefix + answerIndex];
    }
}

//  Given text, adds an answer to the bottom of the answer list.
function addListAnswer (answerText) {
    if ((answerText == "") || (answerText === null)) {
        return;
    }

    var newElement = document.createElement("li");
    var answerList = document.getElementById("answer-list");

    var newIndex = answerList.childElementCount;
    var idAnswer = _choicePrefix + newIndex;
    var classAnswer = "answer-item answer-item-";

    if (newIndex % 2) {
        //  Item is odd
        classAnswer += "odd";
    } else {
        //  Item is even
        classAnswer += "even";
    }
    
    newElement.id = idAnswer;
    newElement.className = classAnswer;
    newElement.textContent = newIndex + "  -  " + answerText;

    answerList.appendChild(newElement);
}

//  Completes the question with answer in userPick
function resolveAnswer(pickIndex) {
    var msgStatus = "Sorry, no.";

    if (isCorrectAnswer(pickIndex)) {
        _correctCount++;        
        msgStatus = "Correct!"
    } 
    _questionIndex++;

    renderQuestion(_questionIndex);
    displayStatus(msgStatus);
}

//  Returns true if passed index matches the current answer
function isCorrectAnswer(pickIndex) {
    var correctIndex = _questionArray[_questionIndex][_answerName];
    return (pickIndex == correctIndex);
}

//  Clears the answer list
function clearAnswerList () {
    var questionText = document.getElementById("question-text");
    var answerList = document.getElementById("answer-list");
    var tagStatus = document.getElementById("status-text");

    questionText.textContent = "  ";
    for (var i = answerList.childElementCount - 1; i > -1; i--) {
        answerList.removeChild(answerList.children[i]);
    }
    tagStatus.textContent = " ";
}

//  Displays the given status
function displayStatus (textToDisplay) {
    if (textToDisplay == "") {
        return;
    }

    var tagStatus = document.getElementById("status-text");
    tagStatus.textContent = textToDisplay;

    // Add intervalTimer
}

//  **  Fisher-Yates (aka Knuth) shuffle from https://github.com/Daplie/knuth-shuffle
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(targetArray) {
    var currentIndex = targetArray.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = targetArray[currentIndex];
      targetArray[currentIndex] = targetArray[randomIndex];
      targetArray[randomIndex] = temporaryValue;
    }

    return targetArray;
  }

//  **  Event Handlers

//  Catches click events for the answer list
function clickEventHandler (event) {
    var targetElement = event.target;
    var targetClass = targetElement.className;
    
    // alert("You clicked " + targetId);

    if (targetClass.indexOf("answer-item") > -1) {
        event.preventDefault();

        // alert("You picked " + targetElement.id);
        var pickIndex = targetElement.id.replace(_choicePrefix, "");
        resolveAnswer(pickIndex);
    }
}

//  Catches keydown events that match up with the answer list
function keydownEventHandler (event) {
    var keyPressed = event.key;
    var indexPressed = parseInt(keyPressed);
    var maxIndex = document.getElementById("answer-list").childElementCount - 1;

    // alert("You pressed " + keyPressed);
    
    if ((indexPressed > -1) && (indexPressed <= maxIndex)) {
        event.preventDefault();

        // alert("You picked answer" + indexPressed);
        resolveAnswer(indexPressed);
    } else {
        return;
    }
}

function secondsTimer () {
    _masterTimer--;
    _questionTimer++;

    let timerSeconds = _masterTimer % 60;
    if (timerSeconds.length = 1) {
        timerSeconds = "0" + timerSeconds;
    }

    let timerMinutes = Math.floor(_masterTimer / 60);
    if (timerMinutes.length = 1) {
        timerMinutes = "0" + timerMinutes;
    }

    _timerTag.textContent = timerSeconds + ":" + timerMinutes;
}

//  **  Logic

main();

_clickListener = document.addEventListener("click", clickEventHandler);
_keydownListener = document.addEventListener("keydown", keydownEventHandler);
