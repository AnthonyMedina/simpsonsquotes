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

(function () {
  var randQuo = document.getElementById('randQuo');
  var quote = document.getElementById('quote');
  var character = document.getElementById('character');
  var episode = document.getElementById('episode');

  newQuo(quotesArray, quote, character, episode);

  randQuo.addEventListener('click', function () {
    newQuo(quotesArray, quote, character, episode);
  });

  function newQuo(quotesArray, quote, character, episode) {
    var newQuote = quotesArray[randomGen(0, quotesArray.length - 1)];

    quote.innerText = newQuote.quote;
    character.innerText = '- ' + newQuote.character;
    episode.innerText = newQuote.episode;

    // twitter button
    let tweet = document.getElementById('tweet');
    let tweetText = 'https://twitter.com/intent/tweet?text=' + newQuote.quote + '%0D' + character.innerText + ', ' + newQuote.episode;
    tweet.setAttribute('href', tweetText);

    function randomGen(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

})();
