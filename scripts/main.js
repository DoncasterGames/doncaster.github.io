let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/electric-orb.jpg') {
        myImage.setAttribute('src', 'images/orb-hand.jpg');
    } else {
        myImage.setAttribute('src', 'images/electric-orb.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');

    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Technology is cool, ' + myName;
    }
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Technology is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}