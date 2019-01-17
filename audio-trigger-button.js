var button = document.getElementById('audio-trigger-button');
var testVideoOne = document.getElementById('welcomeToSpace');
var testVideoTwo = document.getElementById('michaelJackson')

button.onclick = function() {
  console.log('button clicked');
  testVideoOne.play();
  testVideoTwo.play();
}
