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

renderTopTen();

//  **  Logic

_clickListener = document.addEventListener("click", clickEventHandler);
