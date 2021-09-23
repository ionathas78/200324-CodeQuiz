//  **  Declarations

var _clickListener;
var _topTenList;

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


function openAboutForm() {
    document.getElementById("aboutForm").style.display = "block";
}

function closeAboutForm() {
    document.getElementById("aboutForm").style.display = "none";
}
 
//  **  Event Handlers

//  Catches click events for the answer list
function clickEventHandler (event) {
    let targetElement = event.target;
    let targetClass = targetElement.className;
    let targetId = targetElement.id;
    
    if (targetId == "aboutLink") {
        event.preventDefault();
        openAboutForm();
    
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
