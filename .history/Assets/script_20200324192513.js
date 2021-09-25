//  **  Declarations
const _GAME_STARTTIME_SECONDS = 60;
const _BASE_QUESTIONSCORE = 1000;
const _TIME_SCOREPENALTY = 100;
const _MIN_SCOREPENALTY = -250;
const _CORRECT_TIMEBONUS = 3;
const _INCORRECT_TIMEPENALTY = 5;

const _1SECOND = 1000;

var _clickListener, _keydownListener, _formClickListener, _formKeydownListener;
var _intervalTimer;

var _questionArray = [];
var _questionIndex = -1;
var _correctCount = 0;
var _userScore = 0;
var _masterTimer = _GAME_STARTTIME_SECONDS;
var _questionTimer = 0;

var _timerTag = document.getElementById("game-timer");
var _scoreTag = document.getElementById("game-score");

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
    let returnArray = [];

    let questions = questionList();

    let questionLength = questions.length;
    let indexArray = [];

    for (let i = 0; i < questionLength; i++) {
        indexArray.push(i);
    }

    indexArray = shuffleArray(indexArray);
        
    for (let j = 0; j < questionLength; j++) {
        returnArray.push(questions[indexArray[j]]);
    }

    return returnArray;
}

function endGame() {
    let msgEnd = "";

    let tagQuestion = document.getElementById("question-text");
    tagQuestion.textContent = "";
    clearAnswerList();

    //                  SCORE
    //                  XXXXX
    //
    //  --------------------------------------
    //  Congratulations! You scored xth place!
    //        User Name: ______________

}

//  Redraws the screen and displays the question in targetIndex.
function renderQuestion (targetIndex) {
    let questionObject = _questionArray[targetIndex];

    clearAnswerList();

    let tagQuestion = document.getElementById("question-text");
    let listAnswers = document.getElementById("answer-list");
    let questionNumber = document.getElementById("question-number");

    let answerIndex = 0;
    let newAnswer = questionObject[_choicePrefix + answerIndex];

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

    let newElement = document.createElement("li");
    let answerList = document.getElementById("answer-list");

    let newIndex = answerList.childElementCount;
    let idAnswer = _choicePrefix + newIndex;
    let classAnswer = "answer-item answer-item-";

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
    let msgStatus = "";

    let correctIndex = _questionArray[_questionIndex][_answerName];
    if (pickIndex == correctIndex) {
        applyCorrectAnswer();
        msgStatus = "Correct!";
    } else {
        applyWrongAnswer();
        msgStatus = "Sorry, no.";
    }

    _questionIndex++;

    renderQuestion(_questionIndex);
    displayStatus(msgStatus);

    _questionTimer = 0;
}

//  Modifies variables for score and count
function applyCorrectAnswer() {
    let questionScore = _BASE_QUESTIONSCORE - (_questionTimer * _TIME_SCOREPENALTY);
    if (questionScore > 0) {
        _userScore += questionScore;
    };

    _correctCount++;
    _masterTimer += _CORRECT_TIMEBONUS;
}

//  Modifies variables for score and count
function applyWrongAnswer() {
    let questionScore = Math.floor((_BASE_QUESTIONSCORE - (_questionTimer * _TIME_SCOREPENALTY)) * (-1/2))
    if (questionScore > _MIN_SCOREPENALTY) {
        questionScore = _MIN_SCOREPENALTY;
    }
    _userScore += questionScore;

    _masterTimer -= _INCORRECT_TIMEPENALTY;
}

//  Clears the answer list
function clearAnswerList () {
    let questionText = document.getElementById("question-text");
    let answerList = document.getElementById("answer-list");
    let tagStatus = document.getElementById("status-text");

    questionText.textContent = "  ";
    for (let i = answerList.childElementCount - 1; i > -1; i--) {
        answerList.removeChild(answerList.children[i]);
    }
    tagStatus.textContent = " ";
}

//  Displays the given status
function displayStatus (textToDisplay) {
    if (textToDisplay == "") {
        return;
    }

    let tagStatus = document.getElementById("status-text");
    tagStatus.textContent = textToDisplay;

    // Add intervalTimer
}

//  **  Fisher-Yates (aka Knuth) shuffle from https://github.com/Daplie/knuth-shuffle
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(targetArray) {
    let currentIndex = targetArray.length
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

  //  Set popup visibility
function openForm() {
    document.getElementById("popupForm").style.display="block";
}

  //  Set popup visibility
function closeForm() {
    document.getElementById("popupForm").style.display="none";
}
  
//  **  Event Handlers

//  Catches click events for the answer list
function clickEventHandler (event) {
    let targetElement = event.target;
    let targetClass = targetElement.className;
    let targetId = targetElement.id;
    
    // alert("You clicked " + targetId);

    if (targetClass.indexOf("answer-item") > -1) {
        event.preventDefault();

        // alert("You picked " + targetElement.id);
        let pickIndex = targetElement.id.replace(_choicePrefix, "");
        resolveAnswer(pickIndex);
    } else if (targetId == "closeButton") {
        closeForm();
    }
}

//  Catches keydown events that match up with the answer list
function keydownEventHandler (event) {
    let keyPressed = event.key;
    let indexPressed = parseInt(keyPressed);
    let maxIndex = document.getElementById("answer-list").childElementCount - 1;

    // alert("You pressed " + keyPressed);
    
    if ((indexPressed > -1) && (indexPressed <= maxIndex)) {
        event.preventDefault();

        // alert("You picked answer" + indexPressed);
        resolveAnswer(indexPressed);
    } else {
        return;
    }
}

function formKeydownHandler (event) {
    let codePressed = event.keyCode;
    if (codePressed == 15) {            //  Carriage Return
        event.preventDefault();
        closeForm();
    }
}

//  Counts down the master timer and up the question timer
function secondsTimer () {
    _masterTimer--;
    _questionTimer++;

    let timerSeconds = _masterTimer % 60;
    let stringSeconds = timerSeconds.toString();
    if (stringSeconds.length = 1) {
        stringSeconds = "0" + stringSeconds;
    }

    let timerMinutes = Math.floor(_masterTimer / 60);
    let stringMinutes = timerMinutes.toString();
    if (stringMinutes.length = 1) {
        stringMinutes = "0" + stringMinutes;
    }

    _timerTag.textContent = stringSeconds + ":" + stringMinutes;
    _scoreTag.textContent = _userScore;

    if (_masterTimer == 0) {
        clearInterval(_intervalTimer);
        endGame();
    }

    if (_masterTimer > 15) {
        _timerTag.style.color = "Black";
    } else {
        _timerTag.style.color = "Red";
    }
}

//  **  Logic

main();

_clickListener = document.addEventListener("click", clickEventHandler);
_keydownListener = document.addEventListener("keydown", keydownEventHandler);
_formClickListener = closeButton.addEventListener("click", closeForm);
_formKeydownListener = closeButton.addEventListener("keydown", formKeydownHandler);
_intervalTimer = setInterval(() => {secondsTimer();}, _1SECOND);