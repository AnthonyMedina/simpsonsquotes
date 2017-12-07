var quotesArray = [
  {
    quote: '\“I remember another gentle visitor from the heavens. Who came to earth... and then died... only to be brought back to life again. And his name was: E.T, the Extra-Terrestrial. I love that little guy.\”',
    character: 'Rev. Lovejoy',
    episode: 'The Springfield Files (S08E10)',
  },
  {
    quote: '\“Hi, Lisa!  Hi, Super Nintendo Chalmers! I\'m learn-ding.\”',
    character: 'Ralph Wiggum',
    episode: 'Lisa gets an "A" (S10E07)',
  },
  {
    quote: '\“Yup. They called me \‘Kid Gorgeous\’. Later on, it was \‘Kid Presentable\’. Then \‘Kid Gruesome\’. And finally, \‘Kid Moe\’.\”',
    character: 'Moe Szyslak',
    episode: 'The Homer They Fall (S08E03)',
  },
];

let randQuo = document.getElementById('randQuo');
let quote = document.getElementById('quote');
let character = document.getElementById('character');
let episode = document.getElementById('episode');
let tweet = document.getElementById('tweet');

// generate random quote on page load
(function () {
  newQuo(quotesArray);
})();

// generate new quote when button is clicked
randQuo.addEventListener('click', function () {
  newQuo(quotesArray);
});

// generate random number
function randomGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// set new elements to contain quote info
function newQuo(arr) {
  let newQuote = arr[randomGen(0, arr.length - 1)];
  quote.innerText = newQuote.quote;
  character.innerText = '- ' + newQuote.character;
  episode.innerText = newQuote.episode;

  setTweetContent();
}

// set tweet content to match random quote
function setTweetContent() {
  let tweetText = 'https://twitter.com/intent/tweet?text=' + quote.innerText
  + '%0D' + character.innerText + ', ' + episode.innerText;

  tweet.setAttribute('href', tweetText);
}
