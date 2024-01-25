const myImage = document.querySelector("#question_mark");
let myDescription = document.querySelector("#image_text");

// Image and Word Description
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "question_img.png") {
        myImage.setAttribute("src", "rock_photo.png");
        myDescription.textContent = "Uhhh wait a second... that's not me??"
    } else if (mySrc === "rock_photo.png") {
        myImage.setAttribute("src", "self_portrait.png")
        myDescription.textContent = "Oh heyy, that's me!!"
    } else {
        myImage.setAttribute("src", "question_img.png")
        myDescription.textContent = "Click on the photo to see what I look like!"
    }
};
// Ask for name and Thank You Line
let myButton = document.querySelector("#name_button")
let myInput = document.querySelector("#user_name")
let myHeading = document.querySelector("#thank_you_line")

function setUserName(input) {
    if(!input){
        setUserName(input);
    } else {
        localStorage.setItem("name", input.value)
        myHeading.innerHTML = `Thank you <strong>${input.value}</strong> for taking a look at my website!`;

    }

}

myButton.onclick = () => {
    setUserName(myInput)
}

/*
Add the following condition block. We could call this initialization code,
as it structures the app when it first loads.
if (!localStorage.getItem("name")) { 
    setUserName(myInput);
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Thank you for taking a look at my website!, ${storedName}`;

}
*/




