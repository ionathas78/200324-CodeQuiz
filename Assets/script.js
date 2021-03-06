//  **  Declarations
const _GAME_STARTTIME_SECONDS = 60;
// const _GAME_STARTTIME_SECONDS = 10;

const _BASE_QUESTIONSCORE = 1000;
const _TIME_SCOREPENALTY = 100;
const _MIN_SCOREPENALTY = -250;
const _CORRECT_TIMEBONUS = 1;
const _INCORRECT_TIMEPENALTY = 3;

const _1SECOND = 1000;
const _LOCALSTORAGE_NAME = "topTenList";

var _clickListener, _keydownListener
var _intervalTimer;
var _topTenList = [];

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


/*
  _masterTimer is the overall countdown clock for the entire session.
  _questionTimer tracks the user's time for each question.

  Score for a particular question begins at 1,000.
      Each second reduces the question's score by 100.
      On a correct answer, the user's score goes up by the remaining score.
      On an incorrect answer, the user's score goes down by 1/2 the remaining score, to a minimum of zero.
      That way, people get higher scores for answering quickly, but they also risk losing more points if they're wrong.
*/

//  **  Functions

// function main() {
    
    // console.log(_questionArray);

    // debugger;


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

// }

//  Initializes game variables and starts game clock.
function beginGame() {
    _questionArray = initQuestionList();

    _questionIndex = 0;
    _masterTimer = _GAME_STARTTIME_SECONDS;
    _correctCount = 0;
    _userScore = 0;
    _questionTimer = 0;

    renderQuestion(_questionIndex);
    _intervalTimer = setInterval(() => {secondsTimer();}, _1SECOND);
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

    openEndForm();

}

function initTopTen() {
    var defaultTopTen = [
        {name: "ZUL", score: 10000},
        {name: "KIL", score: 9000},
        {name: "EVE", score: 8000},
        {name: "JOB", score: 7000},
        {name: "HAM", score: 6000},
        {name: "DAN", score: 5000},
        {name: "RAM", score: 4000},
        {name: "ELI", score: 3000},
        {name: "ASA", score: 2000},
        {name: "LOT", score: 1000}
    ]
    var stringTopTen = JSON.stringify(defaultTopTen);
    localStorage.setItem(_LOCALSTORAGE_NAME, stringTopTen);

    return defaultTopTen;
}

function isInTopTen () {
    let returnValue = false;

    let topTen = localStorage.getItem(_LOCALSTORAGE_NAME);
    if (topTen === null) {
        topTen = initTopTen();
    }

    _topTenList = JSON.parse(topTen);

    if (_topTenList.length < 10) {
        returnValue = true;
    
    } else {
        for (var i = 0; i < _topTenList.length; i++) {
            let element = _topTenList[i];
            if (element.score < _userScore) {
                returnValue = true;
                break;
            }
        }
    }
    
    return returnValue;
}

function addToTopTen (userInitials) {
    let newHiScore = {name: userInitials, score: _userScore};
    let topTenToStore;

    _topTenList.push(newHiScore);

    _topTenList = _topTenList.sort(function(a, b) {return (b.score - a.score);});
    if (_topTenList.length > 10) {
        _topTenList.pop();
    }
    
    topTenToStore = JSON.stringify(_topTenList);
    localStorage.setItem(_LOCALSTORAGE_NAME, topTenToStore);
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

    if (_masterTimer > _INCORRECT_TIMEPENALTY) {
        _masterTimer -= _INCORRECT_TIMEPENALTY;
    } else {
        _masterTimer = 0;
    }
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

  //    Set popup visibility for start form
function openStartForm() {
    document.getElementById("startForm").style.display="block";
    
    document.getElementById("question-text").textContent = "";
    clearAnswerList();
}

function closeStartForm() {
    document.getElementById("startForm").style.display="none";
    beginGame();
}

function openAboutForm() {
    document.getElementById("aboutForm").style.display = "block";
}

function closeAboutForm() {
    document.getElementById("aboutForm").style.display = "none";
}

  //  Set popup visibility for end form
function openEndForm() {
    document.getElementById("endForm").style.display="block";
    document.getElementById("score-display").textContent = _userScore.toString();

    if (isInTopTen()) {
        document.getElementById("top-ten").style.display = "block";    
    } else {
        document.getElementById("top-ten").style.display = "none";
    }
}

  //  Set popup visibility for end form
function closeEndForm() {
    let userInitials = document.getElementById("initials").value
    if (userInitials !== null) {
        addToTopTen(userInitials);
    }
    document.getElementById("endForm").style.display="none";

    openStartForm();
}
  
//  **  Event Handlers

//  Catches click events for the answer list
function clickEventHandler (event) {
    let targetElement = event.target;
    let targetClass = targetElement.className;
    let targetId = targetElement.id;
    
    if (targetClass.indexOf("answer-item") > -1) {
        event.preventDefault();
        let pickIndex = targetElement.id.replace(_choicePrefix, "");
        resolveAnswer(pickIndex);

    } else if (targetId == "aboutLink") {
        event.preventDefault();
        openAboutForm();

    } else if (targetId == "closeButton") {
        event.preventDefault();
        closeEndForm();

    } else if (targetId == "startButton") {
        event.preventDefault();
        closeStartForm();

    } else if (targetId == "closeAboutButton") {
        event.preventDefault();
        closeAboutForm();
    }
}

//  Catches keydown events that match up with the answer list
function keydownEventHandler (event) {
    let keyPressed = event.key;
    let indexPressed = parseInt(keyPressed);
    let maxIndex = document.getElementById("answer-list").childElementCount - 1;

    if ((indexPressed > -1) && (indexPressed <= maxIndex)) {
        event.preventDefault();
        resolveAnswer(indexPressed);
        
    } else if ((event.target.id == "initials") && (event.keyCode == 15)) {           //  Carriage Return
        event.preventDefault();
        closeEndForm();        
        
    } else if (event.keyCode == 27) {           //  ESCape key
        if (document.getElementById("aboutForm").style.display != "none") {
            event.preventDefault();
            closeAboutForm();

        } else if (document.getElementById("endForm").style.display != "none") {
            event.preventDefault();
            closeEndForm();
        }
    }
}


//  Counts down the master timer and up the question timer
function secondsTimer () {
    if (_masterTimer > 0) {
        _masterTimer--;
        _questionTimer++;
    }

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

    if (_masterTimer <= 0) {
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

openStartForm();

_clickListener = document.addEventListener("click", clickEventHandler);
_keydownListener = document.addEventListener("keydown", keydownEventHandler);
