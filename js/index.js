//generate random colors
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  var col = getRandomColor();
  $("#colorpad").css("background-color", col);
  $("#colorpad").css("color", col);
  $("#butt").css("background-color", col);
  $("#butt1").css("background-color", col);
}

///////////end/////////////
var quotes = [
  'Life is what happens to you while you\'re looking at your smartphone.',
  'An emoji is worth 1,000 words.',
  'Beauty is in the eye of the executive producer',
  'Money can\'t buy happiness, but it can buy anti-depressants.',
  'You are what you download.',
  'The revolution will be Tweeted, Liked and Shared',
  'The send button is mightier than the sword.',
  'What doesn\'t kill you makes you wish it did.',
  'The grass is always greener when it\'s covered with money.',
  'If you don\'t have anything nice to say, then say something clever and devastating.',
  'Be nice to nerds, you may end up working for one.',
  'Failure is the condiment that gives success it\'s flavor',
  'It takes less time to do something right than explain why you did it wrong.'
];
function randomQuote(){
  var r = Math.floor((Math.random() * 13) + 0);
  document.getElementById("quote").innerHTML = quotes[r];
}
/////////////tweet//////////////
function tweetIt () {
  var phrase = document.getElementById('quote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase)+'.' + '&url=' +
    'https://codepen.io/lakshay761/full/vJOEXE/';
  window.open(tweetUrl);
}
/////////////////////////////
$("#butt").click(function(){
  setRandomColor();
  randomQuote();
});