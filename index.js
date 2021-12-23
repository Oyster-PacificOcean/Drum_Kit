// variable for number of buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// run for loop to access all the drums
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // get the HTML of the clicked object

    makeSound(buttonInnerHTML); // play sound once clicked
    buttonAmination(buttonInnerHTML); // play animation once clicked

  });

}

// play sound when the key is pressed
document.addEventListener("keypress", function(event) {

  makeSound(event.key); // make sound when the key is pressed
  buttonAmination(event.key); // play animation when the key is pressed

});

// function for playing sound
function makeSound(key) {

  // use switch to play sound based on specific key
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

// function for playing animation
function buttonAmination(currentKey) {

  // variable for active button based on the key
  var activeButton = document.querySelector("." + currentKey);

  // add "pressed" class to the active button
  activeButton.classList.add("pressed");

  // remove "pressed" class after 100 milliseconds
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
