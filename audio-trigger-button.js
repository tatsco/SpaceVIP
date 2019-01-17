let button = document.getElementById('audio-trigger-button');
let testVideoOne = document.getElementById('welcomeToSpace');
let testVideoTwo = document.getElementById('michaelJackson')

button.onClick = function() {
  console.log('button clicked');
  testVideoOne.play();
  testVideoTwo.play();
}
