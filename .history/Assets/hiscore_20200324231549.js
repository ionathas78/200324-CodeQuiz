//  **  Declarations

const _LOCALSTORAGE_NAME = "topTenList";

var _clickListener;
var _topTenList;

function renderTopTen() {
    let topTen = localStorage.getItem(_LOCALSTORAGE_NAME);
    let arrayTopTen = JSON.parse(topTen);

    let topTenList = document.getElementById("top-ten-list");

    for (var i = 0; i < arrayTopTen.length; i++) {
        let listItem = arrayTopTen[i];
        let newItem = document.createElement("li");
        let newClass = "top-ten-item list-item-";
        
        if (i % 0) {
            //  i is even
            newClass += "even";
        } else {
            //  i is odd
            newClass += "odd";
        }

        newItem.className = newClass;
        newItem.innerHTML = '<span class="top-ten-left">' + listItem.name + '</span>' +
                    '<span class="top-ten-right">' + listItem.score + '</span>';
        topTenList.appendChild(newItem);
    }
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


//  **  Logic

_clickListener = document.addEventListener("click", clickEventHandler);
_keydownListener = document.addEventListener("keydown", keydownEventHandler);
