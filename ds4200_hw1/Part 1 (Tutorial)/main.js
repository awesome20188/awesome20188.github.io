
const myImage = document.querySelector("img");

myImage.onclick = () => {

    const mySrc = myImage.getAttribute("src");
    if (mySrc === "firefox-icon.png") {
        myImage.setAttribute("src", "firefox2.png");
    } else {
        myImage.setAttribute("src", "firefox-icon.png");
    }

};

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1");
let myPicture = document.querySelector("h5")


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};






/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!")
})

let myVariable;

myVariable = "Bob";

/*
let myVariable = "Bob";
myVariable = "Steve";

let myVariable = 3;
myVariable === 4;
!(myVariable === 3);
myVariable !== 3;
*/

// This is a line comment as well.

/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert("Awww, but chocolate is my favorite...")

}
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;

}
*/






